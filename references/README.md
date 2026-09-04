# Reference Sources for Bike Gearing Calculator

This folder contains references, documentation links, and technical resources that are relevant to the Bike Gearing Calculator project.

## Table of Contents

1. [Bicycle Gearing Theory & Calculations](#bicycle-gearing-theory--calculations)
2. [Technical Standards & Specifications](#technical-standards--specifications)
3. [Similar Projects & Calculators](#similar-projects--calculators)
4. [Development Tools & Libraries](#development-tools--libraries)
5. [Deployment & Distribution](#deployment--distribution)
6. [Academic & Research Papers](#academic--research-papers)

---

## Bicycle Gearing Theory & Calculations

### Core Concepts

#### Wikipedia - Bicycle Gearing
- **URL**: https://en.wikipedia.org/wiki/Bicycle_gearing
- **Description**: Comprehensive overview of bicycle drivetrain systems and how cadence relates to wheel rotation
- **Relevance**: Fundamental concepts behind gear ratio calculations
- **Note**: Content rephrased for compliance with licensing restrictions

#### Wikipedia - Bicycle Drivetrain Systems
- **URL**: https://en.wikipedia.org/wiki/Bicycle_drivetrain_systems
- **Description**: Various methods of power transmission from riders to drive wheels
- **Relevance**: Understanding different drivetrain configurations (fixed-gear, freewheel, etc.)
- **Note**: Content rephrased for compliance with licensing restrictions

### Gear Calculation Methodologies

#### Sheldon Brown's Gear Calculator Legacy
- **URL**: http://sheldonbrown.com/braquets.html
- **Description**: The original gear inch calculator methodology by legendary bicycle mechanic Sheldon Brown
- **Key Contribution**: Standardized approach to comparing gearing across different bicycle types
- **Relevance**: Industry-standard methodology used in this project

#### Sheldon Brown Gear Inch Calculator Guide
- **URL**: https://cal5.calculator.city/sheldon-brown-gear-inch-calculator/
- **Description**: Modern explanation of Sheldon Brown's gear inch formula
- **Key Formula**: Gear Inches = (Chainring ÷ Cog) × Wheel diameter in inches
- **Historical Context**: Based on penny-farthing direct-drive bicycle measurements

#### Gain Ratios Explained
- **URL**: https://www.bikecalc.com/articles/gain-ratios.html
- **Description**: Alternative gearing measurement system proposed by Sheldon Brown
- **Formula**: Gain Ratio = (Chainring ÷ Cog) × (Wheel Radius ÷ Crank Length)
- **Advantage**: More accurate representation of mechanical advantage than gear inches

### Speed & Cadence Calculations

#### Bike Gear Speed Calculator Methodology
- **URL**: https://bikingbro.com/bike-gear-speed-calculator/
- **Description**: Detailed explanation of speed calculation from cadence and gear ratios
- **Key Detail**: Uses measured rolling circumference rather than theoretical tire diameter
- **Formula Reference**: Speed = Gear inches × π × Cadence × conversion factor

#### Cycling Gear Calculator Formula Breakdown
- **URL**: https://cal3.calculator.city/cycling-gear-calculator/
- **Formulas Provided**:
  - Gear Ratio = Front Teeth ÷ Rear Teeth
  - Meters of Development = Gear Ratio × Wheel Circumference
  - Speed calculations across different cadence ranges (60-120 RPM)

---

## Technical Standards & Specifications

### ISO Standards

#### ISO 606:2015 - Roller Chains and Sprockets
- **URL**: https://www.iso.org/fr/standard/61232.html
- **Standard**: Specifies characteristics of roller and bush chains with corresponding sprockets
- **Application**: Used for mechanical power transmission in bicycle drivetrains
- **Relevance**: Technical specifications for chain and sprocket compatibility

### Gear System Engineering

#### Engineering Toolbox - Gear Trains
- **URL**: https://www.engineeringtoolbox.com/Gear-Trains-d_1374.html
- **Content**: Mathematical foundations of gear train calculations
- **Formulas**: Mechanical advantage calculations for compound gear systems

---

## Similar Projects & Calculators

### Open Source Projects

#### webfoolery/gears - GitHub
- **URL**: https://github.com/webfoolery/gears
- **Description**: Open source bike gearing calculator
- **Gain Ratio Formula**: ((wheel + tyre radius) ÷ crank length) × gear ratio
- **Technology**: Web-based implementation
- **Last Updated**: 2021

#### shiningflint/gear_ratio - GitHub
- **URL**: https://github.com/shiningflint/gear_ratio
- **Description**: Bicycle gear ratio calculator built with React.js
- **Technology Stack**: React.js framework
- **Use Case**: Modern JavaScript framework approach

### Online Calculators (Comparison References)

#### BikeCalc.com Calculators
- **URL**: https://www.bikecalc.com/
- **Features**: Multiple cycling calculators including gear ratios
- **Industry Status**: Well-established cycling calculator resource

#### MiniWebTool Bike Gear Ratio Calculator
- **URL**: https://miniwebtool.com/bike-gear-ratio-calculator/
- **Features**: Calculates gear ratio, gear inches, gain ratio, and speed
- **Example**: 50-tooth chainring with 15-tooth cog = 3.33 ratio

#### Complete Calculators - Bike Gear Ratio
- **URL**: https://completecalculators.com/calculators/cycling/bike-gear-ratio-calculator
- **Features**: Comprehensive calculator with development and cadence speed
- **Examples**: Supports 1x, 2x compact, and triple configurations

#### BikingBro Gear Calculator
- **URL**: https://bikingbro.com/bike-gear-ratio-calculator/
- **Simple Formula**: Chainring teeth ÷ cog teeth = wheel rotations per pedal stroke
- **User-Friendly**: Clear explanations for beginners

#### GymCreek Cycling Calculator
- **URL**: https://gymcreek.com/cycling-gear-ratio-calculator/
- **Focus**: Rollout, gear inches, and cadence-driven speed modeling
- **Use Case**: Testing configurations before part swaps

---

## Development Tools & Libraries

### Visualization Library

#### Chart.js Official Documentation
- **URL**: https://www.chartjs.org/docs/latest/
- **Current Version**: v4.5.1
- **Description**: Open-source JavaScript charting library
- **Used In Project**: Visualizing gear inches across all gear combinations

#### Chart.js - Line Charts
- **URL**: https://www.chartjs.org/docs/latest/charts/line
- **Specific Use**: Plotting gear progression data
- **Features**: Trend data visualization, comparison of multiple datasets
- **Documentation**: https://chartjs.org/docs/latest/samples/line/line.html

#### Chart.js - Line Styling
- **URL**: https://chartjs.org/docs/latest/samples/line/styling.html
- **Features**: Customization options for line appearance
- **Options**: Fill, borders, dashing, colors
- **Interaction Modes**: Index, nearest, axis-based

### Frontend Technologies

#### HTML5, CSS3, JavaScript ES6+
- **Standards**: Modern web development stack
- **Browser Compatibility**: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **Approach**: Vanilla JavaScript (no frameworks) for lightweight performance

#### Google Fonts
- **Fonts Used**: Poppins, Roboto
- **Purpose**: Professional, readable typography
- **Integration**: CDN-based font delivery

#### Font Awesome
- **Purpose**: Icon library for UI elements
- **Usage**: Visual indicators and interactive elements

---

## Deployment & Distribution

### Python Deployment

#### PyInstaller Official Documentation
- **URL**: https://pyinstaller.org/
- **Current Version**: 6.20.0 (as of documentation date)
- **Purpose**: Bundle Python applications into standalone executables
- **Platform Support**: Windows, macOS, Linux
- **Python Version**: Supports Python 3.8 and newer
- **Package Support**: numpy, matplotlib, PyQt, wxPython, and many others

#### PyInstaller Windows Tutorial - PythonGUIs.com
- **URL**: https://www.pythonguis.com/tutorials/packaging-pyqt6-applications-windows-pyinstaller/
- **Focus**: Step-by-step packaging for Windows EXE
- **Includes**: PyQt6, PySide2, PySide6, Tkinter variations
- **Additional Tool**: InstallForge for creating installers

#### Python to EXE Guide (Medium)
- **URL**: https://lovnish.medium.com/from-python-script-to-windows-exe-complete-pyinstaller-guide-2025-4b22cd7461c5
- **Year**: 2025 guide
- **Benefit**: Single executable file that runs on any Windows machine
- **No Dependencies**: Users don't need Python installed

#### PythonGuides - PyInstaller Tutorial
- **URL**: https://pythonguides.com/convert-python-file-to-exe-using-pyinstaller/
- **Key Feature**: Automatic dependency analysis
- **Output**: Single executable or folder with dependencies
- **Use Case**: Desktop application distribution

### Node.js Deployment

#### Express.js Server
- **Technology**: Node.js with Express framework
- **File**: `server.js` in project
- **Port**: 3000 (default)
- **Use Case**: Lightweight web server for browser-based version

#### Python HTTP Server
- **Technology**: Python's built-in HTTP server
- **File**: `serve.py` in project
- **Advantage**: No additional dependencies beyond Python
- **Use Case**: Quick local testing and development

---

## Academic & Research Papers

### Bicycle Transmission Research

#### ResearchGate - Bicycle Transmissions
- **URL**: https://www.researchgate.net/publication/329284193_Bicycle_transmissions
- **Publication Date**: November 2018
- **Topics Covered**:
  - Chain transmission advantages and disadvantages
  - Inconstant torque moment analysis
  - Alternative drive mechanisms
  - Performance improvements
- **Key Findings**: Chain transmission is most widely distributed but has torque inconsistency on slopes
- **Content rephrased for compliance with licensing restrictions**

#### UTM Repository - Gear Systems & Mechanical Engineering
- **URL**: http://odlsystem2.utm.my/2837/1/RefugioNegron2012_GearSystems&MechanicalEngineering.pdf
- **Topic**: Gear range analysis on bicycles
- **Academic Context**: Mechanical engineering principles applied to bicycle systems

### Historical Patents

#### US Patent 635082A - Gearing for Bicycles
- **URL**: https://patents.google.com/patent/US635082A/en
- **Date**: Early bicycle gearing patent (1900s)
- **Historical Value**: Understanding evolution of bicycle drivetrain systems

#### US Patent 705106 - Gearing for Bicycles
- **URL**: https://patents.google.com/patent/US705106
- **Historical Context**: Additional early patent on bicycle gearing mechanisms

---

## Industry Articles & Guides

### Gear Ratio Explanations for Cyclists

#### Cyclist.co.uk - Bicycle Gear Ratios Explained
- **URL**: https://www.cyclist.co.uk/in-depth/bicycle-gear-ratios-explained
- **Published**: 2025 (recent)
- **Content**: Evolution from single-speed to modern multi-gear systems
- **Configurations Covered**:
  - Standard double (53/39)
  - Compact (50/34)
  - Mid-compact (52/36)
  - Super-compact (48/32)
- **Cassette Range**: From 9-tooth to 42-tooth sprockets

#### Velosurance - What Cyclists Need to Know About Gearing
- **URL**: https://velosurance.com/blog/bike-gear-ratios-explained/
- **Published**: March 2025
- **Key Benchmark**: Gear ratio of 1.0 (such as 34×34) is climbing gear benchmark
- **Recommendation**: Aim for 0.8 or lower for very steep or loaded riding

#### BikeTips - Ultimate Guide To Bike Gear Ratios
- **URL**: https://biketips.com/bike-gear-ratio-calculator/
- **Year**: 2026 guide
- **Formula**: Front chainring teeth ÷ rear cog teeth
- **Example**: 50/14 gear = 3.57 ratio (rear wheel spins 3.57 times per pedal revolution)
- **Practical Calculation**: Ratio × wheel circumference (≈2.1m for 700×25c) = distance per pedal stroke

#### Roadman Cycling - Gear Ratios Complete Guide
- **URL**: https://roadmancycling.com/blog/gear-ratio-cycling-complete-guide
- **Focus**: Maths, overlap, and ratio selection
- **Explanation**: Ratio of 2.0 means wheel turns twice per pedal revolution
- **Analysis**: Higher ratios = more speed but more resistance

#### Competitive Cyclist - Gear Inches Explained
- **URL**: https://www.competitivecyclist.com/bulletin/gear-inches-on-a-bicycle-explained
- **Simple Model**: Gear inches = (wheel diameter in inches) × (front chainring ÷ rear cog)
- **Audience**: Competitive cyclists and racers

#### Firgelli Auto - Bicycle Gear Mechanics
- **URL**: https://www.firgelliauto.com/blogs/mechanisms/bicycle-gear
- **Focus**: How bicycle gears work with diagrams
- **Development Calculation**: Tooth-count ratio × rolling wheel circumference = metres per pedal stroke

#### Lebel Bicycles - Gear Ratio Calculator Guide
- **URL**: https://lebelbicycles.com/blogs/bikes/gear-ratio-calculator
- **Focus**: Gear inches, speed, and cadence
- **Explanation**: Number of times rear wheel turns per full pedal turn
- **Formula**: Front chainring teeth ÷ rear cog teeth

#### Saddlechain - Mastering Gear Inches
- **URL**: https://saddlechain.com/sheldon-brown-gear-inch-calculator/
- **Deep Dive**: Sheldon Brown's calculator methodology
- **Analogy**: High gear inch = high gear in a car (speed on flats)
- **Analogy**: Low gear inch = low gear in a car (ideal for climbing)

---

## Formula Quick Reference

### Core Formulas Used in This Project

```
Gear Ratio = Chainring Teeth ÷ Cog Teeth

Gear Inches = (Chainring ÷ Cog) × Wheel Diameter (inches)

Gain Ratio = (Chainring ÷ Cog) × (Wheel Radius ÷ Crank Length)

Speed (km/h) = Gear Inches × π × Cadence × 0.001885

Meters of Development = Gear Ratio × Wheel Circumference (meters)

Wheel Circumference (mm) = π × (Wheel Diameter + 2 × Tire Width)
```

### Gear Inches Interpretation

- **Below 30"** - Very easy (steep climbing)
- **30-50"** - Easy (hills)
- **50-75"** - Medium (rolling terrain)
- **75-100"** - Hard (flats, speed)
- **Above 100"** - Very hard (sprinting)

---

## Additional Resources

### Community Forums & Knowledge Bases

#### Berkeley Cycling Advice
- **URL**: http://www.csua.berkeley.edu/~tom/advice/gearing
- **Type**: University cycling community resource
- **Typical Cadence Range**: 80-100 RPM for most bikes

### Configuration Examples from Research

**Standard Configurations Referenced:**
- Road Compact: 34/50 with 11-32 cassette
- Road Standard: 39/53 with 11-23 cassette
- Gravel 2x: 40/42 with 10-33 cassette
- Gravel 1x: 38 with 11-42 cassette
- Mountain Bike: 30/46 with 10-51 cassette
- Modern Range: 9-tooth to 42-tooth cassettes

---

## How These Sources Informed This Project

1. **Calculation Accuracy**: Formulas verified against multiple authoritative sources (Sheldon Brown, engineering standards)

2. **User Interface**: Inspired by successful online calculators but improved with Chart.js visualizations

3. **Preset Configurations**: Based on real-world gear setups documented in cycling industry articles

4. **Deployment Strategy**: PyInstaller approach based on official documentation and community tutorials

5. **Speed Calculations**: Uses industry-standard methodology with measured rolling circumference

6. **Accessibility**: Following best practices from established calculator websites for user-friendly input

---

## Licensing Note

All external content referenced in this document has been summarized and paraphrased to comply with licensing restrictions. No more than 30 consecutive words have been reproduced verbatim from any single source. Original URLs are provided for users to access full original content.

---

## Last Updated

September 3, 2026

## Maintained By

Bike Gearing Calculator Project Team

---

**Note**: This reference document should be updated as new resources are discovered or as the project evolves.
