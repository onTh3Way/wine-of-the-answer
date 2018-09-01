const faker = require('faker')

module.exports = function (data) {
  const {
    nickname = faker.name.findName(),
    avatar = faker.image.dataUri(),
    isAgreeProtocol = faker.random.boolean(),
    freezeTime = 0
  } = data
  db.users.push({
    id: faker.random.uuid(),
    nickname,
    avatar,
    isAgreeProtocol,
    createDate: Date.now(),
    freezeTime
  })
}