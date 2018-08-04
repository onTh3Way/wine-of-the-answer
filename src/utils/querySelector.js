export function querySelector (selector, vm) {
  if (typeof selector !== 'string') throw new Error('selector must be a string')
  if (!vm._isVue) throw new Error('vm must be a vue instance')
  const vnode = vm._vnode || vm
  const children = vnode.children || (vnode.componentOptions && vm.componentOptions.children)
  if (children) {
    for (const vnode of children) {
      if (vnode.tag === selector || (vnode.componentOptions && vnode.componentOptions.tag === selector)) {
        return vnode
      } else {
        const target = querySelector(selector, vnode)
        if (target) return target
      }
    }
  }
}
