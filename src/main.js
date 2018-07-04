import App from './App'
<<<<<<< HEAD
import './utils/rem.js'
import 'less/global'
 
Vue.prototype.$http = axios
if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
	el: '#root',
	render: h => <App />
=======

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#root',
  render: h => h(App)
>>>>>>> origin/master
})
