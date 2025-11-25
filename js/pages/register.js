export function render() {
    return `
        <div class="page">
            <div style="text-align: center; margin: 40px 0;">
                <div style="font-size: 3em; margin-bottom: 20px;">💰</div>
                <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px;">Finance App</div>
                <div style="color: #e3e3e3;">Начните зарабатывать сегодня</div>
            </div>

            <div style="margin: 40px 0;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 10px;">Регистрация</div>
                    <div style="color: #b2b2b2;">Создайте новый аккаунт</div>
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="margin-bottom: 8px;">Имя</div>
                    <input class="input-field" type="text" placeholder="Введите ваше имя" id="name">
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="margin-bottom: 8px;">Email</div>
                    <input class="input-field" type="email" placeholder="Введите email" id="email">
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="margin-bottom: 8px;">Телефон</div>
                    <input class="input-field" type="tel" placeholder="Введите телефон" id="phone">
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="margin-bottom: 8px;">Пароль</div>
                    <input class="input-field" type="password" placeholder="Создайте пароль" id="password">
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="margin-bottom: 8px;">Подтвердите пароль</div>
                    <input class="input-field" type="password" placeholder="Повторите пароль" id="confirmPassword">
                </div>

                <div style="margin-bottom: 20px;">
                    <div style="margin-bottom: 8px;">Реферальный код (необязательно)</div>
                    <input class="input-field" type="text" placeholder="Введите код приглашения" id="refCode">
                </div>

                <div style="margin-bottom: 30px;">
                    <label style="display: flex; align-items: flex-start;">
                        <input type="checkbox" id="agreeTerms" style="margin-right: 8px; margin-top: 3px;">
                        <span>Я согласен с <span class="link-text">условиями использования</span> и <span class="link-text">политикой конфиденциальности</span></span>
                    </label>
                </div>

                <button class="register-button" id="register-btn">Зарегистрироваться</button>

                <div style="text-align: center; margin-top: 30px;">
                    <span>Уже есть аккаунт? </span>
                    <span class="link-text" data-route="/login">Войти</span>
                </div>
            </div>
        </div>
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
