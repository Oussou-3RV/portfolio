import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { techs } from './data/site';

const techIds = Object.keys(techs) as [keyof typeof techs, ...(keyof typeof techs)[]];

const node = z.object({
  id: z.string(),
  label: z.string(),
  detail: z.string(),
  col: z.number().int().min(0).max(2),
  row: z.number().int().min(0).max(2),
  provided: z.boolean().default(false),
});

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['Projet personnel', 'Projet de cours']),
    course: z.string().optional(),
    status: z.enum(['En cours', 'Terminé', 'Déployé']),
    team: z.boolean().default(false),
    year: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    stack: z.array(z.enum(techIds)),
    diagram: z.object({
      caption: z.string(),
      nodes: z.array(node),
      edges: z.array(z.tuple([z.string(), z.string()])),
    }),
  }),
});

export const collections = { projets };
