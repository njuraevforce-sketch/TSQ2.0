// Mine section - UPDATED with network selection
import { t, updatePageLanguage } from './translate.js';

export default function renderMine() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Profile with background image -->
        <div class="card padding profile-bg" style="background-image: url('assets/avatar.png'); background-size: cover; background-position: center; border-radius: 10px; padding: 20px; margin-bottom: 20px; position: relative;">
            <!-- Dark overlay for better text readability -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); border-radius: 10px; z-index: 1;"></div>
            
            <div style="position: relative; z-index: 2; display: flex; align-items: center; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <!-- VIP Badge -->
                    <div class="profile-vip-badge" id="user-vip-level" style="background: rgba(78, 119, 113, 0.8); display: inline-block; margin-bottom: 10px;">VIP 1</div>
                    
                    <!-- ID with Copy button inline -->
                    <div class="profile-id-copy" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                        <span class="profile-id" id="user-id" style="color: white; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8); font-size: 14px;">${t('id')} Loading...</span>
                        <button class="copy-id-btn" id="copy-user-id" style="background: rgba(255, 255, 255, 0.2); border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer;" title="${t('copy_id')}">
                            <i class="fas fa-copy" style="color: white; font-size: 12px;"></i>
                        </button>
                    </div>
                    
                    <div style="color: white; font-size: 18px; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">
                        <span data-translate="balance">Balance:</span> <span id="user-balance" style="color: #f9ae3d;">0.00</span> USDT
                    </div>
                </div>
            </div>
        </div>

        <!-- Calendar Block -->
        <div class="card padding margin-top calendar-section">
            <div class="calendar-header">
                <div class="calendar-title" data-translate="utc_calendar">UTC Calendar</div>
                <div class="calendar-nav">
                    <button id="prev-month"><i class="fas fa-chevron-left"></i></button>
                    <button id="next-month"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="calendar-grid" id="calendar-days">
                <!-- Days of week -->
                <div class="calendar-day">Sun</div>
                <div class="calendar-day">Mon</div>
                <div class="calendar-day">Tue</div>
                <div class="calendar-day">Wed</div>
                <div class="calendar-day">Thu</div>
                <div class="calendar-day">Fri</div>
                <div class="calendar-day">Sat</div>
                <!-- Dates will be populated by JavaScript -->
            </div>
            <div class="calendar-time" id="utc-time-display" data-translate="loading_utc">
                Loading UTC time...
            </div>
        </div>

        <!-- Settings -->
        <div class="card padding margin-top">
            <div class="text-white text-bold" data-translate="settings">Settings</div>
            <div class="settings-list">
                <div class="setting-item" id="withdrawal-address-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-address.png" alt="${t('withdrawal_address')}">
                    </div>
                    <div class="setting-name" data-translate="withdrawal_address">Withdrawal Address</div>
                    <div class="setting-value" id="withdrawal-address-value" data-translate="configure">Configure</div>
                </div>
                <div class="setting-item" id="transaction-password-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-password.png" alt="${t('transaction_password')}">
                    </div>
                    <div class="setting-name" data-translate="transaction_password">Transaction Password</div>
                    <div class="setting-value" data-translate="change">Change</div>
                </div>
                <div class="setting-item" id="customer-service-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-service.png" alt="${t('customer_service')}">
                    </div>
                    <div class="setting-name" data-translate="customer_service">Customer Service</div>
                    <div class="setting-value" data-translate="contact">Contact</div>
                </div>
                <div class="setting-item" id="language-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-language.png" alt="${t('language')}">
                    </div>
                    <div class="setting-name" data-translate="language">Language</div>
                    <div class="setting-value" id="current-language-value">${t('language_english')}</div>
                </div>
                <div class="setting-item" id="change-password-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-change-password.png" alt="${t('change_password')}">
                    </div>
                    <div class="setting-name" data-translate="change_password">Change Password</div>
                    <div class="setting-value" data-translate="update">Update</div>
                </div>
                <div class="pro-btn" id="logout-btn" style="background: transparent; border: 2px solid #ff6b6b; margin-top: 10px; color: #ff6b6b; font-weight: bold;" data-translate="logout">Logout</div>
            </div>
        </div>

        <!-- Popup for withdrawal address with network selection -->
        <div class="pop-overlay" id="address-popup" style="display: none;">
            <div class="pop-content">
                <form id="address-form" onsubmit="return false;">
                    <div class="pop-header" data-translate="set_withdrawal_address">Set Withdrawal Address</div>
                    <div class="pop-body">
                        <!-- Network Selection -->
                        <div class="network-selection-green margin-bottom">
                            <div class="section-title-small" style="color: #333; margin-bottom: 10px; font-size: 14px;" data-translate="select_network">Select Network</div>
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
                        
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;" data-translate="usdt_wallet_address">USDT Wallet Address</label>
                            <input type="text" id="withdrawal-address-input" data-translate="enter_wallet_address" placeholder="Enter your wallet address" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <p style="font-size: 12px; color: #666;">
                            This address will be used for all future withdrawals on the selected network. Please double-check the address.
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-address" style="margin-right: 10px; background: #4e7771;" data-translate="save">Save</button>
                        <button type="button" id="close-address" style="background: #666;" data-translate="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for password change -->
        <div class="pop-overlay" id="password-popup" style="display: none;">
            <div class="pop-content">
                <form id="password-change-form" onsubmit="return false;">
                    <div class="pop-header" data-translate="change_password">Change Password</div>
                    <div class="pop-body">
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;" data-translate="current_password">Current Password</label>
                            <input type="password" id="current-password" data-translate="enter_current_password" placeholder="Enter current password" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;" data-translate="new_password">New Password</label>
                            <input type="password" id="new-password" data-translate="enter_new_password" placeholder="Enter new password" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;" data-translate="confirm_new_password">Confirm New Password</label>
                            <input type="password" id="confirm-password" data-translate="confirm_new_password_placeholder" placeholder="Confirm new password" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-password" style="margin-right: 10px; background: #4e7771;" data-translate="save">Save</button>
                        <button type="button" id="close-password" style="background: #666;" data-translate="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for customer service -->
        <div class="pop-overlay" id="support-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header" data-translate="customer_service">Customer Service</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #4e7771;">💬</div>
                    </div>
                    <p style="text-align: center; color: #333; margin-bottom: 15px;" data-translate="contact_24_7">
                        Contact our 24/7 customer support:
                    </p>
                    <div class="referral-section">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4 data-translate="telegram">Telegram</h4>
                                    <p>@GLY_Support</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-telegram">
                                <i class="fas fa-copy"></i> <span data-translate="copy">COPY</span>
                            </button>
                        </div>
                    </div>
                    <div class="referral-section margin-top-sm">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4 data-translate="email">Email</h4>
                                    <p>support@gly.io</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-email">
                                <i class="fas fa-copy"></i> <span data-translate="copy">COPY</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-support" style="background: #4e7771;" data-translate="close">Close</button>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Use delay to ensure DOM is fully loaded
    setTimeout(() => {
        // Load profile data
        loadProfileData();
        
        // Initialize calendar
        initCalendar();
        
        // Setup event listeners
        setupEventListeners();
    }, 100);
}

