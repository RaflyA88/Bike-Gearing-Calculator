// Bike Gearing Calculator - ML Enhanced Version
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chainringsInput = document.getElementById('chainrings');
    const cassetteInput = document.getElementById('cassette');
    const wheelSizeInput = document.getElementById('wheelSize');
    const tireWidthInput = document.getElementById('tireWidth');
    const cadenceInput = document.getElementById('cadence');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const gearTableBody = document.getElementById('gearTableBody');
    const lowestGearEl = document.getElementById('lowestGear');
    const highestGearEl = document.getElementById('highestGear');
    const gearRangeEl = document.getElementById('gearRange');
    const targetSpeedInput = document.getElementById('targetSpeed');
    const cadenceResultsEl = document.getElementById('cadenceResults');
    const presetButtons = document.querySelectorAll('.preset-btn');
    const infoButtons = document.querySelectorAll('.info-btn');

    // ML-specific elements
    const terrainPreference = document.getElementById('terrainPreference');
    const ridingStylePreference = document.getElementById('ridingStylePreference');
    const fitnessLevel = document.getElementById('fitnessLevel');
    const fitnessValue = document.getElementById('fitnessValue');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const feedbackStars = document.querySelectorAll('#feedbackStars i');
    const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
    const feedbackComments = document.getElementById('feedbackComments');
    const mlStatus = document.getElementById('mlIndicator');

    // Chart instance
    let gearChart = null;

    // ML Engine instance
    let mlEngine = null;
    let currentGearingSetup = null;
    let selectedFeedbackRating = 0;

    // Constants
    const CRANK_LENGTH = 170; // mm
    const INCHES_PER_MM = 0.0393701;
    const METERS_PER_KM = 1000;
    const MINUTES_PER_HOUR = 60;
    const PI = Math.PI;

    // Initialize
    init();

    async function init() {
        // Initialize ML Engine
        mlStatus.textContent = '🔄 Initializing ML Engine...';
        mlEngine = new BikeGearingML();
        const mlReady = await mlEngine.initialize();
        
        if (mlReady) {
            mlStatus.textContent = '✅ AI Ready';
            mlStatus.className = 'ml-indicator ml-ready';
            updateMLStats();
        } else {
            mlStatus.textContent = '⚠️ AI Unavailable (Using Rules)';
            mlStatus.className = 'ml-indicator ml-fallback';
        }

        // Add event listeners
        calculateBtn.addEventListener('click', calculateGearing);
        resetBtn.addEventListener('click', resetCalculator);
        targetSpeedInput.addEventListener('input', calculateRequiredCadence);
        
        // ML-specific listeners
        fitnessLevel.addEventListener('input', function() {
            fitnessValue.textContent = this.value;
        });
        
        saveProfileBtn.addEventListener('click', saveProfileAndGetMLRecommendations);
        submitFeedbackBtn.addEventListener('click', submitFeedback);
        
        // Feedback stars
        feedbackStars.forEach(star => {
            star.addEventListener('click', function() {
                selectedFeedbackRating = parseInt(this.dataset.rating);
                updateStarRating(selectedFeedbackRating);
            });
        });
        
        // Add preset button listeners
        presetButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const chainrings = this.getAttribute('data-chainrings');
                const cassette = this.getAttribute('data-cassette');
                const wheelSize = this.getAttribute('data-wheel');
                const tireWidth = this.getAttribute('data-tire');
                
                chainringsInput.value = chainrings;
                cassetteInput.value = cassette;
                
                if (wheelSize) {
                    wheelSizeInput.value = wheelSize;
                }
                
                if (tireWidth) {
                    tireWidthInput.value = tireWidth;
                }
                
                calculateGearing();
            });
        });

        // Add info button listeners
        infoButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const title = this.getAttribute('title');
                alert(title);
            });
        });

        // Calculate on page load
        calculateGearing();
    }

    function parseNumberList(input) {
        return input.split(',')
            .map(num => num.trim())
            .filter(num => num !== '')
            .map(num => parseFloat(num))
            .filter(num => !isNaN(num) && num > 0);
    }

    function calculateWheelDiameter(wheelSize, tireWidth) {
        // Convert to inches: (wheel diameter + 2 * tire width) * conversion factor
        return (wheelSize + 2 * tireWidth) * INCHES_PER_MM;
    }

    function calculateGearRatio(chainring, cog) {
        return chainring / cog;
    }

    function calculateGearInches(chainring, cog, wheelDiameter) {
        return (chainring / cog) * wheelDiameter;
    }

    function calculateGainRatio(chainring, cog, wheelDiameter) {
        const wheelRadius = wheelDiameter / 2;
        return (chainring / cog) * (wheelRadius / CRANK_LENGTH);
    }

    function calculateSpeed(gearInches, cadence) {
        // Speed in km/h: gear inches * π * cadence * 0.001885
        return gearInches * PI * cadence * 0.001885;
    }

    function calculateGearing() {
        // Parse inputs
        const chainrings = parseNumberList(chainringsInput.value);
        const cassette = parseNumberList(cassetteInput.value);
        const wheelSize = parseFloat(wheelSizeInput.value);
        const tireWidth = parseFloat(tireWidthInput.value);
        const cadence = parseFloat(cadenceInput.value);

        // Validate inputs
        if (chainrings.length === 0 || cassette.length === 0 || 
            isNaN(wheelSize) || isNaN(tireWidth) || isNaN(cadence)) {
            alert('Please enter valid numbers for all fields');
            return;
        }

        // Calculate wheel diameter
        const wheelDiameter = calculateWheelDiameter(wheelSize, tireWidth);

        // Generate all gear combinations
        const gears = [];
        let gearNumber = 1;

        chainrings.forEach(chainring => {
            cassette.forEach(cog => {
                const ratio = calculateGearRatio(chainring, cog);
                const gearInches = calculateGearInches(chainring, cog, wheelDiameter);
                const gainRatio = calculateGainRatio(chainring, cog, wheelDiameter);
                const speed = calculateSpeed(gearInches, cadence);

                gears.push({
                    gearNumber: gearNumber++,
                    chainring,
                    cog,
                    ratio: ratio.toFixed(2),
                    gearInches: gearInches.toFixed(1),
                    gainRatio: gainRatio.toFixed(2),
                    speed: speed.toFixed(1)
                });
            });
        });

        // Sort by gear inches (lowest to highest)
        gears.sort((a, b) => parseFloat(a.gearInches) - parseFloat(b.gearInches));

        // Update gear numbers after sorting
        gears.forEach((gear, index) => {
            gear.gearNumber = index + 1;
        });

        // Update table
        updateGearTable(gears);

        // Update stats
        updateGearStats(gears);

        // Update chart
        updateGearChart(gears);

        // Update recommendations
        updateRecommendations(gears, chainrings, cassette);

        // Calculate required cadence for target speed
        calculateRequiredCadence();
    }

    function updateGearTable(gears) {
        gearTableBody.innerHTML = '';

        gears.forEach(gear => {
            const row = document.createElement('tr');
            
            // Determine color class based on gear inches
            let colorClass = '';
            const gearInches = parseFloat(gear.gearInches);
            if (gearInches < 50) colorClass = 'low-gear';
            else if (gearInches > 100) colorClass = 'high-gear';

            row.innerHTML = `
                <td>${gear.gearNumber}</td>
                <td>${gear.chainring}T</td>
                <td>${gear.cog}T</td>
                <td>${gear.ratio}</td>
                <td>${gear.gainRatio}</td>
                <td>${gear.speed} km/h</td>
            `;

            if (colorClass) {
                row.classList.add(colorClass);
            }

            gearTableBody.appendChild(row);
        });

        // Add CSS for color classes
        const style = document.createElement('style');
        style.textContent = `
            .low-gear { background-color: #e8f5e8 !important; }
            .low-gear:hover { background-color: #d4edd4 !important; }
            .high-gear { background-color: #fff3e0 !important; }
            .high-gear:hover { background-color: #ffe0b2 !important; }
        `;
        document.head.appendChild(style);
    }

    function updateGearStats(gears) {
        if (gears.length === 0) return;

        const gearInches = gears.map(g => parseFloat(g.gearInches));
        const lowest = Math.min(...gearInches);
        const highest = Math.max(...gearInches);
        const range = highest / lowest;

        lowestGearEl.textContent = `${lowest.toFixed(1)}"`;
        highestGearEl.textContent = `${highest.toFixed(1)}"`;
        gearRangeEl.textContent = `${range.toFixed(2)}:1`;
    }

    function updateGearChart(gears) {
        const ctx = document.getElementById('gearChart').getContext('2d');
        
        // Destroy existing chart
        if (gearChart) {
            gearChart.destroy();
        }

        const gearNumbers = gears.map(g => g.gearNumber);
        const gearInches = gears.map(g => parseFloat(g.gearInches));

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(52, 152, 219, 0.8)');
        gradient.addColorStop(1, 'rgba(52, 152, 219, 0.2)');

        gearChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: gearNumbers,
                datasets: [{
                    label: 'Gear Inches',
                    data: gearInches,
                    backgroundColor: gradient,
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const gear = gears[context.dataIndex];
                                return [
                                    `Gear: ${gear.gearNumber}`,
                                    `Chainring: ${gear.chainring}T`,
                                    `Cog: ${gear.cog}T`,
                                    `Gear Inches: ${gear.gearInches}"`,
                                    `Speed @ ${cadenceInput.value}RPM: ${gear.speed} km/h`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Gear Number',
                            font: {
                                family: 'Poppins',
                                size: 14
                            }
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Gear Inches',
                            font: {
                                family: 'Poppins',
                                size: 14
                            }
                        },
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                }
            }
        });
    }

    function calculateRequiredCadence() {
        const targetSpeed = parseFloat(targetSpeedInput.value);
        const chainrings = parseNumberList(chainringsInput.value);
        const cassette = parseNumberList(cassetteInput.value);
        const wheelSize = parseFloat(wheelSizeInput.value);
        const tireWidth = parseFloat(tireWidthInput.value);

        if (isNaN(targetSpeed) || chainrings.length === 0 || cassette.length === 0 || 
            isNaN(wheelSize) || isNaN(tireWidth)) {
            cadenceResultsEl.innerHTML = '<p>Enter valid inputs to calculate required cadence</p>';
            return;
        }

        const wheelDiameter = calculateWheelDiameter(wheelSize, tireWidth);
        let resultsHTML = '';

        chainrings.forEach(chainring => {
            cassette.forEach(cog => {
                const gearInches = calculateGearInches(chainring, cog, wheelDiameter);
                // Required cadence = target speed / (gear inches * π * 0.001885)
                const requiredCadence = targetSpeed / (gearInches * PI * 0.001885);
                
                if (requiredCadence >= 40 && requiredCadence <= 140) {
                    resultsHTML += `
                        <div class="cadence-item">
                            <strong>${chainring}T × ${cog}T:</strong> ${requiredCadence.toFixed(0)} RPM
                            <span class="cadence-note">(${gearInches.toFixed(1)}" gear)</span>
                        </div>
                    `;
                }
            });
        });

        if (resultsHTML === '') {
            resultsHTML = '<p>No suitable gear combinations found for this speed. Try a different speed or gear setup.</p>';
        }

        cadenceResultsEl.innerHTML = resultsHTML;

        // Add CSS for cadence items
        const style = document.createElement('style');
        style.textContent = `
            .cadence-item {
                padding: 8px 12px;
                margin: 5px 0;
                background: white;
                border-radius: 6px;
                border-left: 3px solid #3498db;
            }
            .cadence-note {
                font-size: 0.85rem;
                color: #7f8c8d;
                margin-left: 8px;
            }
        `;
        document.head.appendChild(style);
    }

    function updateRecommendations(gears, chainrings, cassette) {
        if (gears.length === 0) return;

        const gearInches = gears.map(g => parseFloat(g.gearInches));
        const lowest = Math.min(...gearInches);
        const highest = Math.max(...gearInches);
        const range = highest / lowest;

        // Store current setup for ML
        storeCurrentGearingSetup(gears, chainrings, cassette);

        // Terrain Suitability
        updateTerrainRecommendation(lowest, highest, range);

        // Riding Type Recommendations
        updateRidingTypeRecommendation(lowest, highest, range, chainrings.length);

        // Groupset Recommendations
        updateGroupsetRecommendation(chainrings, cassette, gears);

        // Upgrade Suggestions
        updateUpgradeSuggestions(lowest, highest, range, chainrings, cassette);
    }

    function updateTerrainRecommendation(lowest, highest, range) {
        const terrainEl = document.getElementById('terrainRecommendation');
        let html = '<div class="terrain-analysis">';

        // Analyze terrain suitability
        const terrains = [
            {
                name: 'Flat Roads',
                icon: '🏙️',
                suitable: highest >= 100,
                reason: highest >= 100 
                    ? `Excellent high gear (${highest.toFixed(1)}") for maintaining speed on flats` 
                    : `Limited top speed. Highest gear (${highest.toFixed(1)}") may feel spinny at high speeds`,
                rating: highest >= 120 ? 5 : highest >= 100 ? 4 : highest >= 80 ? 3 : 2
            },
            {
                name: 'Rolling Hills',
                icon: '🌊',
                suitable: lowest <= 50 && highest >= 70,
                reason: (lowest <= 50 && highest >= 70)
                    ? `Good range (${lowest.toFixed(1)}" to ${highest.toFixed(1)}") covers varied terrain`
                    : lowest > 50 
                        ? `May struggle on steeper sections. Lowest gear (${lowest.toFixed(1)}") is relatively high`
                        : `Good climbing capability, but may lack top-end speed`,
                rating: (lowest <= 40 && highest >= 90) ? 5 : 
                        (lowest <= 50 && highest >= 70) ? 4 : 
                        (lowest <= 60 && highest >= 60) ? 3 : 2
            },
            {
                name: 'Steep Climbs (8-15%)',
                icon: '⛰️',
                suitable: lowest <= 30,
                reason: lowest <= 30 
                    ? `Excellent bailout gear (${lowest.toFixed(1)}") for steep gradients` 
                    : lowest <= 40 
                        ? `Manageable for fit riders. Lowest gear: ${lowest.toFixed(1)}"`
                        : `Limited climbing ability. Lowest gear (${lowest.toFixed(1)}") is quite high for steep hills`,
                rating: lowest <= 25 ? 5 : lowest <= 30 ? 4 : lowest <= 40 ? 3 : lowest <= 50 ? 2 : 1
            },
            {
                name: 'Mountain Passes (15%+)',
                icon: '🏔️',
                suitable: lowest <= 25,
                reason: lowest <= 25 
                    ? `Very easy lowest gear (${lowest.toFixed(1)}") ideal for loaded touring or very steep climbs` 
                    : `Challenging on extreme gradients. Consider lower gearing if riding mountains frequently`,
                rating: lowest <= 20 ? 5 : lowest <= 25 ? 4 : lowest <= 30 ? 3 : lowest <= 35 ? 2 : 1
            },
            {
                name: 'High-Speed Descents',
                icon: '⬇️',
                suitable: highest >= 110,
                reason: highest >= 110 
                    ? `Tall gearing (${highest.toFixed(1)}") allows pedaling at high speeds` 
                    : `Will be coasting/spinning out on fast descents. Top gear: ${highest.toFixed(1)}"`,
                rating: highest >= 130 ? 5 : highest >= 110 ? 4 : highest >= 90 ? 3 : 2
            }
        ];

        terrains.forEach(terrain => {
            const stars = '⭐'.repeat(terrain.rating) + '☆'.repeat(5 - terrain.rating);
            const suitabilityClass = terrain.rating >= 4 ? 'excellent' : terrain.rating >= 3 ? 'good' : 'limited';
            
            html += `
                <div class="terrain-item ${suitabilityClass}">
                    <div class="terrain-header">
                        <span class="terrain-icon">${terrain.icon}</span>
                        <strong>${terrain.name}</strong>
                        <span class="terrain-rating">${stars}</span>
                    </div>
                    <p class="terrain-reason">${terrain.reason}</p>
                </div>
            `;
        });

        html += '</div>';
        terrainEl.innerHTML = html;
    }

    function updateRidingTypeRecommendation(lowest, highest, range, chainringCount) {
        const ridingTypeEl = document.getElementById('ridingTypeRecommendation');
        let html = '<div class="riding-types">';

        const ridingTypes = [
            {
                name: 'Road Racing',
                icon: '🚴‍♂️',
                requirements: { minHigh: 110, maxLow: 35, minRange: 3.0 },
                match: highest >= 110 && lowest <= 35 && range >= 3.0,
                description: 'High-speed flats and varied climbing'
            },
            {
                name: 'Criterium/Track',
                icon: '🏁',
                requirements: { minHigh: 100, maxLow: 50, maxRange: 3.5 },
                match: highest >= 100 && lowest >= 30 && range <= 3.5,
                description: 'High-speed, relatively flat courses'
            },
            {
                name: 'Gran Fondo/Sportive',
                icon: '🚵',
                requirements: { minHigh: 90, maxLow: 30, minRange: 3.0 },
                match: highest >= 90 && lowest <= 30 && range >= 3.0,
                description: 'Long distance with varied terrain'
            },
            {
                name: 'Hill Climbing',
                icon: '🧗',
                requirements: { maxLow: 25, minHigh: 70 },
                match: lowest <= 25 && highest >= 70,
                description: 'Steep gradients, sustained climbs'
            },
            {
                name: 'Touring/Bikepacking',
                icon: '🎒',
                requirements: { maxLow: 25, minRange: 3.5 },
                match: lowest <= 25 && range >= 3.5,
                description: 'Loaded riding, long distances'
            },
            {
                name: 'Gravel/Adventure',
                icon: '🌲',
                requirements: { maxLow: 30, minHigh: 90, minRange: 3.5 },
                match: lowest <= 30 && highest >= 90 && range >= 3.5,
                description: 'Mixed terrain, varied surfaces'
            },
            {
                name: 'Commuting',
                icon: '💼',
                requirements: { maxLow: 40, minHigh: 80 },
                match: lowest <= 40 && highest >= 80,
                description: 'Urban riding, moderate hills'
            },
            {
                name: 'Time Trial',
                icon: '⏱️',
                requirements: { minHigh: 110, maxLow: 50 },
                match: highest >= 110 && lowest >= 40,
                description: 'Sustained high speed, flat to rolling'
            },
            {
                name: 'Mountain Biking',
                icon: '⛰️',
                requirements: { maxLow: 22, minRange: 4.5 },
                match: lowest <= 22 && range >= 4.5,
                description: 'Technical terrain, steep climbs'
            },
            {
                name: 'Fixed Gear/Track',
                icon: '🔧',
                requirements: { maxRange: 1.5, fixedGear: true },
                match: chainringCount === 1 && range < 1.5,
                description: 'Single gear ratio, no coasting'
            }
        ];

        const matchedTypes = ridingTypes.filter(type => type.match);
        const partialMatches = ridingTypes.filter(type => !type.match);

        if (matchedTypes.length > 0) {
            html += '<div class="match-category"><h4>✅ Excellent For:</h4>';
            matchedTypes.forEach(type => {
                html += `
                    <div class="riding-type-item excellent">
                        <span class="riding-icon">${type.icon}</span>
                        <div class="riding-info">
                            <strong>${type.name}</strong>
                            <p>${type.description}</p>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }

        // Show top 3 partial matches
        html += '<div class="match-category"><h4>⚠️ Possible With Compromises:</h4>';
        partialMatches.slice(0, 3).forEach(type => {
            html += `
                <div class="riding-type-item partial">
                    <span class="riding-icon">${type.icon}</span>
                    <div class="riding-info">
                        <strong>${type.name}</strong>
                        <p>${type.description}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        html += '</div>';
        ridingTypeEl.innerHTML = html;
    }

    function updateGroupsetRecommendation(chainrings, cassette, gears) {
        const groupsetEl = document.getElementById('groupsetRecommendation');
        let html = '<div class="groupsets">';

        const chainringSetup = chainrings.length === 1 ? '1x' : chainrings.length === 2 ? '2x' : '3x';
        const cassetteSize = cassette.length;
        const smallestCog = Math.min(...cassette);
        const largestCog = Math.max(...cassette);
        const cassetteRange = `${smallestCog}-${largestCog}`;

        // Define groupsets with compatibility
        const groupsets = [
            // Shimano Road
            {
                brand: 'Shimano',
                name: 'Dura-Ace Di2 (R9200)',
                level: 'Professional',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$$',
                features: ['Electronic shifting', 'Wireless', 'Semi-wireless options']
            },
            {
                brand: 'Shimano',
                name: 'Ultegra Di2 (R8100)',
                level: 'Performance',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$',
                features: ['Electronic shifting', 'Wireless option', 'Great value']
            },
            {
                brand: 'Shimano',
                name: 'Ultegra Mechanical (R8100)',
                level: 'Performance',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$',
                features: ['Mechanical shifting', 'Reliable', 'Lower maintenance']
            },
            {
                brand: 'Shimano',
                name: '105 (R7100)',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$',
                features: ['Mechanical shifting', 'Excellent value', 'Proven performance']
            },
            {
                brand: 'Shimano',
                name: '105 (R7000)',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 11 && largestCog <= 34,
                speeds: '11-speed',
                type: 'Road',
                price: '$',
                features: ['Mechanical shifting', 'Widely available', 'Great for upgrades']
            },
            {
                brand: 'Shimano',
                name: 'Tiagra (4700)',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 10 && largestCog <= 34,
                speeds: '10-speed',
                type: 'Road',
                price: '$',
                features: ['Mechanical shifting', 'Budget-friendly', 'Reliable']
            },

            // Shimano Gravel/MTB
            {
                brand: 'Shimano',
                name: 'GRX Di2 (RX820)',
                level: 'Performance',
                compatible: (chainringSetup === '2x' || chainringSetup === '1x') && cassetteSize >= 11 && largestCog <= 51,
                speeds: '12-speed',
                type: 'Gravel',
                price: '$$$',
                features: ['Electronic shifting', 'Gravel-optimized', 'Wide range']
            },
            {
                brand: 'Shimano',
                name: 'GRX (RX810/600)',
                level: 'Sport/Performance',
                compatible: (chainringSetup === '2x' || chainringSetup === '1x') && cassetteSize >= 11 && largestCog <= 42,
                speeds: '11-speed',
                type: 'Gravel',
                price: '$$',
                features: ['Mechanical shifting', 'Gravel geometry', 'Clutch derailleur']
            },
            {
                brand: 'Shimano',
                name: 'Deore XT (M8100)',
                level: 'Performance',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 51,
                speeds: '12-speed',
                type: 'MTB',
                price: '$$$',
                features: ['Wide range', 'MTB specific', 'Durable']
            },
            {
                brand: 'Shimano',
                name: 'Deore (M6100)',
                level: 'Sport',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 51,
                speeds: '12-speed',
                type: 'MTB',
                price: '$$',
                features: ['Wide range', 'Great value', 'Reliable']
            },

            // SRAM Road
            {
                brand: 'SRAM',
                name: 'Red eTap AXS',
                level: 'Professional',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 36,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$$',
                features: ['Wireless electronic', 'Flat-top chain', 'Lightweight']
            },
            {
                brand: 'SRAM',
                name: 'Force eTap AXS',
                level: 'Performance',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 36,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$',
                features: ['Wireless electronic', 'Great value', 'Red technology']
            },
            {
                brand: 'SRAM',
                name: 'Rival eTap AXS',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 36,
                speeds: '12-speed',
                type: 'Road',
                price: '$$',
                features: ['Wireless electronic', 'Affordable electronic', 'Wide range option']
            },
            {
                brand: 'SRAM',
                name: 'Rival (22)',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 11 && largestCog <= 32,
                speeds: '11-speed',
                type: 'Road',
                price: '$',
                features: ['Mechanical shifting', 'DoubleTap shifting', 'Budget option']
            },

            // SRAM Gravel/MTB
            {
                brand: 'SRAM',
                name: 'Red XPLR eTap AXS',
                level: 'Professional',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 44,
                speeds: '12-speed',
                type: 'Gravel',
                price: '$$$$',
                features: ['Wireless electronic', 'Gravel-optimized', 'Wide range']
            },
            {
                brand: 'SRAM',
                name: 'Force XPLR eTap AXS',
                level: 'Performance',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 44,
                speeds: '12-speed',
                type: 'Gravel',
                price: '$$$',
                features: ['Wireless electronic', 'Affordable gravel 1x', 'Wide range']
            },
            {
                brand: 'SRAM',
                name: 'Apex (1x)',
                level: 'Sport',
                compatible: chainringSetup === '1x' && cassetteSize >= 11 && largestCog <= 42,
                speeds: '11-speed',
                type: 'Gravel',
                price: '$',
                features: ['Mechanical shifting', 'Wide range', 'Budget 1x option']
            },
            {
                brand: 'SRAM',
                name: 'GX Eagle',
                level: 'Sport',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 52,
                speeds: '12-speed',
                type: 'MTB',
                price: '$$',
                features: ['Wide range', 'MTB specific', 'Great value']
            },
            {
                brand: 'SRAM',
                name: 'NX Eagle',
                level: 'Sport',
                compatible: chainringSetup === '1x' && cassetteSize === 12 && largestCog <= 52,
                speeds: '12-speed',
                type: 'MTB',
                price: '$',
                features: ['Wide range', 'Entry-level Eagle', 'Budget-friendly']
            },

            // Campagnolo
            {
                brand: 'Campagnolo',
                name: 'Super Record EPS',
                level: 'Professional',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$$',
                features: ['Electronic shifting', 'Italian craftsmanship', 'Premium']
            },
            {
                brand: 'Campagnolo',
                name: 'Chorus',
                level: 'Performance',
                compatible: chainringSetup === '2x' && cassetteSize === 12 && largestCog <= 34,
                speeds: '12-speed',
                type: 'Road',
                price: '$$$',
                features: ['Mechanical shifting', 'Proven reliability', 'Great performance']
            },
            {
                brand: 'Campagnolo',
                name: 'Centaur',
                level: 'Sport',
                compatible: chainringSetup === '2x' && cassetteSize === 11 && largestCog <= 32,
                speeds: '11-speed',
                type: 'Road',
                price: '$$',
                features: ['Mechanical shifting', 'Entry Campagnolo', 'Quality components']
            },

            // microSHIFT (Budget Options)
            {
                brand: 'microSHIFT',
                name: 'Advent X',
                level: 'Budget',
                compatible: chainringSetup === '1x' && cassetteSize === 10 && largestCog <= 48,
                speeds: '10-speed',
                type: 'MTB/Gravel',
                price: '$',
                features: ['Mechanical shifting', 'Very affordable', 'Wide range']
            },
            {
                brand: 'microSHIFT',
                name: 'Sword',
                level: 'Budget',
                compatible: chainringSetup === '2x' && cassetteSize === 10 && largestCog <= 34,
                speeds: '10-speed',
                type: 'Road',
                price: '$',
                features: ['Mechanical shifting', 'Budget-friendly', 'Shimano compatible']
            }
        ];

        // Filter compatible and partially compatible groupsets
        const fullyCompatible = groupsets.filter(g => g.compatible);
        const partiallyCompatible = groupsets.filter(g => !g.compatible && 
            ((chainringSetup === '2x' && g.type === 'Road') || 
             (chainringSetup === '1x' && (g.type === 'Gravel' || g.type === 'MTB'))));

        if (fullyCompatible.length > 0) {
            html += '<div class="groupset-category"><h4>✅ Fully Compatible Groupsets:</h4>';
            fullyCompatible.slice(0, 6).forEach(gs => {
                html += `
                    <div class="groupset-item compatible">
                        <div class="groupset-header">
                            <strong>${gs.brand} ${gs.name}</strong>
                            <span class="groupset-badge ${gs.level.toLowerCase()}">${gs.level}</span>
                        </div>
                        <div class="groupset-details">
                            <span class="groupset-specs">${gs.speeds} • ${gs.type} • ${gs.price}</span>
                        </div>
                        <ul class="groupset-features">
                            ${gs.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
            html += '</div>';
        }

        if (partiallyCompatible.length > 0 && fullyCompatible.length < 3) {
            html += '<div class="groupset-category"><h4>⚠️ May Require Adjustments:</h4>';
            partiallyCompatible.slice(0, 3).forEach(gs => {
                html += `
                    <div class="groupset-item partial">
                        <div class="groupset-header">
                            <strong>${gs.brand} ${gs.name}</strong>
                            <span class="groupset-badge ${gs.level.toLowerCase()}">${gs.level}</span>
                        </div>
                        <div class="groupset-details">
                            <span class="groupset-specs">${gs.speeds} • ${gs.type} • ${gs.price}</span>
                        </div>
                        <p class="compatibility-note">May need different cassette or chainring configuration</p>
                    </div>
                `;
            });
            html += '</div>';
        }

        if (fullyCompatible.length === 0 && partiallyCompatible.length === 0) {
            html += `
                <div class="no-groupsets">
                    <p>⚠️ <strong>Unusual Configuration Detected</strong></p>
                    <p>Your gearing setup (${chainringSetup}, ${cassetteRange}) doesn't match standard groupset offerings.</p>
                    <p>Consider:</p>
                    <ul>
                        <li>Adjusting to common cassette sizes (11-28, 11-32, 11-34 for road)</li>
                        <li>Standard chainring combinations (50/34, 52/36 for road; 40/30 for gravel)</li>
                        <li>Consulting with a bike shop for custom solutions</li>
                    </ul>
                </div>
            `;
        }

        html += '</div>';
        groupsetEl.innerHTML = html;
    }

    function updateUpgradeSuggestions(lowest, highest, range, chainrings, cassette) {
        const upgradeEl = document.getElementById('upgradeSuggestions');
        let html = '<div class="upgrade-suggestions">';

        const suggestions = [];

        // Check for climbing improvements
        if (lowest > 35) {
            suggestions.push({
                icon: '⛰️',
                title: 'Improve Climbing Ability',
                priority: 'High',
                suggestion: `Your lowest gear (${lowest.toFixed(1)}") is relatively high. Consider:`,
                options: [
                    `Switch to a larger cassette (current: ${Math.max(...cassette)}t, try: ${Math.max(...cassette) + 4}t or ${Math.max(...cassette) + 6}t)`,
                    chainrings.length === 2 ? `Use a smaller inner chainring (current: ${Math.min(...chainrings)}t, try: ${Math.min(...chainrings) - 2}t or ${Math.min(...chainrings) - 4}t)` : null,
                    `Consider a compact or sub-compact crankset (50/34 or 48/32)`,
                    `Add a granny gear if running a double (convert to triple)`
                ].filter(Boolean)
            });
        }

        // Check for speed improvements
        if (highest < 100) {
            suggestions.push({
                icon: '⚡',
                title: 'Increase Top Speed Capability',
                priority: 'Medium',
                suggestion: `Your highest gear (${highest.toFixed(1)}") may limit top speed. Consider:`,
                options: [
                    `Install a smaller minimum cog (current: ${Math.min(...cassette)}t, try: ${Math.min(...cassette) - 1}t)`,
                    chainrings.length >= 2 ? `Use a larger outer chainring (current: ${Math.max(...chainrings)}t, try: ${Math.max(...chainrings) + 2}t or ${Math.max(...chainrings) + 3}t)` : `Use a larger chainring (current: ${chainrings[0]}t, try: ${chainrings[0] + 2}t)`,
                    `Standard cranksets (53/39) provide higher top speeds than compact (50/34)`
                ]
            });
        }

        // Check for range optimization
        if (range < 2.5) {
            suggestions.push({
                icon: '📏',
                title: 'Expand Gear Range',
                priority: 'Medium',
                suggestion: `Your gear range (${range.toFixed(2)}:1) is narrow. For versatility:`,
                options: [
                    `Choose a wider range cassette (e.g., 11-32 instead of 11-23)`,
                    chainrings.length === 1 ? `Consider switching to a 2x drivetrain for more range` : null,
                    `Modern wide-range cassettes (11-34, 11-36) provide great versatility`,
                    `1x drivetrains with 10-50t cassettes offer huge range for gravel/MTB`
                ].filter(Boolean)
            });
        } else if (range > 5) {
            suggestions.push({
                icon: '🎯',
                title: 'Optimize Gear Steps',
                priority: 'Low',
                suggestion: `Your gear range (${range.toFixed(2)}:1) is very wide. This may cause:`,
                options: [
                    `Large jumps between gears - harder to find perfect cadence`,
                    `Consider whether you use both extreme gears regularly`,
                    `A narrower range cassette might provide better progression`,
                    `Cross-chaining may be required, reducing efficiency`
                ]
            });
        }

        // Check for single vs multi chainring
        if (chainrings.length === 1 && range < 4) {
            suggestions.push({
                icon: '🔄',
                title: 'Consider 2x Drivetrain',
                priority: 'Low',
                suggestion: `Single chainring with limited range. Benefits of 2x:`,
                options: [
                    `Wider overall gear range without huge cassette`,
                    `Smaller steps between gears for better cadence control`,
                    `Less chain angle (no extreme cross-chaining)`,
                    `Better for varied terrain (road, mixed climbing/descending)`
                ]
            });
        }

        if (chainrings.length >= 2 && lowest <= 25 && highest >= 110) {
            suggestions.push({
                icon: '✅',
                title: 'Well-Optimized Setup',
                priority: 'Info',
                suggestion: `Your gearing is well-balanced with good range (${range.toFixed(2)}:1)`,
                options: [
                    `Excellent climbing capability (${lowest.toFixed(1)}") and good top end (${highest.toFixed(1)}")`,
                    `Suitable for varied terrain and riding styles`,
                    `Consider upgrading components for performance (weight, shifting speed)`,
                    `Focus on wheel/tire upgrades for next performance gains`
                ]
            });
        }

        // Efficiency suggestions
        if (cassette.length >= 11) {
            suggestions.push({
                icon: '⚙️',
                title: 'Drivetrain Efficiency Tips',
                priority: 'Info',
                suggestion: `With ${cassette.length} cogs, optimize your shifting:`,
                options: [
                    `Avoid extreme cross-chaining (big-big, small-small combinations)`,
                    `Use the middle cogs for best efficiency and chain life`,
                    `Regular chain cleaning and lubrication maintains performance`,
                    `Consider a 1x drivetrain for simplicity (fewer chains to maintain)`
                ]
            });
        }

        // Render suggestions
        if (suggestions.length === 0) {
            html += '<p>No specific upgrade suggestions. Your gearing appears suitable for general use.</p>';
        } else {
            suggestions.forEach(sug => {
                const priorityClass = sug.priority.toLowerCase();
                html += `
                    <div class="suggestion-item priority-${priorityClass}">
                        <div class="suggestion-header">
                            <span class="suggestion-icon">${sug.icon}</span>
                            <strong>${sug.title}</strong>
                            <span class="priority-badge ${priorityClass}">${sug.priority}</span>
                        </div>
                        <p class="suggestion-text">${sug.suggestion}</p>
                        <ul class="suggestion-options">
                            ${sug.options.map(opt => `<li>${opt}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
        }

        html += '</div>';
        upgradeEl.innerHTML = html;
    }

    function resetCalculator() {
        chainringsInput.value = '34,50';
        cassetteInput.value = '11,12,14,16,18,21,24,28,32';
        wheelSizeInput.value = '622';
        tireWidthInput.value = '25';
        cadenceInput.value = '90';
        targetSpeedInput.value = '30';
        
        calculateGearing();
    }

    // ============================================
    // ML-SPECIFIC FUNCTIONS
    // ============================================

    /**
     * Store current gearing setup for ML
     */
    function storeCurrentGearingSetup(gears, chainrings, cassette) {
        const gearInches = gears.map(g => parseFloat(g.gearInches));
        const lowest = Math.min(...gearInches);
        const highest = Math.max(...gearInches);
        const range = highest / lowest;

        currentGearingSetup = {
            chainrings: chainrings,
            cassette: cassette,
            lowestGear: lowest,
            highestGear: highest,
            range: range,
            wheelSize: parseFloat(wheelSizeInput.value),
            tireWidth: parseFloat(tireWidthInput.value)
        };
    }

    /**
     * Save user profile and get ML recommendations
     */
    async function saveProfileAndGetMLRecommendations() {
        if (!mlEngine) {
            alert('ML Engine not available');
            return;
        }

        const userProfile = {
            terrainType: terrainPreference.value,
            ridingStyle: ridingStylePreference.value,
            fitness: parseInt(fitnessLevel.value)
        };

        // Save preferences
        mlEngine.saveUserPreferences(userProfile);
        
        // Show loading
        document.getElementById('mlRecommendationsSection').style.display = 'block';
        document.getElementById('mlCurrentAnalysis').innerHTML = '<p class="loading">🔄 Analyzing with AI...</p>';
        document.getElementById('mlOptimalSetups').innerHTML = '<p class="loading">🔄 Finding optimal configurations...</p>';

        // Get current setup analysis if available
        if (currentGearingSetup) {
            await analyzeCurrentSetupWithML(userProfile);
        }

        // Get optimal setup recommendations
        await getOptimalSetupsWithML(userProfile);
        
        // Update stats
        updateMLStats();

        // Scroll to ML recommendations
        document.getElementById('mlRecommendationsSection').scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Analyze current setup with ML
     */
    async function analyzeCurrentSetupWithML(userProfile) {
        const setupWithProfile = {
            ...currentGearingSetup,
            ...userProfile
        };

        const prediction = await mlEngine.predictSatisfaction(setupWithProfile);
        
        let html = '<div class="ml-prediction-result">';
        html += `<div class="ml-rating-display">`;
        html += `<div class="ml-stars">${'⭐'.repeat(prediction.rating)}${'☆'.repeat(5 - prediction.rating)}</div>`;
        html += `<div class="ml-confidence">Confidence: ${(prediction.confidence * 100).toFixed(0)}%</div>`;
        html += `</div>`;
        html += `<p class="ml-reasoning">${prediction.reasoning}</p>`;
        
        if (prediction.isRuleBased) {
            html += `<p class="ml-note"><i class="fas fa-info-circle"></i> Using rule-based analysis. Provide feedback to train the AI model!</p>`;
        }
        
        html += `<div class="current-setup-details">`;
        html += `<h4>Current Setup:</h4>`;
        html += `<ul>`;
        html += `<li>Chainrings: ${currentGearingSetup.chainrings.join(', ')}</li>`;
        html += `<li>Cassette: ${currentGearingSetup.cassette.length} cogs</li>`;
        html += `<li>Lowest gear: ${currentGearingSetup.lowestGear.toFixed(1)}"</li>`;
        html += `<li>Highest gear: ${currentGearingSetup.highestGear.toFixed(1)}"</li>`;
        html += `<li>Range: ${currentGearingSetup.range.toFixed(2)}:1</li>`;
        html += `</ul>`;
        html += `</div>`;
        html += '</div>';

        document.getElementById('mlCurrentAnalysis').innerHTML = html;
    }

    /**
     * Get optimal setups with ML
     */
    async function getOptimalSetupsWithML(userProfile) {
        userProfile.currentGearing = currentGearingSetup;
        
        const recommendations = await mlEngine.predictOptimalGearing(userProfile);
        
        let html = '<div class="ml-optimal-list">';
        
        if (recommendations.length === 0) {
            html += '<p>No recommendations available. Try different profile settings.</p>';
        } else {
            recommendations.forEach((rec, index) => {
                const stars = '⭐'.repeat(rec.mlRating) + '☆'.repeat(5 - rec.mlRating);
                html += `
                    <div class="ml-optimal-item">
                        <div class="ml-optimal-header">
                            <strong>#${index + 1}: ${rec.name}</strong>
                            <span class="ml-rating">${stars}</span>
                        </div>
                        <div class="ml-optimal-details">
                            <div class="detail-row">
                                <span>Chainrings:</span>
                                <strong>${rec.chainrings.join(' / ')}</strong>
                            </div>
                            <div class="detail-row">
                                <span>Cassette:</span>
                                <strong>${Math.min(...rec.cassette)}-${Math.max(...rec.cassette)}</strong>
                            </div>
                            <div class="detail-row">
                                <span>Gear Range:</span>
                                <strong>${rec.lowestGear.toFixed(1)}" - ${rec.highestGear.toFixed(1)}"</strong>
                            </div>
                            <div class="detail-row">
                                <span>Confidence:</span>
                                <strong>${(rec.mlConfidence * 100).toFixed(0)}%</strong>
                            </div>
                        </div>
                        <p class="ml-optimal-reason">${rec.reasoning}</p>
                        <button class="btn-apply-setup" data-index="${index}">
                            <i class="fas fa-check"></i> Apply This Setup
                        </button>
                    </div>
                `;
            });
        }
        
        html += '</div>';
        document.getElementById('mlOptimalSetups').innerHTML = html;

        // Add event listeners to apply buttons
        document.querySelectorAll('.btn-apply-setup').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                applyOptimalSetup(recommendations[index]);
            });
        });
    }

    /**
     * Apply an optimal setup
     */
    function applyOptimalSetup(setup) {
        chainringsInput.value = setup.chainrings.join(',');
        cassetteInput.value = setup.cassette.join(',');
        wheelSizeInput.value = setup.wheelSize;
        tireWidthInput.value = setup.tireWidth;
        
        calculateGearing();
        
        // Scroll to results
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Submit user feedback
     */
    async function submitFeedback() {
        if (selectedFeedbackRating === 0) {
            alert('Please select a star rating first!');
            return;
        }

        if (!currentGearingSetup) {
            alert('Please calculate gearing first before submitting feedback!');
            return;
        }

        const userProfile = {
            terrainType: terrainPreference.value,
            ridingStyle: ridingStylePreference.value,
            fitness: parseInt(fitnessLevel.value)
        };

        const setupWithProfile = {
            ...currentGearingSetup,
            ...userProfile
        };

        const comments = feedbackComments.value;

        // Record feedback
        mlEngine.recordUserFeedback(setupWithProfile, selectedFeedbackRating, comments);

        // Show success message
        const feedbackForm = document.querySelector('.ml-feedback-form');
        const successMsg = document.createElement('div');
        successMsg.className = 'feedback-success';
        successMsg.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Thank you!</strong> Your feedback helps improve the AI model.
        `;
        feedbackForm.appendChild(successMsg);

        // Reset form
        selectedFeedbackRating = 0;
        updateStarRating(0);
        feedbackComments.value = '';

        // Update stats
        updateMLStats();

        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);

        // Check if we should retrain
        const stats = mlEngine.getStatistics();
        if (stats.trainingDataCount % 10 === 0 && stats.trainingDataCount >= 20) {
            mlStatus.textContent = '🎓 Training AI model...';
            await mlEngine.trainModel();
            mlStatus.textContent = '✅ AI Model Updated!';
            setTimeout(() => {
                mlStatus.textContent = '✅ AI Ready';
            }, 3000);
        }
    }

    /**
     * Update star rating display
     */
    function updateStarRating(rating) {
        feedbackStars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.className = 'fas fa-star';
            } else {
                star.className = 'far fa-star';
            }
        });
    }

    /**
     * Update ML statistics display
     */
    function updateMLStats() {
        if (!mlEngine) return;

        const stats = mlEngine.getStatistics();
        
        document.getElementById('trainingDataCount').textContent = stats.trainingDataCount;
        
        if (stats.modelReady) {
            document.getElementById('modelAccuracy').textContent = 'Trained';
        } else if (stats.trainingDataCount > 0) {
            document.getElementById('modelAccuracy').textContent = 'Learning';
        } else {
            document.getElementById('modelAccuracy').textContent = 'New';
        }
    }

    /**
     * Store current gearing setup for ML
     */
    function storeCurrentGearingSetup(gears, chainrings, cassette) {
        const gearInches = gears.map(g => parseFloat(g.gearInches));
        const lowest = Math.min(...gearInches);
        const highest = Math.max(...gearInches);
        const range = highest / lowest;

        currentGearingSetup = {
            chainrings: chainrings,
            cassette: cassette,
            lowestGear: lowest,
            highestGear: highest,
            range: range,
            wheelSize: parseFloat(wheelSizeInput.value),
            tireWidth: parseFloat(tireWidthInput.value)
        };
    }

    // Export functions for debugging
    window.calculateGearing = calculateGearing;
    window.resetCalculator = resetCalculator;
    window.mlEngine = mlEngine;
    window.saveProfileAndGetMLRecommendations = saveProfileAndGetMLRecommendations;
});
