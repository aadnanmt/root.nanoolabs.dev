# root.nanoolabs.dev

My personal site and digital garden. Built with Astro 5 and Tailwind CSS 4.

Live: https://root.nanoolabs.dev

## Stack

- Astro 5 + MDX
- Tailwind CSS 4 (CSS-first via `@theme` tokens)
- TypeScript (strict)
- Cloudflare Pages (`server` output in prod, `static` in dev)
- pnpm 12, node 24

## Content

- Blog, Projects, Commands, Notes, Work
- Now, Focus, Stats, Uses, Keys, Explore

## Live features

- Last.fm now playing (60s cache)
- imood mood (1h cache)
- Dark mode (OLED black, Nanoo design tokens)
- RSS feed (blog + projects)
- Footer last-commit time
- Time-based greeting on the homepage (visitor local time)

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | dev server |
| `pnpm build` | `astro check && astro build` |
| `pnpm preview` | preview build |
| `pnpm lint` | ESLint |
| `pnpm lint:css` | Stylelint |
| `pnpm format` | Prettier `--write` |

## Cloudflare Pages

Build command: `git fetch --unshallow && pnpm build`. CF clones shallow; without `--unshallow`, `gitDate()` returns the build date instead of the real edit date for every entry.

## License

Text and images: CC BY 4.0. Code: based on Astro Nano.
