import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PILLAR_SLUGS } from './config/pillars';

const pillarEnum = z.enum(PILLAR_SLUGS as [string, ...string[]]);

const faqItem = z.object({ q: z.string(), a: z.string() });

const editorialBase = (image: () => any) =>
  z.object({
    title: z.string().max(70),
    description: z.string().max(180),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.optional(image()),
    pillar: pillarEnum.optional(),
    tags: z.array(z.string()).default([]),
    author: reference('autores').optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    keyTakeaways: z.array(z.string()).optional(),
    faq: z.array(faqItem).optional(),
    relatedSlugs: z.array(z.string()).optional(),
  });

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    editorialBase(image).extend({
      schemaType: z.enum(['Article', 'BlogPosting']).default('BlogPosting'),
    }),
});

const guias = defineCollection({
  loader: glob({ base: './src/content/guias', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => editorialBase(image),
});

const tutoriais = defineCollection({
  loader: glob({ base: './src/content/tutoriais', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    editorialBase(image).extend({
      steps: z.array(z.object({ name: z.string(), text: z.string() })).optional(),
    }),
});

const noticias = defineCollection({
  loader: glob({ base: './src/content/noticias', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => editorialBase(image),
});

const casos = defineCollection({
  loader: glob({ base: './src/content/casos', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    editorialBase(image).extend({
      client: z.string().optional(),
      segment: z.string().optional(),
      city: z.string().optional(),
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    }),
});

const glossario = defineCollection({
  loader: glob({ base: './src/content/glossario', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    term: z.string(),
    shortDefinition: z.string().max(320),
    pillar: pillarEnum.optional(),
    relatedTerms: z.array(z.string()).default([]),
    updatedDate: z.coerce.date().optional(),
  }),
});

const servicos = defineCollection({
  loader: glob({ base: './src/content/servicos', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string().max(70),
      description: z.string().max(180),
      icon: z.string().optional(),
      heroImage: z.optional(image()),
      benefits: z.array(z.string()).default([]),
      relatedPillars: z.array(pillarEnum).default([]),
      faq: z.array(faqItem).optional(),
      order: z.number().default(0),
    }),
});

const autores = defineCollection({
  loader: glob({ base: './src/content/autores', pattern: '**/*.{md,mdx,json}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      avatar: z.optional(image()),
      credentials: z.array(z.string()).default([]),
      sameAs: z.array(z.string()).default([]),
      knowsAbout: z.array(z.string()).default([]),
    }),
});

const categorias = defineCollection({
  loader: glob({ base: './src/content/categorias', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string().max(70),
      description: z.string().max(180),
      intro: z.string().optional(),
      heroImage: z.optional(image()),
      pillarGuideSlug: z.string().optional(),
    }),
});

const ferramentas = defineCollection({
  loader: glob({ base: './src/content/ferramentas', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string().max(70),
      description: z.string().max(180),
      component: z.string().optional(),
      heroImage: z.optional(image()),
      faq: z.array(faqItem).optional(),
    }),
});

export const collections = {
  blog,
  guias,
  tutoriais,
  noticias,
  casos,
  glossario,
  servicos,
  autores,
  categorias,
  ferramentas,
};
