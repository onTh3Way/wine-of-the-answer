module.exports = function (app, path) {
  app.post(path, (req, res, next) => {
    const {userId, postId, content, anonymous} = req.body

    if (
      !userId
      || !postId
      || !content
      || !findUser(userId)
      || !findPost(postId)
    ) {
      res.statusCode = 400
      res.end()
      return
    }

    const user = findUser(userId)

    res.statusCode = user.agreeProtocol
      ? user.freezeTime > Date.now()
        ? 461
        : 204
      : 460

    if (res.statusCode === 204) db.comments.push(dbUtils.insertComment({userId, postId, anonymous}))
    else if (res.statusCode === 460) res.statusMessage = 'user disagree protocol'
    else res.statusMessage = 'user is frozen'

    res.end()
    next()
  })
}