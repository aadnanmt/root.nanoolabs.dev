import type { ImoodResponse } from '../types'

let cache: ImoodResponse | null = null
let lastFetch = 0
const TTL = 3600000

export async function getMood(): Promise<ImoodResponse> {
	const now = Date.now()
	if (cache && now - lastFetch < TTL) return cache

	const username = import.meta.env.IMOOD_USERNAME || process.env.IMOOD_USERNAME

	if (!username) return { mood: null, error: 'Missing imood config.' }

	try {
		const response = await fetch(`https://www.imood.com/users/${username}.atom`, {
			signal: AbortSignal.timeout(10000),
		})

		if (!response.ok) throw new Error(`imood error: ${response.statusText}`)

		const feed = await response.text()

		// Regex-extract from Atom XML
		// No XML parser, imood's feed is
		// simple enough, [\s\S]*? matches across newlines non-greedily
		const mood = feed.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/)?.[1]
		const updated = feed.match(/<entry>[\s\S]*?<updated>([^<]+)<\/updated>/)?.[1]
		const content = feed.match(/<entry>[\s\S]*?<content>([^<]*)<\/content>/)?.[1]

		if (!mood) {
			lastFetch = now
			return cache || { mood: null }
		}

		cache = { mood, content: content?.trim() || undefined, updated }
		lastFetch = now
		return cache
	} catch (error) {
		console.error('Error fetching imood:', error)

		// Update lastFetch on error to prevent rapid retries during outages
		// Return stale cache if available
		lastFetch = now
		return cache || { mood: null, error: 'Failed to fetch mood data' }
	}
}
