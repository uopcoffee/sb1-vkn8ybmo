#!/bin/bash
set -euo pipefail
# Install Node dependencies from package-lock.json
npm ci
# vitest expects jsdom as a peer dependency
npm install --no-save jsdom
