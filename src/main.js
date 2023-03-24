import Vue from 'vue'
import App from './App.vue'
/* 引入路由 */
import router from './router'
import store from './store'

/* 全局组件 */
import TypeNav from '@/views/Home/TypeNav'

Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  /* 注册 */
  router,
  store,
  render: h => h(App)
}).$mount('#app')
