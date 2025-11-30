// Mine section
export default function renderMine() {
    return `
        <!-- Профиль с фоном и аватаркой -->
        <div class="profile-banner">
            <img src="assets/vip.png" alt="VIP Background" class="profile-bg">
            <div class="profile-info">
                <div class="profile-avatar-container">
                    <div class="profile-avatar">👤</div>
                </div>
                <div class="profile-name">Quantum Trader</div>
                <div class="profile-id">ID: QCF123456</div>
                <div class="profile-vip">VIP 3</div>
            </div>
        </div>

        <!-- Статистика профиля -->
        <div class="card padding">
            <div class="grid col-2 margin-top">
                <div class="referral-stat">
                    <div class="text-gray">Total Earned</div>
                    <div class="text-white text-bold">2,456.89 USDT</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Total Withdrawn</div>
                    <div class="text-white text-bold">1,200.00 USDT</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Team Members</div>
                    <div class="text-white text-bold">15</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Days Active</div>
                    <div class="text-white text-bold">45</div>
                </div>
            </div>
        </div>

        <!-- Реферальная статистика -->
        <div class="card padding margin-top">
            <div class="text-white text-bold text-center">Referral Statistics</div>
            <div class="referral-stats">
                <div class="referral-stat">
                    <div class="text-gray">Level 1</div>
                    <div class="text-white text-bold">8</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Level 2</div>
                    <div class="text-white text-bold">5</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Level 3</div>
                    <div class="text-white text-bold">2</div>
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
                                    <p>@QuantumFarmSupport</p>
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
                                    <p>support@quantumfarm.io</p>
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
    // Обработчики для настроек
    document.getElementById('withdrawal-address-setting').addEventListener('click', showAddressPopup);
    document.getElementById('transaction-password-setting').addEventListener('click', showPasswordPopup);
    document.getElementById('customer-service-setting').addEventListener('click', showSupportPopup);
    document.getElementById('language-setting').addEventListener('click', changeLanguage);
    document.getElementById('change-password-setting').addEventListener('click', showPasswordPopup);
    document.getElementById('logout-btn').addEventListener('click', logout);

    // Обработчики для попапов
    document.getElementById('close-address').addEventListener('click', hideAddressPopup);
    document.getElementById('save-address').addEventListener('click', saveWithdrawalAddress);
    document.getElementById('close-password').addEventListener('click', hidePasswordPopup);
    document.getElementById('save-password').addEventListener('click', changePassword);
    document.getElementById('close-support').addEventListener('click', hideSupportPopup);
    
    // Копирование контактов поддержки
    document.getElementById('copy-telegram').addEventListener('click', copyTelegram);
    document.getElementById('copy-email').addEventListener('click', copyEmail);

    // Загрузка данных профиля
    loadProfileData();
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
    // Очистка полей
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

function saveWithdrawalAddress() {
    const address = document.getElementById('withdrawal-address-input').value.trim();
    
    if (!address) {
        alert('Please enter a valid wallet address');
        return;
    }
    
    // Здесь будет логика сохранения адреса
    alert('Withdrawal address has been saved successfully!');
    hideAddressPopup();
    
    // Обновление отображения
    document.querySelector('#withdrawal-address-setting .setting-value').textContent = 'Configured';
}

function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
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
    
    // Здесь будет логика смены пароля
    alert('Password has been changed successfully!');
    hidePasswordPopup();
}

function changeLanguage() {
    const languages = ['English', 'Chinese', 'Russian', 'Spanish'];
    const currentLang = document.querySelector('#language-setting .setting-value').textContent;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    
    document.querySelector('#language-setting .setting-value').textContent = languages[nextIndex];
    alert(`Language changed to ${languages[nextIndex]}`);
}

function copyTelegram() {
    QuantumFarm.copyToClipboard('@QuantumFarmSupport').then(() => {
        const copyBtn = document.getElementById('copy-telegram');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function copyEmail() {
    QuantumFarm.copyToClipboard('support@quantumfarm.io').then(() => {
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
        // Здесь будет логика выхода
        alert('You have been logged out successfully');
        // В реальном приложении здесь будет редирект на страницу логина
    }
}

function loadProfileData() {
    // В реальном приложении здесь будет API запрос для загрузки данных профиля
    const profileData = {
        name: 'Quantum Trader',
        userId: 'QCF123456',
        vipLevel: 'VIP 3',
        totalEarned: '2,456.89',
        totalWithdrawn: '1,200.00',
        teamMembers: 15,
        daysActive: 45,
        referralStats: {
            level1: 8,
            level2: 5,
            level3: 2
        }
    };
    
    // Обновление данных на странице
    document.querySelector('.profile-name').textContent = profileData.name;
    document.querySelector('.profile-id').textContent = `ID: ${profileData.userId}`;
    document.querySelector('.profile-vip').textContent = profileData.vipLevel;
    
    // Обновление статистики
    const stats = document.querySelectorAll('.referral-stat');
    stats[0].querySelector('.text-white').textContent = `${profileData.totalEarned} USDT`;
    stats[1].querySelector('.text-white').textContent = `${profileData.totalWithdrawn} USDT`;
    stats[2].querySelector('.text-white').textContent = profileData.teamMembers;
    stats[3].querySelector('.text-white').textContent = profileData.daysActive;
    
    // Обновление реферальной статистики
    const referralStats = document.querySelectorAll('.referral-stats .referral-stat');
    referralStats[0].querySelector('.text-white').textContent = profileData.referralStats.level1;
    referralStats[1].querySelector('.text-white').textContent = profileData.referralStats.level2;
    referralStats[2].querySelector('.text-white').textContent = profileData.referralStats.level3;
}
