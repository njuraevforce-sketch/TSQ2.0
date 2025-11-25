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

            <div class="daily-task" style="border-radius: 15px; padding: 20px; margin: 20px 0;">
                <div class="task-header" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div class="task-title" style="font-size: 1.2em; font-weight: bold;">Ежедневный доход</div>
                    <div class="task-time" style="color: #b2b2b2;">Следующее получение: 22:00</div>
                </div>
                
                <div class="task-button" id="collect-income" style="border-radius: 25px; padding: 20px; text-align: center; cursor: pointer;">
                    <div class="button-content">
                        <div class="button-text" style="font-size: 1.1em; font-weight: bold;">Получить доход</div>
                        <div class="button-amount" style="color: #e3e3e3;">+$15.80</div>
                    </div>
                </div>
            </div>

            <div class="quick-stats" style="display: flex; gap: 15px; margin: 20px 0;">
                <div class="stat-card" style="text-align: center; flex: 1;">
                    <div class="stat-value">$3250.75</div>
                    <div class="stat-label">Всего заработано</div>
                </div>
                <div class="stat-card" style="text-align: center; flex: 1;">
                    <div class="stat-value">12</div>
                    <div class="stat-label">Рефералов</div>
                </div>
                <div class="stat-card" style="text-align: center; flex: 1;">
                    <div class="stat-value">3</div>
                    <div class="stat-label">Активных пакетов</div>
                </div>
            </div>

            <nav class="tab-bar">
                <div class="tab active" data-route="/">🏠 Главная</div>
                <div class="tab" data-route="/vip">⭐ VIP</div>
                <div class="tab" data-route="/team">👥 Рефералы</div>
                <div class="tab" data-route="/fund">💰 Кошелек</div>
                <div class="tab" data-route="/mine">👤 Профиль</div>
            </nav>
        </div>
    `;
}

export function init() {
    document.getElementById('collect-income').addEventListener('click', () => {
        alert('Доход получен! +$15.80');
    });
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}
