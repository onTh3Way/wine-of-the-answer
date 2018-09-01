module.exports = function (router) {
  router.post('/:category/posts', (req, res, next) => {
    const {category} = req.params
    const {content, anonymous} = req.body

    if (!content) {
      res.statusCode = 400
    } else if (!db.parts.includes(category)) {
      res.statusCode = 404
    } else {
      res.statusCode = 200
      dbUtils.insertPost({
        userId: req.user.id,
        category,
        content,
        anonymous
      })
      res.end(JSON.stringify(db.posts[db.posts.length - 1]))
    }

    next()
  })

  router.post('/posts/:id/comments', (req, res, next) => {
    const id = +req.params.id
    const {content, anonymous = false} = req.body

    if (!content) {
      res.statusCode = 400
      res.end(JSON.stringify({
        code: 0,
        msg: 'no null content'
      }))
    } else if (!dbUtils.findPost(id)) {
      res.statusCode = 404
    } else {
      res.statusCode = 200
      dbUtils.insertComment({
        userId: req.user.id,
        postId: id,
        content,
        anonymous
      })
      res.end(JSON.stringify(db.comments[db.comments.length - 1]))
    }

    next()
  })

  router.post('/comments/:id/replies', (req, res, next) => {
    const id = +req.params.id
    const {content, receiverReplyId, anonymous = false} = req.body

    if (!content) {
      res.statusCode = 400
      res.end(JSON.stringify({
        code: 0,
        msg: 'no null content'
      }))
    } else if (!dbUtils.findComment(id)) {
      res.statusCode = 404
    } else if (receiverReplyId && !dbUtils.findReply(receiverReplyId)) {
      res.statusCode = 400
      res.end(JSON.stringify({
        code: 1,
        msg: 'receiver is not exist'
      }))
    } else if (receiverReplyId && dbUtils.findReply(receiverReplyId).author.id === req.user.id) {
      res.statusCode = 400
      res.end(JSON.stringify({
        code: 2,
        msg: 'cannot reply self'
      }))
    } else {
      res.statusCode = 200
      dbUtils.insertReply({
        senderId: req.user.id,
        commentId: id,
        receiverReplyId,
        content,
        anonymous
      })
      res.end(JSON.stringify(db.replies[db.replies.length - 1]))
    }

    next()
  })
}