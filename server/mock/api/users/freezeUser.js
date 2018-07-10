module.exports = function (app, path) {
  app.delete(`${path}/:userId`, (req, res, next) => {
    const {userId} = req.params
    const {freezeTime} = req.query
    const user = db.users.find(user => user.userId === userId)
    res.statusCode = user ? 204 : 404
    if (user) user.freezeTime = freezeTime
    res.end()
    next()
  })
}