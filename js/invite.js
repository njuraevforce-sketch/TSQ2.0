// Invite section
export default function renderInvite() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Invite Friends</h2>
                <p style="color: #ccc;">Earn bonuses for invited friends</p>
            </div>

            <!-- QR Code -->
            <div class="qr-code">
                <img src="" alt="QR Code" id="qr-code-image">
            </div>

            <!-- Referral link -->
            <div class="referral-section">
                <div class="referral-content">
                    <div class="referral-info">
                        <div class="referral-text">
                            <h4>Referral Link</h4>
                            <p id="referral-link">Loading...</p>
                        </div>
                    </div>
                    <button class="copy-btn" id="copy-referral-btn">
                        <i class="fas fa-copy"></i> COPY
                    </button>
                </div>
            </div>

            <!-- Invitation statistics -->
            <div class="card padding margin-top">
                <div class="text-white text-bold text-center">Invitation Statistics</div>
                <div class="referral-stats">
                    <div class="referral-stat">
                        <div class="text-gray">Invited</div>
                        <div class="text-white text-bold" id="total-referrals">0</div>
                    </div>
                    <div class="referral-stat">
                        <div class="text-gray">Active</div>
                        <div class="text-white text-bold" id="active-referrals">0</div>
                    </div>
                    <div class="referral-stat">
                        <div class="text-gray">Earned</div>
                        <div class="text-white text-bold" id="referral-earnings">0.00 USDT</div>
                    </div>
                </div>
            </div>

            <!-- Invitation code -->
            <div class="card padding margin-top">
                <div class="text-white text-bold text-center">Your Invitation Code</div>
                <div class="referral-section margin-top">
                    <div class="referral-content">
                        <div class="referral-info">
                            <div class="referral-text">
                                <h4>Invitation Code</h4>
                                <p id="invite-code">Loading...</p>
                            </div>
                        </div>
                        <button class="copy-btn" id="copy-invite-code">
                            <i class="fas fa-copy"></i> COPY
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Referral bonuses -->
            <div class="card padding margin-top">
                <div class="text-white text-bold text-center">Referral Bonuses</div>
                <div style="color: #ccc; font-size: 14px; text-align: center; margin-top: 10px;">
                    <p>Level 1: 12% of referral's earnings</p>
                    <p>Level 2: 5% of referral's earnings</p>
                    <p>Level 3: 3% of referral's earnings</p>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');

    // Load user data
    await loadUserData();
    
    // Load statistics
    await loadReferralStats();

    // Copy referral link
    const copyReferralBtn = document.getElementById('copy-referral-btn');
    if (copyReferralBtn) {
        copyReferralBtn.addEventListener('click', function() {
            const referralLink = document.getElementById('referral-link').textContent;
            window.GLY.copyToClipboard(referralLink).then(() => {
                const originalText = copyReferralBtn.innerHTML;
                copyReferralBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
                setTimeout(function() {
                    copyReferralBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Copy invitation code
    const copyInviteCodeBtn = document.getElementById('copy-invite-code');
    if (copyInviteCodeBtn) {
        copyInviteCodeBtn.addEventListener('click', function() {
            const inviteCode = document.getElementById('invite-code').textContent;
            window.GLY.copyToClipboard(inviteCode).then(() => {
                const originalText = copyInviteCodeBtn.innerHTML;
                copyInviteCodeBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
                setTimeout(() => {
                    copyInviteCodeBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update invitation code
    document.getElementById('invite-code').textContent = user.invite_code;
    
    // Generate referral link
    const referralLink = `https://2galaxy.win/#register?ref=${user.invite_code}`;
    document.getElementById('referral-link').textContent = referralLink;
    
    // Generate QR code
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(referralLink)}`;
    document.getElementById('qr-code-image').src = qrCodeUrl;
}

async function loadReferralStats() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Get referral count
        const { data: referrals, error } = await supabase
            .from('referrals')
            .select('referred_id, level')
            .eq('referrer_id', user.id)
            .eq('level', 1);
            
        if (error) throw error;
        
        const totalReferrals = referrals?.length || 0;
        document.getElementById('total-referrals').textContent = totalReferrals;
        
        // Count active referrals (balance ≥ 20 USDT)
        let activeReferrals = 0;
        let referralEarnings = 0;
        
        if (referrals && referrals.length > 0) {
            for (const referral of referrals) {
                const { data: referredUser } = await supabase
                    .from('users')
                    .select('balance')
                    .eq('id', referral.referred_id)
                    .maybeSingle();
                    
                if (referredUser && referredUser.balance >= 20) {
                    activeReferrals++;
                }
            }
            
            // Get total earnings from referrals
            const { data: transactions } = await supabase
                .from('transactions')
                .select('amount')
                .eq('user_id', user.id)
                .eq('type', 'referral');
                
            if (transactions) {
                referralEarnings = transactions.reduce((sum, t) => sum + t.amount, 0);
            }
        }
        
        document.getElementById('active-referrals').textContent = activeReferrals;
        document.getElementById('referral-earnings').textContent = `${referralEarnings.toFixed(2)} USDT`;
        
    } catch (error) {
        console.error('Error loading referral stats:', error);
    }
}
