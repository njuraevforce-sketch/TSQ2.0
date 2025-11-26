export function render() {
    return `
        <div style="padding: 20px; padding-bottom: 100px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">VIP пакеты</div>
                <div style="color: var(--UI-FG-2);">Инвестируйте и получайте ежедневный доход</div>
            </div>

            <div id="vip-packages"></div>

            <uni-tabbar class="uni-tabbar-bottom">
                <uni-tabbar__item data-route="/">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">🏠</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item class="active" data-route="/vip">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">⭐</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item data-route="/team">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">👥</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item data-route="/fund">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">💰</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item data-route="/mine">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">👤</div>
                    </div>
                </uni-tabbar__item>
            </uni-tabbar>
        </div>
    `;
}

export function init() {
    loadVipPackages();
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
        <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px; ${pkg.owned ? 'border: 2px solid #007aff;' : ''}">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <div style="font-size: 1.3em; font-weight: bold;">VIP ${pkg.level}</div>
                ${pkg.owned ? '<div style="background: #007aff; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">АКТИВЕН</div>' : ''}
            </div>
            <div style="font-size: 1.5em; font-weight: bold; text-align: center; margin: 10px 0;">$${pkg.price}</div>
            <div style="text-align: center; color: #007aff; margin: 10px 0; font-weight: bold;">$${pkg.dailyIncome}/день</div>
            <div style="text-align: center; color: var(--UI-FG-2); margin: 10px 0;">${(pkg.dailyIncome/pkg.price*100).toFixed(1)}% в день</div>
            <uni-button type="${pkg.owned ? 'default' : 'primary'}" onclick="buyVipPackage(${pkg.id})" style="width: 100%;">
                ${pkg.owned ? 'АКТИВЕН' : 'КУПИТЬ'}
            </uni-button>
        </uni-modal>
    `).join('');
}

window.buyVipPackage = function(id) {
    alert(`VIP пакет ${id} куплен!`);
};
