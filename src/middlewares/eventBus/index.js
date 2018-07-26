const eventStore = {}

export default function EventBus (Vue) {
  const bus = new Vue()
  Vue.mixin({
    beforeCreate () {
      const vm = this
      const store = eventStore[this._uid] = {}
      this.$bus = {
        $on (event, fn) {
          if (typeof event === 'string') event = [event]

          event.forEach(e => {
            if (!store[e]) store[e] = []
            store[e].push(fn)
          })

          bus.$on(event, fn)
          return vm
        },
        $off (...args) {
          bus.$off(...args)
          return vm
        },
        $once (event, fn) {
          this.$on(event, function cb () {
            fn()
            this.$off(event, cb)
          })
          return vm
        },
        $emit (...args) {
          bus.$emit(...args)
          return vm
        }
      }
    },
    destroyed () {
      const store = eventStore[this._uid]
      Object
        .keys(store)
        .forEach(event => {
          store[event].forEach(fn => {
            bus.$off(event, fn)
          })
        })
    }
  })
}
