// Mine section
export default function renderMine() {
    return `
        <!-- Профиль с фоновым изображением -->
        <div class="card padding profile-bg">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                        <div class="profile-vip-badge" id="user-vip-level">VIP 1</div>
                        <button class="copy-id-btn" id="copy-user-id">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <div class="profile-id-copy">
                        <span class="profile-id" id="user-id">ID: Loading...</span>
                    </div>
                    <div style="margin-top: 10px; color: white; font-size: 16px;">
                        Баланс: <span id="user-balance">0.00</span> USDT
                    </div>
                </div>
            </div>
        </div>

        <!-- Настройки -->
        <div class="card padding margin-top">
            <div class="text-white text-bold">Settings</div>
            <div class="settings-list">
                <div class="setting-item" id="withdrawal-address-setting">
                    <div class="setting-name">Withdrawal Address</div>
                    <div class="setting-value">Set address</div>
                </div>
                <div class="setting-item" id="transaction-password-setting">
                    <div class="setting-name">Transaction Password</div>
                    <div class="setting-value">Change</div>
                </div>
                <div class="setting-item" id="customer-service-setting">
                    <div class="setting-name">Customer Service</div>
                    <div class="setting-value">Contact</div>
                </div>
                <div class="setting-item" id="language-setting">
                    <div class="setting-name">Language</div>
                    <div class="setting-value">English</div>
                </div>
                <div class="setting-item" id="change-password-setting">
                    <div class="setting-name">Change Password</div>
                    <div class="setting-value">Update</div>
                </div>
                <div class="pro-btn" id="logout-btn" style="background: transparent; border: 1px solid #ff6b6b; margin-top: 10px;">Logout</div>
            </div>
        </div>

        <!-- Попап для настройки адреса вывода -->
        <div class="pop-overlay" id="address-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Set Withdrawal Address</div>
                <div class="pop-body">
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">USDT Wallet Address (TRC20)</label>
                        <input type="text" id="withdrawal-address-input" placeholder="Enter your TRC20 address" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                    <p style="font-size: 12px; color: #666;">
                        This address will be used for all future withdrawals. Please double-check the address.
                    </p>
                </div>
                <div class="pop-footer">
                    <button id="save-address" style="margin-right: 10px;">Save</button>
                    <button id="close-address">Cancel</button>
                </div>
            </div>
        </div>

        <!-- Попап для смены пароля -->
        <div class="pop-overlay" id="password-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Change Password</div>
                <div class="pop-body">
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">Current Password</label>
                        <input type="password" id="current-password" placeholder="Enter current password" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">New Password</label>
                        <input type="password" id="new-password" placeholder="Enter new password" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                    <div class="margin-bottom">
                        <label style="color: #333; font-size: 14px;">Confirm New Password</label>
                        <input type="password" id="confirm-password" placeholder="Confirm new password" 
                               style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; margin-top: 5px;">
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="save-password" style="margin-right: 10px;">Save</button>
                    <button id="close-password">Cancel</button>
                </div>
            </div>
        </div>

        <!-- Попап для службы поддержки -->
        <div class="pop-overlay" id="support-popup" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Customer Service</div>
                <div class="pop-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 48px; color: #4e7771;">💬</div>
                    </div>
                    <p style="text-align: center; color: #333; margin-bottom: 15px;">
                        Contact our 24/7 customer support:
                    </p>
                    <div class="referral-section">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4>Telegram</h4>
                                    <p>@GLYSupport</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-telegram">
                                <i class="fas fa-copy"></i> COPY
                            </button>
                        </div>
                    </div>
                    <div class="referral-section margin-top-sm">
                        <div class="referral-content">
                            <div class="referral-info">
                                <div class="referral-text">
                                    <h4>Email</h4>
                                    <p>support@gly.io</p>
                                </div>
                            </div>
                            <button class="copy-btn" id="copy-email">
                                <i class="fas fa-copy"></i> COPY
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-support">Close</button>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Загрузка данных профиля
    loadProfileData();
    
    // Обработчики для настроек
    document.getElementById('withdrawal-address-setting').addEventListener('click', showAddressPopup);
    document.getElementById('transaction-password-setting').addEventListener('click', showPasswordPopup);
    document.getElementById('customer-service-setting').addEventListener('click', showSupportPopup);
    document.getElementById('language-setting').addEventListener('click', changeLanguage);
    document.getElementById('change-password-setting').addEventListener('click', showPasswordPopup);
    document.getElementById('logout-btn').addEventListener('click', logout);

    // Обработчик для копирования ID пользователя
    document.getElementById('copy-user-id').addEventListener('click', copyUserId);

    // Обработчики для попапов
    const closeAddressBtn = document.getElementById('close-address');
    const saveAddressBtn = document.getElementById('save-address');
    const closePasswordBtn = document.getElementById('close-password');
    const savePasswordBtn = document.getElementById('save-password');
    const closeSupportBtn = document.getElementById('close-support');
    
    if (closeAddressBtn) closeAddressBtn.addEventListener('click', hideAddressPopup);
    if (saveAddressBtn) saveAddressBtn.addEventListener('click', saveWithdrawalAddress);
    if (closePasswordBtn) closePasswordBtn.addEventListener('click', hidePasswordPopup);
    if (savePasswordBtn) savePasswordBtn.addEventListener('click', changePassword);
    if (closeSupportBtn) closeSupportBtn.addEventListener('click', hideSupportPopup);
    
    // Копирование контактов поддержки
    const copyTelegramBtn = document.getElementById('copy-telegram');
    const copyEmailBtn = document.getElementById('copy-email');
    
    if (copyTelegramBtn) copyTelegramBtn.addEventListener('click', copyTelegram);
    if (copyEmailBtn) copyEmailBtn.addEventListener('click', copyEmail);
}

async function loadProfileData() {
    const user = window.getCurrentUser();
    if (!user) {
        window.showSection('login');
        return;
    }
    
    // Обновляем данные на странице
    document.getElementById('user-vip-level').textContent = `VIP ${user.vip_level}`;
    document.getElementById('user-id').textContent = `ID: ${user.id}`;
    document.getElementById('user-balance').textContent = user.balance.toFixed(2);
    
    // Обновляем отображение адреса вывода
    if (user.withdrawal_address) {
        document.querySelector('#withdrawal-address-setting .setting-value').textContent = 'Configured';
    }
}

function showAddressPopup() {
    document.getElementById('address-popup').style.display = 'flex';
}

function hideAddressPopup() {
    document.getElementById('address-popup').style.display = 'none';
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
    const user = window.getCurrentUser();
    
    if (!address) {
        alert('Please enter a valid wallet address');
        return;
    }
    
    if (!user) {
        alert('User not found');
        return;
    }
    
    try {
        // Сохраняем адрес в базе
        const { error } = await supabase
            .from('users')
            .update({ withdrawal_address: address })
            .eq('id', user.id);
            
        if (error) throw error;
        
        // Обновляем пользователя в localStorage
        user.withdrawal_address = address;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        alert('Withdrawal address has been saved successfully!');
        hideAddressPopup();
        
        // Обновление отображения
        document.querySelector('#withdrawal-address-setting .setting-value').textContent = 'Configured';
    } catch (error) {
        alert('Error saving address: ' + error.message);
    }
}

async function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const user = window.getCurrentUser();
    
    if (!user) {
        alert('User not found');
        return;
    }
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Проверяем текущий пароль
    if (user.password !== currentPassword) {
        alert('Current password is incorrect');
        return;
    }
    
    try {
        // Обновляем пароль в базе
        const { error } = await supabase
            .from('users')
            .update({ password: newPassword })
            .eq('id', user.id);
            
        if (error) throw error;
        
        // Обновляем пользователя в localStorage
        user.password = newPassword;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        alert('Password has been changed successfully!');
        hidePasswordPopup();
    } catch (error) {
        alert('Error changing password: ' + error.message);
    }
}

function changeLanguage() {
    const languages = ['English', 'Chinese', 'Russian', 'Spanish'];
    const currentLang = document.querySelector('#language-setting .setting-value').textContent;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    
    document.querySelector('#language-setting .setting-value').textContent = languages[nextIndex];
    alert(`Language changed to ${languages[nextIndex]}`);
}

function copyUserId() {
    const userId = document.getElementById('user-id').textContent.replace('ID: ', '');
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
        copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function copyEmail() {
    window.GLY.copyToClipboard('support@gly.io').then(() => {
        const copyBtn = document.getElementById('copy-email');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.logout();
    }
}
