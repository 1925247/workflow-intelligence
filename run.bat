@echo off
echo ===================================================
echo   BIZROK WORKFLOW INTELLIGENCE - GENERATOR AND SCANNER
echo ===================================================

cd /d "%~dp0.."

echo.
echo [1/4] Scanning project architecture...
call pnpm --filter @bizrok/backend exec ts-node ../../workflow/scripts/scan-project.ts

echo.
echo [2/4] Generating Markdown reports...
call pnpm --filter @bizrok/backend exec ts-node ../../workflow/scripts/generate-workflow.ts

echo.
echo [3/4] Building Visual Web Viewer...
call pnpm --filter @bizrok/backend exec ts-node ../../workflow/scripts/build-web-view.ts

echo.
echo [4/4] Validating workflow integrity...
call pnpm --filter @bizrok/backend exec ts-node ../../workflow/scripts/validate-workflow.ts

echo.
echo ===================================================
echo   SUCCESS! Opening Workflow Web Viewer in Browser...
echo ===================================================
start "" "%~dp0web\index.html"