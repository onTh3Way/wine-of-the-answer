import { request, error } from '../../utils'

export default function deleteResource ({id, type, options}) {
  if (!id || !type) error('deleteResource: id和type不能为空')

  return request.delete(`/${type}/${id}`, options)
}
