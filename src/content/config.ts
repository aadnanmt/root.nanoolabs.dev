import { defineCollection, z } from "astro:content"
import { LICENSE } from "@consts"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    license: z.string().optional().default(LICENSE.NAME),
    tags: z.array(z.string()).optional(),
  }),
})

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    category: z.enum(["personal", "nanoo"]).optional().default("personal"),
    tags: z.array(z.string()).optional(),
  }),
})

const now = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
})

const commands = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "FileSystem",
      "Network",
      "Process",
      "Git",
      "Logging",
      "Security",
      "Misc",
    ]),
    tags: z.array(z.string()).optional(),
  }),
})

const uses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.coerce.date(),
  }),
})

const notes = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
    mood: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  blog,
  work,
  projects,
  now,
  commands,
  uses,
  notes,
}
