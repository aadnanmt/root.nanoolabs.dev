---
title: "Nanoo CDN"
description: "Edge proxy for Nanoo Labs assets. Zero egress cost, fast TTFB, and SigV4 security using Cloudflare Workers and Backblaze B2"
date: "2026-05-13"
repoURL: "https://github.com/nanoolabs/cdn"
demoURL: "https://cdn.nanoolabs.dev"
category: "nanoo"
tags: ["aws4fetch", "cloudflare", "backblaze"]
status: evergreen
---

## What is it?

Edge proxy for Nanoo Labs assets. Proxies a private **Backblaze B2** bucket through a **Cloudflare Worker** with **AWS SigV4** signing, edge caching, and **CORS enforcement**: zero egress cost, fast TTFB, origin stays hidden.

## Screenshot

<img src="/content/projects/nl-cdn/preview.webp" alt="nl-cdn landing page" width="800" loading="lazy" />

## Why did I build it?

Actually, so that I don't want to use **Egress B2 free tier**. I want to have a layer that can be moved to **AWS S3 object storage** someday but still in **Cloudflare handle**. Therefore I use boileplate from [cloudflare-b2](https://github.com/backblaze-b2-samples/cloudflare-b2) template by **Pat Patterson** (@backblaze). Yeahh, I still understanding **codebase** from he. _Some understand, some I can change and improve, some I don't understandd. But I still learning and understanding._

## What I learned

If from what I improve codebase from him, I still learned about plain JS no build time, Cache-Control, Header configuration, up to wrangler flow deploy.

>btw, this project based on [cloudflare-b2](https://github.com/backblaze-b2-samples/cloudflare-b2) template by Pat Patterson (@backblaze). Refactored and extended by Nanoo Labs. Actually, evergreen from start!!
