module.exports = function (router) {
  router.get('/users', (req, res, next) => {
    const {offset = 0, limit = 5} = req.query
    if (req.isAdmin) {
      res.end(JSON.stringify({
        users: db.users.slice(offset, limit),
        total: db.users.length
      }))
    } else {
      res.statusCode = 403
      res.end()
    }
    next()
  })
}