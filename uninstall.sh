#!/usr/bin/env bash
set -e

echo "==================================================="
echo "  WORKFLOW INTELLIGENCE SYSTEM - UNINSTALLER (POSIX)"
echo "==================================================="
echo ""

read -p "Are you sure you want to clean generated workflow artifacts? (y/N): " confirm
if [[ "$confirm" =~ ^[Yy]$ ]]; then
    echo "[1/2] Removing generated data files..."
    rm -rf generated/ web/generated/
    echo "[2/2] Cleanup complete."
    echo ""
    echo "✅ Workflow Intelligence generated files cleaned successfully."
else
    echo "Uninstallation cancelled."
fi
