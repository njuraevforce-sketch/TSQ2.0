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
                    <div class="team-stat-value" id="total-team">0</div>
                    <div class="team-stat-label">Всего в команде</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value" id="level1-count">0</div>
                    <div class="team-stat-label">Уровень 1</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value" id="team-earnings">0.00</div>
                    <div class="team-stat-label">Заработано (USDT)</div>
                </div>
            </div>

            <!-- Кнопка для просмотра всех рефералов -->
            <div class="pro-btn margin-top" id="view-all-referrals" style="text-align: center; background: transparent; border: 1px solid #4e7771; color: #4e7771;">
                Посмотреть команду
            </div>
        </div>

        <!-- Список рефералов -->
        <div class="card padding margin-top" id="referrals-list" style="display: none;">
            <div class="text-white text-bold text-center margin-bottom">Ваша команда</div>
            
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

export async function init() {
    document.body.classList.add('no-tabbar');

    // Загрузка данных команды
    await loadTeamData();

    // Обработчик для кнопки
    const viewAllBtn = document.getElementById('view-all-referrals');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            const referralsList = document.getElementById('referrals-list');
            if (referralsList.style.display === 'none') {
                referralsList.style.display = 'block';
                loadReferralsList();
                this.textContent = 'Скрыть команду';
            } else {
                referralsList.style.display = 'none';
                this.textContent = 'Посмотреть команду';
            }
        });
    }
}

async function loadTeamData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    try {
        // Получаем статистику по уровням
        const { data: level1, error: error1 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 1);
            
        const { data: level2, error: error2 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 2);
            
        const { data: level3, error: error3 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 3);
        
        if (error1 || error2 || error3) {
            throw new Error('Error loading team data');
        }
        
        const level1Count = level1?.length || 0;
        const level2Count = level2?.length || 0;
        const level3Count = level3?.length || 0;
        const totalTeam = level1Count + level2Count + level3Count;
        
        // Обновляем статистику
        document.getElementById('total-team').textContent = totalTeam;
        document.getElementById('level1-count').textContent = level1Count;
        
        // Получаем общий заработок от команды
        const { data: transactions } = await supabase
            .from('transactions')
            .select('amount')
            .eq('user_id', user.id)
            .eq('type', 'referral');
            
        const teamEarnings = transactions?.reduce((sum, t) => sum + t.amount, 0) || 0;
        document.getElementById('team-earnings').textContent = teamEarnings.toFixed(2);
        
        // Инициализация диаграммы
        initTeamChart(level1Count, level2Count, level3Count);
        
    } catch (error) {
        console.error('Error loading team data:', error);
    }
}

function initTeamChart(level1Count, level2Count, level3Count) {
    const canvas = document.getElementById('team-chart');
    if (!canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const data = {
        labels: ['Уровень 1', 'Уровень 2', 'Уровень 3'],
        datasets: [{
            label: 'Количество рефералов',
            data: [level1Count, level2Count, level3Count],
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

    const maxValue = Math.max(...data.datasets[0].data) || 1;
    const barWidth = 50;
    const spacing = 30;
    const startX = 50;
    const chartHeight = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    data.datasets[0].data.forEach((value, index) => {
        const x = startX + (barWidth + spacing) * index;
        const barHeight = (value / maxValue) * chartHeight;
        const y = canvas.height - barHeight - 40;

        ctx.fillStyle = data.datasets[0].backgroundColor[index];
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, y - 5);

        ctx.fillText(data.labels[index], x + barWidth / 2, canvas.height - 20);
    });
}

async function loadReferralsList() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Получаем рефералов по уровням
        const { data: level1 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 1);
            
        const { data: level2 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 2);
            
        const { data: level3 } = await supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', user.id)
            .eq('level', 3);
        
        // Заполняем уровни
        await fillReferralLevel('level1-list', level1 || []);
        await fillReferralLevel('level2-list', level2 || []);
        await fillReferralLevel('level3-list', level3 || []);
        
    } catch (error) {
        console.error('Error loading referrals list:', error);
    }
}

async function fillReferralLevel(containerId, referrals) {
    const container = document.getElementById(containerId);
    let html = '';
    
    if (referrals.length === 0) {
        html = '<div style="color: #ccc; text-align: center; padding: 10px;">Нет рефералов</div>';
    } else {
        for (const ref of referrals) {
            const { data: user } = await supabase
                .from('users')
                .select('username, email, balance, created_at')
                .eq('id', ref.referred_id)
                .maybeSingle();  // Используем maybeSingle
                
            if (user) {
                const date = new Date(user.created_at).toLocaleDateString();
                html += `
                    <div class="referral-item">
                        <div class="referral-info">
                            <div class="referral-id">${user.username}</div>
                            <div class="referral-email">${date} | Баланс: ${user.balance.toFixed(2)} USDT</div>
                        </div>
                    </div>
                `;
            }
        }
    }
    
    container.innerHTML = html;
}
