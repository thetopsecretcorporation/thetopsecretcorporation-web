export type PmfGuideEntry = {
  file?: string;
  Content?: any;
  frontmatter: {
    title: string;
    guideNumber: number;
    slug: string;
    summary: string;
    phase?: string;
    estimatedTime?: string;
    expectedOutput?: string;
    draft?: boolean;
  };
};

const PMF_PHASES = ['Foundation', 'Validation', 'Delivery', 'Go-to-market'] as const;
type PmfPhase = typeof PMF_PHASES[number];

function getPmfGuideIdentifier(entry: PmfGuideEntry) {
  return entry.frontmatter.slug || entry.file || entry.frontmatter.title || 'unknown PMF guide';
}

function assertValidPmfGuide(entry: PmfGuideEntry) {
  if (!Number.isFinite(entry.frontmatter.guideNumber)) {
    throw new Error(`PMF guide is missing a valid guideNumber: ${getPmfGuideIdentifier(entry)}`);
  }
}

function getPmfGuidePhase(entry: PmfGuideEntry): PmfPhase {
  const phase = entry.frontmatter.phase;

  if (!phase || !PMF_PHASES.includes(phase as PmfPhase)) {
    throw new Error(`PMF guide has an invalid phase "${phase ?? 'undefined'}": ${getPmfGuideIdentifier(entry)}`);
  }

  return phase as PmfPhase;
}

export function getPmfGuideSlug(entry: PmfGuideEntry) {
  const slug = entry.frontmatter.slug || entry.file?.split(/[\\/]/).pop()?.replace(/\.md$/i, '');

  if (!slug) {
    throw new Error('Unable to derive PMF guide slug from markdown entry.');
  }

  return slug;
}

export function getPmfGuideHref(entry: PmfGuideEntry) {
  return `/pmf-field-guide/guides/${getPmfGuideSlug(entry)}/`;
}

export function getSortedPmfGuides<T extends PmfGuideEntry>(entries: T[]) {
  return entries
    .filter((entry) => !entry.frontmatter.draft)
    .map((entry) => {
      assertValidPmfGuide(entry);
      return entry;
    })
    .sort((a, b) => a.frontmatter.guideNumber - b.frontmatter.guideNumber);
}

export function getPmfPhaseGroups<T extends PmfGuideEntry>(entries: T[]): Record<string, T[]> {
  const groups = Object.fromEntries(PMF_PHASES.map((phase) => [phase, [] as T[]])) as Record<PmfPhase, T[]>;

  getSortedPmfGuides(entries).forEach((entry) => {
    groups[getPmfGuidePhase(entry)].push(entry);
  });

  return PMF_PHASES.reduce<Record<string, T[]>>((orderedGroups, phase) => {
    if (groups[phase].length > 0) {
      orderedGroups[phase] = groups[phase];
    }

    return orderedGroups;
  }, {});
}

export function getAdjacentPmfGuides<T extends PmfGuideEntry>(entries: T[], currentSlug: string) {
  const guides = getSortedPmfGuides(entries);
  const currentIndex = guides.findIndex((guide) => getPmfGuideSlug(guide) === currentSlug);

  return {
    previousGuide: currentIndex > 0 ? guides[currentIndex - 1] : undefined,
    nextGuide: currentIndex >= 0 && currentIndex < guides.length - 1 ? guides[currentIndex + 1] : undefined,
  };
}
