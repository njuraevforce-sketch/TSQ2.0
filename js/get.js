// Get section - UPDATED WITH NEW VIP CAROUSEL
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

            <!-- VIP CAROUSEL - NEW VERSION LIKE IN EXAMPLE -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                
                <div class="vip-swiper-container" id="vip-swiper-container">
                    <div class="vip-swiper-wrapper" id="vip-swiper-wrapper">
                        <!-- VIP 1 -->
                        <div class="vip-swiper-slide" style="transform: translateY(0%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(0%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip1.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">2.2%</div>
                                        <div class="vip-level-badge">VIP 1</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP1</div>
                                            <div class="vip-slide-status" data-level="1">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock-open"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon1.png?v=${Date.now()}" alt="VIP 1" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">0-299 USDT</div>
                                            <div class="vip-details">2.2% daily, 3 signals</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 2 -->
                        <div class="vip-swiper-slide" style="transform: translateY(100%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(100%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip2.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">2.8%</div>
                                        <div class="vip-level-badge">VIP 2</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP2</div>
                                            <div class="vip-slide-status" data-level="2">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon2.png?v=${Date.now()}" alt="VIP 2" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">300-1000 USDT</div>
                                            <div class="vip-details">2.8% daily, 3 signals, 2 refs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 3 -->
                        <div class="vip-swiper-slide" style="transform: translateY(200%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(200%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip3.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">3.5%</div>
                                        <div class="vip-level-badge">VIP 3</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP3</div>
                                            <div class="vip-slide-status" data-level="3">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon3.png?v=${Date.now()}" alt="VIP 3" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">1000-3500 USDT</div>
                                            <div class="vip-details">3.5% daily, 3 signals, 5 refs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 4 -->
                        <div class="vip-swiper-slide" style="transform: translateY(300%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(300%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip4.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">4.0%</div>
                                        <div class="vip-level-badge">VIP 4</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP4</div>
                                            <div class="vip-slide-status" data-level="4">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon4.png?v=${Date.now()}" alt="VIP 4" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">3500-6000 USDT</div>
                                            <div class="vip-details">4.0% daily, 3 signals, 8 refs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 5 -->
                        <div class="vip-swiper-slide" style="transform: translateY(400%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(400%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip5.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">5.0%</div>
                                        <div class="vip-level-badge">VIP 5</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP5</div>
                                            <div class="vip-slide-status" data-level="5">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon5.png?v=${Date.now()}" alt="VIP 5" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">6000-12000 USDT</div>
                                            <div class="vip-details">5.0% daily, 3 signals, 15 refs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 6 -->
                        <div class="vip-swiper-slide" style="transform: translateY(500%) translateZ(0px);">
                            <div class="vip-swiper-slide-frame">
                                <div class="vip-slide-item" style="transform: translateY(500%) translateZ(0px);">
                                    <div class="vip-slide-content" style="background: url('assets/vip6.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="vip-percent-badge">6.0%</div>
                                        <div class="vip-level-badge">VIP 6</div>
                                        
                                        <div class="vip-slide-header">
                                            <div class="vip-slide-title">VIP6</div>
                                            <div class="vip-slide-status" data-level="6">
                                                <div class="vip-status-icon">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                Unlocked this level
                                            </div>
                                        </div>
                                        
                                        <div class="vip-slide-icon">
                                            <img src="assets/vipicon6.png?v=${Date.now()}" alt="VIP 6" class="vip-icon">
                                        </div>
                                        
                                        <div class="vip-slide-info">
                                            <div class="vip-range">12000-20000 USDT</div>
                                            <div class="vip-details">6.0% daily, 3 signals, 25 refs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Indicators -->
                    <div class="vip-swiper-indicators" id="vip-indicators">
                        <div class="vip-indicator active" data-index="0"></div>
                        <div class="vip-indicator" data-index="1"></div>
                        <div class="vip-indicator" data-index="2"></div>
                        <div class="vip-indicator" data-index="3"></div>
                        <div class="vip-indicator" data-index="4"></div>
                        <div class="vip-indicator" data-index="5"></div>
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
    const container = document.getElementById('vip-swiper-container');
    const wrapper = document.getElementById('vip-swiper-wrapper');
    const slides = document.querySelectorAll('.vip-swiper-slide');
    const indicators = document.querySelectorAll('.vip-indicator');
    const description = document.getElementById('vip-description');
    
    if (!container || !wrapper || slides.length === 0) {
        console.error('Carousel elements not found');
        return;
    }
    
    let currentIndex = 0;
    let isDragging = false;
    let startY = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let animationID = null;
    
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    function updateCarousel() {
        // Update wrapper position
        wrapper.style.transform = `translateY(${currentTranslate}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Update description
        if (description && vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
        }
        
        // Update lock status based on user level
        updateLockStatus();
    }
    
    function updateLockStatus() {
        const user = window.getCurrentUser();
        if (!user) return;
        
        const userVipLevel = user.vip_level;
        
        slides.forEach((slide, index) => {
            const level = index + 1;
            const statusElement = slide.querySelector('.vip-slide-status');
            const iconElement = slide.querySelector('.vip-status-icon i');
            
            if (statusElement && iconElement) {
                if (level <= userVipLevel) {
                    // Unlocked level
                    iconElement.className = 'fas fa-lock-open';
                    statusElement.innerHTML = `
                        <div class="vip-status-icon">
                            <i class="fas fa-lock-open"></i>
                        </div>
                        Unlocked this level
                    `;
                } else {
                    // Locked level
                    iconElement.className = 'fas fa-lock';
                    statusElement.innerHTML = `
                        <div class="vip-status-icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        Unlocked this level
                    `;
                }
            }
        });
    }
    
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        
        currentIndex = index;
        currentTranslate = -currentIndex * 100;
        updateCarousel();
    }
    
    function animation() {
        wrapper.style.transform = `translateY(${currentTranslate}%)`;
        if (isDragging) requestAnimationFrame(animation);
    }
    
    // Mouse events
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        animationID = requestAnimationFrame(animation);
        container.style.cursor = 'grabbing';
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentY = e.clientY;
        const diffY = currentY - startY;
        const containerHeight = container.offsetHeight;
        
        // Calculate translate based on drag distance
        currentTranslate = previousTranslate + (diffY / containerHeight) * 100;
    });
    
    container.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        container.style.cursor = 'grab';
        
        const movedBy = currentTranslate - previousTranslate;
        
        if (Math.abs(movedBy) > 20) {
            if (movedBy > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (movedBy < 0 && currentIndex < slides.length - 1) {
                currentIndex++;
            }
        }
        
        currentTranslate = -currentIndex * 100;
        previousTranslate = currentTranslate;
        updateCarousel();
    });
    
    container.addEventListener('mouseleave', () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        container.style.cursor = 'grab';
        
        currentTranslate = -currentIndex * 100;
        previousTranslate = currentTranslate;
        updateCarousel();
    });
    
    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        startY = e.touches[0].clientY;
        animationID = requestAnimationFrame(animation);
    });
    
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;
        const containerHeight = container.offsetHeight;
        
        currentTranslate = previousTranslate + (diffY / containerHeight) * 100;
    });
    
    container.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const movedBy = currentTranslate - previousTranslate;
        
        if (Math.abs(movedBy) > 20) {
            if (movedBy > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (movedBy < 0 && currentIndex < slides.length - 1) {
                currentIndex++;
            }
        }
        
        currentTranslate = -currentIndex * 100;
        previousTranslate = currentTranslate;
        updateCarousel();
    });
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Click on slide to navigate
    slides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            if (!isDragging) {
                goToSlide(index);
            }
        });
    });
    
    // Keyboard navigation for testing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' && currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });
    
    // Initialize
    updateCarousel();
    
    // Set cursor
    container.style.cursor = 'grab';
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Проверяем и обновляем сигналы при загрузке страницы
    if (window.glyApp) {
        await window.glyApp.checkAndUpdateSignals();
        
        // ПРИНУДИТЕЛЬНО ОБНОВЛЯЕМ VIP УРОВЕНЬ ПРИ КАЖДОЙ ЗАГРУЗКЕ
        await window.glyApp.updateVipLevel();
    }
    
    // Обновляем данные пользователя после проверки
    const updatedUser = window.getCurrentUser();
    
    // Update signals display
    updateSignalsDisplay(updatedUser.signals_available);
    
    // Update VIP level in carousel - go to user's level
    const currentVipLevel = updatedUser.vip_level || 1;
    goToUserVipLevel(currentVipLevel);
    
    // Update lock status
    updateLockStatus();
    
    // ДЛЯ ОТЛАДКИ: Проверяем активных рефералов
    if (window.getActiveReferralsCount) {
        const activeRefs = await window.getActiveReferralsCount(updatedUser.id);
        console.log(`DEBUG: User ${updatedUser.username} has ${activeRefs} active referrals (balance ≥ 20 USDT)`);
        console.log(`Current VIP level: ${updatedUser.vip_level}`);
    }
}

function goToUserVipLevel(level) {
    const slides = document.querySelectorAll('.vip-swiper-slide');
    const indicators = document.querySelectorAll('.vip-indicator');
    const container = document.getElementById('vip-swiper-container');
    const wrapper = document.getElementById('vip-swiper-wrapper');
    
    if (!slides.length || !container || !wrapper) return;
    
    // Level is 1-based, index is 0-based
    const targetIndex = Math.max(0, Math.min(level - 1, slides.length - 1));
    
    let currentIndex = 0;
    let currentTranslate = -targetIndex * 100;
    
    // Update wrapper position
    wrapper.style.transform = `translateY(${currentTranslate}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === targetIndex);
    });
    
    // Highlight current user level
    slides.forEach((slide, index) => {
        const slideContent = slide.querySelector('.vip-slide-content');
        if (slideContent) {
            if (index === targetIndex) {
                slideContent.style.border = '2px solid #FFD700';
                slideContent.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
            } else {
                slideContent.style.border = 'none';
                slideContent.style.boxShadow = 'none';
            }
        }
    });
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
        updateSignalsDisplay(result.signals_left);
        
        // Update VIP level display after quantification
        const updatedUser = window.getCurrentUser();
        goToUserVipLevel(updatedUser.vip_level);
        updateLockStatus();
        
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

// Глобальная функция для обновления VIP уровня (может быть вызвана из других модулей)
window.updateVipLevelDisplay = function() {
    const user = window.getCurrentUser();
    if (user) {
        goToUserVipLevel(user.vip_level);
        updateLockStatus();
    }
};
