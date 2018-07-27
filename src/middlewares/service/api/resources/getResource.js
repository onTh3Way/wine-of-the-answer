import { request, error } from '../../utils'

export default function getResource ({id, type, config}) {
  if (!id || !type) error('getResource: id和type不可为空')

  return request.get(`/${type}/${id}`, config)
}
