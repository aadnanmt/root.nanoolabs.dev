---
title: "Kaomoji minimalist"
description: "Minimalist kaomojis for Nanoo Labs documentation."
date: "2026-05-15"
repoURL: "https://github.com/nanoolabs/kaomoji"
category: "nanoo"
tags: ["kaomoji", "npm", "typescript"]
---

Minimalist kaomojis for Nanoo Labs documentation.

## Quick Start

```bash
pnpm add @nlbs/kaomoji
```

## Usage

```ts
import { log } from "@nlbs/kaomoji"

console.log(`${log.fatal} Database connection lost!`)
// → [ ✖_✖ ] Database connection lost!

console.log(`${log.success} Deploy complete`)
// → [ ^■^ ] Deploy complete

console.log(`${log.idle} Waiting for task`)
// → [ □_□ ] Waiting for task
```

Or consume the raw JSON in any language:

```ts
import kaomoji from "@nlbs/kaomoji/kaomoji.json" with { type: "json" }
```

```python
import json, urllib.request
data = json.load(open("kaomoji.json"))
print(data["fatal"])  # [ ✖_✖ ]
```

### Default fallback

Unknown keys return `[ ?_? ]`.

```ts
log.unknown // → "[ ?_? ]"
```

## Reference

See [KAOMOJI.md](https://github.com/nanoolabs/kaomoji/blob/main/KAOMOJI.md) for the full kaomoji reference tables.

## Raw data

Consume `kaomoji.json` from any language, it's the single source of truth. The `index.ts` wrapper is optional.

## Maintained

[@aadnanmt](https://github.com/aadnanmt) | Nanoo Labs Ecosystems.
