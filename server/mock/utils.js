global.filterPost = function (post) {
  const {
    userId,
    postId,
    part,
    anonymous,
    ...data
  } = post

  const {nickname, avatar} = db.users.find(user => user.userId === userId)
  return {
    author: anonymous ? {
      userId
    } : {
      userId,
      nickname,
      avatar
    },
    ...data
  }
}