// Login section
import { t } from './translate.js';

export default function renderLogin() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Login form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none; position: relative;">
            <!-- Language button moved to top right -->
            <div class="language-globe-btn" id="language-btn-login" style="position: absolute; top: 10px; right: 15px; width: 30px; height: 30px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4e7771; font-size: 16px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.2); border: 1px solid #4e7771;">
                <i class="fas fa-globe"></i>
            </div>
            
            <div style="text-align: left; margin-bottom: 30px; display: flex; align-items: center;">
                <img src="assets/logo.png" alt="GLY Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-right: 20px;">
                <div>
                    <h2 style="color: white; margin-bottom: 5px; font-size: 28px;" data-translate="welcome">Welcome</h2>
                    <p style="color: #ccc; font-size: 16px;" data-translate="welcome_to_gly">Welcome to GLY</p>
                </div>
            </div>
            
            <form id="login-form" onsubmit="return false;">
                <div class="input-container">
                    <input type="text" id="username" data-translate="username" placeholder="Username" class="input-line">
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="password" data-translate="password" placeholder="Password" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <button type="submit" id="login-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;" data-translate="login">Login</button>
            </form>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">
                    <span data-translate="no_account">Don't have an account?</span> 
                    <a href="#" id="go-to-register" style="color: #52c41a;" data-translate="register_now">Register now!</a>
                </p>
            </div>
            
            <div id="login-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Language button handler - FIXED
    document.getElementById('language-btn-login').addEventListener('click', () => {
        showLanguageModal();
    });
    
    // Password visibility toggle handler
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Login button handler
    document.getElementById('login-btn').addEventListener('click', async function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');
        
        if (!username || !password) {
            errorDiv.textContent = t('validation_required');
            errorDiv.style.display = 'block';
            return;
        }
        
        // Show loading
        const originalText = this.innerHTML;
        this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('loading')}`;
        this.disabled = true;
        
        try {
            // Fixed Supabase query
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .maybeSingle();
                
            if (error) {
                console.error('Supabase error:', error);
                errorDiv.textContent = t('database_error');
                errorDiv.style.display = 'block';
                return;
            }
            
            if (!data) {
                errorDiv.textContent = t('user_not_found');
                errorDiv.style.display = 'block';
                return;
            }
            
            // Check password
            if (data.password !== password) {
                errorDiv.textContent = t('invalid_credentials');
                errorDiv.style.display = 'block';
                return;
            }
            
            // Save user
            localStorage.setItem('gly_user', JSON.stringify(data));
            
            // Important: update current user in app
            if (window.glyApp) {
                window.glyApp.currentUser = data;
            }
            
            // Reload app for correct redirection
            setTimeout(() => {
                window.location.reload();
            }, 100);
            
        } catch (error) {
            console.error('Login error:', error);
            errorDiv.textContent = t('login_error');
            errorDiv.style.display = 'block';
        } finally {
            // Restore button
            this.innerHTML = originalText;
            this.disabled = false;
        }
    });

    // Go to registration handler
    document.getElementById('go-to-register').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('register');
    });
}

// Language modal function (from translate.js)
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
