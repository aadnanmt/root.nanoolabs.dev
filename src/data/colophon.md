## Technology stack

- **Astro 5**: a static site generator. Content collections make blog, projects, and garden pages.
- **Tailwind CSS 4**: CSS first. Tokens live in `@theme`.
- **@nlbs/css**: shared Nanoo Labs design tokens for color, spacing, and radius.
- **TypeScript**: strict mode, checked at build time.
- **MDX**: prose and components in same content files.
- **pnpm**: the package manager.
- **Geist Sans** for text, **Geist Mono** for code.

## Hosting and deployment

The site is hosted on [**Cloudflare Pages**](https://www.cloudflare.com/products/pages/) and deploys automatically on every push, with CDN and HTTPS included. Each build runs `astro check`, so type errors fail deploy.

The source code lives on [GitHub](https://github.com/aadnanmt/root.nanoolabs.dev) as the main repository, with a mirror on [Codeberg](https://codeberg.org/aadnanmt/root.nanoolabs.dev).

## Design philosophy

- Dark default. The canvas is near-black (`#030303`) from shared design tokens, and light theme follows your system preference or toggle.
- Flat design first. Embedded media and code blocks get a small radius, while circles like avatars and badges are fully round.
- No trackers, no cookies, no analytics.
- You can read every page without JavaScript. Small scripts handle the theme, page transitions, prefetching, and live clock.
- Motion follows `prefers-reduced-motion`, so smooth scrolling only works when your system allows it.

## Web standards

- [RSS feed](/rss.xml) for syndication.
- A sitemap generated at build time.
- Open Graph and Twitter card tags on every page, with a default share image.
- Security and caching headers from `public/_headers` (frame denial, nosniff, HSTS, and more).
- Short URLs like `/gh` and `/tg`, set up as permanent redirects.

## Inspiration

This page follows the [colophon format of jarema.me](https://jarema.me/colophon/), which was inspired by [Maggie Appleton](https://maggieappleton.com/colophon), and before her, [Gwern](https://www.gwern.net/Colophon).
