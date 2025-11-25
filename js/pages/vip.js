export function render() {
    return `
        <div class="page">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">VIP пакеты</div>
                <div style="color: #e3e3e3;">Инвестируйте и получайте ежедневный доход</div>
            </div>

            <div id="vip-packages"></div>

            <nav class="tab-bar">
                <div class="tab" data-route="/">🏠 Главная</div>
                <div class="tab active" data-route="/vip">⭐ VIP</div>
                <div class="tab" data-route="/team">👥 Рефералы</div>
                <div class="tab" data-route="/fund">💰 Кошелек</div>
                <div class="tab" data-route="/mine">👤 Профиль</div>
            </nav>
        </div>
    `;
}

export function init() {
    loadVipPackages();
    updateActiveTab();
}

function loadVipPackages() {
    const packages = [
        { id: 1, level: 1, price: 20, dailyIncome: 0.52, owned: true },
        { id: 2, level: 2, price: 100, dailyIncome: 3.10, owned: true },
        { id: 3, level: 3, price: 300, dailyIncome: 10.80, owned: true },
        { id: 4, level: 4, price: 1000, dailyIncome: 41.00, owned: false }
    ];
    
    const container = document.getElementById('vip-packages');
    container.innerHTML = packages.map(pkg => `
        <div class="vip-package" style="${pkg.owned ? 'border: 2px solid #4e7771;' : ''}">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <div style="font-size: 1.3em; font-weight: bold;">VIP ${pkg.level}</div>
                ${pkg.owned ? '<div style="background: #4e7771; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">АКТИВЕН</div>' : ''}
            </div>
            <div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 10px 0;">$${pkg.price}</div>
            <div style="text-align: center; color: #4e7771; margin: 10px 0; font-weight: bold;">$${pkg.dailyIncome}/день</div>
            <div style="text-align: center; color: #b2b2b2; margin: 10px 0;">${(pkg.dailyIncome/pkg.price*100).toFixed(1)}% в день</div>
            <button class="vip-btn" onclick="buyVipPackage(${pkg.id})" 
                style="${pkg.owned ? 'background: rgba(78, 119, 113, 0.3);' : ''} width: 100%; border: none; border-radius: 25px; padding: 15px; color: white; cursor: pointer;">
                ${pkg.owned ? 'АКТИВЕН' : 'КУПИТЬ'}
            </button>
        </div>
    `).join('');
}

window.buyVipPackage = function(id) {
    alert(`VIP пакет ${id} куплен!`);
};
