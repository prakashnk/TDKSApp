#!/usr/bin/env bash
set -euo pipefail
PORT=${PORT:-8000}
ROOT_DIR=$(cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT_DIR"
echo "Serving TDK Kannada Sangha site on http://localhost:${PORT} (Ctrl+C to stop)"
python3 -m http.server "$PORT"
