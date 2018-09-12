// 全局样式
import 'less/global'
// 使旧浏览器兼容新api
import './polyfill'
import './middlewares'
import './utils'
import App from './App'
import Scroller from 'vue-scroller'
import router from 'router'

Vue.use(Scroller)

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

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
