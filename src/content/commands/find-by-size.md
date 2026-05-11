---
title: "Find files by size"
description: "How to quick find large files that are eating  your disk space"
category: "FileSystem"
---

Sometimes you wonder "why your disk is full?". Use this command to find file larger than 300MB on the current directory.

```bash
find . -type f -size +300M
```

### So, break down command:

1.  `.` : find on curret folder.
2.  `-type f` : just find file (not folder).
3.  `-size +300M` : size larger than 300 Megabytes.

**Pro tip for you:**
if you want sorting from size larger, pipe to `ls` and `sort`:

```bash
find . -type f -size +300M -exec ls -lh {} + | awk '{ print $5, $9 }' | sort -h
```

currently you know ~ who eat storage you. see you again ^\_^
