module.exports = function (router) {
  router.post('/:part/posts', (req, res, next) => {
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
        part,
        content,
        anonymous
      })
    }

    res.end()
    next()
  })

  router.post('/:partResources/:id/:resources', (req, res, next) => {
    const {partResources, resources} = req.params
    const id = +req.params.id

    if (resourceList.resources.includes(partResources) && resourceList.resources.includes(resources)) {
      const partResource = db[partResources].find(v => v.id === id)
      const {receiverReplyId, content, anonymous} = req.body
      let err

      if (!content) {
        res.statusCode = 400
        err = {
          code: 0,
          msg: 'no null content'
        }
      } else if (resources === 'replies' && receiverReplyId && !dbUtils.findReply(receiverReplyId)) {
        res.statusCode = 400
        err = {
          code: 1,
          msg: 'receiver is not exist'
        }
      } else if (resources === 'replies' && receiverReplyId && dbUtils.findReply(receiverReplyId).author.id === req.user.id) {
        res.statusCode = 400
        err = {
          code: 2,
          msg: 'cannot reply self'
        }
      } else if (!partResource) {
        res.statusCode = 404
      } else {
        res.statusCode = 201

        dbUtils['insert' + resourceList.firstUppercase(resourceList.conversionResourceWord(resources))]({
          userId: req.user.id,
          postId: id,
          content,
          anonymous,
          senderId: req.user.id,
          receiverId: receiverReplyId,
          commentId: id
        })
      }

      res.end(JSON.stringify(err))
      next()
    } else {
      next()
    }
  })
}