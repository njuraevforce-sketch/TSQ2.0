export function render() {
    return `
        <div style="padding: 20px; padding-bottom: 100px;">
            <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px;">
                <div style="font-size: 14px; color: var(--UI-FG-1);">Общий баланс</div>
                <div style="font-size: 2em; font-weight: bold; margin: 10px 0;">$1250.50</div>
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <div style="font-size: 12px; color: var(--UI-FG-1);">Доступно</div>
                        <div style="font-size: 16px; font-weight: bold;">$850.50</div>
                    </div>
                    <div>
                        <div style="font-size: 12px; color: var(--UI-FG-1);">Заморожено</div>
                        <div style="font-size: 16px; font-weight: bold;">$400.00</div>
                    </div>
                </div>
            </uni-modal>

            <div style="margin-bottom: 15px;">
                <div style="display: flex; gap: 15px;">
                    <uni-button type="default" id="recharge-btn" style="flex: 1; padding: 15px;">
                        <div style="font-size: 1.5em;">+</div>
                        <div>Пополнить</div>
                    </uni-button>
                    <uni-button type="default" id="withdraw-btn" style="flex: 1; padding: 15px;">
                        <div style="font-size: 1.5em;">→</div>
                        <div>Вывести</div>
                    </uni-button>
                </div>
            </div>

            <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div style="font-size: 1.2em; font-weight: bold;">История операций</div>
                    <div style="color: var(--UI-FG-1); cursor: pointer;">Все операции →</div>
                </div>

                <div id="transactions-list"></div>
            </uni-modal>

            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">$2000.00</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Всего пополнено</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">$750.00</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Всего выведено</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">$3250.75</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Всего заработано</div>
                </uni-modal>
            </div>

            <uni-tabbar class="uni-tabbar-bottom">
                <uni-tabbar__item data-route="/">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">🏠</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item data-route="/vip">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">⭐</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item data-route="/team">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">👥</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item class="active" data-route="/fund">
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
    document.getElementById('recharge-btn').addEventListener('click', () => {
        alert('Переход к пополнению');
    });
    
    document.getElementById('withdraw-btn').addEventListener('click', () => {
        alert('Переход к выводу');
    });
    
    loadTransactions();
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
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--UI-BG-1);">
            <div style="flex: 1;">
                <div style="font-weight: bold;">${transaction.type}</div>
                <div style="font-size: 0.9em; color: var(--UI-FG-2);">${transaction.date}</div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: ${transaction.amount.startsWith('+') ? 'var(--UI-FG-0)' : '#e64340'};">${transaction.amount}</div>
                <div style="font-size: 0.9em; color: var(--UI-FG-2);">${transaction.status}</div>
            </div>
        </div>
    `).join('');
}
