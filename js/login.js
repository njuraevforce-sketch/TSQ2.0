// Login section
export default function renderLogin() {
    return `
        <!-- Login form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: left; margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                    <img src="assets/logo.png" alt="GLY Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-right: 20px;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px; font-size: 28px;">${window.GLYTranslate?.t('welcome') || 'Welcome'}</h2>
                        <p style="color: #ccc; font-size: 16px;">${window.GLYTranslate?.t('welcome_to_gly') || 'Welcome to GLY'}</p>
                    </div>
                </div>
                
                <!-- Language selector button -->
                <button id="language-selector-btn-login" class="language-selector-btn">
                    <i class="fas fa-globe"></i>
                </button>
            </div>
            
            <form id="login-form" onsubmit="return false;">
                <div class="input-container">
                    <input type="text" id="username" placeholder="${window.GLYTranslate?.t('username') || 'Username'}" class="input-line">
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="password" placeholder="${window.GLYTranslate?.t('password') || 'Password'}" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <button type="submit" id="login-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">
                    ${window.GLYTranslate?.t('login') || 'Login'}
                </button>
            </form>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">
                    ${window.GLYTranslate?.t('no_account') || 'Don\'t have an account?'} 
                    <a href="#" id="go-to-register" style="color: #52c41a;">
                        ${window.GLYTranslate?.t('register_now') || 'Register now!'}
                    </a>
                </p>
            </div>
            
            <div id="login-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Initialize language if not already
    if (!window.GLYTranslate) {
        // Load translate module
        import('./translate.js').then(() => {
            initLanguageSelector();
        });
    } else {
        initLanguageSelector();
    }
    
    function initLanguageSelector() {
        // Language selector button handler
        document.getElementById('language-selector-btn-login').addEventListener('click', () => {
            window.showLanguageSelector();
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
                errorDiv.textContent = window.GLYTranslate?.t('please_fill_all') || 'Please fill in all fields';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Show loading
            const originalText = this.innerHTML;
            this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${window.GLYTranslate?.t('loading') || 'Loading...'}`;
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
                    errorDiv.textContent = window.GLYTranslate?.t('login_error') || 'Database connection error';
                    errorDiv.style.display = 'block';
                    return;
                }
                
                if (!data) {
                    errorDiv.textContent = window.GLYTranslate?.t('invalid_credentials') || 'User not found';
                    errorDiv.style.display = 'block';
                    return;
                }
                
                // Check password
                if (data.password !== password) {
                    errorDiv.textContent = window.GLYTranslate?.t('invalid_credentials') || 'Incorrect password';
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
                errorDiv.textContent = window.GLYTranslate?.t('login_error') || 'Login error. Please try again later.';
                errorDiv.style.display = 'block';
            } finally {
                // Restore button
                this.innerHTML = window.GLYTranslate?.t('login') || 'Login';
                this.disabled = false;
            }
        });

        // Go to registration handler
        document.getElementById('go-to-register').addEventListener('click', function(e) {
            e.preventDefault();
            window.showSection('register');
        });
    }
}

// Function to update login page texts when language changes
function updateLoginPageTexts() {
    const t = window.GLYTranslate?.t;
    if (!t) return;
    
    // Update page texts
    const welcomeTitle = document.querySelector('.card h2');
    if (welcomeTitle) welcomeTitle.textContent = t('welcome');
    
    const welcomeSubtitle = document.querySelector('.card p');
    if (welcomeSubtitle) welcomeSubtitle.textContent = t('welcome_to_gly');
    
    const usernameInput = document.getElementById('username');
    if (usernameInput) usernameInput.placeholder = t('username');
    
    const passwordInput = document.getElementById('password');
    if (passwordInput) passwordInput.placeholder = t('password');
    
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) loginBtn.textContent = t('login');
    
    const noAccountText = document.querySelector('#go-to-register').parentElement;
    if (noAccountText) {
        noAccountText.innerHTML = `${t('no_account')} <a href="#" id="go-to-register" style="color: #52c41a;">${t('register_now')}</a>`;
        
        // Reattach event listener
        document.getElementById('go-to-register').addEventListener('click', function(e) {
            e.preventDefault();
            window.showSection('register');
        });
    }
}

// Listen for language changes
window.addEventListener('languageChanged', updateLoginPageTexts);
