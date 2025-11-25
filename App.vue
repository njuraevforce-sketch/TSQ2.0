<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('App mounted')
    // Простой роутинг для демонстрации
    this.handleRouting()
  },
  methods: {
    handleRouting() {
      const routes = {
        '/pages/index/index': 'IndexPage',
        '/pages/vip/vip': 'VipPage', 
        '/pages/team/team': 'TeamPage',
        '/pages/fund/fund': 'FundPage',
        '/pages/mine/mine': 'MinePage',
        '/pages/login/login': 'LoginPage',
        '/pages/register/register': 'RegisterPage'
      }
      
      const currentRoute = window.location.hash.replace('#', '') || '/pages/index/index'
      
      // Динамически загружаем компонент страницы
      this.loadPage(currentRoute)
      
      // Слушаем изменения hash
      window.addEventListener('hashchange', () => {
        const newRoute = window.location.hash.replace('#', '') || '/pages/index/index'
        this.loadPage(newRoute)
      })
    },
    
    async loadPage(route) {
      try {
        // Динамический импорт компонента
        const componentName = this.getComponentName(route)
        const module = await import(`./pages/${componentName.path}`)
        
        // Очищаем app и монтируем новый компонент
        const app = document.getElementById('app')
        app.innerHTML = ''
        
        const PageComponent = module.default
        const appInstance = createApp(PageComponent)
        appInstance.mount('#app')
        
      } catch (error) {
        console.error('Error loading page:', error)
        // Fallback на главную страницу
        window.location.hash = '/pages/index/index'
      }
    },
    
    getComponentName(route) {
      const routeMap = {
        '/pages/index/index': { path: 'index/index.vue', name: 'IndexPage' },
        '/pages/vip/vip': { path: 'vip/vip.vue', name: 'VipPage' },
        '/pages/team/team': { path: 'team/team.vue', name: 'TeamPage' },
        '/pages/fund/fund': { path: 'fund/fund.vue', name: 'FundPage' },
        '/pages/mine/mine': { path: 'mine/mine.vue', name: 'MinePage' },
        '/pages/login/login': { path: 'login/login.vue', name: 'LoginPage' },
        '/pages/register/register': { path: 'register/register.vue', name: 'RegisterPage' }
      }
      return routeMap[route] || routeMap['/pages/index/index']
    }
  }
}
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #4e7771;
  color: #fff;
}

#app {
  min-height: 100vh;
}

/* Стили для мобильных устройств */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>
