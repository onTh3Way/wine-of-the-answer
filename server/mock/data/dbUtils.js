const path = require('path')
const fs = require('fs')
const faker = require('faker')
const crypto = require('crypto')

let timer
const resources = ['User', 'Admin', 'Post', 'Comment', 'Reply']
const parts = ['married', 'work', 'money', 'study', 'family', 'healthy', 'other']
const tables = [
  'parts',
  'users', 'admins',
  'posts', 'comments', 'replies',
  'postReports', 'commentReports', 'replyReports'
]

function bubble (arr, sortFn = (a, b) => a > b) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let k = i + 1, len = arr.length; k < len; k++) {
      const a = arr[i]
      const b = arr[k]

      if (sortFn(a, b)) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
      }
    }
  }

  return arr
}

const dbUtils = {
  init () {
    tables.forEach(table => db[table] = [])
    parts.forEach(part => db.parts.push(part))
  },
  insertUser ({
                nickname = faker.name.findName(),
                avatar = faker.internet.avatar(),
                isAgreeProtocol = faker.random.boolean(),
                freezeTime = 0
              } = {}) {
    db.users.push({
      id: faker.random.uuid(),
      nickname,
      avatar,
      isAgreeProtocol,
      createDate: Date.now(),
      freezeTime
    })
  },
  insertAdmin ({
                 nickname = faker.name.findName(),
                 avatar = faker.internet.avatar(),
                 username = faker.internet.userName(),
                 password = faker.internet.password()
               } = {}) {
    db.admins.push({
      id: faker.random.uuid(),
      createDate: Date.now(),
      nickname,
      avatar,
      username,
      password
    })
  },
  insertPost ({
                anonymous = faker.random.boolean(),
                userId = db.users[faker.random.number(db.users.length - 1)].id,
                part = db.parts[faker.random.number(6)],
                content = faker.random.words()
              } = {}) {
    const user = dbUtils.findUser(userId)
    db.posts.push({
      id: db.posts.length,
      author: anonymous ? {
        id: userId,
        nickname: '匿名用户',
        avatar: faker.internet.avatar()
      } : {
        id: userId,
        nickname: user.nickname,
        avatar: user.avatar
      },
      part,
      content,
      createDate: new Date(faker.date.past()).getTime(),
      agreeCount: 0,
      disagreeCount: 0,
      commentCount: 0
    })
  },
  insertComment ({
                   userId = db.users[faker.random.number(db.users.length - 1)].id,
                   postId = db.posts[faker.random.number(db.posts.length - 1)].id,
                   anonymous = faker.random.boolean()
                 } = {}) {
    const user = dbUtils.findUser(userId)
    if (user) {
      db.comments.push({
        id: db.comments.length,
        author: anonymous ? {
          id: userId,
          nickname: '匿名用户',
          avatar: faker.internet.avatar()
        } : {
          id: userId,
          nickname: user.nickname,
          avatar: user.avatar
        },
        postId,
        content: faker.random.words(),
        createDate: new Date(faker.date.past()).getTime(),
        agreeCount: 0,
        disagreeCount: 0,
        commentCount: 0
      })
    }
  },
  insertReply ({
                 anonymous = faker.random.boolean(),
                 senderId = db.users[faker.random.number(db.users.length - 1)].id,
                 receiverId,
                 content = faker.random.words()
               } = {}) {
    const sender = dbUtils.findUser(senderId)
    const receiver = receiverId ? dbUtils.findUser(receiverId) : null
    db.replies.push({
      author: {
        id: senderId,
        nickname: anonymous ? '匿名用户' : sender.nickname,
        avatar: anonymous ? faker.internet.avatar() : sender.avatar
      },
      replyToAuthor: receiver && {
        id: receiver.id,
        nickname: anonymous ? '匿名用户' : receiver.nickname,
        avatar: anonymous ? faker.internet.avatar() : receiver.avatar
      },
      id: db.replies.length,
      content,
      createDate: Date.now(),
      agreeCount: 0,
      disagreeCount: 0
    })
  },
  findUser (id) {},
  findAdmin (id) {},
  findPost (id) {},
  findComment (id) {},
  findReply (id) {},
  removeUser (id) {},
  removeAdmin (id) {},
  removePost (id) {},
  removeComment (id) {},
  removeReply (id) {},
  searchUsers ({sort, offset, limit}) {},
  searchAdmins ({sort, offset, limit}) {},
  searchPosts ({sort, offset, limit}) {},
  searchComments ({sort, offset, limit}) {},
  searchReplies ({sort, offset, limit}) {},
  findUserByToken (token) {
    return db.users.find(user => {
      const hash = crypto.createHash('sha256')
      return hash.update(user.id).digest('hex') === token
    }) || db.admins.find(user => {
      const hash = crypto.createHash('sha256')
      return hash.update(user.id).digest('hex') === token
    })
  },
  read () {
    try {
      return JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
    } catch {
    }
  },
  save () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db))
      console.log('save db done')
    })
  }
}

function conversionResourceWord (word) {
  const temp = word.toLowerCase()
  if (temp === 'reply' || temp === 'replies') {
    return temp === 'reply' ? word.slice(0, 1) + 'eplies' : word.slice(0, 1) + 'eply'
  } else {
    return temp[temp.length - 1] === 's' ? word.slice(0, word.length - 1) : word + 's'
  }
}

resources.forEach(resource => {
  const resources = conversionResourceWord(resource)
  const originInsertMethod = dbUtils['insert' + resource]
  dbUtils['insert' + resource] = function () {
    originInsertMethod.apply(this, arguments)
    dbUtils.save()
  }

  dbUtils['find' + resource] = function (id) {
    return db[resources.toLowerCase()].find(v => v.id === (Number.isNaN(+id) ? id : +id))
  }

  dbUtils['remove' + resource] = function (id) {
    const index = db[resources.toLowerCase()].findIndex(v => v.id === id)
    if (index !== -1) {
      db[resource.toLowerCase() + 's'].splice(index, 1)
    }
  }

  dbUtils['search' + resources] = function ({
                                              sort = 'hot',
                                              offset = 0,
                                              limit = 5
                                            }) {
    const list = db[resources.toLowerCase()].slice()
    if (resource !== 'User' && resource !== 'Admin') {
      sort === 'hot'
        ? bubble(list, (a, b) => b.agreeCount > a.agreeCount)
        : bubble(list, (a, b) => b.createDate > a.createDate)
    }
    return limit === 0 ? list.slice(offset) : list.slice(offset, limit)
  }

})

module.exports = dbUtils