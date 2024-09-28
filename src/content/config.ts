import { defineCollection, z } from 'astro:content';

const toolCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    feat: z.boolean().default(false),
    updateDate: z.date(),
    description: z.string(),
    link: z.string(),
    features: z.string().url(),
    thumbnailImage: image(),
    thumbnailAlt: z.string(),
    categories: z.array(z.string()),
    topics: z.array(z.string()),
    icon: image(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    readingSpeed: z.number()
  }),
});


export const collections = {
  'tools': toolCollection,
  'posts': blogCollection,
};