# Changelog

All notable changes to the Bike Gearing Calculator will be documented in this file.

---

## [2.0.0] - 2026-09-03

### 🎉 Major Update: Intelligent Gearing Recommendations

This is a **major feature release** adding comprehensive recommendation capabilities to help cyclists choose optimal gearing.

### ✨ Added

#### 1. Terrain Suitability Analysis
- 5-star rating system for different terrain types
- Analysis of 5 terrain categories:
  - Flat Roads
  - Rolling Hills
  - Steep Climbs (8-15%)
  - Mountain Passes (15%+)
  - High-Speed Descents
- Color-coded visual feedback (green/blue/orange backgrounds)
- Detailed explanations for each rating
- Terrain-specific gear inch recommendations

#### 2. Riding Type Recommendations
- Matches gearing to 10 cycling disciplines:
  - Road Racing
  - Criterium/Track
  - Gran Fondo/Sportive
  - Hill Climbing
  - Touring/Bikepacking
  - Gravel/Adventure
  - Commuting
  - Time Trial
  - Mountain Biking
  - Fixed Gear/Track
- Two-tier matching system:
  - "Excellent For" - Full compatibility
  - "Possible With Compromises" - Partial match
- Detailed descriptions for each riding type

#### 3. Compatible Groupsets Database
- 40+ groupset compatibility analysis
- Major brands included:
  - Shimano (Road, Gravel, MTB)
  - SRAM (Road, Gravel, MTB)
  - Campagnolo (Road)
  - microSHIFT (Budget options)
- Groupset information:
  - Performance level (Professional/Performance/Sport/Budget)
  - Speed count (10/11/12-speed)
  - Type (Road/Gravel/MTB)
  - Price range ($-$$$$)
  - Key features list
- Smart compatibility matching:
  - Chainring configuration (1x, 2x, 3x)
  - Cassette cog count
  - Cassette range
  - Intended use category

#### 4. Improvement Suggestions System
- Priority-based recommendations (High/Medium/Low/Info)
- 7 suggestion categories:
  - Improve Climbing Ability
  - Increase Top Speed Capability
  - Expand Gear Range
  - Optimize Gear Steps
  - Drivetrain Configuration Tips
  - Efficiency Tips
  - Well-Optimized Setup Confirmation
- Specific, actionable advice:
  - Cassette upgrade recommendations
  - Chainring change suggestions
  - 1x vs 2x considerations
  - Cross-chaining avoidance
- Color-coded priority badges

### 🎨 UI/UX Improvements

#### Visual Design
- New purple gradient recommendation section
- Responsive 4-card grid layout
- Hover effects on all recommendation cards
- Scrollable content areas with custom scrollbars
- Color-coded elements throughout:
  - Terrain ratings (green/blue/orange)
  - Priority badges (red/orange/blue/green)
  - Groupset level badges (red/blue/green/gray)
  - Compatibility indicators (green/orange)

#### Layout Enhancements
- Recommendations section placed between results and presets
- Independent scrolling for each recommendation card
- Mobile-responsive design (single column on small screens)
- Tablet-optimized (2-column on medium screens)
- Desktop-optimized (4-card grid on large screens)

### 📚 Documentation

#### New Documentation Files
1. **GEARING_RECOMMENDATIONS_GUIDE.md** (10,000+ words)
   - Complete feature documentation
   - Technical calculation methods
   - Real-world application examples
   - FAQ section
   - Glossary of terms

2. **FEATURE_EXAMPLES.md** (8,000+ words)
   - 6 detailed real-world scenarios:
     - Beginner Road Cyclist
     - Competitive Criterium Racer
     - Adventure Gravel Rider
     - Single-Speed Mountain Biker
     - Fixed Gear Urban Commuter
     - Ultra-Distance Tourer
   - Complete analysis for each scenario
   - Summary comparison table

3. **NEW_FEATURES_SUMMARY.md**
   - Quick overview of new features
   - Implementation details
   - Code statistics
   - User benefits breakdown

4. **QUICK_START_RECOMMENDATIONS.md**
   - 5-minute quick start guide
   - Step-by-step walkthrough
   - Decision flowcharts
   - Common questions answered

