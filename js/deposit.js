// deposit.js - FIXED VERSION with SIMPLE QR
import { t } from './translate.js';

let depositListeners = [];

export default function renderDeposit() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;" data-translate="deposit_usdt">Deposit USDT</h2>
            </div>

            <!-- Amount Selection -->
            <div class="amount-selection margin-bottom">
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
                </div>
            </div>

            <!-- Network Selection -->
            <div class="network-selection margin-bottom">
                <div class="section-title-small" style="color: #fff; margin-bottom: 10px; font-size: 14px;" data-translate="select_network">Select Network</div>
                <div class="network-options">
                    <div class="network-option active" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20" data-translate-alt="trc20" onerror="this.style.display='none'">
                        </div>
                        <div class="network-name" data-translate="network_trc20">TRC20</div>
                        <div class="network-check"><i class="fas fa-check"></i></div>
                    </div>
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bsc20.png" alt="BEP20" data-translate-alt="bep20" onerror="this.style.display='none'">
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
                    
                    <!-- SIMPLE QR Code Placeholder -->
                    <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: white; border-radius: 10px; display: inline-block; margin-left: auto; margin-right: auto; display: block; width: 180px;">
                        <div id="qr-code-container" style="width: 170px; height: 170px; display: flex; align-items: center; justify-content: center; background: white;">
                            <div style="color: #666; font-size: 12px; text-align: center;">
                                QR code will appear here<br>
                                <small>Send to address below</small>
                            </div>
                        </div>
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
                            <span data-translate="scan_qr_instructions">Scan QR code or copy address above to deposit</span>
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

export async function init() {
    console.log('=== DEPOSIT INIT START ===');
    
    document.body.classList.add('no-tabbar');
    
    // Remove old listeners
    cleanupEventListeners();
    
    // Initialize selections
    initAmountSelection();
    initNetworkSelection();
    
    // Load recent deposits
    await loadRecentDeposits();
    
    // Setup event listeners
    setupEventListeners();
    
    // Force update language
    try {
        const translateModule = await import('./translate.js');
        if (translateModule.updatePageLanguage) {
            setTimeout(() => translateModule.updatePageLanguage(), 100);
        }
    } catch (error) {
        console.warn('Translate module error:', error);
    }
    
    console.log('=== DEPOSIT INIT COMPLETE ===');
    
    // Test click handler immediately
    setTimeout(() => {
        const btn = document.getElementById('deposit-btn');
        if (btn) {
            console.log('✅ Deposit button found, testing click...');
            // Simulate click to test
            btn.addEventListener('click', function testHandler(e) {
                console.log('✅ TEST HANDLER WORKING!');
                this.removeEventListener('click', testHandler);
            });
        } else {
            console.error('❌ Deposit button NOT FOUND!');
        }
    }, 100);
}

