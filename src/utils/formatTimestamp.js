export function formatTimestamp (timestamp) {
  if (typeof timestamp !== 'number') throw new TypeError('timestamp must be a number')

  return String(timestamp).length === 13 ? timestamp : timestamp * 1000
}