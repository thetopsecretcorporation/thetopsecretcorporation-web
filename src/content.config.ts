import { defineCollection, z } from 'astro:content';

const researchReports = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Albert'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().optional(),
  }),
});

const pmfGuides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    guideNumber: z.number().optional(),
    slug: z.string(),
    summary: z.string(),
    phase: z.string().optional(),
    type: z.enum(['explainer', 'guide']).optional(),
    eyebrow: z.string().optional(),
    estimatedTime: z.string().optional(),
    expectedOutput: z.string().optional(),
    primaryCta: z.string().optional(),
    ctaHelper: z.string().optional(),
    status: z.string().default('draft'),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  researchReports,
  pmfGuides,
};
