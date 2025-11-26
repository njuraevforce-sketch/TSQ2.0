export function render() {
    return `
        <uni-view style="padding: 20px; min-height: 100vh; padding-bottom: 100px;">
            <uni-view class="uni-card">
                <uni-text style="display: block; margin-bottom: 10px;">Общий баланс</uni-text>
                <uni-text class="balance-amount">$1250.50</uni-text>
                <uni-view style="display: flex; justify-content: space-between;">
                    <uni-view>
                        <uni-text style="display: block;">Доступно</uni-text>
                        <uni-text style="display: block;">$850.50</uni-text>
                    </uni-view>
                    <uni-view>
                        <uni-text style="display: block;">Заморожено</uni-text>
                        <uni-text style="display: block;">$400.00</uni-text>
                    </uni-view>
                </uni-view>
            </uni-view>

            <uni-view class="uni-card">
                <uni-view style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <uni-text style="font-size: 1.2em; font-weight: bold;">Ежедневный доход</uni-text>
                    <uni-text style="color: var(--UI-FG-1);">Следующее получение: 22:00</uni-text>
                </uni-view>
                
                <uni-button id="collect-income" style="border-radius: 25px; text-align: center;">
                    <uni-view>
                        <uni-text style="font-size: 1.1em; font-weight: bold;">Получить доход</uni-text>
                        <uni-text style="color: var(--UI-FG-1); display: block;">+$15.80</uni-text>
                    </uni-view>
                </uni-button>
            </uni-view>

            <uni-view class="stats-grid">
                <uni-view class="stat-item">
                    <uni-text class="stat-number">$3250.75</uni-text>
                    <uni-text class="stat-label">Всего заработано</uni-text>
                </uni-view>
                <uni-view class="stat-item">
                    <uni-text class="stat-number">12</uni-text>
                    <uni-text class="stat-label">Рефералов</uni-text>
                </uni-view>
                <uni-view class="stat-item">
                    <uni-text class="stat-number">3</uni-text>
                    <uni-text class="stat-label">Активных пакетов</uni-text>
                </uni-view>
            </uni-view>

            <div class="uni-tabbar">
                <div class="uni-tabbar__item active" data-route="/">🏠 Главная</div>
                <div class="uni-tabbar__item" data-route="/vip">⭐ VIP</div>
                <div class="uni-tabbar__item" data-route="/team">👥 Рефералы</div>
                <div class="uni-tabbar__item" data-route="/fund">💰 Кошелек</div>
                <div class="uni-tabbar__item" data-route="/mine">👤 Профиль</div>
            </div>
        </uni-view>
    `;
}

export function init() {
    document.getElementById('collect-income').addEventListener('click', () => {
        alert('Доход получен! +$15.80');
    });
    
    document.querySelectorAll('.uni-tabbar__item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}
