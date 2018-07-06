import 'less/global'
import App from './App'

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'development') Vue.config.performance = true

new Vue({
  el: '#root',
  render: h => h(App)
})

// wx.ready(() => {
//   console.log('ok')
// })
//
// wx.error((err) => {
//   console.dir(err)
// })
//
// axios
//   .get('/config')
//   .then(res => {
//     const {noncestr, timestamp, signature} = res.data
//     wx.config({
//       debug: true,
//       appId: 'wxfc3404099806c7e5',
//       noncestr,
//       timestamp,
//       signature,
//       jsApiList: ['showAllNonBaseMenuItem']
//     })
//   })
//
// wx.showAllNonBaseMenuItem()
