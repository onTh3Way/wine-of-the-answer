import App from './App'

Vue.prototype.$http = axios

new Vue({
	el: '#root',
	render: h => h(App)
})
