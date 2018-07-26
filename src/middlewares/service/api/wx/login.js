import { request } from '../../utils'

export default function login (code, type = 'openId') {
  if (!code) throw new Error('code或openId不能为空')
  if (type !== 'openId' && type !== 'code') throw new TypeError('微信授权登录: type只能为code或openId')

  const req = request({
    url: `/api/v1/wx/sessions/${code}`,
    method: type === 'openId' ? 'put' : 'post'
  })

  if (type === 'openId') req.ok = req.noContent.bind(req)

  return req
}
