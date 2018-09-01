import { request, extendCollectorEvent, EventCollector } from '../../utils'

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
  const req = request.post(`/${type}/${id}/report`, {reason}, config)
  extendCollectorEvent(req)
  return req
}
