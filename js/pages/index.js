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

            <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div style="font-size: 1.2em; font-weight: bold;">Ежедневный доход</div>
                    <div style="color: var(--UI-FG-2);">Следующее получение: 22:00</div>
                </div>
                
                <uni-button type="primary" id="collect-income" style="width: 100%; padding: 15px;">
                    <div style="font-size: 1.1em; font-weight: bold;">Получить доход</div>
                    <div style="color: var(--UI-FG-2);">+$15.80</div>
                </uni-button>
            </uni-modal>

            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">$3250.75</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Всего заработано</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">12</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Рефералов</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">3</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Активных пакетов</div>
                </uni-modal>
            </div>

            <uni-tabbar class="uni-tabbar-bottom">
                <uni-tabbar__item class="active" data-route="/">
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
    document.getElementById('collect-income').addEventListener('click', () => {
        alert('Доход получен! +$15.80');
    });
}
