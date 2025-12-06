// Get section
import { t } from './translate.js';

export default function renderGet() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <div class="card padding">
            <!-- UTC Time -->
            <div class="utc-time" id="utc-time" data-translate="loading_utc">
                UTC: Loading...
            </div>
            
            <!-- Auto Quantification -->
            <div class="quantum-action">
                <div class="signals" id="signals-container">
                    <div class="signal"></div>
                    <div class="signal"></div>
                    <div class="signal"></div>
                </div>
                <div style="text-align: center; color: #ccc; font-size: 14px; margin-bottom: 15px;" id="signals-text">
                    ${t('loading')}
                </div>
                
                <button class="quant-btn" id="quant-btn" data-translate="auto_quantification">
                    AUTO QUANTIFICATION
                </button>
            </div>

            <!-- Quantification process -->
            <div class="quantum-process" id="quantum-process" style="display: none;">
                <div class="process-step" id="step-1" data-translate="analyzing_market">Analyzing market conditions...</div>
                <div class="process-step" id="step-2" data-translate="calculating_quantum">Calculating quantum probabilities...</div>
                <div class="process-step" id="step-3" data-translate="executing_trades">Executing quantum trades...</div>
                <div class="process-step" id="step-4" data-translate="quantum_complete">Quantum quantification complete!</div>
                <div class="process-step" id="profit-result" style="display: none; color: #52c41a; font-weight: bold;"></div>
            </div>

            <!-- VIP carousel (NEW VERSION) -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                
                <div class="vip-carousel-container">
                    <!-- VIP Carousel wrapper -->
                    <div class="uni-swiper-wrapper" id="vip-carousel-wrapper">
                        <div class="uni-swiper-slides" id="vip-carousel">
                            <!-- VIP 1 -->
                            <div class="vip-card" data-level="1">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP1</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon1.png?v=${Date.now()}" alt="VIP 1" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">0-299 USDT</div>
                                        <div class="vip-percent">2.2% daily</div>
                                        <div class="vip-signals">3 quantum signals</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 2 -->
                            <div class="vip-card" data-level="2">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP2</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon2.png?v=${Date.now()}" alt="VIP 2" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">300-1000 USDT</div>
                                        <div class="vip-percent">2.8% daily</div>
                                        <div class="vip-signals">3 signals, 2 active refs</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 3 -->
                            <div class="vip-card" data-level="3">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP3</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon3.png?v=${Date.now()}" alt="VIP 3" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">1000-3500 USDT</div>
                                        <div class="vip-percent">3.5% daily</div>
                                        <div class="vip-signals">3 signals, 5 active refs</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 4 -->
                            <div class="vip-card" data-level="4">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP4</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon4.png?v=${Date.now()}" alt="VIP 4" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">3500-6000 USDT</div>
                                        <div class="vip-percent">4.0% daily</div>
                                        <div class="vip-signals">3 signals, 8 active refs</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 5 -->
                            <div class="vip-card" data-level="5">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP5</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon5.png?v=${Date.now()}" alt="VIP 5" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">6000-12000 USDT</div>
                                        <div class="vip-percent">5.0% daily</div>
                                        <div class="vip-signals">3 signals, 15 active refs</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 6 -->
                            <div class="vip-card" data-level="6">
                                <div class="vip-card-inner">
                                    <div class="vip-card-header">
                                        <div class="vip-level-name">VIP6</div>
                                        <div class="vip-status">
                                            <i class="fas fa-lock"></i>
                                            <span data-translate="locked">Locked</span>
                                        </div>
                                    </div>
                                    <div class="vip-icon-wrapper">
                                        <img src="assets/vipicon6.png?v=${Date.now()}" alt="VIP 6" class="vip-icon">
                                    </div>
                                    <div class="vip-details">
                                        <div class="vip-amount-range">12000-20000 USDT</div>
                                        <div class="vip-percent">6.0% daily</div>
                                        <div class="vip-signals">3 signals, 25 active refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="vip-description" id="vip-description">
                    ${t('vip_description_1')}
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    // Initialize VIP carousel
    initVipCarousel();
    
    // Update UTC time
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Load user data
    await loadUserData();
    
    // Quantification button handler
    document.getElementById('quant-btn').addEventListener('click', startQuantification);
}