function setupEventListeners() {
    console.log('Setting up deposit listeners...');
    
    // 1. DIRECT HANDLER on deposit button - SIMPLE AND RELIABLE
    const depositBtn = document.getElementById('deposit-btn');
    if (depositBtn) {
        // Remove any existing listeners by cloning
        const newBtn = depositBtn.cloneNode(true);
        depositBtn.parentNode.replaceChild(newBtn, depositBtn);
        
        // Add fresh listener
        const handler = function(e) {
            console.log('🎯 DEPOSIT BUTTON DIRECT CLICK!');
            e.preventDefault();
            e.stopPropagation();
            showDepositQR();
        };
        
        newBtn.addEventListener('click', handler);
        newBtn.addEventListener('touchend', handler); // For mobile
        
        depositListeners.push({
            element: newBtn,
            handler: handler,
            type: 'click'
        });
        
        console.log('✅ Direct click handler attached to deposit button');
    } else {
        console.error('❌ deposit-btn element not found!');
    }
    
    // 2. Amount buttons - event delegation on document
    const amountHandler = function(e) {
        if (e.target.classList.contains('amount-option')) {
            e.preventDefault();
            document.querySelectorAll('.amount-option').forEach(opt => {
                opt.classList.remove('active');
            });
            e.target.classList.add('active');
            document.getElementById('deposit-amount').value = e.target.getAttribute('data-amount');
        }
    };
    
    document.addEventListener('click', amountHandler);
    depositListeners.push({ element: document, handler: amountHandler, type: 'click' });
    
    // 3. Network buttons - event delegation
    const networkHandler = function(e) {
        const networkOption = e.target.closest('.network-option');
        if (networkOption) {
            e.preventDefault();
            document.querySelectorAll('.network-option').forEach(opt => {
                opt.classList.remove('active');
            });
            networkOption.classList.add('active');
            document.getElementById('selected-network-display').textContent = 
                networkOption.getAttribute('data-network');
        }
    };
    
    document.addEventListener('click', networkHandler);
    depositListeners.push({ element: document, handler: networkHandler, type: 'click' });
    
    // 4. Close QR popup
    const closeBtn = document.getElementById('close-qr-popup');
    if (closeBtn) {
        const closeHandler = function(e) {
            e.preventDefault();
            document.getElementById('deposit-qr-popup').style.display = 'none';
        };
        closeBtn.addEventListener('click', closeHandler);
        depositListeners.push({ element: closeBtn, handler: closeHandler, type: 'click' });
    }
    
    // 5. Copy address button
    const copyBtn = document.getElementById('copy-address-btn');
    if (copyBtn) {
        const copyHandler = function(e) {
            e.preventDefault();
            copyDepositAddress();
        };
        copyBtn.addEventListener('click', copyHandler);
        depositListeners.push({ element: copyBtn, handler: copyHandler, type: 'click' });
    }
    
    console.log(`✅ ${depositListeners.length} listeners attached`);
}

function cleanupEventListeners() {
    console.log('Cleaning up deposit listeners...');
    
    depositListeners.forEach(listener => {
        try {
            if (listener.element && listener.handler) {
                listener.element.removeEventListener(listener.type, listener.handler);
            }
        } catch (e) {
            console.warn('Error removing listener:', e);
        }
    });
    
    depositListeners = [];
}

function initAmountSelection() {
    const firstAmount = document.querySelector('.amount-option');
    if (firstAmount) {
        firstAmount.classList.add('active');
        const input = document.getElementById('deposit-amount');
        if (input) input.value = firstAmount.getAttribute('data-amount');
    }
}

function initNetworkSelection() {
    const display = document.getElementById('selected-network-display');
    if (display) display.textContent = 'TRC20';
}

