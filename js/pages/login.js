export function render() {
    return `
        <uni-view style="padding: 20px; min-height: 100vh;">
            <uni-view style="text-align: center; margin: 40px 0;">
                <uni-view style="font-size: 3em; margin-bottom: 20px;">💰</uni-view>
                <uni-view style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">Finance App</uni-view>
                <uni-text style="color: var(--UI-FG-1);">Инвестируй и зарабатывай</uni-text>
            </uni-view>

            <uni-view style="margin: 40px 0;">
                <uni-view style="text-align: center; margin-bottom: 30px;">
                    <uni-view style="font-size: 1.5em; font-weight: bold; margin-bottom: 10px;">Вход в аккаунт</uni-view>
                    <uni-text style="color: var(--UI-FG-1);">Введите ваши данные для входа</uni-text>
                </uni-view>

                <uni-view style="margin-bottom: 20px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Email или телефон</uni-text>
                    <input class="input-field" type="text" placeholder="Введите email или телефон" id="username">
                </uni-view>

                <uni-view style="margin-bottom: 20px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Пароль</uni-text>
                    <input class="input-field" type="password" placeholder="Введите пароль" id="password">
                </uni-view>

                <uni-view style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <uni-label>
                        <input type="checkbox" id="remember" style="margin-right: 8px;">
                        <uni-text>Запомнить меня</uni-text>
                    </uni-label>
                    <uni-text style="color: var(--UI-FG-0); cursor: pointer;">Забыли пароль?</uni-text>
                </uni-view>

                <uni-button id="login-btn">Войти</uni-button>

                <uni-view style="text-align: center; margin-top: 30px;">
                    <uni-text>Нет аккаунта? </uni-text>
                    <uni-text style="color: var(--UI-FG-0); cursor: pointer;" data-route="/register">Зарегистрироваться</uni-text>
                </uni-view>
            </uni-view>
        </uni-view>
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