function initVipCarousel() {
    const carouselWrapper = document.getElementById('vip-carousel-wrapper');
    const carousel = document.getElementById('vip-carousel');
    const cards = document.querySelectorAll('.vip-card');
    const description = document.getElementById('vip-description');
    
    if (!carousel || cards.length === 0 || !description) {
        console.error('Carousel elements not found');
        return;
    }
    
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    // Set initial card positions
    function updateCarouselPositions() {
        cards.forEach((card, index) => {
            card.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            card.style.opacity = index === currentIndex ? '1' : '0.5';
            card.style.pointerEvents = index === currentIndex ? 'auto' : 'none';
        });
    }
    
    // Update carousel based on current index
    function updateCarousel() {
        // Update cards
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        // Update description
        if (vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
        }
        
        // Update positions
        updateCarouselPositions();
    }
    
    // Initialize carousel with user's current VIP level
    function initializeWithUserLevel() {
        const user = window.getCurrentUser();
        if (user && user.vip_level) {
            // Find card with matching level (data-level starts from 1)
            const userLevelIndex = user.vip_level - 1; // Convert to 0-based index
            if (userLevelIndex >= 0 && userLevelIndex < cards.length) {
                currentIndex = userLevelIndex;
                
                // Update unlocked status for cards up to user's level
                cards.forEach((card, index) => {
                    const level = parseInt(card.getAttribute('data-level'));
                    const statusEl = card.querySelector('.vip-status');
                    if (statusEl) {
                        if (level <= user.vip_level) {
                            statusEl.innerHTML = '<i class="fas fa-lock-open"></i> <span data-translate="unlocked_this_level">Unlocked this level</span>';
                        } else {
                            statusEl.innerHTML = '<i class="fas fa-lock"></i> <span data-translate="locked">Locked</span>';
                        }
                    }
                });
            }
        }
        
        updateCarousel();
    }
    
    // Call initialization
    initializeWithUserLevel();
    
    // Touch events for mobile swipe
    carouselWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    carouselWrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    carouselWrapper.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentIndex < cards.length - 1) {
                // Swipe left, go to next
                currentIndex++;
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe right, go to previous
                currentIndex--;
            }
            updateCarousel();
        }
    });
    
    // Mouse drag events for desktop
    carouselWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        carouselWrapper.style.cursor = 'grabbing';
    });
    
    carouselWrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        carouselWrapper.style.cursor = 'grab';
        
        const endX = e.pageX;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentIndex < cards.length - 1) {
                currentIndex++;
            } else if (diffX < 0 && currentIndex > 0) {
                currentIndex--;
            }
            updateCarousel();
        }
    });
    
    // Click navigation for cards (optional)
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
    
    // Keyboard navigation for testing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Update positions on resize
    window.addEventListener('resize', updateCarouselPositions);
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Check and update signals
    if (window.glyApp) {
        await window.glyApp.checkAndUpdateSignals();
        await window.glyApp.updateVipLevel();
    }
    
    // Update signals display
    updateSignalsDisplay(user.signals_available);
    
    // Update VIP status in carousel
    updateVipStatusInCarousel(user.vip_level);
}

function updateSignalsDisplay(signalsAvailable) {
    const signals = document.querySelectorAll('.signal');
    const signalsText = document.getElementById('signals-text');
    
    // Update text
    if (signalsText) {
        signalsText.textContent = `${signalsAvailable} ${t('quantum_signals_available')}`;
    }
    
    // Update visual signal display
    signals.forEach((signal, index) => {
        if (index < signalsAvailable) {
            signal.classList.remove('used');
            signal.style.background = '#4e7771';
        } else {
            signal.classList.add('used');
            signal.style.background = '#666';
        }
    });
}

