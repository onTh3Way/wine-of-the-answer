module.exports = function (router) {
  router.delete(`/users/:userId`, (req, res, next) => {
    const {freezeTime} = req.query
    if (req.user && req.isAdmin) {
      req.user.freezeTime = freezeTime
      dbUtils.save()
    } else {
      res.statusCode = 404
    }
    res.end()
    next()
  })
}