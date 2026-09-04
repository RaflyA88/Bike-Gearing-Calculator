# Building Windows Executable

This guide explains how to build a standalone Windows executable (.exe) for the Bike Gearing Calculator.

## Prerequisites

- Node.js installed (version 12 or higher)
- npm (comes with Node.js)

## Build Steps

1. **Install dependencies** (including the `pkg` tool):
   ```bash
   npm install
   ```

2. **Build the executable**:
   ```bash
   npm run build
   ```

3. **Find your executable**:
   - The executable will be created in the `dist` folder
   - File name: `BikeGearingCalculator.exe`

## Running the Executable

1. Double-click `BikeGearingCalculator.exe` or run it from command line:
   ```bash
   dist\BikeGearingCalculator.exe
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. To stop the server, press `Ctrl+C` in the command window

## Distribution

The executable is **standalone** and includes:
- Node.js runtime
- All application code
- The `public` folder with HTML, CSS, and JavaScript files

You can share the **entire `dist` folder** with others. They don't need Node.js installed to run it.

## Troubleshooting

### "Windows protected your PC" warning
- Click "More info" → "Run anyway"
- This happens because the executable is not digitally signed

### Port 3000 already in use
- Close any other applications using port 3000
- Or modify `server.js` to use a different port

### Files not loading
- Make sure the `public` folder is in the same directory as the executable
- The `pkg` tool should automatically include it

## Advanced Build Options

### Build for different targets:
```bash
# Windows 64-bit (default)
pkg . --targets node18-win-x64 --output dist/BikeGearingCalculator.exe

# Windows 32-bit
pkg . --targets node18-win-x86 --output dist/BikeGearingCalculator-32bit.exe

# Multiple targets
pkg . --targets node18-win-x64,node18-linux-x64,node18-macos-x64
```

### Customize output name:
Edit the `build` script in `package.json`:
```json
"build": "pkg . --targets node18-win-x64 --output dist/YourCustomName.exe"
```

## Clean Build

To rebuild from scratch:
```bash
# Delete old build
rmdir /s /q dist

# Rebuild
npm run build
```
