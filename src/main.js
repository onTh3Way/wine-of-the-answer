import App from './App'
import 'less/global'
import 'utils/rem.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
