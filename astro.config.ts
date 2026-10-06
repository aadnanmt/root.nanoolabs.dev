import { defineConfig, passthroughImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'
import { SITE } from './src/consts'

// Cloudflare Pages set CF_PAGES=1 during production build
// Local dev stay static (no adapter needed, faster iteration)
const isProd = process.env.CF_PAGES === '1'

// Short git hash for footer version link
// Fail silent on shallow
// clone or missing git (e.g. CI without history)
let gitHash = 'unknown'
let lastActiveTimestamp = ''
try {
  gitHash = execSync('git rev-parse --short HEAD').toString().trim()
  lastActiveTimestamp = execSync('git log -1 --pretty=%ct').toString().trim()
} catch (e) {
  console.warn(`Could not get git info: ${(e as Error).message}`)
}

// Dynamic import adapter
// adapter only needed in production
// Importing static in dev would fail if @astrojs/cloudflare isn't resolvable
let adapter
if (isProd) {
  const { default: cloudflare } = await import('@astrojs/cloudflare')
  adapter = cloudflare()
}

export default defineConfig({
  site: SITE.URL,
  integrations: [mdx(), sitemap()],
  redirects: {
    '/gh': { destination: 'https://github.com/aadnanmt', status: 301 },
    '/cb': { destination: 'https://codeberg.org/aadnanmt', status: 301 },
    '/tg': { destination: 'https://t.me/adnnmt', status: 301 },
    '/dc': {
      destination: 'https://discord.com/users/1155470881183760525',
      status: 301,
    },
    '/ig': { destination: 'https://www.instagram.com/aadnanmt', status: 301 },
    '/x': { destination: 'https://twitter.com/aadnanmt', status: 301 },
    '/sp': {
      destination: 'https://open.spotify.com/user/314bjvthnpohaain54tchezpc4ji',
      status: 301,
    },
    '/kf': { destination: 'https://ko-fi.com/aadnanmt', status: 301 },
    '/gl': { destination: 'https://gitlab.com/users/aadnanmt', status: 301 },
    '/th': { destination: 'https://www.threads.com/@aadnanmt', status: 301 },
    '/rss': { destination: '/rss.xml', status: 301 },
    '/key': { destination: '/keys', status: 301 },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },

  // CF Pages require SSR ("server"). Soo.. local dev uses "static" for
  // fast build without adapter overhead
  output: isProd ? 'server' : 'static',
  adapter: adapter,
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.GIT_HASH': JSON.stringify(
        process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || gitHash,
      ),
      'import.meta.env.LAST_ACTIVE_TIMESTAMP': JSON.stringify(lastActiveTimestamp),
    },
  },
})
