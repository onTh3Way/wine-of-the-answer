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
                 commentId,
                 content = faker.random.words()
               } = {}) {
    const sender = dbUtils.findUser(senderId)
    const receiver = commentId ? dbUtils.findComment(commentId) : null
    db.replies.push({
      author: {
        id: senderId,
        nickname: anonymous ? '匿名用户' : sender.nickname,
        avatar: anonymous ? faker.internet.avatar() : sender.avatar
      },
      replyToAuthor: receiver && {
        id: receiver.id,
        nickname: anonymous ? '匿名用户' : sender.nickname,
        avatar: anonymous ? faker.internet.avatar() : sender.avatar
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

resources.forEach(resource => {
  const originInsertMethod = dbUtils['insert' + resource]
  dbUtils['insert' + resource] = function () {
    originInsertMethod.apply(this, arguments)
    dbUtils.save()
  }

  dbUtils['find' + resource] = function (id) {
    return db[resource.toLowerCase() + 's'].find(v => v.id === (Number.isNaN(+id) ? id : +id))
  }

  dbUtils['remove' + resource] = function (id) {
    const index = db[resource.toLowerCase() + 's'].findIndex(v => v.id === id)
    if (index !== -1) {
      db[resource.toLowerCase() + 's'].splice(index, 1)
    }
  }
})

module.exports = dbUtils