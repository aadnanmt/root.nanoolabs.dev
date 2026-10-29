---
title: "Links"
description: "Personal link-in-bio page with social and quick buttons."
date: "2026-10-02"
demoURL: "https://nant.nlbs.workers.dev"
repoURL: "https://github.com/aadnanmt/links"
tags: ["link-in-bio", "astro", "cloudflare"]
status: evergreen
---

## What is it?

One-page link-in-bio page with social media, quick buttons, and NowPlaying widget from Last.fm. Built with Astro 6, hosted on Cloudflare Workers.


## Why did I build it?

Actually I need a central page for all important social and buttons, without relying on third-party link-in-bio services.

## What I learned

First time trying and using [Fonts API](https://docs.astro.build/en/reference/font-provider-reference/) from Astro 6, SSR Cloudflare Workers again, change `process.env` to `getSecret` because inside CF Worker runtime, `process.env` is empty/always `undefined`.

soo.. `getSecret` from `astro:env/server` read from Cloudflare environment bindings/secrets. but locally, `getSecret` fallback to `process.env` (from `.env/.dev.vars`); in production, it read from CF secret binding
