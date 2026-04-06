const TOKEN_URL = 'https://github.com/login/oauth/access_token';
const STATE_COOKIE = 'decap_oauth_state';

function baseUrl(requestUrl) {
  const url = new URL(requestUrl);
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

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expectedState = getCookie(request, STATE_COOKIE);
  const siteUrl = baseUrl(request.url);

  if (!code) {
    return callbackPage({ siteUrl, error: 'Missing GitHub authorization code.' });
  }

  if (!state || !expectedState || state !== expectedState) {
    return callbackPage({ siteUrl, error: 'Invalid or expired OAuth state.' });
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return callbackPage({ siteUrl, error: 'GitHub OAuth secrets are not configured.' });
  }

  const redirectUri = `${siteUrl}/api/callback`;
  const tokenResponse = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
      state,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    const error = tokenData.error_description || tokenData.error || 'GitHub token exchange failed.';
    return callbackPage({ siteUrl, error });
  }

  return callbackPage({
    siteUrl,
    payload: {
      token: tokenData.access_token,
      provider: 'github',
    },
  });
}
