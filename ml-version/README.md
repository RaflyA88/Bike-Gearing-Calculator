# 🤖 Bike Gearing Calculator - ML Enhanced Version

**AI-Powered Personalized Gearing Recommendations**

---

## 🚀 Quick Start

1. **Open** `public/index.html` in your web browser
2. **Wait** for AI Engine to initialize (~3-5 seconds)
3. **Create** your riding profile (terrain, style, fitness)
4. **Calculate** gearing or use presets
5. **Get** AI-powered recommendations!

---

## ✨ What Makes This Special?

This version adds **Machine Learning** on top of the standard calculator:

### 🧠 Neural Network Powered
- TensorFlow.js runs in your browser
- Predicts satisfaction with gearing setups
- Learns from your feedback
- Improves recommendations over time

### 👤 Personalized for You
- Create your riding profile
- Terrain preference
- Riding style
- Fitness level

### 📊 Data-Driven Decisions
- AI ranks gearing options
- Shows confidence levels
- Provides reasoning
- Learns patterns from feedback

### 🔄 Continuous Learning
- Rate your experiences (1-5 stars)
- Model automatically retrains
- Recommendations improve with use
- Community benefit (local only)

---

## 📁 What's in This Folder?

```
ml-version/
├── public/
│   ├── index.html         # Main app with ML UI
│   ├── script.js          # Enhanced with ML integration
│   ├── ml-engine.js       # Neural network engine
│   ├── styles.css         # Includes ML-specific styles
│
├── README.md              # This file - Quick start
├── README_ML.md           # Complete ML documentation
├── ML_VS_STANDARD_COMPARISON.md  # Comparison guide
└── (copied from parent)   # Other original files

```

---

## 🆚 ML vs Standard Version

| Feature | Standard | This (ML) |
|---------|----------|-----------|
| Core Calculations | ✅ | ✅ |
| Rule-Based Recommendations | ✅ | ✅ |
| **AI Predictions** | ❌ | ✅ |
| **User Profiles** | ❌ | ✅ |
| **Learning Over Time** | ❌ | ✅ |
| **Personalized Ranking** | ❌ | ✅ |
| File Size | ~200KB | ~3.5MB |
| Load Time | <1s | ~3-5s |

**Read full comparison**: [ML_VS_STANDARD_COMPARISON.md](ML_VS_STANDARD_COMPARISON.md)

---

## 🎯 When to Use This Version?

### ✅ Use ML Version When:
- You want **personalized** recommendations
- You'll use it **regularly** (benefits from learning)
- You want to **provide feedback** to improve AI
- You're **tech-savvy** and enjoy new features
- You want **optimal** gearing for your specific needs

### ⚠️ Use Standard Version When:
- You want **quick** lookups
- You're a **beginner**
- You prefer **simple** interfaces
- You have **slow** internet or old device
- You use it **occasionally**

**Standard version**: `../public/index.html` (parent folder)

---

## 📖 Documentation

### Quick Guides
- **This File**: Quick start overview
- **[README_ML.md](README_ML.md)**: Complete ML documentation (10,000+ words)
- **[ML_VS_STANDARD_COMPARISON.md](ML_VS_STANDARD_COMPARISON.md)**: Detailed comparison

### Inherited Documentation (from parent folder)
- **GEARING_RECOMMENDATIONS_GUIDE.md**: Rule-based recommendations
- **FEATURE_EXAMPLES.md**: Real-world usage scenarios
- **QUICK_START_RECOMMENDATIONS.md**: Step-by-step guide

---

## 🤖 How the ML Works

### Simple Explanation

1. **You rate gearing setups** (1-5 stars)
2. **AI learns patterns** from your ratings
3. **Neural network trains** (automatically)
4. **Future predictions improve** based on learning

### Technical Details

- **Model**: Sequential neural network
- **Layers**: Input (10) → Dense (64) → Dense (32) → Dense (16) → Output (5)
- **Training**: 50 epochs, Adam optimizer
- **Data**: Stored locally (privacy-first)
- **Tech**: TensorFlow.js 4.11.0

