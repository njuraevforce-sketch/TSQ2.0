// team.js
export default function renderTeam() {
    return `
        <div class="card padding">
            <div class="text-white text-bold text-center margin-bottom">Income Analysis</div>
            
            <!-- New chart container -->
            <div class="chart-container">
                <canvas id="team-chart" width="526.25" height="250" style="width: 100%; height: 250px; background: none; position: relative;"></canvas>
            </div>

            <!-- Team statistics -->
            <div class="team-stats">
                <div class="team-stat">
                    <div class="team-stat-value" id="total-team">0</div>
                    <div class="team-stat-label">Total in Team</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value" id="level1-count">0</div>
                    <div class="team-stat-label">Level 1</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value" id="team-earnings">0.00</div>
                    <div class="team-stat-label">Earned (USDT)</div>
                </div>
            </div>

            <!-- Button to view all referrals -->
            <div class="pro-btn margin-top" id="view-all-referrals" style="text-align: center; background: transparent; border: 1px solid #4e7771; color: #4e7771;">
                View Team
            </div>
        </div>

        <!-- Referrals list -->
        <div class="card padding margin-top" id="referrals-list" style="display: none;">
            <div class="text-white text-bold text-center margin-bottom">Your Team</div>
            
            <!-- Level 1 -->
            <div class="referral-level">
                <div class="text-cyan text-bold margin-bottom">Level 1</div>
                <div class="referral-list" id="level1-list">
                    <!-- Filled dynamically -->
                </div>
            </div>

            <!-- Level 2 -->
            <div class="referral-level margin-top">
                <div class="text-cyan text-bold margin-bottom">Level 2</div>
                <div class="referral-list" id="level2-list">
                    <!-- Filled dynamically -->
                </div>
            </div>

            <!-- Level 3 -->
            <div class="referral-level margin-top">
                <div class="text-cyan text-bold margin-bottom">Level 3</div>
                <div class="referral-list" id="level3-list">
                    <!-- Filled dynamically -->
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');

    // Load team data
    await loadTeamData();

    // Button handler
    const viewAllBtn = document.getElementById('view-all-referrals');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            const referralsList = document.getElementById('referrals-list');
            if (referralsList.style.display === 'none') {
                referralsList.style.display = 'block';
                loadReferralsList();
                this.textContent = 'Hide Team';
            } else {
                referralsList.style.display = 'none';
                this.textContent = 'View Team';
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
        // Get statistics by levels
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
        
        // Update statistics
        document.getElementById('total-team').textContent = totalTeam;
        document.getElementById('level1-count').textContent = level1Count;
        
        // Get total earnings from team
        const { data: transactions } = await supabase
            .from('transactions')
            .select('amount')
            .eq('user_id', user.id)
            .eq('type', 'referral');
            
        const teamEarnings = transactions?.reduce((sum, t) => sum + t.amount, 0) || 0;
        document.getElementById('team-earnings').textContent = teamEarnings.toFixed(2);
        
        // Initialize chart with new style
        initTeamChart(level1Count, level2Count, level3Count);
        
    } catch (error) {
        console.error('Error loading team data:', error);
    }
}

function initTeamChart(level1Count, level2Count, level3Count) {
    const canvas = document.getElementById('team-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set chart dimensions
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const padding = 40;
    const graphWidth = chartWidth - 2 * padding;
    const graphHeight = chartHeight - 2 * padding;
    
    // Prepare data
    const data = [
        { label: 'Level 1', value: level1Count, color: '#4e7771' },
        { label: 'Level 2', value: level2Count, color: '#3d615c' },
        { label: 'Level 3', value: level3Count, color: '#2c4b45' }
    ];
    
    // Find max value
    const maxValue = Math.max(...data.map(d => d.value), 1);
    
    // Calculate bar properties
    const barCount = data.length;
    const barWidth = graphWidth / barCount * 0.6;
    const barSpacing = graphWidth / barCount * 0.4;
    
    // Draw bars
    data.forEach((item, index) => {
        const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
        const barHeight = (item.value / maxValue) * graphHeight;
        const y = chartHeight - padding - barHeight;
        
        // Draw bar
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top of bar
        if (item.value > 0) {
            ctx.fillStyle = '#fff';
            ctx.font = '12px Helvetica Neue, Helvetica, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(item.value, x + barWidth / 2, y - 5);
        }
        
        // Draw label below bar
        ctx.fillStyle = '#e3e3e3';
        ctx.font = '12px Helvetica Neue, Helvetica, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, x + barWidth / 2, chartHeight - padding + 20);
    });
    
    // Draw Y-axis labels
    ctx.fillStyle = '#ccc';
    ctx.font = '10px Helvetica Neue, Helvetica, sans-serif';
    ctx.textAlign = 'right';
    
    // Draw 3 grid lines and labels
    for (let i = 0; i <= 3; i++) {
        const value = (maxValue * i / 3);
        const y = chartHeight - padding - (graphHeight * i / 3);
        
        // Draw grid line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(chartWidth - padding, y);
        ctx.stroke();
        
        // Draw label
        ctx.fillStyle = '#ccc';
        ctx.fillText(value.toFixed(0), padding - 10, y + 3);
    }
    
    // Draw title
    ctx.fillStyle = '#fff';
    ctx.font = '14px Helvetica Neue, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Team Referrals by Level', chartWidth / 2, 20);
}

async function loadReferralsList() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Get referrals by levels
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
        
        // Fill levels
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
        html = '<div style="color: #ccc; text-align: center; padding: 10px;">No referrals</div>';
    } else {
        for (const ref of referrals) {
            const { data: user } = await supabase
                .from('users')
                .select('username, email, balance, created_at')
                .eq('id', ref.referred_id)
                .maybeSingle();
                
            if (user) {
                const date = new Date(user.created_at).toLocaleDateString();
                html += `
                    <div class="referral-item">
                        <div class="referral-info">
                            <div class="referral-id">${user.username}</div>
                            <div class="referral-email">${date} | Balance: ${user.balance.toFixed(2)} USDT</div>
                        </div>
                    </div>
                `;
            }
        }
    }
    
    container.innerHTML = html;
}
