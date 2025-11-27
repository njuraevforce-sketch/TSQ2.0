const RegisterPage = {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            inviteCode: '',
            agree: false
        }
    },
    template: `
        <div class="page register-page">
            <u-navbar title="注册" bgColor="#4e7771"></u-navbar>
            <div class="page-content">
                <div class="register-form">
                    <div class="form-group">
                        <input type="text" v-model="username" placeholder="请输入用户名" class="form-input">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" placeholder="请输入密码" class="form-input">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="confirmPassword" placeholder="请确认密码" class="form-input">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="inviteCode" placeholder="请输入邀请码(选填)" class="form-input">
                    </div>
                    <div class="form-agree">
                        <input type="checkbox" v-model="agree" id="agree">
                        <label for="agree">我已阅读并同意用户协议</label>
                    </div>
                    <button class="register-btn" @click="handleRegister">注册</button>
                    <div class="register-links">
                        <span @click="goToLogin">已有账号？立即登录</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        handleRegister() {
            // Логика регистрации
            console.log('Register:', this.username, this.password);
        },
        goToLogin() {
            router.navigateTo('/pages/login/index');
        }
    }
};
