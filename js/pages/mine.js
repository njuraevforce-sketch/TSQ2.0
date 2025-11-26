export function render() {
    return `
        <div style="padding: 20px; padding-bottom: 100px;">
            <div style="display: flex; align-items: center; margin-bottom: 30px;">
                <div style="margin-right: 20px;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: #007aff; display: flex; align-items: center; justify-content: center; font-size: 1.5em; font-weight: bold; color: white;">ИИ</div>
                    <div style="display: flex; align-items: center; justify-content: center; margin-top: 5px;">
                        <div style="width: 8px; height: 8px; background: #4e7771; border-radius: 50%; margin-right: 5px;"></div>
                        <div style="font-size: 0.9em; color: var(--UI-FG-2);">Online</div>
                    </div>
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">Иван Иванов</div>
                    <div style="color: var(--UI-FG-2); margin-bottom: 8px;">ID: 123456</div>
                    <div style="background: #007aff; color: white; padding: 5px 15px; border-radius: 15px; display: inline-block;">VIP 3</div>
                </div>
            </div>

            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">45</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Дней в игре</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">12</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Рефералов</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">89</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Заданий</div>
                </uni-modal>
            </div>

            <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px;">
                <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px;">Реферальная программа</div>
                <div style="display: flex; align-items: center; justify-content: space-between; background: var(--UI-BG-1); border-radius: 5px; padding: 15px; margin: 10px 0;">
                    <div style="flex: 1; color: var(--UI-FG-1);">https://app.com/register?ref=ABC123</div>
                    <uni-button size="mini" id="copy-profile-ref">Копировать</uni-button>
                </div>
                <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                    <div style="text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold;">$325.50</div>
                        <div style="font-size: 12px; color: var(--UI-FG-1);">Заработано</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 1.5em; font-weight: bold;">12</div>
                        <div style="font-size: 12px; color: var(--UI-FG-1);">Приглашено</div>
                    </div>
                </div>
            </uni-modal>

            <div style="margin-bottom: 15px;">
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 10px; cursor: pointer;">
                    <div style="display: flex; align-items: center;">
                        <div style="font-size: 1.5em; margin-right: 15px; width: 40px;">🔒</div>
                        <div style="flex: 1; font-size: 1.1em;">Безопасность</div>
                        <div style="font-size: 1.5em; color: var(--UI-FG-2);">›</div>
                    </div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 10px; cursor: pointer;">
                    <div style="display: flex; align-items: center;">
                        <div style="font-size: 1.5em; margin-right: 15px; width: 40px;">🔔</div>
                        <div style="flex: 1; font-size: 1.1em;">Уведомления</div>
                        <div style="font-size: 1.5em; color: var(--UI-FG-2);">›</div>
                    </div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 10px; cursor: pointer;">
                    <div style="display: flex; align-items: center;">
                        <div style="font-size: 1.5em; margin-right: 15px; width: 40px;">🌐</div>
                        <div style="flex: 1; font-size: 1.1em;">Язык</div>
                        <div style="font-size: 1.5em; color: var(--UI-FG-2);">›</div>
                    </div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 10px; cursor: pointer;">
                    <div style="display: flex; align-items: center;">
                        <div style="font-size: 1.5em; margin-right: 15px; width: 40px;">💬</div>
                        <div style="flex: 1; font-size: 1.1em;">Поддержка</div>
                        <div style="font-size: 1.5em; color: var(--UI-FG-2);">›</div>
                    </div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 10px; cursor: pointer;">
                    <div style="display: flex; align-items: center;">
                        <div style="font-size: 1.5em; margin-right: 15px; width: 40px;">ℹ️</div>
                        <div style="flex: 1; font-size: 1.1em;">О приложении</div>
                        <div style="font-size: 1.5em; color: var(--UI-FG-2);">›</div>
                    </div>
                </uni-modal>
            </div>

            <uni-button type="warn" id="logout-btn" style="width: 100%; padding: 15px;">
                <div style="font-size: 1.1em; font-weight: bold;">Выйти из аккаунта</div>
            </uni-button>

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
                <uni-tabbar__item data-route="/fund">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">💰</div>
                    </div>
                </uni-tabbar__item>
                <uni-tabbar__item class="active" data-route="/mine">
                    <div class="uni-tabbar__bd">
                        <div class="uni-tabbar__icon">👤</div>
                    </div>
                </uni-tabbar__item>
            </uni-tabbar>
        </div>
    `;
}

export function init() {
    document.getElementById('copy-profile-ref').addEventListener('click', () => {
        alert('Реферальная ссылка скопирована!');
    });
    
    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите выйти?')) {
            alert('Выход выполнен');
            window.history.pushState({}, '', '/login');
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    });
}
