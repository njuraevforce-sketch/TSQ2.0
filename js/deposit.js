// deposit.js
export default function renderDeposit() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Deposit USDT</h2>
                <p style="color: #ccc;">Deposit funds to start earning</p>
            </div>

            <!-- Network Selection with Green Lines -->
            <div class="network-selection-green margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Select Network</div>
                <div class="network-options-green">
                    <div class="network-option-green active" data-network="TRC20">
                        <div class="network-icon-green">
                            <img src="assets/trc20.png" alt="TRC20">
                        </div>
                        <div class="network-name-green">TRC20</div>
                        <div class="network-check-green"><i class="fas fa-check"></i></div>
                    </div>
                    <div class="network-option-green" data-network="BEP20">
                        <div class="network-icon-green">
                            <img src="assets/bsc20.png" alt="BEP20">
                        </div>
                        <div class="network-name-green">BEP20</div>
                        <div class="network-check-green"><i class="fas fa-check"></i></div>
                    </div>
                </div>
            </div>

            <!-- Deposit Address with Green Line -->
            <div class="deposit-address-section margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Deposit Address</div>
                <div class="input-container-green">
                    <input type="text" 
                           id="deposit-address" 
                           placeholder="Generating address..." 
                           class="input-line-green"
                           readonly>
                </div>
                <div id="generated-address-message" style="display: none; font-size: 12px; color: #52c41a; margin-top: 5px;">
                    <i class="fas fa-check-circle"></i> Deposit address generated
                </div>
                <div id="no-address-message" style="display: none; font-size: 12px; color: #f9ae3d; margin-top: 5px;">
                    <i class="fas fa-exclamation-circle"></i> Click "Generate Address" below
                </div>
            </div>

            <!-- Generate Address Button -->
            <button class="pro-btn" id="generate-address-btn" style="width: 100%; margin-bottom: 20px;">
                <i class="fas fa-wallet"></i> Generate Deposit Address
            </button>

            <!-- Copy Address Button -->
            <button class="pro-btn" id="copy-address-btn" style="width: 100%; margin-bottom: 20px; background: #3d615c;">
                <i class="fas fa-copy"></i> Copy Address
            </button>

            <!-- Deposit Info -->
            <div class="deposit-info margin-bottom">
                <div class="deposit-line">
                    <span style="color: #ccc;">Network:</span>
                    <span id="selected-network" style="color: #fff; font-weight: bold;">TRC20</span>
                </div>
                <div class="deposit-line">
                    <span style="color: #ccc;">Minimum Deposit:</span>
                    <span id="min-deposit" style="color: #f9ae3d; font-weight: bold;">17 USDT</span>
                </div>
                <div class="deposit-line">
                    <span style="color: #ccc;">Processing Time:</span>
                    <span style="color: #52c41a; font-weight: bold;">1-72 hours</span>
                </div>
                <div class="deposit-line">
                    <span style="color: #ccc;">Status:</span>
                    <span id="address-status" style="color: #ff4d4f; font-weight: bold;">No address generated</span>
                </div>
            </div>

            <!-- Deposit Instructions -->
            <div style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; border-left: 3px solid #4e7771;">
                <h4 style="color: #fff; margin-bottom: 10px;">Instructions:</h4>
                <ol style="color: #ccc; font-size: 12px; padding-left: 15px;">
                    <li style="margin-bottom: 8px;">Select network (TRC20 or BEP20)</li>
                    <li style="margin-bottom: 8px;">Click "Generate Deposit Address"</li>
                    <li style="margin-bottom: 8px;">Copy the generated address</li>
                    <li style="margin-bottom: 8px;">Send USDT to this address (minimum 17 USDT)</li>
                    <li style="margin-bottom: 8px;">Deposit will be credited automatically within 1-72 hours</li>
                    <li>Use same network for sending funds</li>
                </ol>
            </div>

            <!-- Recent Deposits -->
            <div class="margin-top">
                <div class="text-white text-bold" style="font-size: 14px; margin-bottom: 15px;">Recent Deposits</div>
                <div class="deposits-list" id="deposits-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">
                        No recent deposits
                    </div>
                </div>
            </div>
        </div>

        <!-- Loading Modal for Address Generation -->
        <div class="pop-overlay" id="loading-deposit-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Generating Address</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div class="loading-spinner" style="width: 40px; height: 40px; margin: 0 auto;"></div>
                    </div>
                    <p style="text-align: center; color: #333;">
                        Generating secure deposit address...
                    </p>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Load user data
    await loadUserData();
    
    // Load recent deposits
    await loadRecentDeposits();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize network selection
    initNetworkSelection();
}

function setupEventListeners() {
    // Network selection
    document.querySelectorAll('.network-option-green').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.network-option-green').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update selected network display
            const selectedNetwork = this.getAttribute('data-network');
            document.getElementById('selected-network').textContent = selectedNetwork;
            
            // Check if address exists for this network
            checkDepositAddress(selectedNetwork.toLowerCase());
        });
    });
    
    // Generate address button
    document.getElementById('generate-address-btn').addEventListener('click', generateDepositAddress);
    
    // Copy address button
    document.getElementById('copy-address-btn').addEventListener('click', copyDepositAddress);
}

