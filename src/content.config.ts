import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actividades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actividades' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    imagen: z.string().optional(),
    imagen_alt: z.string().optional(),
    extracto: z.string(),
    categoria: z.string().default('actividad'),
    destacado: z.boolean().default(false),
    activo: z.boolean().default(true),
    orden: z.number().int().default(99),
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().optional(),
    publicada: z.boolean().default(true),
  }),
});

export const collections = { actividades, paginas };
