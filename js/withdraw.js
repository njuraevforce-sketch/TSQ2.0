// Withdraw section
export default function renderWithdraw() {
    return `
        <div class="card padding">
            <div class="text-white text-bold margin-bottom" style="text-align: center; font-size: 16px;">Withdraw USDT</div>
            
            <!-- Balance info -->
            <div class="balance-display" style="text-align: center; margin-bottom: 20px;">
                <div style="color: #ccc; font-size: 12px;">Available Balance</div>
                <div id="available-balance-display" style="color: #f9ae3d; font-size: 24px; font-weight: bold; margin: 5px 0;">0.00 USDT</div>
            </div>
            
            <!-- Network Selection -->
            <div class="network-selection">
                <div class="network-option active" data-network="trc20">
                    <img src="assets/trc20.png?v=1.0" alt="TRC20">
                    <span>TRC20</span>
                </div>
                <div class="network-option" data-network="bep20">
                    <img src="assets/bep20.png?v=1.0" alt="BEP20">
                    <span>BEP20</span>
                </div>
            </div>
            
            <!-- Withdrawal Form -->
            <div class="withdraw-form">
                <div class="form-group">
                    <label>Wallet Address</label>
                    <input type="text" id="withdraw-address" placeholder="Enter your wallet address" 
                           class="input-line">
                    <div class="saved-address" id="saved-address-info" style="display: none;">
                        <span style="color: #ccc; font-size: 12px;">Saved: <span id="saved-address-text" style="color: #52c41a;"></span></span>
                        <button id="use-saved-address" style="font-size: 11px; padding: 3px 10px; background: #4e7771; color: white; border: none; border-radius: 3px; cursor: pointer;">Use</button>
                    </div>
                    <div id="address-warning" style="display: none; color: #ff6b6b; font-size: 11px; margin-top: 5px;">
                        No withdrawal address saved. Please set it in Settings or contact support.
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Amount (USDT)</label>
                    <input type="number" id="withdraw-amount" placeholder="Minimum 20 USDT" 
                           class="input-line">
                    <div class="balance-info">
                        <span style="color: #ccc; font-size: 12px;">Available: <span id="available-balance" style="color: #f9ae3d; font-weight: bold;">0.00</span> USDT</span>
                        <button id="withdraw-max" style="font-size: 11px; padding: 2px 8px; background: transparent; border: 1px solid #4e7771; color: #4e7771; border-radius: 3px; cursor: pointer; margin-left: 10px;">MAX</button>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Transaction Password</label>
                    <input type="password" id="withdraw-password" placeholder="Enter transaction password" 
                           class="input-line">
                </div>
                
                <!-- Fee Info -->
                <div class="fee-info">
                    <div>Withdrawal Amount: <span id="withdrawal-amount">0.00</span> USDT</div>
                    <div>Network Fee (TRC20): <span id="network-fee">1.00</span> USDT</div>
                    <div>VIP Fee (<span id="vip-fee-percent">7</span>%): <span id="vip-fee">0.00</span> USDT</div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px; margin-top: 5px; font-weight: bold; color: #f9ae3d;">You Receive: <span id="receive-amount">0.00</span> USDT</div>
                </div>
                
                <button class="pro-btn" id="submit-withdraw" style="width: 100%; margin-top: 20px; background: linear-gradient(135deg, #4e7771, #3d615c);">Submit Withdrawal</button>
                
                <div class="withdraw-notice">
                    <p style="font-size: 12px; color: #ccc; text-align: center; line-height: 1.4;">
                        ⚠️ Withdrawal processing time: 1-24 hours<br>
                        ⚠️ For address changes, contact Telegram support<br>
                        ⚠️ Double-check address before submitting
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Withdrawal History -->
        <div class="card padding margin-top">
            <div class="text-white text-bold margin-bottom" style="text-align: center; font-size: 14px;">Withdrawal History</div>
            <div id="withdrawal-history" style="min-height: 100px;">
                <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                    Loading withdrawal history...
                </div>
            </div>
        </div>
        
        <!-- Processing popup -->
        <div class="pop-overlay" id="withdraw-processing-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Processing Withdrawal</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div class="loading-spinner" style="width: 40px; height: 40px; margin: 0 auto;"></div>
                    </div>
                    <p style="text-align: center; color: #333;">
                        Please wait while we process your withdrawal request...
                    </p>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    await loadUserData();
    setupEventListeners();
    loadWithdrawalHistory();
    setupNetworkSelection();
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update balance display
    document.getElementById('available-balance-display').textContent = `${user.balance.toFixed(2)} USDT`;
    document.getElementById('available-balance').textContent = user.balance.toFixed(2);
    
    // Check for saved withdrawal address
    if (user.withdrawal_address) {
        document.getElementById('saved-address-info').style.display = 'flex';
        document.getElementById('saved-address-text').textContent = user.withdrawal_address.substring(0, 10) + '...' + user.withdrawal_address.substring(user.withdrawal_address.length - 10);
    } else {
        document.getElementById('address-warning').style.display = 'block';
    }
    
    // Update VIP fee
    const feePercent = getWithdrawalFee(user.vip_level);
    document.getElementById('vip-fee-percent').textContent = feePercent;
}

function setupEventListeners() {
    // Network selection
    document.querySelectorAll('.network-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.network-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            updateFeeInfo();
        });
    });
    
    // Use saved address
    document.getElementById('use-saved-address').addEventListener('click', function() {
        const user = window.getCurrentUser();
        if (user && user.withdrawal_address) {
            document.getElementById('withdraw-address').value = user.withdrawal_address;
        }
    });
    
    // Withdraw amount input
    const amountInput = document.getElementById('withdraw-amount');
    amountInput.addEventListener('input', updateFeeInfo);
    
    // Withdraw max button
    document.getElementById('withdraw-max').addEventListener('click', function() {
        const user = window.getCurrentUser();
        if (user) {
            const maxAmount = Math.max(0, user.balance - 1); // Minus network fee
            document.getElementById('withdraw-amount').value = maxAmount.toFixed(2);
            updateFeeInfo();
        }
    });
    
    // Submit withdrawal
    document.getElementById('submit-withdraw').addEventListener('click', processWithdrawal);
}

function setupNetworkSelection() {
    // Default to TRC20
    updateFeeInfo();
}

function updateFeeInfo() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value) || 0;
    const user = window.getCurrentUser();
    
    if (!user) return;
    
    // Network fee
    const network = document.querySelector('.network-option.active').dataset.network;
    const networkFee = network === 'trc20' ? 1.00 : 0.50;
    
    // VIP fee
    const vipFeePercent = getWithdrawalFee(user.vip_level);
    const vipFee = (amount * vipFeePercent) / 100;
    
    // Total fee and receive amount
    const totalFee = networkFee + vipFee;
    const receiveAmount = Math.max(0, amount - totalFee);
    
    // Update display
    document.getElementById('withdrawal-amount').textContent = amount.toFixed(2);
    document.getElementById('network-fee').textContent = networkFee.toFixed(2);
    document.getElementById('vip-fee').textContent = vipFee.toFixed(2);
    document.getElementById('receive-amount').textContent = receiveAmount.toFixed(2);
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

async function loadWithdrawalHistory() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('withdrawals')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(20);
            
        if (error) throw error;
        
        const container = document.getElementById('withdrawal-history');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleDateString();
                const time = new Date(withdrawal.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const statusClass = getStatusClass(withdrawal.status);
                const statusText = getStatusText(withdrawal.status);
                
                html += `
                    <div class="withdrawal-history-item" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; margin-bottom: 8px; border-left: 3px solid ${getStatusColor(withdrawal.status)};">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <div style="color: white; font-size: 12px; font-weight: bold;">${withdrawal.amount} USDT</div>
                            <div class="${statusClass}" style="font-size: 10px; padding: 2px 8px; border-radius: 10px; background: ${getStatusBgColor(withdrawal.status)}; color: white;">${statusText}</div>
                        </div>
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">To: ${withdrawal.address.substring(0, 10)}...${withdrawal.address.substring(withdrawal.address.length - 10)}</div>
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">Network: ${withdrawal.network.toUpperCase()}</div>
                        <div style="color: #999; font-size: 9px;">${date} ${time}</div>
                        ${withdrawal.tx_hash ? `<div style="color: #4e7771; font-size: 9px; margin-top: 3px;">TX: ${withdrawal.tx_hash.substring(0, 15)}...</div>` : ''}
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No withdrawal history</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading withdrawal history:', error);
        document.getElementById('withdrawal-history').innerHTML = 
            '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">Error loading history</div>';
    }
}

