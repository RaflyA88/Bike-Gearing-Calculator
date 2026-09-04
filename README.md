# Bike Gearing Calculator

A bicycle gearing calculator that helps cyclists understand and optimize their gear ratios, speeds, and cadence.

Available as:
- **Web Application** - Run in any browser
- **Windows Desktop App** - Standalone .exe (no browser needed)

## Features

### Core Calculations
- **Gear Ratio Calculation**: Calculate gear ratios for any chainring and cassette combination
- **Gear Inches & Gain Ratios**: Understand the mechanical advantage of your gearing
- **Speed Calculator**: Calculate speed at different cadences for each gear
- **Interactive Chart**: Visualize gear inches across all gear combinations
- **Preset Configurations**: Quick setup for common road, gravel, and mountain bike gearing
- **Responsive Design**: Works on desktop and mobile devices

### 🆕 NEW: Intelligent Recommendations
- **🏔️ Terrain Suitability Analysis**: Get 5-star ratings for your gearing across different terrain types (flat roads, rolling hills, steep climbs, mountain passes, descents)
- **🚴 Riding Type Recommendations**: See which cycling disciplines your gearing is perfect for - from road racing to mountain biking to commuting (10 disciplines analyzed)
- **🛠️ Compatible Groupsets**: Discover which drivetrain components match your setup - 40+ groupsets from Shimano, SRAM, Campagnolo, and microSHIFT
- **⬆️ Improvement Suggestions**: Get prioritized, actionable recommendations to optimize your gearing for climbing, speed, or versatility

## How to Use

1. **Enter your gear setup**:
   - Chainrings (front): Comma-separated list of teeth counts (e.g., 34,50)
   - Cassette (rear): Comma-separated list of teeth counts (e.g., 11,12,14,16,18,21,24,28,32)
   - Wheel size: Diameter in mm (700c = 622mm, 650b = 584mm, 26" = 559mm)
   - Tire width: Width in mm (e.g., 25mm for road tires)
   - Cadence: Your preferred pedaling RPM (typically 80-100 RPM)

2. **Click "Calculate Gearing"** to see results

3. **Explore the results**:
   - Gear table with ratios, gain ratios, and speeds
   - Gear inches chart visualization
   - Required cadence for target speeds
   - **NEW**: Terrain suitability ratings
   - **NEW**: Riding type recommendations
   - **NEW**: Compatible groupset suggestions
   - **NEW**: Personalized upgrade recommendations

## Documentation

- **[Gearing Recommendations Guide](GEARING_RECOMMENDATIONS_GUIDE.md)** - Complete guide to the new recommendation features
- **[Feature Examples](FEATURE_EXAMPLES.md)** - Real-world examples showing recommendations for different rider types
- **[New Features Summary](NEW_FEATURES_SUMMARY.md)** - Technical overview of what's new

## Installation and Running

### Option 1: Windows Desktop Application (No Browser Needed!)

**For End Users - Download and Run:**
1. Download `BikeGearingCalculator.exe`
2. Double-click to run
3. Application opens in its own window!

**For Developers - Build from Source:**
```batch
# Interactive menu
BUILD_AND_RUN.bat

# Or quick build
python test_app.py
build_exe.bat
```

See [README_WINDOWS_EXE.md](README_WINDOWS_EXE.md) and [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md) for details.

### Option 2: Web Version with Python

```bash
# Start the Python server
python serve.py

# Open your browser and navigate to:
# http://localhost:3000
```

### Option 3: Web Version with Node.js

```bash
# Start the server
node server.js

# Open your browser and navigate to:
# http://localhost:3000
```

### Option 4: Direct File Access

Simply open `public/index.html` in your web browser. Note: Some features may require a local server due to CORS restrictions with Chart.js.
```

### Option 3: Direct File Access

Simply open `public/index.html` in your web browser. Note: Some features may require a local server due to CORS restrictions with Chart.js.

## Technical Details

### Calculations

- **Gear Ratio**: Chainring teeth ÷ Cog teeth
- **Gear Inches**: (Chainring ÷ Cog) × Wheel diameter in inches
- **Gain Ratio**: (Chainring ÷ Cog) × (Wheel radius ÷ Crank length)
- **Speed**: Gear inches × π × Cadence × 0.001885 (km/h)

### Default Values

- Chainrings: 34,50 (compact road)
- Cassette: 11,12,14,16,18,21,24,28,32 (11-32)
- Wheel size: 622mm (700c)
- Tire width: 25mm
- Cadence: 90 RPM
- Crank length: 170mm (standard)

## Common Presets

- **Road Compact**: 34/50 chainrings with 11-32 cassette
- **Road Standard**: 39/53 chainrings with 11-23 cassette  
- **Gravel 2x**: 40/42 chainrings with 10-33 cassette
- **Gravel 1x**: 38 chainring with 11-42 cassette
- **Mountain Bike**: 30/46 chainrings with 10-51 cassette
- **Fixie Standard**: 46×16 (700c × 28mm)
- **Fixie Fast**: 48×17 (700c × 28mm)
- **Fixie Easy**: 44×18 (700c × 28mm)
- **City Bike 26"**: 44×16 (26" × 35mm)
- **City Bike 700c**: 46×18 (700c × 35mm)
- **City Bike Comfort**: 38×18 (26" × 40mm)

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Font Awesome for icons
- Google Fonts (Poppins, Roboto)
- Vanilla JavaScript (no frameworks)

## License

MIT License - feel free to use, modify, and distribute.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues or feature requests, please open an issue on the GitHub repository.

---

Made with ❤️ for cyclists everywhere. Happy riding!