export function render() {
    return `
        <div class="page">
            <div class="team-header">
                <div class="ref-link-card">
                    <div class="ref-title" style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px;">Ваша реферальная ссылка</div>
                    <div class="ref-link">
                        <div class="link-text" style="flex: 1;">https://app.com/register?ref=ABC123</div>
                        <div class="copy-btn" id="copy-ref-link">Копировать</div>
                    </div>
                    <div style="color: #b2b2b2; font-size: 0.9em;">Приглашайте друзей и получайте до 8% от их депозитов</div>
                </div>
            </div>

            <div class="ref-stats" style="margin: 20px 0;">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">12</div>
                        <div class="stat-label">Всего рефералов</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">$325.50</div>
                        <div class="stat-label">Заработано</div>
                    </div>
                </div>
            </div>

            <div class="ref-levels">
                <div class="level-tabs" id="level-tabs">
                    <div class="level-tab active" data-level="1">1-е поколение (5)</div>
                    <div class="level-tab" data-level="2">2-е поколение (4)</div>
                    <div class="level-tab" data-level="3">3-е поколение (3)</div>
                </div>

                <div class="level-content" style="margin-top: 20px;">
                    <div class="level-info" style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                        <div class="level-percent" style="color: #4e7771; font-weight: bold;">8% от депозитов</div>
                        <div class="level-earnings" style="color: #e3e3e3;">Заработано: $156.80</div>
                    </div>

                    <div id="ref-list">
                        <!-- Рефералы загружаются динамически -->
                    </div>
                </div>
            </div>

            <nav class="tab-bar">
                <div class="tab" data-route="/">🏠 Главная</div>
                <div class="tab" data-route="/vip">⭐ VIP</div>
                <div class="tab active" data-route="/team">👥 Рефералы</div>
                <div class="tab" data-route="/fund">💰 Кошелек</div>
                <div class="tab" data-route="/mine">👤 Профиль</div>
            </nav>
        </div>
    `;
}

export function init() {
    document.getElementById('copy-ref-link').addEventListener('click', () => {
        alert('Ссылка скопирована в буфер обмена!');
    });
    
    loadRefereals(1);
    
    document.querySelectorAll('.level-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadRefereals(parseInt(tab.getAttribute('data-level')));
        });
    });
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-route') === window.location.pathname) {
            tab.classList.add('active');
        }
    });
}

function loadRefereals(level) {
    const refereals = {
        1: [
            { id: 1, name: 'Иван Петров', joinDate: '15.01.2024', earnings: 156.80 },
            { id: 2, name: 'Мария Сидорова', joinDate: '18.01.2024', earnings: 89.50 },
            { id: 3, name: 'Алексей Козлов', joinDate: '20.01.2024', earnings: 42.20 }
        ],
        2: [
            { id: 4, name: 'Сергей Иванов', joinDate: '22.01.2024', earnings: 25.30 },
            { id: 5, name: 'Ольга Смирнова', joinDate: '25.01.2024', earnings: 18.90 }
        ],
        3: [
            { id: 6, name: 'Дмитрий Попов', joinDate: '28.01.2024', earnings: 8.50 },
            { id: 7, name: 'Екатерина Новикова', joinDate: '30.01.2024', earnings: 5.20 }
        ]
    };
    
    const container = document.getElementById('ref-list');
    const data = refereals[level] || [];
    
    container.innerHTML = data.map(ref => `
        <div class="ref-item">
            <div class="ref-avatar">${ref.name.charAt(0)}</div>
            <div class="ref-info">
                <div class="ref-name">${ref.name}</div>
                <div class="ref-date">Присоединился: ${ref.joinDate}</div>
            </div>
            <div style="text-align: right;">
                <div style="color: #4e7771; font-weight: bold;">+$${ref.earnings}</div>
                <div style="font-size: 0.9em; color: #b2b2b2;">Ваш доход</div>
            </div>
        </div>
    `).join('');
}
