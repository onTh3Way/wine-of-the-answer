function connect (connector, ...args) {
  return [...args].join(connector)
}

export default function transitionCssModule (Vue) {
  Vue.prototype.$transitionCssModule = function (key, options = {}) {
    const style = this.$style
    const {connector = '_', ...attach} = options
    return {
      enterClass: style[connect(connector, key, 'enter')],
      enterActiveClass: style[connect(connector, key, 'enter', 'active')],
      enterToClass: style[connect(connector, key, 'enter', 'to')],
      leaveClass: style[connect(connector, key, 'leave')],
      leaveActiveClass: style[connect(connector, key, 'leave', 'active')],
      leaveToClass: style[connect(connector, key, 'leave', 'to')],
      appearClass: style[connect(connector, key, 'appear')],
      appearActiveClass: style[connect(connector, key, 'appear', 'active')],
      appearToClass: style[connect(connector, key, 'appear', 'to')],
      ...attach
    }
  }
}
