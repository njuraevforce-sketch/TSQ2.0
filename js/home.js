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

    // API запрос для получения цен криптовалют
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,dogecoin&vs_currencies=usd&include_24hr_change=true')
        .then(response => response.json())
        .then(data => {
            let html = '';
            
            const cryptoData = [
                { symbol: 'BTC', name: 'Bitcoin', data: data.bitcoin, icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
                { symbol: 'ETH', name: 'Ethereum', data: data.ethereum, icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
                { symbol: 'BNB', name: 'Binance Coin', data: data.binancecoin, icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
                { symbol: 'XRP', name: 'Ripple', data: data.ripple, icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
                { symbol: 'ADA', name: 'Cardano', data: data.cardano, icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
                { symbol: 'SOL', name: 'Solana', data: data.solana, icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
                { symbol: 'DOT', name: 'Polkadot', data: data.polkadot, icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
                { symbol: 'DOGE', name: 'Dogecoin', data: data.dogecoin, icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' }
            ];
            
            cryptoData.forEach(crypto => {
                const change = crypto.data.usd_24h_change.toFixed(2);
                const changeClass = change >= 0 ? 'change-positive' : 'change-negative';
                const changeSign = change >= 0 ? '+' : '';
                
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
        { symbol: 'BTC', name: 'Bitcoin', price: 64235.12, change: 2.34, icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png' },
        { symbol: 'ETH', name: 'Ethereum', price: 3345.67, change: -1.23, icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' },
        { symbol: 'BNB', name: 'Binance Coin', price: 545.89, change: 0.56, icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png' },
        { symbol: 'XRP', name: 'Ripple', price: 0.6234, change: 3.45, icon: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png' },
        { symbol: 'ADA', name: 'Cardano', price: 0.4567, change: -0.78, icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png' },
        { symbol: 'SOL', name: 'Solana', price: 178.34, change: 5.67, icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png' },
        { symbol: 'DOT', name: 'Polkadot', price: 8.91, change: -2.34, icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png' },
        { symbol: 'DOGE', name: 'Dogecoin', price: 0.1567, change: 1.23, icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png' }
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
                    <div class="crypto-price">$${crypto.price.toLocaleString()}</div>
                    <div class="crypto-change ${changeClass}">${changeSign}${crypto.change}%</div>
                </div>
            </div>
        `;
    });
    
    cryptoContainer.innerHTML = html;
}
