function validate (body) {
  const {userId, content, part} = body

  return !(!userId || !content || !part || !parts.includes(part))
}

module.exports = function (app, path) {
  app.post(path, (req, res, next) => {
    const {userId, content, part, anonymous} = req.body

    if (!validate(req.body)) {
      res.statusCode = 400
      res.end()
      return
    }

    const user = db.users.find(user => user.userId === userId)

    res.statusCode = !user
      ? 401
      : !user.agreeProtocol
        ? 460
        : user.freezeTime > Date.now()
          ? 461
          : 204

    if (res.statusCode === 204) {
      db.posts.push(createPost({
        userId: user.userId,
        content,
        part,
        anonymous
      }))
    }

    res.end()
    next()
  })
}