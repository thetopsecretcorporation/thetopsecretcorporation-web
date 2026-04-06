import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8')) as T;
}

export const siteSettings = readJson<any>('src/content/site/settings.json');
export const homeContent = readJson<any>('src/content/site/home.json');
export const researchContent = readJson<any>('src/content/site/research.json');

export function getPrimaryNav() {
  return [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Initiatives', href: '/#initiatives' },
    { label: 'Agents', href: '/#agents' },
    { label: 'Research', href: '/research/' },
    { label: 'X', href: siteSettings.social.x, external: true },
    { label: 'Contact', href: '/#contact', cta: true },
  ];
}
