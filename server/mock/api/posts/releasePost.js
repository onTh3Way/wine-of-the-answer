module.exports = function (app) {
  app.post('/:part/posts', (req, res, next) => {
    const {part} = req.params
    const {content, anonymous} = req.body

    if (!content) {
      res.statusCode = 400
    } else if (!db.parts.includes(part)) {
      res.statusCode = 404
    } else {
      res.statusCode = 201
      dbUtils.insertPost({
        userId: req.user.id,
        content,
        part,
        anonymous,
      })
    }

    res.setHeader('Location', `${part}/posts/${db.posts.length - 1}`)

    res.end()
    next()
  })
}