module.exports = function (router) {
  router.delete('/:resources/:id', (req, res, next) => {
    const {resources} = req.params
    const id = +req.params.id

    if (resourceList.resources.includes(resources)) {
      const table = db[resources]
      const resourceIndex = table.findIndex(v => v.id === id)

      if (resourceIndex !== -1) {
        res.statusCode = 204
        table.splice(resourceIndex, 1)
      } else {
        res.statusCode = 404
      }

      res.end()
    }

    next()
  })
}