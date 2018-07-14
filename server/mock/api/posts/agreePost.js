const agreed = {}

module.exports = function (app) {
  app.put('/posts/:postId/agreement', (req, res, next) => {
    const {postId} = req.params
    const userId = req.user.id
    const post = dbUtils.findPost(postId)

    if (!post) {
      res.statusCode = 404
    } else {
      res.statusCode = 204

      if (!agreed[userId]) agreed[userId] = new Set()

      if (!agreed[userId].has(postId)) {
        dbUtils.findPost(postId).agreeCount++
        dbUtils.save()
      }

      agreed[userId].add(postId)
    }

    res.end()
    next()
  })

  app.delete('/posts/:postId/agreement', (req, res, next) => {
    const {postId} = req.params
    const userId = req.user.id
    const post = dbUtils.findPost(postId)

    if (!post) {
      res.statusCode = 404
    } else {
      res.statusCode = 204

      if (!agreed[userId]) agreed[userId] = new Set()

      if (agreed[userId].has(postId)) {
        agreed[userId].delete(postId)
        dbUtils.findPost(postId).agreeCount--
        dbUtils.save()
      }
    }

    res.end()
    next()
  })
}