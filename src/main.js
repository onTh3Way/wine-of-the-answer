import App from './App'
import 'less/global'
import 'utils/rem.js'

Vue.prototype.$http = axios
if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#app',
  render: h => <App />
})
