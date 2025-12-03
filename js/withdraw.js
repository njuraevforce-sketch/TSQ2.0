// Withdraw section
export default function renderWithdraw() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Withdraw Funds</h2>
                <p style="color: #ccc;">Withdraw your USDT to your wallet</p>
            </div>

            <!-- Balance info -->
            <div class="balance-info margin-bottom" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px;">
                <div style="display: flex; justify-content: space-between;">
                    <div style="color: #ccc;">Available Balance</div>
                    <div class="text-white text-bold" id="available-balance">0.00 USDT</div>
                </div>
            </div>

            <!-- Network selection -->
            <div class="network-selection margin-bottom">
                <div class="text-white text-bold margin-bottom">Select Network</div>
                <div class="network-options">
                    <div class="network-option active" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20">
                        </div>
                        <div class="network-name">TRC20</div>
                    </div>
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bep20.png" alt="BEP20">
                        </div>
                        <div class="network-name">BEP20</div>
                    </div>
                </div>
            </div>

            <!-- Amount input -->
            <div class="amount-input margin-bottom">
                <div class="text-white text-bold margin-bottom">Amount (USDT)</div>
                <input type="number" id="withdraw-amount" placeholder="Enter amount" 
                       style="width: 100%; padding: 12px; border: 2px solid #52c41a; border-radius: 8px; background: rgba(0,0,0,0.2); color: white; font-size: 16px;">
                <div class="text-gray margin-top-sm" style="font-size: 12px;">
                    Minimum withdrawal: 20 USDT
                </div>
            </div>

            <!-- Withdrawal address -->
            <div class="withdrawal-address margin-bottom">
                <div class="text-white text-bold margin-bottom">Withdrawal Address</div>
                <div id="saved-address-display" style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; color: #ccc; word-break: break-all;">
                    Loading address...
                </div>
                <div id="no-address-message" style="display: none; background: rgba(255,107,107,0.1); padding: 12px; border-radius: 8px; color: #ff6b6b; margin-top: 10px;">
                    No withdrawal address set. Please set your withdrawal address in Settings first.
                </div>
            </div>

            <!-- Payment password -->
            <div class="payment-password margin-bottom">
                <div class="text-white text-bold margin-bottom">Payment Password</div>
                <input type="password" id="payment-password" placeholder="Enter your payment password" 
                       style="width: 100%; padding: 12px; border: 2px solid #52c41a; border-radius: 8px; background: rgba(0,0,0,0.2); color: white; font-size: 16px;">
            </div>

            <!-- Fee info -->
            <div class="fee-info margin-bottom" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px;">
                <div style="color: #ccc; margin-bottom: 10px;">Fee Information</div>
                <div id="fee-details" style="color: white;">
                    VIP 1: 7% fee<br>
                    VIP 2: 5% fee<br>
                    VIP 3: 3% fee<br>
                    VIP 4: 2% fee<br>
                    VIP 5: 1% fee<br>
                    VIP 6: 0.5% fee
                </div>
                <div id="current-fee" class="text-bold margin-top" style="color: #f9ae3d;"></div>
            </div>

            <!-- Submit button -->
            <button class="pro-btn" id="submit-withdrawal" style="width: 100%; background: #4e7771; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                Submit Withdrawal Request
            </button>

            <!-- Withdrawal history -->
            <div class="withdrawal-history margin-top">
                <div class="text-white text-bold text-center margin-bottom">Recent Withdrawals</div>
                <div id="withdrawal-history-list" style="max-height: 200px; overflow-y: auto;">
                    <div style="color: #ccc; text-align: center; padding: 20px;">No withdrawal history</div>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');

    // Load user data
    await loadUserData();
    
    // Load withdrawal history
    await loadWithdrawalHistory();

    // Network selection handler
    document.querySelectorAll('.network-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.network-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Amount input change handler
    document.getElementById('withdraw-amount').addEventListener('input', updateFeeCalculation);

    // Submit withdrawal handler
    document.getElementById('submit-withdrawal').addEventListener('click', submitWithdrawal);
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update balance
    document.getElementById('available-balance').textContent = `${user.balance.toFixed(2)} USDT`;
    
    // Update current fee
    const feePercent = getWithdrawalFee(user.vip_level);
    document.getElementById('current-fee').textContent = `Your current fee: ${feePercent}%`;
    
    // Check and display withdrawal address
    if (user.withdrawal_address) {
        document.getElementById('saved-address-display').textContent = user.withdrawal_address;
        document.getElementById('no-address-message').style.display = 'none';
    } else {
        document.getElementById('saved-address-display').textContent = 'No address set';
        document.getElementById('no-address-message').style.display = 'block';
    }
}

