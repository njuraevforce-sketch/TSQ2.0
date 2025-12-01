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
                        GLY - Quantum Investment Platform │ Advanced AI Algorithms │ Daily Returns 2.6%-5.5% │ 6 VIP Levels │ Multi-Level Referral System │ Secure & Transparent
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

        <!-- Криптовалютные цены БЕЗ ОТСТУПОВ -->
        <div class="quantum-section">
            <div class="quantum-header">
                <div class="quantum-title">Live Crypto Prices</div>
            </div>
            <div class="crypto-grid-no-gap" id="crypto-prices">
                <!-- Цены криптовалют будут загружены через API -->
            </div>
        </div>

        <!-- Блок партнеров на всю ширину -->
        <div class="partners-section-fullwidth">
            <div class="section-title">Our Partners</div>
            <img src="assets/partners.png" alt="Our Partners" class="partners-image-fullwidth">
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
    setInterval(loadCryptoPrices, 30000);
}

function loadCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-prices');
    if (!cryptoContainer) return;

    // Статические данные с нужными ценами
    const cryptoData = [
        { symbol: 'BTC', name: 'Bitcoin', price: 88405.00, change: -2.74, icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
        { symbol: 'ETH', name: 'Ethereum', price: 2897.01, change: -3.33, icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
        { symbol: 'BNB', name: 'Binance Coin', price: 850.67, change: -2.78, icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
        { symbol: 'XRP', name: 'Ripple', price: 2.11, change: -4.28, icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
        { symbol: 'ADA', name: 'Cardano', price: 0.40, change: -4.21, icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
        { symbol: 'SOL', name: 'Solana', price: 130.18, change: -4.43, icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
        { symbol: 'DOT', name: 'Polkadot', price: 2.12, change: -6.50, icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
        { symbol: 'DOGE', name: 'Dogecoin', price: 0.15, change: -3.21, icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' }
    ];
    
    let html = '';
    cryptoData.forEach(crypto => {
        const changeClass = crypto.change >= 0 ? 'change-positive' : 'change-negative';
        const changeSign = crypto.change >= 0 ? '+' : '';
        
        html += `
            <div class="crypto-item">
                <div class="crypto-info">
                    <div class="crypto-icon">
                        <img src="${crypto.icon}" alt="${crypto.name}">
                    </div>
                    <div>
                        <span class="crypto-name">${crypto.symbol}</span>
                        <span class="crypto-pair">/USDT</span>
                    </div>
                </div>
                <div class="flex align-center">
                    <div class="crypto-price">$${crypto.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    <div class="crypto-change ${changeClass}">${changeSign}${crypto.change}%</div>
                </div>
            </div>
        `;
    });
    
    cryptoContainer.innerHTML = html;
}
