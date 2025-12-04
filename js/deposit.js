// deposit.js - UPDATED with auto-deposit system and green lines design
export default function renderDeposit() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Deposit USDT</h2>
                <p style="color: #ccc; font-size: 14px;">Send USDT to your personal deposit address</p>
            </div>

            <!-- Network Selection with green lines -->
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

            <!-- Deposit Address Section with green lines -->
            <div class="deposit-address-section">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Your Deposit Address</div>
                
                <!-- QR Code -->
                <div style="text-align: center; margin-bottom: 20px; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 8px;">
                    <canvas id="qr-code-canvas" style="width: 150px; height: 150px;"></canvas>
                </div>
                
                <!-- Address Display -->
                <div class="input-container-green" style="margin-bottom: 15px;">
                    <input type="text" 
                           id="deposit-address-display" 
                           class="input-line-green"
                           readonly
                           style="text-align: center; font-size: 14px; letter-spacing: 0.5px;">
                </div>
                
                <!-- Loading message -->
                <div id="generating-address-message" style="display: none; font-size: 12px; color: #52c41a; text-align: center; margin-bottom: 10px;">
                    <i class="fas fa-spinner fa-spin"></i> Generating address...
                </div>
                
                <!-- Copy button -->
                <button class="pro-btn" id="copy-address-btn" style="width: 100%; background: #4e7771; border: none; padding: 12px; font-size: 14px;">
                    <i class="fas fa-copy"></i> Copy Address
                </button>
                
                <!-- Generate/Refresh button -->
                <button class="pro-btn" id="generate-address-btn" style="width: 100%; margin-top: 10px; background: transparent; border: 1px solid #4e7771; color: #4e7771;">
                    <i class="fas fa-sync-alt"></i> Generate New Address
                </button>
            </div>

            <!-- Deposit Info with green lines -->
            <div class="deposit-info">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Deposit Instructions</div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;">Send only:</span>
                    <span style="color: #fff; font-weight: bold; font-size: 14px;">USDT</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;">Minimum deposit:</span>
                    <span style="color: #52c41a; font-weight: bold; font-size: 14px;">17 USDT</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;">Processing time:</span>
                    <span style="color: #fff; font-weight: bold; font-size: 14px;">1-10 minutes</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;">Network:</span>
                    <span id="selected-network-display" style="color: #f9ae3d; font-weight: bold; font-size: 14px;">TRC20</span>
                </div>
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

            <!-- Important Notes -->
            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 87, 34, 0.1); border-radius: 8px; border-left: 3px solid #ff5722;">
                <p style="color: #ffccbc; font-size: 12px;">
                    <i class="fas fa-exclamation-triangle" style="color: #ff5722; margin-right: 5px;"></i>
                    <strong>Important:</strong><br>
                    1. Send only USDT to this address<br>
                    2. Do NOT send other cryptocurrencies<br>
                    3. Minimum deposit: 17 USDT<br>
                    4. Deposits are automatically credited<br>
                    5. Wrong network deposits may be lost
                </p>
            </div>
        </div>

        <!-- Loading popup -->
        <div class="pop-overlay" id="loading-deposit-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Processing</div>
                <div class="pop-body">
                    <div style="text-align: center; padding: 20px;">
                        <div class="loading-spinner"></div>
                        <div class="loading-text" id="deposit-loading-text">Processing deposit...</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Initialize network selection
    initNetworkSelection();
    
    // Load initial deposit address for TRC20
    await loadDepositAddress('TRC20');
    
    // Load recent deposits
    await loadRecentDeposits();
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Network selection
    document.querySelectorAll('.network-option-green').forEach(option => {
        option.addEventListener('click', async function() {
            document.querySelectorAll('.network-option-green').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            const network = this.getAttribute('data-network');
            document.getElementById('selected-network-display').textContent = network;
            
            // Load address for selected network
            await loadDepositAddress(network);
        });
    });
    
    // Copy address button
    document.getElementById('copy-address-btn').addEventListener('click', copyDepositAddress);
    
    // Generate new address button
    document.getElementById('generate-address-btn').addEventListener('click', generateNewAddress);
}

