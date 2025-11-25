import { createApp } from 'vue'
import App from './App.vue'

// Имитация uni-app API
const uni = {
  navigateTo: (options) => {
    window.location.hash = options.url
  },
  navigateBack: () => {
    window.history.back()
  },
  switchTab: (options) => {
    window.location.hash = options.url
  },
  redirectTo: (options) => {
    window.location.replace('#' + options.url)
  },
  showToast: (options) => {
    alert(options.title)
  },
  showLoading: (options) => {
    console.log('Loading:', options.title)
  },
  hideLoading: () => {
    console.log('Hide loading')
  },
  showModal: (options) => {
    if (confirm(options.content)) {
      options.success && options.success({ confirm: true })
    } else {
      options.success && options.success({ confirm: false })
    }
  },
  setClipboardData: (options) => {
    navigator.clipboard.writeText(options.data).then(() => {
      options.success && options.success()
    })
  }
}

// Глобальные переменные
window.uni = uni

const app = createApp(App)
app.mount('#app')
