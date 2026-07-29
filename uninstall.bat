@echo off
TITLE Workflow Intelligence - Uninstaller
COLOR 0C
echo ===================================================
echo   WORKFLOW INTELLIGENCE SYSTEM - UNINSTALLER (WIN)
echo ===================================================
echo.
echo WARNING: This will remove generated AST map files and web viewer build data.
set /p CONFIRM="Are you sure you want to clean generated workflow artifacts? (Y/N): "

if /I "%CONFIRM%"=="Y" (
    echo [1/2] Removing generated data files...
    if exist generated rmdir /s /q generated
    if exist web\generated rmdir /s /q web\generated
    echo [2/2] Cleanup complete.
    echo.
    echo ✅ Workflow Intelligence generated files cleaned successfully.
) else (
    echo Uninstallation cancelled.
)

pause
