module.exports = function (app, path) {
  app.get(path, (req, res, next) => {
    const {postId, sort, offset = 0, limit = 5} = req.query

    if (Number.isNaN(+offset) || Number.isNaN(+limit)) {
      res.statusCode = 400
      res.end()
      return
    }

    let comments = db.comments.slice(0)
    if (postId) comments = comments.filter(c => c.postId === postId)
    sort === 'date'
      ? comments.sort((a, b) => b.createDate - a.createDate)
      : comments.sort((a, b) => b.agreeCount - a.agreeCount)

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      comments: comments.slice(offset, limit),
      total: comments.length
    }))
    next()
  })
}