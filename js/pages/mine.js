export function render() {
    return `
        <div class="page">
            <div class="profile-header">
                <div class="user-info" style="display: flex; align-items: center;">
                    <div style="margin-right: 20px;">
                        <div class="user-avatar">ИИ</div>
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <div style="width: 8px; height: 8px; background: #4e7771; border-radius: 50%; margin-right: 5px;"></div>
                            <div style="font-size: 0.9em; color: #b2b2b2;">Online</div>
                        </div>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">Иван Иванов</div>
                        <div style="color: #b2b2b2; margin-bottom: 8px;">ID: 123456</div>
                        <div style="background: #4e7771; color: white; padding: 5px 15px; border-radius: 15px; display: inline-block;">VIP 3</div>
                    </div>
                </div>
            </div>

            <div class="profile-stats" style="margin: 20px 0;">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">45</div>
                        <div class="stat-label">Дней в игре</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">12</div>
                        <div class="stat-label">Рефералов</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">89</div>
                        <div class="stat-label">Заданий</div>
                    </div>
                </div>
            </div>

            <div class="ref-section">
                <div class="ref-link-card">
                    <div class="ref-title" style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px;">Реферальная программа</div>
                    <div class="ref-link">
                        <div class="link-text" style="flex: 1;">https://app.com/register?ref=ABC123</div>
                        <div class="copy-btn" id="copy-profile-ref">Копировать</div>
                    </div>
                    <div class="ref-stats" style="display: flex; justify-content: space-around; margin-top: 15px;">
                        <div class="ref-stat" style="text-align: center;">
                            <div class="stat-value">$325.50</div>
                            <div class="stat-label">Заработано</div>
                        </div>
                        <div class="ref-stat" style="text-align: center;">
                            <div class="stat-value">12</div>
                            <div class="stat-label">Приглашено</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="settings-section" style="margin: 20px 0;">
                <div class="setting-item" id="security-btn">
                    <div class="setting-icon">🔒</div>
                    <div class="setting-text">Безопасность</div>
                    <div class="setting-arrow">›</div>
                </div>
                <div class="setting-item" id="notifications-btn">
                    <div class="setting-icon">🔔</div>
                    <div class="setting-text">Уведомления</div>
                    <div class="setting-arrow">›</div>
                </div>
                <div class="setting-item" id="language-btn">
                    <div class="setting-icon">🌐</div>
                    <div class="setting-text">Язык</div>
                    <div class="setting-arrow">›</div>
                </div>
                <div class="setting-item" id="support-btn">
                    <div class="setting-icon">💬</div>
                    <div class="setting-text">Поддержка</div>
                    <div class="setting-arrow">›</div>
                </div>
                <div class="setting-item" id="about-btn">
                    <div class="setting-icon">ℹ️</div>
                    <div class="setting-text">О приложении</div>
                    <div class="setting-arrow">›</div>
                </div>
            </div>

            <div class="logout-section">
                <div class="logout-btn" id="logout-btn">
                    <div style="font-size: 1.1em; font-weight: bold;">Выйти из аккаунта</div>
                </div>
            </div>

            <nav class="tab-bar">
                <div class="tab" data-route="/">🏠 Главная</div>
                <div class="tab" data-route="/vip">⭐ VIP</div>
                <div class="tab" data-route="/team">👥 Рефералы</div>
                <div class="tab" data-route="/fund">💰 Кошелек</div>
                <div class="tab active" data-route="/mine">👤 Профиль</div>
            </nav>
        </div>
    `;
}

export function init() {
    document.getElementById('copy-profile-ref').addEventListener('click', () => {
        alert('Реферальная ссылка скопирована!');
    });
    
    document.getElementById('security-btn').addEventListener('click', () => {
        alert('Переход к настройкам безопасности');
    });
    
    document.getElementById('notifications-btn').addEventListener('click', () => {
        alert('Переход к уведомлениям');
    });
    
    document.getElementById('language-btn').addEventListener('click', () => {
        alert('Переход к настройкам языка');
    });
    
    document.getElementById('support-btn').addEventListener('click', () => {
        alert('Переход в поддержку');
    });
    
    document.getElementById('about-btn').addEventListener('click', () => {
        alert('О приложении');
    });
    
    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите выйти?')) {
            alert('Выход выполнен');
            window.history.pushState({}, '', '/login');
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    });
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}
