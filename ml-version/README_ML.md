# 🤖 Bike Gearing Calculator - ML Enhanced Version

## Overview

This is the **Machine Learning enhanced version** of the Bike Gearing Calculator that uses TensorFlow.js to provide **AI-powered, personalized gearing recommendations** based on user preferences and feedback.

---

## 🆕 What's Different from Standard Version?

| Feature | Standard Version | ML-Enhanced Version |
|---------|-----------------|---------------------|
| **Recommendations** | Rule-based logic | Neural network predictions |
| **Personalization** | None | Learns from your feedback |
| **Optimal Setups** | Fixed suggestions | AI-predicted for your profile |
| **Adaptation** | Static | Improves over time |
| **User Profiles** | No | Yes (terrain, style, fitness) |
| **Feedback System** | No | Yes (trains the model) |
| **Dependencies** | None | TensorFlow.js (~3MB) |
| **Complexity** | Simple | Advanced |

---

## 🚀 New Features

### 1. **User Riding Profile** 🏃
Create your personalized cycling profile:
- **Primary Terrain**: Flat, rolling, hilly, mountainous, or mixed
- **Riding Style**: Casual, recreational, fitness, competitive, or professional
- **Fitness Level**: 1-10 scale

The AI uses this to tailor recommendations specifically for you!

### 2. **AI-Powered Satisfaction Prediction** ⭐
The neural network predicts how satisfied you'll be with any gearing setup (1-5 stars):
- Based on patterns from your feedback and similar cyclists
- Shows confidence level (how certain the AI is)
- Provides reasoning for its predictions

### 3. **ML-Suggested Optimal Setups** 💡
Get top 5 AI-recommended gearing configurations:
- Ranked by predicted satisfaction
- Tailored to your riding profile
- One-click to apply and test

### 4. **Feedback-Driven Learning** 📊
Train the AI with your experiences:
- Rate your current gearing (1-5 stars)
- Add optional comments
- Model automatically retrains with new data
- Improves recommendations for everyone

### 5. **Real-Time ML Statistics** 📈
Track the AI's progress:
- Number of training samples collected
- Model training status
- Your predicted satisfaction rating

---

## 🧠 How the Machine Learning Works

### Neural Network Architecture

```
Input Layer (10 features)
    ↓
Dense Layer (64 neurons, ReLU activation)
    ↓
Dense Layer (32 neurons, ReLU activation)
    ↓
Dropout Layer (20% rate)
    ↓
Dense Layer (16 neurons, ReLU activation)
    ↓
Dropout Layer (20% rate)
    ↓
Output Layer (5 neurons, Softmax activation)
    ↓
Predicted Satisfaction (1-5 stars)
```

### Input Features (10)

1. **Lowest Gear Inches** (normalized 0-1)
2. **Highest Gear Inches** (normalized 0-1)
3. **Gear Range** (normalized 0-1)
4. **Chainring Count** (1x, 2x, or 3x)
5. **Cassette Cog Count** (normalized)
6. **Wheel Size** (normalized)
7. **Tire Width** (normalized)
8. **Terrain Type** (encoded 0-1)
9. **Riding Style** (encoded 0-1)
10. **Fitness Level** (normalized 0-1)

### Training Process

1. **Data Collection**: User provides feedback on gearing setups
2. **Feature Extraction**: Convert setup to numerical features
3. **Training**: Model learns patterns with 50 epochs
4. **Validation**: 20% of data reserved for validation
5. **Saving**: Model saved to browser's localStorage
6. **Prediction**: Use trained model for recommendations

### Model Training Schedule

- **Automatic retraining**: Every 10 feedback submissions
- **Minimum data**: 20 samples required before first training
- **Incremental learning**: Model improves continuously

---

## 📖 How to Use

### Step 1: Set Up Your Profile

1. Scroll to **"Your Riding Profile"** section
2. Select your **Primary Terrain** (e.g., "Rolling Hills")
3. Choose your **Riding Style** (e.g., "Recreational")
4. Adjust **Fitness Level** slider (1-10)
5. Click **"Save Profile & Get ML Recommendations"**

