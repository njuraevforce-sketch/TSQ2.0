// Login section
export default function renderLogin() {
    return `
        <!-- Форма входа -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin-bottom: 10px;">Привет</h2>
                <p style="color: #ccc;">Добро пожаловать в GLY</p>
            </div>
            
            <div class="input-container">
                <input type="text" id="username" placeholder="Имя пользователя" class="input-line">
            </div>
            
            <div class="input-container" style="position: relative;">
                <input type="password" id="password" placeholder="Пароль" class="input-line" style="padding-right: 40px;">
                <i class="fas fa-eye password-toggle" id="toggle-password" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #52c41a; cursor: pointer; z-index: 10;"></i>
            </div>
            
            <button id="login-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">Авторизация</button>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">Ещё нет аккаунта? <a href="#" id="go-to-register" style="color: #52c41a;">Зарегистрируйтесь сейчас!</a></p>
            </div>
            
            <div id="login-error" class="error" style="display: none;"></div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('auth-page');
    
    // Обработчик для переключения видимости пароля
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Обработчик для кнопки входа
    document.getElementById('login-btn').addEventListener('click', async function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');
        
        if (!username || !password) {
            errorDiv.textContent = 'Пожалуйста, заполните все поля';
            errorDiv.style.display = 'block';
            return;
        }
        
        // Показываем загрузку
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';
        this.disabled = true;
        
        try {
            // Исправленный запрос к Supabase
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .maybeSingle();  // Используем maybeSingle вместо single
                
            if (error) {
                console.error('Supabase error:', error);
                errorDiv.textContent = 'Ошибка подключения к базе данных';
                errorDiv.style.display = 'block';
                return;
            }
            
            if (!data) {
                errorDiv.textContent = 'Пользователь не найден';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Проверка пароля
            if (data.password !== password) {
                errorDiv.textContent = 'Неверный пароль';
                errorDiv.style.display = 'block';
                return;
            }
            
            // Сохраняем пользователя
            localStorage.setItem('gly_user', JSON.stringify(data));
            
            // Обновляем приложение
            document.body.classList.remove('auth-page');
            window.showSection('home');
            
        } catch (error) {
            console.error('Login error:', error);
            errorDiv.textContent = 'Ошибка при входе. Попробуйте позже.';
            errorDiv.style.display = 'block';
        } finally {
            // Восстанавливаем кнопку
            this.innerHTML = originalText;
            this.disabled = false;
        }
    });

    // Обработчик для перехода на регистрацию
    document.getElementById('go-to-register').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('register');
    });
}
