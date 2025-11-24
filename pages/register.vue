<template>
    <view class="register-container">
        <view class="register-header">
            <view class="logo-section">
                <text class="app-logo">💰</text>
                <text class="app-name">Finance App</text>
                <text class="app-slogan">Начните зарабатывать сегодня</text>
            </view>
        </view>

        <view class="register-form">
            <view class="form-title">
                <text class="title-text">Регистрация</text>
                <text class="title-subtext">Создайте новый аккаунт</text>
            </view>

            <view class="ref-code-section" v-if="referralCode">
                <view class="ref-code-badge">
                    <text class="ref-code-text">Реферальный код: {{ referralCode }}</text>
                </view>
            </view>

            <view class="input-group">
                <view class="input-item">
                    <text class="input-label">Имя</text>
                    <input 
                        class="input-field" 
                        type="text" 
                        placeholder="Введите ваше имя"
                        v-model="registerForm.name"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Email</text>
                    <input 
                        class="input-field" 
                        type="email" 
                        placeholder="Введите email"
                        v-model="registerForm.email"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Телефон</text>
                    <input 
                        class="input-field" 
                        type="tel" 
                        placeholder="Введите телефон"
                        v-model="registerForm.phone"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Пароль</text>
                    <input 
                        class="input-field" 
                        type="password" 
                        placeholder="Создайте пароль"
                        v-model="registerForm.password"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Подтвердите пароль</text>
                    <input 
                        class="input-field" 
                        type="password" 
                        placeholder="Повторите пароль"
                        v-model="registerForm.confirmPassword"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Реферальный код (необязательно)</text>
                    <input 
                        class="input-field" 
                        type="text" 
                        placeholder="Введите код приглашения"
                        v-model="registerForm.refCode"
                    />
                </view>
            </view>

            <view class="agreement-section">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="agreeTerms" class="checkbox-input" />
                    <text class="checkbox-text">Я согласен с </text>
                    <text class="link-text" @click="showTerms">условиями использования</text>
                    <text class="checkbox-text"> и </text>
                    <text class="link-text" @click="showPrivacy">политикой конфиденциальности</text>
                </label>
            </view>

            <view class="register-button" @click="handleRegister" :class="{ 'register-button-disabled': !agreeTerms }">
                <text class="register-button-text">Зарегистрироваться</text>
            </view>

            <view class="login-link">
                <text class="login-text">Уже есть аккаунт? </text>
                <text class="login-link-text" @click="goToLogin">Войти</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            registerForm: {
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                refCode: ''
            },
            agreeTerms: false,
            referralCode: null
        }
    },
    onLoad(options) {
        // Получаем реферальный код из URL
        if (options.ref) {
            this.referralCode = options.ref;
            this.registerForm.refCode = options.ref;
        }
    },
    methods: {
        handleRegister() {
            if (!this.agreeTerms) {
                uni.showToast({
                    title: 'Примите условия использования',
                    icon: 'none'
                });
                return;
            }

            if (!this.registerForm.name || !this.registerForm.email || !this.registerForm.password) {
                uni.showToast({
                    title: 'Заполните обязательные поля',
                    icon: 'none'
                });
                return;
            }

            if (this.registerForm.password !== this.registerForm.confirmPassword) {
                uni.showToast({
                    title: 'Пароли не совпадают',
                    icon: 'none'
                });
                return;
            }

            // Симуляция регистрации
            uni.showLoading({
                title: 'Регистрация...'
            });

            setTimeout(() => {
                uni.hideLoading();
                uni.showToast({
                    title: 'Регистрация успешна!',
                    icon: 'success'
                });
                
                setTimeout(() => {
                    uni.switchTab({
                        url: '/pages/index/index'
                    });
                }, 1500);
            }, 2000);
        },
        showTerms() {
            uni.navigateTo({
                url: '/pages/terms/terms'
            });
        },
        showPrivacy() {
            uni.navigateTo({
                url: '/pages/privacy/privacy'
            });
        },
        goToLogin() {
            uni.navigateBack();
        }
    }
}
</script>

<style>
.register-container {
    padding: 40rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.register-header {
    text-align: center;
    margin-bottom: 60rpx;
    margin-top: 40rpx;
}

.app-logo {
    font-size: 80rpx;
    display: block;
    margin-bottom: 20rpx;
}

.app-name {
    font-size: 42rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 10rpx;
}

.app-slogan {
    font-size: 28rpx;
    color: #e3e3e3;
}

.register-form {
    flex: 1;
}

.form-title {
    text-align: center;
    margin-bottom: 50rpx;
}

.title-text {
    font-size: 36rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 10rpx;
}

.title-subtext {
    font-size: 28rpx;
    color: #b2b2b2;
}

.ref-code-section {
    margin-bottom: 30rpx;
}

.ref-code-badge {
    background: rgba(78, 119, 113, 0.3);
    border: 2rpx solid #4e7771;
    border-radius: 10rpx;
    padding: 20rpx;
    text-align: center;
}

.ref-code-text {
    font-size: 24rpx;
    color: #4e7771;
    font-weight: bold;
}

.input-group {
    margin-bottom: 40rpx;
}

.input-item {
    margin-bottom: 25rpx;
}

.input-label {
    font-size: 26rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 15rpx;
}

.input-field {
    background: rgba(255,255,255,0.1);
    border-radius: 15rpx;
    padding: 25rpx;
    font-size: 28rpx;
    color: #fff;
    border: 2rpx solid transparent;
}

.input-field:focus {
    border-color: #4e7771;
}

.input-field::placeholder {
    color: #b2b2b2;
}

.agreement-section {
    margin-bottom: 40rpx;
}

.checkbox-label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 24rpx;
}

.checkbox-input {
    margin-right: 10rpx;
}

.checkbox-text {
    color: #e3e3e3;
}

.link-text {
    color: #4e7771;
}

.register-button {
    background: #4e7771;
    border-radius: 25rpx;
    padding: 25rpx;
    text-align: center;
    margin-bottom: 30rpx;
}

.register-button-disabled {
    background: #545c66;
    opacity: 0.7;
}

.register-button-text {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
}

.login-link {
    text-align: center;
}

.login-text {
    font-size: 26rpx;
    color: #e3e3e3;
}

.login-link-text {
    font-size: 26rpx;
    color: #4e7771;
    font-weight: bold;
}
</style>
