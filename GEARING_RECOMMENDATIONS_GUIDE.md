# Gearing Recommendations Guide

## Overview

The Bike Gearing Calculator now includes comprehensive recommendations to help cyclists choose the optimal gearing for their riding style, terrain, and upgrade options. This document explains how the recommendation system works and how to use it.

---

## Features Added

### 1. 🏔️ Terrain Suitability Analysis

Analyzes your gearing setup and provides ratings (1-5 stars) for different terrain types:

#### Terrain Types Evaluated

| Terrain | Ideal Lowest Gear | Ideal Highest Gear | Rating Criteria |
|---------|-------------------|--------------------|-----------------| 
| **Flat Roads** | Any | ≥100" | Based on top-end speed capability |
| **Rolling Hills** | ≤50" | ≥70" | Balanced range for varied terrain |
| **Steep Climbs (8-15%)** | ≤30" | Any | Emphasis on easy climbing gears |
| **Mountain Passes (15%+)** | ≤25" | Any | Very low gears for extreme gradients |
| **High-Speed Descents** | Any | ≥110" | Ability to pedal at high speeds |

#### Rating System

- **⭐⭐⭐⭐⭐ (5 stars)**: Excellent - Optimal for this terrain
- **⭐⭐⭐⭐☆ (4 stars)**: Good - Well-suited with minor limitations
- **⭐⭐⭐☆☆ (3 stars)**: Adequate - Manageable but not ideal
- **⭐⭐☆☆☆ (2 stars)**: Limited - Significant compromises required
- **⭐☆☆☆☆ (1 star)**: Poor - Not recommended for this terrain

#### Color Coding

- **Green background**: Excellent suitability (4-5 stars)
- **Blue background**: Good suitability (3 stars)
- **Orange background**: Limited suitability (1-2 stars)

---

### 2. 🚴 Riding Type Recommendations

Matches your gearing to specific cycling disciplines and provides tailored recommendations.

#### Riding Types Analyzed

1. **Road Racing** 🚴‍♂️
   - Requirements: High gear ≥110", Low gear ≤35", Range ≥3.0
   - Use: Competitive road racing with varied terrain

2. **Criterium/Track** 🏁
   - Requirements: High gear ≥100", Low gear ≥30", Range ≤3.5
   - Use: Circuit racing, relatively flat courses

3. **Gran Fondo/Sportive** 🚵
   - Requirements: High gear ≥90", Low gear ≤30", Range ≥3.0
   - Use: Long-distance events with climbs

4. **Hill Climbing** 🧗
   - Requirements: Low gear ≤25", High gear ≥70"
   - Use: Steep gradient specialists

5. **Touring/Bikepacking** 🎒
   - Requirements: Low gear ≤25", Range ≥3.5
   - Use: Loaded long-distance travel

6. **Gravel/Adventure** 🌲
   - Requirements: Low gear ≤30", High gear ≥90", Range ≥3.5
   - Use: Mixed surfaces, variable terrain

7. **Commuting** 💼
   - Requirements: Low gear ≤40", High gear ≥80"
   - Use: Daily urban riding

8. **Time Trial** ⏱️
   - Requirements: High gear ≥110", Low gear ≥40"
   - Use: Sustained high-speed efforts

9. **Mountain Biking** ⛰️
   - Requirements: Low gear ≤22", Range ≥4.5
   - Use: Technical trails, steep climbs

10. **Fixed Gear/Track** 🔧
    - Requirements: Single chainring, Range <1.5
    - Use: Track racing, urban fixed-gear

#### Categories

- **✅ Excellent For**: Your gearing fully meets the requirements
- **⚠️ Possible With Compromises**: Partial match, may work with limitations

---

### 3. 🛠️ Compatible Groupsets

Recommends specific drivetrain component groups that match your gearing configuration.

#### Brands Covered

1. **Shimano**
   - Road: Dura-Ace, Ultegra, 105, Tiagra
   - Gravel: GRX (11s, 12s, Di2)
   - MTB: Deore XT, Deore, SLX

