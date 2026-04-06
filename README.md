# The Top Secret Corporation website

Astro-based production website for The Top Secret Corporation.

## Current scope
- Astro static site foundation
- Shared layout, nav, footer, and global styling
- Homepage rendered from JSON content
- Research archive rendered from static report metadata
- Existing report URLs preserved under `/research/reports/`
- Decap CMS mounted at `/admin`
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

## CMS
Initial Decap config lives at `public/admin/config.yml`.

Production auth still needs the final GitHub/Decap OAuth setup before `/admin` can be used live on Cloudflare Pages.
