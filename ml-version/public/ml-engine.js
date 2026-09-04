/**
 * Machine Learning Engine for Bike Gearing Calculator
 * Uses TensorFlow.js for client-side machine learning
 * 
 * Features:
 * - Personalized gearing recommendations based on user preferences
 * - Riding style prediction from gear usage patterns
 * - Optimal gear ratio prediction for specific conditions
 * - User preference learning over time
 */

class BikeGearingML {
    constructor() {
        this.model = null;
        this.isModelLoaded = false;
        this.trainingData = [];
        this.userPreferences = this.loadUserPreferences();
        this.ridingHistory = this.loadRidingHistory();
        
        // Model hyperparameters
        this.modelConfig = {
            inputFeatures: 10,  // gear inches, range, terrain, etc.
            hiddenLayers: [64, 32, 16],
            outputClasses: 5    // satisfaction ratings 1-5
        };
        
        console.log('🤖 ML Engine initialized');
    }

    /**
     * Initialize TensorFlow.js and create the model
     */
    async initialize() {
        try {
            console.log('🔄 Loading TensorFlow.js...');
            
            // Check if TensorFlow.js is loaded
            if (typeof tf === 'undefined') {
                throw new Error('TensorFlow.js not loaded. Please include the library.');
            }

            // Create or load the model
            await this.createModel();
            
            // Load any saved training data
            this.loadTrainingData();
            
            // If we have enough data, train the model
            if (this.trainingData.length >= 20) {
                await this.trainModel();
            }
            
            this.isModelLoaded = true;
            console.log('✅ ML Engine ready!');
            
            return true;
        } catch (error) {
            console.error('❌ ML Engine initialization failed:', error);
            return false;
        }
    }

