@echo off
echo ========================================
echo Building Bike Gearing Calculator
echo Windows Executable
echo ========================================
echo.

echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Building executable...
echo This may take a few minutes on first run...
call npm run build
if errorlevel 1 (
    echo Build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo Your executable is located at:
echo dist\BikeGearingCalculator.exe
echo.
echo To run it:
echo 1. Navigate to the dist folder
echo 2. Double-click BikeGearingCalculator.exe
echo 3. Open browser to http://localhost:3000
echo.
pause
