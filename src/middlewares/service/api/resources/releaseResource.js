import { request, EventCollector, error, extendCollectorEvent } from '../../utils'

function getUrl (type, id) {
  let prefix
  switch (type) {
  case 'posts':
    prefix = `/${id}`
    break
  case 'comments':
    prefix = `/posts/${id}`
    break
  case 'replies':
    prefix = `/comments/${id}`
    break
  }
  return prefix + `/${type}`
}

/**
 * 发布资源
 * @param {object} params
 * @param {string | number} params.id - 所属的资源id
 * @param {string} params.type - 资源类型
 * @param {object} params.data
 * @param {object} config - axios config
 * @return {EventCollector}
 */
export default function releaseResource ({
  id,
  type,
  data,
  config
}) {
  if (!id || !type) error('releaseResource: id和type不可为空')
  if (!data.content) error('releaseResource: data.content不可为空')

  const {
    content,
    anonymous = false,
    receiverReplyId
  } = data
  const req = request.post(
    getUrl(type, id),
    {
      content,
      anonymous,
      receiverReplyId: type === 'replies' ? receiverReplyId : undefined
    },
    config
  )
  const collector = new EventCollector(req)
  extendCollectorEvent(collector)

  return collector
}
