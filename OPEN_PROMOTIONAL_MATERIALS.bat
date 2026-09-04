@echo off
title Open Promotional Materials
color 0A

echo.
echo  ========================================
echo   BIKE GEARING CALCULATOR
echo   Promotional Materials
echo  ========================================
echo.
echo  Opening promotional materials folder...
echo.

REM Open the promotional_materials folder
start "" "%~dp0promotional_materials"

echo  Folder opened in Windows Explorer!
echo.
echo  Files in the folder:
echo   - promotional_poster.html      (Print poster)
echo   - social_media_poster.html     (Social media)
echo   - simple_flyer.html            (A4 flyer)
echo   - PROMOTIONAL_MATERIALS.md     (Guide)
echo   - PROMOTIONAL_SUMMARY.md       (Quick ref)
echo   - README.md                    (Overview)
echo.
echo  Double-click any HTML file to open in browser!
echo.
timeout /t 3 >nul