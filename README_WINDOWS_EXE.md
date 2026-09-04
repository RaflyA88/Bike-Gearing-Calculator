# 🚴 Bike Gearing Calculator - Windows Desktop Application

A standalone Windows desktop application for calculating bicycle gear ratios, speeds, and cadence. No browser required!

## 🎯 Features

- **Standalone Application:** Runs directly on Windows without Python or browser
- **Native Window:** Professional desktop application with embedded web view
- **No Installation:** Just download and run the .exe file
- **All Calculator Features:** Full functionality of the web version
- **Offline Ready:** Works without internet connection (after initial download)

## 📥 Download and Run

### For End Users (Pre-built EXE)

1. **Download** `BikeGearingCalculator.exe` from the releases
2. **Double-click** to run
3. **That's it!** The application opens in its own window

### First Run Security Warning

Windows may show a security warning the first time you run the app:

1. Click "**More info**"
2. Click "**Run anyway**"

This is normal for applications not signed with a Microsoft certificate.

## 🔨 Building from Source

If you want to build the executable yourself:

### Prerequisites

- Windows 7 or higher
- Python 3.7 or higher
- Internet connection (for downloading packages)

### Quick Build

1. **Test your system:**
   ```batch
   python test_app.py
   ```

2. **Build the executable:**
   ```batch
   build_exe.bat
   ```
   OR
   ```powershell
   .\build_exe.ps1
   ```

3. **Find your executable:**
   ```
   dist\BikeGearingCalculator.exe
   ```

### Detailed Instructions

See [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md) for complete building guide.

## 📊 Calculator Features

### Gear Calculations
- Gear ratios for any chainring/cassette combination
- Gear inches and gain ratios
- Speed calculations at different cadences
- Interactive gear inches chart

### Preset Configurations
- **Road Bikes:** Compact (34/50), Standard (39/53)
- **Gravel Bikes:** 2x (40/42), 1x (38)
- **Mountain Bikes:** 30/46 with wide range cassettes
- **Fixie/Track:** Standard (46×16), Fast (48×17), Easy (44×18)
- **City Bikes:** 26" (44×16), 700c (46×18), Comfort (38×18)

### Speed Calculator
- Calculate required cadence for target speeds
- Multiple gear combination suggestions
- Realistic speed predictions

### Customization
- Adjustable wheel sizes (700c, 650b, 26", etc.)
- Tire width settings (23mm - 60mm)
- Custom cadence preferences (40-140 RPM)

## 🖥️ System Requirements

- **OS:** Windows 7 SP1 or higher (64-bit)
- **RAM:** 100 MB minimum
- **Disk Space:** 60 MB for the application
- **Display:** 800x600 minimum (1400x900 recommended)

## 🎨 User Interface

- Clean, modern design with Font Awesome icons
- Responsive layout that adapts to window size
- Color-coded presets for easy identification:
  - Blue: Road and gravel bikes
  - Red: Fixie/track bikes
  - Green: City bikes
- Interactive charts using Chart.js
- Tooltip help for all inputs

## 🔧 Technical Details

### What's Inside

- **Python Backend:** Local HTTP server (port 8765)
- **WebView Component:** Native window using pywebview
- **Web Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Charts:** Chart.js for data visualization
- **Icons:** Font Awesome icons

### File Size

- Approximately 40-60 MB
- Includes Python runtime and all dependencies
- Single executable, no external files needed

### Port Usage

- Application uses port **8765** for local server
- If blocked, modify `SERVER_PORT` in source and rebuild

## 🐛 Troubleshooting

### App Won't Start

1. **Check antivirus:** Some antivirus programs block PyInstaller executables
   - Add an exception for BikeGearingCalculator.exe
   
2. **Port conflict:** If port 8765 is in use
   - Close other applications
   - Or rebuild with different port

3. **Missing files:** Make sure you have the complete .exe
   - Redownload if file seems corrupted
   - File should be 40-60 MB in size

### Window Doesn't Appear

1. Check if process is running in Task Manager
2. Try running as Administrator
3. Check Windows Event Viewer for errors

### Calculations Don't Work

1. Close and restart the application
2. Check if you have active internet (only needed once)
3. Try different preset configurations

### Performance Issues

1. Close other applications to free memory
2. Reduce window size
3. Update your graphics drivers

## 🔒 Security and Privacy

- **No Internet Required:** Works offline after download
- **No Data Collection:** No analytics or tracking
- **Local Processing:** All calculations done on your computer
- **No External Connections:** Except for loading CDN resources (Chart.js, Font Awesome)

## 📝 Version History

### Version 1.0.0
- Initial release
- Full web calculator functionality
- 11 preset configurations (road, gravel, mountain, fixie, city)
- Interactive gear charts
- Speed calculator
- Native Windows application

## 🤝 Contributing

To contribute or report issues:

1. Visit the project repository
2. Submit issues or feature requests
3. Fork and create pull requests

## 📄 License

MIT License - Free to use, modify, and distribute

## 🎓 How to Use

### Basic Usage

1. **Launch the application**
2. **Enter your gearing:**
   - Chainrings (front): e.g., `34,50`
   - Cassette (rear): e.g., `11,12,14,16,18,21,24,28,32`
3. **Set wheel size and tire width**
4. **Click "Calculate Gearing"**
5. **View results:**
   - Gear ratio table
   - Gear inches chart
   - Speed calculations
   - Required cadence for target speeds

### Using Presets

1. Scroll to "Common Presets" section
2. Click any preset button
3. Values automatically filled in
4. Calculator updates instantly

### Speed Calculator

1. Enter target speed (km/h)
2. View required cadence for each gear
3. Find optimal gear for your desired speed

## 💡 Tips

- **Lower gear inches** = easier climbing
- **Higher gear inches** = faster on flats
- Typical road cycling cadence: **80-100 RPM**
- Fixie riders often prefer: **70-85 gear inches**
- City bikes work well with: **60-75 gear inches**

## 🌟 Why Use This Calculator?

- **Plan your next bike purchase** with confidence
- **Compare different gearing setups** easily
- **Understand your current bike's** capabilities
- **Optimize for your riding style** (climbing, speed, commuting)
- **Quick reference** for gear ratios and speeds

## 📞 Support

For help or questions:
- Read [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md) for building guide
- Check troubleshooting section above
- Review the web version documentation in [README.md](README.md)

## 🎉 Enjoy!

Happy cycling and may you always find the perfect gear! 🚴

---

**Made with ❤️ for cyclists everywhere**