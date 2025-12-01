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

            <!-- Процесс квантования без иконок -->
            <div class="quantum-process" id="quantum-process">
                <div class="process-step" id="step-1">
                    <div class="process-text">Analyzing market conditions...</div>
                </div>
                <div class="process-step" id="step-2">
                    <div class="process-text">Calculating quantum probabilities...</div>
                </div>
                <div class="process-step" id="step-3">
                    <div class="process-text">Executing quantum trades...</div>
                </div>
                <div class="process-step" id="step-4">
                    <div class="process-text">Quantum quantification complete!</div>
                </div>
                <div class="process-step" id="profit-result" style="display: none;">
                    <div class="process-text" style="font-weight: bold; color: #52c41a;">Profit: +43.59 USDT</div>
                </div>
            </div>

            <!-- VIP карточки с улучшенной каруселью -->
            <div class="vip-section">
                <div class="section-title">VIP Levels</div>
                <div class="vip-carousel-container">
                    <div class="vip-carousel" id="vip-carousel">
                        <div class="vip-card active" data-level="1">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon1.png" alt="VIP 1" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip1.png" alt="VIP 1" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 1</div>
                            <div class="vip-level-percent">2.6%</div>
                            <div class="vip-level-requirement">20 USDT</div>
                        </div>
                        <div class="vip-card" data-level="2">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon2.png" alt="VIP 2" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip2.png" alt="VIP 2" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 2</div>
                            <div class="vip-level-percent">3.1%</div>
                            <div class="vip-level-requirement">100 USDT + 2 ref</div>
                        </div>
                        <div class="vip-card" data-level="3">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon3.png" alt="VIP 3" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip3.png" alt="VIP 3" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 3</div>
                            <div class="vip-level-percent">3.5%</div>
                            <div class="vip-level-requirement">5 ref</div>
                        </div>
                        <div class="vip-card" data-level="4">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon4.png" alt="VIP 4" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip4.png" alt="VIP 4" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 4</div>
                            <div class="vip-level-percent">4.0%</div>
                            <div class="vip-level-requirement">7 ref</div>
                        </div>
                        <div class="vip-card" data-level="5">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon5.png" alt="VIP 5" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip5.png" alt="VIP 5" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 5</div>
                            <div class="vip-level-percent">4.5%</div>
                            <div class="vip-level-requirement">15 ref</div>
                        </div>
                        <div class="vip-card" data-level="6">
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon6.png" alt="VIP 6" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip6.png" alt="VIP 6" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">VIP 6</div>
                            <div class="vip-level-percent">5.5%</div>
                            <div class="vip-level-requirement">25 ref</div>
                        </div>
                    </div>
                    <div class="vip-carousel-controls">
                        <button class="vip-carousel-prev">‹</button>
                        <div class="vip-carousel-dots">
                            <span class="vip-dot active" data-index="0"></span>
                            <span class="vip-dot" data-index="1"></span>
                            <span class="vip-dot" data-index="2"></span>
                            <span class="vip-dot" data-index="3"></span>
                            <span class="vip-dot" data-index="4"></span>
                            <span class="vip-dot" data-index="5"></span>
                        </div>
                        <button class="vip-carousel-next">›</button>
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
    // Инициализация VIP карусели
    initVipCarousel();
    
    // Обновление времени UTC
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Обработчик кнопки квантования
    document.getElementById('quant-btn').addEventListener('click', startQuantification);
}

function initVipCarousel() {
    const carousel = document.getElementById('vip-carousel');
    const cards = document.querySelectorAll('.vip-card');
    const dots = document.querySelectorAll('.vip-dot');
    const prevBtn = document.querySelector('.vip-carousel-prev');
    const nextBtn = document.querySelector('.vip-carousel-next');
    const description = document.getElementById('vip-description');
    
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    
    const vipDescriptions = [
        "Basic level with standard returns. Invest 20 USDT to start earning 2.6% daily profit.",
        "Enhanced returns with referral requirements. Invest 100 USDT and invite 2 friends to earn 3.1% daily.",
        "Premium level with team building. Invite 5 friends to unlock 3.5% daily profit without investment.",
        "Advanced level with maximum benefits. Build a team of 7 referrals to earn 4.0% daily profit.",
        "Professional level for serious investors. Build a team of 15 referrals to earn 4.5% daily profit.",
        "Elite level with maximum returns. Build a team of 25 referrals to earn 5.5% daily profit."
    ];
    
    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
        
        description.textContent = vipDescriptions[currentIndex];
        
        // Прокрутка карусели
        carousel.scrollTo({
            left: currentIndex * carousel.offsetWidth,
            behavior: 'smooth'
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // Обработчики для свайпа
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    carousel.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = 'grab';
        
        const endX = e.pageX - carousel.offsetLeft;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Свайп влево
                currentIndex = (currentIndex + 1) % cards.length;
            } else {
                // Свайп вправо
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }
            updateCarousel();
        }
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    // Touch events для мобильных устройств
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Свайп влево
                currentIndex = (currentIndex + 1) % cards.length;
            } else {
                // Свайп вправо
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }
            updateCarousel();
        }
    });
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

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const utcElement = document.getElementById('utc-time');
    if (utcElement) {
        utcElement.textContent = `UTC: ${utcTime}`;
    }
}
