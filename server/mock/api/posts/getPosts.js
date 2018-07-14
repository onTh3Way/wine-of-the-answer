module.exports = function (app) {
  app.get('/:part/posts', (req, res, next) => {
    const {part} = req.params
    const {sort = 'date', offset = 0, limit = 5} = req.query

    if (Number.isNaN(+offset) || Number.isNaN(+limit) || !db.parts.includes(part)) {
      res.statusCode = 400
      res.end()
      return
    }

    const dataList = db.posts.filter(post => post.part === part)
    sort === 'date'
      ? dataList.sort((a, b) => b.createDate - a.createDate)
      : dataList.sort((a, b) => b.agreeCount - a.agreeCount)
    
    res.statusCode = 200
    res.end(JSON.stringify({
      posts: dataList.slice(offset, limit),
      total: dataList.length
    }))
    next()
  })
}

