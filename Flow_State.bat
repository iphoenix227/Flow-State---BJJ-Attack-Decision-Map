@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"

set "APP_DIR=%~dp0"
set "NPM_CMD="
set "PF86=%ProgramFiles(x86)%"

echo ==========================================
echo   Flow State - BJJ Attack Decision Map
echo ==========================================
echo.

rem Prefer bundled Node runtime if provided with a shared package.
if exist "%APP_DIR%runtime\node\npm.cmd" (
    set "NPM_CMD=%APP_DIR%runtime\node\npm.cmd"
)

rem Fallback to system Node/npm.
if not defined NPM_CMD (
    if exist "%ProgramFiles%\nodejs\npm.cmd" set "NPM_CMD=%ProgramFiles%\nodejs\npm.cmd"
)

if not defined NPM_CMD (
    if defined PF86 if exist "%PF86%\nodejs\npm.cmd" set "NPM_CMD=%PF86%\nodejs\npm.cmd"
)

if not defined NPM_CMD (
    for /f "delims=" %%I in ('where npm.cmd 2^>nul') do (
        echo %%I | find /I "\node_modules\" >nul
        if errorlevel 1 if not defined NPM_CMD set "NPM_CMD=%%I"
    )
)

rem Best-effort bootstrap: install Node LTS with winget if available.
if not defined NPM_CMD (
    where winget >nul 2>nul
    if %errorlevel% equ 0 (
        echo Node.js not found. Attempting automatic install via winget...
        winget install -e --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        if exist "%ProgramFiles%\nodejs\npm.cmd" set "NPM_CMD=%ProgramFiles%\nodejs\npm.cmd"
        if not defined NPM_CMD if defined PF86 if exist "%PF86%\nodejs\npm.cmd" set "NPM_CMD=%PF86%\nodejs\npm.cmd"
        if not defined NPM_CMD (
            for /f "delims=" %%I in ('where npm.cmd 2^>nul') do (
                echo %%I | find /I "\node_modules\" >nul
                if errorlevel 1 if not defined NPM_CMD set "NPM_CMD=%%I"
            )
        )
    )
)

if not defined NPM_CMD (
    echo.
    echo ERROR: Node.js/npm is not available.
    echo.
    echo Options:
    echo   - Install Node.js LTS: https://nodejs.org/
    echo   - Or include a portable runtime at: runtime\node\ with npm.cmd
    echo.
    pause
    exit /b 1
)

if not exist "%APP_DIR%node_modules" (
    echo First run detected. Installing dependencies...
    call "%NPM_CMD%" ci --no-fund --no-audit
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Dependency installation failed.
        pause
        exit /b 1
    )
) else (
    if not exist "%APP_DIR%node_modules\.bin\vite" (
        echo Dependencies look incomplete. Repairing install...
        call "%NPM_CMD%" ci --no-fund --no-audit
        if %errorlevel% neq 0 (
            echo.
            echo ERROR: Dependency repair failed.
            pause
            exit /b 1
        )
    )
)

echo.
echo Starting Flow State...
echo Press Ctrl+C in this window to stop.
echo.

call "%NPM_CMD%" run dev -- --host 127.0.0.1 --open

echo.
echo Server stopped.
pause