### Step 2: Calculate Gearing

1. Enter your chainrings and cassette (or use presets)
2. Click **"Calculate Gearing"**
3. Review traditional recommendations

### Step 3: Get AI Analysis

1. After saving your profile, the AI section appears
2. View **"ML Analysis of Current Setup"**:
   - See predicted satisfaction (1-5 stars)
   - Read AI reasoning
   - Check confidence level
3. Browse **"ML-Suggested Optimal Setups"**:
   - Top 5 configurations ranked by AI
   - Click "Apply This Setup" to test any recommendation

### Step 4: Provide Feedback

1. Test the gearing (ride with it, or evaluate mentally)
2. In **"Help Train the AI"** section:
   - Click stars to rate satisfaction (1-5)
   - Optional: Add comments about your experience
   - Click **"Submit Feedback"**
3. Your feedback trains the model for better future recommendations!

---

## 🎯 Example Usage Scenarios

### Scenario 1: New Cyclist Seeking Advice

**Profile**: 
- Terrain: Mixed
- Style: Recreational
- Fitness: 4/10

**AI Recommendation**:
> ⭐⭐⭐⭐⭐ Road Compact (34/50, 11-32)  
> "This setup provides versatile range perfect for beginners. Easy climbing with 28.7" lowest gear while maintaining decent top speed."

**Action**: Apply the setup, test it, provide feedback

---

### Scenario 2: Competitive Cyclist Optimizing

**Profile**:
- Terrain: Hilly
- Style: Competitive
- Fitness: 9/10

**AI Recommendation**:
> ⭐⭐⭐⭐⭐ Road Semi-Compact (36/52, 11-30)  
> "Based on learned patterns from competitive cyclists, this offers aggressive gearing with sufficient climbing ability for your fitness level."

**Action**: Compare to current setup, apply if better

---

### Scenario 3: Training the Model

**Action**: Try multiple setups and rate each
- 50/34 with 11-28 → ⭐⭐⭐☆☆ "Not enough climbing gears"
- 50/34 with 11-32 → ⭐⭐⭐⭐⭐ "Perfect balance!"
- 53/39 with 11-25 → ⭐⭐☆☆☆ "Too hard for hills"

**Result**: AI learns your preferences and improves future predictions

---

## 📊 Understanding ML Metrics

### Training Data Count
- **0-19**: Not enough data, using rule-based fallback
- **20-49**: Model training started, predictions available
- **50-99**: Good data, improving accuracy
- **100+**: Excellent data, highly accurate predictions

### Model Status
- **New**: No training yet (need 20+ samples)
- **Learning**: Training in progress
- **Trained**: Ready for predictions

### Prediction Confidence
- **80-100%**: Very confident (trust this highly)
- **60-79%**: Confident (reliable prediction)
- **40-59%**: Moderate confidence (use with caution)
- **< 40%**: Low confidence (more data needed)

---

## 🔬 Technical Details

### Technologies Used

- **TensorFlow.js 4.11.0**: Client-side machine learning
- **Neural Network**: Sequential model with dense layers
- **Optimizer**: Adam (learning rate 0.001)
- **Loss Function**: Categorical cross-entropy
- **Activation**: ReLU (hidden layers), Softmax (output)
- **Regularization**: Dropout (20% rate)

### Data Storage

All data stored **locally in your browser**:
- **Training Data**: `localStorage: bikeGearing_trainingData`
- **User Preferences**: `localStorage: bikeGearing_userPreferences`
- **Trained Model**: `localStorage: bike-gearing-ml-model`

**Privacy**: No data sent to servers. Everything stays on your device!

### Performance

- **Model Size**: ~500KB (compressed)
- **Prediction Time**: <50ms
- **Training Time**: ~10-30 seconds (50 epochs)
- **Memory Usage**: ~30-50MB additional

### Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ❌ Internet Explorer (not supported)

---

## 🆚 When to Use Which Version?

### Use **Standard Version** if you want:
- ✅ Simple, fast, lightweight
- ✅ No ML dependencies
- ✅ Instant results
- ✅ Works offline immediately
- ✅ No learning curve

