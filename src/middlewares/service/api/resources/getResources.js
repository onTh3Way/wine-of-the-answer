import { request } from '../../utils'

export default function getResources ({
  type,
  options = {},
  config
}) {
  if (!type) throw new Error('getResources: type不能为空')

  const {offset = 0, limit = 10, sort = 'hot'} = options

  return request.get(`/${type}`, {
    ...config,
    params: {offset, limit, sort}
  })
}
