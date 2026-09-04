# 🚀 Quick Start Guide - Windows Desktop Application

## For Users (Using Pre-built EXE)

### Step 1: Download
Download `BikeGearingCalculator.exe` from the releases page.

### Step 2: Run
Double-click `BikeGearingCalculator.exe` to start the application.

### Step 3: Use
The calculator opens in its own window. No browser needed!

---

## For Developers (Building from Source)

### One-Command Build

Open Command Prompt in the project folder and run:

```batch
python test_app.py
```

Follow the prompts, then run:

```batch
build_exe.bat
```

That's it! Find your executable at `dist\BikeGearingCalculator.exe`

---

## Detailed Steps

### 1. Test Your System

```batch
python test_app.py
```

This will:
- Check Python version
- Check for required packages
- Offer to install missing packages
- Verify all files are present
- Optionally test the app

### 2. Build the Executable

**Option A: Batch File**
```batch
build_exe.bat
```

**Option B: PowerShell**
```powershell
.\build_exe.ps1
```

**Option C: Manual**
```batch
pip install pywebview pyinstaller
pyinstaller --name="BikeGearingCalculator" --onefile --windowed --add-data="public;public" bike_calculator_app.py
```

### 3. Find Your Executable

Navigate to: `dist\BikeGearingCalculator.exe`

Size: ~40-60 MB

### 4. Test the Executable

```batch
cd dist
BikeGearingCalculator.exe
```

---

## Build Time

- First build: **3-5 minutes**
- Subsequent builds: **1-3 minutes**

---

## Troubleshooting

### Python Not Found
```batch
python --version
```
If this fails, install Python from python.org

### Package Installation Fails
```batch
python -m pip install --upgrade pip
pip install pywebview pyinstaller
```

### Build Fails
1. Delete `build` and `dist` folders
2. Delete `*.spec` files
3. Try again

### Antivirus Blocks EXE
1. This is a false positive
2. Add exception in your antivirus
3. Or submit for whitelisting

---

## What Gets Created

```
dist/
  └─ BikeGearingCalculator.exe   ← Your standalone app!

build/                            ← Temporary (can delete)
BikeGearingCalculator.spec       ← Build config (can delete)
```

---

## Distribution

Once built, you can:

1. **Run locally:** Just double-click the .exe
2. **Share with others:** Send the .exe file (40-60 MB)
3. **No installation needed:** Recipients just run it
4. **Works on any Windows PC:** No dependencies required

---

## Next Steps

After building successfully:

1. ✅ Test the executable
2. ✅ Share with others
3. ✅ Create a shortcut on your desktop
4. ✅ Pin to taskbar for quick access

---

## Support

- **Building issues?** See [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md)
- **Using the app?** See [README_WINDOWS_EXE.md](README_WINDOWS_EXE.md)
- **Web version?** See [README.md](README.md)

---

**Happy Building! 🎉**