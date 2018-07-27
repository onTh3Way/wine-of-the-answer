import { request } from './utils'
import upperFirst from 'lodash/upperFirst'
import * as api from './api'

const resourceArr = ['post', 'comment', 'reply']
const resourcesArr = ['posts', 'comments', 'replies']
const ResourceArr = resourceArr.map(v => upperFirst(v))
const ResourcesArr = resourcesArr.map(v => upperFirst(v))

function extendAlias (target) {
  resourceArr.forEach((resource, i) => {
    const resources = resourcesArr[i]
    const Resource = ResourceArr[i]
    const Resources = ResourcesArr[i]

    target['get' + Resources] = (options, config) => api.getResources({
      type: resources,
      options,
      config
    })

    target['get' + Resource] = (id, config) => api.getResource({
      id,
      type: resources,
      config
    })

    target['release' + Resource] = (id, data, config) => api.releaseResource({
      id,
      data,
      type: resources,
      config
    })

    target['agree' + Resource] = (id, config) => api.evaluateResource({
      id,
      type: resources,
      isAgree: true,
      isCancel: false,
      config
    })

    target['cancelAgree' + Resource] = (id, config) => api.evaluateResource({
      id,
      type: resources,
      isAgree: true,
      isCancel: true,
      config
    })

    target['disagree' + Resource] = (id, config) => api.evaluateResource({
      id,
      type: resources,
      isAgree: false,
      isCancel: false,
      config
    })

    target['cancelDisagree' + Resource] = (id, config) => api.evaluateResource({
      id,
      type: resources,
      isAgree: false,
      isCancel: true,
      config
    })

    target['report' + Resource] = (id, reason, config) => api.reportResource({
      id,
      reason,
      type: resources,
      config
    })

    target['delete' + Resource] = (id, config) => api.deleteResource({
      id,
      type: resources,
      config
    })
  })

  return target
}

export default function service (Vue) {
  Vue.prototype.$service = {
    request,
    ...api
  }

  extendAlias(Vue.prototype.$service)

  window.service = Vue.prototype.$service
}
