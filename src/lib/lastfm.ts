import type { LastFMTrack, NowPlayingResponse } from '../types'

let cache: NowPlayingResponse | null = null
let lastFetch = 0
const TTL = 60000

export async function getNowPlaying(): Promise<NowPlayingResponse> {
	const now = Date.now()
	if (cache && now - lastFetch < TTL) return cache

	const apiKey = import.meta.env.LASTFM_API_KEY || process.env.LASTFM_API_KEY
	const username = import.meta.env.LASTFM_USERNAME || process.env.LASTFM_USERNAME

	if (!apiKey || !username) return { track: null, error: 'Missing last.fm config.' }

	try {
		const params = new URLSearchParams({
			method: 'user.getrecenttracks',
			user: username,
			api_key: apiKey,
			format: 'json',
			limit: '1',
		})

		const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`, {
			signal: AbortSignal.timeout(5000), // 5s timeout
		})

		if (!response.ok) throw new Error(`Last.fm API error: ${response.statusText}`)

		const data = await response.json()
		const trackData = data.recenttracks?.track?.[0]

		if (!trackData) {
			cache = { track: null }
			lastFetch = now
			return cache
		}

		const track: LastFMTrack = {
			name: trackData.name,
			artist: trackData.artist['#text'],
			url: trackData.url,
			// Last.fm returns multiple image sizes. Pick "large" for
			// consistent card sizing. Fallback to empty string,
			// NowPlaying.astro checks `track.image` before rendering <img>.
			image:
				trackData.image.find((img: Record<string, string>) => img.size === 'large')?.['#text'] ||
				'',
			nowPlaying:
				// Last.fm sends `@attr.nowplaying` as string "true", not boolean
				// Strict === prevents truthy coercion of "false" → true
				trackData['@attr']?.nowplaying === 'true',
			timestamp: trackData.date ? parseInt(trackData.date.uts) : undefined,
		}

		cache = { track }
		lastFetch = now
		return cache
	} catch (error) {
		console.error('Error fetching Now Playing from Last.fm:', error)
		lastFetch = now
		return cache || { track: null, error: 'Failed to fetch music data.' }
	}
}
