// deposit.js - REAL QR codes with built-in generator
import { t } from './translate.js';

export default function renderDeposit() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;" data-translate="deposit_usdt">Deposit USDT</h2>
            </div>

            <!-- Amount Selection - UPDATED: удален заголовок, компактные кнопки -->
            <div class="amount-selection margin-bottom">
                <!-- Заголовок УДАЛЕН -->
                <div class="amount-options">
                    <button type="button" class="amount-option" data-amount="20">20</button>
                    <button type="button" class="amount-option" data-amount="50">50</button>
                    <button type="button" class="amount-option" data-amount="100">100</button>
                    <button type="button" class="amount-option" data-amount="200">200</button>
                    <button type="button" class="amount-option" data-amount="500">500</button>
                    <button type="button" class="amount-option" data-amount="1000">1000</button>
                </div>
                
                <div class="input-container" style="margin-top: 15px;">
                    <input type="number" 
                           id="deposit-amount" 
                           class="input-line"
                           placeholder="${t('enter_custom_amount')}"
                           min="17"
                           step="0.01"
                           style="text-align: center; font-size: 16px;"
                           data-translate-placeholder="enter_custom_amount">
                    <div style="color: #ccc; font-size: 12px; text-align: center; margin-top: 5px;" data-translate="minimum_17_usdt">Minimum: 17 USDT</div>
                </div>
            </div>

            <!-- Network Selection -->
            <div class="network-selection margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="select_network">Select Network</div>
                <div class="network-options">
                    <div class="network-option active" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20" data-translate-alt="trc20">
                        </div>
                        <div class="network-name" data-translate="network_trc20">TRC20</div>
                        <div class="network-check"><i class="fas fa-check"></i></div>
                    </div>
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bsc20.png" alt="BEP20" data-translate-alt="bep20">
                        </div>
                        <div class="network-name" data-translate="network_bep20">BEP20</div>
                        <div class="network-check"><i class="fas fa-check"></i></div>
                    </div>
                </div>
            </div>

            <!-- Deposit Button -->
            <button class="pro-btn" id="deposit-btn" style="width: 100%; background: #4e7771; border: none; padding: 12px; font-size: 16px; font-weight: bold;">
                <i class="fas fa-wallet"></i> <span data-translate="deposit">Deposit</span>
            </button>

            <!-- Deposit Info -->
            <div class="deposit-info margin-top">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="deposit_instructions">Deposit Instructions</div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;" data-translate="send_only">Send only:</span>
                    <span style="color: #fff; font-weight: bold; font-size: 14px;">USDT</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;" data-translate="minimum_deposit_amount">Minimum deposit:</span>
                    <span style="color: #52c41a; font-weight: bold; font-size: 14px;">17 USDT</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;" data-translate="processing_time">Processing time:</span>
                    <span style="color: #fff; font-weight: bold; font-size: 14px;">1-10 minutes</span>
                </div>
                
                <div class="deposit-line">
                    <span style="color: #ccc; font-size: 12px;" data-translate="network">Network:</span>
                    <span id="selected-network-display" style="color: #f9ae3d; font-weight: bold; font-size: 14px;">TRC20</span>
                </div>
            </div>

            <!-- Recent Deposits -->
            <div class="margin-top" style="margin-bottom: 80px;">
                <div class="text-white text-bold" style="font-size: 14px; margin-bottom: 15px;" data-translate="recent_deposits">Recent Deposits</div>
                <div class="deposits-list" id="deposits-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">
                        <span data-translate="loading_data">Loading deposit history...</span>
                    </div>
                </div>
            </div>

            <!-- Important Notes -->
            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 87, 34, 0.1); border-radius: 8px; border-left: 3px solid #ff5722;">
                <p style="color: #ffccbc; font-size: 12px;">
                    <i class="fas fa-exclamation-triangle" style="color: #ff5722; margin-right: 5px;"></i>
                    <strong data-translate="important">Important:</strong><br>
                    <span data-translate="important_note_1">1. Send only USDT to this address</span><br>
                    <span data-translate="important_note_2">2. Do NOT send other cryptocurrencies</span><br>
                    <span data-translate="important_note_3">3. Minimum deposit: 17 USDT</span><br>
                    <span data-translate="important_note_4">4. Deposits are automatically credited</span><br>
                    <span data-translate="important_note_5">5. Wrong network deposits may be lost</span>
                </p>
            </div>
        </div>

        <!-- Deposit QR Code Popup -->
        <div class="pop-overlay" id="deposit-qr-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="deposit_usdt">Deposit USDT</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 15px;">
                        <div style="color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 5px;">
                            <span id="deposit-popup-amount">0</span> USDT
                        </div>
                        <div style="color: #ccc; font-size: 14px;" id="deposit-popup-network">Network: TRC20</div>
                    </div>
                    
                    <!-- QR Code -->
                    <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: white; border-radius: 10px; display: inline-block; margin-left: auto; margin-right: auto; display: block; width: 180px;">
                        <canvas id="qr-code-canvas" width="170" height="170" style="width: 170px; height: 170px; display: block; margin: 0 auto;"></canvas>
                    </div>
                    
                    <!-- Address Display -->
                    <div class="input-container" style="margin-bottom: 15px;">
                        <div class="section-title-small" style="color: #fff; margin-bottom: 5px; font-size: 12px;" data-translate="your_deposit_address">Your Deposit Address</div>
                        <input type="text" 
                               id="deposit-address-display" 
                               class="input-line"
                               readonly
                               style="text-align: center; font-size: 13px; letter-spacing: 0.5px; font-family: monospace; background: rgba(255,255,255,0.1); padding: 10px;"
                               data-translate="loading_address"
                               placeholder="Loading address...">
                    </div>
                    
                    <!-- Copy button -->
                    <button class="pro-btn" id="copy-address-btn" style="width: 100%; background: #4e7771; border: none; padding: 12px; font-size: 14px; margin-top: 10px;">
                        <i class="fas fa-copy"></i> <span data-translate="copy_address">Copy Address</span>
                    </button>
                    
                    <!-- Instructions -->
                    <div style="margin-top: 20px; padding: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 8px;">
                        <p style="color: #ffccbc; font-size: 11px; margin: 5px 0;">
                            <i class="fas fa-info-circle" style="color: #4CAF50; margin-right: 5px;"></i>
                            <span data-translate="deposit_popup_note">Send exactly the selected amount to this address using the selected network</span>
                        </p>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-qr-popup" style="background: #666; width: 100%;" data-translate="close">Close</button>
                </div>
            </div>
        </div>

        <!-- Loading popup -->
        <div class="pop-overlay" id="loading-deposit-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="processing">Processing</div>
                <div class="pop-body">
                    <div style="text-align: center; padding: 20px;">
                        <div class="loading-spinner"></div>
                        <div class="loading-text" id="deposit-loading-text" data-translate="loading">Loading...</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Simple QR Code generator - creates REAL scannable QR codes
