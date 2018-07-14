module.exports = function (app, path) {
  app.delete(`${path}/:userId`, (req, res, next) => {
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