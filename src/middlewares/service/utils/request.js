const bus = new Vue()
const http = axios.create({
  timeout: 5000
})

const httpStatusMap = {
  200: 'ok',
  400: 'badRequest',
  401: 'noLogin',
  403: 'forbidden',
  404: 'notFound'
}

export default function request (config) {
  const listeners = {}

  const result = {
    noExist (cb) {
      listeners.noExist = cb
      return result
    }
  }

  http
    .request(config)
    .then(res => {

    })
    .catch(err => {
      if (err.response) {
        switch (err.response.status) {

        }
      } else {

      }
    })

  return result
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
