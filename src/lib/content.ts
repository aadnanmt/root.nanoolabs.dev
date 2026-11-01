/**
 * filter out draft entries
 */
export function filterDraft<T extends { data: { draft?: boolean } }>(entries: T[]): T[] {
  return entries.filter((entry) => !entry.data.draft)
}

/**
 * sort entries by date descending (newest first),
 * uses `.valueOf()` for consistent comparison
 */
export function sortByDateDesc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/**
 * sort entries by date ascending (oldest first)
 */
export function sortByDateAsc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf())
}

/**
 * sort entries by title alphabetic
 */
export function sortByTitle<T extends { data: { title: string } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => a.data.title.localeCompare(b.data.title))
}

/**
 * get published (non-draft) entries sorted by date descending,
 * most common pattern for blog, projects, note.
 */
export function getPublishedEntries<T extends { data: { date: Date; draft?: boolean } }>(
  entries: T[],
): T[] {
  return sortByDateDesc(filterDraft(entries))
}

/**
 * group entries by year (YYYY) from date field,
 * return object with years as keys (descending) and entries as value
 */
export function groupByYear<T extends { data: { date: Date } }>(entries: T[]): Record<string, T[]> {
  const grouped = entries.reduce(
    (acc, entry) => {
      const year = entry.data.date.getFullYear().toString()
      if (!acc[year]) acc[year] = []
      acc[year].push(entry)
      return acc
    },
    {} as Record<string, T[]>,
  )

  return Object.fromEntries(Object.entries(grouped).sort(([a], [b]) => parseInt(b) - parseInt(a)))
}

/**
 * group entries by date (YYYY-MM-DD) from date field,
 * used for notes page
 */
export function groupByDate<T extends { data: { date: Date } }>(entries: T[]): Record<string, T[]> {
  return entries.reduce(
    (acc, entry) => {
      const key = entry.data.date.toISOString().slice(0, 10)
      ;(acc[key] ||= []).push(entry)
      return acc
    },
    {} as Record<string, T[]>,
  )
}

/**
 * filter entries by category field,
 * used for projects (personal | nanoo)
 */
export function filterByCategory<T extends { data: { category: string } }>(
  entries: T[],
  category: string,
): T[] {
  return entries.filter((entry) => entry.data.category === category)
}

/**
 * sort work entries by dateStart descending
 */
export function sortWorkByDateStartDesc<T extends { data: { dateStart: Date | string } }>(
  entries: T[],
): T[] {
  return [...entries].sort(
    (a, b) => new Date(b.data.dateStart).valueOf() - new Date(a.data.dateStart).valueOf(),
  )
}
