// Register section
export default function renderRegister() {
    return `
        <!-- Форма регистрации -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin-bottom: 10px;">Привет</h2>
                <p style="color: #ccc;">Добро пожаловать в GLY</p>
            </div>
            
            <div class="input-container">
                <input type="text" id="reg-username" placeholder="Имя пользователя" class="input-line">
            </div>
            
            <div class="input-container">
                <input type="email" id="email" placeholder="Почта" class="input-line">
            </div>
            
            <div class="input-container" style="position: relative;">
                <input type="password" id="reg-password" placeholder="Пароль" class="input-line" style="padding-right: 40px;">
                <i class="fas fa-eye password-toggle" id="toggle-reg-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
            </div>
            
            <div class="input-container" style="position: relative;">
                <input type="password" id="confirm-password" placeholder="Подтвердить пароль" class="input-line" style="padding-right: 40px;">
                <i class="fas fa-eye password-toggle" id="toggle-confirm-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
            </div>
            
            <div class="input-container" style="position: relative;">
                <input type="password" id="payment-password" placeholder="Пароль платежа" class="input-line" style="padding-right: 40px;">
                <i class="fas fa-eye password-toggle" id="toggle-payment-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
            </div>
            
            <div class="input-container">
                <input type="text" id="invite-code" placeholder="Пригласительный код (обязательно)" class="input-line">
            </div>
            
            <button id="register-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">Зарегистрироваться</button>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">Уже есть аккаунт? <a href="#" id="go-to-login" style="color: #52c41a;">Войдите сейчас!</a></p>
            </div>
            
            <div id="register-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Обработчики для переключения видимости паролей
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

    // Обработчик для кнопки регистрации
    document.getElementById('register-btn').addEventListener('click', async function() {
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const paymentPassword = document.getElementById('payment-password').value;
        const inviteCode = document.getElementById('invite-code').value.trim().toUpperCase();
        const errorDiv = document.getElementById('register-error');
        
        // Валидация
        if (!username || !email || !password || !confirmPassword || !paymentPassword || !inviteCode) {
            errorDiv.textContent = 'Пожалуйста, заполните все обязательные поля';
            errorDiv.style.display = 'block';
            return;
        }
        
        if (password !== confirmPassword) {
            errorDiv.textContent = 'Пароли не совпадают';
            errorDiv.style.display = 'block';
            return;
        }
        
        if (password.length < 6) {
            errorDiv.textContent = 'Пароль должен быть не менее 6 символов';
            errorDiv.style.display = 'block';
            return;
        }
        
        if (paymentPassword.length < 6) {
            errorDiv.textContent = 'Платежный пароль должен быть не менее 6 символов';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Проверка пригласительного кода
        if (!inviteCode) {
            errorDiv.textContent = 'Пригласительный код обязателен для регистрации';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Показываем загрузку
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Регистрация...';
        this.disabled = true;
        
        try {
            // Проверяем, существует ли пользователь с таким именем
            const { data: existingUser } = await supabase
                .from('users')
                .select('id')
                .eq('username', username)
                .single();
                
            if (existingUser) {
                errorDiv.textContent = 'Пользователь с таким именем уже существует';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Проверяем пригласительный код (простая проверка существования)
            const { data: referrer } = await supabase
                .from('users')
                .select('id, invite_code')
                .eq('invite_code', inviteCode)
                .single();
                
            if (!referrer) {
                errorDiv.textContent = 'Неверный пригласительный код';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Генерируем уникальные ID и код
            const userId = window.GLY.generateUserId();
            const userInviteCode = window.GLY.generateInviteCode();
            
            // Создаем пользователя
            const newUser = {
                id: userId,
                username: username,
                email: email,
                password: password,
                payment_password: paymentPassword,
                invite_code: userInviteCode,
                referred_by: inviteCode,
                balance: 3.00, // Бонус за регистрацию
                vip_level: 1,
                signals_available: 3,
                last_signal_update: new Date().toISOString(),
                created_at: new Date().toISOString()
            };
            
            // Сохраняем в базу
            const { error: userError } = await supabase
                .from('users')
                .insert([newUser]);
                
            if (userError) {
                errorDiv.textContent = 'Ошибка при регистрации. Попробуйте позже.';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Создаем реферальные записи
            await createReferralRecords(referrer.id, userId);
            
            // Создаем транзакцию для бонуса
            await supabase
                .from('transactions')
                .insert([{
                    user_id: userId,
                    type: 'registration_bonus',
                    amount: 3.00,
                    status: 'completed',
                    description: 'Registration bonus'
                }]);
            
            // Авторизуем пользователя
            localStorage.setItem('gly_user', JSON.stringify(newUser));
            
            // Переходим на главную
            document.body.classList.remove('auth-page');
            window.showSection('home');
            
        } catch (error) {
            console.error('Registration error:', error);
            errorDiv.textContent = 'Ошибка при регистрации. Попробуйте позже.';
            errorDiv.style.display = 'block';
        } finally {
            // Восстанавливаем кнопку
            this.innerHTML = originalText;
            this.disabled = false;
        }
    });

    // Обработчик для перехода на вход
    document.getElementById('go-to-login').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('login');
    });
}

async function createReferralRecords(referrerId, userId) {
    try {
        // Уровень 1
        await supabase
            .from('referrals')
            .insert([{
                referrer_id: referrerId,
                referred_id: userId,
                level: 1
            }]);
        
        // Находим реферера уровня 2
        const { data: level2Referrer } = await supabase
            .from('referrals')
            .select('referrer_id')
            .eq('referred_id', referrerId)
            .eq('level', 1)
            .single();
            
        if (level2Referrer) {
            // Уровень 2
            await supabase
                .from('referrals')
                .insert([{
                    referrer_id: level2Referrer.referrer_id,
                    referred_id: userId,
                    level: 2
                }]);
            
            // Находим реферера уровня 3
            const { data: level3Referrer } = await supabase
                .from('referrals')
                .select('referrer_id')
                .eq('referred_id', level2Referrer.referrer_id)
                .eq('level', 1)
                .single();
                
            if (level3Referrer) {
                // Уровень 3
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
