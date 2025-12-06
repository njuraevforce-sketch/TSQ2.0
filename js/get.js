// Get section
import { t } from './translate.js';

export default function renderGet() {
    const lang = localStorage.getItem('gly_language') || 'en';
    const user = JSON.parse(localStorage.getItem('gly_user')) || {};
    const currentVipLevel = user.vip_level || 1;
    
    // Рассчитываем начальную позицию карусели (чтобы активная карточка была первой)
    const startTranslate = -((currentVipLevel - 1) * 100); // смещение в %
    
    // VIP уровни данные с путями к изображениям
    const vipLevelsData = [
        { 
            level: 1, 
            percent: '2.2%', 
            name: '0-299 USDT', 
            requirement: '2.2% daily, 3 signals',
            icon: `assets/vipicon1.png?v=${Date.now()}`,
            bg: `assets/vip1.png?v=${Date.now()}`
        },
        { 
            level: 2, 
            percent: '2.8%', 
            name: '300-1000 USDT', 
            requirement: '2.8% daily, 3 signals, 2 refs',
            icon: `assets/vipicon2.png?v=${Date.now()}`,
            bg: `assets/vip2.png?v=${Date.now()}`
        },
        { 
            level: 3, 
            percent: '3.5%', 
            name: '1000-3500 USDT', 
            requirement: '3.5% daily, 3 signals, 5 refs',
            icon: `assets/vipicon3.png?v=${Date.now()}`,
            bg: `assets/vip3.png?v=${Date.now()}`
        },
        { 
            level: 4, 
            percent: '4.0%', 
            name: '3500-6000 USDT', 
            requirement: '4.0% daily, 3 signals, 8 refs',
            icon: `assets/vipicon4.png?v=${Date.now()}`,
            bg: `assets/vip4.png?v=${Date.now()}`
        },
        { 
            level: 5, 
            percent: '5.0%', 
            name: '6000-12000 USDT', 
            requirement: '5.0% daily, 3 signals, 15 refs',
            icon: `assets/vipicon5.png?v=${Date.now()}`,
            bg: `assets/vip5.png?v=${Date.now()}`
        },
        { 
            level: 6, 
            percent: '6.0%', 
            name: '12000-20000 USDT', 
            requirement: '6.0% daily, 3 signals, 25 refs',
            icon: `assets/vipicon6.png?v=${Date.now()}`,
            bg: `assets/vip6.png?v=${Date.now()}`
        }
    ];
    
    // Генерируем VIP карточки
    let vipCardsHTML = '';
    vipLevelsData.forEach((vip, index) => {
        const isCurrentLevel = vip.level === currentVipLevel;
        const lockIcon = vip.level <= currentVipLevel ? 'fa-lock-open' : 'fa-lock';
        const lockText = vip.level <= currentVipLevel ? t('unlocked_this_level') : t('locked');
        const translateY = index * 100; // каждая карточка на 100% ниже предыдущей
        
        vipCardsHTML += `
            <div class="vip-swiper-item" data-level="${vip.level}" 
                 style="position: absolute; width: 100%; height: 100%; transform: translate(0px, ${translateY}%) translateZ(0px);">
                <div class="vip-card-container ${isCurrentLevel ? 'active' : ''}">
                    <div class="vip-card">
                        <div class="vip-card-header">
                            <div class="text-bold text-xxl">VIP${vip.level}</div>
                            <div class="flex align-center">
                                <div class="lock-icon">
                                    <i class="fas ${lockIcon}"></i>
                                </div>
                                <span class="lock-text">${lockText}</span>
                            </div>
                        </div>
                        <div class="vip-card-content">
                            <div class="vip-percent-left">${vip.percent}</div>
                            <div class="vip-requirement-left">VIP ${vip.level}</div>
                            <div class="vip-icon-wrapper">
                                <img src="${vip.icon}" alt="VIP ${vip.level}" class="vip-icon">
                            </div>
                            <img src="${vip.bg}" alt="VIP ${vip.level}" class="vip-bg-img">
                            <div class="vip-level-name">${vip.name}</div>
                            <div class="vip-level-requirement">${vip.requirement}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
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

            <!-- VIP cards - НОВАЯ КАРУСЕЛЬ -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                <div class="vip-carousel-new-container">
                    <div class="vip-swiper-wrapper">
                        <div class="vip-swiper-slides" id="vip-swiper-slides" 
                             style="left: 0px; right: 0px; bottom: 0px;">
                            ${vipCardsHTML}
                        </div>
                    </div>
                </div>
                <!-- Блок с описанием (остается снизу как было) -->
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
    const swiperSlides = document.getElementById('vip-swiper-slides');
    const vipItems = document.querySelectorAll('.vip-swiper-item');
    const description = document.getElementById('vip-description');
    
    if (!swiperSlides || vipItems.length === 0 || !description) {
        console.error('Carousel elements not found');
        return;
    }
    
    const user = window.getCurrentUser();
    const currentVipLevel = user ? user.vip_level : 1;
    let currentIndex = currentVipLevel - 1; // Начинаем с текущего уровня пользователя
    const totalSlides = vipItems.length;
    
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    // Функция обновления карусели
    function updateCarousel(index) {
        console.log('Updating carousel to index:', index);
        
        // Обновляем активный класс у карточек
        vipItems.forEach((item, i) => {
            const cardContainer = item.querySelector('.vip-card-container');
            const vipLevel = parseInt(item.getAttribute('data-level'));
            const isCurrentUserLevel = vipLevel === user.vip_level;
            
            if (cardContainer) {
                if (i === index) {
                    cardContainer.classList.add('active');
                } else {
                    cardContainer.classList.remove('active');
                }
                
                // Обновляем рамку для текущего уровня пользователя
                const vipCard = cardContainer.querySelector('.vip-card');
                if (vipCard) {
                    if (isCurrentUserLevel) {
                        vipCard.style.border = '2px solid #52c41a';
                        vipCard.style.boxShadow = '0 0 10px rgba(82, 196, 26, 0.5)';
                    } else {
                        vipCard.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        vipCard.style.boxShadow = 'none';
                    }
                }
            }
            
            // Обновляем иконки замков
            const lockIcon = item.querySelector('.lock-icon i');
            const lockText = item.querySelector('.lock-text');
            
            if (lockIcon) {
                lockIcon.className = vipLevel <= user.vip_level ? 'fas fa-lock-open' : 'fas fa-lock';
            }
            
            if (lockText) {
                lockText.textContent = vipLevel <= user.vip_level ? t('unlocked_this_level') : t('locked');
            }
        });
        
        // Обновляем позицию слайдера
        const translateY = -index * 100; // смещаем на -100% за каждый шаг
        vipItems.forEach(item => {
            item.style.transform = `translate(0px, ${parseInt(item.style.transform.match(/translate\(0px, (\d+)%\)/)?.[1] || 0) + translateY}%) translateZ(0px)`;
        });
        
        // Обновляем описание
        if (vipDescriptions[index]) {
            description.textContent = vipDescriptions[index];
            console.log('Description updated:', vipDescriptions[index]);
        }
    }
    
    // Инициализируем карусель с текущим уровнем
    updateCarousel(currentIndex);
    
    // Переменные для свайпа
    let startY = 0;
    let isDragging = false;
    let startTranslate = -currentIndex * 100;
    
    // Обработчики мыши
    swiperSlides.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        startTranslate = -currentIndex * 100;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const diffY = e.clientY - startY;
        const newTranslate = startTranslate + (diffY / swiperSlides.offsetHeight) * 100;
        
        // Применяем временное смещение
        vipItems.forEach(item => {
            item.style.transition = 'none';
            item.style.transform = `translate(0px, ${parseInt(item.style.transform.match(/translate\(0px, (\d+)%\)/)?.[1] || 0) + newTranslate}%) translateZ(0px)`;
        });
    });
    
    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endY = e.clientY;
        const diffY = endY - startY;
        
        // Определяем направление свайпа
        if (Math.abs(diffY) > 50) {
            if (diffY > 0 && currentIndex > 0) {
                // Свайп вниз - перейти к предыдущему слайду
                currentIndex--;
            } else if (diffY < 0 && currentIndex < totalSlides - 1) {
                // Свайп вверх - перейти к следующему слайду
                currentIndex++;
            }
        }
        
        updateCarousel(currentIndex);
    });
    
    // Обработчики тач-событий для мобильных устройств
    swiperSlides.addEventListener('touchstart', (e) => {
        isDragging = true;
        startY = e.touches[0].clientY;
        startTranslate = -currentIndex * 100;
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const diffY = e.touches[0].clientY - startY;
        const newTranslate = startTranslate + (diffY / swiperSlides.offsetHeight) * 100;
        
        // Применяем временное смещение
        vipItems.forEach(item => {
            item.style.transition = 'none';
            item.style.transform = `translate(0px, ${parseInt(item.style.transform.match(/translate\(0px, (\d+)%\)/)?.[1] || 0) + newTranslate}%) translateZ(0px)`;
        });
        e.preventDefault();
    });
    
    document.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endY = e.changedTouches[0].clientY;
        const diffY = endY - startY;
        
        // Определяем направление свайпа
        if (Math.abs(diffY) > 50) {
            if (diffY > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (diffY < 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            }
        }
        
        updateCarousel(currentIndex);
    });
    
    // Клик по карточкам для переключения
    vipItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel(currentIndex);
            }
        });
    });
    
    // Навигация с клавиатуры для тестирования
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && currentIndex > 0) {
            currentIndex--;
            updateCarousel(currentIndex);
        } else if (e.key === 'ArrowDown' && currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel(currentIndex);
        }
    });
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
    const vipItems = document.querySelectorAll('.vip-swiper-item');
    const swiperSlides = document.getElementById('vip-swiper-slides');
    
    if (!vipItems.length || !swiperSlides) return;
    
    // Устанавливаем текущий индекс
    const currentIndex = userVipLevel - 1;
    const vipDescriptions = [
        t('vip_description_1'),
        t('vip_description_2'),
        t('vip_description_3'),
        t('vip_description_4'),
        t('vip_description_5'),
        t('vip_description_6')
    ];
    
    // Обновляем активную карточку
    vipItems.forEach((item, index) => {
        const cardContainer = item.querySelector('.vip-card-container');
        const lockIcon = item.querySelector('.lock-icon i');
        const lockText = item.querySelector('.lock-text');
        const vipLevel = parseInt(item.getAttribute('data-level'));
        
        if (cardContainer) {
            if (vipLevel === userVipLevel) {
                cardContainer.classList.add('active');
                // Зеленая рамка для текущего уровня
                const vipCard = cardContainer.querySelector('.vip-card');
                if (vipCard) {
                    vipCard.style.border = '2px solid #52c41a';
                    vipCard.style.boxShadow = '0 0 10px rgba(82, 196, 26, 0.5)';
                }
            } else {
                cardContainer.classList.remove('active');
                const vipCard = cardContainer.querySelector('.vip-card');
                if (vipCard) {
                    vipCard.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    vipCard.style.boxShadow = 'none';
                }
            }
        }
        
        // Обновляем иконки замков
        if (lockIcon) {
            lockIcon.className = vipLevel <= userVipLevel ? 'fas fa-lock-open' : 'fas fa-lock';
        }
        
        if (lockText) {
            lockText.textContent = vipLevel <= userVipLevel ? t('unlocked_this_level') : t('locked');
        }
    });
    
    // Обновляем позицию карусели
    vipItems.forEach((item, index) => {
        const translateY = index * 100 - (currentIndex * 100);
        item.style.transform = `translate(0px, ${translateY}%) translateZ(0px)`;
        item.style.transition = 'transform 0.3s ease';
    });
    
    // Обновляем описание
    const description = document.getElementById('vip-description');
    if (description && vipDescriptions[currentIndex]) {
        description.textContent = vipDescriptions[currentIndex];
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
