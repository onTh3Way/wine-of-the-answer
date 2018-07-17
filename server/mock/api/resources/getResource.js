module.exports = function (router) {
  router.get('/:resources/:id', (req, res, next) => {
    const {resources} = req.params
    const id = +req.params.id

    if (resourceList.resources.includes(resources)) {
      const data = db[resources].find(v => v.id === id)

      res.statusCode = Number.isNaN(id)
        ? 400
        : data
          ? 200
          : 404

      const agreeTable = db.perRecord[resources].agree[req.user.id]
      const disagreeTable = db.perRecord[resources].disagree[req.user.id]

      if (res.statusCode === 200) res.end(JSON.stringify({
        ...data,
        isAgree: !!agreeTable && agreeTable.includes(id),
        isDisagree: !!disagreeTable && disagreeTable.includes(id)
      }))
    }

    next()
  })
}