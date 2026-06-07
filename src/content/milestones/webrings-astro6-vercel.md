---
title: "Registry Refactor: Astro 6 & Vercel Pivot"
date: 2026-06-04
mood: "Tired"
tags: ["refactor", "astro6", "vercel"]
description: "Upgraded the webrings registry to Astro 6 and migrated to Vercel to bypass environment limitations."
---

Infrastructure is hard, but we found the way.

### Key Changes:

- **Astro 6.x:** Upgrade the core engine for better performance and the new content layer.
- **Vercel Migration:** Pivoted from Netlify to Vercel to bypass Deno/Termux compatibility issues.
- **Federation Consolidation:** Cleaned up the registry to focus exclusively on the Nanoo Internal Federation nodes.

### Planned:

- **Handshake:** Add feature for interface handshake page on webrings.nanoolabs.dev
- **Remove:** Legacy file from cloning astro-webrings.
- **Refactor:** Some components have been fixed, and redundant code has been removed.
