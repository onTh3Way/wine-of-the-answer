module.exports = function (app) {
  app.post(`/posts/:postId/report`, (req, res, next) => {
    const {postId} = req.params
    const {reason} = req.body

    if (!reason) {
      res.statusCode = 400
    } else if (!db.posts.find(post => post.postId === postId)) {
      res.statusCode = 404
    } else {
      res.statusCode = 204
      db.postReports.push({
        userId: req.user.id,
        postId,
        reason
      })
      dbUtils.save()
    }

    res.end()
    next()
  })
}