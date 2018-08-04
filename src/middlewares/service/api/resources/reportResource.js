import { request, extendCollectorEvent, EventCollector, error } from '../../utils'

/**
 * 举报资源
 * @param {object} params
 * @param {string} params.id -  资源id
 * @param {string} params.type - 资源类型
 * @param {string} params.reason - 举报原因
 * @param {object} params.config - axios config
 * @return {httpEventCollector}
 */
export default function reportResource ({
  id,
  type,
  reason,
  config
}) {
  if (!id || !type) error('reportResource: id和type不可为空')
  if (!reason) error('reportResource: reason不可为空')

  const req = request.post(`/${type}/${id}/report`, {reason}, config)
  const collector = new EventCollector(req)
  extendCollectorEvent(req)
  return collector
}
