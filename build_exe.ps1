# PowerShell script to build Bike Gearing Calculator executable

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Building Bike Gearing Calculator EXE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is available
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Python is not installed or not in PATH!" -ForegroundColor Red
    Write-Host "Please install Python 3 from: https://www.python.org/downloads/" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host ""
Write-Host "[1/4] Installing required packages..." -ForegroundColor Yellow
python -m pip install --upgrade pip | Out-Null
python -m pip install -r requirements.txt

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install packages!" -ForegroundColor Red
    pause
    exit 1
}

Write-Host "✓ Packages installed" -ForegroundColor Green
Write-Host ""
Write-Host "[2/4] Cleaning previous builds..." -ForegroundColor Yellow

if (Test-Path "build") {
    Remove-Item -Recurse -Force "build"
}
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}
if (Test-Path "bike_calculator_app.spec") {
    Remove-Item -Force "bike_calculator_app.spec"
}

Write-Host "✓ Cleaned" -ForegroundColor Green
Write-Host ""
Write-Host "[3/4] Building executable with PyInstaller..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Yellow

# Try building with icon first
if (Test-Path "bike_icon.ico") {
    python -m PyInstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" --icon=bike_icon.ico bike_calculator_app.py 2>&1 | Out-Null
} else {
    python -m PyInstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" bike_calculator_app.py 2>&1 | Out-Null
}

Write-Host ""
Write-Host "[4/4] Finalizing build..." -ForegroundColor Yellow

if (Test-Path "dist\BikeGearingCalculator.exe") {
    $fileSize = (Get-Item "dist\BikeGearingCalculator.exe").Length
    $fileSizeMB = [math]::Round($fileSize / 1MB, 2)
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host " BUILD SUCCESSFUL!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "The executable has been created at:" -ForegroundColor Cyan
    Write-Host "dist\BikeGearingCalculator.exe" -ForegroundColor White
    Write-Host ""
    Write-Host "File size: $fileSizeMB MB" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "You can run it directly without Python or a browser!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host " BUILD FAILED!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
    Write-Host ""
}

pause