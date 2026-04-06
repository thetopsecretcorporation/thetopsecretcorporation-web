const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const STATE_COOKIE = 'decap_oauth_state';
const STATE_TTL_SECONDS = 600;

function baseUrl(requestUrl) {
  const url = new URL(requestUrl);
  return `${url.protocol}//${url.host}`;
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function randomState() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider') || 'github';

  if (provider !== 'github') {
    return html('<h1>Unsupported auth provider</h1>', 400);
  }

  if (!env.GITHUB_CLIENT_ID) {
    return html('<h1>Missing GITHUB_CLIENT_ID</h1>', 500);
  }

  const origin = baseUrl(request.url);
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