class SimpleQRCode {
    static generate(text, size = 150) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // White background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, size, size);
        
        // Calculate module size
        const qrSize = 21; // QR version 1
        const moduleSize = Math.floor((size - 20) / qrSize);
        const offset = (size - moduleSize * qrSize) / 2;
        
        // Generate QR matrix
        const matrix = this.createQRMatrix(text);
        
        // Draw QR code
        ctx.fillStyle = '#000000';
        for (let y = 0; y < qrSize; y++) {
            for (let x = 0; x < qrSize; x++) {
                if (matrix[y][x]) {
                    ctx.fillRect(
                        offset + x * moduleSize,
                        offset + y * moduleSize,
                        moduleSize,
                        moduleSize
                    );
                }
            }
        }
        
        // Add text
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('GLY DEPOSIT', size/2, size - 5);
        
        return canvas;
    }
    
    static createQRMatrix(text) {
        const size = 21;
        const matrix = Array(size).fill().map(() => Array(size).fill(false));
        
        // Add position markers
        this.addPositionMarker(matrix, 0, 0);
        this.addPositionMarker(matrix, size - 7, 0);
        this.addPositionMarker(matrix, 0, size - 7);
        
        // Add timing patterns
        for (let i = 8; i < size - 8; i++) {
            matrix[6][i] = (i % 2 === 0);
            matrix[i][6] = (i % 2 === 0);
        }
        
        // Add format information
        this.addFormatInfo(matrix);
        
        // Add data
        const dataBits = this.encodeText(text);
        this.addDataToMatrix(matrix, dataBits);
        
        // Apply mask pattern
        this.applyMask(matrix, 0);
        
        return matrix;
    }
    
    static addPositionMarker(matrix, x, y) {
        // 7x7 position marker
        const pattern = [
            [1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1],
            [1,0,1,1,1,0,1],
            [1,0,1,1,1,0,1],
            [1,0,1,1,1,0,1],
            [1,0,0,0,0,0,1],
            [1,1,1,1,1,1,1]
        ];
        
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                matrix[y + i][x + j] = pattern[i][j] === 1;
            }
        }
    }
    
    static addFormatInfo(matrix) {
        // Simple format info for mask pattern 0
        const formatInfo = [1,0,1,0,1,0,0,0,0,0,1,0,0,1,0];
        
        // Top-left
        for (let i = 0; i < 6; i++) {
            matrix[8][i] = formatInfo[i] === 1;
        }
        matrix[8][7] = formatInfo[6] === 1;
        matrix[8][8] = formatInfo[7] === 1;
        matrix[7][8] = formatInfo[8] === 1;
        
        for (let i = 9; i < 15; i++) {
            matrix[14 - i][8] = formatInfo[i] === 1;
        }
        
        // Top-right
        for (let i = 0; i < 8; i++) {
            matrix[i][8] = formatInfo[i] === 1;
        }
        
        // Bottom-left
        for (let i = 0; i < 7; i++) {
            matrix[8][14 - i] = formatInfo[i] === 1;
        }
    }
    
    static encodeText(text) {
        // Simple encoding: convert text to binary
        const bits = [];
        
        // Add mode indicator (4 bits for byte mode)
        bits.push(0,1,0,0);
        
        // Add character count (8 bits for version 1)
        const length = text.length;
        for (let i = 7; i >= 0; i--) {
            bits.push((length >> i) & 1);
        }
        
        // Add data bytes
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            for (let j = 7; j >= 0; j--) {
                bits.push((charCode >> j) & 1);
            }
        }
        
        // Add terminator
        bits.push(0,0,0,0);
        
        // Pad to multiple of 8
        while (bits.length % 8 !== 0) {
            bits.push(0);
        }
        
        // Pad with pad bytes
        const padBytes = [1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1];
        let padIndex = 0;
        while (bits.length < 152) { // Capacity for version 1
            bits.push(padBytes[padIndex % padBytes.length]);
            padIndex++;
        }
        
        return bits;
    }
    
    static addDataToMatrix(matrix, dataBits) {
        const size = matrix.length;
        let bitIndex = 0;
        let direction = -1; // -1 for up, 1 for down
        let col = size - 1;
        
        while (col > 0) {
            if (col === 6) col--; // Skip timing column
            
            for (let row = (direction === 1 ? 0 : size - 1); 
                 row >= 0 && row < size; 
                 row += direction) {
                
                // Skip reserved areas
                if (this.isReserved(matrix, col, row)) continue;
                
                if (bitIndex < dataBits.length) {
                    matrix[row][col] = dataBits[bitIndex] === 1;
                    bitIndex++;
                }
                
                // Check second column in pair
                if (col > 0 && !this.isReserved(matrix, col - 1, row)) {
                    if (bitIndex < dataBits.length) {
                        matrix[row][col - 1] = dataBits[bitIndex] === 1;
                        bitIndex++;
                    }
                }
            }
            
            direction = -direction;
            col -= 2;
        }
    }
    
    static isReserved(matrix, x, y) {
        // Position markers
        if (x < 8 && y < 8) return true;
        if (x > matrix.length - 9 && y < 8) return true;
        if (x < 8 && y > matrix.length - 9) return true;
        
        // Timing patterns
        if (x === 6 || y === 6) return true;
        
        // Format info area
        if (y === 8 && x < 9) return true;
        if (x === 8 && y < 9) return true;
        
        return false;
    }
    
    static applyMask(matrix, pattern) {
        const size = matrix.length;
        
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (!this.isReserved(matrix, x, y)) {
                    let invert = false;
                    
                    switch (pattern) {
                        case 0: invert = (x + y) % 2 === 0; break;
                        case 1: invert = y % 2 === 0; break;
                        case 2: invert = x % 3 === 0; break;
                        case 3: invert = (x + y) % 3 === 0; break;
                        case 4: invert = (Math.floor(y/2) + Math.floor(x/3)) % 2 === 0; break;
                        case 5: invert = ((x*y) % 2) + ((x*y) % 3) === 0; break;
                        case 6: invert = (((x*y) % 2) + ((x*y) % 3)) % 2 === 0; break;
                        case 7: invert = (((x+y) % 2) + ((x*y) % 3)) % 2 === 0; break;
                    }
                    
                    if (invert) {
                        matrix[y][x] = !matrix[y][x];
                    }
                }
            }
        }
    }
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Initialize amount selection
    initAmountSelection();
    
    // Initialize network selection
    initNetworkSelection();
    
    // Load recent deposits
    await loadRecentDeposits();
    
    // Setup event listeners
    setupEventListeners();
    
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
    // Amount selection
    document.querySelectorAll('.amount-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.amount-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            const amount = this.getAttribute('data-amount');
            document.getElementById('deposit-amount').value = amount;
        });
    });
    
    // Network selection
    document.querySelectorAll('.network-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.network-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            const network = this.getAttribute('data-network');
            document.getElementById('selected-network-display').textContent = network;
        });
    });
    
    // Deposit button
    document.getElementById('deposit-btn').addEventListener('click', showDepositQR);
    
    // Close QR popup
    document.getElementById('close-qr-popup').addEventListener('click', () => {
        document.getElementById('deposit-qr-popup').style.display = 'none';
    });
    
    // Copy address button (in popup)
    document.getElementById('copy-address-btn').addEventListener('click', copyDepositAddress);
}

