module.exports = function (router) {
  router.post('/:resources/:id/report', (req, res, next) => {
    const {resources} = req.params
    const id = +req.params.id
    const {reason} = req.body

    if (resources !== 'users' && resourceList.resources.includes(resources)) {
      const target = db[resources].find(v => v.id === id)
      res.statusCode = target
        ? reason
          ? 204
          : 400
        : 404

      if (res.statusCode === 204) {
        const table = db[resourceList.conversionResourceWord(resources) + 'Reports']
        table.push({
          id: table.length,
          reporter: req.user,
          targetId: id,
          reason
        })
        dbUtils.save()
      }

      res.end()
    }

    next()
  })
}