function setupEventListeners() {
    try {
        // Settings handlers
        document.getElementById('withdrawal-address-setting').addEventListener('click', showAddressPopup);
        document.getElementById('transaction-password-setting').addEventListener('click', showPasswordPopup);
        document.getElementById('customer-service-setting').addEventListener('click', showSupportPopup);
        document.getElementById('language-setting').addEventListener('click', () => window.showLanguageModal());
        document.getElementById('change-password-setting').addEventListener('click', showPasswordPopup);
        document.getElementById('logout-btn').addEventListener('click', logout);
        document.getElementById('copy-user-id').addEventListener('click', copyUserId);

        // Calendar navigation
        document.getElementById('prev-month').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentYear, currentMonth);
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentYear, currentMonth);
        });

        // Popup handlers
        document.getElementById('close-address').addEventListener('click', hideAddressPopup);
        document.getElementById('save-address').addEventListener('click', (e) => {
            e.preventDefault();
            saveWithdrawalAddress();
        });
        document.getElementById('close-password').addEventListener('click', hidePasswordPopup);
        document.getElementById('save-password').addEventListener('click', (e) => {
            e.preventDefault();
            changePassword();
        });
        document.getElementById('close-support').addEventListener('click', hideSupportPopup);
        
        // Copy support contacts
        document.getElementById('copy-telegram').addEventListener('click', copyTelegram);
        document.getElementById('copy-email').addEventListener('click', copyEmail);
        
        // Network selection in address popup - using green classes
        document.querySelectorAll('#address-popup .network-option-green').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('#address-popup .network-option-green').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
    } catch (error) {
        console.error('Error setting up event listeners in mine:', error);
        // Retry after 500ms
        setTimeout(setupEventListeners, 500);
    }
}

// Calendar variables
let currentDate = new Date();
let currentYear = currentDate.getUTCFullYear();
let currentMonth = currentDate.getUTCMonth();

function initCalendar() {
    // Render initial calendar
    renderCalendar(currentYear, currentMonth);
    
    // Start UTC time update
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
}

function renderCalendar(year, month) {
    const calendarGrid = document.getElementById('calendar-days');
    
    // Clear existing dates (keep day headers)
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }
    
    // Get first day of month
    const firstDay = new Date(Date.UTC(year, month, 1));
    const firstDayIndex = firstDay.getUTCDay();
    
    // Get last day of month
    const lastDay = new Date(Date.UTC(year, month + 1, 0));
    const daysInMonth = lastDay.getUTCDate();
    
    // Get today's date in UTC
    const today = new Date();
    const todayUTC = new Date(Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    ));
    
    // Add empty cells for days before first day
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date other-month';
        emptyCell.textContent = '';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-date';
        dateCell.textContent = day;
        
        // Check if this is today
        const cellDate = new Date(Date.UTC(year, month, day));
        if (cellDate.getTime() === todayUTC.getTime()) {
            dateCell.classList.add('today');
        }
        
        calendarGrid.appendChild(dateCell);
    }
    
    // Update calendar title
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    document.querySelector('.calendar-title').textContent = 
        `${monthNames[month]} ${year}`;
}

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const utcElement = document.getElementById('utc-time-display');
    if (utcElement) {
        utcElement.textContent = utcTime;
    }
}

