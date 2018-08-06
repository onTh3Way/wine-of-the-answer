// 全局样式
import 'less/global'
// 使旧浏览器兼容新api
import './polyfill'
import VueRouter from 'vue-router'
import App from './App'
import { eventBus, service, transitionCssModule } from './middlewares'

// 路由
Vue.use(VueRouter)
// 事件分发器,无须自己卸载事件
Vue.use(eventBus)
// 网络请求层
Vue.use(service)
Vue.use(transitionCssModule)

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

// 路由配置表
// 如何配置详情见: https://router.vuejs.org/zh/
const routes = []

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => <App />
})

// 路由跳转时取消所有网络请求
router.beforeEach((to, from, next) => {
  Vue.prototype.$service.request.cancel()
  next()
})
