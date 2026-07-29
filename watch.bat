@echo off
echo ===================================================
echo   BIZROK WORKFLOW INTELLIGENCE - LIVE WATCH MODE
echo ===================================================

cd /d "%~dp0.."

echo.
echo Starting development-time source file watcher...
call pnpm --filter @bizrok/backend exec ts-node ../../workflow/scripts/watch-workflow.ts

pause
