module.exports = function (app) {
  app.get('/:resources', (req, res, next) => {
    const {resources} = req.params
    if (resourceList.resources.includes(resources)) {
      const {sort = 'hot', offset = 0, limit = 5} = req.query
      const data = dbUtils['search' + resources[0].toUpperCase() + resources.slice(1)]({sort, offset: 0, limit: 0})

      res.statusCode = (Number.isNaN(+offset) || Number.isNaN(+limit))
        ? 400
        : (resources === 'users' && !req.isAdmin)
          ? 403
          : 200

      if (res.statusCode === 200) res.end(JSON.stringify({
        data: data.slice(offset, limit),
        total: data.length
      }))
    }

    next()
  })
}

