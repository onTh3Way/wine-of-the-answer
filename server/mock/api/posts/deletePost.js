module.exports = function (app, path) {
  app.delete(`${path}/:postId`, (req, res, next) => {
    const postId = req.params.postId
    const index = db.posts.findIndex((v) => v.postId === postId)
    
    res.statusCode = index === -1 ? 404 : 204
    if (index !== -1) db.posts.splice(index, 1)

    res.end()
    next()
  })
}