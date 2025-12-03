[file name]: withdraw (1).js
[file content begin]
// Withdraw section
export default function renderWithdraw() {
    return `
        <!-- Withdraw header -->
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Withdraw USDT</h2>
                <p style="color: #ccc;">Available Balance: <span id="withdraw-balance" style="color: #f9ae3d; font-weight: bold;">0.00 USDT</span></p>
            </div>

            <!-- Network selection with icons -->
            <div class="network-section">
                <div class="section-title" style="color: white; margin-bottom: 15px;">Select Network</div>
                <div class="network-options">
                    <div class="network-option" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20">
                        </div>
                        <div class="network-info">
                            <div class="network-name">TRC20 (Tron)</div>
                            <div class="network-fee" id="trc20-fee">Fee: 1%</div>
                        </div>
                        <div class="network-radio">
                            <input type="radio" name="network" id="network-trc20" value="TRC20" checked>
                        </div>
                    </div>
                    
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bep20.png" alt="BEP20">
                        </div>
                        <div class="network-info">
                            <div class="network-name">BEP20 (BSC)</div>
                            <div class="network-fee" id="bep20-fee">Fee: 1%</div>
                        </div>
                        <div class="network-radio">
                            <input type="radio" name="network" id="network-bep20" value="BEP20">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Withdrawal address section -->
            <div class="card padding margin-top" id="address-section">
                <div class="section-title" style="color: white; margin-bottom: 15px;">Withdrawal Address</div>
                
                <!-- Saved addresses -->
                <div class="saved-addresses" id="saved-addresses" style="display: none;">
                    <div class="saved-address" id="trc20-saved">
                        <div class="address-label">
                            <i class="fas fa-wallet" style="color: #4e7771;"></i>
                            TRC20 Address
                        </div>
                        <div class="address-value" id="trc20-address-value"></div>
                    </div>
                    <div class="saved-address" id="bep20-saved" style="margin-top: 10px;">
                        <div class="address-label">
                            <i class="fas fa-wallet" style="color: #4e7771;"></i>
                            BEP20 Address
                        </div>
                        <div class="address-value" id="bep20-address-value"></div>
                    </div>
                    <div class="text-gray" style="font-size: 12px; margin-top: 10px;">
                        <i class="fas fa-info-circle"></i> To change address, contact support: @GLYSupport
                    </div>
                </div>
                
                <!-- New address form -->
                <div class="new-address-form" id="new-address-form">
                    <div class="form-group">
                        <label style="color: white; display: block; margin-bottom: 5px;">Enter your <span id="network-label">TRC20</span> address</label>
                        <input type="text" id="withdrawal-address" placeholder="e.g., TQr7R6e9J9X7V6v8G6t7Y6u8I9o0P7b6v5C" 
                               class="input-line" style="background: #2a2a2a; color: white;">
                    </div>
                    <div class="form-group" style="margin-top: 15px;">
                        <label style="color: white; display: block; margin-bottom: 5px;">Confirm address</label>
                        <input type="text" id="withdrawal-address-confirm" placeholder="Re-enter address" 
                               class="input-line" style="background: #2a2a2a; color: white;">
                    </div>
                    <div class="text-gray" style="font-size: 12px; margin-top: 10px;">
                        <i class="fas fa-exclamation-triangle"></i> Double-check the address. Once saved, it can only be changed through support.
                    </div>
                </div>
            </div>

            <!-- Withdrawal amount -->
            <div class="card padding margin-top">
                <div class="section-title" style="color: white; margin-bottom: 15px;">Withdrawal Amount</div>
                
                <div class="form-group">
                    <input type="number" id="withdraw-amount" placeholder="Enter amount (USDT)" 
                           class="input-line" style="background: #2a2a2a; color: white; text-align: center; font-size: 18px;">
                </div>
                
                <!-- Quick amount buttons -->
                <div class="quick-amounts" style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="quick-amount-btn" data-amount="50">50 USDT</button>
                    <button class="quick-amount-btn" data-amount="100">100 USDT</button>
                    <button class="quick-amount-btn" data-amount="200">200 USDT</button>
                    <button class="quick-amount-btn" data-amount="500">500 USDT</button>
                </div>
                
                <!-- Fee and net amount -->
                <div class="fee-calculation" style="margin-top: 20px;">
                    <div class="fee-row" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: #ccc;">Fee:</span>
                        <span id="withdrawal-fee" style="color: #f9ae3d;">0.00 USDT</span>
                    </div>
                    <div class="fee-row" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: #ccc;">VIP Level:</span>
                        <span id="vip-level-display" style="color: #4e7771;">VIP 1</span>
                    </div>
                    <div class="fee-row" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: #ccc;">Fee %:</span>
                        <span id="fee-percent" style="color: #4e7771;">7%</span>
                    </div>
                    <div class="fee-row" style="display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;">
                        <span style="color: white; font-weight: bold;">You will receive:</span>
                        <span id="net-amount" style="color: #52c41a; font-weight: bold; font-size: 18px;">0.00 USDT</span>
                    </div>
                </div>
            </div>

            <!-- Payment password -->
            <div class="card padding margin-top">
                <div class="section-title" style="color: white; margin-bottom: 15px;">Confirm Withdrawal</div>
                
                <div class="form-group" style="position: relative;">
                    <input type="password" id="payment-password" placeholder="Payment Password" 
                           class="input-line" style="background: #2a2a2a; color: white; padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-payment-password" 
                       style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <button id="submit-withdrawal" class="pro-btn" style="width: 100%; margin-top: 20px; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px;">
                    Submit Withdrawal Request
                </button>
            </div>

            <!-- Important notes -->
            <div class="card padding margin-top" style="background: rgba(249, 174, 61, 0.1); border: 1px solid #f9ae3d;">
                <div style="color: #f9ae3d; font-weight: bold; margin-bottom: 10px;">
                    <i class="fas fa-exclamation-circle"></i> Important Notes
                </div>
                <ul style="color: #ccc; font-size: 12px; padding-left: 20px; margin: 0;">
                    <li>Minimum withdrawal: 20 USDT</li>
                    <li>Processing time: 1-24 hours</li>
                    <li>Double-check your withdrawal address</li>
                    <li>Fee depends on your VIP level</li>
                    <li>Funds will be sent to your saved address</li>
                    <li>To change address, contact support</li>
                </ul>
            </div>
        </div>

        <!-- Withdrawal confirmation popup -->
        <div class="pop-overlay" id="withdrawal-confirm-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Confirm Withdrawal</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #4e7771;">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    
                    <div class="confirm-details">
                        <div class="confirm-row">
                            <span>Amount:</span>
                            <span id="confirm-amount" style="color: white; font-weight: bold;"></span>
                        </div>
                        <div class="confirm-row">
                            <span>Network:</span>
                            <span id="confirm-network" style="color: #4e7771;"></span>
                        </div>
                        <div class="confirm-row">
                            <span>Fee:</span>
                            <span id="confirm-fee" style="color: #f9ae3d;"></span>
                        </div>
                        <div class="confirm-row">
                            <span>You receive:</span>
                            <span id="confirm-net" style="color: #52c41a; font-weight: bold;"></span>
                        </div>
                        <div class="confirm-row">
                            <span>Address:</span>
                            <span id="confirm-address" style="color: #ccc; font-size: 12px; word-break: break-all;"></span>
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #333; margin-top: 15px;">
                        Are you sure you want to submit this withdrawal request?
                    </p>
                </div>
                <div class="pop-footer">
                    <button type="button" id="confirm-withdrawal-btn" style="margin-right: 10px;">Confirm</button>
                    <button type="button" id="cancel-withdrawal">Cancel</button>
                </div>
            </div>
        </div>

        <!-- Success popup -->
        <div class="pop-overlay" id="withdrawal-success-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Request Submitted</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #52c41a;">✓</div>
                    </div>
                    <p style="text-align: center; color: #333; margin-bottom: 15px;">
                        Your withdrawal request has been submitted successfully!
                    </p>
                    <div class="success-details">
                        <div class="success-row">
                            <span>Request ID:</span>
                            <span id="success-request-id" style="color: #4e7771; font-weight: bold;"></span>
                        </div>
                        <div class="success-row">
                            <span>Amount:</span>
                            <span id="success-amount" style="color: white; font-weight: bold;"></span>
                        </div>
                        <div class="success-row">
                            <span>Status:</span>
                            <span style="color: #f9ae3d; font-weight: bold;">Pending</span>
                        </div>
                    </div>
                    <p style="text-align: center; color: #666; font-size: 12px; margin-top: 15px;">
                        Please wait 1-24 hours for processing.<br>
                        You can check status in Transaction History.
                    </p>
                </div>
                <div class="pop-footer">
                    <button id="close-success-popup" style="background: #4e7771;">OK</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    document.title = 'GLY - Withdraw';

    // Set navbar title
    window.setNavbarTitle('Withdraw', true);

    // Load user data
    await loadUserData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Calculate initial fee
    calculateFee();
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Update balance
    document.getElementById('withdraw-balance').textContent = `${user.balance.toFixed(2)} USDT`;
    document.getElementById('vip-level-display').textContent = `VIP ${user.vip_level}`;
    
    // Calculate fee percent based on VIP level
    const feePercent = getFeePercent(user.vip_level);
    document.getElementById('fee-percent').textContent = `${feePercent}%`;
    
    // Load saved addresses
    await loadSavedAddresses(user);
    
    // Check if user has saved addresses
    checkAddressStatus(user);
}

function getFeePercent(vipLevel) {
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

async function loadSavedAddresses(user) {
    try {
        // Check if user has saved addresses
        const hasTRC20 = user.trc20_address && user.trc20_address.trim().length > 0;
        const hasBEP20 = user.bep20_address && user.bep20_address.trim().length > 0;
        
        if (hasTRC20) {
            document.getElementById('trc20-address-value').textContent = user.trc20_address;
            document.getElementById('trc20-saved').style.display = 'block';
        }
        
        if (hasBEP20) {
            document.getElementById('bep20-address-value').textContent = user.bep20_address;
            document.getElementById('bep20-saved').style.display = 'block';
        }
        
        // Show saved addresses section if any address exists
        if (hasTRC20 || hasBEP20) {
            document.getElementById('saved-addresses').style.display = 'block';
        }
        
    } catch (error) {
        console.error('Error loading saved addresses:', error);
    }
}

function checkAddressStatus(user) {
    const selectedNetwork = document.querySelector('input[name="network"]:checked').value;
    const hasTRC20 = user.trc20_address && user.trc20_address.trim().length > 0;
    const hasBEP20 = user.bep20_address && user.bep20_address.trim().length > 0;
    
    if (selectedNetwork === 'TRC20' && hasTRC20) {
        document.getElementById('new-address-form').style.display = 'none';
        document.getElementById('saved-addresses').style.display = 'block';
    } else if (selectedNetwork === 'BEP20' && hasBEP20) {
        document.getElementById('new-address-form').style.display = 'none';
        document.getElementById('saved-addresses').style.display = 'block';
    } else {
        document.getElementById('new-address-form').style.display = 'block';
        document.getElementById('saved-addresses').style.display = 'none';
        document.getElementById('network-label').textContent = selectedNetwork;
    }
}

function setupEventListeners() {
    try {
        // Network selection
        document.querySelectorAll('input[name="network"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const network = this.value;
                const user = window.getCurrentUser();
                
                // Update network label
                document.getElementById('network-label').textContent = network;
                
                // Check address status for selected network
                checkAddressStatus(user);
                
                // Update fee display
                const feePercent = getFeePercent(user.vip_level);
                document.getElementById('fee-percent').textContent = `${feePercent}%`;
                
                // Recalculate fee
                calculateFee();
            });
        });

        // Quick amount buttons
        document.querySelectorAll('.quick-amount-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const amount = parseFloat(this.getAttribute('data-amount'));
                document.getElementById('withdraw-amount').value = amount;
                calculateFee();
            });
        });

        // Amount input
        document.getElementById('withdraw-amount').addEventListener('input', calculateFee);
        document.getElementById('withdraw-amount').addEventListener('change', calculateFee);

        // Payment password toggle
        document.getElementById('toggle-payment-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('payment-password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });

        // Submit withdrawal button
        document.getElementById('submit-withdrawal').addEventListener('click', validateWithdrawal);

        // Popup handlers
        document.getElementById('confirm-withdrawal-btn').addEventListener('click', processWithdrawal);
        document.getElementById('cancel-withdrawal').addEventListener('click', hideWithdrawalConfirmPopup);
        document.getElementById('close-success-popup').addEventListener('click', hideWithdrawalSuccessPopup);
        
    } catch (error) {
        console.error('Error setting up event listeners in withdraw:', error);
        setTimeout(setupEventListeners, 500);
    }
}

function calculateFee() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value) || 0;
    const feePercent = getFeePercent(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    // Update display
    document.getElementById('withdrawal-fee').textContent = `${fee.toFixed(2)} USDT`;
    document.getElementById('net-amount').textContent = `${netAmount.toFixed(2)} USDT`;
}

async function validateWithdrawal() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const network = document.querySelector('input[name="network"]:checked').value;
    const paymentPassword = document.getElementById('payment-password').value;
    
    // Validation
    if (!amount || amount < 20) {
        window.showCustomAlert('Minimum withdrawal amount is 20 USDT');
        return;
    }
    
    if (amount > user.balance) {
        window.showCustomAlert('Insufficient balance');
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
    
    // Check address
    let address = '';
    const hasTRC20 = user.trc20_address && user.trc20_address.trim().length > 0;
    const hasBEP20 = user.bep20_address && user.bep20_address.trim().length > 0;
    
    if (network === 'TRC20' && hasTRC20) {
        address = user.trc20_address;
    } else if (network === 'BEP20' && hasBEP20) {
        address = user.bep20_address;
    } else {
        // New address
        address = document.getElementById('withdrawal-address').value.trim();
        const confirmAddress = document.getElementById('withdrawal-address-confirm').value.trim();
        
        if (!address) {
            window.showCustomAlert('Please enter withdrawal address');
            return;
        }
        
        if (address !== confirmAddress) {
            window.showCustomAlert('Addresses do not match');
            return;
        }
        
        if (address.length < 20) {
            window.showCustomAlert('Invalid address format');
            return;
        }
    }
    
    if (!address) {
        window.showCustomAlert('Withdrawal address not found');
        return;
    }
    
    // Calculate final amounts
    const feePercent = getFeePercent(user.vip_level);
    const fee = (amount * feePercent) / 100;
    const netAmount = amount - fee;
    
    // Show confirmation popup
    document.getElementById('confirm-amount').textContent = `${amount.toFixed(2)} USDT`;
    document.getElementById('confirm-network').textContent = network;
    document.getElementById('confirm-fee').textContent = `${fee.toFixed(2)} USDT (${feePercent}%)`;
    document.getElementById('confirm-net').textContent = `${netAmount.toFixed(2)} USDT`;
    document.getElementById('confirm-address').textContent = address;
    
    document.getElementById('withdrawal-confirm-popup').style.display = 'flex';
}

async function processWithdrawal() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const network = document.querySelector('input[name="network"]:checked').value;
    const feePercent = getFeePercent(user.vip_level);
    const fee = (amount * feePercent) / 100;
    
    let address = '';
    let saveAddress = false;
    const hasTRC20 = user.trc20_address && user.trc20_address.trim().length > 0;
    const hasBEP20 = user.bep20_address && user.bep20_address.trim().length > 0;
    
    if (network === 'TRC20' && hasTRC20) {
        address = user.trc20_address;
    } else if (network === 'BEP20' && hasBEP20) {
        address = user.bep20_address;
    } else {
        // New address - save it
        address = document.getElementById('withdrawal-address').value.trim();
        saveAddress = true;
    }
    
    try {
        // First save address if needed
        if (saveAddress) {
            const updateData = {};
            if (network === 'TRC20') {
                updateData.trc20_address = address;
            } else if (network === 'BEP20') {
                updateData.bep20_address = address;
            }
            
            const { error: updateError } = await supabase
                .from('users')
                .update(updateData)
                .eq('id', user.id);
                
            if (updateError) throw updateError;
            
            // Update local user
            if (network === 'TRC20') {
                user.trc20_address = address;
            } else if (network === 'BEP20') {
                user.bep20_address = address;
            }
            localStorage.setItem('gly_user', JSON.stringify(user));
        }
        
        // Create withdrawal request
        const { data, error } = await supabase
            .from('withdrawal_requests')
            .insert([{
                user_id: user.id,
                amount: amount,
                network: network,
                address: address,
                status: 'pending'
            }])
            .select();
            
        if (error) throw error;
        
        // Update user balance
        const newBalance = user.balance - amount;
        const { error: balanceError } = await supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', user.id);
            
        if (balanceError) throw balanceError;
        
        // Create transaction record
        await supabase
            .from('transactions')
            .insert([{
                user_id: user.id,
                type: 'withdrawal',
                amount: -amount,
                status: 'pending',
                description: `Withdrawal ${amount} USDT via ${network} (Fee: ${fee.toFixed(2)} USDT)`
            }]);
        
        // Update local user
        user.balance = newBalance;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        // Show success popup
        hideWithdrawalConfirmPopup();
        
        document.getElementById('success-request-id').textContent = `#${data[0].id}`;
        document.getElementById('success-amount').textContent = `${amount.toFixed(2)} USDT`;
        document.getElementById('withdrawal-success-popup').style.display = 'flex';
        
        // Update balance display
        document.getElementById('withdraw-balance').textContent = `${newBalance.toFixed(2)} USDT`;
        
    } catch (error) {
        console.error('Error processing withdrawal:', error);
        window.showCustomAlert('Error processing withdrawal: ' + error.message);
    }
}

function hideWithdrawalConfirmPopup() {
    document.getElementById('withdrawal-confirm-popup').style.display = 'none';
}

function hideWithdrawalSuccessPopup() {
    document.getElementById('withdrawal-success-popup').style.display = 'none';
    // Clear form
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('payment-password').value = '';
    document.getElementById('withdrawal-address').value = '';
    document.getElementById('withdrawal-address-confirm').value = '';
    calculateFee();
}
[file content end]
