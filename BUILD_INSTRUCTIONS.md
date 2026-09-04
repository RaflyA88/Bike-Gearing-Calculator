# Building Windows Executable - Instructions

This document explains how to build a standalone Windows executable (.exe) for the Bike Gearing Calculator.

## 🎯 What You'll Get

A standalone Windows application that:
- Runs without Python installed
- Runs without opening a web browser
- Has a native window with embedded web view
- Can be distributed as a single .exe file
- No installation required - just double-click to run!

## 📋 Prerequisites

1. **Python 3.7 or higher** installed on Windows
2. **Internet connection** to download packages
3. **Approximately 100-200 MB** of disk space for the build

## 🚀 Quick Start

### Option 1: Using Batch File (Easiest)

1. Open Command Prompt in the project folder
2. Run:
   ```batch
   build_exe.bat
   ```
3. Wait for the build to complete (3-5 minutes)
4. Find your executable at: `dist\BikeGearingCalculator.exe`

### Option 2: Using PowerShell

1. Open PowerShell in the project folder
2. Run:
   ```powershell
   .\build_exe.ps1
   ```
3. Wait for the build to complete (3-5 minutes)
4. Find your executable at: `dist\BikeGearingCalculator.exe`

### Option 3: Manual Build

1. Install required packages:
   ```batch
   pip install pywebview pyinstaller
   ```

2. Build the executable:
   ```batch
   pyinstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" bike_calculator_app.py
   ```

3. Find your executable at: `dist\BikeGearingCalculator.exe`

## 📦 What Gets Built

- **BikeGearingCalculator.exe** - Standalone Windows executable
- **Size:** Approximately 40-60 MB
- **Dependencies:** None! Everything is bundled inside

## 🎨 Adding a Custom Icon (Optional)

1. Create or download a `.ico` file (256x256 pixels recommended)
2. Name it `bike_icon.ico`
3. Place it in the project root folder
4. Run the build script again

The build script will automatically use the icon if it finds `bike_icon.ico`.

## 🔧 Technical Details

### How It Works

1. **Python Backend:** Runs a local HTTP server on port 8765
2. **WebView:** Uses `pywebview` to create a native window
3. **Embedded Web App:** Serves the HTML/CSS/JS files from the `public` folder
4. **PyInstaller:** Bundles everything into a single executable

### Components

- **bike_calculator_app.py** - Main Python application
- **public/** - Web application files (HTML, CSS, JavaScript)
- **pywebview** - Creates native window with embedded browser
- **PyInstaller** - Compiles Python to standalone executable

### Build Process

1. Install dependencies (`pywebview`, `pyinstaller`)
2. Clean previous builds
3. Run PyInstaller with these options:
   - `--onefile` - Create single executable
   - `--windowed` - No console window
   - `--add-data="public;public"` - Include web files
   - `--icon=bike_icon.ico` - Add custom icon (if available)

## 🐛 Troubleshooting

### Build Fails with "Python not found"
- Make sure Python is installed and in your PATH
- Try running `python --version` in Command Prompt

### Build Fails with "Module not found"
- Ensure you have internet connection
- Try manually: `pip install pywebview pyinstaller`

### Executable Doesn't Start
- Make sure the `public` folder is in the same location as the `.py` file
- Check if antivirus is blocking the executable

### Port Already in Use
- Close other applications using port 8765
- Or modify `SERVER_PORT` in `bike_calculator_app.py`

### Executable is Too Large
- This is normal! It includes Python runtime and dependencies
- Typical size: 40-60 MB
- Cannot be reduced significantly

## 📤 Distribution

Once built, you can:

1. **Share the executable:**
   - Send `dist\BikeGearingCalculator.exe` to anyone
   - No installation required
   - Works on any Windows 7+ system

2. **Create an installer (optional):**
   - Use tools like Inno Setup or NSIS
   - Create a professional installer with shortcuts

3. **Zip and share:**
   - Compress `BikeGearingCalculator.exe`
   - Upload to file sharing service
   - Recipients just unzip and run!

## ⚠️ Important Notes

1. **Antivirus Warning:** Some antivirus software may flag PyInstaller executables as suspicious. This is a false positive. You may need to add an exception.

2. **First Run:** The first time you run the executable, Windows may show a security warning. Click "More info" then "Run anyway".

3. **File Size:** The executable is large (40-60 MB) because it includes the Python runtime and all dependencies.

4. **Updates:** If you update the web app (HTML/CSS/JS), you need to rebuild the executable.

## 🎯 Testing the Executable

1. Navigate to `dist` folder
2. Double-click `BikeGearingCalculator.exe`
3. The application window should open automatically
4. No browser window needed!
5. Use the calculator as normal

## 📝 Build Output

Expected files after build:

```
dist/
  └─ BikeGearingCalculator.exe    (Your standalone app!)

build/
  └─ (temporary build files - can be deleted)

BikeGearingCalculator.spec
  └─ (PyInstaller spec file - can be deleted)
```

## 🔄 Rebuild

To rebuild after changes:

1. Delete `dist` and `build` folders
2. Run the build script again
3. Or use: `pyinstaller BikeGearingCalculator.spec`

## 💡 Tips

- **Faster builds:** Keep the `build` folder between builds
- **Smaller exe:** Use `--onedir` instead of `--onefile` (creates folder with multiple files)
- **Debug mode:** Remove `--windowed` to see console output
- **Custom name:** Change `--name="BikeGearingCalculator"` to your preferred name

## 📞 Support

If you encounter issues:

1. Check the error messages in the console
2. Verify Python version: `python --version`
3. Check installed packages: `pip list`
4. Try manual installation: `pip install pywebview pyinstaller`

## 🎉 Success!

Once built successfully:
- Share the executable with anyone
- No dependencies needed
- Works on any Windows PC
- Professional desktop application!

---

**Happy Building! 🚴**