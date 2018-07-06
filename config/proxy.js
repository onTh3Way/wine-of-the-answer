module.exports = {
  '/': {
    target: 'http://120.79.60.153',
    bypass (req) {
      if (req.url.includes('.')) {
        return req.url
      }
    },
    headers: {host: 'http://localhost:3000'}
  }
}