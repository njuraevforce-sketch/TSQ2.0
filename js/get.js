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

            <!-- VIP cards - ОБНОВЛЕННЫЙ ВЕРТИКАЛЬНЫЙ СЛАЙДЕР -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                
                <!-- Обертка слайдера -->
                <div class="custom-vip-carousel" id="vip-carousel">
                    <div class="carousel-track" id="vip-track">
                        <!-- VIP 1 -->
                        <div class="vip-slide active" data-vip="1">
                            <div class="vip-card">
                                <div class="vip-title">VIP1</div>
                                <div class="vip-status">
                                    <i class="fas fa-lock-open" style="color: #4CAF50;"></i>
                                    <span>Unlocked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon1.png" alt="VIP 1">
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 2 -->
                        <div class="vip-slide" data-vip="2">
                            <div class="vip-card">
                                <div class="vip-title">VIP2</div>
                                <div class="vip-status">
                                    <i class="fas fa-lock" style="color: #cccccc;"></i>
                                    <span>Locked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon2.png" alt="VIP 2">
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 3 -->
                        <div class="vip-slide" data-vip="3">
                            <div class="vip-card">
                                <div class="vip-title">VIP3</div>
                                <div class="unavailable-text" data-translate="vip3_unavailable_until">
                                    недоступно до 01.01.2026
                                </div>
                                <div class="vip-status">
                                    <i class="fas fa-lock" style="color: #cccccc;"></i>
                                    <span>Locked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon3.png" alt="VIP 3">
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 4 -->
                        <div class="vip-slide" data-vip="4">
                            <div class="vip-card">
                                <div class="vip-title">VIP4</div>
                                <div class="unavailable-text" data-translate="vip4_unavailable_until">
                                    недоступно до 01.06.2026
                                </div>
                                <div class="vip-status">
                                    <i class="fas fa-lock" style="color: #cccccc;"></i>
                                    <span>Locked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon4.png" alt="VIP 4">
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 5 -->
                        <div class="vip-slide" data-vip="5">
                            <div class="vip-card">
                                <div class="vip-title">VIP5</div>
                                <div class="unavailable-text" data-translate="vip5_unavailable">
                                    недоступно
                                </div>
                                <div class="vip-status">
                                    <i class="fas fa-lock" style="color: #cccccc;"></i>
                                    <span>Locked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon5.png" alt="VIP 5">
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP 6 -->
                        <div class="vip-slide" data-vip="6">
                            <div class="vip-card">
                                <div class="vip-title">VIP6</div>
                                <div class="unavailable-text" data-translate="vip6_unavailable">
                                    недоступно
                                </div>
                                <div class="vip-status">
                                    <i class="fas fa-lock" style="color: #cccccc;"></i>
                                    <span>Locked</span>
                                </div>
                                <div class="vip-image">
                                    <img src="assets/vipicon6.png" alt="VIP 6">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Навигационные кнопки (скрыты через CSS) -->
                    <button class="carousel-btn prev" id="vip-prev" style="display: none;">
                        <i class="fas fa-chevron-up"></i>
                    </button>
                    <button class="carousel-btn next" id="vip-next" style="display: none;">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    
                    <!-- Индикаторы (скрыты через CSS) -->
                    <div class="carousel-indicators" id="vip-indicators" style="display: none;">
                        <span class="indicator active" data-index="0"></span>
                        <span class="indicator" data-index="1"></span>
                        <span class="indicator" data-index="2"></span>
                        <span class="indicator" data-index="3"></span>
                        <span class="indicator" data-index="4"></span>
                        <span class="indicator" data-index="5"></span>
                    </div>
                </div>
                
                <!-- Описание VIP уровня -->
                <div class="vip-description" id="vip-description">
                    ${t('vip_description_1')}
                </div>
                
                <!-- Детали VIP уровня -->
                <div class="vip-details" id="vip-details">
                    <div class="details-content">
                        <div class="detail-item">
                            <span class="detail-label" data-translate="daily_percent">Daily Percent:</span>
                            <span class="detail-value" id="detail-percent">2.2%</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label" data-translate="deposit_range">Deposit Range:</span>
                            <span class="detail-value" id="detail-range">0-299 USDT</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label" data-translate="signals_count">Signals:</span>
                            <span class="detail-value" id="detail-signals">3 signals</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label" data-translate="referrals_required">Referrals Required:</span>
                            <span class="detail-value" id="detail-refs">0 refs</span>
                        </div>
                    </div>
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
    const slides = document.querySelectorAll('.vip-slide');
    
    if (!carousel || !track || !slides.length) {
        console.error('Carousel elements not found');
        return;
    }
    
    const totalSlides = slides.length;
    const slideHeight = 130; // Высота одной карточки в пикселях
    const previewHeight = 20; // Высота предпросмотра следующей карточки
    let currentIndex = 0;
    
    // Устанавливаем начальную позицию
    updateCarouselPosition();
    
    // Переменные для отслеживания свайпа
    let startY = 0;
    let currentY = 0;
    let isSwiping = false;
    let animationFrameId = null;
    
    // Обновление позиции карусели
    function updateCarouselPosition() {
        // Сдвигаем трек вверх на количество текущих карточек
        const offset = -(currentIndex * slideHeight);
        track.style.transform = `translateY(${offset}px)`;
        updateActiveSlide();
        updateVipDescription();
    }
    
    // Обновление активного слайда
    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'sliding-up', 'sliding-down');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
    }
    
    // Обновление описания VIP уровня
    function updateVipDescription() {
        const vipDescriptions = [
            t('vip_description_1'),
            t('vip_description_2'),
            t('vip_description_3'),
            t('vip_description_4'),
            t('vip_description_5'),
            t('vip_description_6')
        ];
        
        const vipDetails = [
            {
                percent: '2.2%',
                range: '0-299 USDT',
                signals: '3 signals',
                refs: '0 refs'
            },
            {
                percent: '2.8%',
                range: '300-1000 USDT',
                signals: '3 signals',
                refs: '2 refs'
            },
            {
                percent: '3.5%',
                range: '1000-3500 USDT',
                signals: '3 signals',
                refs: '5 refs'
            },
            {
                percent: '4.0%',
                range: '3500-6000 USDT',
                signals: '3 signals',
                refs: '8 refs'
            },
            {
                percent: '5.0%',
                range: '6000-12000 USDT',
                signals: '3 signals',
                refs: '15 refs'
            },
            {
                percent: '6.0%',
                range: '12000-20000 USDT',
                signals: '3 signals',
                refs: '25 refs'
            }
        ];
        
        // Обновляем описание
        const description = document.getElementById('vip-description');
        if (description && vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
        }
        
        // Обновляем детали
        const detail = vipDetails[currentIndex];
        if (detail) {
            document.getElementById('detail-percent').textContent = detail.percent;
            document.getElementById('detail-range').textContent = detail.range;
            document.getElementById('detail-signals').textContent = detail.signals;
            document.getElementById('detail-refs').textContent = detail.refs;
        }
        
        // Обновляем иконки замков
        updateLockIcons();
        
        // Обновляем фон карточек
        updateCardBackgrounds();
    }
    
    function updateCardBackgrounds() {
        const slides = document.querySelectorAll('.vip-slide');
        slides.forEach((slide, index) => {
            const card = slide.querySelector('.vip-card');
            if (card) {
                card.style.backgroundImage = `url('assets/vip${index + 1}.png')`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
                card.style.backgroundRepeat = 'no-repeat';
            }
        });
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
                    statusText.textContent = t('unlocked');
                } else {
                    // Заблокированные уровни
                    statusIcon.className = 'fas fa-lock';
                    statusIcon.style.color = '#cccccc';
                    statusText.textContent = t('locked');
                }
            }
        });
    }
    
    // Переход к следующей карточке
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            // Анимация перехода
            slides[currentIndex].classList.add('sliding-up');
            currentIndex++;
            slides[currentIndex].classList.add('sliding-down');
            updateCarouselPosition();
            
            // Сброс анимации через 300ms
            setTimeout(() => {
                slides.forEach(slide => {
                    slide.classList.remove('sliding-up', 'sliding-down');
                });
            }, 300);
        }
    }
    
    // Переход к предыдущей карточке
    function prevSlide() {
        if (currentIndex > 0) {
            // Анимация перехода
            slides[currentIndex].classList.add('sliding-down');
            currentIndex--;
            slides[currentIndex].classList.add('sliding-up');
            updateCarouselPosition();
            
            // Сброс анимации через 300ms
            setTimeout(() => {
                slides.forEach(slide => {
                    slide.classList.remove('sliding-up', 'sliding-down');
                });
            }, 300);
        }
    }
    
    // Переход к конкретному слайду
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Определяем направление анимации
        if (index > currentIndex) {
            slides[currentIndex].classList.add('sliding-up');
            slides[index].classList.add('sliding-down');
        } else if (index < currentIndex) {
            slides[currentIndex].classList.add('sliding-down');
            slides[index].classList.add('sliding-up');
        }
        
        currentIndex = index;
        updateCarouselPosition();
        
        // Сброс анимации через 300ms
        setTimeout(() => {
            slides.forEach(slide => {
                slide.classList.remove('sliding-up', 'sliding-down');
            });
        }, 300);
    }
    
    // Обработчики для свайпа на мобильных устройствах
    carousel.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        currentY = startY;
        isSwiping = true;
        track.style.transition = 'none';
        
        // Отменяем анимацию если она есть
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    }, { passive: true });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        
        // Ограничиваем максимальное смещение
        const maxDiff = slideHeight / 2;
        const boundedDiff = Math.max(-maxDiff, Math.min(maxDiff, diff));
        
        // Применяем промежуточное смещение при свайпе
        const currentOffset = -(currentIndex * slideHeight);
        track.style.transform = `translateY(${currentOffset + boundedDiff}px)`;
        
        e.preventDefault();
    }, { passive: false });
    
    carousel.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        const diff = currentY - startY;
        const threshold = 40; // Порог для смены слайда
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Свайп вниз - к предыдущей карточке
                prevSlide();
            } else {
                // Свайп вверх - к следующей карточке
                nextSlide();
            }
        } else {
            // Возвращаемся к текущей карточке
            updateCarouselPosition();
        }
        
        // Восстанавливаем плавную анимацию
        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        isSwiping = false;
    });
    
    // Обработчики для десктопа
    let mouseStartY = 0;
    let mouseCurrentY = 0;
    let mouseIsSwiping = false;
    
    carousel.addEventListener('mousedown', (e) => {
        mouseStartY = e.clientY;
        mouseCurrentY = mouseStartY;
        mouseIsSwiping = true;
        track.style.transition = 'none';
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!mouseIsSwiping) return;
        
        mouseCurrentY = e.clientY;
        const diff = mouseCurrentY - mouseStartY;
        
        // Ограничиваем максимальное смещение
        const maxDiff = slideHeight / 2;
        const boundedDiff = Math.max(-maxDiff, Math.min(maxDiff, diff));
        
        // Применяем промежуточное смещение
        const currentOffset = -(currentIndex * slideHeight);
        track.style.transform = `translateY(${currentOffset + boundedDiff}px)`;
    });
    
    carousel.addEventListener('mouseup', () => {
        if (!mouseIsSwiping) return;
        
        const diff = mouseCurrentY - mouseStartY;
        const threshold = 40;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarouselPosition();
        }
        
        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        mouseIsSwiping = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mouseleave', () => {
        if (mouseIsSwiping) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            updateCarouselPosition();
            mouseIsSwiping = false;
            carousel.style.cursor = 'grab';
        }
    });
    
    // Инициализация курсора
    carousel.style.cursor = 'grab';
    
    // Навигация с клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });
    
    // Адаптация при изменении размера окна
    window.addEventListener('resize', () => {
        updateCarouselPosition();
        updateCardBackgrounds();
    });
    
    // Инициализация
    updateCardBackgrounds();
    updateActiveSlide();
    updateVipDescription();
    
    // Экспортируем функции для внешнего использования
    window.goToVipSlide = goToSlide;
    window.updateVipCarousel = () => {
        updateCarouselPosition();
        updateVipDescription();
    };
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
