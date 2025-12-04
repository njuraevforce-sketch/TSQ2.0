// Login section
import { t } from './translate.js';

export default function renderLogin() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <!-- Login form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none; position: relative;">
            <!-- Language button -->
            <div class="language-globe-btn" id="language-btn-login">
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
    
    // Language button handler
    document.getElementById('language-btn-login').addEventListener('click', () => {
        window.showLanguageModal();
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
