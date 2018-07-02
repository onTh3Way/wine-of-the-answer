import App from './App'
import T from '@/App'

console.log(T)

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
	el: '#root',
	render: h => h(App)
})
