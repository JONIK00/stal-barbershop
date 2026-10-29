#!/usr/bin/env bash
# Статическая сборка сайта «СТАЛЬ» для хостингов статики (Timeweb App Platform и др.)
#
# Суть: живая страница не делает ни одного API-вызова (бронирование — внешняя ссылка),
# поэтому API-роуты на время сборки убираются, Next собирает чистую статику в out/.
#
# Использование: bun run build:static   (или STATIC_EXPORT=1 bash scripts/build-static.sh)
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -d src/app/api ]; then
  rm -rf .api-backup
  mv src/app/api .api-backup
fi

restore_api() {
  if [ -d .api-backup ]; then
    rm -rf src/app/api
    mv .api-backup src/app/api
  fi
}
trap restore_api EXIT

echo ">>> Building static export (out/)..."
STATIC_EXPORT=1 bunx next build

echo ">>> Done. Static site is in ./out"
