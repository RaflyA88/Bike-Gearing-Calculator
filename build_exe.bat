@echo off
echo ========================================
echo  Building Bike Gearing Calculator EXE
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH!
    echo Please install Python 3 from: https://www.python.org/downloads/
    pause
    exit /b 1
)

echo [1/4] Installing required packages...
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

if %errorlevel% neq 0 (
    echo ERROR: Failed to install packages!
    pause
    exit /b 1
)

echo.
echo [2/4] Cleaning previous builds...
if exist "build" rmdir /s /q build
if exist "dist" rmdir /s /q dist
if exist "bike_calculator_app.spec" del /q bike_calculator_app.spec

echo.
echo [3/4] Building executable with PyInstaller...
echo This may take a few minutes...
python -m PyInstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" --icon=bike_icon.ico bike_calculator_app.py

if %errorlevel% neq 0 (
    echo ERROR: Failed to build executable!
    echo Trying without icon...
    python -m PyInstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" bike_calculator_app.py
)

echo.
echo [4/4] Finalizing build...
if exist "dist\BikeGearingCalculator.exe" (
    echo.
    echo ========================================
    echo  BUILD SUCCESSFUL!
    echo ========================================
    echo.
    echo The executable has been created at:
    echo dist\BikeGearingCalculator.exe
    echo.
    echo You can run it directly without Python or a browser!
    echo.
    echo File size: 
    dir "dist\BikeGearingCalculator.exe" | find "BikeGearingCalculator.exe"
    echo.
) else (
    echo.
    echo ========================================
    echo  BUILD FAILED!
    echo ========================================
    echo.
    echo Please check the error messages above.
    echo.
)

pause