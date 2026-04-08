# The Top Secret Corporation website

Astro-based production website for The Top Secret Corporation.

## Current scope
- Astro static site foundation
- Shared layout, nav, footer, and global styling
- Homepage rendered from JSON content
- Research archive rendered from legacy static report metadata plus markdown-backed reports
- Existing report URLs preserved under `/research/reports/`
- Decap CMS mounted at `/admin`
- GitHub OAuth flow for Decap CMS on Cloudflare Pages
- Cloudflare Pages deployment workflow scaffolded in GitHub Actions

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Content model
- `src/content/site/settings.json`
- `src/content/site/home.json`
- `src/content/site/research.json`
- `src/content/researchReports/*.md`

## Deployment
- Cloudflare Pages project: `thetopsecretcorporation-web`
- Production deploys from `.github/workflows/deploy.yml`
- Required GitHub repository secrets:
  - `CF_API_TOKEN`
  - `CF_ACCOUNT_ID`

Until those secrets are added, production can still be deployed manually with:

```bash
npm ci
npm run build
wrangler pages deploy dist --project-name=thetopsecretcorporation-web
```

`npm run build` runs Astro and then copies the Cloudflare Pages worker to `dist/_worker.js` so `/api/auth` and `/api/callback` are deployed with the static site.

## CMS
- Decap config lives at `public/admin/config.yml`
- The admin entrypoint lives at `src/pages/admin/index.astro`
- Cloudflare Pages OAuth handler source lives at `workers/pages-oauth-worker.js`
- Standalone Pages Functions versions of the auth handlers live in `functions/api/`
- The CMS intentionally uses Decap's simple workflow: saves from `/admin` commit directly to `main`, and production publishes from `main`
- For a live research-report fix, open the report in `/admin`, leave `draft` off, and click **Save**
