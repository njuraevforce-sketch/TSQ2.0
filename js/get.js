// Get section - UPDATED WITH NEW VIP CAROUSEL
import { t } from './translate.js';

export default function renderGet() {
    const lang = localStorage.getItem('gly_language') || 'en';
    const user = window.getCurrentUser();
    const currentVipLevel = user ? user.vip_level : 1;
    
    // Определяем, какие уровни разблокированы
    const unlockedLevels = user ? Array.from({length: currentVipLevel}, (_, i) => i + 1) : [1];
    
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

            <!-- НОВАЯ VIP КАРУСЕЛЬ КАК В ПРИМЕРЕ -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                
                <div class="vip-swiper-container">
                    <div class="uni-swiper-wrapper">
                        <div class="uni-swiper-slides" id="vip-slides" style="left: 0px; right: 0px; bottom: 0;">
                            <!-- VIP 1 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 0%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip1.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP1</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(1) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(1) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(1) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon1.png?v=${Date.now()}" draggable="false" alt="VIP1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 2 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 100%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip2.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP2</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(2) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(2) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(2) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon2.png?v=${Date.now()}" draggable="false" alt="VIP2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 3 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 200%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip3.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP3</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(3) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(3) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(3) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon3.png?v=${Date.now()}" draggable="false" alt="VIP3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 4 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 300%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip4.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP4</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(4) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(4) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(4) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon4.png?v=${Date.now()}" draggable="false" alt="VIP4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 5 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 400%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip5.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP5</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(5) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(5) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(5) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon5.png?v=${Date.now()}" draggable="false" alt="VIP5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- VIP 6 -->
                            <div class="uni-swiper-slide-frame" style="width: 100%; height: 100%;">
                                <div class="uni-swiper-item" style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 500%) translateZ(0px);">
                                    <div class="swiper-itemWrap flex flex-direction justify-between padding" 
                                         style="background: url('assets/vip6.png?v=${Date.now()}') 0% 0% / 100% 100% no-repeat;">
                                        <div class="text-bold text-xxl">VIP6</div>
                                        <div class="flex align-center">
                                            <div class="u-icon u-icon--right">
                                                <span class="u-icon__icon ${unlockedLevels.includes(6) ? 'uicon-lock-opened-fill' : 'uicon-lock-fill'}" 
                                                      style="font-size: 16px; line-height: 16px; font-weight: normal; top: 0px; color: ${unlockedLevels.includes(6) ? '#52c41a' : '#606266'};">
                                                    <span>${unlockedLevels.includes(6) ? '' : ''}</span>
                                                </span>
                                            </div>
                                            ${t('unlocked_this_level')}
                                        </div>
                                        <div class="swiperPo">
                                            <img src="assets/vipicon6.png?v=${Date.now()}" draggable="false" alt="VIP6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Навигационные точки -->
                <div class="vip-carousel-nav" id="vip-nav">
                    <div class="vip-nav-btn ${currentVipLevel === 1 ? 'active' : ''}" data-index="0"></div>
                    <div class="vip-nav-btn ${currentVipLevel === 2 ? 'active' : ''}" data-index="1"></div>
                    <div class="vip-nav-btn ${currentVipLevel === 3 ? 'active' : ''}" data-index="2"></div>
                    <div class="vip-nav-btn ${currentVipLevel === 4 ? 'active' : ''}" data-index="3"></div>
                    <div class="vip-nav-btn ${currentVipLevel === 5 ? 'active' : ''}" data-index="4"></div>
                    <div class="vip-nav-btn ${currentVipLevel === 6 ? 'active' : ''}" data-index="5"></div>
                </div>
                
                <!-- Индикатор текущего уровня -->
                <div class="current-vip-indicator" id="current-vip-indicator">
                    ${t('current_vip_level')}: <span class="vip-level">VIP${currentVipLevel}</span>
                </div>
                
                <!-- Описание VIP уровня -->
                <div class="vip-description" id="vip-description">
                    ${getVipDescription(currentVipLevel)}
                </div>
            </div>
        </div>
    `;
}

// Функция для получения описания VIP уровня
function getVipDescription(level) {
    const descriptions = {
        1: t('vip_description_1'),
        2: t('vip_description_2'),
        3: t('vip_description_3'),
        4: t('vip_description_4'),
        5: t('vip_description_5'),
        6: t('vip_description_6')
    };
    return descriptions[level] || t('vip_description_1');
}

export async function init() {
    // Инициализация новой VIP карусели
    initNewVipCarousel();
    
    // Update UTC time
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Load user data
    await loadUserData();
    
    // Quantification button handler
    document.getElementById('quant-btn').addEventListener('click', startQuantification);
}

function initNewVipCarousel() {
    const slides = document.getElementById('vip-slides');
    const navButtons = document.querySelectorAll('.vip-nav-btn');
    const user = window.getCurrentUser();
    const currentLevel = user ? user.vip_level : 1;
    
    if (!slides || navButtons.length === 0) return;
    
    // Устанавливаем начальную позицию карусели (показываем текущий уровень)
    const slideHeight = 100; // 100% на каждый слайд
    const initialTranslate = (currentLevel - 1) * slideHeight;
    slides.style.transform = `translateY(-${initialTranslate}%)`;
    
    // Обработчики для навигационных точек
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index'));
            
            // Обновляем активную точку
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Прокручиваем карусель
            slides.style.transform = `translateY(-${index * slideHeight}%)`;
            
            // Обновляем описание
            updateVipDescription(index + 1);
            
            // Обновляем индикатор текущего уровня (только для визуального отображения)
            const indicator = document.getElementById('current-vip-indicator');
            if (indicator) {
                indicator.innerHTML = `${t('viewing_vip_level')}: <span class="vip-level">VIP${index + 1}</span>`;
            }
        });
    });
    
    // Автоматическая прокрутка к текущему уровню пользователя
    setTimeout(() => {
        navButtons.forEach(btn => {
            const index = parseInt(btn.getAttribute('data-index'));
            if (index === currentLevel - 1) {
                btn.classList.add('active');
            }
        });
    }, 100);
    
    // Добавляем свайп-жесты для мобильных устройств
    let startY = 0;
    let isSwiping = false;
    
    slides.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isSwiping = true;
    });
    
    slides.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        e.preventDefault();
    });
    
    slides.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        isSwiping = false;
        
        const endY = e.changedTouches[0].clientY;
        const diffY = startY - endY;
        const threshold = 50;
        
        if (Math.abs(diffY) > threshold) {
            const currentIndex = Array.from(navButtons).findIndex(btn => btn.classList.contains('active'));
            let newIndex = currentIndex;
            
            if (diffY > 0 && currentIndex < navButtons.length - 1) {
                newIndex = currentIndex + 1; // Свайп вверх
            } else if (diffY < 0 && currentIndex > 0) {
                newIndex = currentIndex - 1; // Свайп вниз
            }
            
            if (newIndex !== currentIndex && navButtons[newIndex]) {
                navButtons.forEach(b => b.classList.remove('active'));
                navButtons[newIndex].classList.add('active');
                slides.style.transform = `translateY(-${newIndex * slideHeight}%)`;
                updateVipDescription(newIndex + 1);
                
                const indicator = document.getElementById('current-vip-indicator');
                if (indicator) {
                    indicator.innerHTML = `${t('viewing_vip_level')}: <span class="vip-level">VIP${newIndex + 1}</span>`;
                }
            }
        }
    });
}

function updateVipDescription(level) {
    const description = document.getElementById('vip-description');
    if (description) {
        description.textContent = getVipDescription(level);
    }
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
        await window.glyApp.updateVipLevel();
    }
    
    // Обновляем данные пользователя после проверки
    const updatedUser = window.getCurrentUser();
    
    // Update signals display
    updateSignalsDisplay(updatedUser.signals_available);
    
    // Обновляем отображение текущего VIP уровня
    updateCurrentVipDisplay(updatedUser.vip_level);
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

function updateCurrentVipDisplay(vipLevel) {
    // Обновляем индикатор текущего уровня
    const indicator = document.getElementById('current-vip-indicator');
    if (indicator) {
        indicator.innerHTML = `${t('current_vip_level')}: <span class="vip-level">VIP${vipLevel}</span>`;
    }
    
    // Обновляем навигационные точки
    const navButtons = document.querySelectorAll('.vip-nav-btn');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('active');
        if (index === vipLevel - 1) {
            btn.classList.add('active');
        }
    });
    
    // Прокручиваем карусель к текущему уровню
    const slides = document.getElementById('vip-slides');
    if (slides) {
        const slideHeight = 100;
        slides.style.transform = `translateY(-${(vipLevel - 1) * slideHeight}%)`;
    }
    
    // Обновляем описание
    updateVipDescription(vipLevel);
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
        updateCurrentVipDisplay(updatedUser.vip_level);
        
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

// Глобальная функция для обновления VIP уровня
window.updateVipLevelDisplay = function() {
    const user = window.getCurrentUser();
    if (user) {
        updateCurrentVipDisplay(user.vip_level);
    }
};
