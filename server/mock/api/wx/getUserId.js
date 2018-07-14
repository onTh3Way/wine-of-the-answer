const faker = require('faker')
const crypto = require('crypto')

module.exports = function (app) {
  app.get(`/wx/sessions/:code`, (req, res, next) => {
    const user = db.users[faker.random.number(db.users.length - 1)]
    const hash = crypto.createHash('sha256')
    hash.update(user.id)
    res.cookie(
      'token',
      hash.digest('hex'),
      {
        domain: 'localhost',
        maxAge: 60 * 60 * 1000 * 24 * 7,
        path: '/'
      }
    )
    res.end(JSON.stringify({userId: user.id}))
    next()
  })
}