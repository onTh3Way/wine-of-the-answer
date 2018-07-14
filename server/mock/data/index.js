const crypto = require('crypto')

global.dbUtils = require('./dbUtils')

global.db = dbUtils.read()

global.tokenMap = {}

function genToken (user) {
  const hash = crypto.createHash('sha256')
  tokenMap[hash.update(user.id).digest('hex')] = user
}

db.users.forEach(genToken)

db.admins.forEach(genToken)