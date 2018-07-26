axios.defaults.timeout = 5000

export default function request (config) {
  const result = {
    noExist (cb) {
      cb.call(result)
      return result
    }
  }
  axios
    .request(config)
    .then(res => {

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