function updateFeeCalculation() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value) || 0;
    const user = window.getCurrentUser();
    if (!user) return;
    
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    if (amount > 0) {
        document.getElementById('current-fee').textContent = 
            `Your current fee: ${feePercent}% | Fee: ${fee.toFixed(2)} USDT | You receive: ${netAmount.toFixed(2)} USDT`;
    }
}

function getWithdrawalFee(vipLevel) {
    const fees = {
        1: 7,
        2: 5,
        3: 3,
        4: 2,
        5: 1,
        6: 0.5
    };
    return fees[vipLevel] || 7;
}

async function submitWithdrawal() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const paymentPassword = document.getElementById('payment-password').value;
    const network = document.querySelector('.network-option.active').getAttribute('data-network');
    
    // Validation
    if (!amount || amount < 20) {
        window.showCustomAlert('Minimum withdrawal amount is 20 USDT');
        return;
    }
    
    if (amount > user.balance) {
        window.showCustomAlert('Insufficient balance');
        return;
    }
    
    if (!user.withdrawal_address) {
        window.showCustomAlert('Please set withdrawal address first in Settings. For address changes, please contact support: @GLYSupport');
        return;
    }
    
    if (!paymentPassword) {
        window.showCustomAlert('Please enter payment password');
        return;
    }
    
    if (user.payment_password !== paymentPassword) {
        window.showCustomAlert('Invalid payment password');
        return;
    }
    
    // Calculate fee
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    const confirmMessage = `
        <div style="text-align: left; color: #333;">
            <p><strong>Withdrawal Details:</strong></p>
            <p>Amount: ${amount.toFixed(2)} USDT</p>
            <p>Network: ${network}</p>
            <p>Fee (${feePercent}%): ${fee.toFixed(2)} USDT</p>
            <p>You will receive: ${netAmount.toFixed(2)} USDT</p>
            <p>Address: ${user.withdrawal_address}</p>
            <p style="color: #ff6b6b; font-weight: bold;">Processing time: 1-24 hours</p>
        </div>
    `;
    
    window.showCustomModal('Confirm Withdrawal', confirmMessage, async () => {
        try {
            // Create withdrawal request in database
            const { error } = await window.supabase
                .from('withdrawal_requests')
                .insert([{
                    user_id: user.id,
                    amount: amount,
                    fee: fee,
                    net_amount: netAmount,
                    network: network,
                    address: user.withdrawal_address,
                    status: 'pending',
                    created_at: new Date().toISOString()
                }]);
                
            if (error) throw error;
            
            window.showCustomAlert(`Withdrawal request submitted successfully! You will receive ${netAmount.toFixed(2)} USDT (fee: ${fee.toFixed(2)} USDT). Processing time: 1-24 hours.`);
            
            // Clear form
            document.getElementById('withdraw-amount').value = '';
            document.getElementById('payment-password').value = '';
            
            // Update withdrawal history
            await loadWithdrawalHistory();
            
        } catch (error) {
            window.showCustomAlert('Error submitting withdrawal request: ' + error.message);
        }
    });
}

async function loadWithdrawalHistory() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('withdrawal_requests')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(10);
            
        if (error) throw error;
        
        const container = document.getElementById('withdrawal-history-list');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleDateString();
                const statusColor = withdrawal.status === 'approved' ? '#52c41a' : 
                                  withdrawal.status === 'rejected' ? '#ff4d4f' : '#f9ae3d';
                
                html += `
                    <div class="withdrawal-item" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <div style="color: white; font-weight: bold;">${withdrawal.amount} USDT</div>
                            <div style="color: ${statusColor}; font-weight: bold;">${withdrawal.status.toUpperCase()}</div>
                        </div>
                        <div style="color: #ccc; font-size: 12px;">
                            ${date} | ${withdrawal.network} | Fee: ${withdrawal.fee} USDT
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No withdrawal history</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading withdrawal history:', error);
    }
}
