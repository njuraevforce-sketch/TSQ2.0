// Register section
import { t } from './translate.js';

export default function renderRegister() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Registration form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none; position: relative;">
            <!-- Language button moved to top right -->
            <div class="language-globe-btn" id="language-btn-register" style="position: absolute; top: 10px; right: 15px; width: 30px; height: 30px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4e7771; font-size: 16px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.2); border: 1px solid #4e7771;">
                <i class="fas fa-globe"></i>
            </div>
            
            <div style="text-align: left; margin-bottom: 30px; display: flex; align-items: center;">
                <img src="assets/logo.png?v=${Date.now()}" alt="GLY Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-right: 20px;">
                <div>
                    <h2 style="color: white; margin-bottom: 5px; font-size: 28px;" data-translate="welcome">Welcome</h2>
                    <p style="color: #ccc; font-size: 16px;" data-translate="welcome_to_gly">Welcome to GLY</p>
                </div>
            </div>
            
            <form id="register-form" onsubmit="return false;">
                <div class="input-container">
                    <input type="text" id="reg-username" data-translate="username" placeholder="Username" class="input-line">
                </div>
    
                <div class="input-container">
                    <input type="email" id="email" data-translate="email" placeholder="Email" class="input-line">
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="reg-password" data-translate="password" placeholder="Password" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-reg-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="confirm-password" data-translate="confirm_password" placeholder="Confirm Password" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-confirm-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="payment-password" data-translate="payment_password" placeholder="Payment Password" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-payment-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <div class="input-container">
                    <input type="text" id="invite-code" data-translate="invite_code_required" placeholder="Invitation Code (required)" class="input-line" value="">
                </div>
                
                <button type="submit" id="register-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;" data-translate="register">Register</button>
            </form>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">
                    <span data-translate="have_account">Already have an account?</span> 
                    <a href="#" id="go-to-login" style="color: #52c41a;" data-translate="login_now">Login now!</a>
                </p>
            </div>
            
            <div id="register-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Language button handler - FIXED
    document.getElementById('language-btn-register').addEventListener('click', () => {
        showLanguageModal();
    });
    
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
            errorDiv.textContent = t('validation_required');
            errorDiv.style.display = 'block';
            return;
        }
        
        if (password !== confirmPassword) {
            errorDiv.textContent = t('validation_password_match');
            errorDiv.style.display = 'block';
            return;
        }
        
        if (password.length < 6) {
            errorDiv.textContent = t('validation_password_length');
            errorDiv.style.display = 'block';
            return;
        }
        
        if (paymentPassword.length < 6) {
            errorDiv.textContent = t('validation_payment_password_length');
            errorDiv.style.display = 'block';
            return;
        }
        
        // Check invitation code
        if (!inviteCode) {
            errorDiv.textContent = t('validation_invite_code');
            errorDiv.style.display = 'block';
            return;
        }
        
        // Show loading
        const originalText = this.innerHTML;
        this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('registering')}`;
        this.disabled = true;
        
        try {
            // Check if username exists
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('username', username)
                .maybeSingle();
                
            if (existingUser) {
                errorDiv.textContent = t('error_username_exists');
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
                errorDiv.textContent = t('error_invalid_invite');
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
                errorDiv.textContent = t('server_error');
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
                    description: t('registration_bonus_rule')
                }]);
            
            // Authenticate user
            localStorage.setItem('gly_user', JSON.stringify(newUser));
            
            // Important: update current user in app
            if (window.glyApp) {
                window.glyApp.currentUser = newUser;
            }
            
            // Show success message
            window.showCustomAlert(t('registration_success'));
            
            // Redirect to home after 2 seconds
            setTimeout(() => {
                window.showSection('home');
            }, 2000);
            
        } catch (error) {
            console.error('Registration error:', error);
            errorDiv.textContent = t('server_error');
            errorDiv.style.display = 'block';
        } finally {
            // Restore button
            this.innerHTML = originalText;
            this.disabled = false;
        }
    });

    // Go to login handler
    document.getElementById('go-to-login').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('login');
    });
}

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

// Language modal function (same as in login.js)
function showLanguageModal() {
    const modalHTML = `
        <div class="pop-overlay" id="language-modal-overlay">
            <div class="pop-content">
                <div class="pop-header" data-translate="select_language">Select Language</div>
                <div class="pop-body" style="max-height: 400px; overflow-y: auto;">
                    <div class="language-current" style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                        <div style="font-size: 12px; color: #666;" data-translate="current_language">Current Language</div>
                        <div id="current-language-display" style="font-weight: bold; color: #4e7771; font-size: 16px;">${getCurrentLanguageName()}</div>
                    </div>
                    
                    <div class="language-list">
                        ${getLanguageOptionsHTML()}
                    </div>
                </div>
                <div class="pop-footer">
                    <button type="button" id="confirm-language-btn" style="background: #4e7771; color: white; border: none; padding: 8px 20px; border-radius: 5px; cursor: pointer; margin: 0 5px;" data-translate="confirm">Confirm</button>
                    <button type="button" id="close-language-modal" style="background: #666; color: white; border: none; padding: 8px 20px; border-radius: 5px; cursor: pointer; margin: 0 5px;" data-translate="close">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('language-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Setup event listeners
    setupLanguageModalEvents();
}

