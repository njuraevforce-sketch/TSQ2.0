// Withdraw section - UPDATED with same network selection as deposit.js
import { t } from './translate.js';

export default function renderWithdraw() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;" data-translate="withdraw_usdt">Withdraw USDT</h2>
                <p style="color: #ccc;" data-translate="withdraw_earnings">Withdraw your earnings to your wallet</p>
            </div>

            <!-- Network Selection - Same as deposit.js -->
            <div class="network-selection-green margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="select_network">Select Network</div>
                <div class="network-options-green">
                    <div class="network-option-green active" data-network="TRC20">
                        <div class="network-icon-green">
                            <img src="assets/trc20.png" alt="TRC20" data-translate-alt="trc20">
                        </div>
                        <div class="network-name-green" data-translate="network_trc20">TRC20</div>
                        <div class="network-check-green"><i class="fas fa-check"></i></div>
                    </div>
                    <div class="network-option-green" data-network="BEP20">
                        <div class="network-icon-green">
                            <img src="assets/bsc20.png" alt="BEP20" data-translate-alt="bep20">
                        </div>
                        <div class="network-name-green" data-translate="network_bep20">BEP20</div>
                        <div class="network-check-green"><i class="fas fa-check"></i></div>
                    </div>
                </div>
            </div>

            <!-- Wallet Address - Updated -->
            <div class="wallet-address-section margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="withdrawal_address_section">Withdrawal Address</div>
                <div class="input-container">
                    <input type="text" 
                           id="withdrawal-address" 
                           data-translate="enter_wallet_address"
                           placeholder="Enter your wallet address" 
                           class="input-line"
                           readonly>
                </div>
                <div id="saved-address-message" style="display: none; font-size: 12px; color: #52c41a; margin-top: 5px;">
                    <i class="fas fa-check-circle"></i> <span data-translate="using_saved_address">Using saved address</span>
                </div>
                <div id="no-address-message" style="display: none; font-size: 12px; color: #f9ae3d; margin-top: 5px;">
                    <i class="fas fa-exclamation-circle"></i> <span data-translate="no_saved_address">No saved address. Click "Set Address" below.</span>
                </div>
                <button class="pro-btn" id="set-address-btn" style="width: 100%; margin-top: 10px; background: #3d615c;">
                    <i class="fas fa-edit"></i> <span data-translate="set_withdrawal_address_btn">Set Withdrawal Address</span>
                </button>
            </div>

            <!-- Amount -->
            <div class="amount-section margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="enter_amount">Enter amount</div>
                <div class="input-container">
                    <input type="number" 
                           id="withdraw-amount" 
                           data-translate="enter_amount"
                           placeholder="Enter amount" 
                           class="input-line"
                           min="20"
                           step="0.01">
                </div>
                <div style="font-size: 12px; color: #ccc; margin-top: 5px;">
                    <span data-translate="minimum_withdrawal_amount">Minimum withdrawal: 20 USDT</span>
                </div>
            </div>

            <!-- Balance Info -->
            <div class="balance-info margin-bottom">
                <div class="balance-line">
                    <span style="color: #ccc;" data-translate="available_balance">Available Balance:</span>
                    <span id="available-balance" style="color: #fff; font-weight: bold;">0.00 USDT</span>
                </div>
                <div class="balance-line">
                    <span style="color: #ccc;" data-translate="withdrawal_fee_label">Withdrawal Fee:</span>
                    <span id="withdrawal-fee" style="color: #f9ae3d;">0.00 USDT</span>
                </div>
                <div class="balance-line">
                    <span style="color: #ccc;" data-translate="you_will_receive">You Will Receive:</span>
                    <span id="net-amount" style="color: #52c41a; font-weight: bold;">0.00 USDT</span>
                </div>
            </div>

            <!-- Transaction Password -->
            <div class="password-section margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="enter_transaction_password">Enter transaction password</div>
                <div class="input-container" style="position: relative;">
                    <input type="password" 
                           id="transaction-password" 
                           data-translate="enter_transaction_password"
                           placeholder="Enter transaction password" 
                           class="input-line"
                           style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" 
                       id="toggle-transaction-password"
                       style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
            </div>

            <!-- Withdraw Button -->
            <button class="pro-btn" id="submit-withdraw" style="width: 100%; margin-top: 20px;" data-translate="submit_withdrawal">
                Submit Withdrawal Request
            </button>

            <!-- Support Message -->
            <div style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <p style="color: #ccc; font-size: 12px; text-align: center;">
                    <i class="fas fa-info-circle" style="color: #f9ae3d; margin-right: 5px;"></i>
                    <span data-translate="support_message">To change your withdrawal address, please contact support: @GLYSupport</span>
                </p>
            </div>

            <!-- Recent Withdrawals -->
            <div class="margin-top">
                <div class="text-white text-bold" style="font-size: 14px; margin-bottom: 15px;" data-translate="recent_withdrawals">Recent Withdrawals</div>
                <div class="withdrawals-list" id="withdrawals-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">
                        <span data-translate="no_withdrawal_history">No withdrawal history</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Withdrawal Confirmation Modal -->
        <div class="pop-overlay" id="withdraw-confirm-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="confirm_withdrawal">Confirm Withdrawal</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #f9ae3d;">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                    </div>
                    
                    <div style="color: #333; margin-bottom: 15px;">
                        <div class="confirm-line">
                            <span data-translate="network">Network:</span>
                            <span id="confirm-network" style="font-weight: bold;"></span>
                        </div>
                        <div class="confirm-line">
                            <span data-translate="address">Address:</span>
                            <span id="confirm-address" style="font-weight: bold; font-size: 12px; word-break: break-all;"></span>
                        </div>
                        <div class="confirm-line">
                            <span data-translate="amount">Amount:</span>
                            <span id="confirm-amount" style="font-weight: bold; color: #4e7771;"></span>
                        </div>
                        <div class="confirm-line">
                            <span data-translate="fee">Fee:</span>
                            <span id="confirm-fee" style="font-weight: bold; color: #ff4d4f;"></span>
                        </div>
                        <div class="confirm-line">
                            <span data-translate="you_will_receive">You Receive:</span>
                            <span id="confirm-net" style="font-weight: bold; color: #52c41a;"></span>
                        </div>
                    </div>
                    
                    <p style="font-size: 12px; color: #666; text-align: center; margin-top: 15px;" data-translate="processing_time_withdrawal">
                        Processing time: 1-24 hours
                    </p>
                </div>
                <div class="pop-footer">
                    <button type="button" id="confirm-withdraw-final" style="margin-right: 10px; background: #4e7771;" data-translate="confirm">Confirm</button>
                    <button type="button" id="cancel-withdraw-confirm" style="background: #666;" data-translate="cancel">Cancel</button>
                </div>
            </div>
        </div>

        <!-- Set Address Modal (for when no address is saved) -->
        <div class="pop-overlay" id="set-address-popup" style="display: none;">
            <div class="pop-content">
                <form id="set-address-form" onsubmit="return false;">
                    <div class="pop-header" data-translate="set_withdrawal_address">Set Withdrawal Address</div>
                    <div class="pop-body">
                        <!-- Network Selection in Modal - Same as deposit.js -->
                        <div class="network-selection-green margin-bottom">
                            <div class="section-title-small" style="color: #333; margin-bottom: 10px; font-size: 14px;" data-translate="select_network">Select Network</div>
                            <div class="network-options-green">
                                <div class="network-option-green active" data-network="TRC20">
                                    <div class="network-icon-green">
                                        <img src="assets/trc20.png" alt="TRC20" data-translate-alt="trc20">
                                    </div>
                                    <div class="network-name-green" data-translate="network_trc20">TRC20</div>
                                    <div class="network-check-green"><i class="fas fa-check"></i></div>
                                </div>
                                <div class="network-option-green" data-network="BEP20">
                                    <div class="network-icon-green">
                                        <img src="assets/bsc20.png" alt="BEP20" data-translate-alt="bep20">
                                    </div>
                                    <div class="network-name-green" data-translate="network_bep20">BEP20</div>
                                    <div class="network-check-green"><i class="fas fa-check"></i></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;" data-translate="usdt_wallet_address">USDT Wallet Address</label>
                            <input type="text" id="new-withdrawal-address" 
                                   data-translate="enter_wallet_address"
                                   placeholder="Enter your wallet address" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <p style="font-size: 12px; color: #666;" data-translate="address_save_note">
                            This address will be saved for future withdrawals. Please double-check the address.
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-new-address" style="margin-right: 10px; background: #4e7771;" data-translate="save">Save Address</button>
                        <button type="button" id="close-set-address" style="background: #666;" data-translate="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// Глобальная переменная для отслеживания процесса вывода
