import App from './App'

Vue.prototype.$http = axios

console.log('测试状态')

new Vue({
	el: '#root',
	render: h => h(App)
})
