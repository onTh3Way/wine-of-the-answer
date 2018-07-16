const path = require('path')
const fs = require('fs')
const faker = require('faker')
const crypto = require('crypto')
const resourceList = require('./resourceList')

let timer

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
  findUsers ({sort, offset, limit}) {},
  findAdmins ({sort, offset, limit}) {},
  findPosts ({sort, offset, limit}) {},
  findComments ({sort, offset, limit}) {},
  findReplies ({sort, offset, limit}) {},
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

Array(5)
  .fill(null)
  .forEach((_, i) => {
    const resource = resourceList.resource[i]
    const resources = resourceList.resources[i]
    const Resource = resourceList.Resource[i]
    const Resources = resourceList.Resources[i]
    const originInsertMethod = dbUtils['insert' + Resource]

    dbUtils['insert' + Resource] = function () {
      originInsertMethod.apply(this, arguments)
      dbUtils.save()
    }

    dbUtils['find' + Resource] = function (id) {
      return db[resources].find(v => v.id === (Number.isNaN(+id) ? id : +id))
    }

    dbUtils['find' + Resources] = function ({
                                              sort = 'hot',
                                              offset = 0,
                                              limit = 5
                                            }) {
      const list = db[resources].slice()
      if (resource !== 'User' && resource !== 'Admin') {
        sort === 'hot'
          ? bubble(list, (a, b) => b.agreeCount > a.agreeCount)
          : bubble(list, (a, b) => b.createDate > a.createDate)
      }
      return limit === 0 ? list.slice(offset) : list.slice(offset, limit)
    }

    dbUtils['remove' + Resource] = function (id) {
      const index = db[resources].findIndex(v => v.id === id)
      if (index !== -1) {
        db[resources].splice(index, 1)
      }
    }
  })

module.exports = dbUtils