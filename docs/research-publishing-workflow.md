# Research publishing workflow

## Recommended model

Use **markdown-first research reports** stored in `src/content/researchReports/` and managed through Decap CMS.

This gives Albert a simple writing surface while keeping the site responsible for presentation.

## Important workflow rule

The CMS now uses Decap's **simple workflow** on purpose.

That means:

- edits from `/admin` commit directly to `main`
- production deploys from `main`
- for an already-live report, **Save** is the normal way to publish a correction
- there is no separate `cms/...` editorial branch to merge later

This is the safer workflow for Boss's quick typo/content fixes because what he saves is what the live site deploys.

## What Albert should produce

Albert should only need to provide:

- `title`
- `summary`
- `publishDate`
- optional `tags`
- the report body in markdown
- optional inline HTML blocks when a report needs richer visual structure

That means Albert can write naturally instead of forcing every insight into rigid CMS buckets.

## What the site / CMS should handle automatically

The site should handle:

- archive listing cards
- sorting newest to oldest
- consistent page layout
- typography and spacing
- byline display
- date formatting
- canonical page URL generation
- styling for common rich content blocks

## Rich content rule

Default to markdown.

Only use inline HTML when the report needs something markdown alone does not express cleanly, such as:

- scorecards
- side-by-side comparisons
- emphasized callouts
- lightweight custom layout blocks

This keeps the default workflow simple while still giving Albert room to make stronger reports.

## Admin portal behavior

The Decap admin should have:

- Site settings
- Homepage content
- Research archive settings
- Research reports

For research reports, editors should create a new markdown file, fill in a few top-level fields, then write the body.

Drafts stay out of the public archive while `draft: true`.

### Boss quick-edit rule

When Boss is fixing a mistake on an existing report:

1. Open `/admin`
2. Open the report under **Research reports**
3. Make the correction
4. Make sure **Draft** is **off**
5. Click **Save**
6. Wait for the normal production deploy from `main`

That is now the intended publish path.

## Current implementation notes

- New markdown-backed research report collection under `src/content/researchReports/`
- Draft support
- New report page template at `/research/reports/{slug}/`
- Archive merges new markdown reports with legacy static HTML reports already in `public/research/reports/`
- Rich-content helper classes are available for optional inline HTML blocks

## Recommended publishing workflow

### For quick fixes to an existing live report

1. Open the report in Decap CMS
2. Edit the needed text
3. Leave `draft` off
4. Save
5. The commit lands on `main`
6. The production deploy publishes the change

### For a brand-new report that should stay hidden until ready

1. Create the report in Decap CMS
2. Write the report in markdown
3. Keep `draft: true` while it should stay hidden
4. When ready to publish, turn `draft` off and save
5. The commit lands on `main`
6. The production deploy adds it to the public archive

## Why this is the right trade-off

This approach is:

- simple for Boss
- flexible for Albert
- easy to maintain technically
- aligned with the actual production branch (`main`)
- much less brittle than building a deeply structured research CMS too early

## Future upgrades if needed

If Albert starts producing the same advanced blocks repeatedly, we can later add MDX components or a few custom editor widgets.

Do **not** start there. Markdown-first is the better next phase.
