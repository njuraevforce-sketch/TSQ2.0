// Login section
export default function renderLogin() {
    return `
        <div class="auth-container">
            <div class="auth-logo">
                <img src="assets/logo.png" alt="GLY Logo">
            </div>
            
            <div class="auth-title">
                <h1>Welcome to GLY</h1>
                <p>Quantum Investment Platform</p>
            </div>
            
            <div class="auth-form">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="username" placeholder="Enter your username">
                </div>
                
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter your password">
                </div>
                
                <button id="login-btn" class="auth-button">Login</button>
                
                <div class="auth-link">
                    <p>Don't have an account? <a href="#" id="go-to-register">Register now</a></p>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    document.getElementById('login-btn').addEventListener('click', async function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        try {
            const user = await GLY.loginUser(username, password);
            await app.login(user);
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    });

    document.getElementById('go-to-register').addEventListener('click', function(e) {
        e.preventDefault();
        // Получаем реферальный код из URL
        const urlParams = new URLSearchParams(window.location.search);
        const refCode = urlParams.get('ref');
        
        if (refCode) {
            localStorage.setItem('referral_code', refCode);
        }
        
        window.showSection('register');
    });
}
