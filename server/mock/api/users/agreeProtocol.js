module.exports = function (router) {
  router.put(['/users/:userId/protocol/BBS', '/users/:userId/protocol/teasing'], (req, res, next) => {
    const {token} = req.headers.cookies
    const user = dbUtils.findUser(req.params.userId)

    if (user) {
      res.statusCode = dbUtils.findUserByToken(token) === user ? 204 : 403
      if (res.statusCode === 204) user.isAgreeProtocol = true
      dbUtils.save()
    } else {
      res.statusCode = 404
    }

    res.end()
    next()
  })
}