module.exports = function (app) {
  app.delete(`/posts/:postId`, (req, res, next) => {
    const {postId} = req.params

    if (index === -1) {
      res.statusCode = 404
    } else if (!req.isAdmin) {
      res.statusCode = 403
    } else {
      res.statusCode = 204
      dbUtils.remove(postId)
    }

    res.end()
    next()
  })
}