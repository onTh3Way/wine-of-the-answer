import styles from './styles.less'

class Message {
  activeEls = []

  config = {
    containerEl: document.body,
    offset: '1rem'
  }

  constructor (config = {}) {
    this.config = {
      ...this.config,
      ...config
    }
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
    el.style.top = 0
    console.log(this.activeEls[this.activeEls.length - 1].offsetTop)
    this.activeEls.push(el)
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
