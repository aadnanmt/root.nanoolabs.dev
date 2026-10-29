import type { WeatherResponse } from '../types'

let cache: WeatherResponse | null = null
let lastFetch = 0
/**
 * cache TTL in milliseconds (30 minutes)
 */
const TTL = 1800000

/**
 * Fetch current weather for a location from wttr.in.
 * Return cached result if within TTL.
 * Fall back to stale cache on error.
 * Require WEATHER_LOCATION env var,
 * return empty cache if missing.
 */
export async function getWeather(): Promise<WeatherResponse> {
  const now = Date.now()
  if (cache && now - lastFetch < TTL) return cache

  const location = import.meta.env.WEATHER_LOCATION || process.env.WEATHER_LOCATION

  if (!location) {
    cache = { temp: null, condition: null, humidity: null, feelsLike: null }
    lastFetch = now
    return cache
  }

  try {
    const response = await fetch(`https://wttr.in/${encodeURIComponent(location)}?format=j1`, {
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) throw new Error(`wttr.in error: ${response.statusText}`)

    const data = await response.json()
    const current = data.current_condition?.[0]

    if (!current) {
      cache = {
        temp: null,
        condition: null,
        humidity: null,
        feelsLike: null,
        error: 'No weather data.',
      }
      lastFetch = now
      return cache
    }

    cache = {
      temp: current.temp_C ? parseInt(current.temp_C) : null,
      condition: current.weatherDesc?.[0]?.value || null,
      humidity: current.humidity ? parseInt(current.humidity) : null,
      feelsLike: current.FeelsLikeC ? parseInt(current.FeelsLikeC) : null,
    }
    lastFetch = now
    return cache
  } catch (error) {
    console.error('Error fetching weather:', error)
    lastFetch = now
    return (
      cache || {
        temp: null,
        condition: null,
        humidity: null,
        feelsLike: null,
        error: 'Failed to fetch weather data.',
      }
    )
  }
}
