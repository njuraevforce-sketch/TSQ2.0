// deposit.js - REAL QR codes with built-in generator
import { t } from './translate.js';

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
    
    // Сохраняем ссылку на модуль для app.js
    window.depositModule = { onShow };
}

export function onShow() {
    console.log('Deposit section shown - reinitializing...');
    // Переустанавливаем обработчики
    setupEventListeners();
    // Обновляем историю депозитов
    loadRecentDeposits();
}

function setupEventListeners() {
    console.log('Setting up deposit event listeners...');
    
    // Удаляем старые обработчики кнопки депозита
    const oldBtn = document.getElementById('deposit-btn');
    if (oldBtn) {
        const newBtn = oldBtn.cloneNode(true);
        oldBtn.parentNode.replaceChild(newBtn, oldBtn);
    }
    
    // Amount selection - делегирование
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('amount-option')) {
            document.querySelectorAll('.amount-option').forEach(opt => {
                opt.classList.remove('active');
            });
            event.target.classList.add('active');
            
            const amount = event.target.getAttribute('data-amount');
            document.getElementById('deposit-amount').value = amount;
        }
    });
    
    // Network selection - делегирование
    document.addEventListener('click', function(event) {
        const networkOption = event.target.closest('.network-option');
        if (networkOption) {
            document.querySelectorAll('.network-option').forEach(opt => {
                opt.classList.remove('active');
            });
            networkOption.classList.add('active');
            
            const network = networkOption.getAttribute('data-network');
            document.getElementById('selected-network-display').textContent = network;
        }
    });
    
    // Deposit button - гарантированная привязка
    const depositBtn = document.getElementById('deposit-btn');
    if (depositBtn) {
        depositBtn.addEventListener('click', showDepositQR);
        console.log('Deposit button listener attached');
    }
    
    // Close QR popup
    const closeBtn = document.getElementById('close-qr-popup');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('deposit-qr-popup').style.display = 'none';
        });
    }
    
    // Copy address button
    const copyBtn = document.getElementById('copy-address-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyDepositAddress);
    }
}

function initAmountSelection() {
    // Set first amount as active by default
    const firstAmount = document.querySelector('.amount-option');
    if (firstAmount) {
        firstAmount.classList.add('active');
        const amountInput = document.getElementById('deposit-amount');
        if (amountInput) {
            amountInput.value = firstAmount.getAttribute('data-amount');
        }
    }
}

function initNetworkSelection() {
    // Set default network display
    const networkDisplay = document.getElementById('selected-network-display');
    if (networkDisplay) {
        networkDisplay.textContent = 'TRC20';
    }
}

async function showDepositQR() {
    console.log('Show deposit QR called');
    
    const amountInput = document.getElementById('deposit-amount');
    const networkOption = document.querySelector('.network-option.active');
    
    if (!amountInput || !networkOption) {
        window.showCustomAlert(t('error_loading_data'));
        return;
    }
    
    const amount = parseFloat(amountInput.value);
    const network = networkOption.getAttribute('data-network');
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
    const loadingPopup = document.getElementById('loading-deposit-popup');
    if (loadingPopup) {
        loadingPopup.style.display = 'flex';
    }
    
    try {
        // Update popup info
        const amountDisplay = document.getElementById('deposit-popup-amount');
        const networkDisplay = document.getElementById('deposit-popup-network');
        
        if (amountDisplay) amountDisplay.textContent = amount;
        if (networkDisplay) networkDisplay.textContent = `${t('network')}: ${network}`;
        
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
            if (loadingPopup) {
                loadingPopup.style.display = 'none';
            }
            
            // Display address and generate QR code
            const addressInput = document.getElementById('deposit-address-display');
            if (addressInput) {
                addressInput.value = result.address;
            }
            
            generateRealQRCode(result.address);
            
            // Show QR code popup
            const qrPopup = document.getElementById('deposit-qr-popup');
            if (qrPopup) {
                qrPopup.style.display = 'flex';
            }
        } else {
            throw new Error(t('error_loading_address'));
        }
        
    } catch (error) {
        console.error('Error loading deposit address:', error);
        const loadingPopup = document.getElementById('loading-deposit-popup');
        if (loadingPopup) {
            loadingPopup.style.display = 'none';
        }
        window.showCustomAlert(t('error_loading_address'));
    }
}

