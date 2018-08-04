module.exports = (req, res, next) => {
  if (req.method !== 'GET' && !tokenMap[req.headers.cookies.token]) {
    res.statusCode = 403
    res.end(JSON.stringify({
      code: 2,
      msg: 'invalide token'
    }))
    return
  }

  next()
}