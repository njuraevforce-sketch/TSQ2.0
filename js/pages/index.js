export function render() {
    return `
        <uni-view class="uni-page-body">
            <uni-view class="uni-card">
                <uni-view class="uni-card__header">
                    <uni-view>Общий баланс</uni-view>
                    <uni-view class="uni-card__content" style="font-size: 2.5em; font-weight: bold;">$1250.50</uni-view>
                </uni-view>
                <uni-view class="uni-card__content">
                    <uni-view style="display: flex; justify-content: space-between;">
                        <uni-view>
                            <uni-view>Доступно</uni-view>
                            <uni-view>$850.50</uni-view>
                        </uni-view>
                        <uni-view>
                            <uni-view>Заморожено</uni-view>
                            <uni-view>$400.00</uni-view>
                        </uni-view>
                    </uni-view>
                </uni-view>
            </uni-view>

            <uni-view class="uni-card">
                <uni-view class="uni-card__header" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <uni-view style="font-size: 1.2em; font-weight: bold;">Ежедневный доход</uni-view>
                    <uni-view style="color: var(--UI-FG-1);">Следующее получение: 22:00</uni-view>
                </uni-view>
                
                <uni-button type="primary" id="collect-income">
                    <uni-view>Получить доход</uni-view>
                    <uni-view style="color: var(--UI-FG-1);">+$15.80</uni-view>
                </uni-button>
            </uni-view>

            <uni-view style="display: flex; gap: 15px; margin: 20px 0;">
                <uni-view class="uni-card" style="text-align: center; flex: 1;">
                    <uni-view style="font-size: 1.5em; font-weight: bold;">$3250.75</uni-view>
                    <uni-view style="color: var(--UI-FG-1);">Всего заработано</uni-view>
                </uni-view>
                <uni-view class="uni-card" style="text-align: center; flex: 1;">
                    <uni-view style="font-size: 1.5em; font-weight: bold;">12</uni-view>
                    <uni-view style="color: var(--UI-FG-1);">Рефералов</uni-view>
                </uni-view>
                <uni-view class="uni-card" style="text-align: center; flex: 1;">
                    <uni-view style="font-size: 1.5em; font-weight: bold;">3</uni-view>
                    <uni-view style="color: var(--UI-FG-1);">Активных пакетов</uni-view>
                </uni-view>
            </uni-view>

            <uni-tabbar class="uni-tabbar-bottom">
                <uni-view class="uni-tabbar__item" data-route="/">
                    <uni-view class="uni-tabbar__bd">
                        <uni-view class="uni-tabbar__icon">🏠</uni-view>
                        <uni-view class="uni-tabbar__label">Главная</uni-view>
                    </uni-view>
                </uni-view>
                <uni-view class="uni-tabbar__item" data-route="/vip">
                    <uni-view class="uni-tabbar__bd">
                        <uni-view class="uni-tabbar__icon">⭐</uni-view>
                        <uni-view class="uni-tabbar__label">VIP</uni-view>
                    </uni-view>
                </uni-view>
                <uni-view class="uni-tabbar__item" data-route="/team">
                    <uni-view class="uni-tabbar__bd">
                        <uni-view class="uni-tabbar__icon">👥</uni-view>
                        <uni-view class="uni-tabbar__label">Рефералы</uni-view>
                    </uni-view>
                </uni-view>
                <uni-view class="uni-tabbar__item" data-route="/fund">
                    <uni-view class="uni-tabbar__bd">
                        <uni-view class="uni-tabbar__icon">💰</uni-view>
                        <uni-view class="uni-tabbar__label">Кошелек</uni-view>
                    </uni-view>
                </uni-view>
                <uni-view class="uni-tabbar__item" data-route="/mine">
                    <uni-view class="uni-tabbar__bd">
                        <uni-view class="uni-tabbar__icon">👤</uni-view>
                        <uni-view class="uni-tabbar__label">Профиль</uni-view>
                    </uni-view>
                </uni-view>
            </uni-tabbar>
        </uni-view>
    `;
}