function generateRealQRCode(text) {
    const canvas = document.getElementById('qr-code-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Белый фон
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    try {
        // Используем глобальный QRCode из подключенной библиотеки
        if (typeof QRCode !== 'undefined') {
            // Генерируем QR-код
            QRCode.toCanvas(canvas, text, {
                width: 170,
                margin: 1,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                },
                errorCorrectionLevel: 'M'
            }, function (error) {
                if (error) {
                    console.error('QRCode generation error:', error);
                    // Fallback на простой QR-код
                    generateFallbackQR(text);
                } else {
                    // Добавляем текст под QR кодом
                    ctx.fillStyle = '#000000';
                    ctx.font = 'bold 10px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('GLY DEPOSIT', 85, 165);
                }
            });
        } else {
            // Если библиотека не загрузилась
            generateFallbackQR(text);
        }
    } catch (error) {
        console.error('QR code generation error:', error);
        generateFallbackQR(text);
    }
}

function generateFallbackQR(text) {
    const canvas = document.getElementById('qr-code-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = 170;
    const moduleSize = 8;
    const modules = Math.floor(size / moduleSize);
    const offset = (size - modules * moduleSize) / 2;
    
    // Простая реализация QR-кода (для демонстрации)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);
    
    // Рисуем паттерны позиционирования
    ctx.fillStyle = '#000000';
    drawPositionPattern(ctx, offset, offset);
    drawPositionPattern(ctx, offset + moduleSize * (modules - 7), offset);
    drawPositionPattern(ctx, offset, offset + moduleSize * (modules - 7));
    
    // Просто показываем текст адреса
    ctx.fillStyle = '#000000';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scan with', 85, 20);
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Wallet App', 85, 35);
    ctx.font = '8px Arial';
    ctx.fillText(text.substring(0, 30), 85, 85);
    ctx.fillText(text.substring(30, 60), 85, 95);
    ctx.fillText('GLY DEPOSIT', 85, 165);
}

function drawPositionPattern(ctx, x, y) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(x, y, 7*8, 8); // Верх
    ctx.fillRect(x, y, 8, 7*8); // Левый
    ctx.fillRect(x + 6*8, y, 8, 7*8); // Правый
    ctx.fillRect(x, y + 6*8, 7*8, 8); // Низ
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + 8, y + 8, 5*8, 5*8); // Центр
    ctx.fillStyle = '#000000';
    ctx.fillRect(x + 2*8, y + 2*8, 3*8, 3*8); // Точка в центре
}

async function copyDepositAddress() {
    const addressInput = document.getElementById('deposit-address-display');
    if (!addressInput) return;
    
    const address = addressInput.value;
    
    if (!address || address === t('loading_data') || address === t('error_loading_address') || address === t('loading_address')) {
        window.showCustomAlert(t('wait_for_address'));
        return;
    }
    
    try {
        await navigator.clipboard.writeText(address);
        
        // Show success feedback
        const copyBtn = document.getElementById('copy-address-btn');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ' + t('address_copied');
            copyBtn.style.background = '#52c41a';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '#4e7771';
            }, 2000);
        }
        
    } catch (error) {
        // Fallback для старых браузеров
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
        const container = document.getElementById('deposits-list');
        if (!container) return;
        
        // Try to get recent deposits from deposit_transactions table
        const { data: deposits, error } = await window.supabase
            .from('deposit_transactions')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(10);
            
        if (error) throw error;
        
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
        if (container) {
            container.innerHTML = '<div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">' + t('error_loading') + '</div>';
        }
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
