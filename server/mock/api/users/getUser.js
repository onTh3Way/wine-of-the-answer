module.exports = function (router) {
  router.get(`/users/:userId`, (req, res, next) => {
    const {userId} = req.params
    const user = dbUtils.findUser(userId)
    if (user) {
      res.statusCode = 200
      res.end(JSON.stringify(user))
    } else {
      res.statusCode = 404
      res.end()
    }
    next()
  })
}