// home.js - UPDATED with carousel instead of video (auto-only)
import { t } from './translate.js';

export default function renderHome() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Image Carousel -->
        <div class="banner-section">
            <div class="banner">
                <div class="carousel-container" id="carousel-container">
                    <div class="carousel-track" id="carousel-track">
                        <div class="carousel-slide active">
                            <img src="assets/banner.png" alt="${t('banner_1')}" data-translate-alt="banner1" loading="lazy">
                        </div>
                        <div class="carousel-slide">
                            <img src="assets/banner1.png" alt="${t('banner_2')}" data-translate-alt="banner2" loading="lazy">
                        </div>
                        <div class="carousel-slide">
                            <img src="assets/banner2.png" alt="${t('banner_3')}" data-translate-alt="banner3" loading="lazy">
                        </div>
                    </div>
                    <div class="carousel-indicators" id="carousel-indicators">
                        <span class="indicator active"></span>
                        <span class="indicator"></span>
                        <span class="indicator"></span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Running line -->
        <div class="notice-section">
            <div class="notice-bar">
                <div class="notice-icon">🚀</div>
                <div class="notice-content">
                    <div class="notice-text">
                        GLY - Quantum Investment Platform │ Advanced AI Algorithms │ Daily Returns 2.2%-6% │ 6 VIP Levels │ Multi-Level Referral System │ Secure & Transparent
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation icons -->
        <div class="nav-section">
            <div class="nav-grid">
                <a href="#" class="nav-item" data-section="company">
                    <div class="nav-icon">
                        <img src="assets/company.png" alt="${t('company')}" data-translate-alt="company">
                    </div>
                    <div class="nav-text" data-translate="company">Company</div>
                </a>
                <a href="#" class="nav-item" data-section="deposit">
                    <div class="nav-icon">
                        <img src="assets/deposit.png" alt="${t('deposit')}" data-translate-alt="deposit">
                    </div>
                    <div class="nav-text" data-translate="deposit">Deposit</div>
                </a>
                <a href="#" class="nav-item" data-section="withdraw">
                    <div class="nav-icon">
                        <img src="assets/withdraw.png" alt="${t('withdraw')}" data-translate-alt="withdraw">
                    </div>
                    <div class="nav-text" data-translate="withdraw">Withdraw</div>
                </a>
                <a href="#" class="nav-item" data-section="invite">
                    <div class="nav-icon">
                        <img src="assets/invite.png" alt="${t('invite')}" data-translate-alt="invite">
                    </div>
                    <div class="nav-text" data-translate="invite">Invite</div>
                </a>
                <a href="#" class="nav-item" data-section="team">
                    <div class="nav-icon">
                        <img src="assets/team.png" alt="${t('team')}" data-translate-alt="team">
                    </div>
                    <div class="nav-text" data-translate="team">Team</div>
                </a>
                <a href="#" class="nav-item" data-section="rules">
                    <div class="nav-icon">
                        <img src="assets/rules.png" alt="${t('rules')}" data-translate-alt="rules">
                    </div>
                    <div class="nav-text" data-translate="rules">Rules</div>
                </a>
            </div>
        </div>

        <!-- Crypto prices -->
        <div class="quantum-section">
            <div class="quantum-header">
                <div class="quantum-title" data-translate="live_crypto_prices">Live Crypto Prices</div>
                <div class="text-gray" style="font-size: 12px; font-weight: normal;" id="last-updated" data-translate="updating">
                    Updating...
                </div>
            </div>
            <div class="crypto-grid" id="crypto-prices">
                <div style="color: #ccc; text-align: center; padding: 20px;">
                    <span data-translate="loading_data">Loading live prices...</span>
                </div>
            </div>
        </div>

        <!-- Partners block -->
        <div class="partners-section" style="margin-bottom: 80px;">
            <div class="section-title" data-translate="our_partners">Our Partners</div>
            <img src="assets/partners.png" alt="${t('our_partners')}" style="width: 100%; border-radius: 10px;">
        </div>
    `;
}

export function init() {
    // Navigation icons handlers
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.currentTarget.getAttribute('data-section');
            window.showSection(section);
        });
    });

    // Initialize carousel
    initCarousel();
    
    // Load crypto prices
    loadCryptoPrices();
    setInterval(loadCryptoPrices, 30000);
    
    // Show welcome banner on first visit
    setTimeout(() => {
        showWelcomeBanner();
    }, 1000);
}

function initCarousel() {
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    
    // Function to update carousel position
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Update slide classes
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Function to go to specific slide
    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Function for next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Auto slide function
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    // Start auto sliding
    startAutoSlide();
}

function showWelcomeBanner() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    // Check if banner was shown today
    const lastShown = localStorage.getItem('welcome_banner_shown');
    const today = new Date().toDateString();
    
    if (lastShown !== today) {
        setTimeout(() => {
            const bannerContent = `
                <div style="text-align: center; padding: 10px;">
                    <h3 style="color: #4e7771; margin-bottom: 15px;">${t('welcome_bonus_title')}</h3>
                    <p style="margin-bottom: 10px; color: #333;">${t('welcome_bonus_message')}</p>
                    
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                        <p style="margin: 5px 0; color: #333;">First deposit $50: $2 USDT (referral bonus $5 USDT)</p>
                        <p style="margin: 5px 0; color: #333;">First deposit $100: $5 USDT (referral bonus $10 USDT)</p>
                        <p style="margin: 5px 0; color: #333;">First deposit $300: $10 USDT (referral bonus $15 USDT)</p>
                        <p style="margin: 5px 0; color: #333;">First deposit $500: $20 USDT (referral bonus $30 USDT)</p>
                        <p style="margin: 5px 0; color: #333;">First deposit $800: $30 USDT (referral bonus $50 USDT)</p>
                    </div>
                </div>
            `;
            
            window.showCustomModal(t('welcome_bonus_title'), bannerContent, () => {
                localStorage.setItem('welcome_banner_shown', today);
            });
        }, 1500);
    }
}

async function loadCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-prices');
    const lastUpdatedElement = document.getElementById('last-updated');
    
    if (!cryptoContainer) return;

    // Check internet connection
    if (!navigator.onLine) {
        cryptoContainer.innerHTML = `<div style="color: #ccc; text-align: center; padding: 20px;">${t('offline')}</div>`;
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = t('offline');
        }
        return;
    }

    try {
        // Update status
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = t('updating');
        }

        // Use Binance API - single request for all symbols
        const symbols = 'BTCUSDT,ETHUSDT,BNBUSDT,XRPUSDT,ADAUSDT,SOLUSDT,DOTUSDT,DOGEUSDT';
        const response = await fetch(
            `https://api.binance.com/api/v3/ticker/24hr?symbols=${encodeURIComponent(JSON.stringify(symbols.split(',')))}`
        );
        
        if (!response.ok) {
            throw new Error(`Binance API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Crypto array with data mapping
        const cryptoMapping = {
            'BTCUSDT': { symbol: 'BTC', name: 'Bitcoin', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
            'ETHUSDT': { symbol: 'ETH', name: 'Ethereum', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
            'BNBUSDT': { symbol: 'BNB', name: 'Binance Coin', icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
            'XRPUSDT': { symbol: 'XRP', name: 'Ripple', icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
            'ADAUSDT': { symbol: 'ADA', name: 'Cardano', icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
            'SOLUSDT': { symbol: 'SOL', name: 'Solana', icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
            'DOTUSDT': { symbol: 'DOT', name: 'Polkadot', icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
            'DOGEUSDT': { symbol: 'DOGE', name: 'Dogecoin', icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' }
        };
        
        // Sort in the desired order
        const orderedHtml = [];
        Object.keys(cryptoMapping).forEach(symbol => {
            const item = data.find(d => d.symbol === symbol);
            if (item) {
                const mapping = cryptoMapping[symbol];
                const price = parseFloat(item.lastPrice);
                const change = parseFloat(item.priceChangePercent);
                const changeClass = change >= 0 ? 'change-positive' : 'change-negative';
                const changeSign = change >= 0 ? '+' : '';
                const formattedPrice = price > 1 ? 
                    price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) :
                    price.toLocaleString('en-US', {minimumFractionDigits: 4, maximumFractionDigits: 4});
                
                orderedHtml.push(`
                    <div class="crypto-item">
                        <div class="crypto-info">
                            <div class="crypto-icon">
                                <img src="${mapping.icon}" alt="${mapping.name}" onerror="this.src='assets/crypto/placeholder.png'">
                            </div>
                            <div>
                                <span class="crypto-name">${mapping.name}</span>
                                <span class="crypto-pair">/USDT</span>
                            </div>
                        </div>
                        <div class="flex align-center">
                            <div class="crypto-price">$${formattedPrice}</div>
                            <div class="crypto-change ${changeClass}">${changeSign}${change.toFixed(2)}%</div>
                        </div>
                    </div>
                `);
            }
        });
        
        if (orderedHtml.length > 0) {
            cryptoContainer.innerHTML = orderedHtml.join('');
        } else {
            throw new Error('No valid data received from API');
        }
        
        // Update last updated time
        if (lastUpdatedElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            lastUpdatedElement.textContent = `${t('updated')} ${timeString}`;
        }
        
    } catch (error) {
        console.error('Error loading crypto prices:', error);
        
        // Fallback: show static data with error message
        const fallbackData = [
            { symbol: 'BTC', name: 'Bitcoin', price: 88405.00, change: -2.74, icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
            { symbol: 'ETH', name: 'Ethereum', price: 2897.01, change: -3.33, icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
            { symbol: 'BNB', name: 'Binance Coin', price: 850.67, change: -2.78, icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
            { symbol: 'XRP', name: 'Ripple', price: 2.11, change: -4.28, icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
            { symbol: 'ADA', name: 'Cardano', price: 0.40, change: -4.21, icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
            { symbol: 'SOL', name: 'Solana', price: 130.18, change: -4.43, icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
            { symbol: 'DOT', name: 'Polkadot', price: 2.12, change: -6.50, icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
            { symbol: 'DOGE', name: 'Dogecoin', price: 0.15, change: -3.21, icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' }
        ];
        
        let fallbackHtml = '';
        fallbackData.forEach(crypto => {
            const changeClass = crypto.change >= 0 ? 'change-positive' : 'change-negative';
            const changeSign = crypto.change >= 0 ? '+' : '';
            const formattedPrice = crypto.price > 1 ? 
                crypto.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) :
                crypto.price.toLocaleString('en-US', {minimumFractionDigits: 4, maximumFractionDigits: 4});
            
            fallbackHtml += `
                <div class="crypto-item">
                    <div class="crypto-info">
                        <div class="crypto-icon">
                            <img src="${crypto.icon}" alt="${crypto.name}" onerror="this.src='assets/crypto/placeholder.png'">
                        </div>
                        <div>
                            <span class="crypto-name">${crypto.name}</span>
                            <span class="crypto-pair">/USDT</span>
                        </div>
                    </div>
                    <div class="flex align-center">
                        <div class="crypto-price">$${formattedPrice}</div>
                        <div class="crypto-change ${changeClass}">${changeSign}${crypto.change}%</div>
                    </div>
                </div>
            `;
        });
        
        cryptoContainer.innerHTML = `
            <div style="margin-bottom: 10px; color: #f9ae3d; font-size: 12px; text-align: center;">
                ${t('cached_data')} ${error.message || ''}
            </div>
            ${fallbackHtml}
        `;
        
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = t('cached_data');
        }
    }
}
