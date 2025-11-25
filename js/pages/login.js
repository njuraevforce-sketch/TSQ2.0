export function render() {
    return `
        <div class="page">
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 3em; margin-bottom: 20px;">💰</div>
                <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">Finance App</div>
                <div style="color: #e3e3e3;">Инвестируй и зарабатывай</div>
            </div>

            <div style="margin: 40px 0;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 10px;">Вход в аккаунт</div>
                    <div style="color: #b2b2b2;">Введите ваши данные для входа</div>
                </div>

                <div style="margin-bottom: 20px;">
                    <div style="margin-bottom: 8px;">Email или телефон</div>
                    <input class="input-field" type="text" placeholder="Введите email или телефон" id="username">
                </div>

                <div style="margin-bottom: 20px;">
                    <div style="margin-bottom: 8px;">Пароль</div>
                    <input class="input-field" type="password" placeholder="Введите пароль" id="password">
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <label style="display: flex; align-items: center;">
                        <input type="checkbox" id="remember" style="margin-right: 8px;">
                        <span>Запомнить меня</span>
                    </label>
                    <div style="color: #4e7771; cursor: pointer;">Забыли пароль?</div>
                </div>

                <button class="login-button" id="login-btn">Войти</button>

                <div style="text-align: center; margin-top: 30px;">
                    <span>Нет аккаунта? </span>
                    <span class="link-text" data-route="/register">Зарегистрироваться</span>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.getElementById('login-btn').addEventListener('click', handleLogin);
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Заполните все поля');
        return;
    }
    
    alert('Вход выполнен!');
    setTimeout(() => {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
    }, 1000);
}
