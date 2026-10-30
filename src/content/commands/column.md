---
title: "column from util-linux"
description: "turn a cluttered text file or terminal output to a neat table without any hassle"
tags: ["linux", "util", "cli"]
date: 2026-10-30
category: "Misc"
---

>this time, turn a cluttered text file or terminal output to a neat table without any hassle.

### How to use it for daily use?

For example, if you have text file or want to dump system config whose contents are separated by a delimiter (colon `:` or comma `,`), just shoot it using parameters `-t` (table) and `-s` (separator):

```sh
# combine column with cat
cat /etc/passwd | column -t -s ':'

# if use grep (my preference)
grep ':' /etc/passwd | column -t -s ':'
```

- **`-t`**: automatically determine number of column and adjusts width so that they are evenly aligned
- **`-s ':'`**: tell `column` that divider between columns is a two-point character

---


### 1. Dizzy use cases `[ ¬_¬ ]`

1. **checking environment variables:**
```sh
# if you want to print all environment
printenv | column -t -s '='

# combine with head command (optional)
printenv | head -n 7 | column -t -s '='
```
##### output:
```sh
FNM_ARCH             x64
EDITOR               nvim
FNM_DIR              /home/nan/.local/share/fnm
GPG_TTY              /dev/pts/11
XDG_CURRENT_DESKTOP  niri
VSSCRIPT_PATH        /usr/lib/python3.14/site-packages/vapoursynth/libvsscript.so
LOGNAME              nan
```
>neat results, variable names on left, value on right

2. **read CSV/Custom config file:**

```sh
column -t -s ',' your-file.csv
```

### 2. Best case: consistent delimiter (`/etc/passwd`)

without `column` (raw output with tight `:` delimiter):
```sh
head -n 4 /etc/passwd
```

##### output:
```sh
root:x:0:0::/root:/usr/bin/bash
bin:x:1:1::/:/usr/bin/nologin
daemon:x:2:2::/:/usr/bin/nologin
mail:x:8:12::/var/spool/mail:/usr/bin/nologin
```

#### After combine with column `-t -s ':'`:

```sh
head -n 4 /etc/passwd | column -t -s ':'
```

##### output:
```sh
root    x  0  0     /root            /usr/bin/bash
bin     x  1  1     /                /usr/bin/nologin
daemon  x  2  2     /                /usr/bin/nologin
mail    x  8  12    /var/spool/mail  /usr/bin/nologin
```
