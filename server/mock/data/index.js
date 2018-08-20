const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const dbUtils = require('./dbUtils')
const faker = require('faker')
const resourceList = require('./resourceList')

const dbPath = path.join(__dirname, 'db.json')

global.resourceList = resourceList
global.dbUtils = dbUtils

// property automatic completion
global.db = {
  parts: ['married', 'work', 'money', 'study', 'family', 'healthy', 'other'],
  users: [],
  admins: [],
  posts: [],
  comments: [],
  replies: [],
  postReports: [],
  commentReports: [],
  replyReports: [],
  perRecord: {
    posts: {
      agree: [],
      disagree: []
    },
    comments: {
      agree: [],
      disagree: []
    },
    replies: {
      agree: [],
      disagree: []
    }
  }
}

if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify(db))

db = dbUtils.read() || db

Array(5)
  .fill(null)
  .forEach((_, i) => {
    const Resource = resourceList.AllResource[i]
    const resources = resourceList.allResources[i]
    if (!db[resources].length) {
      Array(1)
        .fill(null)
        .forEach(() => dbUtils['insert' + Resource]())
    }
  })

dbUtils.save()

global.tokenMap = {}

function genToken (user) {
  const hash = crypto.createHash('sha256')
  tokenMap[hash.update(user.id).digest('hex')] = user
}

db.users.forEach(genToken)

db.admins.forEach(genToken)