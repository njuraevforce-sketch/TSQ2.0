// Login section
export default function renderLogin() {
    return `
        <div class="login-section">
            <div class="auth-container">
                <!-- Логотип -->
                <div class="auth-logo">
                    <img src="assets/logo.png" alt="Logo">
                </div>

                <!-- Форма входа -->
                <div class="auth-form">
                    <div class="auth-title">
                        <h1>Привет</h1>
                        <p>Добро пожаловать в QCF</p>
                    </div>
                    
                    <div class="form-group">
                        <label for="username">Имя пользователя</label>
                        <input type="text" id="username" placeholder="Введите имя пользователя">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input type="password" id="password" placeholder="Введите пароль">
                        <button class="password-toggle" id="toggle-password" type="button">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    
                    <button id="login-btn" class="auth-button">Авторизация</button>
                    
                    <div class="auth-link">
                        <p>Ещё нет аккаунта? <a href="#" id="go-to-register">Зарегистрируйтесь сейчас!</a></p>
                    </div>
                </div>
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
        const icon = this.querySelector('i');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
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