async function loadProfileData() {
    try {
        const user = window.getCurrentUser();
        if (!user) {
            window.showSection('login');
            return;
        }
        
        // Update page data
        document.getElementById('user-vip-level').textContent = `VIP ${user.vip_level}`;
        document.getElementById('user-id').textContent = `${t('id')} ${user.id}`;
        document.getElementById('user-balance').textContent = user.balance.toFixed(2);
        
        // Update withdrawal address display
        const settingValue = document.getElementById('withdrawal-address-value');
        if (settingValue) {
            if (user.withdrawal_address_trc20 || user.withdrawal_address_bep20) {
                settingValue.textContent = t('configured');
            } else {
                settingValue.textContent = t('set_address');
            }
        }
        
        // Update language display
        const currentLang = localStorage.getItem('gly_language') || 'en';
        const languageValue = document.getElementById('current-language-value');
        if (languageValue) {
            languageValue.textContent = t(`language_${currentLang}`, currentLang);
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

function showAddressPopup() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    // Clear input field
    document.getElementById('withdrawal-address-input').value = '';
    
    // Set default network to TRC20 if user has address, otherwise first option
    const trc20Option = document.querySelector('#address-popup .network-option-green[data-network="TRC20"]');
    const bep20Option = document.querySelector('#address-popup .network-option-green[data-network="BEP20"]');
    
    if (user.withdrawal_address_trc20) {
        trc20Option.classList.add('active');
        bep20Option.classList.remove('active');
        document.getElementById('withdrawal-address-input').value = user.withdrawal_address_trc20;
    } else if (user.withdrawal_address_bep20) {
        bep20Option.classList.add('active');
        trc20Option.classList.remove('active');
        document.getElementById('withdrawal-address-input').value = user.withdrawal_address_bep20;
    } else {
        // Default to TRC20
        trc20Option.classList.add('active');
        bep20Option.classList.remove('active');
    }
    
    document.getElementById('address-popup').style.display = 'flex';
}

function hideAddressPopup() {
    document.getElementById('address-popup').style.display = 'none';
    document.getElementById('withdrawal-address-input').value = '';
}

function showPasswordPopup() {
    document.getElementById('password-popup').style.display = 'flex';
}

function hidePasswordPopup() {
    document.getElementById('password-popup').style.display = 'none';
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
}

function showSupportPopup() {
    document.getElementById('support-popup').style.display = 'flex';
}

function hideSupportPopup() {
    document.getElementById('support-popup').style.display = 'none';
}

async function saveWithdrawalAddress() {
    const address = document.getElementById('withdrawal-address-input').value.trim();
    const selectedNetwork = document.querySelector('#address-popup .network-option-green.active').getAttribute('data-network');
    const user = window.getCurrentUser();
    
    if (!address) {
        window.showCustomAlert(t('validation_required'));
        return;
    }
    
    if (!user) {
        window.showCustomAlert(t('user_not_found'));
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
        hideAddressPopup();
        
        // Update display
        document.getElementById('withdrawal-address-value').textContent = t('configured');
        
        // Reload profile to update data
        loadProfileData();
        
    } catch (error) {
        window.showCustomAlert(`${t('error')}: ${error.message}`);
    }
}

async function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const user = window.getCurrentUser();
    
    if (!user) {
        window.showCustomAlert(t('user_not_found'));
        return;
    }
    
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
    
    try {
        // Update password in database
        const { error } = await window.supabase
            .from('users')
            .update({ password: newPassword })
            .eq('id', user.id);
            
        if (error) throw error;
        
        // Update user in localStorage
        user.password = newPassword;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        window.showCustomAlert(t('password_changed'));
        hidePasswordPopup();
    } catch (error) {
        window.showCustomAlert(`${t('error')}: ${error.message}`);
    }
}

function copyUserId() {
    const userId = document.getElementById('user-id').textContent.replace(`${t('id')} `, '');
    window.GLY.copyToClipboard(userId).then(() => {
        const copyBtn = document.getElementById('copy-user-id');
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = originalHtml;
        }, 2000);
    });
}

function copyTelegram() {
    window.GLY.copyToClipboard('@GLYSupport').then(() => {
        const copyBtn = document.getElementById('copy-telegram');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fas fa-check"></i> ${t('copied')}`;
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function copyEmail() {
    window.GLY.copyToClipboard('support@gly.io').then(() => {
        const copyBtn = document.getElementById('copy-email');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fas fa-check"></i> ${t('copied')}`;
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function logout() {
    window.showCustomModal(t('confirm_logout'), t('logout_message'), () => {
        window.logout();
    });
}
