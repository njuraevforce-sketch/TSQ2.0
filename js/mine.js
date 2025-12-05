// Mine section
import { t, getCurrentLanguage, availableLanguages, setLanguage, updatePageLanguage } from './translate.js';

export default function renderMine() {
    const user = window.getCurrentUser();
    if (!user) return `<div class="error">${t('please_login')}</div>`;
    
    return `
        <div class="page-content">
            <!-- Profile Header -->
            <div class="profile-bg margin-bottom">
                <div class="text-center" style="padding-top: 30px; padding-bottom: 20px;">
                    <div class="profile-vip-badge" style="margin-bottom: 15px;" data-translate="vip_level">VIP ${user.vip_level}</div>
                    <div class="profile-id-copy margin-bottom">
                        <div class="profile-id" id="user-id-display" style="color: white;">${t('id')} ${user.id}</div>
                        <button class="copy-id-btn" id="copy-id-btn" data-translate="copy_id">Copy ID</button>
                    </div>
                    <div class="text-xl text-white margin-bottom" style="font-size: 24px; font-weight: bold;">
                        ${t('balance')} <span id="user-balance">${window.GLY.formatCurrency(user.balance)} USDT</span>
                    </div>
                </div>
            </div>
            
            <!-- Calendar Section -->
            <div class="calendar-section margin-bottom">
                <div class="calendar-header">
                    <div class="calendar-title" data-translate="utc_calendar">UTC Calendar</div>
                    <div class="calendar-nav">
                        <button id="prev-month"><i class="fas fa-chevron-left"></i></button>
                        <div id="current-month" style="color: white; padding: 0 10px; font-size: 14px;"></div>
                        <button id="next-month"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div class="calendar-grid" id="calendar-days">
                    <!-- Days will be populated by JS -->
                </div>
                <div class="calendar-time text-center margin-top-sm" id="utc-time">
                    <span data-translate="loading_utc">Loading UTC time...</span>
                </div>
            </div>
            
            <!-- Settings Section -->
            <div class="card padding">
                <div class="section-title-small margin-bottom" data-translate="settings">Settings</div>
                
                <div class="settings-list">
                    <!-- Withdrawal Address -->
                    <div class="setting-item" data-action="withdrawal-address">
                        <div class="setting-icon"><i class="fas fa-wallet"></i></div>
                        <div class="setting-name" data-translate="withdrawal_address">Withdrawal Address</div>
                        <div class="setting-value" id="address-status" data-translate="configure">Configure</div>
                    </div>
                    
                    <!-- Transaction Password -->
                    <div class="setting-item" data-action="transaction-password">
                        <div class="setting-icon"><i class="fas fa-lock"></i></div>
                        <div class="setting-name" data-translate="transaction_password">Transaction Password</div>
                        <div class="setting-value" id="password-status" data-translate="configure">Configure</div>
                    </div>
                    
                    <!-- Customer Service -->
                    <div class="setting-item" data-action="customer-service">
                        <div class="setting-icon"><i class="fas fa-headset"></i></div>
                        <div class="setting-name" data-translate="customer_service">Customer Service</div>
                        <div class="setting-value"><i class="fas fa-chevron-right"></i></div>
                    </div>
                    
                    <!-- Language -->
                    <div class="setting-item" data-action="language">
                        <div class="setting-icon"><i class="fas fa-globe"></i></div>
                        <div class="setting-name" data-translate="language">Language</div>
                        <div class="setting-value" id="current-language-display">${availableLanguages[getCurrentLanguage()] || 'English'}</div>
                    </div>
                    
                    <!-- Change Password -->
                    <div class="setting-item" data-action="change-password">
                        <div class="setting-icon"><i class="fas fa-key"></i></div>
                        <div class="setting-name" data-translate="change_password">Change Password</div>
                        <div class="setting-value"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>
                
                <!-- Logout Button -->
                <button id="logout-btn" class="pro-btn margin-top-xl" style="background: transparent; border: 2px solid #ff6b6b; color: #ff6b6b;" data-translate="logout">Logout</button>
            </div>
        </div>
        
        <!-- Popup for Withdrawal Address -->
        <div class="pop-overlay" id="address-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="set_withdrawal_address">Set Withdrawal Address</div>
                <div class="pop-body">
                    <div class="network-selection margin-bottom">
                        <div class="text-white margin-bottom-sm" data-translate="select_network">Select Network</div>
                        <div class="network-options">
                            <div class="network-option" data-network="trc20">
                                <div class="network-icon">
                                    <img src="assets/trc20.png" alt="TRC20">
                                </div>
                                <div class="network-name" data-translate="network_trc20">TRC20</div>
                                <div class="network-check"><i class="fas fa-check"></i></div>
                            </div>
                            <div class="network-option" data-network="bep20">
                                <div class="network-icon">
                                    <img src="assets/bep20.png" alt="BEP20">
                                </div>
                                <div class="network-name" data-translate="network_bep20">BEP20</div>
                                <div class="network-check"><i class="fas fa-check"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    <form id="address-form">
                        <div class="form-group">
                            <label class="text-gray" data-translate="usdt_wallet_address">USDT Wallet Address</label>
                            <input type="text" id="wallet-address" class="input-line" placeholder="${t('enter_wallet_address')}" required>
                        </div>
                        <div class="text-gray margin-top-sm" style="font-size: 12px;" data-translate="address_save_note">
                            This address will be saved for future withdrawals. Please double-check the address.
                        </div>
                    </form>
                </div>
                <div class="pop-footer">
                    <button type="button" id="save-address-btn" style="background: #4e7771;" data-translate="save">Save</button>
                    <button type="button" id="cancel-address-btn" style="background: #666;" data-translate="cancel">Cancel</button>
                </div>
            </div>
        </div>
        
        <!-- Popup for Customer Service -->
        <div class="pop-overlay" id="support-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="customer_service">Customer Service</div>
                <div class="pop-body">
                    <div class="text-gray margin-bottom" data-translate="contact_24_7">
                        Contact our 24/7 customer support:
                    </div>
                    
                    <div class="referral-section margin-bottom">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-icon"><i class="fab fa-telegram"></i></div>
                                <div class="referral-text">
                                    <h4 data-translate="telegram">Telegram</h4>
                                    <p>@gly_support</p>
                                </div>
                            </div>
                            <button class="copy-btn" data-copy="@gly_support" data-translate="copy">COPY</button>
                        </div>
                    </div>
                    
                    <div class="referral-section">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-icon"><i class="fas fa-envelope"></i></div>
                                <div class="referral-text">
                                    <h4 data-translate="email">Email</h4>
                                    <p>support@gly.com</p>
                                </div>
                            </div>
                            <button class="copy-btn" data-copy="support@gly.com" data-translate="copy">COPY</button>
                        </div>
                    </div>
                </div>
                <div class="pop-footer">
                    <button type="button" id="close-support-btn" style="background: #4e7771;" data-translate="close">Close</button>
                </div>
            </div>
        </div>
        
        <!-- Popup for Password Change -->
        <div class="pop-overlay" id="password-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="change_password">Change Password</div>
                <div class="pop-body">
                    <form id="password-change-form">
                        <div class="form-group">
                            <label class="text-gray" data-translate="current_password">Current Password</label>
                            <input type="password" id="current-password" class="input-line" placeholder="${t('enter_current_password')}" required>
                        </div>
                        <div class="form-group">
                            <label class="text-gray" data-translate="new_password">New Password</label>
                            <input type="password" id="new-password" class="input-line" placeholder="${t('enter_new_password')}" required>
                        </div>
                        <div class="form-group">
                            <label class="text-gray" data-translate="confirm_new_password">Confirm New Password</label>
                            <input type="password" id="confirm-new-password" class="input-line" placeholder="${t('confirm_new_password_placeholder')}" required>
                        </div>
                    </form>
                </div>
                <div class="pop-footer">
                    <button type="button" id="save-password-btn" style="background: #4e7771;" data-translate="update">Update</button>
                    <button type="button" id="cancel-password-btn" style="background: #666;" data-translate="cancel">Cancel</button>
                </div>
            </div>
        </div>
        
        <!-- Popup for Language Selection -->
        <div class="pop-overlay" id="language-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="select_language">Select Language</div>
                <div class="pop-body" style="max-height: 400px; overflow-y: auto; padding: 0;">
                    <div style="padding: 15px; border-bottom: 1px solid #eee;">
                        <div style="font-size: 12px; color: #666; margin-bottom: 5px;" data-translate="current_language">Current Language</div>
                        <div id="current-language-text" style="font-weight: bold; color: #4e7771; font-size: 16px;">${availableLanguages[getCurrentLanguage()] || 'English'}</div>
                    </div>
                    
                    <div id="language-list" style="padding: 10px 0;">
                        ${Object.entries(availableLanguages).map(([code, name]) => {
                            const flag = getFlagEmoji(code);
                            const isCurrent = code === getCurrentLanguage();
                            return `
                                <div class="language-option ${isCurrent ? 'active' : ''}" data-lang="${code}" 
                                     style="display: flex; align-items: center; padding: 12px 15px; cursor: pointer; transition: all 0.3s ease; 
                                            background: ${isCurrent ? '#e6f7ff' : 'transparent'}; border-left: ${isCurrent ? '3px solid #4e7771' : '3px solid transparent'};">
                                    <div style="font-size: 24px; margin-right: 15px; width: 30px; text-align: center;">${flag}</div>
                                    <div style="flex: 1; font-weight: ${isCurrent ? 'bold' : 'normal'}; color: ${isCurrent ? '#4e7771' : '#333'};">${name}</div>
                                    ${isCurrent ? '<i class="fas fa-check" style="color: #52c41a;"></i>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                <div class="pop-footer">
                    <button type="button" id="confirm-language-btn" style="background: #4e7771;" data-translate="confirm">Confirm</button>
                    <button type="button" id="cancel-language-btn" style="background: #666;" data-translate="cancel">Cancel</button>
                </div>
            </div>
        </div>
    `;
}

// Helper function to get flag emoji
function getFlagEmoji(langCode) {
    const flags = {
        'en': '🇺🇸',
        'fr': '🇫🇷',
        'de': '🇩🇪',
        'ar': '🇸🇦',
        'pl': '🇵🇱',
        'ru': '🇷🇺',
        'pt': '🇵🇹',
        'tr': '🇹🇷',
        'ro': '🇷🇴',
        'uz': '🇺🇿',
        'es': '🇪🇸',
        'it': '🇮🇹',
        'id': '🇮🇩'
    };
    return flags[langCode] || '🌐';
}

export function init() {
    document.body.classList.remove('auth-page');
    
    // Initialize calendar
    initCalendar();
    
    // Update UTC time
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
    
    // Check existing withdrawal address
    checkWithdrawalAddress();
    
    // Event listeners
    setupEventListeners();
}

function initCalendar() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    // Set current month
    document.getElementById('current-month').textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    
    // Generate calendar
    generateCalendar(now.getFullYear(), now.getMonth());
    
    // Navigation buttons
    document.getElementById('prev-month').addEventListener('click', function() {
        const currentText = document.getElementById('current-month').textContent;
        const [month, year] = currentText.split(' ');
        const monthIndex = monthNames.indexOf(month);
        const prevDate = new Date(year, monthIndex - 1, 1);
        
        document.getElementById('current-month').textContent = 
            `${monthNames[prevDate.getMonth()]} ${prevDate.getFullYear()}`;
        generateCalendar(prevDate.getFullYear(), prevDate.getMonth());
    });
    
    document.getElementById('next-month').addEventListener('click', function() {
        const currentText = document.getElementById('current-month').textContent;
        const [month, year] = currentText.split(' ');
        const monthIndex = monthNames.indexOf(month);
        const nextDate = new Date(year, monthIndex + 1, 1);
        
        document.getElementById('current-month').textContent = 
            `${monthNames[nextDate.getMonth()]} ${nextDate.getFullYear()}`;
        generateCalendar(nextDate.getFullYear(), nextDate.getMonth());
    });
}

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const daysGrid = document.getElementById('calendar-days');
    daysGrid.innerHTML = '';
    
    // Day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = t(day.toLowerCase(), getCurrentLanguage()) || day;
        daysGrid.appendChild(dayElement);
    });
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = 0; i < startingDay; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-date other-month';
        dayElement.textContent = prevMonthLastDay - startingDay + i + 1;
        daysGrid.appendChild(dayElement);
    }
    
    // Current month days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-date';
        dayElement.textContent = day;
        
        // Check if today
        if (today.getFullYear() === year && 
            today.getMonth() === month && 
            today.getDate() === day) {
            dayElement.classList.add('today');
        }
        
        daysGrid.appendChild(dayElement);
    }
    
    // Next month days
    const totalCells = 42; // 6 rows * 7 days
    const remainingCells = totalCells - (startingDay + daysInMonth);
    for (let i = 1; i <= remainingCells; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-date other-month';
        dayElement.textContent = i;
        daysGrid.appendChild(dayElement);
    }
}

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    document.getElementById('utc-time').innerHTML = `
        <i class="fas fa-clock" style="margin-right: 8px;"></i>
        UTC: ${utcTime}
    `;
}

async function checkWithdrawalAddress() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    try {
        const { data: addressData } = await supabase
            .from('withdrawal_addresses')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();
            
        if (addressData) {
            document.getElementById('address-status').textContent = t('configured');
            document.getElementById('address-status').style.color = '#52c41a';
        }
    } catch (error) {
        console.error('Error checking withdrawal address:', error);
    }
}

function setupEventListeners() {
    // Copy ID button
    document.getElementById('copy-id-btn').addEventListener('click', function() {
        const userId = window.getCurrentUser()?.id;
        if (userId) {
            window.GLY.copyToClipboard(userId);
            const originalText = this.textContent;
            this.textContent = t('copied');
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }
    });
    
    // Settings items
    document.querySelectorAll('.setting-item').forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleSettingAction(action);
        });
    });
    
    // Logout button
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm(t('logout_message'))) {
            window.logout();
        }
    });
}

function handleSettingAction(action) {
    switch(action) {
        case 'withdrawal-address':
            showAddressPopup();
            break;
        case 'transaction-password':
            showTransactionPasswordPopup();
            break;
        case 'customer-service':
            showCustomerServicePopup();
            break;
        case 'language':
            showLanguagePopup();
            break;
        case 'change-password':
            showChangePasswordPopup();
            break;
    }
}

function showAddressPopup() {
    const popup = document.getElementById('address-popup');
    popup.style.display = 'flex';
    
    // Network selection
    const networkOptions = popup.querySelectorAll('.network-option');
    networkOptions.forEach(option => {
        option.addEventListener('click', function() {
            networkOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set default network
    networkOptions[0].classList.add('active');
    
    // Save button
    document.getElementById('save-address-btn').onclick = async function() {
        const network = popup.querySelector('.network-option.active').getAttribute('data-network');
        const address = document.getElementById('wallet-address').value.trim();
        const user = window.getCurrentUser();
        
        if (!address) {
            window.showCustomAlert(t('enter_wallet_address'));
            return;
        }
        
        if (!user) return;
        
        // Show loading
        const originalText = this.textContent;
        this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('saving')}`;
        this.disabled = true;
        
        try {
            // Check if address already exists
            const { data: existingAddress } = await supabase
                .from('withdrawal_addresses')
                .select('id')
                .eq('user_id', user.id)
                .maybeSingle();
                
            if (existingAddress) {
                // Update existing address
                const { error } = await supabase
                    .from('withdrawal_addresses')
                    .update({
                        network: network,
                        address: address,
                        updated_at: new Date().toISOString()
                    })
                    .eq('user_id', user.id);
                    
                if (error) throw error;
            } else {
                // Create new address
                const { error } = await supabase
                    .from('withdrawal_addresses')
                    .insert([{
                        user_id: user.id,
                        network: network,
                        address: address,
                        created_at: new Date().toISOString()
                    }]);
                    
                if (error) throw error;
            }
            
            // Update UI
            document.getElementById('address-status').textContent = t('configured');
            document.getElementById('address-status').style.color = '#52c41a';
            
            // Show success message
            window.showCustomAlert(t('address_saved'));
            
            // Close popup
            popup.style.display = 'none';
            document.getElementById('wallet-address').value = '';
            
        } catch (error) {
            console.error('Error saving address:', error);
            window.showCustomAlert(t('server_error'));
        } finally {
            // Restore button
            this.textContent = originalText;
            this.disabled = false;
        }
    };
    
    // Cancel button
    document.getElementById('cancel-address-btn').onclick = function() {
        popup.style.display = 'none';
        document.getElementById('wallet-address').value = '';
    };
}

