# Bicycle Gearing Formulas and Calculations Reference

This document provides detailed mathematical formulas and calculation methods used in bicycle gearing analysis.

## Table of Contents

1. [Basic Gear Ratio](#basic-gear-ratio)
2. [Gear Inches](#gear-inches)
3. [Gain Ratio](#gain-ratio)
4. [Speed Calculations](#speed-calculations)
5. [Wheel Circumference](#wheel-circumference)
6. [Development (Meters per Revolution)](#development-meters-per-revolution)
7. [Cadence and Speed Relationship](#cadence-and-speed-relationship)
8. [Example Calculations](#example-calculations)

---

## Basic Gear Ratio

### Formula
```
Gear Ratio = Chainring Teeth ÷ Rear Cog Teeth
```

### Explanation
The gear ratio represents how many times the rear wheel rotates for one complete revolution of the pedals (cranks).

### Examples
- **50 ÷ 11 = 4.55** - The rear wheel spins 4.55 times for each pedal stroke
- **34 ÷ 34 = 1.00** - The rear wheel spins once for each pedal stroke (1:1 ratio)
- **46 ÷ 16 = 2.88** - The rear wheel spins 2.88 times for each pedal stroke

### Interpretation
- **Higher ratio (e.g., 4.5)**: Harder to pedal, faster speed, good for flat terrain
- **Lower ratio (e.g., 1.0)**: Easier to pedal, slower speed, good for climbing
- **Middle ratio (e.g., 2.5)**: Balanced for general riding

---

## Gear Inches

### Formula
```
Gear Inches = (Chainring Teeth ÷ Rear Cog Teeth) × Wheel Diameter (inches)
```

### Alternative Formula
```
Gear Inches = Gear Ratio × Wheel Diameter (inches)
```

### Historical Context
Gear inches originated from penny-farthing bicycles where the wheel diameter directly determined the gearing. This measurement allows comparison across different wheel sizes.

### Wheel Diameter Conversions
- **700c wheel** with 25mm tire ≈ 27 inches
- **700c wheel** with 28mm tire ≈ 27.2 inches
- **700c wheel** with 32mm tire ≈ 27.5 inches
- **650b (27.5") wheel** ≈ 26.5-27 inches (depending on tire)
- **26" mountain bike wheel** ≈ 26 inches

### Example Calculation
```
Chainring: 50 teeth
Cog: 11 teeth
Wheel diameter: 27 inches (700c with 25mm tire)

Gear Inches = (50 ÷ 11) × 27
Gear Inches = 4.545 × 27
Gear Inches = 122.7 inches
```

### Gear Inches Interpretation Guide

| Gear Inches | Difficulty | Terrain | Use Case |
|-------------|------------|---------|----------|
| < 25" | Very Easy | Steep climbs (15%+) | Loaded touring, mountain passes |
| 25-40" | Easy | Moderate climbs (5-15%) | Hill climbing, beginners |
| 40-60" | Medium-Easy | Rolling hills | General riding, endurance |
| 60-80" | Medium | Flat roads | Cruising speed, commuting |
| 80-100" | Hard | Flat roads | Fast riding, tempo training |
| 100-120" | Very Hard | Downhills, tailwind | Racing, sprinting |
| > 120" | Extremely Hard | Track racing | Professional sprinting |

---

## Gain Ratio

### Formula
```
Gain Ratio = (Chainring Teeth ÷ Rear Cog Teeth) × (Wheel Radius ÷ Crank Length)
```

### Alternative Formula
```
Gain Ratio = Gear Ratio × (Wheel Radius ÷ Crank Length)
```

### Why Gain Ratio?
Proposed by Sheldon Brown, gain ratio provides a more accurate measurement of mechanical advantage than gear inches because it accounts for crank arm length. It represents the ratio of the distance the bike travels to the distance your foot travels.

### Standard Measurements
- **Crank Length**: Typically 170mm, 172.5mm, or 175mm
- **Wheel Radius**: Half of wheel diameter (including tire)

### Example Calculation
```
Chainring: 50 teeth
Cog: 11 teeth
Wheel radius: 343mm (700c wheel with 25mm tire)
Crank length: 170mm

Gain Ratio = (50 ÷ 11) × (343 ÷ 170)
Gain Ratio = 4.545 × 2.018
Gain Ratio = 9.17
```

### Interpretation
A gain ratio of 9.17 means that for every meter your foot moves in a circular path, the bike travels 9.17 meters forward.

---

## Speed Calculations

### Speed from Gear Inches Formula
```
Speed (km/h) = Gear Inches × π × Cadence (RPM) × 0.001885
```

### Why This Constant?
The constant 0.001885 converts from:
- Inches per revolution
- Minutes (RPM) to hours
- Inches to kilometers

### Breakdown
```
0.001885 = (60 minutes/hour) × (2.54 cm/inch) × (1 m/100 cm) × (1 km/1000 m)
```

### Alternative Speed Formula (from Development)
```
Speed (km/h) = (Development in meters × Cadence × 60) ÷ 1000
```

Where Development = distance traveled per pedal revolution

### Example Calculation
```
Gear Inches: 122.7
Cadence: 90 RPM
π: 3.14159

Speed = 122.7 × 3.14159 × 90 × 0.001885
Speed = 122.7 × 3.14159 × 90 × 0.001885
Speed = 65.4 km/h
```

---

## Wheel Circumference

### Precise Formula
```
Wheel Circumference = π × (Wheel Diameter + 2 × Tire Width)
```

### Common Wheel Sizes

| Wheel Type | ISO (mm) | Tire Width | Circumference (approx) |
|------------|----------|------------|------------------------|
| 700c × 23mm | 622mm | 23mm | 2096mm (2.096m) |
| 700c × 25mm | 622mm | 25mm | 2105mm (2.105m) |
| 700c × 28mm | 622mm | 28mm | 2136mm (2.136m) |
| 700c × 32mm | 622mm | 32mm | 2155mm (2.155m) |
| 650b × 47mm | 584mm | 47mm | 2100mm (2.100m) |
| 26" × 2.0" | 559mm | 50mm | 1990mm (1.990m) |

### Practical Measurement
For maximum accuracy, physically measure your wheel circumference by:
1. Mark a point on the tire
2. Mark where it touches the ground
3. Roll the bike exactly one wheel revolution
4. Measure the distance traveled

---

## Development (Meters per Revolution)

### Formula
```
Development = Gear Ratio × Wheel Circumference (meters)
```

### Alternative Names
- Rollout
- Meters of Development

### Example Calculation
```
Gear Ratio: 4.545 (50÷11)
Wheel Circumference: 2.105 meters (700c × 25mm)

Development = 4.545 × 2.105
Development = 9.57 meters
```

This means with each complete pedal stroke, the bicycle travels 9.57 meters.

### Practical Use
Development is useful for:
- Understanding exactly how far you travel per pedal stroke
- Comparing gears in metric units
- International cycling communities (more common than gear inches outside USA)

---

## Cadence and Speed Relationship

### Basic Relationship
```
Speed = (Development × Cadence × 60) ÷ 1000
```

Where:
- Development is in meters
- Cadence is in RPM (revolutions per minute)
- 60 converts minutes to hours
- 1000 converts meters to kilometers

### Target Cadence by Discipline

| Cycling Type | Typical Cadence Range |
|--------------|----------------------|
| Track Sprint | 120-180 RPM |
| Road Racing | 90-110 RPM |
| Time Trial | 85-100 RPM |
| Climbing | 70-90 RPM |
| Mountain Bike | 70-85 RPM |
| Touring | 60-80 RPM |
| Casual/Commuting | 60-75 RPM |

### Required Cadence for Target Speed

To calculate the cadence needed to achieve a specific speed:

```
Required Cadence (RPM) = (Target Speed × 1000) ÷ (Development × 60)
```

### Example
```
Target Speed: 30 km/h
Development: 6.5 meters (moderate gear)

Required Cadence = (30 × 1000) ÷ (6.5 × 60)
Required Cadence = 30000 ÷ 390
Required Cadence = 77 RPM
```

---

## Example Calculations

### Example 1: Road Bike High Gear

**Setup:**
- Chainring: 50 teeth
- Cog: 11 teeth
- Wheel: 700c with 25mm tire (27" or 343mm radius)
- Cadence: 90 RPM
- Crank length: 170mm

**Calculations:**
```
Gear Ratio = 50 ÷ 11 = 4.545

Gear Inches = 4.545 × 27 = 122.7"

Gain Ratio = 4.545 × (343 ÷ 170) = 9.17

Wheel Circumference = π × (622 + 2×25) = π × 672 = 2.110m

Development = 4.545 × 2.110 = 9.59m

Speed = 9.59 × 90 × 60 ÷ 1000 = 51.8 km/h
```

**Interpretation:** This is a very hard gear suitable for sprinting or fast descents.

---

### Example 2: Climbing Gear

**Setup:**
- Chainring: 34 teeth
- Cog: 32 teeth
- Wheel: 700c with 28mm tire
- Cadence: 70 RPM
- Crank length: 172.5mm

**Calculations:**
```
Gear Ratio = 34 ÷ 32 = 1.063

Gear Inches = 1.063 × 27.2 = 28.9"

Gain Ratio = 1.063 × (346 ÷ 172.5) = 2.13

Wheel Circumference = π × (622 + 2×28) = π × 678 = 2.130m

Development = 1.063 × 2.130 = 2.26m

Speed = 2.26 × 70 × 60 ÷ 1000 = 9.5 km/h
```

**Interpretation:** This is an easy climbing gear suitable for steep gradients of 10-15%.

---

### Example 3: Fixie/Single-Speed

**Setup:**
- Chainring: 46 teeth
- Cog: 16 teeth
- Wheel: 700c with 28mm tire
- Cadence: 80 RPM

**Calculations:**
```
Gear Ratio = 46 ÷ 16 = 2.875

Gear Inches = 2.875 × 27.2 = 78.2"

Wheel Circumference = 2.130m (same as above)

Development = 2.875 × 2.130 = 6.12m

Speed = 6.12 × 80 × 60 ÷ 1000 = 29.4 km/h
```

**Interpretation:** This is a moderate gear suitable for flat urban riding with some hills.

---

### Example 4: Mountain Bike Lowest Gear

**Setup:**
- Chainring: 30 teeth
- Cog: 51 teeth
- Wheel: 29" with 2.3" tire
- Cadence: 60 RPM

**Calculations:**
```
Gear Ratio = 30 ÷ 51 = 0.588

Gear Inches = 0.588 × 29 = 17.1"

Wheel Circumference ≈ 2.35m

Development = 0.588 × 2.35 = 1.38m

Speed = 1.38 × 60 × 60 ÷ 1000 = 5.0 km/h
```

**Interpretation:** Extremely low gear for very steep technical climbing (20%+ gradients).

---

## Practical Tips

### Choosing Gear Ratios

1. **For Climbing**: Target gear inches below 25" or gain ratio below 2.5
2. **For Flats**: Target gear inches 70-90" or gain ratio 6-8
3. **For Speed**: Target gear inches above 100" or gain ratio above 9

### Gear Range Calculation

```
Gear Range (%) = ((Highest Gear Ratio - Lowest Gear Ratio) ÷ Lowest Gear Ratio) × 100
```

**Example:**
```
Highest: 50 ÷ 11 = 4.545
Lowest: 34 ÷ 32 = 1.063

Range = ((4.545 - 1.063) ÷ 1.063) × 100 = 327%
```

A wider range means more versatility but potentially larger jumps between gears.

---

## References

Formulas compiled from:
- Sheldon Brown's bicycle technical documentation
- Engineering toolbox mechanical calculations
- Multiple cycling calculator methodologies
- ISO standards for bicycle components

**Content rephrased for compliance with licensing restrictions**

---

## Last Updated
September 3, 2026
