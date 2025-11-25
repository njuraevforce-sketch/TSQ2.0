export function render() {
    return `
        <div class="page">
            <div class="header">
                <div class="balance-card">
                    <div class="balance-label">Общий баланс</div>
                    <div class="balance-amount">$1250.50</div>
                    <div class="balance-details" style="display: flex; justify-content: space-between;">
                        <div class="balance-item">
                            <div class="label">Доступно</div>
                            <div class="value">$850.50</div>
                        </div>
                        <div class="balance-item">
                            <div class="label">Заморожено</div>
                            <div class="value">$400.00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="daily-task" style="border-radius: 15px; padding: 20px; margin: 20px 0; background: rgba(0,0,0,0.25);">
                <div class="task-header" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div class="task-title" style="font-size: 1.2em; font-weight: bold;">Ежедневный доход</div>
                    <div class="task-time" style="color: #b2b2b2;">Следующее получение: 22:00</div>
                </div>
                
                <div class="task-button" id="collect-income" style="border-radius: 25px; padding: 20px; text-align: center; cursor: pointer; background: #4e7771;">
                    <div class="button-content">
                        <div class="button-text" style="font-size: 1.1em; font-weight: bold;">Получить доход</div>
                        <div class="button-amount" style="color: #e3e3e3;">+$15.80</div>
                    </div>
                </div>
            </div>

            <div class="quick-stats" style="display: flex; gap: 15px; margin: 20px 0;">
                <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                    <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">$3250.75</div>
                    <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Всего заработано</div>
                </div>
                <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                    <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">12</div>
                    <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Рефералов</div>
                </div>
                <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                    <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">3</div>
                    <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Активных пакетов</div>
                </div>
            </div>

            <uni-tabbar class="uni-tabbar uni-tabbar-bottom">
                <div class="uni-tabbar">
                    <div class="uni-tabbar__item active" data-route="/">
                        <div class="uni-tabbar__bd">
                            <div class="uni-tabbar__icon">🏠</div>
                            <div class="uni-tabbar__label">Главная</div>
                        </div>
                    </div>
                    <div class="uni-tabbar__item" data-route="/vip">
                        <div class="uni-tabbar__bd">
                            <div class="uni-tabbar__icon">⭐</div>
                            <div class="uni-tabbar__label">VIP</div>
                        </div>
                    </div>
                    <div class="uni-tabbar__item" data-route="/team">
                        <div class="uni-tabbar__bd">
                            <div class="uni-tabbar__icon">👥</div>
                            <div class="uni-tabbar__label">Рефералы</div>
                        </div>
                    </div>
                    <div class="uni-tabbar__item" data-route="/fund">
                        <div class="uni-tabbar__bd">
                            <div class="uni-tabbar__icon">💰</div>
                            <div class="uni-tabbar__label">Кошелек</div>
                        </div>
                    </div>
                    <div class="uni-tabbar__item" data-route="/mine">
                        <div class="uni-tabbar__bd">
                            <div class="uni-tabbar__icon">👤</div>
                            <div class="uni-tabbar__label">Профиль</div>
                        </div>
                    </div>
                </div>
            </uni-tabbar>
        </div>
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
