import { request } from '../../utils'

function baseFetch ({
  url,
  params = {},
  config
}) {
  const {offset = 0, limit = 10, sort = 'hot'} = params

  return request.get(url, {
    ...config,
    params: {offset, limit, sort}
  })
}

function prefixUrl (url, onlySelf) {
  const prefix = onlySelf ? `/users/${localStorage.getItem('userId')}` : ''
  return prefix + url
}

export function getPosts ({
  onlySelf,
  category,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(category ? `/${category}/posts` : '/posts', onlySelf),
    params: {
      offset,
      limit,
      sort
    },
    config
  })
}

export function getComments ({
  onlySelf,
  postId,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(postId ? `/posts/${postId}/comments` : '/comments', onlySelf),
    params: {
      offset,
      limit,
      sort
    },
    config
  })
}

export function getReplies ({
  commentId,
  offset,
  limit,
  sort,
  config
}) {
  return baseFetch({
    url: prefixUrl(commentId ? `/comments/${commentId}/replies` : '/replies'),
    params: {
      offset,
      limit,
      sort
    },
    config
  })
}
