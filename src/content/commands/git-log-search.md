---
title: "Git log search"
description: "Search your commit history by message or by code change"
category: "Git"
tags: ["git", "log", "search"]
---

Two ways to search history commits, depend on what you remember.

### By commit message

```bash
git log --grep="variables" --oneline
```

_Only commits whose message match the word:_
![Git Log Grep](/content/commands/git-log-search/git-log-grep.png)

### By code change

```bash
git log -S "variables" --oneline -- src/
```

- `-S` : find commits that added or removed the string
- `-- src/` : limit to a path

_Find the commit that introduce or remove the code:_
![Git Log Pickaxe](/content/commands/git-log-search/git-log-pickaxe.png)

add `-p` to see the diff too.

See you again ^\_^