function updateVipStatusInCarousel(userVipLevel) {
    const cards = document.querySelectorAll('.vip-card');
    cards.forEach(card => {
        const level = parseInt(card.getAttribute('data-level'));
        const statusEl = card.querySelector('.vip-status');
        
        if (statusEl) {
            if (level <= userVipLevel) {
                statusEl.innerHTML = '<i class="fas fa-lock-open"></i> <span data-translate="unlocked_this_level">Unlocked this level</span>';
                card.classList.add('unlocked');
                card.classList.remove('locked');
            } else {
                statusEl.innerHTML = '<i class="fas fa-lock"></i> <span data-translate="locked">Locked</span>';
                card.classList.add('locked');
                card.classList.remove('unlocked');
            }
        }
        
        // Highlight current level
        if (level === userVipLevel) {
            card.style.border = '2px solid #4CAF50';
            card.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.3)';
        } else {
            card.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            card.style.boxShadow = 'none';
        }
    });
}

async function startQuantification() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showCustomAlert(t('please_login'));
        return;
    }
    
    if (user.signals_available <= 0) {
        window.showCustomAlert(t('no_signals'));
        return;
    }
    
    const quantBtn = document.getElementById('quant-btn');
    const process = document.getElementById('quantum-process');
    
    // Disable button
    quantBtn.disabled = true;
    quantBtn.style.opacity = '0.5';
    quantBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('processing_quantification')}`;
    
    // Show process
    process.style.display = 'block';
    
    // Run process animation
    await runQuantificationProcess();
    
    // Perform quantification
    const result = await window.performQuantification();
    
    if (result.success) {
        // Show result
        const profitResult = document.getElementById('profit-result');
        profitResult.textContent = `${t('profit')} +${result.profit.toFixed(2)} USDT`;
        profitResult.style.display = 'block';
        
        // Update signals display
        const updatedUser = window.getCurrentUser();
        updateSignalsDisplay(updatedUser.signals_available);
        
        // Update VIP status in carousel
        updateVipStatusInCarousel(updatedUser.vip_level);
        
        // Hide process after 3 seconds
        setTimeout(() => {
            process.style.display = 'none';
            profitResult.style.display = 'none';
            
            // Reset process steps
            document.querySelectorAll('.process-step').forEach(step => {
                step.classList.remove('active');
            });
            
            // Restore button
            quantBtn.disabled = false;
            quantBtn.style.opacity = '1';
            quantBtn.textContent = t('auto_quantification');
            
            // Show success message
            window.showCustomAlert(t('quantification_successful', null, { profit: result.profit.toFixed(2) }));
        }, 3000);
    } else {
        window.showCustomAlert(result.message);
        
        // Restore button
        quantBtn.disabled = false;
        quantBtn.style.opacity = '1';
        quantBtn.textContent = t('auto_quantification');
        
        // Hide process
        process.style.display = 'none';
    }
}

async function runQuantificationProcess() {
    const steps = [
        { id: 'step-1', duration: 2000 },
        { id: 'step-2', duration: 2500 },
        { id: 'step-3', duration: 3000 },
        { id: 'step-4', duration: 1500 }
    ];
    
    return new Promise((resolve) => {
        let currentStep = 0;
        
        function runStep() {
            if (currentStep > 0) {
                document.getElementById(steps[currentStep-1].id).classList.remove('active');
            }
            
            if (currentStep < steps.length) {
                document.getElementById(steps[currentStep].id).classList.add('active');
                setTimeout(runStep, steps[currentStep].duration);
                currentStep++;
            } else {
                resolve();
            }
        }
        
        runStep();
    });
}

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const utcElement = document.getElementById('utc-time');
    if (utcElement) {
        utcElement.textContent = `UTC: ${utcTime}`;
    }
}

// Global function for updating VIP level display
window.updateVipLevelDisplay = function() {
    const user = window.getCurrentUser();
    if (user) {
        updateVipStatusInCarousel(user.vip_level);
    }
};
