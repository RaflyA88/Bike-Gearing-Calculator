@echo off
title Bike Gearing Calculator - Build and Run
color 0A

:MENU
cls
echo.
echo  ====================================================
echo   BIKE GEARING CALCULATOR - Windows Desktop App
echo  ====================================================
echo.
echo   What would you like to do?
echo.
echo   1. Test System (Check requirements)
echo   2. Build Executable (Create .exe file)
echo   3. Run Existing Executable
echo   4. Install Dependencies Only
echo   5. Clean Build Files
echo   6. View Documentation
echo   0. Exit
echo.
echo  ====================================================
echo.

set /p choice="Enter your choice (0-6): "

if "%choice%"=="1" goto TEST
if "%choice%"=="2" goto BUILD
if "%choice%"=="3" goto RUN
if "%choice%"=="4" goto INSTALL
if "%choice%"=="5" goto CLEAN
if "%choice%"=="6" goto DOCS
if "%choice%"=="0" goto EXIT

echo Invalid choice. Please try again.
timeout /t 2 >nul
goto MENU

:TEST
cls
echo.
echo  ====================================================
echo   TESTING SYSTEM
echo  ====================================================
echo.
python test_app.py
echo.
pause
goto MENU

:BUILD
cls
echo.
echo  ====================================================
echo   BUILDING EXECUTABLE
echo  ====================================================
echo.
echo  This will create a standalone Windows application.
echo  Build time: 3-5 minutes (first time)
echo.
echo  Press Ctrl+C to cancel, or
pause

call build_exe.bat

echo.
echo  ====================================================
if exist "dist\BikeGearingCalculator.exe" (
    echo   BUILD COMPLETE!
    echo.
    echo   Your executable is ready at:
    echo   dist\BikeGearingCalculator.exe
    echo.
    set /p runNow="Would you like to run it now? (y/n): "
    if /i "%runNow%"=="y" (
        echo.
        echo  Starting application...
        start "" "dist\BikeGearingCalculator.exe"
    )
) else (
    echo   BUILD FAILED!
    echo.
    echo   Please check the errors above.
)
echo  ====================================================
echo.
pause
goto MENU

:RUN
cls
echo.
echo  ====================================================
echo   RUNNING EXECUTABLE
echo  ====================================================
echo.

if exist "dist\BikeGearingCalculator.exe" (
    echo  Starting Bike Gearing Calculator...
    echo.
    start "" "dist\BikeGearingCalculator.exe"
    echo  Application started!
    timeout /t 2 >nul
) else (
    echo  ERROR: Executable not found!
    echo.
    echo  Please build the executable first (Option 2)
    echo.
    pause
)
goto MENU

:INSTALL
cls
echo.
echo  ====================================================
echo   INSTALLING DEPENDENCIES
echo  ====================================================
echo.
echo  Installing pywebview and PyInstaller...
echo.

python -m pip install --upgrade pip
python -m pip install pywebview pyinstaller

if %errorlevel% equ 0 (
    echo.
    echo  ✓ Dependencies installed successfully!
) else (
    echo.
    echo  ✗ Installation failed. Please check errors above.
)
echo.
pause
goto MENU

:CLEAN
cls
echo.
echo  ====================================================
echo   CLEANING BUILD FILES
echo  ====================================================
echo.
echo  This will delete:
echo   - build folder
echo   - dist folder
echo   - .spec files
echo.
set /p confirm="Are you sure? (y/n): "

if /i "%confirm%"=="y" (
    echo.
    echo  Cleaning...
    
    if exist "build" (
        rmdir /s /q build
        echo  ✓ Deleted build folder
    )
    
    if exist "dist" (
        rmdir /s /q dist
        echo  ✓ Deleted dist folder
    )
    
    if exist "*.spec" (
        del /q *.spec
        echo  ✓ Deleted .spec files
    )
    
    echo.
    echo  Cleanup complete!
) else (
    echo.
    echo  Cleanup cancelled.
)
echo.
pause
goto MENU

:DOCS
cls
echo.
echo  ====================================================
echo   DOCUMENTATION FILES
echo  ====================================================
echo.
echo   Available documentation:
echo.
echo   1. QUICK_START.md          - Quick start guide
echo   2. BUILD_INSTRUCTIONS.md   - Detailed build guide
echo   3. README_WINDOWS_EXE.md   - Windows app guide
echo   4. README.md               - Web version guide
echo.
echo   Opening file explorer...
echo.

explorer .

timeout /t 2 >nul
goto MENU

:EXIT
cls
echo.
echo  ====================================================
echo   Thank you for using Bike Gearing Calculator!
echo  ====================================================
echo.
echo   Happy Cycling! 🚴
echo.
timeout /t 2 >nul
exit

:ERROR
echo.
echo  An error occurred. Please try again.
pause
goto MENU