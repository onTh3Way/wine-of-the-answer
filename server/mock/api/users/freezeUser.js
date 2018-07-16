module.exports = function (app) {
  app.delete(`/users/:userId`, (req, res, next) => {
    const {freezeTime} = req.query
    if (req.user) {
      req.user.freezeTime += freezeTime
      dbUtils.save()
    }
    else {
      res.statusCode = 404
    }
    res.end()
    next()
  })
}