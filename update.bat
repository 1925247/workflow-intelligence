@echo off
TITLE Workflow Intelligence - Updater
COLOR 0B
echo ===================================================
echo   WORKFLOW INTELLIGENCE SYSTEM - UPDATER (WIN)
echo ===================================================
echo.

echo [1/3] Rescanning project architecture for updates...
call npx -y tsx scripts/scan-project.ts

echo [2/3] Regenerating Markdown documentation...
call npx -y tsx scripts/generate-md.ts

echo [3/3] Syncing latest AST map to Web Viewer...
call npx -y tsx scripts/build-viewer.ts
call npx -y tsx scripts/validate-workflow.ts

echo.
echo ===================================================
echo   ✅ UPDATE COMPLETE! Opening Web Viewer...
echo ===================================================
start web\index.html
pause
