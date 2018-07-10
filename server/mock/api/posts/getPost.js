module.exports = function (app, path) {
  app.get(`${path}/:postId`, (req, res, next) => {
    const {postId} = req.params
    const result = findPost(postId)
    if (!result) res.statusCode = 404
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.end(result)
    next()
  })
}