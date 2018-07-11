module.exports = function (app, path) {
  app.delete(`${path}/:commentId`, (req, res, next) => {
    const comment = findComment(req.params.commentId)
    res.statusCode = comment ? 204 : 404
    if (res.statusCode === 204) db.comments.splice(db.comments.indexOf(comment), 1)
    res.end()
    next()
  })
}
