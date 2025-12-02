// Assets section
export default function renderAssets() {
    return `
        <!-- Balance -->
        <div class="card padding">
            <div class="text-center">
                <div class="balance-amount text-white" id="total-balance">0.00 USDT</div>
                <div class="text-gray">Total Balance</div>
            </div>

            <!-- Deposit and Withdrawal icons -->
            <div class="wallet-actions">
                <div class="wallet-action" id="deposit-btn">
                    <div class="wallet-icon">
                        <img src="assets/deposit.png" alt="Deposit">
                    </div>
                    <div class="wallet-text">Deposit</div>
                </div>
                <div class="wallet-action" id="withdraw-btn">
                    <div class="wallet-icon">
                        <img src="assets/withdraw.png" alt="Withdraw">
                    </div>
                    <div class="wallet-text">Withdraw</div>
                </div>
            </div>
        </div>

        <!-- Transaction History -->
        <div class="card padding margin-top">
            <div class="text-white text-bold text-center">Transaction History</div>
            
            <div class="transaction-categories">
                <div class="transaction-category">
                    <div class="transaction-category-name">Total Earned</div>
                    <div class="transaction-category-amount" id="total-earned">0.00 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Total Deposits</div>
                    <div class="transaction-category-amount" id="total-deposits">0.00 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Total Withdrawals</div>
                    <div class="transaction-category-amount" id="total-withdrawals">0.00 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Referral Income</div>
                    <div class="transaction-category-amount" id="referral-income">0.00 USDT</div>
                </div>
            </div>
            
            <div class="transaction-list" id="transaction-list">
                <!-- Transactions loaded dynamically -->
            </div>
        </div>

        <!-- Deposit popup -->
        <div class="pop-overlay" id="deposit-popup" style="display: none;">
            <div class="pop-content">
                <form id="deposit-form" onsubmit="return false;">
                    <div class="pop-header">Deposit USDT</div>
                    <div class="pop-body">
                        <p>Send USDT to the following address (TRC20 network):</p>
                        <div class="referral-section margin-top">
                            <div class="referral-content">
                                <div class="referral-info">
                                    <div class="referral-text">
                                        <p id="deposit-address">TQr7R6e9J9X7V6v8G6t7Y6u8I9o0P7b6v5C</p>
                                    </div>
                                </div>
                                <button type="button" class="copy-btn" id="copy-deposit-btn">
                                    <i class="fas fa-copy"></i> COPY
                                </button>
                            </div>
                        </div>
                        <div class="margin-top">
                            <label style="color: #333; font-size: 14px;">Amount (USDT)</label>
                            <input type="number" id="deposit-amount" placeholder="Enter amount" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <p class="margin-top-sm" style="font-size: 12px; color: #666;">
                            Minimum deposit: 17 USDT<br>
                            Network: TRC20<br>
                            After sending funds, click "Confirm Deposit"
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="confirm-deposit" style="margin-right: 10px;">Confirm Deposit</button>
                        <button type="button" id="close-deposit">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Withdrawal popup -->
        <div class="pop-overlay" id="withdraw-popup" style="display: none;">
            <div class="pop-content">
                <form id="withdraw-form" onsubmit="return false;">
                    <div class="pop-header">Withdraw USDT</div>
                    <div class="pop-body">
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">Amount (USDT)</label>
                            <input type="number" id="withdraw-amount" placeholder="Enter amount" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">Transaction Password</label>
                            <input type="password" id="withdraw-password" placeholder="Enter transaction password" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <p style="font-size: 12px; color: #666;">
                            Minimum withdrawal: 20 USDT<br>
                            Fee: depends on VIP level<br>
                            Processing time: 1-24 hours
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="confirm-withdraw" style="margin-right: 10px;">Confirm</button>
                        <button type="button" id="close-withdraw">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Deposit success popup -->
        <div class="pop-overlay" id="deposit-success-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Deposit Submitted</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #52c41a;">✓</div>
                    </div>
                    <p style="text-align: center; color: #333;">
                        Your deposit has been submitted for verification.<br>
                        Funds will be credited within 72 hours.
                    </p>
                </div>
                <div class="pop-footer">
                    <button id="close-deposit-success">OK</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    // Use delay to ensure DOM is fully loaded
    setTimeout(async () => {
        try {
            // Load user data
            await loadUserData();
            
            // Load transaction history
            await loadTransactionHistory();
            
            // Setup event listeners
            setupEventListeners();
        } catch (error) {
            console.error('Error initializing assets section:', error);
        }
    }, 100);
}

function setupEventListeners() {
    try {
        // Handlers for deposit and withdrawal buttons
        document.getElementById('deposit-btn').addEventListener('click', showDepositPopup);
        document.getElementById('withdraw-btn').addEventListener('click', showWithdrawPopup);
        
        // Handlers for popups
        document.getElementById('close-deposit').addEventListener('click', hideDepositPopup);
        document.getElementById('close-withdraw').addEventListener('click', hideWithdrawPopup);
        document.getElementById('confirm-deposit').addEventListener('click', (e) => {
            e.preventDefault();
            processDeposit();
        });
        document.getElementById('confirm-withdraw').addEventListener('click', (e) => {
            e.preventDefault();
            processWithdrawal();
        });
        document.getElementById('close-deposit-success').addEventListener('click', hideDepositSuccessPopup);
        
        // Copy deposit address
        document.getElementById('copy-deposit-btn').addEventListener('click', copyDepositAddress);
        
    } catch (error) {
        console.error('Error setting up event listeners in assets:', error);
        // Retry after 500ms
        setTimeout(setupEventListeners, 500);
    }
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update balance
    const balanceElement = document.getElementById('total-balance');
    if (balanceElement) {
        balanceElement.textContent = `${user.balance.toFixed(2)} USDT`;
    }
}

async function loadTransactionHistory() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Get user transactions
        const { data: transactions, error } = await window.supabase
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(20);
            
        if (error) throw error;
        
        // Calculate statistics
        let totalEarned = 0;
        let totalDeposits = 0;
        let totalWithdrawals = 0;
        let referralIncome = 0;
        
        const transactionList = document.getElementById('transaction-list');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            transactions.forEach(transaction => {
                const date = new Date(transaction.created_at).toLocaleDateString();
                const amount = transaction.amount;
                const isPositive = amount > 0;
                
                // Update statistics
                if (transaction.type === 'deposit') {
                    totalDeposits += amount;
                } else if (transaction.type === 'withdrawal') {
                    totalWithdrawals += Math.abs(amount);
                } else if (transaction.type === 'referral') {
                    referralIncome += amount;
                    totalEarned += amount;
                } else if (transaction.type === 'quantification' || transaction.type === 'registration_bonus') {
                    totalEarned += amount;
                }
                
                html += `
                    <div class="transaction-item">
                        <div class="transaction-info">
                            <div class="transaction-type">${getTransactionType(transaction.type)}</div>
                            <div class="transaction-date">${date}</div>
                        </div>
                        <div class="transaction-amount color-${isPositive ? 'up' : 'down'}">${isPositive ? '+' : ''}${amount.toFixed(2)} USDT</div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No transactions yet</div>';
        }
        
        transactionList.innerHTML = html;
        
        // Update statistics
        document.getElementById('total-earned').textContent = `${totalEarned.toFixed(2)} USDT`;
        document.getElementById('total-deposits').textContent = `${totalDeposits.toFixed(2)} USDT`;
        document.getElementById('total-withdrawals').textContent = `${totalWithdrawals.toFixed(2)} USDT`;
        document.getElementById('referral-income').textContent = `${referralIncome.toFixed(2)} USDT`;
        
    } catch (error) {
        console.error('Error loading transaction history:', error);
    }
}

