import styles from './styles.less'

class Message {
  activeEls = []

  containerEl

  constructor (config = {}) {
    const {
      containerEl = document.body
    } = config
    this.containerEl = containerEl
  }

  show (msg, duration, type) {
    const el = document.createElement('div')
    let symbol
    switch (type) {
      case 'success':
        symbol = '✓'
        break
      case 'warn':
      case 'info':
        symbol = '!'
        break
      case 'error':
        symbol = 'x'
        break
    }
    el.className = styles.wrapper
    el.innerHTML = `
      <span class="${styles.icon} ${styles[type]}">${symbol}</span>
      <span class="${styles.text}">${msg}</span>
    `
    this.containerEl.appendChild(el)
    this.activeEls.push(el)
    el.style.top = 0
    setTimeout(() => {
      el.style.opacity = 1
      el.style.top = '24px'

      // setTimeout(() => {
      //   el.style.opacity = 0
      //   el.style.top = 0
      // }, 2500)
    })
  }

  success (msg, duration) {
    this.show(msg, duration, 'success')
  }

  warn (msg, duration) {
    this.show(msg, duration, 'warn')
  }

  info (msg, duration) {
    this.show(msg, duration, 'info')
  }

  error (msg, duration) {
    this.show(msg, duration, 'error')
  }
}

export default new Message()