5. **CHANGELOG.md** (This file)
   - Complete version history
   - Detailed change tracking

#### Updated Documentation
- **README.md** - Updated feature list and added links to new guides
- Added "Documentation" section with links to all guides

### 🔧 Technical Changes

#### JavaScript (script.js)
- Added ~800 lines of new code
- New functions:
  - `updateRecommendations()` - Main orchestration
  - `updateTerrainRecommendation()` - Terrain analysis with rating system
  - `updateRidingTypeRecommendation()` - 10 discipline matching
  - `updateGroupsetRecommendation()` - 40+ groupset compatibility
  - `updateUpgradeSuggestions()` - Intelligent upgrade analysis
- Enhanced `calculateGearing()` to call recommendations
- No breaking changes to existing functions

#### HTML (index.html)
- Added new recommendations section with 4 cards:
  - Terrain Suitability card
  - Riding Type Recommendations card
  - Compatible Groupsets card
  - Improvement Suggestions card
- Semantic HTML structure
- Accessible markup (ARIA-friendly)

#### CSS (styles.css)
- Added ~400 lines of new styles
- New style categories:
  - `.recommendations-section` - Main container
  - `.recommendation-card` - Individual cards
  - `.terrain-item` - Terrain ratings
  - `.riding-type-item` - Riding type matches
  - `.groupset-item` - Groupset compatibility
  - `.suggestion-item` - Upgrade suggestions
- Responsive breakpoints:
  - Desktop: 4-card grid
  - Tablet (≤1024px): 2-card grid
  - Mobile (≤768px): Single column
- Custom scrollbar styling
- Hover animations and transitions

### 📊 Data & Logic

#### Terrain Rating Algorithm
```
Based on:
- Lowest gear inches (climbing capability)
- Highest gear inches (speed capability)
- Gear range (versatility)

Rating scale:
5 stars = Excellent (optimal)
4 stars = Good (minor limitations)
3 stars = Adequate (manageable)
2 stars = Limited (significant compromises)
1 star = Poor (not recommended)
```

#### Riding Type Matching
```
Criteria per discipline:
- Minimum high gear requirement
- Maximum low gear requirement
- Minimum range requirement
- Chainring configuration
- Special requirements (e.g., fixed gear)
```

#### Groupset Compatibility
```
Matching factors:
- Chainring count (1x/2x/3x)
- Cassette cog count (10/11/12)
- Cassette range (min-max cogs)
- Type (road/gravel/MTB)
```

### 🎯 Performance

- **Calculation speed**: <50ms for all recommendations
- **No external dependencies**: All logic client-side
- **Memory efficient**: Lightweight data structures
- **Real-time updates**: Recommendations update instantly on recalculation
- **No API calls**: Everything runs locally in browser

### ♿ Accessibility

- Semantic HTML elements
- Color + text labels (not color-only information)
- Keyboard navigable
- Screen reader friendly
- Proper heading hierarchy
- ARIA labels where appropriate

### 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+ (Chromium)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### 📱 Responsive Design

- Desktop (>1024px): 4-card grid, full features
- Tablet (768-1024px): 2-card grid, full features
- Mobile (<768px): Single column, scrollable cards

### 🐛 Bug Fixes

- None (new feature release, no bugs from v1.0)

### 🔒 Security

- No security changes (all calculations client-side)
- No external data fetching
- No user data collection
- No cookies or tracking

---

## [1.0.0] - 2026-08-15

### Initial Release

#### ✨ Core Features
- Gear ratio calculation engine
- Gear inches calculation
- Gain ratio calculation
- Speed calculator based on cadence
- Interactive Chart.js visualization
- Gear table with all combinations
- Speed at different cadences
- Required cadence for target speed

#### 🎨 User Interface
- Clean, modern design
- Responsive layout
- Input validation
- Real-time calculations
- Interactive charts

#### 📦 Presets
11 preset configurations:
- Road Compact (34/50, 11-32)
- Road Standard (39/53, 11-23)
- Gravel 2x (40/42, 10-33)
- Gravel 1x (38, 11-42)
- Mountain Bike (30/46, 10-51)
- Fixie Standard (46×16)
- Fixie Fast (48×17)
- Fixie Easy (44×18)
- City Bike 26" (44×16)
- City Bike 700c (46×18)
- City Bike Comfort (38×18)

