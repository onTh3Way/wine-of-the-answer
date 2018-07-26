import { request } from './utils'
import { login } from './api'

export default function service (Vue) {
  Vue.prototype.$service = {
    request,
    login
  }

  window.service = Vue.prototype.$service
}
