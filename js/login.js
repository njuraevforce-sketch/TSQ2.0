// Login section
export default function renderLogin() {
    return `
        <!-- Login form -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: left; margin-bottom: 30px; display: flex; align-items: center;">
                <img src="assets/logo.png" alt="GLY Logo" style="width: 80px; height: 80px; border-radius: 20px; margin-right: 20px;">
                <div>
                    <h2 style="color: white; margin-bottom: 5px; font-size: 28px;">Hello</h2>
                    <p style="color: #ccc; font-size: 16px;">Welcome to GLY</p>
                </div>
            </div>
            
            <form id="login-form" onsubmit="return false;">
                <div class="input-container">
                    <input type="text" id="username" placeholder="Username" class="input-line">
                </div>
                
                <div class="input-container" style="position: relative;">
                    <input type="password" id="password" placeholder="Password" class="input-line" style="padding-right: 40px;">
                    <i class="fas fa-eye password-toggle" id="toggle-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
                </div>
                
                <button type="submit" id="login-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">Login</button>
            </form>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">Don't have an account? <a href="#" id="go-to-register" style="color: #52c41a;">Register now!</a></p>
            </div>
            
            <div id="login-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Handler for password visibility toggle
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Handler for login button
    document.getElementById('login-btn').addEventListener('click', async function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');
        
        if (!username || !password) {
            errorDiv.textContent = 'Please fill in all fields';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Show loading
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        this.disabled = true;
        
        try {
            // Fixed Supabase query
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .maybeSingle();  // Use maybeSingle instead of single
                
            if (error) {
                console.error('Supabase error:', error);
                errorDiv.textContent = 'Database connection error';
                errorDiv.style.display = 'block';
                return;
            }
            
            if (!data) {
                errorDiv.textContent = 'User not found';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Check password
            if (data.password !== password) {
                errorDiv.textContent = 'Incorrect password';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Save user
            localStorage.setItem('gly_user', JSON.stringify(data));
            
            // Important: update current user in application
            if (window.glyApp) {
                window.glyApp.currentUser = data;
            }
            
            // Reload application for correct redirection
            setTimeout(() => {
                window.location.reload();
            }, 100);
            
        } catch (error) {
            console.error('Login error:', error);
            errorDiv.textContent = 'Login error. Please try again later.';
            errorDiv.style.display = 'block';
        } finally {
            // Restore button
            this.innerHTML = originalText;
            this.disabled = false;
        }
    });

    // Handler for going to registration
    document.getElementById('go-to-register').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('register');
    });
}
