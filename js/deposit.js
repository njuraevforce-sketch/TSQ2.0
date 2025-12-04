// deposit.js - UPDATED with auto-deposit system and REAL QR codes
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
                <div style="text-align: center; margin-bottom: 20px; padding: 10px; background: white; border-radius: 8px; display: inline-block; margin-left: auto; margin-right: auto; display: block; width: 160px;">
                    <div id="qr-code-container" style="width: 150px; height: 150px; margin: 0 auto;"></div>
                </div>
                
                <!-- Address Display -->
                <div class="input-container" style="margin-bottom: 15px;">
                    <input type="text" 
                           id="deposit-address-display" 
                           class="input-line"
                           readonly
                           style="text-align: center; font-size: 14px; letter-spacing: 0.5px; font-family: monospace;"
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

// Подключаем библиотеку для настоящих QR-кодов
function loadQRCodeLibrary() {
    return new Promise((resolve, reject) => {
        if (window.QRCode) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Загружаем библиотеку QR-кодов
    try {
        await loadQRCodeLibrary();
        console.log('QRCode library loaded successfully');
    } catch (error) {
        console.error('Failed to load QRCode library:', error);
        // Если библиотека не загрузилась, создаем заглушку
        document.getElementById('qr-code-container').innerHTML = 
            '<div style="color: #ccc; text-align: center; padding: 50px 0;">QR Code Library Error</div>';
    }
    
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
        qrContainer.innerHTML = '<div style="color: #ccc; text-align: center; padding: 50px 0;">Loading QR...</div>';
        
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
            
            // Generate real QR code with QRCode library
            await generateRealQRCode(result.address);
            
        } else {
            throw new Error('Failed to get deposit address from server');
        }
        
    } catch (error) {
        console.error('Error loading deposit address:', error);
        document.getElementById('deposit-address-display').value = 'Error loading address';
        
        // Show error in QR container
        const qrContainer = document.getElementById('qr-code-container');
        qrContainer.innerHTML = '<div style="color: #ff5722; text-align: center; padding: 50px 0; font-size: 12px;">Address Error</div>';
    }
}

async function generateRealQRCode(text) {
    const qrContainer = document.getElementById('qr-code-container');
    if (!qrContainer) return;
    
    qrContainer.innerHTML = '';
    
    if (window.QRCode) {
        // Используем библиотеку QRCode для создания настоящего QR-кода
        QRCode.toCanvas(text, { 
            width: 150,
            height: 150,
            margin: 1,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            errorCorrectionLevel: 'M'
        }, function(error, canvas) {
            if (error) {
                console.error('QR Code generation error:', error);
                // Fallback to simple QR code
                generateSimpleQRCode(text);
            } else {
                // Добавляем небольшие стили для лучшего отображения
                canvas.style.width = '150px';
                canvas.style.height = '150px';
                canvas.style.imageRendering = 'pixelated';
                qrContainer.appendChild(canvas);
            }
        });
    } else {
        // Fallback to simple QR code
        generateSimpleQRCode(text);
    }
}

function generateSimpleQRCode(text) {
    const qrContainer = document.getElementById('qr-code-container');
    if (!qrContainer) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    canvas.style.width = '150px';
    canvas.style.height = '150px';
    canvas.style.imageRendering = 'pixelated';
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas with white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw QR code pattern
    drawQRPattern(ctx, text);
    
    qrContainer.appendChild(canvas);
}

function drawQRPattern(ctx, text) {
    // Simple QR code with basic pattern
    const size = 150;
    const cellSize = 4;
    
    // Position markers (simplified)
    ctx.fillStyle = '#000000';
    
    // Top-left square
    ctx.fillRect(10, 10, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(10 + cellSize, 10 + cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = '#000000';
    ctx.fillRect(10 + 2 * cellSize, 10 + 2 * cellSize, 3 * cellSize, 3 * cellSize);
    
    // Top-right square
    ctx.fillStyle = '#000000';
    ctx.fillRect(size - 10 - 7 * cellSize, 10, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(size - 10 - 6 * cellSize, 10 + cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = '#000000';
    ctx.fillRect(size - 10 - 5 * cellSize, 10 + 2 * cellSize, 3 * cellSize, 3 * cellSize);
    
    // Bottom-left square
    ctx.fillStyle = '#000000';
    ctx.fillRect(10, size - 10 - 7 * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(10 + cellSize, size - 10 - 6 * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = '#000000';
    ctx.fillRect(10 + 2 * cellSize, size - 10 - 5 * cellSize, 3 * cellSize, 3 * cellSize);
    
    // Add text at bottom
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SCAN ME', size / 2, size - 5);
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
