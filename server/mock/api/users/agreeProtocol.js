module.exports = function (app, path) {
  app.put(`${path}/:userId/protocol`, (req, res, next) => {
    const {userId} = req.params
    const user = dbUtils.findUser(userId)
    if (user) {
      res.statusCode = req.isUserSelf ? 204 : 403
      if (res.statusCode === 204) user.isAgreeProtocol = true
      dbUtils.save()
    } else {
      res.statusCode = 404
    }
    res.end()
    next()
  })
}