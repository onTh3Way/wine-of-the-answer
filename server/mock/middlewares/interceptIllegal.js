module.exports = (req, res, next) => {
  if (req.method !== 'GET' && !req.isAdmin) {
    const {isAgreeProtocol, isFrozen} = req.user
    let err
    if (!isAgreeProtocol && req.method === 'POST') {
      err = {
        code: 0,
        msg: 'no agree protocol'
      }
    } else if (isFrozen) {
      err = {
        code: 1,
        msg: 'user is frozen'
      }
    }

    if (err) {
      res.statusCode = 403
      res.end(JSON.stringify(err))
      return
    }
  }

  next()
}