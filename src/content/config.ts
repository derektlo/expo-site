import { defineCollection, z } from 'astro:content';

// Help-center articles. These render as the public help center AND are the
// source of truth for the support-chat RAG corpus (see
// scripts/ingest_support_docs.ts in the OpenRecipe repo). The article `slug`
// is derived from the filename, so the file basename must match the citation
// URLs the ingest script writes (/help/<basename>).
const help = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { help };
