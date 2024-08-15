import { defineCollection, z } from 'astro:content';

const toolCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    feat: z.string(),
    updateDate: z.date(),
    description: z.string(),
    link: z.string().url(),
    features: z.string().url(),
    thumbnailImage: image(),
    thumbnailAlt: z.string(),
    categories: z.array(z.string()),
    topics: z.array(z.string()),
    icon: image(),
  }),
});

const terms = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
  }),
});


export const collections = {
  'tools': toolCollection,
  'terms': terms,
};