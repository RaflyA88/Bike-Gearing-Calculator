// Bike Gearing Calculator
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

    // Chart instance
    let gearChart = null;

    // Constants
    const CRANK_LENGTH = 170; // mm
    const INCHES_PER_MM = 0.0393701;
    const METERS_PER_KM = 1000;
    const MINUTES_PER_HOUR = 60;
    const PI = Math.PI;

    // Initialize
    init();

    function init() {
        // Add event listeners
        calculateBtn.addEventListener('click', calculateGearing);
        resetBtn.addEventListener('click', resetCalculator);
        targetSpeedInput.addEventListener('input', calculateRequiredCadence);
        
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

    function resetCalculator() {
        chainringsInput.value = '34,50';
        cassetteInput.value = '11,12,14,16,18,21,24,28,32';
        wheelSizeInput.value = '622';
        tireWidthInput.value = '25';
        cadenceInput.value = '90';
        targetSpeedInput.value = '30';
        
        calculateGearing();
    }

    // Export functions for debugging
    window.calculateGearing = calculateGearing;
    window.resetCalculator = resetCalculator;
});