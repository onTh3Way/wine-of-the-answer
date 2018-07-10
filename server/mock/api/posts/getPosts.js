module.exports = function (app, path) {
  app.get(path, (req, res, next) => {
    const {sort = 'date', offset = 0, limit = 5, part} = req.query
    // 如果没有分区或者没有该分区
    if (
      (part && !parts.includes(part))
      || Number.isNaN(+offset)
      || Number.isNaN(+limit)
    ) {
      res.statusCode = 400
      res.end()
    } else {
      let dataList = db.posts.slice(0)
      if (part) dataList = dataList.filter(post => post.part === part)
      sort === 'date'
        ? dataList.sort((a, b) => b.createDate - a.createDate)
        : dataList.sort((a, b) => b.agreeCount - a.agreeCount)
      
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({
        posts: dataList.slice(offset, limit),
        total: dataList.length
      }))
    }
    next()
  })
}

