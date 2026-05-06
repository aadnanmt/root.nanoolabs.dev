---
title: "Astrolink"
description: "A modern linktree alternative moved to Astro for easier changes and better development."
date: "2024-04-10"
demoURL: "https://bio.aadnanmt.web.id"
repoURL: "https://github.com/aadnanmt/Astrolink"
---

This project is a modern linktree alternative. It was first made by **ZeX** using static HTML/CSS. I moved it to Astro to make it easier to change and better for developers. Astro's component system helps a lot.

## Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
astrolink/
├── public/
│   ├── img/
│   │   └── me-act.webp
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Background.astro
│   │   ├── Link.astro
│   │   └── Profile.astro
│   ├── data/
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── bun.lock
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Commands

All commands are run from the root of the project, using **Bun**:

| Command       | Action                                       |
| :------------ | :------------------------------------------- |
| `bun install` | Installs dependencies                        |
| `bun dev`     | Starts local dev server at `localhost:4321`  |
| `bun build`   | Build your production site to `./dist/`      |
| `bun preview` | Preview your build locally, before deploying |

## Credits

-   **Original Creator:** The first static HTML/CSS version was made by [ZeX](https://github.com/ddosnotification/links-portfolio).
-   **Migration:** This version was moved to Astro by [Adnan](https://github.com/aadnanmt) to make updates and management easier.

---

Licensed under the **MIT License**.
