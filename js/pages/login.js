const LoginPage = {
    data() {
        return {
            username: '',
            password: '',
            remember: false
        }
    },
    template: `
        <div class="page login-page">
            <u-navbar title="登录" bgColor="#4e7771"></u-navbar>
            <div class="page-content">
                <div class="login-form">
                    <div class="form-group">
                        <input type="text" v-model="username" placeholder="请输入用户名" class="form-input">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" placeholder="请输入密码" class="form-input">
                    </div>
                    <button class="login-btn" @click="handleLogin">登录</button>
                    <div class="login-links">
                        <span @click="goToRegister">立即注册</span>
                        <span @click="goToForget">忘记密码</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        handleLogin() {
            // Логика входа
            console.log('Login:', this.username, this.password);
        },
        goToRegister() {
            router.navigateTo('/pages/register/index');
        },
        goToForget() {
            router.navigateTo('/pages/login/forget');
        }
    }
};
