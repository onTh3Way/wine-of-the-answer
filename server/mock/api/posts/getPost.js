module.exports = function (app, path) {
  app.get(`${path}/:postId`, (req, res, next) => {
    const postId = req.params.postId
    let result
    for (const post of db.posts) {
      if (post.postId === postId) {
        result = JSON.stringify(filterPost(post))
        break
      }
    }
    if (!result) res.statusCode = 404
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.end(result)
    next()
  })
}