<script>
export default {
    onLaunch: function() {
        console.log('App Launch');
        // Для демо пропускаем проверку авторизации
        console.log('Auth check skipped for demo');
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    }
}
</script>

<style>
/* Общие стили для всего приложения */
page, body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
    padding: 20rpx;
    min-height: 100vh;
}
</style>
