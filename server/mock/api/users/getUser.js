module.exports = function (app, path) {
  app.get(`${path}/:userId`, (req, res, next) => {
    const {userId} = req.params
    const user = dbUtils.findUser(userId)
    if (user) {
      res.end(JSON.stringify(user))
    } else {
      res.statusCode = 404
      res.end()
    }
    next()
  })
}