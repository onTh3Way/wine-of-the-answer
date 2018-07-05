import App from './App'
import 'less/global'

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#root',
  render: h => h(App)
})

// 添加图片后缀自动补全,图片压缩
