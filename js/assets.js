// Assets section
export default function renderAssets() {
    return `
        <!-- Баланс -->
        <div class="card padding">
            <div class="text-center">
                <div class="balance-amount text-white">1,245.67 USDT</div>
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
                    <div class="transaction-category-name">Referral Income</div>
                    <div class="transaction-category-amount">345.67 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Quantification</div>
                    <div class="transaction-category-amount">567.89 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Deposits</div>
                    <div class="transaction-category-amount">1,200.00 USDT</div>
                </div>
                <div class="transaction-category">
                    <div class="transaction-category-name">Total Income</div>
                    <div class="transaction-category-amount">2,113.56 USDT</div>
                </div>
            </div>
            
            <div class="transaction-list" id="transaction-list">
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-type">Quantification Profit</div>
                        <div class="transaction-date">2024-03-20</div>
                    </div>
                    <div class="transaction-amount color-up">+43.59 USDT</div>
                </div>
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-type">Referral Bonus</div>
                        <div class="transaction-date">2024-03-19</div>
                    </div>
                    <div class="transaction-amount color-up">+12.45 USDT</div>
                </div>
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-type">Withdrawal</div>
                        <div class="transaction-date">2024-03-18</div>
                    </div>
                    <div class="transaction-amount color-down">-100.00 USDT</div>
                </div>
            </div>
        </div>

        <!-- Попап для депозита -->
        <div class="pop-overlay" id="deposit-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Deposit USDT</div>
                <div class="pop-body">
                    <p>Send USDT to the following address:</p>
                    <div class="referral-section margin-top">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <p id="deposit-address">TQr7R6e9J9X7V6v8G6t7Y6u8I9o0P7b6v5C</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-deposit-btn">
                                <i class="fas fa-copy"></i> COPY
                            </button>
                        </div>
                    </div>
                    <p class="margin-top-sm" style="font-size: 12px; color: #666;">
                        Minimum deposit: 20 USDT<br>
                        Network: TRC20
                    </p>
                </div>
                <div class="pop-footer">
                    <button id="close-deposit">Close</button>
                </div>
            </div>
        </div>

        <!-- Попап для вывода -->
        <div class="pop-overlay" id="withdraw-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Withdraw USDT</div>
                <div class="pop-body">
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">Amount (USDT)</label>
                        <input type="number" id="withdraw-amount" placeholder="Enter amount" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">Wallet Address</label>
                        <input type="text" id="withdraw-address" placeholder="Enter TRC20 address" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                    <p style="font-size: 12px; color: #666;">
                        Minimum withdrawal: 10 USDT<br>
                        Fee: 1 USDT<br>
                        Processing time: 1-24 hours
                    </p>
                </div>
                <div class="pop-footer">
                    <button id="confirm-withdraw" style="margin-right: 10px;">Confirm</button>
                    <button id="close-withdraw">Cancel</button>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Обработчики для кнопок депозита и вывода
    document.getElementById('deposit-btn').addEventListener('click', showDepositPopup);
    document.getElementById('withdraw-btn').addEventListener('click', showWithdrawPopup);
    
    // Обработчики для попапов
    document.getElementById('close-deposit').addEventListener('click', hideDepositPopup);
    document.getElementById('close-withdraw').addEventListener('click', hideWithdrawPopup);
    document.getElementById('confirm-withdraw').addEventListener('click', processWithdrawal);
    
    // Копирование адреса депозита
    document.getElementById('copy-deposit-btn').addEventListener('click', copyDepositAddress);
    
    // Загрузка истории транзакций
    loadTransactionHistory();
}

function showDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'flex';
}

function hideDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'none';
}

function showWithdrawPopup() {
    document.getElementById('withdraw-popup').style.display = 'flex';
}

function hideWithdrawPopup() {
    document.getElementById('withdraw-popup').style.display = 'none';
}

function copyDepositAddress() {
    const depositAddress = document.getElementById('deposit-address').textContent;
    QuantumFarm.copyToClipboard(depositAddress).then(() => {
        const copyBtn = document.getElementById('copy-deposit-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function processWithdrawal() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const address = document.getElementById('withdraw-address').value.trim();
    
    if (!amount || amount < 10) {
        alert('Minimum withdrawal amount is 10 USDT');
        return;
    }
    
    if (!address) {
        alert('Please enter a valid wallet address');
        return;
    }
    
    // Здесь будет логика обработки вывода
    alert(`Withdrawal request for ${amount} USDT to ${address} has been submitted.`);
    hideWithdrawPopup();
    
    // Очистка полей
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('withdraw-address').value = '';
}

function loadTransactionHistory() {
    // В реальном приложении здесь будет API запрос
    const transactions = [
        { type: 'Quantification Profit', date: '2024-03-20', amount: '+43.59 USDT', color: 'up' },
        { type: 'Referral Bonus', date: '2024-03-19', amount: '+12.45 USDT', color: 'up' },
        { type: 'Withdrawal', date: '2024-03-18', amount: '-100.00 USDT', color: 'down' },
        { type: 'Quantification Profit', date: '2024-03-17', amount: '+38.72 USDT', color: 'up' },
        { type: 'Deposit', date: '2024-03-16', amount: '+200.00 USDT', color: 'up' }
    ];
    
    const container = document.getElementById('transaction-list');
    let html = '';
    
    transactions.forEach(transaction => {
        html += `
            <div class="transaction-item">
                <div class="transaction-info">
                    <div class="transaction-type">${transaction.type}</div>
                    <div class="transaction-date">${transaction.date}</div>
                </div>
                <div class="transaction-amount color-${transaction.color}">${transaction.amount}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}
