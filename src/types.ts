export type Site = {
  NAME: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  NUM_WORKS_ON_HOMEPAGE: number
  NUM_PROJECTS_ON_HOMEPAGE: number
}

export type Metadata = {
  TITLE: string
  DESCRIPTION: string
}

export type Socials = {
  NAME: string
  HREF: string
}[]

export type LastFMTrack = {
  name: string
  artist: string
  url: string
  image: string
  nowPlaying: boolean
  timestamp?: number
}

export type NowPlayingResponse = {
  track: LastFMTrack | null
  error?: string
}
