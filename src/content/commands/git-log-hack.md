---
title: "Git log hack"
description: "Mastering git log visualization and custom format to track your history like a pro."
category: "Git"
---

Sometimes you wonder "history commit git". Use this command to hack git log or history on the current directory.

```bash
git log # yap, this basic commands git to saw history commit
```

_Default output, a bit too much and messy right?_
<img src="/content/commands/git-log-hack/git-log-complex.png" alt="Git Log Complex" class="rounded-lg"/>

### So, break down some command hack for git log:

1.  `git log` : basic commands git to saw history commit.
2.  `--format='%ae | %an'` : change format output default git.
    - `%ae` : take author email.
    - `|` : pipe separator.
    - `%an` : take author name.
3.  `| sort` : throw hasil from git to terminal and sorting alphabet based email address.

_After we filter and sort by email, clean and simple:_
<img src="/content/commands/git-log-hack/git-log-user.png" alt="Git Log User" class="rounded-lg"/>

### Advanced hack for visual history:

1.  `git log` : basic commands git to saw history commit.
2.  `-n 2` : limit output only for the last 2 commits.
3.  `--oneline` : condense each commit into a single line (hash + subject).
4.  `--graph` : draw a text-based graphical representation of the commit history.
5.  `--all` : show history for all branches, not just the current one.

_Visual graph, now you see all flow branch clearly. whoahhh:_
<img src="/content/commands/git-log-hack/git-log-graph.png" alt="Git Log Graph All" class="rounded-lg"/>

currently you know ~ see you again ^\_^