function getCurrentLanguageName() {
    const lang = localStorage.getItem('gly_language') || 'en';
    const languageNames = {
        'en': 'English',
        'fr': 'Français',
        'de': 'Deutsch',
        'ar': 'العربية',
        'pl': 'Polski',
        'ru': 'Русский',
        'pt': 'Português',
        'tr': 'Türkçe',
        'ro': 'Română',
        'uz': 'Oʻzbekcha',
        'es': 'Español',
        'it': 'Italiano',
        'id': 'Bahasa Indonesia'
    };
    return languageNames[lang] || 'English';
}

function getLanguageOptionsHTML() {
    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'pl', name: 'Polski', flag: '🇵🇱' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'ro', name: 'Română', flag: '🇷🇴' },
        { code: 'uz', name: 'Oʻzbekcha', flag: '🇺🇿' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' }
    ];
    
    const currentLang = localStorage.getItem('gly_language') || 'en';
    
    return languages.map(lang => `
        <div class="language-option ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}" style="display: flex; align-items: center; padding: 10px; margin-bottom: 5px; border-radius: 5px; cursor: pointer; background: ${lang.code === currentLang ? '#e6f7ff' : 'white'}; border: 1px solid ${lang.code === currentLang ? '#91d5ff' : '#e8e8e8'};">
            <div style="font-size: 20px; margin-right: 10px;">${lang.flag}</div>
            <div style="flex: 1;">${lang.name}</div>
            ${lang.code === currentLang ? '<i class="fas fa-check" style="color: #52c41a;"></i>' : ''}
        </div>
    `).join('');
}

function setupLanguageModalEvents() {
    const modal = document.getElementById('language-modal-overlay');
    if (!modal) return;
    
    // Language selection
    modal.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            modal.querySelectorAll('.language-option').forEach(opt => {
                opt.classList.remove('active');
                opt.style.background = 'white';
                opt.style.border = '1px solid #e8e8e8';
            });
            
            // Add active class to selected option
            this.classList.add('active');
            this.style.background = '#e6f7ff';
            this.style.border = '1px solid #91d5ff';
            
            // Update current language display
            const lang = this.getAttribute('data-lang');
            const languageNames = {
                'en': 'English',
                'fr': 'Français',
                'de': 'Deutsch',
                'ar': 'العربية',
                'pl': 'Polski',
                'ru': 'Русский',
                'pt': 'Português',
                'tr': 'Türkçe',
                'ro': 'Română',
                'uz': 'Oʻzbekcha',
                'es': 'Español',
                'it': 'Italiano',
                'id': 'Bahasa Indonesia'
            };
            document.getElementById('current-language-display').textContent = languageNames[lang] || 'English';
            
            // Store selected language in modal
            modal.dataset.selectedLang = lang;
        });
    });
    
    // Confirm button
    modal.querySelector('#confirm-language-btn').addEventListener('click', function() {
        const selectedLang = modal.dataset.selectedLang || localStorage.getItem('gly_language') || 'en';
        
        // Save language
        localStorage.setItem('gly_language', selectedLang);
        
        // Close modal
        modal.remove();
        
        // Show success message
        window.showCustomAlert(t('language_changed', selectedLang, { language: getLanguageName(selectedLang) }));
        
        // Reload page to apply language changes
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });
    
    // Close button
    modal.querySelector('#close-language-modal').addEventListener('click', function() {
        modal.remove();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
}

function getLanguageName(code) {
    const languageNames = {
        'en': 'English',
        'fr': 'Français',
        'de': 'Deutsch',
        'ar': 'العربية',
        'pl': 'Polski',
        'ru': 'Русский',
        'pt': 'Português',
        'tr': 'Türkçe',
        'ro': 'Română',
        'uz': 'Oʻzbekcha',
        'es': 'Español',
        'it': 'Italiano',
        'id': 'Bahasa Indonesia'
    };
    return languageNames[code] || 'English';
}
