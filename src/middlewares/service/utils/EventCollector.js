export default class EventCollector {
  target
  listeners = {}

  constructor (target = {}) {
    this.target = target
  }

  listen (events) {
    const {target, listeners} = this
    if (typeof events === 'string') events = [events]

    events.forEach(event => {
      target[event] = function (fn) {
        listeners[event] = fn
        return target
      }
    })
  }

  emit (events, ...args) {
    const {listeners} = this
    if (typeof events === 'string') events = [events]

    events.forEach(event => {
      listeners[event] && listeners[event](...args)
    })
  }
}
