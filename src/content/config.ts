import { defineCollection, z } from 'astro:content'
import { LICENSE } from '@consts'

/**
 * shared base schema for content collections with title, description, date, draft, tags.
 * collections: blog, projects, commands, notes (partial)
 */
const baseContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
})

const blog = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    license: z.string().optional().default(LICENSE.NAME),
  }),
})

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    category: z.enum(['personal', 'nanoo']).optional().default('personal'),
    status: z.enum(['seed', 'growing', 'evergreen', 'dormant']).optional().default('seed'),
  }),
})

const now = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
})

const commands = defineCollection({
  type: 'content',
  schema: baseContentSchema.omit({ date: true }).extend({
    category: z.enum(['FileSystem', 'Network', 'Process', 'Git', 'Logging', 'Security', 'Misc']),
  }),
})

const notes = defineCollection({
  type: 'content',
  schema: baseContentSchema.partial({ title: true, description: true }).extend({
    mood: z.string().optional(),
  }),
})

export const collections = {
  blog,
  work,
  projects,
  now,
  commands,
  notes,
}