function showTransactionPasswordPopup() {
    window.showCustomModal(
        t('transaction_password'),
        `<p>${t('transaction_password')} ${t('configured')}</p>`
    );
}

function showCustomerServicePopup() {
    const popup = document.getElementById('support-popup');
    popup.style.display = 'flex';
    
    // Copy buttons
    popup.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.getAttribute('data-copy');
            window.GLY.copyToClipboard(text);
            
            const originalText = this.textContent;
            this.textContent = t('copied');
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
    
    // Close button
    document.getElementById('close-support-btn').onclick = function() {
        popup.style.display = 'none';
    };
}

function showChangePasswordPopup() {
    const popup = document.getElementById('password-popup');
    popup.style.display = 'flex';
    
    // Save button
    document.getElementById('save-password-btn').onclick = async function() {
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-new-password').value;
        const user = window.getCurrentUser();
        
        if (!currentPassword || !newPassword || !confirmPassword) {
            window.showCustomAlert(t('validation_required'));
            return;
        }
        
        if (newPassword !== confirmPassword) {
            window.showCustomAlert(t('validation_password_match'));
            return;
        }
        
        if (newPassword.length < 6) {
            window.showCustomAlert(t('validation_password_length'));
            return;
        }
        
        // Check current password
        if (user.password !== currentPassword) {
            window.showCustomAlert(t('current_password_incorrect'));
            return;
        }
        
        // Show loading
        const originalText = this.textContent;
        this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('updating')}`;
        this.disabled = true;
        
        try {
            // Update password
            const { error } = await supabase
                .from('users')
                .update({ password: newPassword })
                .eq('id', user.id);
                
            if (error) throw error;
            
            // Update local user
            user.password = newPassword;
            localStorage.setItem('gly_user', JSON.stringify(user));
            
            // Show success message
            window.showCustomAlert(t('password_changed'));
            
            // Close popup
            popup.style.display = 'none';
            document.getElementById('current-password').value = '';
            document.getElementById('new-password').value = '';
            document.getElementById('confirm-new-password').value = '';
            
        } catch (error) {
            console.error('Error changing password:', error);
            window.showCustomAlert(t('server_error'));
        } finally {
            // Restore button
            this.textContent = originalText;
            this.disabled = false;
        }
    };
    
    // Cancel button
    document.getElementById('cancel-password-btn').onclick = function() {
        popup.style.display = 'none';
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-new-password').value = '';
    };
}

function showLanguagePopup() {
    const popup = document.getElementById('language-popup');
    popup.style.display = 'flex';
    
    const currentLang = getCurrentLanguage();
    
    // Update current language text
    document.getElementById('current-language-text').textContent = availableLanguages[currentLang] || 'English';
    
    // Language selection
    const languageOptions = popup.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            languageOptions.forEach(opt => {
                opt.classList.remove('active');
                opt.style.background = 'transparent';
                opt.style.borderLeft = '3px solid transparent';
                opt.style.fontWeight = 'normal';
                opt.style.color = '#333';
            });
            
            // Add active class to selected option
            this.classList.add('active');
            this.style.background = '#e6f7ff';
            this.style.borderLeft = '3px solid #4e7771';
            this.style.fontWeight = 'bold';
            this.style.color = '#4e7771';
            
            // Update current language text
            const lang = this.getAttribute('data-lang');
            document.getElementById('current-language-text').textContent = availableLanguages[lang] || 'English';
            
            // Store selected language
            popup.dataset.selectedLang = lang;
        });
    });
    
    // Confirm button
    document.getElementById('confirm-language-btn').onclick = function() {
        const selectedLang = popup.dataset.selectedLang || currentLang;
        
        // Save language
        setLanguage(selectedLang);
        
        // Update page language
        updatePageLanguage(selectedLang);
        
        // Update display in settings
        document.getElementById('current-language-display').textContent = availableLanguages[selectedLang] || 'English';
        
        // Show success message
        window.showCustomAlert(t('language_changed', selectedLang, { language: availableLanguages[selectedLang] || 'English' }));
        
        // Close popup
        popup.style.display = 'none';
    };
    
    // Cancel button
    document.getElementById('cancel-language-btn').onclick = function() {
        popup.style.display = 'none';
    };
}
