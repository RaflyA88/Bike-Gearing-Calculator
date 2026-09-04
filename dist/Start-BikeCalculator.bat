@echo off
title Bike Gearing Calculator
color 0A

cls
echo.
echo ========================================
echo   BIKE GEARING CALCULATOR
echo ========================================
echo.
echo Starting application...
echo.
echo The calculator will open in your browser.
echo Keep this window open while using the app.
echo.
echo ========================================
echo.

start http://localhost:3000

BikeGearingCalculator.exe

echo.
echo Application stopped.
echo.
pause
