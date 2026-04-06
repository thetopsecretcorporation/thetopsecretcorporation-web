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

export const collections = {
  researchReports,
};
