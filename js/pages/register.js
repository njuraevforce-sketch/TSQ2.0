export function render() {
    return `
        <uni-view style="padding: 20px; min-height: 100vh;">
            <uni-view style="text-align: center; margin: 40px 0;">
                <uni-view style="font-size: 3em; margin-bottom: 20px;">💰</uni-view>
                <uni-view style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">Finance App</uni-view>
                <uni-text style="color: var(--UI-FG-1);">Начните зарабатывать сегодня</uni-text>
            </uni-view>

            <uni-view style="margin: 40px 0;">
                <uni-view style="text-align: center; margin-bottom: 30px;">
                    <uni-view style="font-size: 1.5em; font-weight: bold; margin-bottom: 10px;">Регистрация</uni-view>
                    <uni-text style="color: var(--UI-FG-1);">Создайте новый аккаунт</uni-text>
                </uni-view>

                <uni-view style="margin-bottom: 15px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Имя</uni-text>
                    <input class="input-field" type="text" placeholder="Введите ваше имя" id="name">
                </uni-view>

                <uni-view style="margin-bottom: 15px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Email</uni-text>
                    <input class="input-field" type="email" placeholder="Введите email" id="email">
                </uni-view>

                <uni-view style="margin-bottom: 15px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Телефон</uni-text>
                    <input class="input-field" type="tel" placeholder="Введите телефон" id="phone">
                </uni-view>

                <uni-view style="margin-bottom: 15px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Пароль</uni-text>
                    <input class="input-field" type="password" placeholder="Создайте пароль" id="password">
                </uni-view>

                <uni-view style="margin-bottom: 15px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Подтвердите пароль</uni-text>
                    <input class="input-field" type="password" placeholder="Повторите пароль" id="confirmPassword">
                </uni-view>

                <uni-view style="margin-bottom: 20px;">
                    <uni-text style="margin-bottom: 8px; display: block;">Реферальный код (необязательно)</uni-text>
                    <input class="input-field" type="text" placeholder="Введите код приглашения" id="refCode">
                </uni-view>

                <uni-view style="margin-bottom: 30px;">
                    <uni-label style="align-items: flex-start;">
                        <input type="checkbox" id="agreeTerms" style="margin-right: 8px; margin-top: 3px;">
                        <uni-text>Я согласен с <uni-text style="color: var(--UI-FG-0); cursor: pointer;">условиями использования</uni-text> и <uni-text style="color: var(--UI-FG-0); cursor: pointer;">политикой конфиденциальности</uni-text></uni-text>
                    </uni-label>
                </uni-view>

                <uni-button id="register-btn">Зарегистрироваться</uni-button>

                <uni-view style="text-align: center; margin-top: 30px;">
                    <uni-text>Уже есть аккаунт? </uni-text>
                    <uni-text style="color: var(--UI-FG-0); cursor: pointer;" data-route="/login">Войти</uni-text>
                </uni-view>
            </uni-view>
        </uni-view>
    `;
}

export function init() {
    document.getElementById('register-btn').addEventListener('click', handleRegister);
}

function handleRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!agreeTerms) {
        alert('Примите условия использования');
        return;
    }

    if (!name || !email || !password) {
        alert('Заполните обязательные поля');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }
    
    alert('Регистрация успешна!');
    setTimeout(() => {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
    }, 1000);
}