async function loadUserData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Set initial network to TRC20
    document.getElementById('selected-network').textContent = 'TRC20';
    
    // Check for existing deposit addresses
    checkDepositAddress('trc20');
}

function initNetworkSelection() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    // Set TRC20 as default active
    const trc20Option = document.querySelector('[data-network="TRC20"]');
    const bep20Option = document.querySelector('[data-network="BEP20"]');
    
    if (trc20Option) {
        trc20Option.classList.add('active');
    }
}

async function checkDepositAddress(network) {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Check if user has deposit address for this network
        const { data: depositAddress, error } = await window.supabase
            .from('deposit_addresses')
            .select('address')
            .eq('user_id', user.id)
            .eq('network', network)
            .maybeSingle();
            
        if (error) throw error;
        
        const addressField = document.getElementById('deposit-address');
        const generatedMessage = document.getElementById('generated-address-message');
        const noAddressMessage = document.getElementById('no-address-message');
        const addressStatus = document.getElementById('address-status');
        
        if (depositAddress && depositAddress.address) {
            addressField.value = depositAddress.address;
            generatedMessage.style.display = 'block';
            noAddressMessage.style.display = 'none';
            addressStatus.textContent = 'Address ready';
            addressStatus.style.color = '#52c41a';
        } else {
            addressField.value = '';
            generatedMessage.style.display = 'none';
            noAddressMessage.style.display = 'block';
            addressStatus.textContent = 'No address generated';
            addressStatus.style.color = '#ff4d4f';
        }
        
    } catch (error) {
        console.error('Error checking deposit address:', error);
    }
}

async function generateDepositAddress() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const selectedNetwork = document.querySelector('.network-option-green.active').getAttribute('data-network');
    const network = selectedNetwork.toLowerCase();
    
    // Show loading
    document.getElementById('loading-deposit-popup').style.display = 'flex';
    
    try {
        // Call backend API to generate deposit address
        const response = await fetch(`/api/deposit/generate?user_id=${user.id}&network=${network}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Hide loading
        document.getElementById('loading-deposit-popup').style.display = 'none';
        
        if (result.success) {
            // Update address field
            const addressField = document.getElementById('deposit-address');
            addressField.value = result.address;
            
            // Show success message
            const generatedMessage = document.getElementById('generated-address-message');
            const noAddressMessage = document.getElementById('no-address-message');
            const addressStatus = document.getElementById('address-status');
            
            generatedMessage.style.display = 'block';
            noAddressMessage.style.display = 'none';
            addressStatus.textContent = 'Address ready';
            addressStatus.style.color = '#52c41a';
            
            // Show success alert
            window.showCustomAlert(`Deposit address generated successfully for ${selectedNetwork}!`);
            
            // Reload recent deposits
            setTimeout(() => {
                loadRecentDeposits();
            }, 1000);
        } else {
            window.showCustomAlert('Error generating address: ' + (result.error || 'Unknown error'));
        }
        
    } catch (error) {
        console.error('Error generating deposit address:', error);
        document.getElementById('loading-deposit-popup').style.display = 'none';
        window.showCustomAlert('Error generating address. Please try again.');
    }
}

async function copyDepositAddress() {
    const address = document.getElementById('deposit-address').value.trim();
    
    if (!address) {
        window.showCustomAlert('Please generate a deposit address first');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(address);
        
        // Show success
        const copyBtn = document.getElementById('copy-address-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Address Copied';
        copyBtn.style.background = '#52c41a';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '#3d615c';
        }, 2000);
        
    } catch (error) {
        window.showCustomAlert('Failed to copy address. Please copy manually.');
    }
}

async function loadRecentDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Get recent deposits for this user
        const { data: deposits, error } = await window.supabase
            .from('deposit_transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(10);
            
        if (error) throw error;
        
        const container = document.getElementById('deposits-list');
        let html = '';
        
        if (deposits && deposits.length > 0) {
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at).toLocaleDateString();
                const time = new Date(deposit.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const amount = deposit.amount;
                const status = deposit.status;
                const network = deposit.network || 'TRC20';
                const statusColor = status === 'confirmed' ? '#52c41a' : 
                                   status === 'pending' ? '#f9ae3d' : 
                                   '#ff4d4f';
                
                html += `
                    <div class="deposit-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <div style="flex: 1;">
                            <div style="color: white; font-size: 12px;">${date} ${time}</div>
                            <div style="color: #ccc; font-size: 10px;">${network.toUpperCase()}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${amount.toFixed(2)} USDT</div>
                            <div style="color: ${statusColor}; font-size: 10px;">${status.toUpperCase()}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">No deposit history</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
    }
}
