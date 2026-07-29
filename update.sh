#!/usr/bin/env bash
set -e

echo "==================================================="
echo "  WORKFLOW INTELLIGENCE SYSTEM - UPDATER (POSIX)"
echo "==================================================="
echo ""

echo "[1/3] Rescanning project architecture for updates..."
npx -y tsx scripts/scan-project.ts

echo "[2/3] Regenerating Markdown documentation..."
npx -y tsx scripts/generate-md.ts

echo "[3/3] Syncing latest AST map to Web Viewer..."
npx -y tsx scripts/build-viewer.ts
npx -y tsx scripts/validate-workflow.ts

echo ""
echo "==================================================="
echo "  ✅ UPDATE COMPLETE!"
echo "  Open web/index.html in your browser."
echo "==================================================="
