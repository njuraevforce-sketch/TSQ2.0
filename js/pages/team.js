export function render() {
    return `
        <div style="padding: 20px; padding-bottom: 100px;">
            <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; margin-bottom: 15px;">
                <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 15px;">Ваша реферальная ссылка</div>
                <div style="display: flex; align-items: center; justify-content: space-between; background: var(--UI-BG-1); border-radius: 5px; padding: 15px; margin: 10px 0;">
                    <div style="flex: 1; color: var(--UI-FG-1);">https://app.com/register?ref=ABC123</div>
                    <uni-button size="mini" id="copy-ref-link">Копировать</uni-button>
                </div>
                <div style="color: var(--UI-FG-2); font-size: 0.9em;">Приглашайте друзей и получайте до 8% от их депозитов</div>
            </uni-modal>

            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">12</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Всего рефералов</div>
                </uni-modal>
                <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 20px; flex: 1; text-align: center;">
                    <div style="font-size: 1.5em; font-weight: bold;">$325.50</div>
                    <div style="font-size: 12px; color: var(--UI-FG-1);">Заработано</div>
                </uni-modal>
            </div>

            <uni-actionsheet style="background: var(--UI-BG-1); border-radius: 5px; margin: 15px 0; padding: 5px;">
                <div style="display: flex;">
                    <div style="flex: 1; text-align: center; padding: 15px; border-bottom: 3px solid #007aff;">1-е поколение (5)</div>
                    <div style="flex: 1; text-align: center; padding: 15px;">2-е поколение (4)</div>
                    <div style="flex: 1; text-align: center; padding: 15px;">3-е поколение (3)</div>
                </div>
            </uni-actionsheet>

            <div style="margin-top: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <div style="color: #007aff; font-weight: bold;">8% от депозитов</div>
                    <div style="color: var(--UI-FG-2);">Заработано: $156.80</div>
                </div>

                <div id="ref-list"></div>
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
                <uni-tabbar__item class="active" data-route="/team">
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
    document.getElementById('copy-ref-link').addEventListener('click', () => {
        alert('Ссылка скопирована в буфер обмена!');
    });
    
    loadRefereals(1);
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
        <uni-modal style="background: var(--UI-BG-2); border-radius: 5px; padding: 15px; margin-bottom: 10px;">
            <div style="display: flex; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: #007aff; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; color: white;">${ref.name.charAt(0)}</div>
                <div style="flex: 1;">
                    <div style="font-weight: bold;">${ref.name}</div>
                    <div style="font-size: 0.9em; color: var(--UI-FG-2);">Присоединился: ${ref.joinDate}</div>
                </div>
                <div style="text-align: right;">
                    <div style="color: #007aff; font-weight: bold;">+$${ref.earnings}</div>
                    <div style="font-size: 0.9em; color: var(--UI-FG-2);">Ваш доход</div>
                </div>
            </div>
        </uni-modal>
    `).join('');
}
