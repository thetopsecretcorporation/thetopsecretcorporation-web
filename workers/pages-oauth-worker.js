const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const STATE_COOKIE = 'decap_oauth_state';
const STATE_TTL_SECONDS = 600;

function originFrom(url) {
  return `${url.protocol}//${url.host}`;
}

function escapeForScript(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = cookieHeader.split(/;\s*/).filter(Boolean);

  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = cookie.slice(0, separatorIndex);
    const value = cookie.slice(separatorIndex + 1);
    if (key === name) return value;
  }

  return null;
}

function randomState() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function callbackPage({ siteUrl, payload, error }) {
  const script = error
    ? `
      (function () {
        const targetOrigin = ${escapeForScript(siteUrl)};
        const message = 'authorization:github:error:' + ${escapeForScript(error)};
        if (window.opener) {
          window.opener.postMessage(message, targetOrigin);
        }
        window.close();
      })();
    `
    : `
      (function () {
        const targetOrigin = ${escapeForScript(siteUrl)};
        const payload = ${escapeForScript(JSON.stringify(payload))};
        if (window.opener) {
          window.opener.postMessage('authorizing:github', targetOrigin);
          setTimeout(function () {
            window.opener.postMessage('authorization:github:success:' + payload, targetOrigin);
            window.close();
          }, 100);
        }
      })();
    `;

  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Completing GitHub login…</title>
  </head>
  <body>
    <p>${error ? 'Authentication failed.' : 'Authentication complete. You can close this window.'}</p>
    <script>${script}</script>
  </body>
</html>`,
    {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'set-cookie': `${STATE_COOKIE}=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
      },
    },
  );
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider') || 'github';

  if (provider !== 'github') {
    return new Response('Unsupported auth provider', { status: 400 });
  }

  if (!env.GITHUB_CLIENT_ID) {
    return new Response('Missing GITHUB_CLIENT_ID', { status: 500 });
  }

  const origin = originFrom(url);
  const state = randomState();
  const redirectUri = `${origin}/api/callback`;
  const githubUrl = new URL(GITHUB_AUTHORIZE_URL);

  githubUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  githubUrl.searchParams.set('redirect_uri', redirectUri);
  githubUrl.searchParams.set('scope', url.searchParams.get('scope') || 'repo');
  githubUrl.searchParams.set('state', state);

  return new Response(null, {
    status: 302,
    headers: {
      location: githubUrl.toString(),
      'set-cookie': `${STATE_COOKIE}=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=${STATE_TTL_SECONDS}`,
      'cache-control': 'no-store',
    },
  });
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expectedState = getCookie(request, STATE_COOKIE);
  const siteUrl = originFrom(url);

  if (!code) {
    return callbackPage({ siteUrl, error: 'Missing GitHub authorization code.' });
  }

  if (!state || !expectedState || state !== expectedState) {
    return callbackPage({ siteUrl, error: 'Invalid or expired OAuth state.' });
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return callbackPage({ siteUrl, error: 'GitHub OAuth secrets are not configured.' });
  }

  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${siteUrl}/api/callback`,
      state,
    }),
  });

  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    return callbackPage({
      siteUrl,
      error: tokenData.error_description || tokenData.error || 'GitHub token exchange failed.',
    });
  }

  return callbackPage({
    siteUrl,
    payload: {
      token: tokenData.access_token,
      provider: 'github',
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/api/auth') {
      return handleAuth(request, env);
    }

    if (request.method === 'GET' && url.pathname === '/api/callback') {
      return handleCallback(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
