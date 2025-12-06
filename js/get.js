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

            <!-- VIP cards - КАСТОМНЫЙ ВЕРТИКАЛЬНЫЙ СЛАЙДЕР -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                
                <!-- Обертка слайдера -->
                <div class="custom-vip-carousel" id="vip-carousel">
                    <div class="carousel-track" id="vip-track">
                        <!-- VIP 1 -->
                        <div class="vip-slide active" data-vip="1">
                            <div class="vip-card" style="background: linear-gradient(135deg, #4e7771, #6b9b94);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP1</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock-open" style="color: #4CAF50;"></i>
                                        <span>Unlocked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">2.2%</div>
                                    <div class="vip-requirement">VIP 1</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon1.png?v=${Date.now()}" alt="VIP 1">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">0-299 USDT</div>
                                        <div class="vip-details">2.2% daily, 3 signals</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 2 -->
                        <div class="vip-slide" data-vip="2">
                            <div class="vip-card" style="background: linear-gradient(135deg, #5a6b76, #8a969e);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP2</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock" style="color: #cccccc;"></i>
                                        <span>Locked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">2.8%</div>
                                    <div class="vip-requirement">VIP 2</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon2.png?v=${Date.now()}" alt="VIP 2">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">300-1000 USDT</div>
                                        <div class="vip-details">2.8% daily, 3 signals, 2 refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 3 -->
                        <div class="vip-slide" data-vip="3">
                            <div class="vip-card" style="background: linear-gradient(135deg, #6b5a76, #968a9e);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP3</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock" style="color: #cccccc;"></i>
                                        <span>Locked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">3.5%</div>
                                    <div class="vip-requirement">VIP 3</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon3.png?v=${Date.now()}" alt="VIP 3">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">1000-3500 USDT</div>
                                        <div class="vip-details">3.5% daily, 3 signals, 5 refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 4 -->
                        <div class="vip-slide" data-vip="4">
                            <div class="vip-card" style="background: linear-gradient(135deg, #765a5a, #9e8a8a);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP4</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock" style="color: #cccccc;"></i>
                                        <span>Locked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">4.0%</div>
                                    <div class="vip-requirement">VIP 4</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon4.png?v=${Date.now()}" alt="VIP 4">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">3500-6000 USDT</div>
                                        <div class="vip-details">4.0% daily, 3 signals, 8 refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 5 -->
                        <div class="vip-slide" data-vip="5">
                            <div class="vip-card" style="background: linear-gradient(135deg, #5a765a, #8a9e8a);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP5</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock" style="color: #cccccc;"></i>
                                        <span>Locked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">5.0%</div>
                                    <div class="vip-requirement">VIP 5</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon5.png?v=${Date.now()}" alt="VIP 5">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">6000-12000 USDT</div>
                                        <div class="vip-details">5.0% daily, 3 signals, 15 refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 6 -->
                        <div class="vip-slide" data-vip="6">
                            <div class="vip-card" style="background: linear-gradient(135deg, #765a76, #9e8a9e);">
                                <div class="vip-header">
                                    <div class="vip-title">VIP6</div>
                                    <div class="vip-status">
                                        <i class="fas fa-lock" style="color: #cccccc;"></i>
                                        <span>Locked</span>
                                    </div>
                                </div>
                                <div class="vip-content">
                                    <div class="vip-percent">6.0%</div>
                                    <div class="vip-requirement">VIP 6</div>
                                    <div class="vip-image">
                                        <img src="assets/vipicon6.png?v=${Date.now()}" alt="VIP 6">
                                    </div>
                                    <div class="vip-info">
                                        <div class="vip-range">12000-20000 USDT</div>
                                        <div class="vip-details">6.0% daily, 3 signals, 25 refs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Навигационные кнопки -->
                    <button class="carousel-btn prev" id="vip-prev">
                        <i class="fas fa-chevron-up"></i>
                    </button>
                    <button class="carousel-btn next" id="vip-next">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    
                    <!-- Индикаторы -->
                    <div class="carousel-indicators" id="vip-indicators">
                        <span class="indicator active" data-index="0"></span>
                        <span class="indicator" data-index="1"></span>
                        <span class="indicator" data-index="2"></span>
                        <span class="indicator" data-index="3"></span>
                        <span class="indicator" data-index="4"></span>
                        <span class="indicator" data-index="5"></span>
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
    const quantBtn = document.getElementById('quant-btn');
    if (quantBtn) {
        quantBtn.addEventListener('click', startQuantification);
    }
}

