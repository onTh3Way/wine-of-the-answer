const crypto = require('crypto')

global.dbUtils = require('./dbUtils')
global.db = {
  parts: [],
  users: {},
  admins: {},
  posts: {},
  comments: {},
  replies: {},
  postReports: {},
  commentReports: {},
  replyReports: {},
  perRecord: {
    posts: {
      agree: {},
      disagree: {}
    },
    comments: {
      agree: {},
      disagree: {}
    },
    replies: {
      agree: {},
      disagree: {}
    }
  }
}
db = dbUtils.read()

function firstUppercase (str) {
  return str[0].toUpperCase() + str.slice(1)
}

const resource = ['user', 'admin', 'post', 'comment', 'reply']
const resources = ['users', 'admins', 'posts', 'comments', 'replies']

global.resourceList = {
  resource,
  Resource: resource.map(v => firstUppercase(v)),
  resources,
  Resources: resources.map(v => firstUppercase(v)),
  conversionResourceWord (word) {
    const temp = word.toLowerCase()
    if (temp === 'reply' || temp === 'replies') {
      return temp === 'reply' ? word.slice(0, 1) + 'eplies' : word.slice(0, 1) + 'eply'
    } else {
      return temp[temp.length - 1] === 's' ? word.slice(0, word.length - 1) : word + 's'
    }
  },
  firstUppercase
}

global.tokenMap = {}

function genToken (user) {
  const hash = crypto.createHash('sha256')
  tokenMap[hash.update(user.id).digest('hex')] = user
}

db.users.forEach(genToken)

db.admins.forEach(genToken)