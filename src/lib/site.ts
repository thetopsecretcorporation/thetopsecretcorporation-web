import fs from 'node:fs';
import path from 'node:path';

type Link = {
  label: string;
  href: string;
};

type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    kicker: string;
    body: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    panelChip: string;
  };
  initiatives: {
    eyebrow: string;
    title: string;
    body: string;
    cta: Link;
    items: Array<{
      title: string;
      body: string;
      clearance: string;
      thumbClass: string;
    }>;
  };
  agents: {
    eyebrow: string;
    title: string;
    body: string;
    cta: Link;
    items: Array<{
      name: string;
      body: string;
      meta: string;
      photoClass: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    fieldNote: string;
  };
};

type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  footerLeft: string;
  footerRight: string;
  social: {
    x: string;
  };
  contactFormAction: string;
};

type ResearchContent = {
  eyebrow: string;
  title: string;
  body: string;
  orderedLabel: string;
  emptyMessage: string;
};

const root = process.cwd();

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8')) as T;
}

export const siteSettings = readJson<SiteSettings>('src/content/site/settings.json');
export const homeContent = readJson<HomeContent>('src/content/site/home.json');
export const researchContent = readJson<ResearchContent>('src/content/site/research.json');

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
