// Home section
export default function renderHome() {
    return `
        <!-- Баннер с видео -->
        <div class="banner-section">
            <div class="banner">
                <video class="banner-video" autoplay muted loop>
                    <source src="assets/company.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        <!-- Бегущая строка -->
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

        <!-- Навигационные иконки -->
        <div class="nav-section">
            <div class="nav-grid">
                <a href="#" class="nav-item" data-section="company">
                    <div class="nav-icon">
                        <img src="assets/company.png" alt="Company">
                    </div>
                    <div class="nav-text">Company</div>
                </a>
                <a href="#" class="nav-item" data-section="assets">
                    <div class="nav-icon">
                        <img src="assets/deposit.png" alt="Deposit">
                    </div>
                    <div class="nav-text">Deposit</div>
                </a>
                <a href="#" class="nav-item" data-section="assets">
                    <div class="nav-icon">
                        <img src="assets/withdraw.png" alt="Withdraw">
                    </div>
                    <div class="nav-text">Withdraw</div>
                </a>
                <a href="#" class="nav-item" data-section="invite">
                    <div class="nav-icon">
                        <img src="assets/invite.png" alt="Invite">
                    </div>
                    <div class="nav-text">Invite</div>
                </a>
                <a href="#" class="nav-item" data-section="team">
                    <div class="nav-icon">
                        <img src="assets/team.png" alt="Team">
                    </div>
                    <div class="nav-text">Team</div>
                </a>
                <a href="#" class="nav-item" data-section="rules">
                    <div class="nav-icon">
                        <img src="assets/rules.png" alt="Rules">
                    </div>
                    <div class="nav-text">Rules</div>
                </a>
            </div>
        </div>

        <!-- Криптовалютные цены -->
        <div class="quantum-section">
            <div class="quantum-header">
                <div class="quantum-title">Live Crypto Prices</div>
                <div class="text-gray" style="font-size: 12px; font-weight: normal;" id="last-updated">
                    Updating...
                </div>
            </div>
            <div class="crypto-grid" id="crypto-prices">
                <!-- Цены криптовалют будут загружены через API -->
                <div style="color: #ccc; text-align: center; padding: 20px;">
                    Loading live prices...
                </div>
            </div>
        </div>

        <!-- Блок партнеров -->
        <div class="partners-section">
            <div class="section-title">Our Partners</div>
            <img src="assets/partners.png" alt="Our Partners" style="width: 100%; border-radius: 10px;">
        </div>
    `;
}

export function init() {
    // Обработчики для навигационных иконок
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.currentTarget.getAttribute('data-section');
            window.showSection(section);
        });
    });

    // Загрузка цен криптовалют
    loadCryptoPrices();
    // Обновлять каждые 30 секунд (безопасный лимит для CoinGecko)
    setInterval(loadCryptoPrices, 30000);
}

async function loadCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-prices');
    const lastUpdatedElement = document.getElementById('last-updated');
    
    if (!cryptoContainer) return;

    // Проверка интернета
    if (!navigator.onLine) {
        cryptoContainer.innerHTML = '<div style="color: #ccc; text-align: center; padding: 20px;">No internet connection</div>';
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = 'Offline';
        }
        return;
    }

    try {
        // Обновляем статус
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = 'Updating...';
        }

        // Используем CoinGecko API (бесплатно, до 50 запросов в минуту)
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,dogecoin&vs_currencies=usd&include_24hr_change=true'
        );
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Массив криптовалют с их данными
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
        
        // Обновляем время последнего обновления
        if (lastUpdatedElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            lastUpdatedElement.textContent = `Updated: ${timeString}`;
        }
        
    } catch (error) {
        console.error('Error loading crypto prices:', error);
        
        // Fallback: показываем статические данные с сообщением об ошибке
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
                Using cached data. Live updates temporarily unavailable.
            </div>
            ${fallbackHtml}
        `;
        
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = 'Cached data';
        }
    }
}
