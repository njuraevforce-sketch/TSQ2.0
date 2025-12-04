// home.js - UPDATED with deposit navigation
import { t } from './translate.js';

export default function renderHome() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Video banner with play button -->
        <div class="banner-section">
            <div class="banner">
                <div class="video-container" id="video-container">
                    <video class="banner-video" id="banner-video" muted playsinline>
                        <source src="assets/company.MP4" type="video/mp4">
                        <span data-translate="video_error">Your browser does not support the video tag.</span>
                    </video>
                    <div class="video-overlay" id="video-overlay">
                        <div class="play-btn" id="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
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
        <div class="partners-section">
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

    // Video player setup
    setupVideoPlayer();
    
    // Load crypto prices
    loadCryptoPrices();
    setInterval(loadCryptoPrices, 30000);
    
    // Show welcome banner on first visit
    setTimeout(() => {
        showWelcomeBanner();
    }, 1000);
}

function setupVideoPlayer() {
    const video = document.getElementById('banner-video');
    const overlay = document.getElementById('video-overlay');
    const playBtn = document.getElementById('play-btn');
    
    if (!video) return;
    
    // Ensure video doesn't autoplay
    video.autoplay = false;
    video.controls = false;
    video.loop = false;
    
    // Play button click handler
    playBtn.addEventListener('click', () => {
        video.play().catch(e => {
            console.log('Video play failed:', e);
            window.showCustomAlert(t('video_error'));
        });
        overlay.style.display = 'none';
        video.setAttribute('controls', 'true');
    });
    
    // When video ends or pauses, show play button again
    video.addEventListener('ended', () => {
        overlay.style.display = 'flex';
        video.removeAttribute('controls');
        video.currentTime = 0;
    });
    
    video.addEventListener('pause', () => {
        if (video.currentTime < video.duration) {
            overlay.style.display = 'flex';
            video.removeAttribute('controls');
        }
    });
    
    // Prevent video from going fullscreen
    video.addEventListener('webkitbeginfullscreen', (e) => {
        e.preventDefault();
        video.webkitExitFullscreen();
    });
    
    video.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });
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

        // Use CoinGecko API
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,dogecoin&vs_currencies=usd&include_24hr_change=true'
        );
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Crypto array with data
        const cryptoData = [
            { 
                id: 'bitcoin', 
                symbol: 'BTC', 
                name: 'Bitcoin', 
                icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' 
            },
            { 
                id: 'ethereum', 
                symbol: 'ETH', 
                name: 'Ethereum', 
                icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' 
            },
            { 
                id: 'binancecoin', 
                symbol: 'BNB', 
                name: 'Binance Coin', 
                icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' 
            },
            { 
                id: 'ripple', 
                symbol: 'XRP', 
                name: 'Ripple', 
                icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' 
            },
            { 
                id: 'cardano', 
                symbol: 'ADA', 
                name: 'Cardano', 
                icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' 
            },
            { 
                id: 'solana', 
                symbol: 'SOL', 
                name: 'Solana', 
                icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' 
            },
            { 
                id: 'polkadot', 
                symbol: 'DOT', 
                name: 'Polkadot', 
                icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' 
            },
            { 
                id: 'dogecoin', 
                symbol: 'DOGE', 
                name: 'Dogecoin', 
                icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' 
            }
        ];
        
        let html = '';
        
        cryptoData.forEach(crypto => {
            const cryptoInfo = data[crypto.id];
            if (cryptoInfo && cryptoInfo.usd && cryptoInfo.usd_24h_change !== undefined) {
                const price = cryptoInfo.usd;
                const change = cryptoInfo.usd_24h_change;
                const changeClass = change >= 0 ? 'change-positive' : 'change-negative';
                const changeSign = change >= 0 ? '+' : '';
                const formattedPrice = price > 1 ? 
                    price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) :
                    price.toLocaleString('en-US', {minimumFractionDigits: 4, maximumFractionDigits: 4});
                
                html += `
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
                            <div class="crypto-change ${changeClass}">${changeSign}${change.toFixed(2)}%</div>
                        </div>
                    </div>
                `;
            }
        });
        
        if (html === '') {
            throw new Error('No data received from API');
        }
        
        cryptoContainer.innerHTML = html;
        
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
                ${t('cached_data')}
            </div>
            ${fallbackHtml}
        `;
        
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = t('cached_data');
        }
    }
}
