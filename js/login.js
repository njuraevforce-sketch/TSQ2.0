// Login section
export default function renderLogin() {
    return `
        <!-- Логотип -->
        <div class="padding" style="padding-top: 30px; padding-bottom: 0;">
            <img src="assets/logo.png" alt="Logo" style="width: 60px; height: 60px; border-radius: 10px;">
        </div>

        <!-- Форма входа -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin-bottom: 10px;">Привет</h2>
                <p style="color: #ccc;">Добро пожаловать в QCF</p>
            </div>
            
            <div style="margin-bottom: 25px;">
                <input type="text" id="username" placeholder="Имя пользователя" class="auth-input">
            </div>
            
            <div style="margin-bottom: 25px; position: relative;">
                <input type="password" id="password" placeholder="Пароль" class="auth-input">
                <i class="fas fa-eye" id="toggle-password" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); color: #4e7771; cursor: pointer; padding: 12px;"></i>
            </div>
            
            <button id="login-btn" class="auth-btn">
                Авторизация
            </button>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">Ещё нет аккаунта? <a href="#" id="go-to-register" style="color: #4e7771;">Зарегистрируйтесь сейчас!</a></p>
            </div>
        </div>
    `;
}

export function init() {
    // Добавляем класс к body для auth страниц
    document.body.classList.add('auth-page');
    
    // Обработчик для переключения видимости пароля
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Обработчик для кнопки входа
    document.getElementById('login-btn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        
        // Здесь будет логика входа
        alert('Вход выполнен!');
        document.body.classList.remove('auth-page');
        window.showSection('home');
    });

    // Обработчик для перехода на регистрацию
    document.getElementById('go-to-register').addEventListener('click', function(e) {
        e.preventDefault();
        window.showSection('register');
    });
}
