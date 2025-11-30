// Get section
export default function renderGet() {
    return `
        <div class="card padding">
            <!-- Время UTC -->
            <div class="utc-time" id="utc-time">
                UTC: Loading...
            </div>
            
            <!-- Auto Quantification -->
            <div class="quantum-action">
                <div class="signals">
                    <div class="signal"></div>
                    <div class="signal"></div>
                    <div class="signal"></div>
                </div>
                <div style="text-align: center; color: #ccc; font-size: 14px; margin-bottom: 15px;">
                    3 Quantum Signals Available
                </div>
                
                <button class="quant-btn" id="quant-btn">
                    AUTO QUANTIFICATION
                </button>
            </div>

            <!-- Процесс квантования -->
            <div class="quantum-process" id="quantum-process">
                <div class="process-step" id="step-1">
                    <div class="process-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="process-text">Analyzing market conditions...</div>
                </div>
                <div class="process-step" id="step-2">
                    <div class="process-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <div class="process-text">Calculating quantum probabilities...</div>
                </div>
                <div class="process-step" id="step-3">
                    <div class="process-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="process-text">Executing quantum trades...</div>
                </div>
                <div class="process-step" id="step-4">
                    <div class="process-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="process-text">Quantum quantification complete!</div>
                </div>
                <div class="process-step" id="profit-result" style="display: none;">
                    <div class="process-icon" style="color: #52c41a;">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="process-text" style="font-weight: bold;">Profit: +43.59 USDT</div>
                </div>
            </div>

            <!-- VIP карточки с вертикальным свайпом -->
            <div class="vip-section">
                <div class="section-title">VIP Levels</div>
                <div class="vip-swiper-container" id="vip-swiper">
                    <div class="vip-swiper-wrapper">
                        <div class="vip-swiper-slide active">
                            <div class="vip-level-name">VIP 1</div>
                            <div class="vip-level-percent">2.6%</div>
                            <div class="vip-level-requirement">20 USDT</div>
                        </div>
                        <div class="vip-swiper-slide">
                            <div class="vip-level-name">VIP 2</div>
                            <div class="vip-level-percent">3.1%</div>
                            <div class="vip-level-requirement">100 USDT + 2 ref</div>
                        </div>
                        <div class="vip-swiper-slide">
                            <div class="vip-level-name">VIP 3</div>
                            <div class="vip-level-percent">3.5%</div>
                            <div class="vip-level-requirement">5 ref</div>
                        </div>
                        <div class="vip-swiper-slide">
                            <div class="vip-level-name">VIP 4</div>
                            <div class="vip-level-percent">4.0%</div>
                            <div class="vip-level-requirement">7 ref</div>
                        </div>
                    </div>
                </div>
                <div class="vip-description" id="vip-description">
                    Basic level with standard returns. Invest 20 USDT to start earning 2.6% daily profit.
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Инициализация VIP свайпера
    initVipSwiper();
    
    // Обновление времени UTC
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Обработчик кнопки квантования
    document.getElementById('quant-btn').addEventListener('click', startQuantification);
}

function startQuantification() {
    const signals = document.querySelectorAll('.signal');
    let availableSignals = 0;
    
    // Проверяем доступные сигналы
    signals.forEach(signal => {
        if (!signal.classList.contains('used')) {
            availableSignals++;
        }
    });
    
    if (availableSignals > 0) {
        // Используем один сигнал
        for (let i = 0; i < signals.length; i++) {
            if (!signals[i].classList.contains('used')) {
                signals[i].classList.add('used');
                break;
            }
        }
        
        // Показываем процесс квантования
        const process = document.getElementById('quantum-process');
        const quantBtn = document.getElementById('quant-btn');
        
        quantBtn.disabled = true;
        quantBtn.style.opacity = '0.5';
        process.style.display = 'block';
        
        // Запускаем этапы процесса
        runQuantificationProcess();
        
    } else {
        alert('No quantum signals available! Please wait for daily refresh.');
    }
}

function runQuantificationProcess() {
    const steps = [
        { id: 'step-1', duration: 2000 },
        { id: 'step-2', duration: 2500 },
        { id: 'step-3', duration: 3000 },
        { id: 'step-4', duration: 1500 }
    ];
    
    let currentStep = 0;
    
    function runStep() {
        if (currentStep > 0) {
            // Убираем активный класс с предыдущего шага
            document.getElementById(steps[currentStep-1].id).classList.remove('active');
        }
        
        if (currentStep < steps.length) {
            // Активируем текущий шаг
            document.getElementById(steps[currentStep].id).classList.add('active');
            
            // Переходим к следующему шагу после задержки
            setTimeout(runStep, steps[currentStep].duration);
            currentStep++;
        } else {
            // Показываем результат
            document.getElementById('profit-result').style.display = 'block';
            
            // Включаем кнопку обратно через 3 секунды
            setTimeout(function() {
                const quantBtn = document.getElementById('quant-btn');
                quantBtn.disabled = false;
                quantBtn.style.opacity = '1';
            }, 3000);
        }
    }
    
    // Запускаем первый шаг
    runStep();
}

function initVipSwiper() {
    const swiperWrapper = document.querySelector('.vip-swiper-wrapper');
    const slides = document.querySelectorAll('.vip-swiper-slide');
    const description = document.getElementById('vip-description');
    const slideHeight = 180;
    let currentSlide = 0;
    
    const vipDescriptions = [
        "Basic level with standard returns. Invest 20 USDT to start earning 2.6% daily profit.",
        "Enhanced returns with referral requirements. Invest 100 USDT and invite 2 friends to earn 3.1% daily.",
        "Premium level with team building. Invite 5 friends to unlock 3.5% daily profit without investment.",
        "Advanced level with maximum benefits. Build a team of 7 referrals to earn 4.0% daily profit."
    ];
    
    // Обработчик свайпа
    let startY = 0;
    let currentY = 0;
    let isSwiping = false;
    
    swiperWrapper.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isSwiping = true;
        e.preventDefault();
    });
    
    swiperWrapper.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        currentY = e.touches[0].clientY;
        e.preventDefault();
    });
    
    swiperWrapper.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        const diffY = startY - currentY;
        const threshold = 50;
        
        if (Math.abs(diffY) > threshold) {
            if (diffY > 0 && currentSlide < slides.length - 1) {
                currentSlide++;
            } else if (diffY < 0 && currentSlide > 0) {
                currentSlide--;
            }
            
            updateSwiper();
        }
        
        isSwiping = false;
    });
    
    // Для тестирования на ПК
    swiperWrapper.addEventListener('mousedown', (e) => {
        startY = e.clientY;
        isSwiping = true;
        e.preventDefault();
    });
    
    swiperWrapper.addEventListener('mousemove', (e) => {
        if (!isSwiping) return;
        currentY = e.clientY;
        e.preventDefault();
    });
    
    swiperWrapper.addEventListener('mouseup', () => {
        if (!isSwiping) return;
        
        const diffY = startY - currentY;
        const threshold = 50;
        
        if (Math.abs(diffY) > threshold) {
            if (diffY > 0 && currentSlide < slides.length - 1) {
                currentSlide++;
            } else if (diffY < 0 && currentSlide > 0) {
                currentSlide--;
            }
            
            updateSwiper();
        }
        
        isSwiping = false;
    });
    
    function updateSwiper() {
        const translateY = -currentSlide * slideHeight;
        swiperWrapper.style.transform = `translateY(${translateY}px)`;
        
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        description.textContent = vipDescriptions[currentSlide];
    }
}

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const utcElement = document.getElementById('utc-time');
    if (utcElement) {
        utcElement.textContent = `UTC: ${utcTime}`;
    }
}
