import 'less/global'
import App from './App'

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#root',
  render: h => h(App)
})
