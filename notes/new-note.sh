#!/usr/bin/env bash
set -euo pipefail

# Create a new dated note in this folder and update the index in README.md
# Usage: ./new-note.sh <date: YYYY-MM-DD> <slug>
# Example: ./new-note.sh 2025-09-18 transformers

cd "$(dirname "$0")"

if [[ $# -lt 2 ]]; then
  echo "Usage: ./new-note.sh <date: YYYY-MM-DD> <slug>" >&2
  exit 1
fi

DATE="$1"
SLUG="$2"
FILENAME="${DATE}-${SLUG}.md"
TITLE_DATE="$DATE"
TITLE_WORD="${SLUG^}"
TIMESTAMP="$(date -Iseconds)"

if [[ -e "$FILENAME" ]]; then
  echo "File already exists: $FILENAME" >&2
  exit 1
fi

cat > "$FILENAME" << MD
# $TITLE_DATE — $TITLE_WORD

Timestamp: $TIMESTAMP

- 
MD

echo "Created $FILENAME"

# Build new index (newest first)
INDEX=$(ls -1 *.md | grep -v '^README.md$' | sort -r \
  | sed -E 's/^(.*)\.md$/- [\1](.\/\1.md)/' \
  | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})-([a-zA-Z]+)/\1-\2-\3 — \u\4/')

# Replace existing Index section in README.md (if present), otherwise append
awk -v idx="$INDEX" '
  BEGIN { seen=0 }
  /^## Index$/ { seen=1; next }
  seen==1 { next }
  { print }
  END {
    print "";
    print "## Index";
    n = split(idx, lines, "\n");
    for (i = 1; i <= n; i++) if (length(lines[i])) print lines[i];
    print "";
    print "---";
    print "";
    print "To regenerate this list in WSL/Bash:";
    print "";
    print "```bash";
    print "ls -1 *.md | grep -v '^README.md$' | sort -r \\\";";
    print "  | sed -E 's/^(.*)\\\\.md$/- [\\\\1](.\\\\/\\\\1.md)/' \\\";";
    print "  | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})-([a-zA-Z]+)/\\\\1-\\\\2-\\\\3 — \\\\u\\\\4/'";
    print "```";
  }
' README.md > README.md.tmp && mv README.md.tmp README.md

echo "Updated README.md index"

echo "Done. Tip: if needed, run: chmod +x notes/new-note.sh"