    /**
     * Create neural network model
     */
    async createModel() {
        // Check if we have a saved model
        const savedModel = await this.loadSavedModel();
        if (savedModel) {
            this.model = savedModel;
            console.log('📦 Loaded pre-trained model');
            return;
        }

        // Create new model
        console.log('🏗️ Creating new neural network...');
        
        this.model = tf.sequential();
        
        // Input layer
        this.model.add(tf.layers.dense({
            units: this.modelConfig.hiddenLayers[0],
            activation: 'relu',
            inputShape: [this.modelConfig.inputFeatures]
        }));
        
        // Hidden layers with dropout for regularization
        this.modelConfig.hiddenLayers.slice(1).forEach(units => {
            this.model.add(tf.layers.dense({
                units: units,
                activation: 'relu'
            }));
            this.model.add(tf.layers.dropout({ rate: 0.2 }));
        });
        
        // Output layer (satisfaction prediction)
        this.model.add(tf.layers.dense({
            units: this.modelConfig.outputClasses,
            activation: 'softmax'
        }));
        
        // Compile model
        this.model.compile({
            optimizer: tf.train.adam(0.001),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
        
        console.log('✅ Model created');
    }

    /**
     * Extract features from gearing setup
     */
    extractFeatures(gearingSetup) {
        const {
            chainrings,
            cassette,
            wheelSize,
            tireWidth,
            lowestGear,
            highestGear,
            range,
            terrainType = 'mixed',
            ridingStyle = 'recreational',
            fitness = 5
        } = gearingSetup;

        // Normalize features
        const features = [
            lowestGear / 150,           // Normalize to 0-1 range
            highestGear / 150,
            range / 10,
            chainrings.length / 3,      // 1x, 2x, or 3x
            cassette.length / 15,       // Number of cogs
            wheelSize / 700,            // Wheel size normalized
            tireWidth / 50,             // Tire width normalized
            this.encodeTerrainType(terrainType),
            this.encodeRidingStyle(ridingStyle),
            fitness / 10                // Fitness level 0-1
        ];

        return tf.tensor2d([features]);
    }

    /**
     * Encode terrain type to numerical value
     */
    encodeTerrainType(terrain) {
        const encoding = {
            'flat': 0.2,
            'rolling': 0.4,
            'hilly': 0.6,
            'mountainous': 0.8,
            'mixed': 0.5
        };
        return encoding[terrain] || 0.5;
    }

    /**
     * Encode riding style to numerical value
     */
    encodeRidingStyle(style) {
        const encoding = {
            'casual': 0.2,
            'recreational': 0.4,
            'fitness': 0.6,
            'competitive': 0.8,
            'professional': 1.0
        };
        return encoding[style] || 0.4;
    }

    /**
     * Predict satisfaction score for a gearing setup
     */
    async predictSatisfaction(gearingSetup) {
        if (!this.isModelLoaded) {
            console.warn('⚠️ Model not loaded, using rule-based fallback');
            return this.ruleBasedSatisfactionFallback(gearingSetup);
        }

        try {
            const features = this.extractFeatures(gearingSetup);
            const prediction = await this.model.predict(features);
            const scores = await prediction.data();
            
            // Get predicted class (1-5 stars)
            const predictedClass = scores.indexOf(Math.max(...scores)) + 1;
            const confidence = Math.max(...scores);
            
            // Cleanup tensors
            features.dispose();
            prediction.dispose();
            
            return {
                rating: predictedClass,
                confidence: confidence,
                reasoning: this.generateMLReasoning(gearingSetup, predictedClass, confidence)
            };
        } catch (error) {
            console.error('❌ Prediction error:', error);
            return this.ruleBasedSatisfactionFallback(gearingSetup);
        }
    }

    /**
     * Rule-based fallback when ML is not available
     */
    ruleBasedSatisfactionFallback(gearingSetup) {
        const { lowestGear, highestGear, range, terrainType } = gearingSetup;
        
        let score = 3; // Start with average
        
        // Adjust based on terrain match
        if (terrainType === 'mountainous' && lowestGear <= 25) score++;
        if (terrainType === 'flat' && highestGear >= 110) score++;
        if (terrainType === 'mixed' && range >= 3.5) score++;
        
        // Clamp to 1-5
        score = Math.max(1, Math.min(5, score));
        
        return {
            rating: score,
            confidence: 0.6,
            reasoning: 'Based on rule-based heuristics (ML model not available)',
            isRuleBased: true
        };
    }

    /**
     * Generate human-readable reasoning for ML prediction
     */
    generateMLReasoning(gearingSetup, rating, confidence) {
        const confidenceText = confidence > 0.8 ? 'very confident' : 
                              confidence > 0.6 ? 'confident' : 'somewhat confident';
        
        let reason = `ML model predicts ${rating}/5 satisfaction (${confidenceText}). `;
        
        if (rating >= 4) {
            reason += 'This gearing setup aligns well with patterns from similar successful configurations.';
        } else if (rating === 3) {
            reason += 'This setup is workable but may not be optimal for your stated preferences.';
        } else {
            reason += 'Based on learned patterns, this setup may not meet your needs effectively.';
        }
        
        return reason;
    }

    /**
     * Predict optimal gearing based on user profile
     */
    async predictOptimalGearing(userProfile) {
        const {
            terrainType,
            ridingStyle,
            fitness,
            currentGearing
        } = userProfile;

        // Generate candidate gearing configurations
        const candidates = this.generateGearingCandidates(terrainType, ridingStyle);
        
        // Score each candidate
        const scoredCandidates = [];
        for (const candidate of candidates) {
            const satisfaction = await this.predictSatisfaction({
                ...candidate,
                terrainType,
                ridingStyle,
                fitness
            });
            
            scoredCandidates.push({
                ...candidate,
                mlRating: satisfaction.rating,
                mlConfidence: satisfaction.confidence,
                reasoning: satisfaction.reasoning
            });
        }
        
        // Sort by ML rating
        scoredCandidates.sort((a, b) => {
            if (b.mlRating !== a.mlRating) return b.mlRating - a.mlRating;
            return b.mlConfidence - a.mlConfidence;
        });
        
        return scoredCandidates.slice(0, 5); // Top 5 recommendations
    }

    /**
     * Generate candidate gearing configurations
     */
    generateGearingCandidates(terrainType, ridingStyle) {
        const candidates = [];
        
        // Define common configurations
        const configs = [
            // Road configurations
            { name: 'Road Compact', chainrings: [34, 50], cassette: '11-32', wheelSize: 622, tireWidth: 25 },
            { name: 'Road Standard', chainrings: [39, 53], cassette: '11-28', wheelSize: 622, tireWidth: 25 },
            { name: 'Road Semi-Compact', chainrings: [36, 52], cassette: '11-30', wheelSize: 622, tireWidth: 25 },
            
            // Gravel configurations
            { name: 'Gravel 2x', chainrings: [46, 30], cassette: '11-42', wheelSize: 622, tireWidth: 40 },
            { name: 'Gravel 1x Wide', chainrings: [40], cassette: '10-50', wheelSize: 622, tireWidth: 40 },
            { name: 'Gravel 1x Moderate', chainrings: [42], cassette: '11-36', wheelSize: 622, tireWidth: 38 },
            
            // MTB configurations
            { name: 'XC Racing', chainrings: [32], cassette: '10-51', wheelSize: 622, tireWidth: 55 },
            { name: 'Trail', chainrings: [30], cassette: '10-51', wheelSize: 622, tireWidth: 58 },
            { name: 'Enduro', chainrings: [32], cassette: '10-52', wheelSize: 622, tireWidth: 60 }
        ];
        
        configs.forEach(config => {
            const cassetteSizes = this.parseCassetteString(config.cassette);
            const lowestGear = this.calculateGearInches(
                Math.min(...config.chainrings),
                Math.max(...cassetteSizes),
                config.wheelSize,
                config.tireWidth
            );
            const highestGear = this.calculateGearInches(
                Math.max(...config.chainrings),
                Math.min(...cassetteSizes),
                config.wheelSize,
                config.tireWidth
            );
            const range = highestGear / lowestGear;
            
            candidates.push({
                name: config.name,
                chainrings: config.chainrings,
                cassette: cassetteSizes,
                wheelSize: config.wheelSize,
                tireWidth: config.tireWidth,
                lowestGear: lowestGear,
                highestGear: highestGear,
                range: range
            });
        });
        
        return candidates;
    }

    /**
     * Parse cassette string (e.g., "11-32" to array of cog sizes)
     */
    parseCassetteString(cassetteStr) {
        const [min, max] = cassetteStr.split('-').map(Number);
        // Generate reasonable progression
        const cogs = [];
        let current = min;
        while (current <= max) {
            cogs.push(current);
            current += (current < 20) ? 1 : (current < 30) ? 2 : 3;
        }
        if (cogs[cogs.length - 1] !== max) cogs.push(max);
        return cogs;
    }

    /**
     * Calculate gear inches
     */
    calculateGearInches(chainring, cog, wheelSize, tireWidth) {
        const wheelDiameter = (wheelSize + 2 * tireWidth) * 0.0393701; // mm to inches
        return (chainring / cog) * wheelDiameter;
    }

    /**
     * Record user feedback for training
     */
    recordUserFeedback(gearingSetup, satisfactionRating, comments = '') {
        const feedbackEntry = {
            timestamp: Date.now(),
            features: gearingSetup,
            rating: satisfactionRating,
            comments: comments
        };
        
        this.trainingData.push(feedbackEntry);
        this.saveTrainingData();
        
        console.log(`📝 Recorded feedback: ${satisfactionRating}/5 stars`);
        
        // Retrain if we have enough new data
        if (this.trainingData.length % 10 === 0) {
            this.trainModel();
        }
    }

    /**
     * Train the model with collected data
     */
    async trainModel() {
        if (this.trainingData.length < 20) {
            console.log('⚠️ Not enough training data (need at least 20 samples)');
            return;
        }

        console.log(`🎓 Training model with ${this.trainingData.length} samples...`);

        try {
            // Prepare training data
            const xs = [];
            const ys = [];
            
            this.trainingData.forEach(entry => {
                const features = this.extractFeatures(entry.features);
                xs.push(features);
                
                // One-hot encode ratings (1-5 stars)
                const label = tf.oneHot(entry.rating - 1, this.modelConfig.outputClasses);
                ys.push(label);
            });
            
            const xsTensor = tf.concat(xs);
            const ysTensor = tf.concat(ys);
            
            // Train the model
            const history = await this.model.fit(xsTensor, ysTensor, {
                epochs: 50,
                batchSize: 8,
                validationSplit: 0.2,
                callbacks: {
                    onEpochEnd: (epoch, logs) => {
                        if (epoch % 10 === 0) {
                            console.log(`Epoch ${epoch}: loss = ${logs.loss.toFixed(4)}, accuracy = ${logs.acc.toFixed(4)}`);
                        }
                    }
                }
            });
            
            // Cleanup
            xs.forEach(t => t.dispose());
            ys.forEach(t => t.dispose());
            xsTensor.dispose();
            ysTensor.dispose();
            
            // Save the trained model
            await this.saveModel();
            
            console.log('✅ Model training complete!');
            
            return history;
        } catch (error) {
            console.error('❌ Training error:', error);
        }
    }

    /**
     * Save model to browser storage
     */
    async saveModel() {
        try {
            await this.model.save('localstorage://bike-gearing-ml-model');
            console.log('💾 Model saved');
        } catch (error) {
            console.error('❌ Error saving model:', error);
        }
    }

    /**
     * Load saved model from browser storage
     */
    async loadSavedModel() {
        try {
            const model = await tf.loadLayersModel('localstorage://bike-gearing-ml-model');
            console.log('📂 Model loaded from storage');
            return model;
        } catch (error) {
            console.log('ℹ️ No saved model found, will create new one');
            return null;
        }
    }

    /**
     * Save training data to localStorage
     */
    saveTrainingData() {
        try {
            localStorage.setItem('bikeGearing_trainingData', JSON.stringify(this.trainingData));
        } catch (error) {
            console.error('❌ Error saving training data:', error);
        }
    }

    /**
     * Load training data from localStorage
     */
    loadTrainingData() {
        try {
            const stored = localStorage.getItem('bikeGearing_trainingData');
            if (stored) {
                this.trainingData = JSON.parse(stored);
                console.log(`📊 Loaded ${this.trainingData.length} training samples`);
            }
        } catch (error) {
            console.error('❌ Error loading training data:', error);
            this.trainingData = [];
        }
    }

    /**
     * Load user preferences
     */
    loadUserPreferences() {
        try {
            const stored = localStorage.getItem('bikeGearing_userPreferences');
            return stored ? JSON.parse(stored) : {
                terrainType: 'mixed',
                ridingStyle: 'recreational',
                fitness: 5
            };
        } catch (error) {
            return { terrainType: 'mixed', ridingStyle: 'recreational', fitness: 5 };
        }
    }

    /**
     * Save user preferences
     */
    saveUserPreferences(preferences) {
        try {
            this.userPreferences = { ...this.userPreferences, ...preferences };
            localStorage.setItem('bikeGearing_userPreferences', JSON.stringify(this.userPreferences));
            console.log('💾 User preferences saved');
        } catch (error) {
            console.error('❌ Error saving preferences:', error);
        }
    }

    /**
     * Load riding history
     */
    loadRidingHistory() {
        try {
            const stored = localStorage.getItem('bikeGearing_ridingHistory');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            return [];
        }
    }

    /**
     * Get model statistics
     */
    getStatistics() {
        return {
            isLoaded: this.isModelLoaded,
            trainingDataCount: this.trainingData.length,
            modelReady: this.isModelLoaded && this.trainingData.length >= 20,
            lastTrained: this.trainingData.length > 0 ? 
                new Date(this.trainingData[this.trainingData.length - 1].timestamp).toLocaleDateString() : 
                'Never',
            userPreferences: this.userPreferences
        };
    }

    /**
     * Reset all data (for testing or starting fresh)
     */
    async resetAllData() {
        this.trainingData = [];
        localStorage.removeItem('bikeGearing_trainingData');
        localStorage.removeItem('bikeGearing_userPreferences');
        localStorage.removeItem('bikeGearing_ridingHistory');
        
        try {
            await tf.io.removeModel('localstorage://bike-gearing-ml-model');
        } catch (error) {
            // Model might not exist
        }
        
        await this.createModel();
        console.log('🔄 All data reset');
    }
}

// Export for use in main script
window.BikeGearingML = BikeGearingML;