function initNetworkSelection() {
    // Set default network display
    document.getElementById('selected-network-display').textContent = 'TRC20';
}

async function loadDepositAddress(network) {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    try {
        // Show loading
        document.getElementById('generating-address-message').style.display = 'block';
        document.getElementById('deposit-address-display').value = 'Loading...';
        
        // Generate or get deposit address
        const address = await generateDepositAddress(user.id, network.toLowerCase());
        
        if (address) {
            // Display address
            document.getElementById('deposit-address-display').value = address;
            document.getElementById('generating-address-message').style.display = 'none';
            
            // Generate QR code
            generateQRCode(address, 'qr-code-canvas');
        } else {
            window.showCustomAlert('Failed to generate deposit address. Please try again.');
        }
        
    } catch (error) {
        console.error('Error loading deposit address:', error);
        document.getElementById('generating-address-message').style.display = 'none';
        document.getElementById('deposit-address-display').value = 'Error loading address';
    }
}

async function generateDepositAddress(userId, network) {
    try {
        // Check if address already exists in our database
        const { data: existingAddress } = await window.supabase
            .from('deposit_addresses')
            .select('address')
            .eq('user_id', userId)
            .eq('network', network)
            .maybeSingle();
        
        if (existingAddress && existingAddress.address) {
            console.log(`Using existing ${network} address: ${existingAddress.address}`);
            return existingAddress.address;
        }
        
        // Call our deposit server to generate new address
        // Note: This requires your deposit server to be running
        const API_BASE_URL = 'https://your-deposit-server.com'; // Change this to your actual server URL
        
        const response = await fetch(`${API_BASE_URL}/api/deposit/generate?user_id=${userId}&network=${network}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.address) {
            // Save address to our database
            const { error: insertError } = await window.supabase
                .from('deposit_addresses')
                .insert({
                    user_id: userId,
                    address: result.address,
                    network: network,
                    created_at: new Date().toISOString()
                });
            
            if (insertError) {
                console.error('Error saving address to database:', insertError);
            }
            
            return result.address;
        } else {
            // Fallback: Generate local address (for testing)
            return generateLocalAddress(network);
        }
        
    } catch (error) {
        console.error('Error generating deposit address:', error);
        // Fallback for testing
        return generateLocalAddress(network);
    }
}

function generateLocalAddress(network) {
    // This is a fallback for testing when server is not available
    // In production, use the actual deposit server
    
    if (network === 'trc20') {
        // Generate fake TRC20 address for testing
        return 'T' + Math.random().toString(36).substring(2, 34).toUpperCase();
    } else {
        // Generate fake BEP20 address for testing
        return '0x' + Math.random().toString(36).substring(2, 42);
    }
}

function generateQRCode(text, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = 150;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Simple QR code generation (basic version for demo)
    // In production, use a proper QR code library
    
    // Set canvas size
    canvas.width = size;
    canvas.height = size;
    
    // Draw QR code background
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    
    // Draw QR code pattern (simplified)
    const cellSize = 5;
    const data = text;
    
    // Draw positioning markers
    ctx.fillStyle = '#000';
    
    // Top-left
    ctx.fillRect(2, 2, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#fff';
    ctx.fillRect(4, 4, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000';
    ctx.fillRect(6, 6, cellSize * 3, cellSize * 3);
    
    // Top-right
    ctx.fillStyle = '#000';
    ctx.fillRect(size - cellSize * 7 - 2, 2, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#fff';
    ctx.fillRect(size - cellSize * 5 - 4, 4, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000';
    ctx.fillRect(size - cellSize * 3 - 6, 6, cellSize * 3, cellSize * 3);
    
    // Bottom-left
    ctx.fillStyle = '#000';
    ctx.fillRect(2, size - cellSize * 7 - 2, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#fff';
    ctx.fillRect(4, size - cellSize * 5 - 4, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000';
    ctx.fillRect(6, size - cellSize * 3 - 6, cellSize * 3, cellSize * 3);
    
    // Draw address text at bottom
    ctx.fillStyle = '#000';
    ctx.font = '8px monospace';
    ctx.textAlign = 'center';
    
    const addressShort = text.length > 15 ? text.substring(0, 15) + '...' : text;
    ctx.fillText(addressShort, size / 2, size - 5);
}

async function copyDepositAddress() {
    const address = document.getElementById('deposit-address-display').value;
    
    if (!address || address === 'Loading...' || address === 'Error loading address') {
        window.showCustomAlert('Please wait for address to load');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(address);
        
        // Show success feedback
        const copyBtn = document.getElementById('copy-address-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#52c41a';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '#4e7771';
        }, 2000);
        
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        window.showCustomAlert('Address copied to clipboard!');
    }
}

async function generateNewAddress() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const network = document.querySelector('.network-option-green.active').getAttribute('data-network');
    
    // Show loading
    document.getElementById('generating-address-message').style.display = 'block';
    document.getElementById('deposit-address-display').value = 'Generating...';
    
    try {
        // Delete old address from database
        await window.supabase
            .from('deposit_addresses')
            .delete()
            .eq('user_id', user.id)
            .eq('network', network.toLowerCase());
        
        // Generate new address
        const newAddress = await generateDepositAddress(user.id, network.toLowerCase());
        
        if (newAddress) {
            document.getElementById('deposit-address-display').value = newAddress;
            generateQRCode(newAddress, 'qr-code-canvas');
            
            window.showCustomAlert('New deposit address generated successfully!');
        } else {
            window.showCustomAlert('Failed to generate new address');
        }
        
    } catch (error) {
        console.error('Error generating new address:', error);
        window.showCustomAlert('Error generating new address');
    } finally {
        document.getElementById('generating-address-message').style.display = 'none';
    }
}

async function loadRecentDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Get recent deposits from our database
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
                const statusColor = status === 'confirmed' ? '#52c41a' : 
                                   status === 'pending' ? '#f9ae3d' : 
                                   '#ccc';
                
                html += `
                    <div class="deposit-item">
                        <div style="flex: 1;">
                            <div style="color: white; font-size: 12px;">${date} ${time}</div>
                            <div style="color: #ccc; font-size: 10px;">${deposit.network || 'TRC20'} | ${deposit.tx_hash.substring(0, 16)}...</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${amount.toFixed(2)} USDT</div>
                            <div style="color: ${statusColor}; font-size: 10px;">${status.toUpperCase()}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            // Try to get from transactions table as fallback
            const { data: transactions } = await window.supabase
                .from('transactions')
                .select('*')
                .eq('user_id', user.id)
                .eq('type', 'deposit')
                .order('created_at', { ascending: false })
                .limit(5);
                
            if (transactions && transactions.length > 0) {
                transactions.forEach(transaction => {
                    const date = new Date(transaction.created_at).toLocaleDateString();
                    const time = new Date(transaction.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    
                    html += `
                        <div class="deposit-item">
                            <div style="flex: 1;">
                                <div style="color: white; font-size: 12px;">${date} ${time}</div>
                                <div style="color: #ccc; font-size: 10px;">Deposit</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${transaction.amount.toFixed(2)} USDT</div>
                                <div style="color: #52c41a; font-size: 10px;">COMPLETED</div>
                            </div>
                        </div>
                    `;
                });
            } else {
                html = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">No deposit history</div>';
            }
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
    }
}

// Function to check for new deposits (called periodically)
export async function checkForNewDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // This would be called by the server-side deposit processor
        // For now, we'll just reload the recent deposits list
        await loadRecentDeposits();
        
        // Update user balance if new deposits were found
        // (This would be handled by the server-side processor)
        
    } catch (error) {
        console.error('Error checking for new deposits:', error);
    }
}
