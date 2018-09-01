import formatTimestamp from './formatTimestamp'
import getTag from './getTag'
import iterator from './iterator'
import mapCategory from './mapCategory'
import URLSearchParams from './URLSearchParams'

Vue.prototype.$utils = {
  formatTimestamp,
  getTag,
  iterator,
  mapCategory,
  URLSearchParams
}

export {
  formatTimestamp,
  getTag,
  iterator,
  mapCategory,
  URLSearchParams
}
