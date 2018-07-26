import { EventCollector } from './'
import values from 'lodash/values'

const http = axios.create({
  timeout: 5000,
  validateStatus (status) {
    return status < 500
  }
})

const httpStatusMap = {
  200: 'ok',
  201: 'created',
  202: 'accepted',
  204: 'noContent',
  400: 'badRequest',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'notFound'
}

/**
 * @typedef {function} httpEventListen
 * @param {function} cb
 * @return {httpEventCollector}
 */

/**
 * @typedef {object} httpEventCollector
 * @property {httpEventListen} ok
 * @property {httpEventListen} created
 * @property {httpEventListen} accepted
 * @property {httpEventListen} noContent
 * @property {httpEventListen} badRequest
 * @property {httpEventListen} unauthorized
 * @property {httpEventListen} forbidden
 * @property {httpEventListen} notFound
 */

/**
 * @typedef {function} httpUploadMethod
 * @param {string} url
 * @param {*} data
 * @param {object} config
 * @return {httpEventCollector}
 */

/**
 * @typedef {function} httpMethod
 * @param {string} url
 * @param {object} config
 * @return {httpEventCollector}
 */

/**
 * @property {httpMethod} get
 * @property {httpMethod} delete
 * @property {httpMethod} head
 * @property {httpMethod} options
 * @property {httpUploadMethod} post
 * @property {httpUploadMethod} put
 * @property {httpUploadMethod} patch
 * @param  {object} config
 * @return {httpEventCollector}
 */
export default function request (config) {
  let collector = new EventCollector()
  collector.listen(values(httpStatusMap))
  collector.listen('networkError')

  http
    .request(config)
    .then(res => {
      collector.emit(httpStatusMap[res.status], res.data)
      collector = null
    })
    .catch(err => {
      collector.emit('networkError', err)
      collector = null
    })

  return collector.target
}

['get', 'delete', 'head', 'options'].forEach(method => {
  request[method] = function (url, config) {
    return request({
      url,
      method,
      ...config
    })
  }
})

;['post', 'put', 'patch'].forEach(method => {
  request[method] = function (url, data, config) {
    return request({
      url,
      method,
      data,
      ...config
    })
  }
})
