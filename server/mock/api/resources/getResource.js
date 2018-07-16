module.exports = function (app) {
  app.get('/:resources/:id', (req, res, next) => {
    const {resources} = req.params
    const id = +req.params.id

    if (resourceList.resources.includes(resources)) {
      const data = db[resources].find(v => v.id === id)

      res.statusCode = Number.isNaN(id)
        ? 400
        : data
          ? 200
          : 404

      if (res.statusCode === 200) res.end(JSON.stringify(data))
    }

    next()
  })
}