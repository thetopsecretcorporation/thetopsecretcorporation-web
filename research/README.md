# Research archive

This site now includes a generated research archive at `/research/`.

## How to add a new research report

1. Drop the finished HTML file into `research/reports/`.
2. Name the file like this:

   `YYYY-MM-DD-short-report-name.html`

   Example:

   `2026-04-18-agent-workflow-benchmarks.html`

3. Add these meta tags in the `<head>` of the report when possible:

   ```html
   <meta name="description" content="One-sentence summary for the archive card." />
   <meta name="research-title" content="Readable report title" />
   <meta name="research-date" content="2026-04-18" />
   <meta name="research-author" content="Albert" />
   <meta name="research-summary" content="Optional archive summary override." />
   ```

   Only `research-date` and a sensible filename are truly important, but adding all of them makes the archive cleaner.

4. Rebuild the archive page:

   ```bash
   node scripts/build-research-archive.mjs
   ```

5. Commit the new HTML report and the regenerated `research/index.html`.

## How ordering works

- Reports are sorted newest to oldest.
- The build script uses `<meta name="research-date">` first.
- If that tag is missing, it falls back to the `YYYY-MM-DD` date in the filename.

## Notes

- The site is a plain static site, so the archive page is generated ahead of time.
- No manual editing of `research/index.html` should be needed after setup.
