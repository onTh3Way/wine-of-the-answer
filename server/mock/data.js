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
  return {
    userId,
    part,
    postId: faker.random.uuid(),
    content,
    createDate: new Date(faker.date.past()).getTime(),
    agreeCount: faker.random.number(),
    disagreeCount: faker.random.number(),
    commentCount: faker.random.number(),
    anonymous
  }
}

global.createComment = function ({
                                   userId,
                                   postId,
                                   anonymous = faker.random.boolean()
                                 }) {
  return {
    userId,
    postId,
    commentId: faker.random.uuid(),
    content: faker.random.words(),
    createDate: new Date(faker.date.past()).getTime(),
    agreeCount: faker.random.number(),
    disagreeCount: faker.random.number(),
    commentCount: faker.random.number(),
    anonymous
  }
}
global.parts = [
  'married', 'work',
  'money', 'study',
  'family', 'healthy',
  'others'
]

const data = {
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
    data.users.push(createUser())

    data.posts.push(createPost({
      userId: data.users[i].userId
    }))

    data.comments.push(createComment({
      userId: data.users[i].userId,
      postId: data.posts[i].postId
    }))
  })

global.db = data