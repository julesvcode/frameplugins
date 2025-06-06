import { defineCollection, z } from 'astro:content';

const pluginCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    feat: z.boolean().default(false),
    updateDate: z.date(),
    description: z.string(),
    link: z.string(),
    thumbnailImage: image(),
    thumbnailAlt: z.string(),
    categories: z.array(z.string()),
    free: z.boolean().default(true),
    price: z.string(),
    discount: z.string().optional(),
    code: z.string().optional(),
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
  'plugins': pluginCollection,
  'posts': blogCollection,
};