let isWithdrawProcessing = false;

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Сбрасываем флаг обработки при инициализации
    isWithdrawProcessing = false;
    
    // Load user data
    await loadUserData();
    
    // Load recent withdrawals
    await loadRecentWithdrawals();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize network selection
    initNetworkSelection();
    
    // Update fee calculation when amount changes
    document.getElementById('withdraw-amount').addEventListener('input', updateFeeCalculation);
    
    // Update translations
    import('./translate.js').then(module => {
        if (module.updatePageLanguage) {
            setTimeout(() => module.updatePageLanguage(), 100);
        }
    }).catch(error => {
        console.error('Error loading translate module:', error);
    });
}

function setupEventListeners() {
    // Используем делегирование событий для всех кнопок
    document.addEventListener('click', function(e) {
        // Network selection - using green classes
        if (e.target.closest('.network-option-green')) {
            const option = e.target.closest('.network-option-green');
            document.querySelectorAll('.network-option-green').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
            checkSavedAddress();
        }
        
        // Set address button
        if (e.target.closest('#set-address-btn')) {
            showSetAddressPopup();
        }
        
        // Transaction password toggle
        if (e.target.closest('#toggle-transaction-password')) {
            const passwordInput = document.getElementById('transaction-password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const toggleBtn = document.getElementById('toggle-transaction-password');
            toggleBtn.classList.toggle('fa-eye-slash');
        }
        
        // Submit withdrawal
        if (e.target.closest('#submit-withdraw')) {
            submitWithdrawal();
        }
        
        // Withdrawal confirmation cancel
        if (e.target.closest('#cancel-withdraw-confirm')) {
            document.getElementById('withdraw-confirm-popup').style.display = 'none';
        }
        
        // Set address modal close
        if (e.target.closest('#close-set-address')) {
            hideSetAddressPopup();
        }
    });
    
    // Обработчик для подтверждения вывода (используем отдельный для лучшего контроля)
    const confirmBtn = document.getElementById('confirm-withdraw-final');
    if (confirmBtn) {
        // Удаляем старый обработчик и создаем новый
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        
        newConfirmBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            processWithdrawal();
        });
    }
    
    // Обработчик для сохранения адреса
    const saveAddressBtn = document.getElementById('save-new-address');
    if (saveAddressBtn) {
        saveAddressBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveNewAddress();
        });
    }
    
    // Также добавим прямой обработчик для кнопки подтверждения вывода
    setTimeout(() => {
        const confirmBtnDirect = document.getElementById('confirm-withdraw-final');
        if (confirmBtnDirect) {
            // Удаляем все старые обработчики и добавляем новый
            confirmBtnDirect.onclick = null;
            confirmBtnDirect.addEventListener('click', processWithdrawal);
        }
    }, 500);
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update balance
    document.getElementById('available-balance').textContent = `${user.balance.toFixed(2)} USDT`;
    
    // Check for saved addresses
    checkSavedAddress();
    
    // Update fee calculation
    updateFeeCalculation();
}

