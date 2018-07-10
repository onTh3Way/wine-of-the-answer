module.exports = function (app, path) {
  app.post(`${path}/:userId`, (req, res, next) => {
    const {userId} = req.params
    const user = db.users.find(user => user.userId === userId)
    res.statusCode = user ? 204 : 404
    if (user) user.agreeProtocol = true
    res.end()
    next()
  })
}