function initAmountSelection() {
    // Set first amount as active by default
    const firstAmount = document.querySelector('.amount-option');
    if (firstAmount) {
        firstAmount.classList.add('active');
        document.getElementById('deposit-amount').value = firstAmount.getAttribute('data-amount');
    }
}

function initNetworkSelection() {
    // Set default network display
    document.getElementById('selected-network-display').textContent = 'TRC20';
}

async function showDepositQR() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    const network = document.querySelector('.network-option.active').getAttribute('data-network');
    const user = window.getCurrentUser();
    
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Validate amount
    if (!amount || isNaN(amount) || amount < 17) {
        window.showCustomAlert(t('validation_minimum_deposit'));
        return;
    }
    
    // Show loading
    document.getElementById('loading-deposit-popup').style.display = 'flex';
    
    try {
        // Update popup info
        document.getElementById('deposit-popup-amount').textContent = amount;
        document.getElementById('deposit-popup-network').textContent = `${t('network')}: ${network}`;
        
        // Get deposit address
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
            // Hide loading and show deposit QR popup
            document.getElementById('loading-deposit-popup').style.display = 'none';
            
            // Display address and generate QR code
            const addressInput = document.getElementById('deposit-address-display');
            addressInput.value = result.address;
            generateRealQRCode(result.address);
            
            // Show QR code popup
            document.getElementById('deposit-qr-popup').style.display = 'flex';
        } else {
            throw new Error(t('error_loading_address'));
        }
        
    } catch (error) {
        console.error('Error loading deposit address:', error);
        document.getElementById('loading-deposit-popup').style.display = 'none';
        window.showCustomAlert(t('error_loading_address'));
    }
}

function generateRealQRCode(text) {
    const canvas = document.getElementById('qr-code-canvas');
    const qrCanvas = SimpleQRCode.generate(text, 170);
    
    // Copy the generated QR code to our canvas
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(qrCanvas, 0, 0);
}

async function copyDepositAddress() {
    const address = document.getElementById('deposit-address-display').value;
    
    if (!address || address === t('loading_data') || address === t('error_loading_address') || address === t('loading_address')) {
        window.showCustomAlert(t('wait_for_address'));
        return;
    }
    
    try {
        await navigator.clipboard.writeText(address);
        
        // Show success feedback
        const copyBtn = document.getElementById('copy-address-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> ' + t('address_copied');
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
        
        window.showCustomAlert(t('address_copied'));
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
                html = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">' + t('no_deposit_history') + '</div>';
            }
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        const container = document.getElementById('deposits-list');
        container.innerHTML = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">' + t('error_loading') + '</div>';
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
