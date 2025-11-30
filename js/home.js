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
        
        <!-- Навигационные иконки -->
        <div class="nav-section">
            <div class="nav-grid">
                <a href="#" class="nav-item" id="company-link">
                    <div class="nav-icon">
                        <img src="assets/company.png" alt="Company">
                    </div>
                    <div class="nav-text">Company</div>
                </a>
                <a href="#" class="nav-item" id="deposit-nav">
                    <div class="nav-icon">
                        <img src="assets/deposit.png" alt="Deposit">
                    </div>
                    <div class="nav-text">Deposit</div>
                </a>
                <a href="#" class="nav-item" id="withdraw-nav">
                    <div class="nav-icon">
                        <img src="assets/withdraw.png" alt="Withdraw">
                    </div>
                    <div class="nav-text">Withdraw</div>
                </a>
                <a href="#" class="nav-item" id="invite-nav">
                    <div class="nav-icon">
                        <img src="assets/invite.png" alt="Invite">
                    </div>
                    <div class="nav-text">Invite</div>
                </a>
                <a href="#" class="nav-item" id="team-nav">
                    <div class="nav-icon">
                        <img src="assets/team.png" alt="Team">
                    </div>
                    <div class="nav-text">Team</div>
                </a>
                <a href="#" class="nav-item" id="rules-nav">
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
            </div>
            <div class="crypto-grid" id="crypto-prices">
                <!-- Цены криптовалют будут загружены через API -->
            </div>
        </div>
        
        <!-- Бегущая строка -->
        <div class="notice-section">
            <div class="notice-bar">
                <div class="notice-icon">📢</div>
                <div class="notice-content">
                    <div class="notice-text">
                        Quantum Crypto Farm - leader in quantum investments │ Founded in 2020 │ Scientific approach and advanced technologies │ Asset management through quantum algorithms │ Daily profit from 2.6% to 5.5% │ 7 VIP levels with unique conditions │ 3-generation referral program │ Automatic income quantification │ Security and transparency.
                    </div>
                </div>
            </div>
        </div>

        <!-- Блок партнеров -->
        <div class="partners-section">
            <div class="section-title">Our Partners</div>
            <img src="assets/partners.png" alt="Our Partners" class="partners-image">
        </div>
    `;
}

export function init() {
    // Навигационные обработчики
    document.getElementById('company-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('company');
    });

    document.getElementById('invite-nav').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('invite');
    });

    document.getElementById('team-nav').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('team');
    });

    document.getElementById('rules-nav').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('rules');
    });

    document.getElementById('deposit-nav').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('assets');
        // Показываем попап депозита
        setTimeout(() => {
            const depositBtn = document.getElementById('deposit-btn');
            if (depositBtn) depositBtn.click();
        }, 100);
    });

    document.getElementById('withdraw-nav').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('assets');
        // Показываем попап вывода
        setTimeout(() => {
            const withdrawBtn = document.getElementById('withdraw-btn');
            if (withdrawBtn) withdrawBtn.click();
        }, 100);
    });

    // Загрузка цен криптовалют
    loadCryptoPrices();
    setInterval(loadCryptoPrices, 30000);
}

function loadCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-prices');
    if (!cryptoContainer) return;

    // API запрос для получения цен криптовалют
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,dogecoin&vs_currencies=usd&include_24hr_change=true')
        .then(response => response.json())
        .then(data => {
            let html = '';
            
            const cryptoData = [
                { symbol: 'BTC', name: 'Bitcoin', data: data.bitcoin, emoji: '₿' },
                { symbol: 'ETH', name: 'Ethereum', data: data.ethereum, emoji: 'Ξ' },
                { symbol: 'BNB', name: 'Binance Coin', data: data.binancecoin, emoji: '💎' },
                { symbol: 'XRP', name: 'Ripple', data: data.ripple, emoji: '✕' },
                { symbol: 'ADA', name: 'Cardano', data: data.cardano, emoji: '₳' },
                { symbol: 'SOL', name: 'Solana', data: data.solana, emoji: '◎' },
                { symbol: 'DOT', name: 'Polkadot', data: data.polkadot, emoji: '●' },
                { symbol: 'DOGE', name: 'Dogecoin', data: data.dogecoin, emoji: 'Ð' }
            ];
            
            cryptoData.forEach(crypto => {
                const change = crypto.data.usd_24h_change.toFixed(2);
                const changeClass = change >= 0 ? 'change-positive' : 'change-negative';
                const changeSign = change >= 0 ? '+' : '';
                
                html += `
                    <div class="crypto-item">
                        <div class="crypto-info">
                            <div class="crypto-icon">${crypto.emoji}</div>
                            <div>
                                <span class="crypto-name">${crypto.symbol}</span>
                                <span class="crypto-pair">/USDT</span>
                            </div>
                        </div>
                        <div class="flex align-center">
                            <div class="crypto-price">$${crypto.data.usd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            <div class="crypto-change ${changeClass}">${changeSign}${change}%</div>
                        </div>
                    </div>
                `;
            });
            
            cryptoContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching crypto prices:', error);
            loadStaticCryptoPrices();
        });
}

function loadStaticCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-prices');
    if (!cryptoContainer) return;

    const cryptoData = [
        { symbol: 'BTC', name: 'Bitcoin', price: 64235.12, change: 2.34, emoji: '₿' },
        { symbol: 'ETH', name: 'Ethereum', price: 3345.67, change: -1.23, emoji: 'Ξ' },
        { symbol: 'BNB', name: 'Binance Coin', price: 545.89, change: 0.56, emoji: '💎' },
        { symbol: 'XRP', name: 'Ripple', price: 0.6234, change: 3.45, emoji: '✕' },
        { symbol: 'ADA', name: 'Cardano', price: 0.4567, change: -0.78, emoji: '₳' },
        { symbol: 'SOL', name: 'Solana', price: 178.34, change: 5.67, emoji: '◎' },
        { symbol: 'DOT', name: 'Polkadot', price: 8.91, change: -2.34, emoji: '●' },
        { symbol: 'DOGE', name: 'Dogecoin', price: 0.1567, change: 1.23, emoji: 'Ð' }
    ];
    
    let html = '';
    cryptoData.forEach(crypto => {
        const changeClass = crypto.change >= 0 ? 'change-positive' : 'change-negative';
        const changeSign = crypto.change >= 0 ? '+' : '';
        
        html += `
            <div class="crypto-item">
                <div class="crypto-info">
                    <div class="crypto-icon">${crypto.emoji}</div>
                    <div>
                        <span class="crypto-name">${crypto.symbol}</span>
                        <span class="crypto-pair">/USDT</span>
                    </div>
                </div>
                <div class="flex align-center">
                    <div class="crypto-price">$${crypto.price.toLocaleString()}</div>
                    <div class="crypto-change ${changeClass}">${changeSign}${crypto.change}%</div>
                </div>
            </div>
        `;
    });
    
    cryptoContainer.innerHTML = html;
}
