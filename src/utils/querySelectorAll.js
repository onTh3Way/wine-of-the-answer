function getChildren (vm) {
  const vnode = vm.$vnode || vm
  return vnode.children || vnode.componentOptions.children
}

function getOriginTag (vm) {
  return vm.tag || vm._vnode.tag
}

function getTag (vm) {
  return vm.componentOptions
    ? vm.componentOptions.tag
    : vm.$options
      ? vm.$options._componentTag
      : vm.tag
}

export function querySelectorAll (selector, vm) {
  if (typeof selector !== 'string') throw new Error('selector must be a string')

  const result = []

  for (const vnode of getChildren(vm)) {
    const target = getTag(vnode) === selector
      ? [vnode]
      : querySelectorAll(selector, vnode)

    if (target) result.push(...target)
  }

  return result
}
