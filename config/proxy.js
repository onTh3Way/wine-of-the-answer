module.exports = {
  '/': {
    target: 'http://120.79.60.153',
    bypass (req) {
      const regex = /\.\D*$/
      if (regex.test(req.url)) {
        return req.url
      }
    }
  }
}