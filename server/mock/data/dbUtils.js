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

const fakerName = '匿名用户'
const fakerAvatar = faker.internet.avatar()

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
                anonymous,
                userId = db.users[faker.random.number(db.users.length - 1)].id,
                part = db.parts[faker.random.number(6)],
                content = faker.random.words(),
                createDate = new Date(faker.date.past()).getTime(),
                agreeCount = 0,
                disagreeCount = 0,
                commentCount = 0
              } = {}) {
    const user = dbUtils.findUser(userId)
    db.posts.push({
      id: db.posts.length + 1,
      author: {
        id: userId,
        nickname: anonymous ? fakerName : user.nickname,
        avatar: anonymous ? fakerAvatar : user.avatar
      },
      part,
      content,
      createDate,
      agreeCount,
      disagreeCount,
      commentCount
    })
  },
  insertComment ({
                   userId = db.users[faker.random.number(db.users.length - 1)].id,
                   postId = db.posts[faker.random.number(db.posts.length - 1)].id,
                   content = faker.random.words(),
                   anonymous,
                   createDate = new Date(faker.date.past()).getTime(),
                   agreeCount = 0,
                   disagreeCount = 0,
                   commentCount = 0
                 } = {}) {
    const user = dbUtils.findUser(userId)
    if (user) {
      db.comments.push({
        id: db.comments.length + 1,
        author: {
          id: userId,
          nickname: anonymous ? fakerName : user.nickname,
          avatar: anonymous ? fakerAvatar : user.avatar
        },
        postId,
        content,
        createDate,
        agreeCount,
        disagreeCount,
        commentCount
      })
    }
  },
  insertReply ({
                 anonymous,
                 commentId = faker.random.number(db.comments.length),
                 senderId = db.users[faker.random.number(db.users.length - 1)].id,
                 receiverId,
                 content = faker.random.words(),
                 createDate = new Date(faker.date.past()).getTime(),
                 agreeCount = 0,
                 disagreeCount = 0
               } = {}) {
    const sender = dbUtils.findUser(senderId)
    const receiver = receiverId ? dbUtils.findReply(receiverId) : undefined
    db.replies.push({
      id: db.replies.length + 1,
      author: {
        id: senderId,
        nickname: anonymous ? fakerName : sender.nickname,
        avatar: anonymous ? fakerAvatar : sender.avatar
      },
      replyToAuthor: receiver && {
        id: receiver.author.id,
        nickname: receiver.anonymous ? fakerName : receiver.author.nickname,
        avatar: receiver.anonymous ? fakerAvatar : receiver.author.avatar
      },
      commentId,
      content,
      createDate,
      agreeCount,
      disagreeCount
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
    const resource = resourceList.allResource[i]
    const resources = resourceList.allResources[i]
    const Resource = resourceList.AllResource[i]
    const Resources = resourceList.AllResources[i]
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
      let list = db[resources].slice()

      if (resource !== 'user' && resource !== 'admin') {
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