@echo off
echo ========================================
echo  Bike Gearing Calculator Server
echo ========================================
echo.
echo Starting the calculator server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH!
    echo.
    echo Please install Python 3 from:
    echo https://www.python.org/downloads/
    echo.
    echo Or open public\index.html directly in your browser.
    pause
    exit /b 1
)

REM Check if public directory exists
if not exist "public" (
    echo ERROR: 'public' directory not found!
    echo Please make sure you're in the correct folder.
    pause
    exit /b 1
)

echo Starting server on http://localhost:3000
echo.
echo Open your browser and go to: http://localhost:3000
echo.
echo Press Ctrl+C in this window to stop the server.
echo.
echo ========================================
echo.

REM Start the Python server
python serve.py

if %errorlevel% neq 0 (
    echo.
    echo Server failed to start. You can still use the calculator by:
    echo 1. Opening public\index.html directly in your browser
    echo 2. Or trying: python -m http.server 3000
    pause
)