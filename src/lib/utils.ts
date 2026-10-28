import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { execFileSync } from 'child_process'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function gitDate(filePath: string) {
  try {
    /**
     * array args: no shell, so filePath cannot be interpreted as a command
     * shortcut: still one `git log` per content entry (~25/build)
     */
    const stdout = execFileSync('git', ['log', '-1', '--format=%ci', '--', filePath])
    const dateStr = stdout.toString().trim()
    return dateStr ? new Date(dateStr) : null
  } catch {
    return null
  }
}

export function lastCommitDate() {
  try {
    const ts = import.meta.env.LAST_ACTIVE_TIMESTAMP
    const timestamp = parseInt(ts, 10)
    return timestamp ? new Date(timestamp * 1000) : null
  } catch {
    return null
  }
}

export function timeAgo(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  return `${months}mo ago`
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '')
  const wordCount = textOnly.split(/\s+/).length
  /**
   * Strip HTML, count words, divide by 200 wpm. +1 ensures minimum
   * "1 min read" for short posts
   */
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const start = `${startDate.toLocaleString('default', { month: 'short' })} ${startDate.getFullYear()}`

  if (!endDate) return start

  const end =
    typeof endDate === 'string'
      ? endDate
      : `${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`

  return `${start} - ${end}`
}