**Full technical docs**: [README_ML.md](README_ML.md#-how-the-machine-learning-works)

---

## 🎓 Getting Best Results

### For Beginners (First 20 Ratings)

1. **Try different setups** (use presets)
2. **Rate honestly** (don't just give 5 stars)
3. **Provide 20+ ratings** before trusting ML
4. **Add comments** to feedback

### For Power Users (20+ Ratings)

1. **Update profile** as fitness improves
2. **Rate consistently** (same criteria)
3. **Test ML suggestions** and rate them
4. **Aim for 100+ ratings** for best accuracy

---

## 🔐 Privacy & Data

### What's Stored?
- Your riding profile
- Your feedback ratings
- Trained ML model

### Where?
- **Locally** in your browser only
- **No servers** involved
- **No tracking** or analytics
- **No data sharing**

### Can I Delete It?
✅ Yes! Browser console → `mlEngine.resetAllData()`

---

## 🆘 Troubleshooting

### "🔄 Loading ML Engine..."
**Normal**: Takes 3-5 seconds on first load

### "⚠️ AI Unavailable (Using Rules)"
**Cause**: TensorFlow.js failed to load  
**Fix**: Check internet, reload page, use modern browser

### "Using rule-based fallback"
**Cause**: Less than 20 feedback samples  
**Fix**: Provide more ratings to enable ML

### Model seems inaccurate
**Cause**: Not enough or inconsistent data  
**Fix**: Add more ratings (aim for 50+), rate consistently

---

## 📊 ML Status Indicators

### Model Status Icons

- **🔄 Loading ML Engine...**: Initializing
- **✅ AI Ready**: Model loaded and operational
- **⚠️ AI Unavailable**: Fallback to rules
- **🎓 Training AI model...**: Learning from data

### Training Data Count

- **0-19**: ⚠️ Not enough (rule-based fallback)
- **20-49**: ⚙️ Training started (predictions available)
- **50-99**: 📈 Good data (improving accuracy)
- **100+**: 🎯 Excellent (highly accurate)

---

## 🎮 Try It Now!

### Scenario 1: Quick Test (5 minutes)

1. Open `public/index.html`
2. Click "Road Compact" preset
3. Click "Calculate Gearing"
4. Fill in riding profile
5. Click "Save Profile & Get ML Recommendations"
6. See rule-based predictions (no training data yet)

### Scenario 2: Train the AI (30 minutes)

1. Try 5 different presets
2. Rate each one (1-5 stars)
3. Repeat with variations (change cassette sizes)
4. Submit 20+ ratings total
5. Get ML-powered predictions!

### Scenario 3: Find Your Optimal Setup (1 hour)

1. Create detailed riding profile
2. Submit 50+ ratings on various setups
3. Review "ML-Suggested Optimal Setups"
4. Apply top recommendation
5. Test and rate it
6. Refine based on experience

---

## 💡 Pro Tips

### Maximize ML Accuracy

1. **Be honest**: Don't rate everything 5 stars
2. **Be consistent**: Use same criteria each time
3. **Add context**: Write comments explaining ratings
4. **Test variety**: Try different chainring/cassette combos
5. **Update profile**: Adjust as fitness/style changes

### Common Mistakes

❌ Rating everything 5 stars → Model can't learn  
❌ Inconsistent ratings → Confuses the model  
❌ Too few samples → Unreliable predictions  
❌ Never updating profile → Outdated recommendations  

---

## 🔮 Future ML Features

Potential enhancements:

- 🌍 **Community Learning**: Opt-in data sharing
- 📍 **Route Optimization**: GPX file analysis
- 📱 **Mobile App**: Native iOS/Android
- ⌚ **Sensor Integration**: Connect cycling computers
- 🔄 **Real-Time Adaptation**: Learn while you ride
- 👥 **Collaborative Filtering**: "Users like you..."

---

## 🤝 Contributing

### Help Improve the AI!

**Every rating you submit helps**:
- Improves your personal model
- Validates algorithms
- Guides future development

**Share feedback**:
- Report bugs
- Suggest features
- Share success stories

---

## 📚 Additional Resources

### Learn More
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Neural Networks Explained](https://www.3blue1brown.com/topics/neural-networks)
- [Machine Learning Basics](https://developers.google.com/machine-learning/crash-course)

### Related Projects
- Standard version (parent folder)
- Original calculator (v1.0)

---

## ⚙️ Technical Requirements

### Minimum Requirements
- **Browser**: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **JavaScript**: Enabled
- **Storage**: 10MB available (localStorage)
- **Memory**: 100MB RAM
- **Internet**: For first load (TensorFlow.js CDN)

### Optimal Requirements
- **Browser**: Latest Chrome/Firefox
- **Connection**: Fast (for quick TF.js load)
- **Device**: Modern (2018+) for best performance

---

## 📞 Support

### Documentation
1. **This README**: Quick overview
2. **README_ML.md**: Comprehensive guide
3. **ML_VS_STANDARD_COMPARISON.md**: Decision guide

### Troubleshooting
- Check browser console for errors
- Ensure modern browser
- Clear localStorage if corrupted
- Try standard version if issues persist

### Questions?
- Read the docs first
- Check troubleshooting section
- Inspect console for debug info
- Reset data if needed: `mlEngine.resetAllData()`

---

## 🎉 Get Started Now!

```bash
# Simply open in browser
public/index.html

# Or run with Python server
cd public
python -m http.server 3000

# Or run with Node.js server  
cd public
npx http-server -p 3000
```

Then navigate to http://localhost:3000

---

## 📜 License

Same as parent project: MIT License

Free to use, modify, and distribute.

---

## 🙏 Credits

- **Standard Version**: Base calculator
- **TensorFlow.js Team**: ML framework
- **Cycling Community**: Domain knowledge
- **You**: For training the AI!

---

**🚴‍♂️ Happy riding with AI! 🤖**

*Powered by TensorFlow.js • Built with ❤️ for cyclists*

---

**Version**: 2.0-ML  
**Last Updated**: September 3, 2026  
**Status**: Production Ready ✅
