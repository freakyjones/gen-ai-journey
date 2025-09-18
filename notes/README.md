# Notes

Short learning notes. Newest first.

## Index
- [2025-09-18 — Transformers](./2025-09-18-transformers.md)
- [2025-09-18 — Attention](./2025-09-18-attention.md)

---

To regenerate this list in WSL/Bash:

```bash
ls -1 *.md | grep -v '^README.md$' | sort -r \
  | sed -E 's/^(.*)\.md$/- [\1](.\/\1.md)/' \
  | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})-([a-zA-Z]+)/\1-\2-\3 — \u\4/'
```

