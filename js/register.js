// Register section
export default function renderRegister() {
    const refCode = localStorage.getItem('referral_code') || '';
    
    return `
        <div class="auth-container">
            <div class="auth-logo">
                <img src="assets/logo.png" alt="GLY Logo">
            </div>
            
            <div class="auth-title">
                <h1>Join GLY</h1>
                <p>Start your quantum journey</p>
            </div>
            
            <div class="auth-form">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="reg-username" placeholder="Choose username">
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="email" placeholder="Enter your email">
                </div>
                
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="reg-password" placeholder="Create password">
                </div>
                
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm password">
                </div>
                
                <div class="form-group">
                    <label>Payment Password</label>
                    <input type="password" id="payment-password" placeholder="Payment password">
                </div>
                
                <div class="form-group">
                    <label>Referral Code</label>
                    <input type="text" id="invite-code" placeholder="Enter referral code" value="${refCode}" ${refCode ? 'readonly' : ''}>
                </div>
                
                <button id="register-btn" class="auth-button">Register</button>
                
                <div class="auth-link">
                    <p>Already have an account? <a href="#" id="go-to-login">Login now</a></p>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    document.getElementById('register-btn').addEventListener('click', async function() {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const paymentPassword = document.getElementById('payment-password').value;
        const inviteCode = document.getElementById('invite-code').value;
        
        // Валидация
        if (!username || !email || !password || !confirmPassword || !paymentPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!inviteCode) {
            alert('Referral code is required');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        
        try {
            // Генерируем уникальный инвайт код для нового пользователя
            const userInviteCode = 'GLY' + Math.random().toString(36).substr(2, 9).toUpperCase();
            
            const userData = {
                username,
                email,
                password,
                payment_password: paymentPassword,
                invite_code: userInviteCode,
                referred_by: inviteCode,
                balance: 3.00, // Бонус за регистрацию
                vip_level: 1
            };
            
            const newUser = await GLY.registerUser(userData);
            
            // Добавляем реферальные связи если есть пригласивший
            if (inviteCode) {
                await processReferralHierarchy(inviteCode, newUser.id);
            }
            
            // Добавляем транзакцию бонуса
            await GLY.addTransaction({
                user_id: newUser.id,
                type: 'registration_bonus',
                amount: 3.00
            });
            
            alert('Registration successful! Welcome bonus: $3');
            localStorage.removeItem('referral_code');
            await app.login(newUser);
            
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    });

    document.getElementById('go-to-login').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('login');
    });
}

async function processReferralHierarchy(inviteCode, newUserId) {
    const supabase = GLY.initSupabase();
    
    // Находим пользователя который пригласил
    const { data: referrer } = await supabase
        .from('users')
        .select('id')
        .eq('invite_code', inviteCode)
        .single();
    
    if (!referrer) return;
    
    // Добавляем реферала 1 уровня
    await GLY.addReferral(referrer.id, newUserId, 1);
    
    // Находим реферера 2 уровня (кто пригласил того кто пригласил)
    const { data: level2Referrer } = await supabase
        .from('users')
        .select('id, referred_by')
        .eq('id', referrer.id)
        .single();
    
    if (level2Referrer && level2Referrer.referred_by) {
        const { data: level2User } = await supabase
            .from('users')
            .select('id')
            .eq('invite_code', level2Referrer.referred_by)
            .single();
            
        if (level2User) {
            await GLY.addReferral(level2User.id, newUserId, 2);
            
            // Находим реферера 3 уровня
            const { data: level3Referrer } = await supabase
                .from('users')
                .select('id, referred_by')
                .eq('id', level2User.id)
                .single();
                
            if (level3Referrer && level3Referrer.referred_by) {
                const { data: level3User } = await supabase
                    .from('users')
                    .select('id')
                    .eq('invite_code', level3Referrer.referred_by)
                    .single();
                    
                if (level3User) {
                    await GLY.addReferral(level3User.id, newUserId, 3);
                }
            }
        }
    }
}