function getTransactionType(type) {
    const types = {
        'deposit': 'Deposit',
        'withdrawal': 'Withdrawal',
        'quantification': 'Quantification Profit',
        'referral': 'Referral Bonus',
        'registration_bonus': 'Registration Bonus'
    };
    return types[type] || type;
}

function showDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'flex';
}

function hideDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'none';
    document.getElementById('deposit-amount').value = '';
}

function showWithdrawPopup() {
    document.getElementById('withdraw-popup').style.display = 'flex';
}

function hideWithdrawPopup() {
    document.getElementById('withdraw-popup').style.display = 'none';
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('withdraw-password').value = '';
}

function hideDepositSuccessPopup() {
    document.getElementById('deposit-success-popup').style.display = 'none';
}

function copyDepositAddress() {
    const depositAddress = document.getElementById('deposit-address').textContent;
    window.GLY.copyToClipboard(depositAddress).then(() => {
        window.Notify.show('Address copied to clipboard', 'success');
        const copyBtn = document.getElementById('copy-deposit-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

async function processDeposit() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    const user = window.getCurrentUser();
    
    if (!amount || amount < 17) {
        window.Notify.alert('Minimum deposit amount is 17 USDT');
        return;
    }
    
    if (!user) {
        window.Notify.alert('User not found');
        return;
    }
    
    try {
        // Create deposit record
        const { error } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: user.id,
                type: 'deposit',
                amount: amount,
                status: 'pending',
                description: `Deposit ${amount} USDT`
            }]);
            
        if (error) throw error;
        
        // Show success popup
        hideDepositPopup();
        document.getElementById('deposit-success-popup').style.display = 'flex';
        
        // Update transaction history
        setTimeout(() => {
            loadTransactionHistory();
        }, 1000);
        
    } catch (error) {
        window.Notify.alert('Error processing deposit: ' + error.message);
    }
}

