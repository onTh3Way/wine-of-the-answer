import 'less/global'
import VueRouter from 'vue-router'
import App from './App'
import { eventBus, service } from './middlewares'

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(service)

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

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

router.beforeEach((to, from, next) => {
  Vue.prototype.$service.request.cancel()
  next()
})
