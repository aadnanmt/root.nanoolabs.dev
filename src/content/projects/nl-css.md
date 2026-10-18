---
title: "@nlbs/css"
description: "CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility components built on LightningCSS"
date: "2026-06-15"
repoURL: "https://github.com/nanoolabs/css"
category: "nanoo"
tags: ["css", "design-tokens", "nanoo"]
status: evergreen
---

## What is it?

CSS foundation for [Nanoo Labs ecosystem](https://nanoolabs.dev); design tokens, resets, and utility components bundle with [LightningCSS](https://lightningcss.dev/). Dark-first, zero runtime, framework-agnostic. Gray are pure neutral OKLCH with zero chroma, and two entry points keep it lean: tokens-only for Tailwind v4 projects, full package for everything else.

## Why did I build it?

I'm soo tired copy reset and token to every created site projects. I want have design systems consistencyy.

## What I learned

Owhh, I learned about:

- **LightningCSS:** bundling, minifier, and managment CSS parser.
- **[chokidar-cli](https://github.com/open-cli-tools/chokidar-cli):** to watch file system changes while phase development.
- **OKLCH:** I learned about modern color spaces.
- **Other CSS fundamental:** unitless line-height, REM for accessibility.

> actually, I know about OKLCH from [astro starlight](https://starlight.astro.build) handle color spaces. So, I learned too. why with OKLCH?, why powerfull to design systems complex?, what trade off OKLCH with other color spaces, How standard OKLCH in real world case??

> This projects current evergreen/stable but I'll keep maintain.
