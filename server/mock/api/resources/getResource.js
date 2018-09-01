module.exports = function (router) {
  router.get('/:resources/:id', (req, res, next) => {
    const {resources} = req.params
    const id = +req.params.id

    if (resourceList.resources.includes(resources)) {
      const data = db[resources].find(v => v.id === id)
      dbUtils.attachResourcesInfo(data, req.user)
      res.statusCode = Number.isNaN(id)
        ? 400
        : data
          ? 200
          : 404

      res.end(res.statusCode === 200
        ? JSON.stringify(data)
        : void 0)
    }

    next()
  })
}