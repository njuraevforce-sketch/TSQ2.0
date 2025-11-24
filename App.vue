<script>
export default {
    onLaunch: function() {
        console.log('App Launch');
        // Проверка авторизации
        this.checkAuth();
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    },
    methods: {
        checkAuth() {
            // Проверка токена авторизации
            const token = uni.getStorageSync('userToken');
            if (!token) {
                uni.redirectTo({
                    url: '/pages/login/login'
                });
            }
        }
    }
}
</script>

<style>
/* Общие стили */
page {
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

/* Импорт общих стилей из вашего CSS */
@import url('./common/style.css');
</style>