async function showDepositQR() {
    console.log('🎯 showDepositQR called!');
    
    const amountInput = document.getElementById('deposit-amount');
    const networkOption = document.querySelector('.network-option.active');
    const user = window.getCurrentUser();
    
    // Validate
    if (!user) {
        window.showSection('login');
        return;
    }
    
    if (!amountInput || !networkOption) {
        console.error('Missing required elements');
        return;
    }
    
    const amount = parseFloat(amountInput.value);
    const network = networkOption.getAttribute('data-network');
    
    if (!amount || isNaN(amount) || amount < 17) {
        window.showCustomAlert('Minimum deposit is 17 USDT');
        return;
    }
    
    // Show loading
    const loadingPopup = document.getElementById('loading-deposit-popup');
    if (loadingPopup) loadingPopup.style.display = 'flex';
    
    try {
        // Update popup info
        document.getElementById('deposit-popup-amount').textContent = amount;
        document.getElementById('deposit-popup-network').textContent = `Network: ${network}`;
        
        // Get deposit address from API
        const API_BASE_URL = 'https://tron-wallet-server-production.up.railway.app';
        const response = await fetch(
            `${API_BASE_URL}/api/deposit/generate?user_id=${user.id}&network=${network.toLowerCase()}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.address) {
            // Hide loading
            if (loadingPopup) loadingPopup.style.display = 'none';
            
            // Display address
            const addressInput = document.getElementById('deposit-address-display');
            if (addressInput) {
                addressInput.value = result.address;
            }
            
            // Generate SIMPLE QR code (no complex library)
            generateSimpleQRCode(result.address);
            
            // Show popup
            document.getElementById('deposit-qr-popup').style.display = 'flex';
            
            console.log('✅ Deposit QR popup shown');
        } else {
            throw new Error('Failed to get deposit address');
        }
        
    } catch (error) {
        console.error('Error in showDepositQR:', error);
        if (loadingPopup) loadingPopup.style.display = 'none';
        window.showCustomAlert('Error loading deposit address. Please try again.');
    }
}

function generateSimpleQRCode(text) {
    const container = document.getElementById('qr-code-container');
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Create simple QR-like display
    const canvas = document.createElement('canvas');
    canvas.width = 170;
    canvas.height = 170;
    const ctx = canvas.getContext('2d');
    
    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 170, 170);
    
    // Simple pattern (black squares)
    ctx.fillStyle = '#000000';
    
    // Position markers (simplified)
    // Top-left
    ctx.fillRect(10, 10, 30, 30);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(15, 15, 20, 20);
    ctx.fillStyle = '#000000';
    
    // Top-right
    ctx.fillRect(130, 10, 30, 30);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(135, 15, 20, 20);
    ctx.fillStyle = '#000000';
    
    // Bottom-left
    ctx.fillRect(10, 130, 30, 30);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(15, 135, 20, 20);
    ctx.fillStyle = '#000000';
    
    // Simple pattern
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if ((i + j) % 2 === 0) {
                ctx.fillRect(50 + i * 8, 50 + j * 8, 6, 6);
            }
        }
    }
    
    // Text label
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DEPOSIT', 85, 165);
    
    container.appendChild(canvas);
    
    // Fallback: Show text if canvas fails
    canvas.onerror = function() {
        container.innerHTML = `
            <div style="color: #333; text-align: center; padding: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">USDT Deposit</div>
                <div style="font-size: 10px; word-break: break-all;">${text.substring(0, 20)}...</div>
            </div>
        `;
    };
}

async function copyDepositAddress() {
    const addressInput = document.getElementById('deposit-address-display');
    if (!addressInput) return;
    
    const address = addressInput.value;
    if (!address || address.includes('Loading')) {
        window.showCustomAlert('Please wait for address to load');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(address);
        
        const copyBtn = document.getElementById('copy-address-btn');
        if (copyBtn) {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.style.background = '#52c41a';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.background = '#4e7771';
            }, 2000);
        }
    } catch (error) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        window.showCustomAlert('Address copied to clipboard');
    }
}

async function loadRecentDeposits() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        const { data: deposits, error } = await window.supabase
            .from('deposit_transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(10);
            
        if (error) throw error;
        
        const container = document.getElementById('deposits-list');
        if (!container) return;
        
        let html = '';
        
        if (deposits && deposits.length > 0) {
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at).toLocaleDateString();
                const time = new Date(deposit.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const statusColor = deposit.status === 'processed' ? '#52c41a' : 
                                  deposit.status === 'pending' ? '#f9ae3d' : '#ccc';
                
                html += `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <div>
                            <div style="color: white; font-size: 12px;">${date} ${time}</div>
                            <div style="color: #ccc; font-size: 10px;">${deposit.network || 'TRC20'}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #52c41a; font-size: 14px; font-weight: bold;">+${deposit.amount.toFixed(2)} USDT</div>
                            <div style="color: ${statusColor}; font-size: 10px;">${deposit.status.toUpperCase()}</div>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No deposit history</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        const container = document.getElementById('deposits-list');
        if (container) {
            container.innerHTML = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">Error loading history</div>';
        }
    }
}

export async function checkForNewDeposits() {
    await loadRecentDeposits();
}

export function cleanup() {
    cleanupEventListeners();
}