function checkSavedAddress() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const selectedNetwork = document.querySelector('.network-option-green.active')?.getAttribute('data-network') || 'TRC20';
    const addressField = document.getElementById('withdrawal-address');
    const savedMessage = document.getElementById('saved-address-message');
    const noAddressMessage = document.getElementById('no-address-message');
    
    if (!addressField || !savedMessage || !noAddressMessage) return;
    
    // Check if user has saved address for this network
    if (selectedNetwork === 'TRC20' && user.withdrawal_address_trc20) {
        addressField.value = user.withdrawal_address_trc20;
        savedMessage.style.display = 'block';
        noAddressMessage.style.display = 'none';
    } else if (selectedNetwork === 'BEP20' && user.withdrawal_address_bep20) {
        addressField.value = user.withdrawal_address_bep20;
        savedMessage.style.display = 'block';
        noAddressMessage.style.display = 'none';
    } else {
        addressField.value = '';
        savedMessage.style.display = 'none';
        noAddressMessage.style.display = 'block';
    }
}

function showSetAddressPopup() {
    // Set active network in modal to match current selection
    const currentNetwork = document.querySelector('.network-option-green.active')?.getAttribute('data-network') || 'TRC20';
    document.querySelectorAll('#set-address-popup .network-option-green').forEach(opt => {
        opt.classList.remove('active');
        if (opt.getAttribute('data-network') === currentNetwork) {
            opt.classList.add('active');
        }
    });
    
    // Clear input field
    document.getElementById('new-withdrawal-address').value = '';
    
    // Show modal
    document.getElementById('set-address-popup').style.display = 'flex';
}

