# ML Version Testing Guide

## Overview
This guide will help you test the ML-enhanced Bike Gearing Calculator to ensure all features work correctly.

## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- Internet connection (for loading TensorFlow.js library)

## Testing Steps

### 1. Initial Setup Test
**Goal**: Verify the application loads correctly

1. Open `ml-version/public/index.html` in your web browser
2. Check the ML status indicator at the top:
   - Should show: "🔄 Initializing ML Engine..." briefly
   - Then change to: "✅ AI Ready"
   - If TensorFlow.js fails to load, it will show: "⚠️ AI Unavailable (Using Rules)"

**Expected Result**: Page loads without JavaScript errors in console (F12 to open developer tools)

---

### 2. Basic Calculator Test
**Goal**: Verify the standard calculator functionality works

1. Use the default values or enter:
   - Chainrings: `34,50`
   - Cassette: `11,12,14,16,18,21,24,28,32`
   - Wheel Size: `622`
   - Tire Width: `25`
   - Cadence: `90`

2. Click **"Calculate Gearing"**

**Expected Results**:
- Gear table populates with calculated values
- Chart displays gear inches visualization
- Statistics show (approximately):
  - Lowest Gear: 30.8"
  - Highest Gear: 119.3"
  - Range: 3.87:1
- Terrain recommendations appear
- Riding type recommendations appear
- Groupset compatibility list appears
- Upgrade suggestions appear

---

### 3. User Profile Creation Test
**Goal**: Test the ML profile system

1. Scroll to **"Your Riding Profile"** section
2. Set your profile:
   - Primary Terrain: Choose any option (e.g., "Hilly")
   - Riding Style: Choose any option (e.g., "Fitness")
   - Fitness Level: Adjust slider (e.g., 7/10)

3. Click **"Save Profile & Get ML Recommendations"**

**Expected Results**:
- Page scrolls to ML Recommendations section
- Section becomes visible with three cards:
  1. **ML Analysis of Current Setup**: Shows star rating (1-5) with confidence percentage
  2. **ML-Suggested Optimal Setups**: Shows top 5 recommended configurations
  3. **Help Train the AI**: Feedback form
- ML Statistics update:
  - Training Samples: 0 (initially)
  - Model Status: "New" or "Learning"
  - Predicted Rating: Shows stars

---

### 4. ML Prediction Test
**Goal**: Verify ML predictions work

1. Review the **"ML Analysis of Current Setup"** card
2. Check for:
   - Star rating (1-5 stars)
   - Confidence percentage
   - Reasoning text explaining the rating
   - Current setup details listed

**Expected Results**:
- If model is untrained, you'll see: "Using rule-based analysis" note
- Rating should make sense based on terrain + riding style
- For mountainous terrain with low gearing: Higher rating (4-5 stars)
- For flat terrain with high gearing: Higher rating (4-5 stars)
- Mismatched setups should show lower ratings (2-3 stars)

---

### 5. Optimal Setup Recommendations Test
**Goal**: Test ML-suggested optimal configurations

1. Review **"ML-Suggested Optimal Setups"** card
2. Check each recommendation (should show 5 setups):
   - Configuration name (e.g., "Road Compact", "Gravel 2x")
   - Star rating
   - Chainring and cassette details
   - Gear range
   - Confidence percentage
   - Reasoning text

3. Click **"Apply This Setup"** on any recommendation

**Expected Results**:
- Input fields update with the selected configuration
- Page scrolls to top
- Gearing is automatically calculated
- Results update to show the new setup

---

### 6. Feedback System Test
**Goal**: Test the AI training feedback loop

1. After calculating gearing, scroll to **"Help Train the AI"** section
2. Click on stars to rate satisfaction (e.g., 4 stars)
3. (Optional) Add comments in the text area
4. Click **"Submit Feedback"**

**Expected Results**:
- Success message appears: "✅ Thank you! Your feedback helps improve the AI model"
- Star rating resets
- Text area clears
- ML Statistics update:
  - Training Samples: Increases by 1
  - Success message disappears after 3 seconds

**Test Multiple Feedback Cycles**:
- Submit 5-10 feedback entries with different ratings
- Try different gearing configurations between feedback submissions
- After 20+ samples, model status should change to "Trained"

---

### 7. Model Training Test
**Goal**: Verify the neural network trains with data

1. Submit feedback 20 times (you can use different presets to speed this up)
2. After the 20th feedback submission, watch for:
   - ML status indicator changes to: "🎓 Training AI model..."
   - After training completes: "✅ AI Model Updated!"
   - Then reverts to: "✅ AI Ready"

3. Check ML Statistics:
   - Training Samples: 20+
   - Model Status: "Trained"

**Expected Results**:
- Training completes without errors (check console)
- Future predictions should use the trained model (no "rule-based" message)
- Predictions may change slightly based on learned patterns

---

### 8. Preset Buttons Test
**Goal**: Verify all preset configurations work

1. Try each preset button at the bottom:
   - Road Compact (34/50, 11-32)
   - Road Standard (39/53, 11-23)
   - Gravel 2x (40/42, 10-33)
   - Gravel 1x (38, 11-42)
   - Mountain Bike (30/46, 10-51)
   - Fixie Standard (46×16)
   - Fixie Fast (48×17)
   - Fixie Easy (44×18)
   - City Bike variants

