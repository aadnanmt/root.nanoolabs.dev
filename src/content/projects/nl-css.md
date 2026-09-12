---
title: "@nlbs/css"
description: "CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility components built on LightningCSS"
date: "2026-06-15"
repoURL: "https://github.com/nanoolabs/css"
category: "nanoo"
tags: ["css", "lightningcss", "design-tokens", "npm"]
---

CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility components built on LightningCSS. Dark-first, zero runtime, framework-agnostic.

## Quick Start

```bash
pnpm add @nlbs/css
```

```javascript
/* Tokens only (Tailwind v4, custom styling) */
import "@nlbs/css"

/* Full package (reset + tokens + typography + components) */
import "@nlbs/css/full"
```

Or via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@nlbs/css" />
```

## Entry Points

| Import                     | Output                | Use Case                 |
| -------------------------- | --------------------- | ------------------------ |
| `@import '@nlbs/css'`      | `dist/tokens.min.css` | Tailwind v4, tokens only |
| `@import '@nlbs/css/full'` | `dist/nanoo.min.css`  | Full package             |

## Architecture & Tech Stack

- **Build:** LightningCSS CLI for bundling, minification, and autoprefixing
- **Tokens:** CSS custom properties with OKLCH color space (pure neutral grays)
- **Components:** BEM-like `nl-*` classes for container, button, card, typography
- **Themes:** Dark-first with light override via `@media` + `[data-theme]`
- **Zero runtime:** No pre-processor, no framework. Output is static CSS

## Project Structure

```
src/
├── tokens.css           # Entry: variables + themes only
├── main.css             # Entry: full package (reset + tokens + components)
├── reset.css            # Minimal reset
├── variables.css        # Primitives: gray scale, spacing, radius, typography
├── aliases.css          # Backward compatibility (--nl-* tokens)
├── themes/
│   ├── dark.css         # Semantic tokens (default)
│   └── light.css        # Light overrides
├── typography.css       # Headings, text utils, links
├── layout.css           # Container classes
├── button.css           # Button variants
└── card.css             # Card component
```

## Tokens

### Gray Scale (OKLCH)

Pure neutral grays with zero chroma (no color tint):

```css
--gray-0: oklch(0.99 0 0); /* near white */
--gray-6: oklch(0.64 0 0); /* mid gray */
--gray-12: oklch(0.1 0 0); /* near black */
```

### Semantic Tokens

Theme-aware tokens that reference primitives:

```css
--color-text: var(--gray-2); /* body text */
--color-bg: var(--gray-12); /* page background */
--color-border: var(--gray-9); /* default borders */
```

### Aliases

Backward compatibility with old `--nl-*` tokens:

```css
--nl-color-primary: var(--color-brand);
--nl-color-ink: var(--color-text);
--nl-canvas: var(--color-bg);
--nl-space-xs: var(--spacing-xs);
```

## Theming

Dark by default. Light mode via `@media (prefers-color-scheme)` or `[data-theme="light"]`.

```html
<html data-theme="light"></html>
```

## Development

| Command             | Description           |
| ------------------- | --------------------- |
| `pnpm build`        | Minified prod bundles |
| `pnpm dev`          | Watch + unminified    |
| `pnpm format:check` | Check formatting      |
| `pnpm format`       | Fix formatting        |

## Contributing

1. Branch from `main` with `refactor/name` naming
2. Commit messages follow Conventional Commits
3. Rebuild before pushing: `pnpm build`

## Maintained

[@aadnanmt](https://github.com/aadnanmt) | [Nanoo Labs](https://nanoolabs.dev)

Licensed under **ISC**.
