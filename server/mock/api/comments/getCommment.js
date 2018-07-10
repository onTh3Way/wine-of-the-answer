module.exports = function (app, path) {
  app.get(`${path}/:commentId`, (req, res, next) => {
    const {commentId} = req.params
    const comment = db.comments.find(comment => comment.commentId === commentId)
    res.statusCode = comment ? 200 : 404
    res.end(JSON.stringify(comment))
    next()
  })
}