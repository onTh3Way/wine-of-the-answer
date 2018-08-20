import 'less/global'
import VueRouter from 'vue-router'
import App from './App'
import { eventBus, service } from './middlewares'
import { Category, BBS } from 'router'
import Particulars from 'router/Particulars'
import MyTroubles from 'router/MyTroubles'
import ParticularAll from 'router/ParticularAll'

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(service)
if (process.env.NODE_ENV === 'development') Vue.config.performance = true

// 配置你自己的路由
const routes = [
  {path: '/', component: Category}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => <App />
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$service.request.cancel()
  next()
})
