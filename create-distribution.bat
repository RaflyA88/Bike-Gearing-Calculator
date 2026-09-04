@echo off
echo ========================================
echo Creating Distribution Package
echo ========================================
echo.

REM Check if dist folder exists
if not exist "dist\BikeGearingCalculator.exe" (
    echo ERROR: Executable not found!
    echo Please run build-exe.bat first.
    echo.
    pause
    exit /b 1
)

echo Creating ZIP file...
echo.

REM Create ZIP using PowerShell
powershell -Command "Compress-Archive -Path 'dist' -DestinationPath 'BikeGearingCalculator-v1.0-Windows.zip' -Force"

if errorlevel 1 (
    echo Failed to create ZIP file
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS!
echo ========================================
echo.
echo Distribution package created:
echo BikeGearingCalculator-v1.0-Windows.zip
echo.
echo Size: 
dir "BikeGearingCalculator-v1.0-Windows.zip" | find "BikeGearingCalculator"
echo.
echo This ZIP file contains everything needed to run the application.
echo Users just need to:
echo 1. Extract the ZIP file
echo 2. Open the 'dist' folder
echo 3. Double-click 'Start-BikeCalculator.bat'
echo.
echo ========================================
pause
