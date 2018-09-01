import { request } from '../../utils'

export default function deleteResource ({id, type, options}) {
  return request.delete(`/${type}/${id}`, options)
}
