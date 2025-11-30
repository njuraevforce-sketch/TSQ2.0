// Team section
export default function renderTeam() {
    return `
        <div class="card padding">
            <div class="text-center margin-bottom">
                <h2 class="text-white">Моя команда</h2>
                <p class="text-gray">Анализ доходов и структура команды</p>
            </div>

            <!-- Диаграмма -->
            <div class="chart-section margin-bottom">
                <canvas id="team-chart" width="400" height="200"></canvas>
            </div>

            <!-- Статистика по уровням -->
            <div class="team-stats margin-bottom">
                <div class="team-stat-item">
                    <div class="team-stat-level">Уровень 1</div>
                    <div class="team-stat-bar">
                        <div class="team-stat-fill" style="width: 80%"></div>
                    </div>
                    <div class="team-stat-count">8 человек</div>
                </div>
                <div class="team-stat-item">
                    <div class="team-stat-level">Уровень 2</div>
                    <div class="team-stat-bar">
                        <div class="team-stat-fill" style="width: 60%"></div>
                    </div>
                    <div class="team-stat-count">5 человек</div>
                </div>
                <div class="team-stat-item">
                    <div class="team-stat-level">Уровень 3</div>
                    <div class="team-stat-bar">
                        <div class="team-stat-fill" style="width: 30%"></div>
                    </div>
                    <div class="team-stat-count">2 человека</div>
                </div>
            </div>

            <!-- Кнопка просмотра всех -->
            <button class="view-all-btn" id="view-all-btn">
                Посмотреть все
            </button>
        </div>

        <!-- Попап со списком рефералов -->
        <div class="pop-overlay" id="referrals-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Все рефералы</div>
                <div class="pop-body">
                    <div class="referrals-list">
                        <div class="referral-level-section">
                            <h4 class="text-cyan">Уровень 1</h4>
                            <div class="referral-item">
                                <div class="referral-info">
                                    <div class="referral-id">ID: QCF789012</div>
                                    <div class="referral-email">user1@email.com</div>
                                </div>
                                <div class="referral-balance">245.67 USDT</div>
                            </div>
                            <div class="referral-item">
                                <div class="referral-info">
                                    <div class="referral-id">ID: QCF789013</div>
                                    <div class="referral-email">user2@email.com</div>
                                </div>
                                <div class="referral-balance">189.45 USDT</div>
                            </div>
                        </div>
                        
                        <div class="referral-level-section">
                            <h4 class="text-cyan">Уровень 2</h4>
                            <div class="referral-item">
                                <div class="referral-info">
                                    <div class="referral-id">ID: QCF789014</div>
                                    <div class="referral-email">user3@email.com</div>
                                </div>
                                <div class="referral-balance">156.23 USDT</div>
                            </div>
                        </div>
                        
                        <div class="referral-level-section">
                            <h4 class="text-cyan">Уровень 3</h4>
                            <div class="referral-item">
                                <div class="referral-info">
                                    <div class="referral-id">ID: QCF789015</div>
                                    <div class="referral-email">user4@email.com</div>
                                </div>
                                <div class="referral-balance">98.76 USDT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-referrals">Закрыть</button>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Инициализация диаграммы
    initTeamChart();
    
    // Обработчики кнопок
    document.getElementById('view-all-btn').addEventListener('click', showAllReferrals);
    document.getElementById('close-referrals').addEventListener('click', hideAllReferrals);
}

function initTeamChart() {
    const canvas = document.getElementById('team-chart');
    const ctx = canvas.getContext('2d');
    
    // Данные для диаграммы
    const data = {
        labels: ['Уровень 1', 'Уровень 2', 'Уровень 3'],
        datasets: [{
            data: [8, 5, 2],
            backgroundColor: ['#4e7771', '#3d615c', '#2c4945'],
            borderColor: ['#4e7771', '#3d615c', '#2c4945'],
            borderWidth: 1
        }]
    };
    
    // Рисуем простую столбчатую диаграмму
    const maxValue = Math.max(...data.datasets[0].data);
    const barWidth = 60;
    const spacing = 30;
    const startX = 50;
    const chartHeight = 150;
    
    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем столбцы
    data.datasets[0].data.forEach((value, index) => {
        const x = startX + (barWidth + spacing) * index;
        const barHeight = (value / maxValue) * chartHeight;
        const y = canvas.height - barHeight - 40;
        
        // Столбец
        ctx.fillStyle = data.datasets[0].backgroundColor[index];
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Подпись значения
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, y - 5);
        
        // Подпись уровня
        ctx.fillStyle = '#ccc';
        ctx.font = '11px Arial';
        ctx.fillText(data.labels[index], x + barWidth / 2, canvas.height - 20);
    });
}

function showAllReferrals() {
    document.getElementById('referrals-popup').style.display = 'flex';
}

function hideAllReferrals() {
    document.getElementById('referrals-popup').style.display = 'none';
}
