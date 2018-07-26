import 'less/global'
import VueRouter from 'vue-router'
import App from './App'
import service from './service'
import EventBus from 'middlewares/eventBus'

Vue.use(VueRouter)
Vue.use(service)
Vue.use(EventBus)

Vue.prototype.$http = axios

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
