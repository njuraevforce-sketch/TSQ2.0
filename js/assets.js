// Assets section - compact version
export default function renderAssets() {
    return `
        <!-- Balance -->
        <div class="card padding">
            <div class="text-center">
                <div class="balance-amount text-white" id="total-balance">0.00 USDT</div>
                <div class="text-gray" style="font-size: 12px;">Total Balance</div>
            </div>

            <!-- Deposit and Withdraw - compact -->
            <div class="wallet-actions-compact">
                <div class="wallet-action-compact" id="deposit-btn">
                    <img src="assets/deposit.png?v=1.0" alt="Deposit">
                    <div class="wallet-text-compact">Deposit</div>
                </div>
                <div class="wallet-action-compact" id="withdraw-btn">
                    <img src="assets/withdraw.png?v=1.0" alt="Withdraw">
                    <div class="wallet-text-compact">Withdraw</div>
                </div>
            </div>
        </div>

        <!-- Transaction History - compact -->
        <div class="card padding margin-top">
            <div class="text-white text-bold margin-bottom" style="font-size: 14px; text-align: center;">Transaction History</div>
            
            <div class="transaction-categories-compact">
                <div class="transaction-category-compact">
                    <div class="transaction-category-name-compact">Total Earned</div>
                    <div class="transaction-category-amount-compact" id="total-earned">0.00 USDT</div>
                </div>
                <div class="transaction-category-compact">
                    <div class="transaction-category-name-compact">Total Deposits</div>
                    <div class="transaction-category-amount-compact" id="total-deposits">0.00 USDT</div>
                </div>
                <div class="transaction-category-compact">
                    <div class="transaction-category-name-compact">Total Withdrawals</div>
                    <div class="transaction-category-amount-compact" id="total-withdrawals">0.00 USDT</div>
                </div>
                <div class="transaction-category-compact">
                    <div class="transaction-category-name-compact">Referral Income</div>
                    <div class="transaction-category-amount-compact" id="referral-income">0.00 USDT</div>
                </div>
            </div>
            
            <div class="transaction-list-compact" id="transaction-list">
                <!-- Transactions load dynamically -->
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
        // Deposit and withdraw button handlers
        document.getElementById('deposit-btn').addEventListener('click', function() {
            // Redirect to deposit page
            window.showSection('deposit');
        });
        
        document.getElementById('withdraw-btn').addEventListener('click', function() {
            // Redirect to withdraw page instead of showing popup
            window.showSection('withdraw');
        });
        
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
                const time = new Date(transaction.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
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
                            <div class="transaction-date">${date} ${time}</div>
                        </div>
                        <div class="transaction-amount color-${isPositive ? 'up' : 'down'}">${isPositive ? '+' : ''}${amount.toFixed(2)} USDT</div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">No transactions yet</div>';
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
