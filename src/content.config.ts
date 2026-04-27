import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

// ─── Section schemas ──────────────────────────────────────────────────────────

const HeroSchema = z.object({
  type: z.literal('hero'),
  title: z.string(),
  subtitle: z.string(),
  badge: z.string().optional(),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  image: z.string(),
  imageAlt: z.string(),
});

const StepsSchema = z.object({
  type: z.literal('steps'),
  id: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  label: z.string().optional(),
  items: z
    .array(
      z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .min(3)
    .max(6),
});

const CTASchema = z.object({
  type: z.literal('cta'),
  id: z.string().optional(),
  heading: z.string(),
  button: z.object({
    label: z.string(),
    href: z.string(),
  }),
  note: z.string().optional(),
});

// ─── Discriminated union ──────────────────────────────────────────────────────

const SectionSchema = z.discriminatedUnion('type', [
  HeroSchema,
  StepsSchema,
  CTASchema,
]);

// ─── Collection ───────────────────────────────────────────────────────────────

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
      slug: z.string(),
    }),
    sections: z.array(SectionSchema).min(1),
  }),
});

export const collections = { pages };

// ─── Inferred types for components ───────────────────────────────────────────

export type HeroProps  = z.infer<typeof HeroSchema>;
export type StepsProps = z.infer<typeof StepsSchema>;
export type CTAProps   = z.infer<typeof CTASchema>;
export type Section    = z.infer<typeof SectionSchema>;
