#!/usr/bin/env bash
set -e

echo "==================================================="
echo "  WORKFLOW INTELLIGENCE - GENERATOR AND SCANNER"
echo "==================================================="

echo "[1/4] Scanning project architecture..."
npx tsx workflow/scripts/scan-project.ts

echo "[2/4] Generating Markdown reports..."
npx tsx workflow/scripts/generate-md.ts

echo "[3/4] Building Visual Web Viewer..."
npx tsx workflow/scripts/build-viewer.ts

echo "[4/4] Validating workflow integrity..."
npx tsx workflow/scripts/validate-workflow.ts

echo ""
echo "==================================================="
echo "  SUCCESS! Opening Workflow Web Viewer in Browser..."
echo "==================================================="