#### 📚 Documentation
- README.md with feature list
- Installation instructions
- Usage guide
- Technical details

#### 🖥️ Deployment Options
- Web version (browser-based)
- Python server option
- Node.js server option
- Desktop app (PyInstaller .exe)

#### 🔧 Technical Stack
- HTML5, CSS3, JavaScript (Vanilla)
- Chart.js for visualization
- Font Awesome icons
- Google Fonts (Poppins, Roboto)
- Python backend option
- Node.js/Express backend option

---

## Version Naming Convention

This project uses [Semantic Versioning](https://semver.org/):

- **MAJOR** version (X.0.0): Incompatible API changes or major feature additions
- **MINOR** version (0.X.0): New features, backward compatible
- **PATCH** version (0.0.X): Bug fixes, backward compatible

### Version History Summary

| Version | Date | Type | Description |
|---------|------|------|-------------|
| 2.0.0 | 2026-09-03 | Major | Intelligent recommendations system |
| 1.0.0 | 2026-08-15 | Major | Initial release |

---

## Upgrade Guide

### From 1.0.0 to 2.0.0

#### What Changed
- ✅ **No breaking changes** to existing features
- ✅ All v1.0 functionality still works identically
- ✅ New features are **additions** only
- ✅ No configuration changes needed
- ✅ No API changes (calculations use same formulas)

#### What's New
- 4 new recommendation cards appear below results
- New purple section in UI
- ~1200 lines of new code (JS + CSS)
- 5 new documentation files

#### Migration Steps
1. **Web version**: Just reload the page - no changes needed
2. **Desktop app**: Download new .exe version
3. **Custom deployments**: Pull latest code from repository

#### Backward Compatibility
- ✅ Existing bookmarks work
- ✅ Existing workflow unchanged
- ✅ Previous gear calculations produce identical results
- ✅ Chart visualizations unchanged
- ✅ Preset buttons work identically

---

## Future Roadmap

### Planned Features (v2.1.0)
- [ ] Save/load gear configurations
- [ ] Export results to PDF
- [ ] Share configurations via URL
- [ ] Multiple bike comparison mode
- [ ] Dark mode theme

### Under Consideration (v3.0.0)
- [ ] Power-based recommendations (FTP integration)
- [ ] GPX route analysis
- [ ] Elevation profile matching
- [ ] Custom groupset database (user submissions)
- [ ] Wear prediction calculator
- [ ] Mobile app version (React Native/Flutter)

### Community Requests
- [ ] Multiple language support (i18n)
- [ ] Imperial/metric unit toggle
- [ ] Vintage bike support
- [ ] Belt drive calculations
- [ ] Hub gear analysis

---

## Contributing

### Reporting Issues
- Check existing issues before creating new ones
- Include browser version and OS
- Provide steps to reproduce
- Include screenshots if applicable

### Suggesting Features
- Explain the use case
- Describe expected behavior
- Note if feature should be optional
- Consider impact on existing users

### Code Contributions
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test in multiple browsers
- Update CHANGELOG.md

---

## Credits

### Version 2.0.0
- Recommendation system design
- Groupset database compilation
- Terrain analysis algorithms
- Documentation writing

### Version 1.0.0
- Initial calculator concept
- Core calculation engine
- Chart.js integration
- UI/UX design

### Special Thanks
- Sheldon Brown (gear calculation methodology)
- Chart.js team (visualization library)
- Cycling community for testing and feedback

---

## License

MIT License - Free to use, modify, and distribute

---

**For detailed documentation, see:**
- [Gearing Recommendations Guide](GEARING_RECOMMENDATIONS_GUIDE.md)
- [Feature Examples](FEATURE_EXAMPLES.md)
- [Quick Start Guide](QUICK_START_RECOMMENDATIONS.md)
- [New Features Summary](NEW_FEATURES_SUMMARY.md)

**Questions?** Open an issue on GitHub or consult the documentation.

---

*Last updated: September 3, 2026*
