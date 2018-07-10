const faker = require('faker')

global.createUser = function () {
  return {
    userId: faker.random.uuid(),
    nickname: faker.name.findName(),
    avatar: faker.internet.avatar(),
    agreeProtocol: faker.random.boolean(),
    freezeTime: 0
  }
}

global.createPost = function ({
                                userId,
                                part = parts[randomNum(0, 6)],
                                content = faker.random.words(),
                                anonymous = faker.random.boolean()
                              }) {
  const user = findUser(userId)
  return {
    author: anonymous ? {
      userId
    } : {
      userId,
      nickname: user.nickname,
      avatar: user.avatar
    },
    part,
    postId: faker.random.uuid(),
    content,
    createDate: new Date(faker.date.past()).getTime(),
    agreeCount: faker.random.number(),
    disagreeCount: faker.random.number(),
    commentCount: faker.random.number()
  }
}

global.createComment = function ({
                                   userId,
                                   postId,
                                   anonymous = faker.random.boolean()
                                 }) {
  const user = findUser(userId)
  return {
    author: anonymous ? {
      userId
    } : {
      userId,
      nickname: user.nickname,
      avatar: user.avatar
    },
    postId,
    commentId: faker.random.uuid(),
    content: faker.random.words(),
    createDate: new Date(faker.date.past()).getTime(),
    agreeCount: faker.random.number(),
    disagreeCount: faker.random.number(),
    commentCount: faker.random.number()
  }
}

global.findUser = function (userId) {
  return db.users.find(user => user.userId === userId)
}

global.findPost = function (postId) {
  return db.posts.find(post => post.postId === postId)
}

global.findComment = function (commentId) {
  return db.comments.find(comment => comment.commentId === commentId)
}

global.parts = [
  'married', 'work',
  'money', 'study',
  'family', 'healthy',
  'others'
]

global.db = {
  users: [],
  posts: [],
  comments: [],
  postReports: []
}

function randomNum (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

Array(100)
  .fill(null)
  .forEach((_, i) => {
    db.users.push(createUser())

    db.posts.push(createPost({
      userId: db.users[i].userId
    }))

    db.comments.push(createComment({
      userId: db.users[i].userId,
      postId: db.posts[i].postId
    }))
  })
