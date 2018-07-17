const faker = require('faker')

module.exports = function (router) {
  router.post(`/wx/sessions/:code`, (req, res, next) => {
    const user = db.users[faker.random.number(db.users.length - 1)]
    const token = Object.keys(tokenMap).find(t => {
      return tokenMap[t] === user
    })
    res.cookie('token', token, {
      domain: 'localhost',
      maxAge: 1000 * 60 * 60 * 24 * 1000,
      path: '/'
    })
    res.end(JSON.stringify({userId: user.id}))
    next()
  })
}