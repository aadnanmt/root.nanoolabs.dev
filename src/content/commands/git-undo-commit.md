---
title: Git undo commit
description: The difference is that git reset --soft, --mixed, same --hard when done incorrectly without breaking a sweat😭😭
category: Git
tags: ["git", "workflow", "cli"]
draft: true
---
### 01. soft reset (safe path)

```sh
git reset --soft HEAD~1
```
- condition: commit message is mistype or there is a missing file in stage, but code is correct
- effect: commit is discard, but all changes to your file remain in staging area (git status is still green)
- action: just re-add git or correct message, continue commit again
