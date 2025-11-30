// Login section
export default function renderLogin() {
    return `
        <!-- Логотип -->
        <div class="padding" style="padding-top: 30px; padding-bottom: 0;">
            <img src="assets/logo.png" alt="Logo" style="width: 60px; height: 60px; border-radius: 10px;">
        </div>

        <!-- Форма входа -->
        <div class="card padding" style="margin-top: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin-bottom: 10px;">Привет</h2>
                <p style="color: #ccc;">Добро пожаловать в QCF</p>
            </div>
            
            <div style="margin-bottom: 15px;">
                <input type="text" id="username" placeholder="Имя пользователя" 
                       style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; background: rgba(255,255,255,0.9);">
            </div>
            
            <div style="margin-bottom: 15px; position: relative;">
                <input type="password" id="password" placeholder="Пароль" 
                       style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; background: rgba(255,255,255,0.9);">
                <i class="fas fa-eye" id="toggle-password" style="position: absolute; right: 10px; top: 12px; color: #4e7771; cursor: pointer;"></i>
            </div>
            
            <button id="login-btn" class="pro-btn" style="width: 100%; background: #4e7771; color: white; border: none; padding: 12px; border-radius: 5px; font-size: 16px; cursor: pointer;">Авторизация</button>
            
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