function hideSetAddressPopup() {
    document.getElementById('set-address-popup').style.display = 'none';
}

async function saveNewAddress() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const selectedNetwork = document.querySelector('#set-address-popup .network-option-green.active')?.getAttribute('data-network') || 'TRC20';
    const address = document.getElementById('new-withdrawal-address').value.trim();
    
    if (!address) {
        window.showCustomAlert(t('validation_required'));
        return;
    }
    
    try {
        // Save address in database
        const updateData = {};
        if (selectedNetwork === 'TRC20') {
            updateData.withdrawal_address_trc20 = address;
        } else {
            updateData.withdrawal_address_bep20 = address;
        }
        
        const { error } = await window.supabase
            .from('users')
            .update(updateData)
            .eq('id', user.id);
            
        if (error) throw error;
        
        // Update user in localStorage
        Object.assign(user, updateData);
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        window.showCustomAlert(t('address_saved'));
        hideSetAddressPopup();
        
        // Update address display
        checkSavedAddress();
        
    } catch (error) {
        console.error('Error saving address:', error);
        window.showCustomAlert(t('error') + ': ' + error.message);
    }
}

function initNetworkSelection() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    // Check which networks have saved addresses
    const trc20Option = document.querySelector('[data-network="TRC20"]');
    const bep20Option = document.querySelector('[data-network="BEP20"]');
    
    if (user.withdrawal_address_trc20 && trc20Option) {
        const networkName = trc20Option.querySelector('.network-name-green');
        if (networkName) {
            networkName.innerHTML += ' <span style="font-size: 10px; color: #52c41a;">(' + t('saved') + ')</span>';
        }
    }
    
    if (user.withdrawal_address_bep20 && bep20Option) {
        const networkName = bep20Option.querySelector('.network-name-green');
        if (networkName) {
            networkName.innerHTML += ' <span style="font-size: 10px; color: #52c41a;">(' + t('saved') + ')</span>';
        }
    }
}

function updateFeeCalculation() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const amountInput = document.getElementById('withdraw-amount');
    if (!amountInput) return;
    
    const amount = parseFloat(amountInput.value) || 0;
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    const feeElement = document.getElementById('withdrawal-fee');
    const netElement = document.getElementById('net-amount');
    
    if (feeElement && netElement) {
        feeElement.textContent = `${fee.toFixed(2)} USDT (${feePercent}%)`;
        netElement.textContent = `${netAmount.toFixed(2)} USDT`;
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

function submitWithdrawal() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const selectedNetwork = document.querySelector('.network-option-green.active')?.getAttribute('data-network') || 'TRC20';
    const address = document.getElementById('withdrawal-address').value.trim();
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const password = document.getElementById('transaction-password').value;
    
    // Validation
    if (!address) {
        // Show set address popup if no address
        showSetAddressPopup();
        window.showCustomAlert(t('validation_required'));
        return;
    }
    
    if (!amount || amount < 20) {
        window.showCustomAlert(t('minimum_withdrawal_rule'));
        return;
    }
    
    if (amount > user.balance) {
        window.showCustomAlert(t('insufficient_balance'));
        return;
    }
    
    if (!password) {
        window.showCustomAlert(t('validation_required'));
        return;
    }
    
    if (user.payment_password !== password) {
        window.showCustomAlert(t('invalid_transaction_password'));
        return;
    }
    
    // Calculate fee
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    // Show confirmation
    document.getElementById('confirm-network').textContent = selectedNetwork;
    document.getElementById('confirm-address').textContent = address;
    document.getElementById('confirm-amount').textContent = `${amount.toFixed(2)} USDT`;
    document.getElementById('confirm-fee').textContent = `${fee.toFixed(2)} USDT (${feePercent}%)`;
    document.getElementById('confirm-net').textContent = `${netAmount.toFixed(2)} USDT`;
    
    document.getElementById('withdraw-confirm-popup').style.display = 'flex';
}

