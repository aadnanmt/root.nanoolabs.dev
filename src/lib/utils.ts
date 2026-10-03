import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { execSync } from 'child_process'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function gitDate(filePath: string) {
	try {
		const stdout = execSync(`git log -1 --pretty="format:%ci" src/content/${filePath}`)
		const dateStr = stdout.toString().trim()
		return dateStr ? new Date(dateStr) : null
	} catch (e) {
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
	// Strip HTML, count words, divide by 200 wpm. +1 ensures minimum
	// "1 min read" for short posts
	const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
	return `${readingTimeMinutes} min read`
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
	const startMonth = startDate.toLocaleString('default', { month: 'short' })
	const startYear = startDate.getFullYear().toString()
	let endMonth
	let endYear

	if (endDate) {
		if (typeof endDate === 'string') {
			endMonth = ''
			endYear = endDate
		} else {
			endMonth = endDate.toLocaleString('default', { month: 'short' })
			endYear = endDate.getFullYear().toString()
		}
	}

	return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}
