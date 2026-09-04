# PowerShell script to start the Bike Gearing Calculator server

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Bike Gearing Calculator Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting the calculator server..." -ForegroundColor Yellow
Write-Host ""

# Check if Python is available
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Python is not installed or not in PATH!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Python 3 from:" -ForegroundColor Yellow
    Write-Host "https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or open public\index.html directly in your browser." -ForegroundColor Yellow
    Write-Host ""
    pause
    exit 1
}

# Check if public directory exists
if (-not (Test-Path "public")) {
    Write-Host "ERROR: 'public' directory not found!" -ForegroundColor Red
    Write-Host "Please make sure you're in the correct folder." -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "✓ Public directory found" -ForegroundColor Green
Write-Host ""
Write-Host "Starting server on http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Open your browser and go to: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C in this window to stop the server." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the Python server
try {
    python serve.py
} catch {
    Write-Host ""
    Write-Host "Server failed to start. You can still use the calculator by:" -ForegroundColor Red
    Write-Host "1. Opening public\index.html directly in your browser" -ForegroundColor Yellow
    Write-Host "2. Or trying: python -m http.server 3000" -ForegroundColor Yellow
    pause
}