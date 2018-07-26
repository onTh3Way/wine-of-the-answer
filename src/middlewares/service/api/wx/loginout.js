import { request } from '../../utils'

export default function loginout (id) {
  const req = request.delete(`/api/v1/wx/sessions/${id}`)
  req.ok = req.noContent.bind(req)
  return req
}