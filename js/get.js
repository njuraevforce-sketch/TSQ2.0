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

            <!-- VIP cards - НОВАЯ ВЕРТИКАЛЬНАЯ КАРУСЕЛЬ -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                <div class="uni-swiper-wrapper" id="vip-swiper-wrapper">
                    <div class="uni-swiper-slides" id="vip-swiper-slides">
                        <!-- VIP 1 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip1.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP1</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-opened-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #4CAF50;">
                                                <i class="fas fa-lock-open"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">2.2%</div>
                                    <div class="vip-requirement-left">VIP 1</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon1.png?v=${Date.now()}" alt="VIP 1" draggable="false">
                                    </div>
                                    <div class="vip-level-name">0-299 USDT</div>
                                    <div class="vip-level-requirement">2.2% daily, 3 signals</div>
                                </div>
                            </div>
                        </div>
                        <!-- VIP 2 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip2.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP2</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #cccccc;">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">2.8%</div>
                                    <div class="vip-requirement-left">VIP 2</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon2.png?v=${Date.now()}" alt="VIP 2" draggable="false">
                                    </div>
                                    <div class="vip-level-name">300-1000 USDT</div>
                                    <div class="vip-level-requirement">2.8% daily, 3 signals, 2 refs</div>
                                </div>
                            </div>
                        </div>
                        <!-- VIP 3 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip3.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP3</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #cccccc;">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">3.5%</div>
                                    <div class="vip-requirement-left">VIP 3</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon3.png?v=${Date.now()}" alt="VIP 3" draggable="false">
                                    </div>
                                    <div class="vip-level-name">1000-3500 USDT</div>
                                    <div class="vip-level-requirement">3.5% daily, 3 signals, 5 refs</div>
                                </div>
                            </div>
                        </div>
                        <!-- VIP 4 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip4.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP4</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #cccccc;">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">4.0%</div>
                                    <div class="vip-requirement-left">VIP 4</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon4.png?v=${Date.now()}" alt="VIP 4" draggable="false">
                                    </div>
                                    <div class="vip-level-name">3500-6000 USDT</div>
                                    <div class="vip-level-requirement">4.0% daily, 3 signals, 8 refs</div>
                                </div>
                            </div>
                        </div>
                        <!-- VIP 5 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip5.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP5</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #cccccc;">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">5.0%</div>
                                    <div class="vip-requirement-left">VIP 5</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon5.png?v=${Date.now()}" alt="VIP 5" draggable="false">
                                    </div>
                                    <div class="vip-level-name">6000-12000 USDT</div>
                                    <div class="vip-level-requirement">5.0% daily, 3 signals, 15 refs</div>
                                </div>
                            </div>
                        </div>
                        <!-- VIP 6 -->
                        <div class="uni-swiper-slide-frame">
                            <div class="uni-swiper-item">
                                <div class="swiper-itemWrap flex flex-direction justify-between padding" style="background: url('assets/vip6.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                    <div class="text-bold text-xxl">VIP6</div>
                                    <div class="flex align-center">
                                        <div class="u-icon u-icon--right">
                                            <div class="u-icon__icon uicon-lock-fill" style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: #cccccc;">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        Unlocked this level
                                    </div>
                                    <div class="vip-percent-left">6.0%</div>
                                    <div class="vip-requirement-left">VIP 6</div>
                                    <div class="swiperPo">
                                        <img src="assets/vipicon6.png?v=${Date.now()}" alt="VIP 6" draggable="false">
                                    </div>
                                    <div class="vip-level-name">12000-20000 USDT</div>
                                    <div class="vip-level-requirement">6.0% daily, 3 signals, 25 refs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Индикаторы и навигация -->
                <div class="vip-indicators" id="vip-indicators">
                    <div class="vip-indicator active" data-index="0"></div>
                    <div class="vip-indicator" data-index="1"></div>
                    <div class="vip-indicator" data-index="2"></div>
                    <div class="vip-indicator" data-index="3"></div>
                    <div class="vip-indicator" data-index="4"></div>
                    <div class="vip-indicator" data-index="5"></div>
                </div>
                
                <button class="vip-nav-btn prev" id="vip-prev-btn">
                    <i class="fas fa-chevron-up"></i>
                </button>
                <button class="vip-nav-btn next" id="vip-next-btn">
                    <i class="fas fa-chevron-down"></i>
                </button>
                
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
    const slidesContainer = document.getElementById('vip-swiper-slides');
    const indicators = document.querySelectorAll('.vip-indicator');
    const prevBtn = document.getElementById('vip-prev-btn');
    const nextBtn = document.getElementById('vip-next-btn');
    const description = document.getElementById('vip-description');
    
    if (!slidesContainer || indicators.length === 0 || !description) {
        console.error('Carousel elements not found');
        return;
    }
    
    let currentIndex = 0;
    const totalSlides = 6;
    const slideHeight = 250; // высота слайда в пикселях
    
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    function updateCarousel() {
        console.log('Updating carousel to index:', currentIndex);
        
        // Update slides position
        slidesContainer.style.transform = `translate(0px, ${-currentIndex * slideHeight}px)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
        
        // Update description
        if (vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
            console.log('Description updated:', vipDescriptions[currentIndex]);
        }
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
        
        // Update lock icons based on user's VIP level
        updateLockIcons();
    }
    
    function updateLockIcons() {
        const user = window.getCurrentUser();
        if (!user) return;
        
        const userVipLevel = user.vip_level || 1;
        
        // Update lock icons for all slides
        for (let i = 0; i < totalSlides; i++) {
            const slideIndex = i;
            const slideFrame = slidesContainer.children[slideIndex];
            if (!slideFrame) continue;
            
            const lockIcon = slideFrame.querySelector('.u-icon__icon i');
            if (lockIcon) {
                if (slideIndex < userVipLevel - 1) {
                    // Already unlocked levels (below current)
                    lockIcon.className = 'fas fa-lock-open';
                    lockIcon.style.color = '#4CAF50';
                } else if (slideIndex === userVipLevel - 1) {
                    // Current level
                    lockIcon.className = 'fas fa-lock-open';
                    lockIcon.style.color = '#4CAF50';
                } else {
                    // Locked levels (above current)
                    lockIcon.className = 'fas fa-lock';
                    lockIcon.style.color = '#cccccc';
                }
            }
        }
    }
    
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    // Initialize carousel
    updateCarousel();
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Touch events for swipe
    let touchStartY = 0;
    let touchEndY = 0;
    
    slidesContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    slidesContainer.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diffY = touchStartY - touchEndY;
        
        if (Math.abs(diffY) > swipeThreshold) {
            if (diffY > 0 && currentIndex < totalSlides - 1) {
                // Swipe up - go to next
                nextSlide();
            } else if (diffY < 0 && currentIndex > 0) {
                // Swipe down - go to previous
                prevSlide();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' && currentIndex < totalSlides - 1) {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            prevSlide();
        }
    });
    
    // Expose functions for external use
    window.goToVipSlide = goToSlide;
    window.updateVipCarousel = updateCarousel;
    window.updateVipLockIcons = updateLockIcons;
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
    
    // Update VIP level in carousel
    highlightCurrentVipLevel(updatedUser.vip_level);
    
    // ДЛЯ ОТЛАДКИ: Проверяем активных рефералов
    if (window.getActiveReferralsCount) {
        const activeRefs = await window.getActiveReferralsCount(updatedUser.id);
        console.log(`DEBUG: User ${updatedUser.username} has ${activeRefs} active referrals (balance ≥ 20 USDT)`);
        console.log(`Current VIP level: ${updatedUser.vip_level}`);
    }
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

function highlightCurrentVipLevel(userVipLevel) {
    // Go to the slide corresponding to user's VIP level
    if (window.goToVipSlide) {
        window.goToVipSlide(userVipLevel - 1); // VIP level 1 corresponds to index 0
    }
    
    // Update lock icons
    if (window.updateVipLockIcons) {
        setTimeout(() => window.updateVipLockIcons(), 100);
    }
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
        highlightCurrentVipLevel(updatedUser.vip_level);
        
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
        highlightCurrentVipLevel(user.vip_level);
    }
};