async function processWithdrawal() {
    // Проверяем, не идет ли уже обработка
    if (isWithdrawProcessing) {
        console.log('Withdrawal already processing, ignoring duplicate click');
        return;
    }
    
    // Устанавливаем флаг, что началась обработка
    isWithdrawProcessing = true;
    
    const confirmBtn = document.getElementById('confirm-withdraw-final');
    if (confirmBtn) {
        // Блокируем кнопку на время обработки
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = '0.7';
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + t('processing');
    }
    
    const user = window.getCurrentUser();
    if (!user) {
        // Сбрасываем флаг
        isWithdrawProcessing = false;
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.style.opacity = '1';
            confirmBtn.textContent = t('confirm');
        }
        window.showSection('login');
        return;
    }
    
    const selectedNetwork = document.querySelector('.network-option-green.active')?.getAttribute('data-network') || 'TRC20';
    const address = document.getElementById('withdrawal-address').value.trim();
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    
    // Дополнительная проверка суммы
    if (amount > user.balance) {
        window.showCustomAlert(t('insufficient_balance'));
        isWithdrawProcessing = false;
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.style.opacity = '1';
            confirmBtn.textContent = t('confirm');
        }
        document.getElementById('withdraw-confirm-popup').style.display = 'none';
        return;
    }
    
    // Calculate fee
    const feePercent = getWithdrawalFee(user.vip_level);
    const fee = (amount * feePercent) / 100;
    
    try {
        // Создаем транзакцию вывода
        const { data, error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: user.id,
                type: 'withdrawal',
                amount: -amount,
                status: 'pending',
                description: `Withdrawal ${amount} USDT (${selectedNetwork}) - Fee: ${fee.toFixed(2)} USDT`,
                network: selectedNetwork,
                withdrawal_address: address,
                created_at: new Date().toISOString()
            }])
            .select('id') // Получаем ID созданной транзакции
            .single();
            
        if (txError) {
            console.error('Error creating withdrawal transaction:', txError);
            throw txError;
        }
        
        console.log('Withdrawal transaction created with ID:', data.id);
        
        // Обновляем баланс пользователя
        const newBalance = user.balance - amount;
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ 
                balance: newBalance,
                updated_at: new Date().toISOString()
            })
            .eq('id', user.id);
            
        if (balanceError) {
            console.error('Error updating user balance:', balanceError);
            throw balanceError;
        }
        
        // Обновляем пользователя в localStorage
        user.balance = newBalance;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        // Скрываем попап подтверждения
        document.getElementById('withdraw-confirm-popup').style.display = 'none';
        
        // Показываем сообщение об успехе
        window.showCustomAlert(t('withdrawal_submitted', null, { 
            amount: (amount - fee).toFixed(2), 
            fee: fee.toFixed(2) 
        }));
        
        // Сбрасываем форму
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('transaction-password').value = '';
        
        // Обновляем отображение баланса
        document.getElementById('available-balance').textContent = `${newBalance.toFixed(2)} USDT`;
        
        // Обновляем список выводов
        setTimeout(() => {
            loadRecentWithdrawals();
        }, 1000);
        
    } catch (error) {
        console.error('Error processing withdrawal:', error);
        window.showCustomAlert(t('error') + ': ' + error.message);
    } finally {
        // Всегда сбрасываем флаг обработки
        isWithdrawProcessing = false;
        
        // Восстанавливаем кнопку
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.style.opacity = '1';
            confirmBtn.textContent = t('confirm');
        }
    }
}

async function loadRecentWithdrawals() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('transactions')
            .select('*')
            .eq('user_id', user.id)
            .eq('type', 'withdrawal')
            .order('created_at', { ascending: false })
            .limit(10);
            
        if (error) throw error;
        
        const container = document.getElementById('withdrawals-list');
        if (!container) return;
        
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleDateString();
                const time = new Date(withdrawal.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const amount = Math.abs(withdrawal.amount);
                const status = withdrawal.status;
                const statusColor = status === 'completed' ? '#52c41a' : 
                                   status === 'pending' ? '#f9ae3d' : 
                                   '#ff4d4f';
                
                html += `
                    <div class="withdrawal-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <div style="flex: 1;">
                            <div style="color: white; font-size: 12px;">${date} ${time}</div>
                            <div style="color: #ccc; font-size: 10px;">${withdrawal.network || 'TRC20'}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #ff4d4f; font-size: 14px; font-weight: bold;">-${amount.toFixed(2)} USDT</div>
                            <div style="color: ${statusColor}; font-size: 10px;">${status.toUpperCase()}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">' + t('no_withdrawal_history') + '</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading withdrawals:', error);
        const container = document.getElementById('withdrawals-list');
        if (container) {
            container.innerHTML = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">' + t('error_loading') + '</div>';
        }
    }
}
