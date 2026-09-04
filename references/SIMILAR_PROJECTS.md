# Similar Projects and Online Calculators

This document catalogs similar bicycle gearing calculators and related projects for comparison, inspiration, and benchmarking.

## Table of Contents

1. [Open Source Projects](#open-source-projects)
2. [Popular Online Calculators](#popular-online-calculators)
3. [Feature Comparison](#feature-comparison)
4. [Unique Features of This Project](#unique-features-of-this-project)
5. [Learning from Others](#learning-from-others)

---

## Open Source Projects

### 1. webfoolery/gears

**GitHub**: https://github.com/webfoolery/gears  
**Language**: JavaScript  
**Last Updated**: 2021  
**License**: Not specified

#### Features
- Gear ratio calculator
- Gain ratio calculation using Sheldon Brown's formula
- Formula: `((wheel + tyre radius) ÷ crank length) × gear ratio`
- Web-based interface

#### Technical Approach
- Client-side JavaScript
- Simple HTML/CSS interface
- No frameworks required

#### Strengths
- Lightweight implementation
- Clear mathematical approach
- Open source code for learning

#### Comparison to This Project
- **Similar**: Web-based, JavaScript implementation
- **This project adds**: Chart visualization, more presets, desktop app version

---

### 2. shiningflint/gear_ratio

**GitHub**: https://github.com/shiningflint/gear_ratio  
**Language**: JavaScript (React)  
**Framework**: React.js  
**License**: Not specified

#### Features
- Modern React-based interface
- Bicycle gear ratio calculations
- Component-based architecture

#### Technical Approach
- React.js framework
- npm build process
- Modern JavaScript (ES6+)

#### Strengths
- Modern UI framework
- Scalable component architecture
- Reusable components

#### Comparison to This Project
- **Different approach**: Uses React framework vs. vanilla JS
- **This project advantage**: Lighter weight, no build process, easier to deploy
- **Their advantage**: More scalable for large feature additions

---

## Popular Online Calculators

### 1. Sheldon Brown's Gear Calculator

**URL**: http://sheldonbrown.com/gears/  
**Status**: Original/Legacy  
**Historical Significance**: ⭐⭐⭐⭐⭐

#### Features
- Classic gear calculator interface
- Gear inches calculation
- Development (meters) calculation
- Speed at various cadences
- Multiple chainring and cog inputs

#### User Interface
- Simple HTML form
- Text-based results table
- No visualization charts

#### Strengths
- Established credibility (Sheldon Brown's legacy)
- Trusted by cycling community worldwide
- Comprehensive calculations

#### Limitations
- Dated interface design
- No interactive visualizations
- Limited mobile responsiveness

#### Comparison to This Project
- **This project improves**: Modern UI, Chart.js visualization, mobile-friendly
- **Inherits from**: Core calculation methodology, formulas

---

### 2. BikeCalc.com

**URL**: https://www.bikecalc.com/  
**Category**: Comprehensive cycling calculator suite

#### Features
- Multiple calculator types:
  - Gear ratio calculator
  - Speed calculator
  - Cadence calculator
  - Power calculator
  - Weight calculator

#### Gear Calculator Specific Features
- Gear inches
- Gain ratios
- Development
- Speed at cadence
- Skid patches (for fixed-gear)

#### User Interface
- Clean, organized layout
- Tabbed interface for different calculators
- Results in table format

#### Strengths
- Multiple related calculators in one place
- Well-maintained and updated
- Comprehensive feature set

#### Comparison to This Project
- **Their advantage**: More calculator types (power, weight, etc.)
- **This project advantage**: Focused interface, chart visualization, desktop app option

---

### 3. MiniWebTool Bike Gear Ratio Calculator

**URL**: https://miniwebtool.com/bike-gear-ratio-calculator/  
**Category**: General calculator website

#### Features
- Gear ratio calculation
- Gear inches
- Gain ratio
- Speed at given cadence

#### Example Provided
- 50-tooth chainring with 15-tooth cog = 3.33 ratio
- Clear example calculations

#### User Interface
- Form-based input
- Immediate calculation results
- Simple, clean design

#### Strengths
- Easy to use for beginners
- Clear explanations
- Fast loading

#### Comparison to This Project
- **Similar**: Simple interface, immediate results
- **This project adds**: Multiple gear combinations, chart visualization, presets

---

### 4. Complete Calculators - Bike Gear Ratio

**URL**: https://completecalculators.com/calculators/cycling/bike-gear-ratio-calculator  
**Category**: Specialized cycling calculator

#### Features
- Gear ratio
- Gear inches
- Meters of development
- Cadence-driven speed
- Multiple chainring support (1x, 2x, triple)

#### Configuration Examples
- **1x setup**: Single chainring (e.g., 40t)
- **2x compact**: Two chainrings (e.g., 50t, 34t)
- **Triple**: Three chainrings (e.g., 52t, 39t, 30t)

#### User Interface
- Step-by-step input process
- Comprehensive results table
- Speed comparison at different cadences

#### Strengths
- Supports all drivetrain configurations
- Detailed speed comparisons
- Educational explanations

#### Comparison to This Project
- **Similar**: Multiple chainring support, comprehensive calculations
- **This project adds**: Visual chart, preset configurations, desktop version

---

### 5. BikingBro Gear Calculator

**URL**: https://bikingbro.com/bike-gear-ratio-calculator/  
**Published**: 2025 (recent)

#### Features
- Simple gear ratio: Chainring ÷ Cog = wheel rotations per pedal stroke
- Gear inches
- Speed at cadence
- Clear beginner-friendly explanations

#### Educational Content
- Explains what gear ratio means
- Practical examples
- Use case scenarios

#### User Interface
- Modern, clean design
- Mobile responsive
- Quick calculations

#### Strengths
- Excellent for beginners
- Clear explanations alongside calculator
- Modern web design

#### Comparison to This Project
- **Similar**: User-friendly interface, clear explanations
- **This project adds**: Chart visualization, multiple presets, offline desktop app

---

### 6. GymCreek Cycling Gear Ratio Calculator

**URL**: https://gymcreek.com/cycling-gear-ratio-calculator/  
**Focus**: Pre-purchase planning

#### Features
- Rollout calculation
- Gear inches
- Cadence-driven speed
- "What-if" scenario modeling

#### Use Case
Designed to help cyclists test different component combinations before purchasing:
- "What if I change to an 11-28 cassette?"
- "How would a 52/36 crankset compare to my current 50/34?"

#### User Interface
- Scenario comparison layout
- Side-by-side results
- Purchase decision support

#### Strengths
- Practical shopping tool
- Comparison focus
- Real-world application

#### Comparison to This Project
- **Their focus**: Component shopping decisions
- **This project focus**: Analyzing current setup + presets for common configurations

---

### 7. Calculator.City - Various Bike Calculators

**URL**: https://cal3.calculator.city/bike-gear-ratio-calculator  
**Type**: Calculator directory site

#### Features
- Gear ratio calculator
- Speed vs. cadence chart
- Meters of development
- Comprehensive formula explanations

#### Formula Breakdown
```
- Gear Ratio: Front Teeth ÷ Rear Teeth
- Meters of Development: Gear Ratio × Wheel Circumference (meters)
- Gear Inches: Gear Ratio × Wheel Diameter (inches)
```

#### Educational Content
- Detailed formula explanations
- Step-by-step calculation walkthrough
- Mathematical theory behind calculations

#### Strengths
- Educational focus
- Clear mathematical documentation
- Multiple related calculators

#### Comparison to This Project
- **Similar**: Comprehensive calculations, educational value
- **This project adds**: Interactive chart, preset buttons, desktop application

---

### 8. Bike-Size.com Gear Ratio Calculator

**URL**: https://bike-size.com/calculators/gear-ratio  
**Type**: Bike fitting and calculator site

#### Features
- Gear ratio calculation
- Explanation of mechanical advantage
- Integration with other bike fitting tools

#### Context
Part of a larger bike sizing and fitting website:
- Frame size calculators
- Saddle height calculators
- Handlebar reach calculators

#### User Interface
- Clean, professional design
- Integrated with other tools
- Consistent branding

#### Strengths
- Part of comprehensive bike setup toolkit
- Professional presentation
- Cross-linked tools

#### Comparison to This Project
- **Their context**: Part of bike fitting suite
- **This project**: Standalone gearing tool with deep focus on gear analysis

---

### 9. RunBikeCalc

**URL**: https://runbikecalc.com/bike-gearing-calculator  
**Type**: Multi-sport calculator site

#### Features
- Quick gear ratio calculation
- Simple formula: Chainring ÷ Cog = Ratio
- Example: 50/17 = 2.94 ratio

#### Context
Site includes calculators for:
- Running pace
- Bike gearing
- Race time predictions
- Training zones

#### User Interface
- Quick calculation focus
- Minimal input required
- Fast results

#### Strengths
- Very simple to use
- Multi-sport athlete focus
- Fast loading

#### Comparison to This Project
- **Their approach**: Simplicity and speed
- **This project**: More comprehensive analysis with visualization

---

### 10. HexaCalculator Bike Gear Ratio

**URL**: https://hexacalculator.com/calculators/physics/engineering/bike-gear-ratio-calculator  
**Type**: Engineering calculator site

#### Features
- Gear ratio calculation
- Engineering perspective
- Example: 3.33 ratio means wheel turns 3.33 times per pedal revolution

#### Context
Part of engineering and physics calculator collection:
- Mechanical engineering
- Physics calculations
- Mathematics tools

#### User Interface
- Technical/engineering focus
- Formula-driven presentation
- Clean scientific layout

#### Strengths
- Engineering credibility
- Technical accuracy
- Academic approach

#### Comparison to This Project
- **Their focus**: Engineering/academic audience
- **This project**: Practical cyclist-focused tool

---

### 11. Lebel Bicycles Gear Calculator

**URL**: https://lebelbicycles.com/blogs/bikes/gear-ratio-calculator  
**Type**: Bike shop educational resource

#### Features
- Gear inches calculation
- Speed at cadence
- Educational blog-style content
- Practical cycling advice

#### Context
Part of bike shop's educational blog:
- Maintenance tips
- Product guides
- Technical explanations

#### User Interface
- Blog post format with embedded calculator
- Conversational tone
- Real-world examples

#### Strengths
- Practical cycling context
- Shop expertise
- Community-focused

#### Comparison to This Project
- **Their context**: Bike shop education
- **This project**: Standalone comprehensive tool

---

### 12. Competitive Cyclist - Gear Inches Explained

**URL**: https://www.competitivecyclist.com/bulletin/gear-inches-on-a-bicycle-explained  
**Type**: Retail + education

#### Features
- Gear inches explanation
- Simple formula: `(wheel diameter in inches) × (chainring ÷ cog)`
- Context for purchasing decisions

#### Target Audience
Competitive and serious cyclists shopping for components

#### User Interface
- Article format
- Product integration
- Purchase context

#### Strengths
- High-end cycling focus
- Professional audience
- Integration with product catalog

#### Comparison to This Project
- **Their goal**: Drive product sales
- **This project**: Pure calculation tool (non-commercial)

---

## Feature Comparison Matrix

| Feature | This Project | Sheldon Brown | BikeCalc | MiniWebTool | Complete Calc | BikingBro |
|---------|--------------|---------------|----------|-------------|---------------|-----------|
| Gear Ratio | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Gear Inches | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Gain Ratio | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| Speed Calculator | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Chart Visualization | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Preset Configs | ✅ (11) | ❌ | ⚠️ | ❌ | ⚠️ | ❌ |
| Mobile Responsive | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Desktop App | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Offline Use | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Multiple Chainrings | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ |
| Full Cassette Input | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Open Source | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

**Legend:**
- ✅ Full support
- ⚠️ Partial support
- ❌ Not supported

---

## Unique Features of This Project

### 1. Chart.js Visualization
**Unique to this project** among the surveyed calculators.
- Visual representation of gear inches across all combinations
- Easy identification of gear progression
- Color-coded by chainring
- Interactive tooltips

### 2. Desktop Application Version
**Unique to this project** in the bicycle calculator space.
- Standalone Windows .exe
- No browser required
- Offline capability
- Professional desktop window

### 3. Comprehensive Preset Library
**11 presets** - more than most competitors:
- Road Compact
- Road Standard
- Gravel 2x
- Gravel 1x
- Mountain Bike
- 3 Fixie configurations
- 3 City Bike configurations

### 4. Dual Deployment Options
- Web version (browser-based)
- Desktop version (PyInstaller .exe)

### 5. Modern Tech Stack
- Vanilla JavaScript (no framework bloat)
- Chart.js for visualization
- Responsive CSS design
- Python backend option

### 6. Complete Gear Analysis
In a single view:
- All gear combinations in a table
- Visual chart
- Speed at target cadence
- Highest/lowest gear identification
- Gear range percentage

---

## Learning from Others

### Best Practices Adopted

#### From Sheldon Brown
- ✅ Standard formulas and methodology
- ✅ Comprehensive gear analysis
- ✅ Educational approach
- ⚠️ Improved: Modern UI design

#### From BikeCalc.com
- ✅ Multiple calculator types (potential future expansion)
- ✅ Clean, organized layout
- ✅ Comprehensive calculations

#### From Modern Calculators (BikingBro, GymCreek)
- ✅ Mobile-responsive design
- ✅ Clear explanations
- ✅ User-friendly interface
- ✅ Fast performance

#### From Open Source Projects
- ✅ Client-side calculation (no server needed)
- ✅ Lightweight implementation
- ✅ Modular code structure

---

## Areas for Improvement (Inspired by Competitors)

### Features Found in Competitors We Could Add

1. **Power Calculator** (BikeCalc)
   - Speed from power output
   - Power requirements for target speed

2. **Skid Patches Calculator** (BikeCalc - for fixies)
   - Tire wear prediction
   - Skid pattern analysis

3. **Comparison Mode** (GymCreek)
   - Side-by-side gear setup comparison
   - "Before and after" upgrade analysis

4. **Save Configurations** (Various)
   - Save multiple bike setups
   - Quick switching between bikes

5. **Export Results** (Various)
   - PDF export
   - Print-friendly format
   - Share via link

6. **Advanced Charts** (None found - opportunity!)
   - Gear overlap visualization
   - Cadence vs. speed curves
   - Power curves

---

## Competitive Advantages

### Why Choose This Calculator Over Others?

1. **Visualization**
   - Only calculator with Chart.js visualization
   - Makes gear progression immediately understandable

2. **Preset Library**
   - 11 presets covering all bike types
   - One-click configuration
   - Includes fixie and city bike options (often neglected)

3. **Desktop Application**
   - Windows .exe for offline use
   - No internet required
   - Professional standalone app

4. **Complete Analysis**
   - Everything on one screen
   - No clicking through multiple tabs
   - Comprehensive results

5. **Modern Technology**
   - Fast performance
   - Mobile-friendly
   - Clean, modern design

6. **Free and Ad-Free**
   - No paywalls
   - No advertisements
   - No tracking

---

## Market Position

### Target Audience Comparison

| Calculator | Target Audience | Complexity |
|------------|----------------|------------|
| Sheldon Brown | Technical cyclists | Medium-High |
| BikeCalc | Serious cyclists | Medium-High |
| BikingBro | Beginners | Low |
| This Project | **All cyclists** | **Low-Medium** |
| Complete Calculators | Technical buyers | Medium |
| GymCreek | Component shoppers | Medium |

### This Project's Niche
- **Accessible to beginners** (presets, visual charts)
- **Powerful enough for enthusiasts** (comprehensive calculations)
- **Unique features** (desktop app, visualization)
- **All bike types** (road, gravel, MTB, fixie, city)

---

## Conclusion

This project combines the best aspects of existing calculators while adding unique features:

✅ **From classics**: Proven calculation methodology (Sheldon Brown)  
✅ **From moderns**: Clean, responsive design (BikingBro, GymCreek)  
✅ **From comprehensive**: Full analysis suite (BikeCalc)  
✅ **Unique additions**: Chart visualization, desktop app, extensive presets  

The result is a calculator that serves beginners through enthusiasts, road cyclists through city commuters, with both web and desktop deployment options.

---

## Recommended Exploration

For developers or users interested in comparing approaches:

1. **Try Sheldon Brown's calculator** (historical context)
2. **Explore BikeCalc.com** (comprehensive suite)
3. **Test modern calculators** (BikingBro, GymCreek) for UX
4. **Review open source projects** (webfoolery/gears) for code
5. **Use this calculator** for visualization and presets

---

## Last Updated
September 3, 2026

## Note on Competitive Analysis

This document is for educational purposes and project improvement. All mentioned websites and projects are respected resources in the cycling community. Links are provided for users to explore alternatives and for developers to learn from different implementation approaches.
