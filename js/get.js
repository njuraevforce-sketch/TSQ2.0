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
                <div style="text-align: center; color: #ccc; font-size: 14px; margin-bottom: 15px;" id="signals-text">
                    3 Quantum Signals Available
                </div>
                
                <button class="quant-btn" id="quant-btn">
                    AUTO QUANTIFICATION
                </button>
            </div>

            <!-- Процесс квантования - УПРОЩЕННЫЙ ВИД -->
            <div class="quantum-process-simple" id="quantum-process" style="display: none; text-align: center; color: white; margin: 20px 0;">
                <div id="process-text" style="font-size: 16px;"></div>
            </div>

            <!-- VIP карточки с процентами сверху -->
            <div class="vip-section">
                <div class="section-title">VIP Levels</div>
                <div class="vip-carousel-container">
                    <div class="vip-carousel" id="vip-carousel">
                        ${renderVipCards()}
                    </div>
                    <div class="vip-carousel-controls">
                        <button class="vip-carousel-prev">‹</button>
                        <div class="vip-carousel-dots" id="vip-dots"></div>
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

function renderVipCards() {
    const vipLevels = [
        { level: 1, percent: '2.6%', requirement: '20 USDT', desc: 'Basic level with standard returns' },
        { level: 2, percent: '3.1%', requirement: '100 USDT + 2 ref', desc: 'Enhanced returns with referral requirements' },
        { level: 3, percent: '3.5%', requirement: '5 ref', desc: 'Premium level with team building' },
        { level: 4, percent: '4.0%', requirement: '7 ref', desc: 'Advanced level with maximum benefits' },
        { level: 5, percent: '4.5%', requirement: '15 ref', desc: 'Professional level for serious investors' },
        { level: 6, percent: '5.5%', requirement: '25 ref', desc: 'Elite level with maximum returns' }
    ];
    
    return vipLevels.map((vip, index) => `
        <div class="vip-card ${index === 0 ? 'active' : ''}" data-level="${vip.level}">
            <div class="vip-percent-top">${vip.percent}</div>
            <div style="text-align: center; margin: 10px 0;">
                <img src="assets/vipicon${vip.level}.png" alt="VIP ${vip.level}" style="width: 40px; height: 40px;">
            </div>
            <img src="assets/vip${vip.level}.png" alt="VIP ${vip.level}" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
            <div class="vip-level-name">VIP ${vip.level}</div>
            <div class="vip-level-requirement">${vip.requirement}</div>
        </div>
    `).join('');
}

export function init() {
    checkAndResetSignals();
    initVipCarousel();
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    document.getElementById('quant-btn').addEventListener('click', startQuantification);
    
    // Обновляем отображение сигналов при загрузке
    if (app.currentUser) {
        updateSignalsDisplay(app.currentUser.id);
    }
}

function checkAndResetSignals() {
    if (!app.currentUser) return;
    
    const now = new Date();
    const currentUTCHours = now.getUTCHours();
    const lastReset = localStorage.getItem(`lastSignalReset_${app.currentUser.id}`);
    const today = now.toISOString().split('T')[0];
    
    // Если сейчас 18:00 UTC или позже, и последний сброс был не сегодня
    if (currentUTCHours >= 18) {
        if (lastReset !== today) {
            // Сбрасываем счетчик сигналов
            localStorage.setItem(`quant_${app.currentUser.id}_${today}`, '0');
            localStorage.setItem(`lastSignalReset_${app.currentUser.id}`, today);
            updateSignalsDisplay(app.currentUser.id);
        }
    }
}

async function startQuantification() {
    if (!app.currentUser) {
        alert('Please login first');
        return;
    }
    
    const user = app.currentUser;
    
    // Проверяем доступные сигналы (3 в день)
    const today = new Date().toISOString().split('T')[0];
    const lastQuantification = localStorage.getItem(`quant_${user.id}_${today}`);
    const usedCount = parseInt(lastQuantification || '0');
    
    if (usedCount >= 3) {
        alert('No quantum signals available for today!');
        return;
    }
    
    // Проверяем и обновляем VIP уровень
    await GLY.checkAndUpdateVIPLevel(user.id);
    
    // Получаем текущий уровень VIP и расчет прибыли
    const profit = await calculateProfit(user);
    
    const quantBtn = document.getElementById('quant-btn');
    const processDiv = document.getElementById('quantum-process');
    const processText = document.getElementById('process-text');
    
    quantBtn.disabled = true;
    quantBtn.style.opacity = '0.5';
    processDiv.style.display = 'block';
    
    // Процесс квантования - УПРОЩЕННЫЙ
    const steps = [
        { text: 'Analyzing market conditions...', duration: 2000 },
        { text: 'Calculating quantum probabilities...', duration: 2500 },
        { text: 'Executing quantum trades...', duration: 3000 },
        { text: `Quantum quantification complete! Profit: +${profit.toFixed(2)} USDT`, duration: 2000 }
    ];
    
    let currentStep = 0;
    
    function runStep() {
        if (currentStep < steps.length) {
            processText.textContent = steps[currentStep].text;
            setTimeout(runStep, steps[currentStep].duration);
            currentStep++;
        } else {
            // Завершаем процесс
            finishQuantification(profit, user);
        }
    }
    
    runStep();
}

