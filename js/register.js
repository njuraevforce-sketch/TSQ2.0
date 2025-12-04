// Register section
export default function renderRegister() {
    return `
        <!-- Registration form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: left; margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                    <img src="assets/logo.png?v=${Date.now()}" alt="GLY Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-right: 20px;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px; font-size: 28px;">${window.GLYTranslate?.t('welcome') || 'Welcome'}</h2>
                        <p style="color: #ccc; font-size: 16px;">${window.GLYTranslate?.t('welcome_to_gly') || 'Welcome to GLY'}</p>
                    </div>
                </div>
                
                <!-- Language selector button -->
                <button id="language-selector-btn-register" class="language-selector-btn">
                    <i class="fas fa-globe"></i>
                </button>
            </div>
            
            <form id="register-form" onsubmit="return false;">
                <div class="input-container">
                    <input type="text" id="reg-username" placeholder="${window.GLYTranslate?.t('username') || 'Username'}" class="input-line">
                </div>
    
                <div class="input-container">
                    <input type="email" id="email" placeholder="${window.GLYTranslate?.t('email') || 'Email'}" class="input-line">
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="reg-password" placeholder="${window.GLYTranslate?.t('password') || 'Password'}" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-reg-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="confirm-password" placeholder="${window.GLYTranslate?.t('confirm_password') || 'Confirm Password'}" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-confirm-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="payment-password" placeholder="${window.GLYTranslate?.t('payment_password') || 'Transaction Password'}" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-payment-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container">
                    <input type="text" id="invite-code" placeholder="${window.GLYTranslate?.t('invite_code_required') || 'Invitation Code (required)'}" class="input-line" value="">
                </div>
                
                <button type="submit" id="register-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">
                    ${window.GLYTranslate?.t('register') || 'Register'}
                </button>
            </form>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">
                    ${window.GLYTranslate?.t('already_have_account') || 'Already have an account?'} 
                    <a href="#" id="go-to-login" style="color: #52c41a;">
                        ${window.GLYTranslate?.t('login_now') || 'Login now!'}
                    </a>
                </p>
            </div>
            
            <div id="register-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Initialize language if not already
    if (!window.GLYTranslate) {
        // Load translate module
        import('./translate.js').then(() => {
            initRegisterPage();
        });
    } else {
        initRegisterPage();
    }
    
    function initRegisterPage() {
        // Extract invite code from URL
        const hash = window.location.hash;
        let refCode = '';
        
        if (hash.includes('?ref=')) {
            refCode = hash.split('?ref=')[1];
            if (refCode) {
                // Clean the ref code from any other parameters
                refCode = refCode.split('&')[0];
                document.getElementById('invite-code').value = refCode.toUpperCase();
            }
        }
        
        // Language selector button handler
        document.getElementById('language-selector-btn-register').addEventListener('click', () => {
            window.showLanguageSelector();
        });
        
        // Password toggle handlers
        document.getElementById('toggle-reg-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('reg-password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });

        document.getElementById('toggle-confirm-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('confirm-password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });

        document.getElementById('toggle-payment-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('payment-password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });

        // Register button handler
        document.getElementById('register-btn').addEventListener('click', async function() {
            const username = document.getElementById('reg-username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const paymentPassword = document.getElementById('payment-password').value;
            const inviteCode = document.getElementById('invite-code').value.trim().toUpperCase();
            const errorDiv = document.getElementById('register-error');
            
            // Validation
            if (!username || !email || !password || !confirmPassword || !paymentPassword || !inviteCode) {
                errorDiv.textContent = window.GLYTranslate?.t('please_fill_all') || 'Please fill in all required fields';
                errorDiv.style.display = 'block';
                return;
            }
            
            if (password !== confirmPassword) {
                errorDiv.textContent = window.GLYTranslate?.t('password_mismatch') || 'Passwords do not match';
                errorDiv.style.display = 'block';
                return;
            }
            
            if (password.length < 6) {
                errorDiv.textContent = window.GLYTranslate?.t('password_length') || 'Password must be at least 6 characters long';
                errorDiv.style.display = 'block';
                return;
            }
            
            if (paymentPassword.length < 6) {
                errorDiv.textContent = window.GLYTranslate?.t('password_length') || 'Payment password must be at least 6 characters long';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Check invitation code
            if (!inviteCode) {
                errorDiv.textContent = window.GLYTranslate?.t('invalid_invite_code') || 'Invitation code is required for registration';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Show loading
            const originalText = this.innerHTML;
            this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${window.GLYTranslate?.t('loading') || 'Registering...'}`;
            this.disabled = true;
            
            try {
                // Check if username exists
                const { data: existingUser } = await supabase
                    .from('users')
                    .select('id')
                    .eq('username', username)
                    .maybeSingle();
                    
                if (existingUser) {
                    errorDiv.textContent = window.GLYTranslate?.t('username_exists') || 'User with this username already exists';
                    errorDiv.style.display = 'block';
                    return;
                }
                
                // Check invitation code
                const { data: referrer } = await supabase
                    .from('users')
                    .select('id, invite_code')
                    .eq('invite_code', inviteCode)
                    .maybeSingle();
                    
                if (!referrer) {
                    errorDiv.textContent = window.GLYTranslate?.t('invalid_invite_code') || 'Invalid invitation code';
                    errorDiv.style.display = 'block';
                    return;
                }
                
                // Generate unique ID and code
                const userId = window.GLY.generateUserId();
                const userInviteCode = window.GLY.generateInviteCode();
                
                // Create user
                const newUser = {
                    id: userId,
                    username: username,
                    email: email,
                    password: password,
                    payment_password: paymentPassword,
                    invite_code: userInviteCode,
                    referred_by: inviteCode,
                    balance: 3.00, // Registration bonus
                    vip_level: 1,
                    signals_available: 3,
                    last_signal_update: new Date().toISOString(),
                    created_at: new Date().toISOString()
                };
                
                // Save to database
                const { error: userError } = await supabase
                    .from('users')
                    .insert([newUser]);
                    
                if (userError) {
                    errorDiv.textContent = window.GLYTranslate?.t('registration_error') || 'Error during registration. Please try again later.';
                    errorDiv.style.display = 'block';
                    return;
                }
                
                // Create referral records
                await createReferralRecords(referrer.id, userId);
                
                // Create transaction for bonus
                await supabase
                    .from('transactions')
                    .insert([{
                        user_id: userId,
                        type: 'registration_bonus',
                        amount: 3.00,
                        status: 'completed',
                        description: 'Registration bonus'
                    }]);
                
                // Authenticate user
                localStorage.setItem('gly_user', JSON.stringify(newUser));
                
                // Important: update current user in app
                if (window.glyApp) {
                    window.glyApp.currentUser = newUser;
                }
                
                // Show success message
                window.showCustomAlert((window.GLYTranslate?.t('registration_success') || 'Registration successful!') + ' You have received $3 USDT bonus.');
                
                // Redirect to home after 2 seconds
                setTimeout(() => {
                    window.showSection('home');
                }, 2000);
                
            } catch (error) {
                console.error('Registration error:', error);
                errorDiv.textContent = window.GLYTranslate?.t('registration_error') || 'Error during registration. Please try again later.';
                errorDiv.style.display = 'block';
            } finally {
                // Restore button
                this.innerHTML = window.GLYTranslate?.t('register') || 'Register';
                this.disabled = false;
            }
        });

        // Go to login handler
        document.getElementById('go-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            window.showSection('login');
        });
    }
}

