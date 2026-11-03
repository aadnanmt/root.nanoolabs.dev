---
title: "@nlbs/og"
description: "Open Graph image presets for Nanoo Labs sites"
date: "2026-10-07"
repoURL: "https://github.com/nanoolabs/og"
demoURL: "https://www.npmjs.com/package/@nlbs/og"
category: "nanoo"
tags: ["open-graph", "image", "canvas"]
status: growing
---

## What is it?

Shared Open Graph image presets for **Nanoo Labs sites**, built on [`astro-og-canvas`](https://github.com/delucis/astro-og-canvas). **one endpoint** renders OG cards per route with consistent palette, fonts, and logomark: *every site in ecosystem gets same share-card look for free.*

## Preview OG

<img src="/content/projects/nl-og/preview.png" alt="GitHub profile README with stats" width="800" loading="lazy" />

> btw this is still output/result from version [0.1.0](https://www.npmjs.com/package/@nlbs/og/v/0.1.0)

## Why did I build it?

because... every open graph nanoolabs site always different, soo.. lazy to design manual open graph, and lazyy to setup every create new projects. so yeahh, create package to handle open graph nanoolabs sites.

## What I learned

- **Glyphs:** geist has no `U+2310/U+25A0` coverage, soo... one of my fav kaomoji `[⌐■_■]` cannot render
- **Wrapper:** ehehee, i'm wrapper [astro-og-canvas](https://github.com/delucis/astro-og-canvas) and [nlbs/og](https://github.com/nanoolabs/og) just presets
- **ESLint:** integration [eslint/stylistic](https://github.com/eslint-stylistic/eslint-stylistic) to linting/formatting codebase
