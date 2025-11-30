// Register section
export default function renderRegister() {
    return `
        <!-- Логотип -->
        <div class="padding" style="padding-top: 30px; padding-bottom: 0;">
            <img src="assets/logo.png" alt="Logo" style="width: 60px; height: 60px; border-radius: 10px;">
        </div>

        <!-- Форма регистрации -->
        <div class="card padding" style="margin-top: 20px; background: transparent; box-shadow: none;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin-bottom: 10px;">Привет</h2>
                <p style="color: #ccc;">Добро пожаловать в QCF</p>
            </div>
            
            <div class="input-container">
                <input type="text" id="reg-username" placeholder="Имя пользователя" class="input-line">
            </div>
            
            <div class="input-container">
                <input type="email" id="email" placeholder="Почта" class="input-line">
            </div>
            
            <div class="input-container">
                <input type="password" id="reg-password" placeholder="Пароль" class="input-line">
                <i class="fas fa-eye" id="toggle-reg-password" class="password-toggle"></i>
            </div>
            
            <div class="input-container">
                <input type="password" id="confirm-password" placeholder="Подтвердить пароль" class="input-line">
                <i class="fas fa-eye" id="toggle-confirm-password" class="password-toggle"></i>
            </div>
            
            <div class="input-container">
                <input type="password" id="payment-password" placeholder="Пароль платежа" class="input-line">
                <i class="fas fa-eye" id="toggle-payment-password" class="password-toggle"></i>
            </div>
            
            <div class="input-container">
                <input type="text" id="invite-code" placeholder="Пригласительный код" class="input-line">
            </div>
            
            <button id="register-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer; margin-top: 30px;">Зарегистрироваться</button>
            
            <div style="text-align: center; margin-top: 20px;">
                <p style="color: #ccc;">Уже есть аккаунт? <a href="#" id="go-to-login" style="color: #52c41a;">Войдите сейчас!</a></p>
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
