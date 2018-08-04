export default class EventCollector {
  listeners = {}

  constructor (extend) {
    this.collect(Object.keys(extend))
  }

  collect (events) {
    const {listeners} = this
    if (typeof events === 'string') events = [events]

    events.forEach(event => {
      if (!listeners[event]) listeners[event] = []
      this[event] = (fn) => {
        listeners[event].push(fn)
        return this
      }
    })
  }

  emit (events, ...args) {
    const {listeners} = this
    if (typeof events === 'string') events = [events]

    events.forEach(event => {
      listeners[event] && listeners[event].forEach(fn => fn(...args))
    })
  }
}