async function processWithdrawal() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const password = document.getElementById('withdraw-password').value;
    const user = window.getCurrentUser();
    
    if (!user) {
        window.Notify.alert('User not found');
        return;
    }
    
    if (!amount || amount < 20) {
        window.Notify.alert('Minimum withdrawal amount is 20 USDT');
        return;
    }
    
    if (amount > user.balance) {
        window.Notify.alert('Insufficient balance');
        return;
    }
    
    if (!password) {
        window.Notify.alert('Please enter transaction password');
        return;
    }
    
    // Check transaction password
    if (user.payment_password !== password) {
        window.Notify.alert('Invalid transaction password');
        return;
    }
    
    // Check withdrawal address
    if (!user.withdrawal_address) {
        window.Notify.alert('Please set withdrawal address first in Settings');
        return;
    }
    
    // Calculate fee based on VIP level
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    window.Notify.confirm(
        `Withdrawal amount: ${amount} USDT\nFee (${feePercent}%): ${fee.toFixed(2)} USDT\nYou will receive: ${netAmount.toFixed(2)} USDT\nConfirm withdrawal?`,
        'Confirm Withdrawal'
    ).then(async (confirmed) => {
        if (confirmed) {
            try {
                // Update user balance
                const newBalance = user.balance - amount;
                const { error: updateError } = await window.supabase
                    .from('users')
                    .update({ balance: newBalance })
                    .eq('id', user.id);
                    
                if (updateError) throw updateError;
                
                // Create withdrawal transaction
                const { error: txError } = await window.supabase
                    .from('transactions')
                    .insert([{
                        user_id: user.id,
                        type: 'withdrawal',
                        amount: -amount,
                        status: 'pending',
                        description: `Withdrawal ${amount} USDT (Fee: ${fee.toFixed(2)} USDT)`
                    }]);
                    
                if (txError) throw txError;
                
                // Update user in localStorage
                user.balance = newBalance;
                localStorage.setItem('gly_user', JSON.stringify(user));
                
                window.Notify.show(`Withdrawal request for ${amount} USDT has been submitted. You will receive ${netAmount.toFixed(2)} USDT (fee: ${fee.toFixed(2)} USDT). Processing time: 1-24 hours.`, 'success');
                hideWithdrawPopup();
                
                // Update interface
                loadUserData();
                setTimeout(() => {
                    loadTransactionHistory();
                }, 1000);
            } catch (error) {
                window.Notify.alert('Error processing withdrawal: ' + error.message);
            }
        }
    });
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
