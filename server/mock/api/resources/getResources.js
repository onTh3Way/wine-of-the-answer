module.exports = function (router) {
  router.get('/:resources', (req, res, next) => {
    const {resources} = req.params
    if (resourceList.resources.includes(resources)) {
      const {sort = 'hot', offset = 0, limit = 5} = req.query
      let data = dbUtils['find' + resources[0].toUpperCase() + resources.slice(1)]({sort, offset: 0, limit: 0})

      res.statusCode = (Number.isNaN(+offset) || Number.isNaN(+limit))
        ? 400
        : (resources === 'users' && !req.isAdmin)
          ? 403
          : 200

      if (res.statusCode === 200 && resources !== 'users') {
        data = data.map(v => {
          const agreeTable = req.user ? db.perRecord[resources].agree[req.user.id] : null
          const disagreeTable = req.user ? db.perRecord[resources].disagree[req.user.id] : null

          v.isAgree = !!agreeTable && agreeTable.includes(v.id)
          v.isDisagree = !!disagreeTable && disagreeTable.includes(v.id)

          return v
        })

        res.end(JSON.stringify({
          data: data.slice(offset, offset + limit),
          total: data.length
        }))
      }
    }

    next()
  })
}

