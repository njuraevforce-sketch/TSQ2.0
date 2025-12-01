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
                <div class="signals" id="signals-container">
                    <div class="signal"></div>
                    <div class="signal"></div>
                    <div class="signal"></div>
                </div>
                <div style="text-align: center; color: #ccc; font-size: 14px; margin-bottom: 15px;" id="signals-text">
                    Loading signals...
                </div>
                
                <button class="quant-btn" id="quant-btn">
                    AUTO QUANTIFICATION
                </button>
            </div>

            <!-- Процесс квантования -->
            <div class="quantum-process" id="quantum-process" style="display: none;">
                <div class="process-step" id="step-1">Analyzing market conditions...</div>
                <div class="process-step" id="step-2">Calculating quantum probabilities...</div>
                <div class="process-step" id="step-3">Executing quantum trades...</div>
                <div class="process-step" id="step-4">Quantum quantification complete!</div>
                <div class="process-step" id="profit-result" style="display: none; color: #52c41a; font-weight: bold;"></div>
            </div>

            <!-- VIP карточки -->
            <div class="vip-section">
                <div class="section-title">VIP Levels</div>
                <div class="vip-carousel-container">
                    <div class="vip-carousel" id="vip-carousel">
                        <div class="vip-card active" data-level="1">
                            <div class="vip-percent-left">2.2%</div>
                            <div class="vip-requirement-left">VIP 1</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon1.png" alt="VIP 1" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip1.png" alt="VIP 1" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">0-299 USDT</div>
                            <div class="vip-level-requirement">2.2% daily, 3 signals</div>
                        </div>
                        <div class="vip-card" data-level="2">
                            <div class="vip-percent-left">2.8%</div>
                            <div class="vip-requirement-left">VIP 2</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon2.png" alt="VIP 2" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip2.png" alt="VIP 2" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">300-1000 USDT</div>
                            <div class="vip-level-requirement">2.8% daily, 3 signals, 2 refs</div>
                        </div>
                        <div class="vip-card" data-level="3">
                            <div class="vip-percent-left">3.5%</div>
                            <div class="vip-requirement-left">VIP 3</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon3.png" alt="VIP 3" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip3.png" alt="VIP 3" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">1000-3500 USDT</div>
                            <div class="vip-level-requirement">3.5% daily, 3 signals, 5 refs</div>
                        </div>
                        <div class="vip-card" data-level="4">
                            <div class="vip-percent-left">4.0%</div>
                            <div class="vip-requirement-left">VIP 4</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon4.png" alt="VIP 4" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip4.png" alt="VIP 4" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">3500-6000 USDT</div>
                            <div class="vip-level-requirement">4.0% daily, 3 signals, 8 refs</div>
                        </div>
                        <div class="vip-card" data-level="5">
                            <div class="vip-percent-left">5.0%</div>
                            <div class="vip-requirement-left">VIP 5</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon5.png" alt="VIP 5" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip5.png" alt="VIP 5" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">6000-12000 USDT</div>
                            <div class="vip-level-requirement">5.0% daily, 3 signals, 15 refs</div>
                        </div>
                        <div class="vip-card" data-level="6">
                            <div class="vip-percent-left">6.0%</div>
                            <div class="vip-requirement-left">VIP 6</div>
                            <div style="text-align: center; margin-bottom: 10px;">
                                <img src="assets/vipicon6.png" alt="VIP 6" style="width: 40px; height: 40px;">
                            </div>
                            <img src="assets/vip6.png" alt="VIP 6" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                            <div class="vip-level-name">12000-20000 USDT</div>
                            <div class="vip-level-requirement">6.0% daily, 3 signals, 25 refs</div>
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
                    Basic level with standard returns. Invest 20 USDT to start earning 2.2% daily profit.
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    // Инициализация VIP карусели
    initVipCarousel();
    
    // Обновление времени UTC
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Загрузка данных пользователя
    await loadUserData();
    
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
        "Basic level with standard returns. Invest 20 USDT to start earning 2.2% daily profit.",
        "Enhanced returns with referral requirements. Invest 100 USDT and invite 2 friends to earn 2.8% daily.",
        "Premium level with team building. Invite 5 friends to unlock 3.5% daily profit.",
        "Advanced level with maximum benefits. Build a team of 7 referrals to earn 4.0% daily profit.",
        "Professional level for serious investors. Build a team of 15 referrals to earn 5.0% daily profit.",
        "Elite level with maximum returns. Build a team of 25 referrals to earn 6.0% daily profit."
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
                currentIndex = (currentIndex + 1) % cards.length;
            } else {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }
            updateCarousel();
        }
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                currentIndex = (currentIndex + 1) % cards.length;
            } else {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }
            updateCarousel();
        }
    });
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    // Обновляем отображение сигналов
    updateSignalsDisplay(user.signals_available);
    
    // Обновляем VIP уровень в карусели
    highlightCurrentVipLevel(user.vip_level);
}

function updateSignalsDisplay(signalsAvailable) {
    const signals = document.querySelectorAll('.signal');
    const signalsText = document.getElementById('signals-text');
    
    // Обновляем текст
    if (signalsText) {
        signalsText.textContent = `${signalsAvailable} Quantum Signals Available`;
    }
    
    // Обновляем визуальное отображение сигналов
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
    const cards = document.querySelectorAll('.vip-card');
    cards.forEach(card => {
        const level = parseInt(card.getAttribute('data-level'));
        if (level === userVipLevel) {
            card.style.border = '2px solid #52c41a';
            card.style.boxShadow = '0 0 10px rgba(82, 196, 26, 0.5)';
        }
    });
}

async function startQuantification() {
    const user = window.getCurrentUser();
    if (!user) {
        alert('Пожалуйста, войдите в систему');
        return;
    }
    
    if (user.signals_available <= 0) {
        alert('No quantum signals available! Please wait for daily refresh (18:00 UTC).');
        return;
    }
    
    const quantBtn = document.getElementById('quant-btn');
    const process = document.getElementById('quantum-process');
    
    // Отключаем кнопку
    quantBtn.disabled = true;
    quantBtn.style.opacity = '0.5';
    quantBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
    
    // Показываем процесс
    process.style.display = 'block';
    
    // Запускаем анимацию процесса
    await runQuantificationProcess();
    
    // Выполняем квантование
    const result = await window.performQuantification();
    
    if (result.success) {
        // Показываем результат
        const profitResult = document.getElementById('profit-result');
        profitResult.textContent = `Profit: +${result.profit.toFixed(2)} USDT`;
        profitResult.style.display = 'block';
        
        // Обновляем отображение сигналов
        updateSignalsDisplay(result.signals_left);
        
        // Через 3 секунды скрываем процесс
        setTimeout(() => {
            process.style.display = 'none';
            profitResult.style.display = 'none';
            
            // Сбрасываем шаги процесса
            document.querySelectorAll('.process-step').forEach(step => {
                step.classList.remove('active');
            });
            
            // Восстанавливаем кнопку
            quantBtn.disabled = false;
            quantBtn.style.opacity = '1';
            quantBtn.innerHTML = 'AUTO QUANTIFICATION';
            
            // Показываем сообщение об успехе
            alert(`Quantum quantification successful! Profit: +${result.profit.toFixed(2)} USDT`);
        }, 3000);
    } else {
        alert(result.message);
        
        // Восстанавливаем кнопку
        quantBtn.disabled = false;
        quantBtn.style.opacity = '1';
        quantBtn.innerHTML = 'AUTO QUANTIFICATION';
        
        // Скрываем процесс
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
