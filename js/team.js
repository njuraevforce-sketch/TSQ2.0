// team.js - UPDATED with pie chart
export default function renderTeam() {
    return `
        <div class="card padding">
            <div class="text-white text-bold text-center margin-bottom">Income Analysis</div>
            
            <!-- New pie chart container -->
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
        
        // Initialize pie chart with new style
        initTeamPieChart(level1Count, level2Count, level3Count);
        
    } catch (error) {
        console.error('Error loading team data:', error);
    }
}

function initTeamPieChart(level1Count, level2Count, level3Count) {
    const canvas = document.getElementById('team-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set chart dimensions
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const centerX = chartWidth / 2;
    const centerY = chartHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    
    // Prepare data
    const data = [
        { label: 'Level 1', value: level1Count, color: '#4e7771' },
        { label: 'Level 2', value: level2Count, color: '#f9ae3d' },
        { label: 'Level 3', value: level3Count, color: '#2c4b45' }
    ];
    
    // Filter out zero values
    const filteredData = data.filter(item => item.value > 0);
    
    // If no data, show message
    if (filteredData.length === 0) {
        ctx.fillStyle = '#ccc';
        ctx.font = '14px Helvetica Neue, Helvetica, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('No team members yet', centerX, centerY);
        return;
    }
    
    // Calculate total
    const total = filteredData.reduce((sum, item) => sum + item.value, 0);
    
    // Draw pie chart
    let startAngle = 0;
    
    filteredData.forEach((item, index) => {
        const sliceAngle = (item.value / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;
        
        // Draw slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        ctx.fillStyle = item.color;
        ctx.fill();
        
        // Draw slice border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw label
        const labelAngle = startAngle + sliceAngle / 2;
        const labelRadius = radius * 0.7;
        const labelX = centerX + Math.cos(labelAngle) * labelRadius;
        const labelY = centerY + Math.sin(labelAngle) * labelRadius;
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Helvetica Neue, Helvetica, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.value.toString(), labelX, labelY);
        
        startAngle = endAngle;
    });
    
    // Draw legend
    const legendX = 20;
    let legendY = chartHeight - 80;
    
    filteredData.forEach((item, index) => {
        // Draw color box
        ctx.fillStyle = item.color;
        ctx.fillRect(legendX, legendY, 15, 15);
        
        // Draw legend text
        ctx.fillStyle = '#e3e3e3';
        ctx.font = '12px Helvetica Neue, Helvetica, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        
        const percentage = ((item.value / total) * 100).toFixed(1);
        ctx.fillText(`${item.label}: ${item.value} (${percentage}%)`, legendX + 25, legendY + 7.5);
        
        legendY += 25;
    });
    
    // Draw total in center
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Helvetica Neue, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Total', centerX, centerY - 10);
    
    ctx.fillStyle = '#f9ae3d';
    ctx.font = 'bold 20px Helvetica Neue, Helvetica, sans-serif';
    ctx.fillText(total.toString(), centerX, centerY + 15);
    
    // Draw title
    ctx.fillStyle = '#fff';
    ctx.font = '14px Helvetica Neue, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Team Distribution by Level', chartWidth / 2, 20);
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
