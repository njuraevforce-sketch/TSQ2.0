export function render() {
    return `
        <div class="page">
            <div class="fund-header">
                <div class="balance-card" style="background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px; margin-bottom: 15px;">
                    <div class="balance-label">Общий баланс</div>
                    <div class="balance-amount" style="font-size: 2.5em; font-weight: bold; margin: 10px 0;">$1250.50</div>
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

            <div class="quick-actions" style="margin: 20px 0;">
                <div class="action-buttons" style="display: flex; gap: 15px;">
                    <div class="action-btn" id="recharge-btn" style="flex: 1; text-align: center; background: #4e7771; border-radius: 25px; padding: 15px; cursor: pointer;">
                        <div style="font-size: 1.5em; margin-bottom: 8px;">+</div>
                        <div>Пополнить</div>
                    </div>
                    <div class="action-btn" id="withdraw-btn" style="flex: 1; text-align: center; background: #4e7771; border-radius: 25px; padding: 15px; cursor: pointer;">
                        <div style="font-size: 1.5em; margin-bottom: 8px;">→</div>
                        <div>Вывести</div>
                    </div>
                </div>
            </div>

            <div class="transaction-history">
                <div class="section-header" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div class="section-title" style="font-size: 1.2em; font-weight: bold;">История операций</div>
                    <div class="section-link" style="color: #4e7771; cursor: pointer;">Все операции →</div>
                </div>

                <div id="transactions-list">
                    <!-- Транзакции загружаются динамически -->
                </div>
            </div>

            <div class="stats-section" style="margin-top: 20px;">
                <div class="stats-grid" style="display: flex; justify-content: space-around; gap: 15px; margin: 15px 0;">
                    <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                        <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">$2000.00</div>
                        <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Всего пополнено</div>
                    </div>
                    <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                        <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">$750.00</div>
                        <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Всего выведено</div>
                    </div>
                    <div class="stat-card" style="text-align: center; flex: 1; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px;">
                        <div class="stat-value" style="font-size: 1.5em; font-weight: bold;">$3250.75</div>
                        <div class="stat-label" style="font-size: 0.9em; color: #b2b2b2;">Всего заработано</div>
                    </div>
                </div>
            </div>

            <uni-tabbar class="uni-tabbar uni-tabbar-bottom">
                <div class="uni-tabbar">
                    <div class="uni-tabbar__item" data-route="/">
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
                    <div class="uni-tabbar__item active" data-route="/fund">
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
    document.getElementById('recharge-btn').addEventListener('click', () => {
        alert('Переход к пополнению');
    });
    
    document.getElementById('withdraw-btn').addEventListener('click', () => {
        alert('Переход к выводу');
    });
    
    loadTransactions();
    
    document.querySelectorAll('.uni-tabbar__item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}

function loadTransactions() {
    const transactions = [
        { id: 1, type: "Ежедневный доход", date: "07.01.2024 14:30", amount: "+$15.80", status: "Завершено" },
        { id: 2, type: "Покупка VIP 3", date: "06.01.2024 16:45", amount: "-$300.00", status: "Завершено" },
        { id: 3, type: "Реферальный бонус", date: "05.01.2024 09:15", amount: "+$24.50", status: "Завершено" },
        { id: 4, type: "Вывод средств", date: "04.01.2024 11:20", amount: "-$100.00", status: "В обработке" }
    ];
    
    const container = document.getElementById('transactions-list');
    
    container.innerHTML = transactions.map(transaction => `
        <div class="transaction-item" style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.25); border-radius: 15px; padding: 20px; margin-bottom: 15px;">
            <div class="transaction-info" style="flex: 1;">
                <div class="transaction-type" style="font-weight: bold; display: block;">${transaction.type}</div>
                <div class="transaction-date" style="font-size: 0.9em; color: #b2b2b2;">${transaction.date}</div>
            </div>
            <div style="text-align: right;">
                <div class="${transaction.amount.startsWith('+') ? 'amount-positive' : 'amount-negative'}" style="font-weight: bold; ${transaction.amount.startsWith('+') ? 'color: #4e7771;' : 'color: #e64340;'}">
                    ${transaction.amount}
                </div>
                <div style="font-size: 0.9em; color: #b2b2b2;">${transaction.status}</div>
            </div>
        </div>
    `).join('');
}
