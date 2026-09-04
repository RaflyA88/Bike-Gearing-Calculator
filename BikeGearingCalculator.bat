@echo off
title Bike Gearing Calculator
color 0A

echo ========================================
echo   BIKE GEARING CALCULATOR
echo ========================================
echo.
echo Starting server...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo Server starting on http://localhost:3000
echo.
echo INSTRUCTIONS:
echo 1. Keep this window open
echo 2. Open your browser to: http://localhost:3000
echo 3. Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Start the server
node server.js

pause