// Function to update register page texts when language changes
function updateRegisterPageTexts() {
    const t = window.GLYTranslate?.t;
    if (!t) return;
    
    // Update page texts
    const welcomeTitle = document.querySelector('.card h2');
    if (welcomeTitle) welcomeTitle.textContent = t('welcome');
    
    const welcomeSubtitle = document.querySelector('.card p');
    if (welcomeSubtitle) welcomeSubtitle.textContent = t('welcome_to_gly');
    
    const usernameInput = document.getElementById('reg-username');
    if (usernameInput) usernameInput.placeholder = t('username');
    
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = t('email');
    
    const passwordInput = document.getElementById('reg-password');
    if (passwordInput) passwordInput.placeholder = t('password');
    
    const confirmPasswordInput = document.getElementById('confirm-password');
    if (confirmPasswordInput) confirmPasswordInput.placeholder = t('confirm_password');
    
    const paymentPasswordInput = document.getElementById('payment-password');
    if (paymentPasswordInput) paymentPasswordInput.placeholder = t('payment_password');
    
    const inviteCodeInput = document.getElementById('invite-code');
    if (inviteCodeInput) inviteCodeInput.placeholder = t('invite_code_required');
    
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) registerBtn.textContent = t('register');
    
    const alreadyAccountText = document.querySelector('#go-to-login').parentElement;
    if (alreadyAccountText) {
        alreadyAccountText.innerHTML = `${t('already_have_account')} <a href="#" id="go-to-login" style="color: #52c41a;">${t('login_now')}</a>`;
        
        // Reattach event listener
        document.getElementById('go-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            window.showSection('login');
        });
    }
}

// Listen for language changes
window.addEventListener('languageChanged', updateRegisterPageTexts);

async function createReferralRecords(referrerId, userId) {
    try {
        // Level 1
        await supabase
            .from('referrals')
            .insert([{
                referrer_id: referrerId,
                referred_id: userId,
                level: 1
            }]);
        
        // Find level 2 referrer
        const { data: level2Referrer } = await supabase
            .from('referrals')
            .select('referrer_id')
            .eq('referred_id', referrerId)
            .eq('level', 1)
            .maybeSingle();
            
        if (level2Referrer) {
            // Level 2
            await supabase
                .from('referrals')
                .insert([{
                    referrer_id: level2Referrer.referrer_id,
                    referred_id: userId,
                    level: 2
                }]);
            
            // Find level 3 referrer
            const { data: level3Referrer } = await supabase
                .from('referrals')
                .select('referrer_id')
                .eq('referred_id', level2Referrer.referrer_id)
                .eq('level', 1)
                .maybeSingle();
                
            if (level3Referrer) {
                // Level 3
                await supabase
                    .from('referrals')
                    .insert([{
                        referrer_id: level3Referrer.referrer_id,
                        referred_id: userId,
                        level: 3
                    }]);
            }
        }
    } catch (error) {
        console.error('Error creating referral records:', error);
    }
}
