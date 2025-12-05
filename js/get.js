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

            <!-- VIP cards -->
            <div class="vip-section">
                <div class="section-title" data-translate="vip_levels">VIP Levels</div>
                <div class="vip-carousel-container">
                    <div class="vip-carousel" id="vip-carousel">
                        <div class="vip-card active" data-level="1">
                            <div class="vip-percent-left">2.2%</div>
                            <div class="vip-requirement-left">VIP 1</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon1.png?v=${Date.now()}" alt="VIP 1" class="vip-icon">
                            </div>
                            <img src="assets/vip1.png?v=${Date.now()}" alt="VIP 1" class="vip-bg-img">
                            <div class="vip-level-name">0-299 USDT</div>
                            <div class="vip-level-requirement">2.2% daily, 3 signals</div>
                        </div>
                        <div class="vip-card" data-level="2">
                            <div class="vip-percent-left">2.8%</div>
                            <div class="vip-requirement-left">VIP 2</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon2.png?v=${Date.now()}" alt="VIP 2" class="vip-icon">
                            </div>
                            <img src="assets/vip2.png?v=${Date.now()}" alt="VIP 2" class="vip-bg-img">
                            <div class="vip-level-name">300-1000 USDT</div>
                            <div class="vip-level-requirement">2.8% daily, 3 signals, 2 refs</div>
                        </div>
                        <div class="vip-card" data-level="3">
                            <div class="vip-percent-left">3.5%</div>
                            <div class="vip-requirement-left">VIP 3</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon3.png?v=${Date.now()}" alt="VIP 3" class="vip-icon">
                            </div>
                            <img src="assets/vip3.png?v=${Date.now()}" alt="VIP 3" class="vip-bg-img">
                            <div class="vip-level-name">1000-3500 USDT</div>
                            <div class="vip-level-requirement">3.5% daily, 3 signals, 5 refs</div>
                        </div>
                        <div class="vip-card" data-level="4">
                            <div class="vip-percent-left">4.0%</div>
                            <div class="vip-requirement-left">VIP 4</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon4.png?v=${Date.now()}" alt="VIP 4" class="vip-icon">
                            </div>
                            <img src="assets/vip4.png?v=${Date.now()}" alt="VIP 4" class="vip-bg-img">
                            <div class="vip-level-name">3500-6000 USDT</div>
                            <div class="vip-level-requirement">4.0% daily, 3 signals, 8 refs</div>
                        </div>
                        <div class="vip-card" data-level="5">
                            <div class="vip-percent-left">5.0%</div>
                            <div class="vip-requirement-left">VIP 5</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon5.png?v=${Date.now()}" alt="VIP 5" class="vip-icon">
                            </div>
                            <img src="assets/vip5.png?v=${Date.now()}" alt="VIP 5" class="vip-bg-img">
                            <div class="vip-level-name">6000-12000 USDT</div>
                            <div class="vip-level-requirement">5.0% daily, 3 signals, 15 refs</div>
                        </div>
                        <div class="vip-card" data-level="6">
                            <div class="vip-percent-left">6.0%</div>
                            <div class="vip-requirement-left">VIP 6</div>
                            <div class="vip-icon-wrapper">
                                <img src="assets/vipicon6.png?v=${Date.now()}" alt="VIP 6" class="vip-icon">
                            </div>
                            <img src="assets/vip6.png?v=${Date.now()}" alt="VIP 6" class="vip-bg-img">
                            <div class="vip-level-name">12000-20000 USDT</div>
                            <div class="vip-level-requirement">6.0% daily, 3 signals, 25 refs</div>
                        </div>
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
    const carousel = document.getElementById('vip-carousel');
    const cards = document.querySelectorAll('.vip-card');
    const description = document.getElementById('vip-description');
    
    if (!carousel || cards.length === 0 || !description) {
        console.error('Carousel elements not found');
        return;
    }
    
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    
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
        
        // Update cards
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        // Update description
        if (vipDescriptions[currentIndex]) {
            description.textContent = vipDescriptions[currentIndex];
            console.log('Description updated:', vipDescriptions[currentIndex]);
        }
        
        // Scroll to active card
        const cardWidth = cards[0].offsetWidth;
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }
    
    // Initialize carousel
    updateCarousel();
    
    // Mouse drag events
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
        
        console.log('Mouse up - diffX:', diffX, 'threshold:', threshold);
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentIndex < cards.length - 1) {
                currentIndex++;
                console.log('Swiped right, new index:', currentIndex);
            } else if (diffX < 0 && currentIndex > 0) {
                currentIndex--;
                console.log('Swiped left, new index:', currentIndex);
            }
            updateCarousel();
        }
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchmove', (e) => {
        e.preventDefault();
    });
    
    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const threshold = 50;
        
        console.log('Touch end - diffX:', diffX, 'threshold:', threshold);
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentIndex < cards.length - 1) {
                currentIndex++;
                console.log('Swiped right (touch), new index:', currentIndex);
            } else if (diffX < 0 && currentIndex > 0) {
                currentIndex--;
                console.log('Swiped left (touch), new index:', currentIndex);
            }
            updateCarousel();
        }
    });
    
    // Also add click navigation for cards
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
    
    // Add keyboard navigation for testing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
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
