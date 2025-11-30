// Register section
export default function renderRegister() {
    return `
        <div class="register-section">
            <div class="auth-container">
                <!-- Логотип -->
                <div class="auth-logo">
                    <img src="assets/logo.png" alt="Logo">
                </div>

                <!-- Форма регистрации -->
                <div class="auth-form">
                    <div class="auth-title">
                        <h1>Привет</h1>
                        <p>Добро пожаловать в QCF</p>
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-username">Имя пользователя</label>
                        <input type="text" id="reg-username" placeholder="Введите имя пользователя">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Почта</label>
                        <input type="email" id="email" placeholder="Введите вашу почту">
                    </div>
                    
                    <div class="form-group">
                        <label for="reg-password">Пароль</label>
                        <input type="password" id="reg-password" placeholder="Введите пароль">
                        <button class="password-toggle" id="toggle-reg-password" type="button">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirm-password">Подтвердить пароль</label>
                        <input type="password" id="confirm-password" placeholder="Подтвердите пароль">
                        <button class="password-toggle" id="toggle-confirm-password" type="button">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    
                    <div class="form-group">
                        <label for="payment-password">Пароль платежа</label>
                        <input type="password" id="payment-password" placeholder="Введите платежный пароль">
                        <button class="password-toggle" id="toggle-payment-password" type="button">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    
                    <div class="form-group">
                        <label for="invite-code">Пригласительный код (необязательно)</label>
                        <input type="text" id="invite-code" placeholder="Введите пригласительный код">
                    </div>
                    
                    <button id="register-btn" class="auth-button">Зарегистрироваться</button>
                    
                    <div class="auth-link">
                        <p>Уже есть аккаунт? <a href="#" id="go-to-login">Войдите сейчас!</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Добавляем класс к body для auth страниц
    document.body.classList.add('auth-page');
    
    // Обработчики для переключения видимости паролей
    document.getElementById('toggle-reg-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('reg-password');
        const icon = this.querySelector('i');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    document.getElementById('toggle-confirm-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('confirm-password');
        const icon = this.querySelector('i');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    document.getElementById('toggle-payment-password').addEventListener('click', function() {
        const passwordInput = document.getElementById('payment-password');
        const icon = this.querySelector('i');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    // Обработчик для кнопки регистрации
    document.getElementById('register-btn').addEventListener('click', function() {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const paymentPassword = document.getElementById('payment-password').value;
        const inviteCode = document.getElementById('invite-code').value;
        
        if (!username || !email || !password || !confirmPassword || !paymentPassword) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }
        
        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов');
            return;
        }
        
        // Здесь будет логика регистрации
        alert('Регистрация успешна!');
        document.body.classList.remove('auth-page');
        window.showSection('login');
    });

    // Обработчик для перехода на вход
    document.getElementById('go-to-login').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.remove('auth-page');
        window.showSection('login');
    });
}
