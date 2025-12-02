// Mine section
export default function renderMine() {
    return `
        <!-- Profile with background image -->
        <div class="card padding profile-bg" style="background-image: url('assets/avatar.png'); background-size: cover; background-position: center; border-radius: 10px; padding: 20px; margin-bottom: 20px; position: relative;">
            <!-- Dark overlay for better text readability -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); border-radius: 10px; z-index: 1;"></div>
            
            <div style="position: relative; z-index: 2; display: flex; align-items: center; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                        <div class="profile-vip-badge" id="user-vip-level" style="background: rgba(78, 119, 113, 0.8);">VIP 1</div>
                        <button class="copy-id-btn" id="copy-user-id" style="background: rgba(255, 255, 255, 0.2);">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <div class="profile-id-copy">
                        <span class="profile-id" id="user-id" style="color: white; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">ID: Loading...</span>
                    </div>
                    <div style="margin-top: 15px; color: white; font-size: 18px; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">
                        Balance: <span id="user-balance" style="color: #f9ae3d;">0.00</span> USDT
                    </div>
                </div>
            </div>
        </div>

        <!-- Settings -->
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
                <div class="pro-btn" id="logout-btn" style="background: transparent; border: 2px solid #ff6b6b; margin-top: 10px; color: #ff6b6b; font-weight: bold;">Logout</div>
            </div>
        </div>

        <!-- Popup for withdrawal address -->
        <div class="pop-overlay" id="address-popup" style="display: none;">
            <div class="pop-content">
                <form id="address-form" onsubmit="return false;">
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
                        <button type="submit" id="save-address" style="margin-right: 10px; background: #4e7771;">Save</button>
                        <button type="button" id="close-address" style="background: #666;">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for password change -->
        <div class="pop-overlay" id="password-popup" style="display: none;">
            <div class="pop-content">
                <form id="password-change-form" onsubmit="return false;">
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
                        <button type="submit" id="save-password" style="margin-right: 10px; background: #4e7771;">Save</button>
                        <button type="button" id="close-password" style="background: #666;">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Popup for customer service -->
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
                    <button id="close-support" style="background: #4e7771;">Close</button>
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
        document.getElementById('language-setting').addEventListener('click', changeLanguage);
        document.getElementById('change-password-setting').addEventListener('click', showPasswordPopup);
        document.getElementById('logout-btn').addEventListener('click', logout);
        document.getElementById('copy-user-id').addEventListener('click', copyUserId);

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
        
    } catch (error) {
        console.error('Error setting up event listeners in mine:', error);
        // Retry after 500ms
        setTimeout(setupEventListeners, 500);
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
        document.getElementById('user-id').textContent = `ID: ${user.id}`;
        document.getElementById('user-balance').textContent = user.balance.toFixed(2);
        
        // Update withdrawal address display
        if (user.withdrawal_address) {
            document.querySelector('#withdrawal-address-setting .setting-value').textContent = 'Configured';
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

function showAddressPopup() {
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
    const user = window.getCurrentUser();
    
    if (!address) {
        window.showCustomAlert('Please enter a valid wallet address');
        return;
    }
    
    if (!user) {
        window.showCustomAlert('User not found');
        return;
    }
    
    try {
        // Save address in database
        const { error } = await window.supabase
            .from('users')
            .update({ withdrawal_address: address })
            .eq('id', user.id);
            
        if (error) throw error;
        
        // Update user in localStorage
        user.withdrawal_address = address;
        localStorage.setItem('gly_user', JSON.stringify(user));
        
        window.showCustomAlert('Withdrawal address has been saved successfully!');
        hideAddressPopup();
        
        // Update display
        document.querySelector('#withdrawal-address-setting .setting-value').textContent = 'Configured';
    } catch (error) {
        window.showCustomAlert('Error saving address: ' + error.message);
    }
}

async function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const user = window.getCurrentUser();
    
    if (!user) {
        window.showCustomAlert('User not found');
        return;
    }
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        window.showCustomAlert('Please fill in all fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        window.showCustomAlert('New passwords do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        window.showCustomAlert('Password must be at least 6 characters long');
        return;
    }
    
    // Check current password
    if (user.password !== currentPassword) {
        window.showCustomAlert('Current password is incorrect');
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
        
        window.showCustomAlert('Password has been changed successfully!');
        hidePasswordPopup();
    } catch (error) {
        window.showCustomAlert('Error changing password: ' + error.message);
    }
}

function changeLanguage() {
    const languages = ['English', 'Chinese', 'Russian', 'Spanish'];
    const currentLang = document.querySelector('#language-setting .setting-value').textContent;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    
    document.querySelector('#language-setting .setting-value').textContent = languages[nextIndex];
    window.showCustomAlert(`Language changed to ${languages[nextIndex]}`);
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
    window.showCustomModal('Confirm Logout', 'Are you sure you want to logout?', () => {
        window.logout();
    });
}
