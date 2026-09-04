# Technical Resources for Development

This document contains technical resources, libraries, and tools used in building the Bike Gearing Calculator.

## Table of Contents

1. [Frontend Technologies](#frontend-technologies)
2. [Chart.js Visualization](#chartjs-visualization)
3. [Python Backend](#python-backend)
4. [Node.js Backend](#nodejs-backend)
5. [Desktop Application Deployment](#desktop-application-deployment)
6. [Development Tools](#development-tools)

---

## Frontend Technologies

### HTML5
- **Standard**: W3C HTML5 Specification
- **Used For**: Semantic structure, forms, canvas elements
- **Key Features**:
  - Form validation
  - Input types (number, text)
  - Data attributes for configuration

### CSS3
- **Features Used**:
  - Flexbox for layout
  - Grid for responsive design
  - Media queries for mobile responsiveness
  - Custom properties (CSS variables)
  - Transitions and animations

### JavaScript ES6+
- **Modern Features Used**:
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread operator
  - Array methods (map, filter, reduce)
  - Promises and async/await (if needed for future features)

**Why Vanilla JavaScript?**
- Lightweight (no framework overhead)
- Fast load times
- Easy to understand and maintain
- No build process required
- Direct browser execution

### Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 60+ | Full support |
| Firefox | 55+ | Full support |
| Safari | 11+ | Full support |
| Edge | 79+ | Chromium-based |
| Opera | 47+ | Chromium-based |
| IE | Not supported | Use modern browsers |

**Compatibility Resources:**
- Can I Use: https://caniuse.com/
- MDN Browser Compatibility: https://developer.mozilla.org/

---

## Chart.js Visualization

### Official Documentation
- **Website**: https://www.chartjs.org/
- **Current Version**: v4.5.1
- **License**: MIT License
- **GitHub**: https://github.com/chartjs/Chart.js

### Installation Methods

#### CDN (Used in this project)
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

#### NPM (Alternative)
```bash
npm install chart.js
```

### Line Chart Documentation
- **URL**: https://www.chartjs.org/docs/latest/charts/line.html
- **Use Case**: Visualizing gear inches progression across gear combinations
- **Features Used**:
  - Multiple datasets (one per chainring)
  - Point styling
  - Tooltips
  - Responsive sizing
  - Grid lines

### Configuration Options

#### Chart Types Available
- Line (used in this project)
- Bar
- Pie
- Doughnut
- Radar
- Polar Area
- Bubble
- Scatter

#### Customization Used in Project

```javascript
// Example configuration
{
  type: 'line',
  data: {
    labels: ['11t', '12t', '14t', ...],
    datasets: [{
      label: '50T Chainring',
      data: [122.7, 112.5, 96.4, ...],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gear Inches Chart'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Gear Inches'
        }
      }
    }
  }
}
```

### Chart.js Plugins
- **Chart.js Zoom**: For interactive zooming
- **Chart.js Annotation**: For marking specific values
- **ChartDataLabels**: For displaying values on chart

### Resources
- **Getting Started**: https://www.chartjs.org/docs/latest/getting-started/
- **Samples**: https://www.chartjs.org/docs/latest/samples/
- **API Reference**: https://www.chartjs.org/docs/latest/api/

---

## Python Backend

### Python Version
- **Minimum**: Python 3.7+
- **Recommended**: Python 3.10+
- **Current**: Project tested with Python 3.11

### HTTP Server

#### Built-in HTTP Server (Development)
```python
# serve.py
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

os.chdir('public')
httpd = HTTPServer(('localhost', 3000), CORSRequestHandler)
print("Server running at http://localhost:3000")
httpd.serve_forever()
```

**Resources:**
- Python HTTP Server Docs: https://docs.python.org/3/library/http.server.html

### PyWebView (Desktop Application)

#### Installation
```bash
pip install pywebview
```

#### Features
- Creates native OS windows
- No browser chrome/UI
- Cross-platform (Windows, macOS, Linux)
- Lightweight
- Two-way JavaScript-Python communication

#### Basic Usage
```python
import webview

webview.create_window('Bike Gearing Calculator', 'public/index.html')
webview.start()
```

**Resources:**
- PyWebView Docs: https://pywebview.flowrl.com/
- GitHub: https://github.com/r0x0r/pywebview

### Requirements

#### requirements.txt
```
pywebview>=4.0
pyinstaller>=6.0
```

---

## Node.js Backend

### Node.js Version
- **Minimum**: Node.js 14+
- **Recommended**: Node.js 18+ (LTS)

### Express.js Framework

#### Installation
```bash
npm install express
```

#### Basic Server (server.js)
```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### Package Configuration

#### package.json
```json
{
  "name": "bike-gearing-calculator",
  "version": "1.0.0",
  "description": "Bicycle gearing calculator web application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

### Resources
- **Express.js**: https://expressjs.com/
- **Node.js Docs**: https://nodejs.org/docs/
- **NPM Registry**: https://www.npmjs.com/

---

## Desktop Application Deployment

### PyInstaller

#### Official Resources
- **Website**: https://pyinstaller.org/
- **Documentation**: https://pyinstaller.org/en/stable/
- **GitHub**: https://github.com/pyinstaller/pyinstaller

#### Installation
```bash
pip install pyinstaller
```

#### Basic Build Command
```bash
pyinstaller --onefile --windowed bike_calculator_app.py
```

#### Advanced Build Options

```bash
pyinstaller --onefile ^
  --windowed ^
  --name "BikeGearingCalculator" ^
  --icon=icon.ico ^
  --add-data "public;public" ^
  bike_calculator_app.py
```

**Options Explained:**
- `--onefile`: Bundle everything into a single .exe
- `--windowed`: No console window (GUI app)
- `--name`: Custom executable name
- `--icon`: Application icon
- `--add-data`: Include additional files/folders

#### Spec File Customization

For advanced builds, create a `.spec` file:

```python
# bike_calculator.spec
# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

a = Analysis(
    ['bike_calculator_app.py'],
    pathex=[],
    binaries=[],
    datas=[('public', 'public')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='BikeGearingCalculator',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon='icon.ico'
)
```

#### Build from Spec
```bash
pyinstaller bike_calculator.spec
```

### Troubleshooting PyInstaller

#### Common Issues

**Issue**: Missing modules
```bash
# Solution: Add hidden imports
pyinstaller --hidden-import=module_name
```

**Issue**: Antivirus false positives
- **Solution**: Submit .exe to antivirus vendor's whitelist
- **Alternative**: Sign the executable with a code signing certificate

**Issue**: Large file size
```bash
# Solution: Use UPX compression
pyinstaller --upx-dir=/path/to/upx
```

#### Resources
- **PyInstaller Manual**: https://pyinstaller.org/en/stable/usage.html
- **Common Errors**: https://github.com/pyinstaller/pyinstaller/wiki/If-Things-Go-Wrong
- **Tutorials**: https://www.pythonguis.com/tutorials/packaging-pyqt5-pyside2-applications-windows-pyinstaller/

---

## Development Tools

### Code Editors

#### Visual Studio Code
- **Extensions**:
  - Live Server (for quick testing)
  - Prettier (code formatting)
  - ESLint (JavaScript linting)
  - Python extension
  - HTML CSS Support

#### Configuration (.vscode/settings.json)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true
}
```

### Version Control

#### Git
- **Ignore File** (.gitignore):
```
node_modules/
dist/
build/
__pycache__/
*.pyc
.env
*.exe
*.spec
```

### Browser Developer Tools

#### Chrome DevTools
- **Elements**: Inspect HTML/CSS
- **Console**: Debug JavaScript
- **Network**: Monitor resource loading
- **Performance**: Profile application speed
- **Lighthouse**: Audit accessibility and performance

#### Debugging Tips
```javascript
// Console logging
console.log('Gear Ratio:', gearRatio);

// Breakpoints in DevTools
debugger; // Pauses execution

// Performance monitoring
console.time('calculation');
// ... code ...
console.timeEnd('calculation');
```

### Testing Tools

#### Manual Testing Checklist
- [ ] Test all preset buttons
- [ ] Verify calculations with known values
- [ ] Test edge cases (very large/small numbers)
- [ ] Test invalid input handling
- [ ] Test responsive design on mobile
- [ ] Test in different browsers
- [ ] Verify chart renders correctly
- [ ] Test keyboard navigation

#### Validation Tools
- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **JavaScript Linter**: ESLint

---

## External Libraries Used

### Google Fonts
- **Fonts**: Poppins, Roboto
- **CDN**: https://fonts.googleapis.com/
- **Usage**:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
```

### Font Awesome
- **Version**: Font Awesome 6
- **CDN**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/
- **Usage**: Icons for UI elements
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Chart.js
- **Version**: 4.5.1
- **CDN**: https://cdn.jsdelivr.net/npm/chart.js
- **Purpose**: Data visualization

---

## Performance Optimization

### Best Practices

1. **Minimize HTTP Requests**
   - Use CDN for libraries
   - Combine CSS/JS files if needed

2. **Optimize Images**
   - Use appropriate formats (WebP, PNG, SVG)
   - Compress images
   - Use responsive images

3. **Lazy Loading**
   - Load Chart.js only when needed
   - Defer non-critical JavaScript

4. **Caching**
   - Set appropriate cache headers for static assets
   - Use service workers for offline capability (future enhancement)

### Build Optimization

```bash
# Minify JavaScript (if using build process)
npm install terser -g
terser script.js -o script.min.js

# Minify CSS
npm install clean-css-cli -g
cleancss -o styles.min.css styles.css
```

---

## Security Considerations

### Input Validation
```javascript
// Always validate user input
function validateInput(value, min, max) {
  const num = parseFloat(value);
  if (isNaN(num) || num < min || num > max) {
    return false;
  }
  return true;
}
```

### Cross-Site Scripting (XSS) Prevention
- Sanitize all user inputs
- Use textContent instead of innerHTML when displaying user data
- Implement Content Security Policy (CSP)

### CORS Configuration
```python
# Python server
self.send_header('Access-Control-Allow-Origin', '*')
```

```javascript
// Express.js
const cors = require('cors');
app.use(cors());
```

---

## Deployment Checklist

### Web Version
- [ ] Test on multiple browsers
- [ ] Validate HTML/CSS
- [ ] Optimize images and assets
- [ ] Set up proper HTTP headers
- [ ] Configure HTTPS (production)
- [ ] Test on mobile devices
- [ ] Set up error logging

### Desktop Application
- [ ] Test PyInstaller build
- [ ] Verify all assets are bundled
- [ ] Test on clean Windows machine
- [ ] Create installer (optional)
- [ ] Test antivirus compatibility
- [ ] Create user documentation
- [ ] Prepare distribution package

---

## Future Enhancement Ideas

### Technical Improvements
1. Progressive Web App (PWA) support
2. Offline functionality with service workers
3. Save/load gear configurations (localStorage)
4. Export results to PDF
5. Multiple language support (i18n)
6. Dark mode theme
7. Advanced chart interactions (zoom, pan)
8. Gear comparison tool
9. Integration with cycling APIs
10. Mobile app version (React Native/Flutter)

### Feature Additions
1. Cadence-based gear recommendations
2. Route planning with elevation profile
3. Power output calculations
4. Drivetrain efficiency analysis
5. Wear prediction based on usage
6. Gear ratio overlap visualization
7. Bike database with preset configurations

---

## Resources Summary

### Official Documentation
- [Chart.js](https://www.chartjs.org/docs/)
- [PyInstaller](https://pyinstaller.org/en/stable/)
- [Express.js](https://expressjs.com/)
- [PyWebView](https://pywebview.flowrl.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Learning Resources
- [JavaScript.info](https://javascript.info/)
- [Python Documentation](https://docs.python.org/)
- [W3Schools](https://www.w3schools.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

### Community
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Discussions](https://github.com/)
- [Reddit r/webdev](https://reddit.com/r/webdev)
- [Reddit r/Python](https://reddit.com/r/Python)

---

## Last Updated
September 3, 2026