2. **SRAM**
   - Road: Red, Force, Rival (eTap AXS and mechanical)
   - Gravel: XPLR (Red, Force), Apex
   - MTB: Eagle (XX1, X01, GX, NX)

3. **Campagnolo**
   - Road: Super Record, Chorus, Centaur

4. **microSHIFT** (Budget)
   - Advent X, Sword

#### Groupset Information Provided

- **Level**: Professional, Performance, Sport, Budget
- **Speed**: 10-speed, 11-speed, 12-speed
- **Type**: Road, Gravel, MTB
- **Price**: $ (budget) to $$$$ (professional)
- **Features**: Electronic/mechanical, wireless, special technologies

#### Compatibility Factors

- Chainring configuration (1x, 2x, 3x)
- Number of cassette cogs
- Cassette range (smallest to largest cog)
- Drivetrain type (road, gravel, MTB)

#### Categories

- **✅ Fully Compatible**: Perfect match, no modifications needed
- **⚠️ May Require Adjustments**: Close match, may need cassette or chainring changes

---

### 4. ⬆️ Improvement Suggestions

Provides actionable recommendations to optimize your gearing based on analysis.

#### Priority Levels

- **High Priority**: Critical improvements for your riding style
- **Medium Priority**: Beneficial upgrades to consider
- **Low Priority**: Optional enhancements
- **Info**: General tips and optimization advice

#### Types of Suggestions

##### A. Climbing Improvements
**Triggered when**: Lowest gear > 35"

**Suggestions may include**:
- Switch to larger cassette (add 4-6 teeth to biggest cog)
- Use smaller inner chainring (reduce by 2-4 teeth)
- Consider compact crankset (50/34 or 48/32)
- Add granny gear (convert double to triple)

