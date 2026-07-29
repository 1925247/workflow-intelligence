#!/usr/bin/env bash
set -e

echo "==================================================="
echo "  WORKFLOW INTELLIGENCE SYSTEM - INSTALLER (POSIX)"
echo "==================================================="
echo ""

echo "[1/3] Checking Node.js environment..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed! Please install Node.js v18+ first."
    exit 1
fi

echo "[2/3] Building initial AST Project Map and Web Viewer..."
npx -y tsx scripts/scan-project.ts
npx -y tsx scripts/generate-md.ts
npx -y tsx scripts/build-viewer.ts
npx -y tsx scripts/validate-workflow.ts

echo ""
echo "==================================================="
echo "  🎉 INSTALLATION COMPLETE!"
echo "  Open web/index.html in your browser."
echo "==================================================="
