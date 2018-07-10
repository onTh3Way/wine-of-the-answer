module.exports = function (app, path) {
  app.post(`${path}/:postId`, (req, res, next) => {
    const {postId} = req.params
    const {userId, reason} = req.body

    // 参数不正确
    if (!userId || !reason) res.statusCode = 400
    // 找不到用户
    else if (!db.users.find(user => user.userId === userId)) res.statusCode = 401
    // 找不到帖子
    else if (!db.posts.find(post => post.postId === postId)) res.statusCode = 404
    // 通过
    else res.statusCode = 204

    db.postReports.push({
      userId,
      postId,
      reason
    })

    res.end()
    next()
  })
}