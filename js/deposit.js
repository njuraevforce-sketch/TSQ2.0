// deposit.js - UPDATED with auto-deposit system
export default function renderDeposit() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Deposit USDT</h2>
                <p style="color: #ccc; font-size: 14px;">Send USDT to your personal deposit address</p>
            </div>

            <!-- Network Selection -->
            <div class="network-selection margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Select Network</div>
                <div class="network-options">
                    <div class="network-option active" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20">
                        </div>
                        <div class="network-name">TRC20</div>
                        <div class="network-check"><i class="fas fa-check"></i></div>
                    </div>
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bsc20.png" alt="BEP20">
                        </div>
                        <div class="network-name">BEP20</div>
                        <div class="network-check"><i class="fas fa-check"></i></div>
                    </div>
                </div>
            </div>

            <!-- Deposit Address Section -->
            <div class="deposit-address-section">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;">Your Deposit Address</div>
                
                <!-- QR Code -->
                <div style="text-align: center; margin-bottom: 20px; padding: 10px; background: rgba(0,0,0,0.1); border-radius: 8px;">
                    <div id="qr-code-container" style="width: 150px; height: 150px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                        <div id="qr-placeholder" style="color: #ccc; padding: 40px; text-align: center;">
                            Loading QR Code...
                        </div>
                    </div>
                </div>
                
                <!-- Address Display -->
                <div class="input-container" style="margin-bottom: 15px;">
                    <input type="text" 
                           id="deposit-address-display" 
                           class="input-line"
                           readonly
                           style="text-align: center; font-size: 14px; letter-spacing: 0.5px;"
                           placeholder="Loading address...">
                </div>
                
                <!-- Copy button -->
                <button class="pro-btn" id="copy-address-btn" style="width: 100%; background: #4e7771; border: none; padding: 12px; font-size: 14px;">
                    <i class="fas fa-copy"></i> Copy Address
                </button>
            </div>

            <!-- Deposit Info -->
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
                        Loading deposit history...
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
                        <div class="loading-text" id="deposit-loading-text">Loading...</div>
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
    document.querySelectorAll('.network-option').forEach(option => {
        option.addEventListener('click', async function() {
            document.querySelectorAll('.network-option').forEach(opt => {
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
        // Clear previous QR code
        const qrContainer = document.getElementById('qr-code-container');
        if (qrContainer) {
            qrContainer.innerHTML = '<div id="qr-placeholder" style="color: #ccc; padding: 40px; text-align: center;">Loading QR Code...</div>';
        }
        
        document.getElementById('deposit-address-display').value = 'Loading...';
        
        // Call our deposit server to get or generate address
        const API_BASE_URL = 'https://tron-wallet-server-production.up.railway.app';
        
        const response = await fetch(`${API_BASE_URL}/api/deposit/generate?user_id=${user.id}&network=${network.toLowerCase()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.address) {
            // Display address
            const addressInput = document.getElementById('deposit-address-display');
            addressInput.value = result.address;
            
            // Generate simple QR code without external library
            generateSimpleQRCode(result.address);
        } else {
            throw new Error('Failed to get deposit address from server');
        }
        
    } catch (error) {
        console.error('Error loading deposit address:', error);
        document.getElementById('deposit-address-display').value = 'Error loading address';
        
        // Show error in QR container
        const qrContainer = document.getElementById('qr-code-container');
        if (qrContainer) {
            qrContainer.innerHTML = '<div style="color: #ff5722; padding: 40px; text-align: center; font-size: 12px;">Address Error</div>';
        }
    }
}

function generateSimpleQRCode(text) {
    const qrContainer = document.getElementById('qr-code-container');
    if (!qrContainer) return;
    
    qrContainer.innerHTML = '';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    qrContainer.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Simple QR code pattern (basic version for demo)
    const cellSize = 4;
    const margin = 10;
    
    // Draw positioning markers (simplified)
    ctx.fillStyle = '#000000';
    
    // Top-left
    ctx.fillRect(margin, margin, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(margin + cellSize, margin + cellSize, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(margin + cellSize * 2, margin + cellSize * 2, cellSize * 3, cellSize * 3);
    
    // Top-right
    ctx.fillStyle = '#000000';
    ctx.fillRect(canvas.width - margin - cellSize * 7, margin, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(canvas.width - margin - cellSize * 6, margin + cellSize, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(canvas.width - margin - cellSize * 5, margin + cellSize * 2, cellSize * 3, cellSize * 3);
    
    // Bottom-left
    ctx.fillStyle = '#000000';
    ctx.fillRect(margin, canvas.height - margin - cellSize * 7, cellSize * 7, cellSize * 7);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(margin + cellSize, canvas.height - margin - cellSize * 6, cellSize * 5, cellSize * 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(margin + cellSize * 2, canvas.height - margin - cellSize * 5, cellSize * 3, cellSize * 3);
    
    // Draw address text
    ctx.fillStyle = '#000000';
    ctx.font = '8px monospace';
    ctx.textAlign = 'center';
    
    // Shorten address for display
    const displayText = text.length > 12 ? `${text.substring(0, 6)}...${text.substring(text.length - 6)}` : text;
    ctx.fillText(displayText, canvas.width / 2, canvas.height - 5);
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

async function loadRecentDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        // Try to get recent deposits from deposit_transactions table
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
                                   status === 'processed' ? '#52c41a' : 
                                   status === 'pending' ? '#f9ae3d' : 
                                   '#ccc';
                
                html += `
                    <div class="deposit-item">
                        <div style="flex: 1;">
                            <div style="color: white; font-size: 12px;">${date} ${time}</div>
                            <div style="color: #ccc; font-size: 10px;">${deposit.network || 'TRC20'}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${parseFloat(amount).toFixed(2)} USDT</div>
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
                                <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${parseFloat(transaction.amount).toFixed(2)} USDT</div>
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
        const container = document.getElementById('deposits-list');
        container.innerHTML = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">Error loading deposit history</div>';
    }
}

// Function to check for new deposits (called periodically)
export async function checkForNewDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        await loadRecentDeposits();
    } catch (error) {
        console.error('Error checking for new deposits:', error);
    }
}
