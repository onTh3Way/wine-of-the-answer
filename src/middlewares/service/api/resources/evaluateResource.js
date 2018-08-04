import { EventCollector, request, error, extendCollectorEvent } from '../../utils'

/**
 * 对资源进行点赞或踩
 * @param {object} params
 * @param {string} params.id - 资源id
 * @param {string} params.type - 资源类型
 * @param {boolean} params.isAgree - true点赞,false踩
 * @param {boolean} params.isCancel - true取消,false进行
 * @param {object} params.config - axios config
 */
export default function evaluateResource ({
  id,
  type,
  isAgree = false,
  isCancel = false,
  config
}) {
  if (!id || !type) error('evaluateResource: id和type不可为空')

  const req = request({
    ...config,
    url: `/${type}/${id}/${isAgree ? '' : 'dis'}agreement`,
    method: isCancel ? 'delete' : 'put'
  })
  const collector = new EventCollector(req)
  extendCollectorEvent(collector)
  return collector
}
