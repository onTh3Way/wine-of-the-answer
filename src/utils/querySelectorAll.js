export function querySelectorAll (selector, vm) {
  if (typeof selector !== 'string') throw new Error('selector must be a string')
  if (!vm._isVue) throw new Error('vm must be a vue instance')

  const result = []

  for (const vComponent of vm.$children) {
    const target = vComponent.$options._componentTag === selector
      ? [vComponent]
      : querySelectorAll(selector, vComponent)

    if (target) result.push(...target)
  }

  return result
}
