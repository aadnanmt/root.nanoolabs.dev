---
title: "Nanoo Labs Website"
description: "A simple website and blog with Astro 5 and Tailwind CSS. Made for speed and good design."
date: "2026-03-02"
demoURL: "https://nanoolabs.dev"
repoURL: "https://github.com/nanoolabs/nanoolabs.dev"
category: "nanoo"
tags: ["astro", "portfolio", "cloudflare"]
---

Official website and lab showcase for Nanoo. Astro 5 site deployed to Cloudflare Pages.

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans + Geist Mono
- **Hosting:** Cloudflare Pages

## Quick Start

```bash
git clone https://github.com/nanoolabs/nanoolabs.dev.git
cd nanoolabs.dev
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── components/    # Astro components
├── layouts/       # HTML shell with Meta tag
├── pages/         # Routes
├── styles/        # Global CSS + design tokens
├── consts.ts      # Site metadata
└── types.ts       # TypeScript interfaces
public/
├── _headers       # CF security & cache headers
└── _redirects     # CF redirect rules
```

## Nanoo Labs Ecosystem

Design tokens live in the `@nlbs/css` package. Update tokens there, not in local CSS.

## License

MIT License - Nanoo Labs 2026.