**Expected Results**:
- Each preset correctly fills input fields
- Gearing calculates automatically
- Results are appropriate for the bike type

---

### 9. Data Persistence Test
**Goal**: Verify data saves between sessions

1. Submit some feedback (3-5 entries)
2. Set your user profile (terrain, riding style, fitness)
3. Note the "Training Samples" count
4. Close the browser tab
5. Reopen `ml-version/public/index.html`
6. Check ML Statistics

**Expected Results**:
- Training Samples count is preserved
- User profile is remembered (check values in dropdowns)
- ML model loads from storage if it was trained

---

### 10. Console Error Check
**Goal**: Ensure no JavaScript errors

1. Open Developer Tools (F12)
2. Go to Console tab
3. Use all features of the calculator
4. Submit feedback
5. Generate ML recommendations

**Expected Results**:
- No red error messages in console
- You may see informational logs like:
  - "🤖 ML Engine initialized"
  - "✅ ML Engine ready!"
  - "📝 Recorded feedback: 4/5 stars"
  - "💾 Model saved"
- Yellow warnings are acceptable for TensorFlow.js deprecation notices

---

## Common Issues & Solutions

### Issue: "⚠️ AI Unavailable"
**Cause**: TensorFlow.js failed to load
**Solution**: 
- Check internet connection
- Try a different browser
- Check browser console for specific error
- Verify CDN link is accessible: https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.11.0/dist/tf.min.js

### Issue: No ML Recommendations Show
**Cause**: User profile not saved or ML section not triggered
**Solution**:
- Ensure you clicked "Save Profile & Get ML Recommendations"
- Check that calculator has been run at least once
- Verify JavaScript console for errors

### Issue: Feedback Not Recording
**Cause**: No gearing calculated or rating not selected
**Solution**:
- Calculate gearing first using "Calculate Gearing" button
- Click on stars to select a rating (1-5)
- Then click "Submit Feedback"

### Issue: Model Never Trains
**Cause**: Not enough feedback samples
**Solution**:
- Submit at least 20 feedback entries
- Model trains automatically every 10 submissions after reaching 20
- Check console for training messages

---

## Performance Benchmarks

### Load Times
- Initial page load: < 2 seconds
- TensorFlow.js initialization: 2-5 seconds
- First calculation: < 100ms
- ML prediction (untrained): < 50ms
- ML prediction (trained): 50-200ms
- Model training (20 samples): 5-15 seconds

### Browser Storage Usage
- Training data (50 samples): ~50KB
- Trained model: ~500KB-1MB
- User preferences: < 1KB

---

## Advanced Testing

### Test Different User Profiles

**Profile 1: Beginner Climber**
- Terrain: Mountainous
- Style: Casual
- Fitness: 3/10
- **Expected**: Should recommend easier gearing with low gear inches

**Profile 2: Competitive Racer**
- Terrain: Flat
- Style: Competitive
- Fitness: 9/10
- **Expected**: Should recommend taller gearing for speed

**Profile 3: Gravel Rider**
- Terrain: Mixed
- Style: Recreational
- Fitness: 6/10
- **Expected**: Should recommend balanced gearing with good range

### Test Edge Cases

1. **Single Chainring**: Enter only one chainring value
2. **Wide Range Cassette**: Try 10-52t cassette
3. **Small Wheels**: Try 559mm (26") wheels
4. **Fat Tires**: Try 60mm tire width
5. **Extreme Cadence**: Try 60 RPM or 120 RPM

---

## Testing Checklist

- [ ] Page loads without errors
- [ ] ML Engine initializes successfully
- [ ] Basic calculator functions work
- [ ] User profile saves correctly
- [ ] ML predictions generate
- [ ] Optimal setups display
- [ ] Feedback system works
- [ ] Star rating interface responds
- [ ] Training samples count increases
- [ ] Model trains after 20+ samples
- [ ] Preset buttons work
- [ ] All recommendations appear
- [ ] Data persists after browser refresh
- [ ] No console errors
- [ ] Apply setup buttons work

---

## Reporting Issues

If you encounter any issues during testing:

1. Note the exact steps to reproduce
2. Check the browser console for error messages
3. Note your browser name and version
4. Capture a screenshot if visual issue
5. Document which test case failed

---

## Next Steps After Testing

Once all tests pass:

1. **Performance Testing**: Test with slower devices/connections
2. **Browser Compatibility**: Test on multiple browsers
3. **Mobile Testing**: Test on smartphones and tablets
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Load Testing**: Submit 100+ feedback entries to test scalability

---

## Success Criteria

The ML version is considered fully functional when:

✅ All 10 test sections pass without errors
✅ ML predictions generate within 200ms
✅ Model trains successfully with 20+ samples
✅ Feedback loop works correctly
✅ Data persists across browser sessions
✅ No JavaScript console errors
✅ All recommendations are logical and useful

---

**Testing Complete**: Once all checks pass, the ML-enhanced calculator is ready for deployment!
