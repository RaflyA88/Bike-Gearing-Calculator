# Windows Executable Guide

## 🎯 Two Options Available

### Option A: Quick Launcher (Requires Node.js)
**Best for:** Quick testing and development
- ✅ Small file size
- ✅ Easy to run
- ❌ Requires Node.js installed

**How to use:**
1. Double-click `BikeGearingCalculator.bat`
2. Browser opens automatically to http://localhost:3000
3. Done!

---

### Option B: Standalone Executable (No Node.js Required)
**Best for:** Distribution to others
- ✅ No dependencies needed
- ✅ Fully portable
- ✅ Professional deployment
- ❌ Larger file size (~50MB)
- ❌ Takes time to build

**How to build:**

1. **Run the build script:**
   ```batch
   build-exe.bat
   ```
   OR manually:
   ```batch
   npm install
   npm run build
   ```

2. **Wait for build to complete** (5-10 minutes on first build)
   - Downloads Node.js runtime (~40MB)
   - Packages your application
   - Creates standalone executable

3. **Find your executable:**
   ```
   dist\BikeGearingCalculator.exe
   ```

4. **Distribute the entire `dist` folder:**
   - The executable needs the `public` folder
   - Everything is self-contained
   - No installation required on target machine

---

## 📦 What Gets Built?

```
dist/
├── BikeGearingCalculator.exe  (Standalone executable with Node.js)
└── public/                     (Your web files - HTML, CSS, JS)
    ├── index.html
    ├── styles.css
    └── script.js
```

---

## 🚀 Running the Executable

**Method 1: Double-click**
- Double-click `BikeGearingCalculator.exe`
- Open browser to http://localhost:3000

**Method 2: Command line**
```batch
cd dist
BikeGearingCalculator.exe
```

---

## ⚠️ Troubleshooting

### "Windows protected your PC" warning
This is normal for unsigned executables:
1. Click "More info"
2. Click "Run anyway"

### Build takes too long
First build downloads Node.js binary (~40MB). Subsequent builds are faster.

### "Port 3000 is already in use"
- Close other applications using port 3000
- Or modify `server.js` to use a different port

### Executable won't run
- Make sure `public` folder is in the same directory
- Check if antivirus is blocking it
- Try running as administrator

---

## 🎨 Customization

### Change port number:
Edit `server.js`, line 5:
```javascript
const PORT = 3000;  // Change to your desired port
```

### Change executable name:
Edit `package.json`, "build" script:
```json
"build": "pkg . --targets node18-win-x64 --output dist/YourName.exe"
```

---

## 📊 File Sizes

- **Quick Launcher (.bat):** ~1 KB
- **Standalone Executable:** ~45-50 MB
- **With public folder:** ~45-51 MB total

---

## 🔧 Advanced Build Options

### Build for 32-bit Windows:
```batch
pkg . --targets node18-win-x86 --output dist/BikeGearingCalculator-32bit.exe
```

### Build for multiple platforms:
```batch
pkg . --targets node18-win-x64,node18-linux-x64,node18-macos-x64
```

### Compress executable (using UPX):
```batch
upx --best dist/BikeGearingCalculator.exe
```
*Note: Requires UPX tool installed*

---

## 📝 Distribution Checklist

When sharing your application:

- [ ] Include the entire `dist` folder
- [ ] Add README.txt with instructions
- [ ] Include LICENSE file if required
- [ ] Test on a clean Windows machine
- [ ] Consider creating a ZIP file for easy distribution

---

## 🆘 Need Help?

1. Check BUILD.md for detailed build instructions
2. Check README.md for application usage
3. Make sure Node.js is installed for building
4. Verify all files in `public` folder are present

---

## 📌 Quick Reference

| Task | Command |
|------|---------|
| Build executable | `build-exe.bat` or `npm run build` |
| Quick run (with Node) | `BikeGearingCalculator.bat` |
| Run executable | `dist\BikeGearingCalculator.exe` |
| Clean build | `rmdir /s /q dist` then rebuild |

---

**Happy cycling! 🚴‍♂️**
