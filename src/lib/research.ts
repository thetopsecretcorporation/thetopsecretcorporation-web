import fs from 'node:fs';
import path from 'node:path';

export type ResearchReport = {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  displayDate: string;
  author: string;
  source: 'legacy-html' | 'markdown';
  tags?: string[];
};

const reportsDir = path.join(process.cwd(), 'public', 'research', 'reports');

function decodeEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function stripTags(value: string) {
  return decodeEntities(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function getMeta(html: string, name: string) {
  const regex = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i');
  const reverseRegex = new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*name=["']${name}["'][^>]*>`, 'i');
  return html.match(regex)?.[1]?.trim() ?? html.match(reverseRegex)?.[1]?.trim() ?? '';
}

function getFirstMatch(html: string, regexes: RegExp[]) {
  for (const regex of regexes) {
    const match = html.match(regex)?.[1]?.trim();
    if (match) return stripTags(match);
  }

  return '';
}

function stripExtension(fileName: string) {
  return fileName.replace(/\.html$/i, '');
}

function formatDisplayDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(parsed);
}

export function getLegacyResearchReports(): ResearchReport[] {
  if (!fs.existsSync(reportsDir)) return [];

  return fs
    .readdirSync(reportsDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => {
      const html = fs.readFileSync(path.join(reportsDir, file), 'utf8');
      const slug = stripExtension(file);
      const date = getMeta(html, 'research-date') || file.slice(0, 10);
      const title = stripTags(getMeta(html, 'research-title') || html.match(/<title>(.*?)<\/title>/i)?.[1] || slug);
      const description =
        getMeta(html, 'research-summary') ||
        getMeta(html, 'description') ||
        getFirstMatch(html, [/class=["']hero-kicker["'][^>]*>([\s\S]*?)<\/p>/i, /<main[^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i]) ||
        'Research report from The Top Secret Corporation.';
      const author =
        getMeta(html, 'research-author') ||
        getFirstMatch(html, [/>By\s+([^<]+)</i, /class=["']chip["'][^>]*>By\s+([^<]+)<\/div>/i]) ||
        'The Top Secret Corporation';

      return {
        slug,
        href: `/research/reports/${slug}.html`,
        title,
        description,
        date,
        displayDate: formatDisplayDate(date),
        author: author.startsWith('By ') ? author : `By ${author}`,
        source: 'legacy-html',
        tags: [],
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
}
