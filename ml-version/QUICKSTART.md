# Quick Start Guide - ML Version

## Get Started in 2 Minutes! 🚀

### Step 1: Open the Calculator
1. Navigate to the `ml-version/public/` folder
2. Double-click `index.html` to open in your browser
3. Wait for the ML status to show: **"✅ AI Ready"** (takes 2-5 seconds)

### Step 2: Try a Calculation
1. The calculator is pre-loaded with default values:
   - Chainrings: `34,50` (road compact)
   - Cassette: `11-32` (9-speed)
   - Wheel: `622mm` (700c)
2. Click **"Calculate Gearing"** button
3. Review the results: gear table, chart, and recommendations

### Step 3: Set Your Profile
Scroll down to **"Your Riding Profile"** section:
1. **Primary Terrain**: Choose your typical riding terrain
2. **Riding Style**: Select your cycling style
3. **Fitness Level**: Adjust the slider (1-10)
4. Click **"Save Profile & Get ML Recommendations"**

### Step 4: Review AI Recommendations
The page scrolls to show ML analysis:
- **ML Analysis**: Star rating for current setup
- **Optimal Setups**: Top 5 AI-recommended configurations
- **Feedback Form**: Rate your satisfaction to train the AI

### Step 5: Try Different Setups
Use the preset buttons at the bottom to quickly test different configurations:
- Road Compact
- Road Standard
- Gravel 1x/2x
- Mountain Bike
- Fixie
- City Bike

### Step 6: Train the AI
After trying different setups:
1. Click stars to rate your satisfaction (1-5)
2. (Optional) Add comments
3. Click **"Submit Feedback"**
4. Repeat with different setups
5. After 20 feedback entries, the AI will train automatically!

---

## Quick Tips

### 💡 Understanding Results
- **Low Gear Inches** (< 50): Easy climbing, slow top speed
- **High Gear Inches** (> 100): Fast top speed, hard climbing
- **Range Ratio** (> 4.0): Very versatile, big jumps between gears

### 🎯 Best Practices
- Try presets first to understand different bike types
- Match terrain to your actual riding environment
- Be honest about fitness level for better recommendations
- Submit feedback regularly to improve AI accuracy

### ⚡ Keyboard Shortcuts
- `Enter` in any input field: Calculate gearing
- `Tab`: Navigate between fields
- Preset buttons: Just click!

---

## What to Expect

### First Time (0-19 Feedback Entries)
- ML uses rule-based recommendations
- Predictions are generic but useful
- Status shows: "New" or "Learning"

### After Training (20+ Feedback Entries)  
- ML uses trained neural network
- Predictions are personalized
- Status shows: "Trained"
- Recommendations improve with more data

---

## Common Questions

**Q: Why does it say "Using rule-based analysis"?**  
A: The AI needs 20+ feedback samples to train. Keep using and rating setups!

**Q: Can I skip the profile step?**  
A: Yes! The standard calculator works fine without ML. Profile is only for AI recommendations.

**Q: Does this send my data anywhere?**  
A: No! Everything runs in your browser. Your data never leaves your computer.

**Q: How do I reset everything?**  
A: Clear your browser's localStorage for this page. In Chrome: F12 → Application → Local Storage → Clear All

**Q: What browsers work best?**  
A: Chrome, Firefox, Edge, and Safari (latest versions). Chrome is fastest for ML.

---

## Troubleshooting

### ❌ ML Engine Won't Load
- Check internet connection (needed for TensorFlow.js)
- Try a different browser
- Disable ad blockers/script blockers
- Check browser console (F12) for errors

### ❌ Predictions Don't Make Sense
- Train the model with 20+ feedback entries
- Ensure profile matches your actual riding
- Try rule-based recommendations first

### ❌ Page Looks Broken
- Ensure all CSS files are in the same folder
- Check that JavaScript is enabled
- Try zooming to 100% (Ctrl+0)

---

## Example Workflow

Here's a complete workflow to test all features:

### 1️⃣ Road Racer Profile
```
Terrain: Flat Roads
Style: Competitive
Fitness: 8/10
Preset: Road Standard (39/53, 11-23)
→ Should get 4-5 stars for speed
```

### 2️⃣ Mountain Climber Profile
```
Terrain: Mountainous
Style: Fitness
Fitness: 6/10
Preset: Road Compact (34/50, 11-32)
→ Should get 4-5 stars for climbing
```

### 3️⃣ Gravel Adventurer Profile
```
Terrain: Mixed
Style: Recreational
Fitness: 5/10
Preset: Gravel 1x (38, 11-42)
→ Should get 4 stars for versatility
```

### 4️⃣ Urban Commuter Profile
```
Terrain: Rolling Hills
Style: Casual
Fitness: 4/10
Preset: City Bike (46×18)
→ Should get 3-4 stars for mixed use
```

---

## Need More Help?

📖 **Full Documentation**: See `README.md` for detailed feature explanations

🧪 **Testing Guide**: See `TESTING_GUIDE.md` for comprehensive test procedures

🤖 **ML Details**: See `README_ML.md` for technical machine learning information

📊 **Comparison**: See `ML_VS_STANDARD_COMPARISON.md` to understand ML vs standard version

---

## Have Fun! 🎉

The ML-enhanced calculator is designed to help you find your perfect gearing setup. Experiment, provide feedback, and watch the AI learn your preferences!

**Remember**: More feedback = Better recommendations! 🚴‍♂️🤖