async function calculateProfit(user) {
    // Расчет прибыли на основе уровня VIP
    const vipRates = {
        1: 0.026, // 2.6%
        2: 0.031, // 3.1%
        3: 0.035, // 3.5%
        4: 0.040, // 4.0%
        5: 0.045, // 4.5%
        6: 0.055  // 5.5%
    };
    
    const rate = vipRates[user.vip_level] || vipRates[1];
    // Делим на 3 так как 3 раза в день
    const profit = (user.balance * rate) / 3;
    
    return Math.max(profit, 0.01); // Минимальная прибыль
}

async function finishQuantification(profit, user) {
    // Обновляем баланс пользователя
    const newBalance = parseFloat(user.balance) + profit;
    await GLY.updateUserBalance(user.id, newBalance);
    
    // Добавляем запись о квантовании
    await GLY.addTransaction({
        user_id: user.id,
        type: 'quantification',
        amount: profit
    });
    
    // Обновляем реферальные начисления
    await updateReferralEarnings(user.id, profit);
    
    // Обновляем данные пользователя
    app.currentUser.balance = newBalance;
    localStorage.setItem('gly_user', JSON.stringify(app.currentUser));
    
    // Обновляем счетчик квантований за сегодня
    const today = new Date().toISOString().split('T')[0];
    const currentCount = parseInt(localStorage.getItem(`quant_${user.id}_${today}`) || '0');
    localStorage.setItem(`quant_${user.id}_${today}`, (currentCount + 1).toString());
    
    // Обновляем сигналы
    updateSignalsDisplay(user.id);
    
    // Включаем кнопку обратно
    const quantBtn = document.getElementById('quant-btn');
    quantBtn.disabled = false;
    quantBtn.style.opacity = '1';
}

async function updateReferralEarnings(userId, profit) {
    const supabase = GLY.initSupabase();
    
    // Находим реферальные связи
    const { data: referrals } = await supabase
        .from('referrals')
        .select('referrer_id, level')
        .eq('referred_id', userId);
    
    if (!referrals) return;
    
    // Проценты для каждого уровня
    const referralRates = { 1: 0.12, 2: 0.05, 3: 0.03 };
    
    for (const ref of referrals) {
        const referralProfit = profit * referralRates[ref.level];
        
        // Обновляем баланс реферера
        const { data: referrer } = await supabase
            .from('users')
            .select('balance')
            .eq('id', ref.referrer_id)
            .single();
            
        if (referrer) {
            const newBalance = parseFloat(referrer.balance) + referralProfit;
            await GLY.updateUserBalance(ref.referrer_id, newBalance);
            
            // Добавляем транзакцию
            await GLY.addTransaction({
                user_id: ref.referrer_id,
                type: `referral_level_${ref.level}`,
                amount: referralProfit
            });
        }
    }
}

function updateSignalsDisplay(userId) {
    const today = new Date().toISOString().split('T')[0];
    const usedCount = parseInt(localStorage.getItem(`quant_${userId}_${today}`) || '0');
    const signals = document.querySelectorAll('.signal');
    
    signals.forEach((signal, index) => {
        if (index < usedCount) {
            signal.classList.add('used');
        } else {
            signal.classList.remove('used');
        }
    });
    
    const signalsText = document.getElementById('signals-text');
    if (signalsText) {
        signalsText.textContent = `${3 - usedCount} Quantum Signals Available`;
    }
}

// Инициализация VIP карусели
function initVipCarousel() {
    const carousel = document.getElementById('vip-carousel');
    const cards = document.querySelectorAll('.vip-card');
    const dotsContainer = document.getElementById('vip-dots');
    const prevBtn = document.querySelector('.vip-carousel-prev');
    const nextBtn = document.querySelector('.vip-carousel-next');
    const description = document.getElementById('vip-description');
    
    let currentIndex = 0;
    
    const vipDescriptions = [
        "Basic level with standard returns. Invest 20 USDT to start earning 2.6% daily profit.",
        "Enhanced returns with referral requirements. Invest 100 USDT and invite 2 friends to earn 3.1% daily.",
        "Premium level with team building. Invite 5 friends to unlock 3.5% daily profit without investment.",
        "Advanced level with maximum benefits. Build a team of 7 referrals to earn 4.0% daily profit.",
        "Professional level for serious investors. Build a team of 15 referrals to earn 4.5% daily profit.",
        "Elite level with maximum returns. Build a team of 25 referrals to earn 5.5% daily profit."
    ];
    
    // Создаем точки
    cards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `vip-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.vip-dot');
    
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
    let startX = 0;
    let isDragging = false;
    
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

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const utcElement = document.getElementById('utc-time');
    if (utcElement) {
        utcElement.textContent = `UTC: ${utcTime}`;
    }
}