**Example**: 
> Your lowest gear (42.3") is relatively high. Consider:
> - Switch to larger cassette (current: 28t, try: 32t or 34t)
> - Use smaller inner chainring (current: 36t, try: 34t or 32t)

##### B. Speed Improvements
**Triggered when**: Highest gear < 100"

**Suggestions may include**:
- Install smaller minimum cog (reduce by 1-2 teeth)
- Use larger outer chainring (add 2-3 teeth)
- Consider standard crankset (53/39 vs compact 50/34)

**Example**:
> Your highest gear (95.2") may limit top speed. Consider:
> - Install smaller minimum cog (current: 11t, try: 10t)
> - Use larger outer chainring (current: 50t, try: 52t or 53t)

##### C. Range Optimization
**Triggered when**: Range < 2.5 or > 5.0

**For narrow range (<2.5)**:
- Choose wider range cassette
- Consider 2x instead of 1x
- Modern wide-range options (11-34, 11-36)

**For very wide range (>5.0)**:
- May cause large jumps between gears
- Cadence optimization harder
- Potential cross-chaining issues

##### D. Drivetrain Configuration
**Suggestions for**:
- 1x vs 2x considerations
- Efficiency tips for multi-cog cassettes
- Cross-chaining avoidance
- Maintenance recommendations

##### E. Well-Optimized Setup
**Triggered when**: Low gear ≤25" AND High gear ≥110" AND 2x setup

**Message**: Confirms your gearing is already well-balanced
**Suggestions**: Focus on component quality upgrades or wheel/tire improvements

---

## How to Use the Recommendations

### Step 1: Enter Your Gearing
1. Input your chainring sizes (e.g., 34,50)
2. Input your cassette cogs (e.g., 11,12,14,16,18,21,24,28,32)
3. Set wheel size and tire width
4. Click "Calculate Gearing"

### Step 2: Review Results
Scroll down to the **"Gearing Recommendations"** section below the main results.

### Step 3: Analyze Each Category

#### Terrain Suitability
- Check star ratings for terrains you ride frequently
- Look for 4-5 star ratings in your primary terrain types
- Read specific feedback on gear inches ranges

#### Riding Type Recommendations
- See which disciplines match your gearing
- "Excellent For" = full compatibility
- "Possible With Compromises" = partial match

#### Compatible Groupsets
- Find groupsets that match your configuration
- Compare price levels ($-$$$$)
- Note electronic vs. mechanical options
- Check speed compatibility (10s, 11s, 12s)

#### Improvement Suggestions
- **High Priority** = address if you struggle on certain terrain
- **Medium Priority** = consider for your next upgrade
- **Low Priority** = optional enhancements
- **Info** = optimization tips

---

## Real-World Examples

### Example 1: Road Racer

**Setup**: 
- Chainrings: 50/34
- Cassette: 11-28
- Results: Lowest 30.5", Highest 122.7"

**Recommendations**:
- **Terrain**: ⭐⭐⭐⭐⭐ Flat roads, ⭐⭐⭐⭐ Rolling hills, ⭐⭐⭐ Steep climbs
- **Riding Types**: Excellent for Road Racing, Gran Fondo, Time Trial
- **Groupsets**: Shimano 105 R7100, Ultegra R8100, SRAM Force eTap AXS
- **Suggestions**: Well-optimized for racing, consider 11-30 or 11-32 for hillier events

### Example 2: Mountain Biker

**Setup**:
- Chainring: 30
- Cassette: 11-51
- Results: Lowest 16.7", Highest 73.6"

**Recommendations**:
- **Terrain**: ⭐⭐⭐⭐⭐ Mountain passes, ⭐⭐⭐⭐⭐ Steep climbs, ⭐⭐ Flat roads
- **Riding Types**: Excellent for Mountain Biking, Hill Climbing
- **Groupsets**: SRAM GX Eagle, Shimano Deore M6100
- **Suggestions**: Perfect for technical climbing, add 32t or 34t chainring for more top speed

### Example 3: Gravel Rider

**Setup**:
- Chainrings: 46/30
- Cassette: 11-34
- Results: Lowest 23.8", Highest 113.1"

**Recommendations**:
- **Terrain**: ⭐⭐⭐⭐⭐ All terrain types
- **Riding Types**: Excellent for Gravel/Adventure, Touring, Gran Fondo
- **Groupsets**: Shimano GRX RX810, SRAM Force XPLR
- **Suggestions**: Excellent versatility, consider tubeless tires for next upgrade

### Example 4: Commuter

**Setup**:
- Chainrings: 42
- Cassette: 11-32
- Results: Lowest 35.4", Highest 103.1"

**Recommendations**:
- **Terrain**: ⭐⭐⭐⭐ Flat roads, ⭐⭐⭐⭐ Rolling hills, ⭐⭐ Steep climbs
- **Riding Types**: Excellent for Commuting, good for Touring
- **Groupsets**: Shimano Tiagra, microSHIFT Sword, SRAM Apex
- **Suggestions**: Good for urban riding, consider 11-34 cassette for hillier commutes

---

## Technical Details

### Calculation Methods

#### Gear Inches
```
Gear Inches = (Chainring ÷ Cog) × Wheel Diameter (inches)
```

#### Gear Range
```
Range = Highest Gear Inches ÷ Lowest Gear Inches
```

#### Terrain Ratings

Based on research and cycling industry standards:

- **Flat riding**: Requires 100"+ for maintaining 30+ km/h at 90 RPM
- **Rolling hills**: Balanced range 50-90" covers most situations
- **Steep climbs**: 30" or below makes 15% gradients manageable at 70 RPM
- **Mountain passes**: 25" or below for 20%+ gradients with loaded bikes
- **High-speed descents**: 110"+ allows pedaling at 50+ km/h

### Groupset Compatibility Logic

**Matching criteria**:
1. Chainring count (1x, 2x, 3x)
2. Cassette cog count (10, 11, 12-speed)
3. Cassette range (smallest-largest cog)
4. Intended use (road, gravel, MTB)

**Example**:
- 2x chainrings + 12-speed + 11-34 cassette → Shimano 105 R7100, Ultegra R8100
- 1x chainring + 12-speed + 10-51 cassette → SRAM Eagle, Shimano Deore XT
- 2x chainrings + 11-speed + 11-42 cassette → Shimano GRX RX810

---

## Frequently Asked Questions

### Q: Why doesn't my setup match any groupsets?

**A**: Your configuration may be:
- Custom/non-standard combination
- Mix of different brands
- Older groupset not in database
- Cassette range not offered by major brands

**Solution**: Consider adjusting to common ranges (11-28, 11-32, 11-34 for road; 10-50, 10-51 for MTB)

### Q: Can I ignore "High Priority" suggestions?

**A**: High priority means you'll likely struggle on certain terrain. If you don't ride that terrain, you can ignore it. Example: "improve climbing" is only critical if you regularly climb steep hills.

### Q: What's better: 1x or 2x?

**A**: Depends on use:
- **1x advantages**: Simpler, lighter, less maintenance, no front shifting
- **2x advantages**: Wider range with closer gear steps, better for varied terrain
- **Recommendation**: Use terrain and riding type analysis to decide

### Q: How accurate are the groupset recommendations?

**A**: Based on manufacturer specifications. Always verify compatibility with:
- Your frame/hub (axle standards, clearances)
- Brake type (rim, disc, flat-mount, post-mount)
- Wheel type (cassette body compatibility)
- Cable routing (mechanical vs. electronic)

### Q: Should I upgrade to electronic shifting?

**A**: Consider:
- **Pros**: Precise shifting, no cable stretch, trim-free, programmable
- **Cons**: Higher cost, needs charging, harder to repair in field
- **Recommendation**: If budget allows and you want cutting-edge performance, yes. Otherwise, modern mechanical is excellent.

### Q: My lowest gear rating is poor for mountains, but I never climb. Is this a problem?

**A**: No! Recommendations are comprehensive. Focus on ratings for terrain you actually ride. If you only ride flats, ignore mountain pass ratings.

---

## Glossary

**Gear Inches**: Traditional measurement of gear "size" based on equivalent penny-farthing wheel diameter

**Gear Range**: Ratio of highest to lowest gear (e.g., 4.0:1 = highest is 4× lowest)

**Bailout Gear**: Lowest/easiest gear for emergency use on steep climbs

**Cassette**: Rear cog cluster (e.g., 11-32 means 11t smallest to 32t largest)

**Chainring**: Front sprockets on the crankset

**Groupset**: Complete drivetrain system (shifters, derailleurs, cassette, chain, crankset, brakes)

**Cross-chaining**: Using extreme gear combinations (big-big, small-small) causing inefficiency

**1x (one-by)**: Single chainring drivetrain

**2x (two-by)**: Double chainring drivetrain

**Cadence**: Pedaling rate in revolutions per minute (RPM)

---

## Version History

### v1.0 - Current Version
- Terrain suitability analysis (5 terrain types)
- Riding type recommendations (10 disciplines)
- Groupset compatibility (40+ groupsets)
- Upgrade suggestions (5 categories)
- Priority-based recommendations
- Detailed explanations

---

## Credits

Recommendations based on:
- Cycling industry standards
- Professional coaching guidelines
- Manufacturer specifications (Shimano, SRAM, Campagnolo)
- Real-world rider feedback
- Biomechanical research on optimal cadences and gear ratios

---

## Support

For questions or suggestions about the recommendation system:
1. Review this guide thoroughly
2. Test with different configurations
3. Compare with manufacturer spec sheets
4. Consult with local bike shop for specific compatibility

---

**Remember**: These are recommendations, not requirements. Your personal fitness, riding style, and preferences matter most. Use recommendations as a starting point for optimization!

Happy riding! 🚴‍♂️🚵‍♀️
