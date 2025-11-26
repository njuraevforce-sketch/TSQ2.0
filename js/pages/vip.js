export function render() {
    return `
        <uni-view style="padding: 20px; min-height: 100vh; padding-bottom: 100px;">
            <uni-view style="text-align: center; margin-bottom: 30px;">
                <uni-text style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px; display: block;">VIP пакеты</uni-text>
                <uni-text style="color: var(--UI-FG-1); display: block;">Инвестируйте и получайте ежедневный доход</uni-text>
            </uni-view>

            <uni-view id="vip-packages"></uni-view>

            <div class="uni-tabbar">
                <div class="uni-tabbar__item" data-route="/">🏠 Главная</div>
                <div class="uni-tabbar__item active" data-route="/vip">⭐ VIP</div>
                <div class="uni-tabbar__item" data-route="/team">👥 Рефералы</div>
                <div class="uni-tabbar__item" data-route="/fund">💰 Кошелек</div>
                <div class="uni-tabbar__item" data-route="/mine">👤 Профиль</div>
            </div>
        </uni-view>
    `;
}

export function init() {
    loadVipPackages();
    
    document.querySelectorAll('.uni-tabbar__item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}

function loadVipPackages() {
    const packages = [
        { id: 1, level: 1, price: 20, dailyIncome: 0.52, owned: true },
        { id: 2, level: 2, price: 100, dailyIncome: 3.10, owned: true },
        { id: 3, level: 3, price: 300, dailyIncome: 10.80, owned: true },
        { id: 4, level: 4, price: 1000, dailyIncome: 41.00, owned: false },
        { id: 5, level: 5, price: 3000, dailyIncome: 138.00, owned: false },
        { id: 6, level: 6, price: 5000, dailyIncome: 255.00, owned: false }
    ];
    
    const container = document.getElementById('vip-packages');
    container.innerHTML = packages.map(pkg => `
        <uni-view class="uni-card" style="${pkg.owned ? 'border: 2px solid var(--UI-FG-0);' : ''}">
            <uni-view style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <uni-text style="font-size: 1.3em; font-weight: bold;">VIP ${pkg.level}</uni-text>
                ${pkg.owned ? '<uni-text style="background: var(--UI-FG-0); color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">АКТИВЕН</uni-text>' : ''}
            </uni-view>
            <uni-text style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 10px 0; display: block;">$${pkg.price}</uni-text>
            <uni-text style="text-align: center; color: var(--UI-FG-0); margin: 10px 0; font-weight: bold; display: block;">$${pkg.dailyIncome}/день</uni-text>
            <uni-text style="text-align: center; color: var(--UI-FG-1); margin: 10px 0; display: block;">${(pkg.dailyIncome/pkg.price*100).toFixed(1)}% в день</uni-text>
            <uni-button onclick="buyVipPackage(${pkg.id})" 
                style="${pkg.owned ? 'background: rgba(0, 122, 255, 0.3);' : ''}">
                ${pkg.owned ? 'АКТИВЕН' : 'КУПИТЬ'}
            </uni-button>
        </uni-view>
    `).join('');
}

window.buyVipPackage = function(id) {
    alert(`VIP пакет ${id} куплен!`);
};