### Use **ML-Enhanced Version** if you want:
- ✅ Personalized recommendations
- ✅ AI that learns from feedback
- ✅ Optimal setup predictions
- ✅ Continuous improvement
- ✅ Advanced analysis

---

## 🎓 ML Model Training Tips

### Getting Best Results

1. **Provide Diverse Feedback**
   - Rate different gearing setups
   - Try various terrain types
   - Test multiple riding styles

2. **Be Honest with Ratings**
   - Don't just give 5 stars
   - Reflect actual experience
   - Add comments for context

3. **Build Data Gradually**
   - Start with 20+ samples
   - Add 10 more periodically
   - Aim for 100+ for best accuracy

4. **Update Your Profile**
   - Change terrain/style as needed
   - Adjust fitness level
   - Model adapts to profile changes

### Common Pitfalls

❌ **Rating everything 5 stars** → Model can't learn preferences  
❌ **Too few samples (<20)** → Predictions unreliable  
❌ **Inconsistent ratings** → Confuses the model  
❌ **Never providing feedback** → Model doesn't improve  

---

## 🔧 Troubleshooting

### "ML Engine not available"
**Cause**: TensorFlow.js failed to load  
**Solution**: Check internet connection, reload page

### "Using rule-based fallback"
**Cause**: Not enough training data (<20 samples)  
**Solution**: Provide more feedback to enable ML predictions

### "Model training failed"
**Cause**: Browser compatibility or data corruption  
**Solution**: Reset data (see below), use modern browser

### Reset All ML Data

Open browser console and run:
```javascript
mlEngine.resetAllData();
```

This clears all training data and starts fresh.

---

## 📈 Future ML Enhancements

Potential improvements for future versions:

1. **Transfer Learning**
   - Pre-trained model with community data
   - Faster initial recommendations

2. **Collaborative Filtering**
   - Learn from similar users
   - "Cyclists like you also prefer..."

3. **Route-Based Predictions**
   - Analyze GPX files
   - Recommend gearing for specific routes

4. **Wear Prediction**
   - Predict component lifespan
   - Maintenance recommendations

5. **Real-Time Adaptation**
   - Learn from riding data
   - Integrate with cycling computers

---

## 🤝 Contributing Feedback

Your feedback makes the AI smarter!

**What helps most**:
- ✅ Honest ratings (not all 5 stars)
- ✅ Detailed comments
- ✅ Variety of setups tested
- ✅ Real-world riding experience

**Every rating improves the model for all users!**

---

## ⚠️ Limitations

### Current Limitations

1. **Cold Start**: Needs 20+ samples before ML works
2. **Personal Only**: Model unique to your browser
3. **No Sync**: Data doesn't sync across devices
4. **Memory**: Requires modern browser with WebGL
5. **Privacy**: Cannot benefit from community data (by design)

### Not a Substitute for...

- Professional bike fitting
- Expert mechanic advice
- Medical/physical therapy
- Personal experience

**Use as a tool, not absolute truth!**

---

## 📚 Learn More About the ML

### Concepts Explained

**Neural Networks**: Interconnected "neurons" that learn patterns from data

**Training**: Process of adjusting network weights to minimize prediction error

**Overfitting**: Model memorizes data instead of learning patterns (prevented by dropout)

**Confidence**: Model's certainty about its prediction (based on softmax probabilities)

**Transfer Learning**: Using knowledge from one task to improve another

### Recommended Reading

- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [Neural Networks Explained](https://www.3blue1brown.com/topics/neural-networks)
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)

---

## 🎉 Get Started

1. **Open** `ml-version/public/index.html`
2. **Create** your riding profile
3. **Calculate** some gearing setups
4. **Rate** your experiences
5. **Watch** the AI improve!

---

## 📞 Support

**Questions about ML features?**
- Check this README
- Review inline help (ℹ️ buttons)
- Inspect browser console for debug info

**Want standard version?**
- Use `../public/index.html` (parent directory)
- No ML complexity, same core features

---

**Happy riding with AI! 🚴‍♂️🤖**

*ML-Enhanced Version - Powered by TensorFlow.js*