function getStatusClass(status) {
    const classes = {
        'pending': 'status-pending',
        'processing': 'status-processing',
        'completed': 'status-completed',
        'rejected': 'status-rejected'
    };
    return classes[status] || 'status-pending';
}

function getStatusText(status) {
    const texts = {
        'pending': 'Pending',
        'processing': 'Processing',
        'completed': 'Completed',
        'rejected': 'Rejected'
    };
    return texts[status] || 'Pending';
}

function getStatusColor(status) {
    const colors = {
        'pending': '#f9ae3d',
        'processing': '#4e7771',
        'completed': '#52c41a',
        'rejected': '#ff6b6b'
    };
    return colors[status] || '#f9ae3d';
}

function getStatusBgColor(status) {
    const colors = {
        'pending': 'rgba(249, 174, 61, 0.2)',
        'processing': 'rgba(78, 119, 113, 0.2)',
        'completed': 'rgba(82, 196, 26, 0.2)',
        'rejected': 'rgba(255, 107, 107, 0.2)'
    };
    return colors[status] || 'rgba(249, 174, 61, 0.2)';
}

async function processWithdrawal() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showCustomAlert('User not found');
        return;
    }
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const address = document.getElementById('withdraw-address').value.trim();
    const password = document.getElementById('withdraw-password').value;
    const network = document.querySelector('.network-option.active').dataset.network;
    
    // Validation
    if (!amount || amount < 20) {
        window.showCustomAlert('Minimum withdrawal amount is 20 USDT');
        return;
    }
    
    if (amount > user.balance) {
        window.showCustomAlert('Insufficient balance');
        return;
    }
    
    if (!address) {
        window.showCustomAlert('Please enter wallet address');
        return;
    }
    
    if (!password) {
        window.showCustomAlert('Please enter transaction password');
        return;
    }
    
    // Check payment password
    if (user.payment_password !== password) {
        window.showCustomAlert('Invalid transaction password');
        return;
    }
    
    // Validate address format (basic validation)
    if (address.length < 25) {
        window.showCustomAlert('Invalid wallet address format');
        return;
    }
    
    // Calculate fees
    const networkFee = network === 'trc20' ? 1.00 : 0.50;
    const vipFeePercent = getWithdrawalFee(user.vip_level);
    const vipFee = (amount * vipFeePercent) / 100;
    const totalFee = networkFee + vipFee;
    const receiveAmount = amount - totalFee;
    
    const confirmMessage = `
        <div style="text-align: center;">
            <h4 style="color: #333; margin-bottom: 15px;">Confirm Withdrawal</h4>
            <div style="background: #f5f5f5; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                    <span style="color: #666;">Amount:</span>
                    <span style="color: #333; font-weight: bold;">${amount.toFixed(2)} USDT</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                    <span style="color: #666;">Network Fee:</span>
                    <span style="color: #333;">${networkFee.toFixed(2)} USDT</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                    <span style="color: #666;">VIP Fee (${vipFeePercent}%):</span>
                    <span style="color: #333;">${vipFee.toFixed(2)} USDT</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin: 5px 0; padding-top: 5px; border-top: 1px solid #ddd;">
                    <span style="color: #333; font-weight: bold;">You Receive:</span>
                    <span style="color: #4e7771; font-weight: bold;">${receiveAmount.toFixed(2)} USDT</span>
                </div>
            </div>
            <div style="text-align: left; font-size: 12px; color: #666; margin-bottom: 10px;">
                <div>Network: ${network.toUpperCase()}</div>
                <div>Address: ${address.substring(0, 15)}...${address.substring(address.length - 10)}</div>
            </div>
            <p style="color: #666; font-size: 12px;">Processing time: 1-24 hours</p>
        </div>
    `;
    
    window.showCustomModal('Confirm Withdrawal', confirmMessage, async () => {
        // Show processing popup
        document.getElementById('withdraw-processing-popup').style.display = 'flex';
        
        try {
            // Update user balance
            const newBalance = user.balance - amount;
            const { error: updateError } = await window.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', user.id);
                
            if (updateError) throw updateError;
            
            // Create withdrawal record
            const { error: withdrawalError } = await window.supabase
                .from('withdrawals')
                .insert([{
                    user_id: user.id,
                    amount: amount,
                    network: network,
                    address: address,
                    status: 'pending',
                    created_at: new Date().toISOString()
                }]);
                
            if (withdrawalError) throw withdrawalError;
            
            // Create transaction record
            const { error: txError } = await window.supabase
                .from('transactions')
                .insert([{
                    user_id: user.id,
                    type: 'withdrawal',
                    amount: -amount,
                    status: 'pending',
                    description: `Withdrawal ${amount} USDT via ${network.toUpperCase()} (Fees: ${totalFee.toFixed(2)} USDT)`
                }]);
                
            if (txError) throw txError;
            
            // Update user in localStorage
            user.balance = newBalance;
            localStorage.setItem('gly_user', JSON.stringify(user));
            
            // Close processing popup
            document.getElementById('withdraw-processing-popup').style.display = 'none';
            
            // Show success message
            window.showCustomAlert(`Withdrawal request submitted successfully! You will receive ${receiveAmount.toFixed(2)} USDT within 24 hours.`);
            
            // Reset form
            document.getElementById('withdraw-amount').value = '';
            document.getElementById('withdraw-password').value = '';
            
            // Update displays
            loadUserData();
            loadWithdrawalHistory();
            
        } catch (error) {
            document.getElementById('withdraw-processing-popup').style.display = 'none';
            window.showCustomAlert('Error processing withdrawal: ' + error.message);
        }
    });
}
