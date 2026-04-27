import { defineConfig } from 'astro/config';

const siteUrl = 'https://thetopsecretcorporation.com';
const siteOrigin = new URL(siteUrl).origin;

function isExternalHref(href) {
  if (typeof href !== 'string' || !href) {
    return false;
  }

  try {
    const url = href.startsWith('//') ? new URL(`https:${href}`) : new URL(href, siteOrigin);
    return (url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== siteOrigin;
  } catch {
    return false;
  }
}

function mergeRel(existingRel) {
  const relValues = new Set(String(existingRel || '').split(/\s+/).filter(Boolean));
  relValues.add('noopener');
  relValues.add('noreferrer');
  return Array.from(relValues).join(' ');
}

function rehypeExternalLinks() {
  return (tree) => {
    function visit(node) {
      if (!node || typeof node !== 'object') {
        return;
      }

      if (node.type === 'element' && node.tagName === 'a' && isExternalHref(node.properties?.href)) {
        node.properties = {
          ...node.properties,
          target: '_blank',
          rel: mergeRel(node.properties?.rel),
        };
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
}

export default defineConfig({
  output: 'static',
  site: siteUrl,
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
});
