<template>
    <view class="login-container">
        <view class="login-header">
            <view class="logo-section">
                <text class="app-logo">💰</text>
                <text class="app-name">Finance App</text>
                <text class="app-slogan">Инвестируй и зарабатывай</text>
            </view>
        </view>

        <view class="login-form">
            <view class="form-title">
                <text class="title-text">Вход в аккаунт</text>
                <text class="title-subtext">Введите ваши данные для входа</text>
            </view>

            <view class="input-group">
                <view class="input-item">
                    <text class="input-label">Email или телефон</text>
                    <input 
                        class="input-field" 
                        type="text" 
                        placeholder="Введите email или телефон"
                        v-model="loginForm.username"
                    />
                </view>

                <view class="input-item">
                    <text class="input-label">Пароль</text>
                    <input 
                        class="input-field" 
                        type="password" 
                        placeholder="Введите пароль"
                        v-model="loginForm.password"
                    />
                </view>
            </view>

            <view class="form-options">
                <view class="remember-me">
                    <label class="checkbox-label">
                        <input type="checkbox" v-model="rememberMe" class="checkbox-input" />
                        <text class="checkbox-text">Запомнить меня</text>
                    </label>
                </view>
                <text class="forgot-password" @click="goToForgotPassword">Забыли пароль?</text>
            </view>

            <view class="login-button" @click="handleLogin">
                <text class="login-button-text">Войти</text>
            </view>

            <view class="social-login">
                <text class="social-divider">Или войдите через</text>
                <view class="social-buttons">
                    <view class="social-btn">
                        <text class="social-icon">📱</text>
                        <text class="social-text">Google</text>
                    </view>
                    <view class="social-btn">
                        <text class="social-icon">📘</text>
                        <text class="social-text">Facebook</text>
                    </view>
                </view>
            </view>

            <view class="register-link">
                <text class="register-text">Нет аккаунта? </text>
                <text class="register-link-text" @click="goToRegister">Зарегистрироваться</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rememberMe: false
        }
    },
    methods: {
        handleLogin() {
            if (!this.loginForm.username || !this.loginForm.password) {
                uni.showToast({
                    title: 'Заполните все поля',
                    icon: 'none'
                });
                return;
            }

            // Симуляция входа
            uni.showLoading({
                title: 'Вход...'
            });

            setTimeout(() => {
                uni.hideLoading();
                uni.switchTab({
                    url: '/pages/index/index'
                });
            }, 1500);
        },
        goToForgotPassword() {
            uni.navigateTo({
                url: '/pages/forgot-password/forgot-password'
            });
        },
        goToRegister() {
            uni.navigateTo({
                url: '/pages/register/register'
            });
        }
    }
}
</script>

<style>
.login-container {
    padding: 40rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.login-header {
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

.login-form {
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

.input-group {
    margin-bottom: 40rpx;
}

.input-item {
    margin-bottom: 30rpx;
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

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40rpx;
}

.remember-me {
    display: flex;
    align-items: center;
}

.checkbox-label {
    display: flex;
    align-items: center;
}

.checkbox-input {
    margin-right: 10rpx;
}

.checkbox-text {
    font-size: 24rpx;
    color: #e3e3e3;
}

.forgot-password {
    font-size: 24rpx;
    color: #4e7771;
}

.login-button {
    background: #4e7771;
    border-radius: 25rpx;
    padding: 25rpx;
    text-align: center;
    margin-bottom: 40rpx;
}

.login-button-text {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
}

.social-login {
    margin-bottom: 40rpx;
}

.social-divider {
    font-size: 24rpx;
    color: #b2b2b2;
    text-align: center;
    display: block;
    margin-bottom: 25rpx;
    position: relative;
}

.social-divider:before,
.social-divider:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1rpx;
    background: rgba(255,255,255,0.2);
}

.social-divider:before {
    left: 0;
}

.social-divider:after {
    right: 0;
}

.social-buttons {
    display: flex;
    justify-content: center;
    gap: 30rpx;
}

.social-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20rpx 30rpx;
    background: rgba(255,255,255,0.1);
    border-radius: 15rpx;
    min-width: 120rpx;
}

.social-icon {
    font-size: 32rpx;
    margin-bottom: 10rpx;
}

.social-text {
    font-size: 22rpx;
    color: #e3e3e3;
}

.register-link {
    text-align: center;
}

.register-text {
    font-size: 26rpx;
    color: #e3e3e3;
}

.register-link-text {
    font-size: 26rpx;
    color: #4e7771;
    font-weight: bold;
}
</style>
