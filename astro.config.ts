import { defineConfig, passthroughImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { SITE } from './src/consts'

// Cloudflare Pages set CF_PAGES=1 during production build
// Local dev stay static (no adapter needed, faster iteration)
const isProd = process.env.CF_PAGES === '1'

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
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },

  output: isProd ? 'server' : 'static',
  adapter: adapter,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.GIT_HASH': JSON.stringify(
        process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || process.env.GIT_HASH || 'unknown',
      ),
      'import.meta.env.LAST_ACTIVE_TIMESTAMP': JSON.stringify(
        process.env.LAST_ACTIVE_TIMESTAMP || '',
      ),
    },
  },
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
    '/blog/buy-domain-for-nanoolabs-on-hostinger': {
      destination: '/blog/buy-domain-on-hostinger',
      status: 301,
    },
    '/contact': { destination: '/connect', status: 301 },
  },
})