function initVipCarousel() {
    const carousel = document.getElementById('vip-carousel');
    const track = document.getElementById('vip-track');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('vip-prev');
    const nextBtn = document.getElementById('vip-next');
    const description = document.getElementById('vip-description');
    
    if (!carousel || !track || indicators.length === 0 || !description) {
        console.error('Carousel elements not found');
        return;
    }
    
    let currentIndex = 0;
    const totalSlides = 6;
    
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    // Обновление отображения
    function updateCarousel() {
        console.log('Updating carousel to index:', currentIndex);
        
        // Перемещаем трек
        track.style.transform = `translateY(${-currentIndex * 100}%)`;
        
        // Обновляем индикаторы
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
        
        // Обновляем описание
        if (vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
        }
        
        // Обновляем состояние кнопок
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
        
        // Обновляем иконки замков
        updateLockIcons();
    }
    
    function updateLockIcons() {
        const user = window.getCurrentUser();
        if (!user) return;
        
        const userVipLevel = user.vip_level || 1;
        
        // Обновляем иконки замков для всех слайдов
        const slides = document.querySelectorAll('.vip-slide');
        slides.forEach((slide, index) => {
            const statusIcon = slide.querySelector('.vip-status i');
            const statusText = slide.querySelector('.vip-status span');
            
            if (statusIcon && statusText) {
                if (index + 1 <= userVipLevel) {
                    // Разблокированные уровни
                    statusIcon.className = 'fas fa-lock-open';
                    statusIcon.style.color = '#4CAF50';
                    statusText.textContent = 'Unlocked';
                } else {
                    // Заблокированные уровни
                    statusIcon.className = 'fas fa-lock';
                    statusIcon.style.color = '#cccccc';
                    statusText.textContent = 'Locked';
                }
            }
        });
    }
    
    // Переход к конкретному слайду
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentIndex = index;
        updateCarousel();
    }
    
    // Следующий слайд
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    // Предыдущий слайд
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    // Инициализация
    updateCarousel();
    
    // Обработчики событий для кнопок
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // СВАЙП для мобильных устройств
    let touchStartY = 0;
    let touchEndY = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    carousel.addEventListener('touchmove', (e) => {
        touchEndY = e.touches[0].clientY;
    }, { passive: true });
    
    carousel.addEventListener('touchend', () => {
        const swipeThreshold = 50;
        const diffY = touchStartY - touchEndY;
        
        if (Math.abs(diffY) > swipeThreshold) {
            if (diffY > 0) {
                // Свайп вверх - следующий слайд
                nextSlide();
            } else {
                // Свайп вниз - предыдущий слайд
                prevSlide();
            }
        }
    });
    
    // Навигация с клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' && currentIndex < totalSlides - 1) {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            prevSlide();
        }
    });
    
    // Адаптация при изменении размера окна
    window.addEventListener('resize', () => {
        track.style.transform = `translateY(${-currentIndex * 100}%)`;
    });
    
    // Экспортируем функции для внешнего использования
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
        
        // Обновляем VIP уровень
        await window.glyApp.updateVipLevel();
    }
    
    // Обновляем данные пользователя после проверки
    const updatedUser = window.getCurrentUser();
    
    // Update signals display
    updateSignalsDisplay(updatedUser.signals_available);
    
    // Update VIP level in carousel
    highlightCurrentVipLevel(updatedUser.vip_level);
    
    // ДЛЯ ОТЛАДКИ
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

// Глобальная функция для обновления VIP уровня
window.updateVipLevelDisplay = function() {
    const user = window.getCurrentUser();
    if (user) {
        highlightCurrentVipLevel(user.vip_level);
    }
};
