// Mine section - UPDATED with network selection and language support
export default function renderMine() {
    const t = window.GLYTranslate?.t || ((key) => key);
    
    return `
        <!-- Profile with background image -->
        <div class="card padding profile-bg" style="background-image: url('assets/avatar.png'); background-size: cover; background-position: center; border-radius: 10px; padding: 20px; margin-bottom: 20px; position: relative;">
            <!-- Dark overlay for better text readability -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); border-radius: 10px; z-index: 1;"></div>
            
            <div style="position: relative; z-index: 2; display: flex; align-items: center; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <!-- VIP Badge -->
                    <div class="profile-vip-badge" id="user-vip-level" style="background: rgba(78, 119, 113, 0.8); display: inline-block; margin-bottom: 10px;">${t('vip')} 1</div>
                    
                    <!-- ID with Copy button inline -->
                    <div class="profile-id-copy" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                        <span class="profile-id" id="user-id" style="color: white; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8); font-size: 14px;">${t('id')}: Loading...</span>
                        <button class="copy-id-btn" id="copy-user-id" style="background: rgba(255, 255, 255, 0.2); border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer;">
                            <i class="fas fa-copy" style="color: white; font-size: 12px;"></i>
                        </button>
                    </div>
                    
                    <div style="color: white; font-size: 18px; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">
                        ${t('balance')}: <span id="user-balance" style="color: #f9ae3d;">0.00</span> USDT
                    </div>
                </div>
            </div>
        </div>

        <!-- Calendar Block -->
        <div class="card padding margin-top calendar-section">
            <div class="calendar-header">
                <div class="calendar-title">${t('utc_calendar')}</div>
                <div class="calendar-nav">
                    <button id="prev-month"><i class="fas fa-chevron-left"></i></button>
                    <button id="next-month"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="calendar-grid" id="calendar-days">
                <!-- Days of week -->
                <div class="calendar-day">${t('sun')}</div>
                <div class="calendar-day">${t('mon')}</div>
                <div class="calendar-day">${t('tue')}</div>
                <div class="calendar-day">${t('wed')}</div>
                <div class="calendar-day">${t('thu')}</div>
                <div class="calendar-day">${t('fri')}</div>
                <div class="calendar-day">${t('sat')}</div>
                <!-- Dates will be populated by JavaScript -->
            </div>
            <div class="calendar-time" id="utc-time-display">
                ${t('loading')} UTC time...
            </div>
        </div>

        <!-- Settings -->
        <div class="card padding margin-top">
            <div class="text-white text-bold">${t('settings')}</div>
            <div class="settings-list">
                <div class="setting-item" id="withdrawal-address-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-address.png" alt="${t('withdrawal_address')}">
                    </div>
                    <div class="setting-name">${t('withdrawal_address')}</div>
                    <div class="setting-value" id="withdrawal-address-value">${t('configure')}</div>
                </div>
                <div class="setting-item" id="transaction-password-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-password.png" alt="${t('transaction_password')}">
                    </div>
                    <div class="setting-name">${t('transaction_password')}</div>
                    <div class="setting-value">${t('change')}</div>
                </div>
                <div class="setting-item" id="customer-service-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-service.png" alt="${t('customer_service')}">
                    </div>
                    <div class="setting-name">${t('customer_service')}</div>
                    <div class="setting-value">${t('contact')}</div>
                </div>
                <div class="setting-item" id="language-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-language.png" alt="${t('language')}">
                    </div>
                    <div class="setting-name">${t('language')}</div>
                    <div class="setting-value" id="current-language-display">${t('english')}</div>
                </div>
                <div class="setting-item" id="change-password-setting">
                    <div class="setting-icon">
                        <img src="assets/setting-change-password.png" alt="${t('change_password')}">
                    </div>
                    <div class="setting-name">${t('change_password')}</div>
                    <div class="setting-value">${t('update')}</div>
                </div>
                <div class="pro-btn" id="logout-btn" style="background: transparent; border: 2px solid #ff6b6b; margin-top: 10px; color: #ff6b6b; font-weight: bold;">
                    ${t('logout')}
                </div>
            </div>
        </div>

        <!-- Popup for withdrawal address with network selection -->
        <div class="pop-overlay" id="address-popup" style="display: none;">
            <div class="pop-content">
                <form id="address-form" onsubmit="return false;">
                    <div class="pop-header">${t('set_withdrawal_address')}</div>
                    <div class="pop-body">
                        <!-- Network Selection -->
                        <div class="network-selection-green margin-bottom">
                            <div class="section-title-small" style="color: #333; margin-bottom: 10px; font-size: 14px;">${t('select_network')}</div>
                            <div class="network-options-green">
                                <div class="network-option-green active" data-network="TRC20">
                                    <div class="network-icon-green">
                                        <img src="assets/trc20.png" alt="TRC20">
                                    </div>
                                    <div class="network-name-green">${t('trc20')}</div>
                                    <div class="network-check-green"><i class="fas fa-check"></i></div>
                                </div>
                                <div class="network-option-green" data-network="BEP20">
                                    <div class="network-icon-green">
                                        <img src="assets/bsc20.png" alt="BEP20">
                                    </div>
                                    <div class="network-name-green">${t('bep20')}</div>
                                    <div class="network-check-green"><i class="fas fa-check"></i></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">${t('usdt_wallet_address')}</label>
                            <input type="text" id="withdrawal-address-input" placeholder="${t('enter_wallet_address')}" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <p style="font-size: 12px; color: #666;">
                            ${t('address_save_note')}
                        </p>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-address" style="margin-right: 10px; background: #4e7771;">${t('save')}</button>
                        <button type="button" id="close-address" style="background: #666;">${t('cancel')}</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for password change -->
        <div class="pop-overlay" id="password-popup" style="display: none;">
            <div class="pop-content">
                <form id="password-change-form" onsubmit="return false;">
                    <div class="pop-header">${t('change_password_title')}</div>
                    <div class="pop-body">
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">${t('current_password')}</label>
                            <input type="password" id="current-password" placeholder="${t('enter_current_password')}" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">${t('new_password')}</label>
                            <input type="password" id="new-password" placeholder="${t('enter_new_password')}" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                        <div class="margin-bottom">
                            <label style="color: #333; font-size: 14px;">${t('confirm_new_password')}</label>
                            <input type="password" id="confirm-password" placeholder="${t('confirm_new_password_placeholder')}" 
                                   style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-password" style="margin-right: 10px; background: #4e7771;">${t('save')}</button>
                        <button type="button" id="close-password" style="background: #666;">${t('cancel')}</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for customer service -->
        <div class="pop-overlay" id="support-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">${t('customer_service_title')}</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #4e7771;">💬</div>
                    </div>
                    <p style="text-align: center; color: #333; margin-bottom: 15px;">
                        ${t('contact_support')}
                    </p>
                    <div class="referral-section">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4>${t('telegram')}</h4>
                                    <p>@GLYSupport</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-telegram">
                                <i class="fas fa-copy"></i> ${t('copy')}
                            </button>
                        </div>
                    </div>
                    <div class="referral-section margin-top-sm">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4>${t('email')}</h4>
                                    <p>support@gly.io</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-email">
                                <i class="fas fa-copy"></i> ${t('copy')}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-support" style="background: #4e7771;">${t('close')}</button>
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
        
        // Initialize language display
        updateLanguageDisplay();
        
        // Listen for language changes
        window.addEventListener('languageChanged', updateMinePageTexts);
    }, 100);
}

function setupEventListeners() {
    try {
        // Settings handlers
        document.getElementById('withdrawal-address-setting').addEventListener('click', showAddressPopup);
        document.getElementById('transaction-password-setting').addEventListener('click', showPasswordPopup);
        document.getElementById('customer-service-setting').addEventListener('click', showSupportPopup);
        document.getElementById('language-setting').addEventListener('click', () => window.showLanguageSelector());
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
        
        // Network selection in address popup
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
    if (!calendarGrid) return;
    
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
    
    // Update calendar title with translated month name
    const monthNames = [
        window.GLYTranslate?.t('january') || 'January',
        window.GLYTranslate?.t('february') || 'February',
        window.GLYTranslate?.t('march') || 'March',
        window.GLYTranslate?.t('april') || 'April',
        window.GLYTranslate?.t('may') || 'May',
        window.GLYTranslate?.t('june') || 'June',
        window.GLYTranslate?.t('july') || 'July',
        window.GLYTranslate?.t('august') || 'August',
        window.GLYTranslate?.t('september') || 'September',
        window.GLYTranslate?.t('october') || 'October',
        window.GLYTranslate?.t('november') || 'November',
        window.GLYTranslate?.t('december') || 'December'
    ];
    const calendarTitle = document.querySelector('.calendar-title');
    if (calendarTitle) {
        calendarTitle.textContent = `${monthNames[month]} ${year}`;
    }
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
        
        const t = window.GLYTranslate?.t || ((key) => key);
        
        // Update page data
        const vipElement = document.getElementById('user-vip-level');
        if (vipElement) {
            vipElement.textContent = `${t('vip')} ${user.vip_level}`;
        }
        
        const idElement = document.getElementById('user-id');
        if (idElement) {
            idElement.textContent = `${t('id')}: ${user.id}`;
        }
        
        const balanceElement = document.getElementById('user-balance');
        if (balanceElement) {
            balanceElement.textContent = user.balance.toFixed(2);
        }
        
        // Update withdrawal address display
        const settingValue = document.getElementById('withdrawal-address-value');
        if (settingValue) {
            if (user.withdrawal_address_trc20 || user.withdrawal_address_bep20) {
                settingValue.textContent = t('configured');
            } else {
                settingValue.textContent = t('configure');
            }
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

function updateMinePageTexts() {
    const t = window.GLYTranslate?.t;
    if (!t) return;
    
    // Update calendar days
    const calendarDays = document.querySelectorAll('.calendar-day');
    if (calendarDays.length >= 7) {
        calendarDays[0].textContent = t('sun');
        calendarDays[1].textContent = t('mon');
        calendarDays[2].textContent = t('tue');
        calendarDays[3].textContent = t('wed');
        calendarDays[4].textContent = t('thu');
        calendarDays[5].textContent = t('fri');
        calendarDays[6].textContent = t('sat');
    }
    
    // Update calendar title
    const calendarTitle = document.querySelector('.calendar-title');
    if (calendarTitle) {
        const monthNames = [
            t('january'), t('february'), t('march'), t('april'),
            t('may'), t('june'), t('july'), t('august'),
            t('september'), t('october'), t('november'), t('december')
        ];
        calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }
    
    // Update settings titles
    const settingsTitle = document.querySelector('.text-white.text-bold');
    if (settingsTitle) settingsTitle.textContent = t('settings');
    
    const withdrawalAddressSetting = document.querySelector('#withdrawal-address-setting .setting-name');
    if (withdrawalAddressSetting) withdrawalAddressSetting.textContent = t('withdrawal_address');
    
    const transactionPasswordSetting = document.querySelector('#transaction-password-setting .setting-name');
    if (transactionPasswordSetting) transactionPasswordSetting.textContent = t('transaction_password');
    
    const customerServiceSetting = document.querySelector('#customer-service-setting .setting-name');
    if (customerServiceSetting) customerServiceSetting.textContent = t('customer_service');
    
    const languageSetting = document.querySelector('#language-setting .setting-name');
    if (languageSetting) languageSetting.textContent = t('language');
    
    const changePasswordSetting = document.querySelector('#change-password-setting .setting-name');
    if (changePasswordSetting) changePasswordSetting.textContent = t('change_password');
    
    // Update setting values
    const transactionPasswordValue = document.querySelector('#transaction-password-setting .setting-value');
    if (transactionPasswordValue) transactionPasswordValue.textContent = t('change');
    
    const customerServiceValue = document.querySelector('#customer-service-setting .setting-value');
    if (customerServiceValue) customerServiceValue.textContent = t('contact');
    
    const changePasswordValue = document.querySelector('#change-password-setting .setting-value');
    if (changePasswordValue) changePasswordValue.textContent = t('update');
    
    // Update language display
    updateLanguageDisplay();
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.textContent = t('logout');
    
    // Update profile data
    const user = window.getCurrentUser();
    if (user) {
        const vipBadge = document.getElementById('user-vip-level');
        if (vipBadge) vipBadge.textContent = `${t('vip')} ${user.vip_level}`;
        
        const userId = document.getElementById('user-id');
        if (userId) userId.textContent = `${t('id')}: ${user.id}`;
        
        const balanceText = document.querySelector('.profile-bg > div > div > div:last-child');
        if (balanceText) {
            balanceText.innerHTML = `${t('balance')}: <span id="user-balance" style="color: #f9ae3d;">${user.balance.toFixed(2)}</span> USDT`;
        }
    }
    
    // Update popup texts
    const addressPopupTitle = document.querySelector('#address-popup .pop-header');
    if (addressPopupTitle) addressPopupTitle.textContent = t('set_withdrawal_address');
    
    const addressNetworkLabel = document.querySelector('#address-popup .section-title-small');
    if (addressNetworkLabel) addressNetworkLabel.textContent = t('select_network');
    
    const addressInputLabel = document.querySelector('#address-popup label');
    if (addressInputLabel) addressInputLabel.textContent = t('usdt_wallet_address');
    
    const addressInput = document.getElementById('withdrawal-address-input');
    if (addressInput) addressInput.placeholder = t('enter_wallet_address');
    
    const addressNote = document.querySelector('#address-popup p');
    if (addressNote) addressNote.textContent = t('address_save_note');
    
    const addressSaveBtn = document.getElementById('save-address');
    if (addressSaveBtn) addressSaveBtn.textContent = t('save');
    
    const addressCancelBtn = document.getElementById('close-address');
    if (addressCancelBtn) addressCancelBtn.textContent = t('cancel');
    
    // Update password popup
    const passwordPopupTitle = document.querySelector('#password-popup .pop-header');
    if (passwordPopupTitle) passwordPopupTitle.textContent = t('change_password_title');
    
    const currentPasswordLabel = document.querySelector('#password-popup label:nth-child(1)');
    if (currentPasswordLabel) currentPasswordLabel.textContent = t('current_password');
    
    const currentPasswordInput = document.getElementById('current-password');
    if (currentPasswordInput) currentPasswordInput.placeholder = t('enter_current_password');
    
    const newPasswordLabel = document.querySelector('#password-popup label:nth-child(3)');
    if (newPasswordLabel) newPasswordLabel.textContent = t('new_password');
    
    const newPasswordInput = document.getElementById('new-password');
    if (newPasswordInput) newPasswordInput.placeholder = t('enter_new_password');
    
    const confirmPasswordLabel = document.querySelector('#password-popup label:nth-child(5)');
    if (confirmPasswordLabel) confirmPasswordLabel.textContent = t('confirm_new_password');
    
    const confirmPasswordInput = document.getElementById('confirm-password');
    if (confirmPasswordInput) confirmPasswordInput.placeholder = t('confirm_new_password_placeholder');
    
    const passwordSaveBtn = document.getElementById('save-password');
    if (passwordSaveBtn) passwordSaveBtn.textContent = t('save');
    
    const passwordCancelBtn = document.getElementById('close-password');
    if (passwordCancelBtn) passwordCancelBtn.textContent = t('cancel');
    
    // Update support popup
    const supportPopupTitle = document.querySelector('#support-popup .pop-header');
    if (supportPopupTitle) supportPopupTitle.textContent = t('customer_service_title');
    
    const supportText = document.querySelector('#support-popup p');
    if (supportText) supportText.textContent = t('contact_support');
    
    const telegramHeading = document.querySelector('#support-popup .referral-text h4:nth-child(1)');
    if (telegramHeading) telegramHeading.textContent = t('telegram');
    
    const emailHeading = document.querySelector('#support-popup .referral-text h4:nth-child(3)');
    if (emailHeading) emailHeading.textContent = t('email');
    
    const copyTelegramBtn = document.getElementById('copy-telegram');
    if (copyTelegramBtn) copyTelegramBtn.innerHTML = `<i class="fas fa-copy"></i> ${t('copy')}`;
    
    const copyEmailBtn = document.getElementById('copy-email');
    if (copyEmailBtn) copyEmailBtn.innerHTML = `<i class="fas fa-copy"></i> ${t('copy')}`;
    
    const closeSupportBtn = document.getElementById('close-support');
    if (closeSupportBtn) closeSupportBtn.textContent = t('close');
}

function updateLanguageDisplay() {
    const languageValue = document.getElementById('current-language-display');
    if (languageValue && window.GLYTranslate) {
        const langCode = window.GLYTranslate.getCurrentLanguage();
        const langName = window.GLYTranslate.getAvailableLanguages().find(l => l.code === langCode)?.name || langCode;
        languageValue.textContent = langName;
    }
}

function showAddressPopup() {
    const user = window.getCurrentUser();
    if (!user) return;
    
    const t = window.GLYTranslate?.t || ((key) => key);
    
    // Clear input field
    const addressInput = document.getElementById('withdrawal-address-input');
    if (addressInput) addressInput.value = '';
    
    // Set default network to TRC20 if user has address, otherwise first option
    const trc20Option = document.querySelector('#address-popup .network-option-green[data-network="TRC20"]');
    const bep20Option = document.querySelector('#address-popup .network-option-green[data-network="BEP20"]');
    
    if (user.withdrawal_address_trc20) {
        trc20Option.classList.add('active');
        bep20Option.classList.remove('active');
        addressInput.value = user.withdrawal_address_trc20;
    } else if (user.withdrawal_address_bep20) {
        bep20Option.classList.add('active');
        trc20Option.classList.remove('active');
        addressInput.value = user.withdrawal_address_bep20;
    } else {
        // Default to TRC20
        trc20Option.classList.add('active');
        bep20Option.classList.remove('active');
    }
    
    const popup = document.getElementById('address-popup');
    if (popup) popup.style.display = 'flex';
}

function hideAddressPopup() {
    const popup = document.getElementById('address-popup');
    if (popup) popup.style.display = 'none';
    
    const addressInput = document.getElementById('withdrawal-address-input');
    if (addressInput) addressInput.value = '';
}

function showPasswordPopup() {
    const popup = document.getElementById('password-popup');
    if (popup) popup.style.display = 'flex';
}

function hidePasswordPopup() {
    const popup = document.getElementById('password-popup');
    if (popup) popup.style.display = 'none';
    
    const currentPassword = document.getElementById('current-password');
    if (currentPassword) currentPassword.value = '';
    
    const newPassword = document.getElementById('new-password');
    if (newPassword) newPassword.value = '';
    
    const confirmPassword = document.getElementById('confirm-password');
    if (confirmPassword) confirmPassword.value = '';
}

function showSupportPopup() {
    const popup = document.getElementById('support-popup');
    if (popup) popup.style.display = 'flex';
}

function hideSupportPopup() {
    const popup = document.getElementById('support-popup');
    if (popup) popup.style.display = 'none';
}

async function saveWithdrawalAddress() {
    const t = window.GLYTranslate?.t || ((key) => key);
    
    const addressInput = document.getElementById('withdrawal-address-input');
    if (!addressInput) return;
    
    const address = addressInput.value.trim();
    const selectedNetwork = document.querySelector('#address-popup .network-option-green.active');
    if (!selectedNetwork) return;
    
    const network = selectedNetwork.getAttribute('data-network');
    const user = window.getCurrentUser();
    
    if (!address) {
        window.showCustomAlert(t('enter_valid_address'));
        return;
    }
    
    if (!user) {
        window.showCustomAlert('User not found');
        return;
    }
    
    try {
        // Save address in database
        const updateData = {};
        if (network === 'TRC20') {
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
        
        window.showCustomAlert(t('address_save_success'));
        hideAddressPopup();
        
        // Update display
        const settingValue = document.getElementById('withdrawal-address-value');
        if (settingValue) {
            settingValue.textContent = t('configured');
        }
        
        // Reload profile to update data
        loadProfileData();
        
    } catch (error) {
        window.showCustomAlert('Error saving address: ' + error.message);
    }
}

async function changePassword() {
    const t = window.GLYTranslate?.t || ((key) => key);
    
    const currentPasswordInput = document.getElementById('current-password');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    if (!currentPasswordInput || !newPasswordInput || !confirmPasswordInput) return;
    
    const currentPassword = currentPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const user = window.getCurrentUser();
    
    if (!user) {
        window.showCustomAlert('User not found');
        return;
    }
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        window.showCustomAlert(t('fill_all_fields'));
        return;
    }
    
    if (newPassword !== confirmPassword) {
        window.showCustomAlert(t('passwords_not_match'));
        return;
    }
    
    if (newPassword.length < 6) {
        window.showCustomAlert(t('password_length'));
        return;
    }
    
    // Check current password
    if (user.password !== currentPassword) {
        window.showCustomAlert(t('password_incorrect'));
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
        
        window.showCustomAlert(t('password_change_success'));
        hidePasswordPopup();
    } catch (error) {
        window.showCustomAlert('Error changing password: ' + error.message);
    }
}

function copyUserId() {
    const userIdElement = document.getElementById('user-id');
    if (!userIdElement) return;
    
    const userId = userIdElement.textContent.replace(`${window.GLYTranslate?.t('id') || 'ID'}: `, '');
    window.GLY.copyToClipboard(userId).then(() => {
        const copyBtn = document.getElementById('copy-user-id');
        if (copyBtn) {
            const originalHtml = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = originalHtml;
            }, 2000);
        }
    });
}

function copyTelegram() {
    window.GLY.copyToClipboard('@GLYSupport').then(() => {
        const copyBtn = document.getElementById('copy-telegram');
        if (copyBtn) {
            const t = window.GLYTranslate?.t || ((key) => key);
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fas fa-check"></i> ${t('copied')}`;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }
    });
}

function copyEmail() {
    window.GLY.copyToClipboard('support@gly.io').then(() => {
        const copyBtn = document.getElementById('copy-email');
        if (copyBtn) {
            const t = window.GLYTranslate?.t || ((key) => key);
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fas fa-check"></i> ${t('copied')}`;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }
    });
}

function logout() {
    const t = window.GLYTranslate?.t || ((key) => key);
    window.showCustomModal(t('logout_confirm'), t('logout_confirm'), () => {
        window.logout();
    });
}
