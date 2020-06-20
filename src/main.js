import Vue from 'vue'
import App from './App.vue'
import BackToTop from 'vue-backtotop'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueHeadful from 'vue-headful'

Vue.use(BackToTop)
Vue.component('vue-headful', vueHeadful)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
