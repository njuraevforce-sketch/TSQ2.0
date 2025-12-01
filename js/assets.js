// Assets section
export default function renderAssets() {
    return `
        <!-- Баланс -->
        <div class="card padding">
            <div class="text-center">
                <div class="balance-amount text-white" id="total-balance">0.00 USDT</div>
                <div class="text-gray">Total Balance</div>
            </div>

            <!-- Иконки пополнения и вывода -->
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

        <!-- История транзакций -->
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
                <!-- Транзакции загружаются динамически -->
            </div>
        </div>

        <!-- Попап для депозита -->
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
                            После отправки средств нажмите "Подтвердить депозит"
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="confirm-deposit" style="margin-right: 10px;">Confirm Deposit</button>
                        <button type="button" id="close-deposit">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Попап для вывода -->
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
                            Fee: зависит от VIP уровня<br>
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
        
        <!-- Попап успешного депозита -->
        <div class="pop-overlay" id="deposit-success-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Deposit Submitted</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #52c41a;">✓</div>
                    </div>
                    <p style="text-align: center; color: #333;">
                        Ваш депозит отправлен на проверку.<br>
                        Средства будут зачислены в течение 72 часов.
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
    // Используем задержку для гарантии, что DOM полностью загружен
    setTimeout(async () => {
        try {
            // Загрузка данных пользователя
            await loadUserData();
            
            // Загрузка истории транзакций
            await loadTransactionHistory();
            
            // Настройка обработчиков событий
            setupEventListeners();
        } catch (error) {
            console.error('Error initializing assets section:', error);
        }
    }, 100);
}

function setupEventListeners() {
    try {
        // Обработчики для кнопок депозита и вывода
        document.getElementById('deposit-btn').addEventListener('click', showDepositPopup);
        document.getElementById('withdraw-btn').addEventListener('click', showWithdrawPopup);
        
        // Обработчики для попапов
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
        
        // Копирование адреса депозита
        document.getElementById('copy-deposit-btn').addEventListener('click', copyDepositAddress);
        
    } catch (error) {
        console.error('Error setting up event listeners in assets:', error);
        // Повторяем попытку через 500мс
        setTimeout(setupEventListeners, 500);
    }
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Обновляем баланс
    const balanceElement = document.getElementById('total-balance');
    if (balanceElement) {
        balanceElement.textContent = `${user.balance.toFixed(2)} USDT`;
    }
}

async function loadTransactionHistory() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Получаем транзакции пользователя
        const { data: transactions, error } = await window.supabase
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(20);
            
        if (error) throw error;
        
        // Рассчитываем статистику
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
                
                // Обновляем статистику
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
        
        // Обновляем статистику
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
        alert('Minimum deposit amount is 17 USDT');
        return;
    }
    
    if (!user) {
        alert('User not found');
        return;
    }
    
    try {
        // Создаем запись о депозите
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
        
        // Показываем попап успеха
        hideDepositPopup();
        document.getElementById('deposit-success-popup').style.display = 'flex';
        
        // Обновляем историю транзакций
        setTimeout(() => {
            loadTransactionHistory();
        }, 1000);
        
    } catch (error) {
        alert('Error processing deposit: ' + error.message);
    }
}

async function processWithdrawal() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const password = document.getElementById('withdraw-password').value;
    const user = window.getCurrentUser();
    
    if (!user) {
        alert('User not found');
        return;
    }
    
    if (!amount || amount < 20) {
        alert('Minimum withdrawal amount is 20 USDT');
        return;
    }
    
    if (amount > user.balance) {
        alert('Insufficient balance');
        return;
    }
    
    if (!password) {
        alert('Please enter transaction password');
        return;
    }
    
    // Проверяем платежный пароль
    if (user.payment_password !== password) {
        alert('Invalid transaction password');
        return;
    }
    
    // Проверяем наличие адреса вывода
    if (!user.withdrawal_address) {
        alert('Please set withdrawal address first in Settings');
        return;
    }
    
    // Рассчитываем комиссию в зависимости от VIP уровня
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    if (confirm(`Withdrawal amount: ${amount} USDT\nFee (${feePercent}%): ${fee.toFixed(2)} USDT\nYou will receive: ${netAmount.toFixed(2)} USDT\nConfirm withdrawal?`)) {
        try {
            // Обновляем баланс пользователя
            const newBalance = user.balance - amount;
            const { error: updateError } = await window.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', user.id);
                
            if (updateError) throw updateError;
            
            // Создаем транзакцию вывода
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
            
            // Обновляем пользователя в localStorage
            user.balance = newBalance;
            localStorage.setItem('gly_user', JSON.stringify(user));
            
            alert(`Withdrawal request for ${amount} USDT has been submitted. You will receive ${netAmount.toFixed(2)} USDT (fee: ${fee.toFixed(2)} USDT). Processing time: 1-24 hours.`);
            hideWithdrawPopup();
            
            // Обновляем интерфейс
            loadUserData();
            setTimeout(() => {
                loadTransactionHistory();
            }, 1000);
            
        } catch (error) {
            alert('Error processing withdrawal: ' + error.message);
        }
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
