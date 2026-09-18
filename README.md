# NaN - My Digital Garden

My digital garden. I build it with **Astro 5** and **Tailwind CSS 4**. i write about my life, my learning journey, and linux

## Live

[root.nanoolabs.dev](https://root.nanoolabs.dev)

## Features

- **Linux Wiki**: Personal notes for Linux commands
- **Digital Garden**: Blog posts and lessons learned
- **Notes**: Short, unpolished thoughts and context from my days
- **Tags**: Browse content by topic across blog, projects, and commands
- **Public Keys**: My age, GPG, and SSH public keys
- **Focus Page**: Project progress, Arch Linux style
- **Stats Page**: Realtime stat dashboard
- **Uses Page**: Tools and software I use every day
- **Now Page**: What I am focusing on right now
- **RSS**: Combined feed for blog, projects, and notes
- **Last.fm Integration**: Shows what music I am listening to
- **imood Integration**: Shows my current mood
- **Last Active**: Footer shows time since last commit
- **Dark Mode**: OLED black and cyan, powered by Nanoo design tokens

## Tech I Use

- **Astro 5**: The web framework
- **Tailwind CSS 4**: CSS-first styling via `@theme` tokens
- **TypeScript**: Strict mode
- **Cloudflare Pages**: To host website
- **pnpm 11**: Fast package manager
- **node 24**: JS Runtime Env everywhere
- **MDX**: For writing content

## How to Start

you need **Node.js** and **pnpm**

```bash
# Get the code
git clone https://github.com/aadnanmt/root.nanoolabs.dev.git

# Install packages
pnpm install

# Start the site
pnpm dev
```

## Commands

| Command            | What it does             |
| ------------------ | ------------------------ |
| `pnpm dev`         | Start dev server         |
| `pnpm dev:network` | Dev server on network    |
| `pnpm build`       | Check types and build    |
| `pnpm preview`     | Preview production build |
| `pnpm lint`        | Check code style         |
| `pnpm format`      | Auto format code         |
| `pnpm new`         | Scaffold a content entry |

## Quick Notes

There's a local git alias for快速 notes:

```bash
git note   # stage notes/ + commit with "note: YYYY-MM-DD"
git push   # push to remote
```

One commit per day. Free language (Indonesian/English/Indoglish).

## Cloudflare Pages

Build command on CF dashboard: `git fetch --unshallow && pnpm build`. CF clone shallow; without it, "Last updated" date show the build date instead of the real last-edit date.

## License

- **Text & Images**: Licensed under **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**
- **Code**: Based on [Astro Nano](https://github.com/markhorn-dev/astro-nano)

---

Built by [Adnan (@aadnanmt)](https://github.com/aadnanmt)
