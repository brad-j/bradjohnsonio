import { defineCollection, z } from 'astro:content';

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      body: z.string(),
      tags: z.array(z.string()),
      image: z.string().optional(),
      date: z.date(),
    })
  })
};