// Team section
export default function renderTeam() {
    return `
        <div class="card padding">
            <div class="text-white text-bold text-center margin-bottom">Анализ доходов</div>
            
            <!-- Простая диаграмма -->
            <div class="chart-container">
                <canvas id="team-chart" width="400" height="200"></canvas>
            </div>

            <!-- Статистика команды -->
            <div class="team-stats">
                <div class="team-stat">
                    <div class="team-stat-value">15</div>
                    <div class="team-stat-label">Всего рефералов</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">8</div>
                    <div class="team-stat-label">Активных</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">245.67</div>
                    <div class="team-stat-label">Заработано (USDT)</div>
                </div>
            </div>

            <!-- Кнопка для просмотра всех рефералов -->
            <div class="pro-btn margin-top" id="view-all-referrals" style="text-align: center; background: transparent; border: 1px solid #4e7771; color: #4e7771;">
                Посмотреть все
            </div>
        </div>

        <!-- Список рефералов (изначально скрыт) -->
        <div class="card padding margin-top" id="referrals-list" style="display: none;">
            <div class="text-white text-bold text-center margin-bottom">Список рефералов</div>
            
            <!-- Уровень 1 -->
            <div class="referral-level">
                <div class="text-cyan text-bold margin-bottom">Уровень 1</div>
                <div class="referral-list" id="level1-list">
                    <!-- Заполняется динамически -->
                </div>
            </div>

            <!-- Уровень 2 -->
            <div class="referral-level margin-top">
                <div class="text-cyan text-bold margin-bottom">Уровень 2</div>
                <div class="referral-list" id="level2-list">
                    <!-- Заполняется динамически -->
                </div>
            </div>

            <!-- Уровень 3 -->
            <div class="referral-level margin-top">
                <div class="text-cyan text-bold margin-bottom">Уровень 3</div>
                <div class="referral-list" id="level3-list">
                    <!-- Заполняется динамически -->
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('no-tabbar');

    // Инициализация диаграммы
    initTeamChart();

    // Обработчик для кнопки "Посмотреть все"
    document.getElementById('view-all-referrals').addEventListener('click', function() {
        const referralsList = document.getElementById('referrals-list');
        if (referralsList.style.display === 'none') {
            referralsList.style.display = 'block';
            loadReferralsList();
            this.textContent = 'Скрыть список';
        } else {
            referralsList.style.display = 'none';
            this.textContent = 'Посмотреть все';
        }
    });
}

function initTeamChart() {
    const canvas = document.getElementById('team-chart');
    if (!canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const data = {
        labels: ['Уровень 1', 'Уровень 2', 'Уровень 3'],
        datasets: [{
            label: 'Количество рефералов',
            data: [8, 5, 2],
            backgroundColor: [
                'rgba(78, 119, 113, 0.8)',
                'rgba(78, 119, 113, 0.6)',
                'rgba(78, 119, 113, 0.4)'
            ],
            borderColor: [
                'rgba(78, 119, 113, 1)',
                'rgba(78, 119, 113, 1)',
                'rgba(78, 119, 113, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Простая реализация столбчатой диаграммы
    const maxValue = Math.max(...data.datasets[0].data);
    const barWidth = 50;
    const spacing = 30;
    const startX = 50;
    const chartHeight = 150;

    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовка столбцов
    data.datasets[0].data.forEach((value, index) => {
        const x = startX + (barWidth + spacing) * index;
        const barHeight = (value / maxValue) * chartHeight;
        const y = canvas.height - barHeight - 40;

        // Столбец
        ctx.fillStyle = data.datasets[0].backgroundColor[index];
        ctx.fillRect(x, y, barWidth, barHeight);

        // Текст значения
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, y - 5);

        // Подпись
        ctx.fillText(data.labels[index], x + barWidth / 2, canvas.height - 20);
    });
}

function loadReferralsList() {
    // Пример данных рефералов
    const referrals = {
        level1: [
            { id: 'QCF123457', email: 'user1@example.com', balance: '45.67 USDT' },
            { id: 'QCF123458', email: 'user2@example.com', balance: '23.45 USDT' },
            { id: 'QCF123459', email: 'user3@example.com', balance: '67.89 USDT' }
        ],
        level2: [
            { id: 'QCF123460', email: 'user4@example.com', balance: '12.34 USDT' },
            { id: 'QCF123461', email: 'user5@example.com', balance: '89.12 USDT' }
        ],
        level3: [
            { id: 'QCF123462', email: 'user6@example.com', balance: '34.56 USDT' }
        ]
    };

    // Заполнение уровней
    fillReferralLevel('level1-list', referrals.level1);
    fillReferralLevel('level2-list', referrals.level2);
    fillReferralLevel('level3-list', referrals.level3);
}

function fillReferralLevel(containerId, referrals) {
    const container = document.getElementById(containerId);
    let html = '';
    
    if (referrals.length === 0) {
        html = '<div style="color: #ccc; text-align: center; padding: 10px;">Нет рефералов</div>';
    } else {
        referrals.forEach(ref => {
            html += `
                <div class="referral-item">
                    <div class="referral-info">
                        <div class="referral-id">${ref.id}</div>
                        <div class="referral-email">${ref.email}</div>
                    </div>
                    <div class="referral-balance">${ref.balance}</div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
}
