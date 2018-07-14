module.exports = function (app) {
  app.get('/posts/:postId', (req, res, next) => {
    const {postId} = req.params
    const result = dbUtils.findPost(postId)

    if (result && dbUtils.findUser(result.author.id).freezeTime > Date.now() && !req.isAdmin) {
      res.statusCode = 403
      res.end()
    } else {
      res.statusCode = result ? 200 : 404
      res.end(JSON.stringify(result))
    }
    next()
  })
}