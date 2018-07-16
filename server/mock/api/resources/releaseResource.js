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
      const {receiverId, content, anonymous} = req.body

      if (!content) {
        res.statusCode = 400
      } else if (!partResource) {
        res.statusCode = 404
      } else {
        res.statusCode = 201
        dbUtils['insert' + resourceList.firstUppercase(resourceList.conversionResourceWord(resources))]({
          senderId: req.user.id,
          receiverId,
          content,
          anonymous
        })
      }

      res.end()
      next()
    } else {
      next()
    }
  })
}