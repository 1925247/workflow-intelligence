@echo off
TITLE Workflow Intelligence - Installation
COLOR 0A
echo ===================================================
echo   WORKFLOW INTELLIGENCE SYSTEM - INSTALLER (WIN)
echo ===================================================
echo.

echo [1/3] Checking Node.js and TypeScript environment...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed! Please install Node.js v18+ first.
    pause
    exit /b 1
)

echo [2/3] Building initial AST Project Map and Web Viewer...
call npx -y tsx scripts/scan-project.ts
call npx -y tsx scripts/generate-md.ts
call npx -y tsx scripts/build-viewer.ts
call npx -y tsx scripts/validate-workflow.ts

echo.
echo ===================================================
echo   🎉 INSTALLATION COMPLETE! Opening Web Viewer...
echo ===================================================
start web\index.html
pause
