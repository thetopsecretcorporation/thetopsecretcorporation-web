# Research publishing workflow

## Recommended model

Use **markdown-first research reports** stored in `src/content/researchReports/` and managed through Decap CMS.

This gives Albert a simple writing surface while keeping the site responsible for presentation.

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

Drafts should stay out of the public archive until `draft: false`.

## Current implementation notes

- New markdown-backed research report collection under `src/content/researchReports/`
- Draft support
- New report page template at `/research/reports/{slug}/`
- Archive merges new markdown reports with legacy static HTML reports already in `public/research/reports/`
- Rich-content helper classes are available for optional inline HTML blocks

## Recommended publishing workflow

1. Albert creates a new report in Decap CMS
2. Albert writes the report in markdown
3. If needed, Albert drops in small HTML blocks for scorecards or comparisons
4. Report stays in draft until ready
5. Publish by turning draft off and saving
6. Site build deploys the new report automatically into the archive

## Why this is the right trade-off

This approach is:

- simple for Boss
- flexible for Albert
- easy to maintain technically
- much less brittle than building a deeply structured research CMS too early

## Future upgrades if needed

If Albert starts producing the same advanced blocks repeatedly, we can later add MDX components or a few custom editor widgets.

Do **not** start there. Markdown-first is the better next phase.
