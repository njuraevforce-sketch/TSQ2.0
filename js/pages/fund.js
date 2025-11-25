export function render() {
    return `
        <div class="page">
            <div class="fund-header">
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

            <div class="quick-actions" style="margin: 20px 0;">
                <div class="action-buttons" style="display: flex; gap: 15px;">
                    <div class="action-btn" id="recharge-btn" style="flex: 1; text-align: center;">
                        <div style="font-size: 1.5em; margin-bottom: 8px;">+</div>
                        <div>Пополнить</div>
                    </div>
                    <div class="action-btn" id="withdraw-btn" style="flex: 1; text-align: center;">
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
                <div class="stats-grid">
                    <div class="stat-card" style="text-align: center;">
                        <div class="stat-value">$2000.00</div>
                        <div class="stat-label">Всего пополнено</div>
                    </div>
                    <div class="stat-card" style="text-align: center;">
                        <div class="stat-value">$750.00</div>
                        <div class="stat-label">Всего выведено</div>
                    </div>
                    <div class="stat-card" style="text-align: center;">
                        <div class="stat-value">$3250.75</div>
                        <div class="stat-label">Всего заработано</div>
                    </div>
                </div>
            </div>

            <nav class="tab-bar">
                <div class="tab" data-route="/">🏠 Главная</div>
                <div class="tab" data-route="/vip">⭐ VIP</div>
                <div class="tab" data-route="/team">👥 Рефералы</div>
                <div class="tab active" data-route="/fund">💰 Кошелек</div>
                <div class="tab" data-route="/mine">👤 Профиль</div>
            </nav>
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
    
    document.querySelectorAll('.tab').forEach(tab => {
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
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-type">${transaction.type}</div>
                <div class="transaction-date">${transaction.date}</div>
            </div>
            <div style="text-align: right;">
                <div class="${transaction.amount.startsWith('+') ? 'amount-positive' : 'amount-negative'}" style="font-weight: bold;">
                    ${transaction.amount}
                </div>
                <div style="font-size: 0.9em; color: #b2b2b2;">${transaction.status}</div>
            </div>
        </div>
    `).join('');
}
