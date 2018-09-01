<template>
  <div
    ref="el"
    :class="[$style.wrapper, wrapperClass]"
    :style="Object.assign({zIndex}, wrapperStyle)"
  >
    <transition
      v-if="!isHide"
      v-bind="dialogTransition"
      appear
    >
      <div
        :class="[$style.container].concat(dialogClass)"
        :style="dialogStyle"
        data-role="dialog"
      >
        <slot name="dialog" />
      </div>
    </transition>
    <transition
      v-if="!isHide && showMask"
      v-bind="maskTransition || $transitionCssModule('mask')"
      appear
    >
      <div
        :class="[$style.mask, maskStyle]"
        :style="maskStyle"
        data-role="mask"
        @click="maskClosable && hide()"
      >
        <slot name="mask" />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'base-modal',
    props: {
      // 显示回调
      'onShow': {
        type: Function,
        default: () => {}
      },
      // 隐藏回调
      'onHide': {
        type: Function,
        default: () => {}
      },
      // 对话框过渡效果
      'dialogTransition': {
        type: Object,
        default: void 0
      },
      // 遮罩层过渡效果
      'maskTransition': {
        type: Object,
        default: void 0
      },
      'wrapperStyle': {
        type: Object,
        default: void 0
      },
      'dialogStyle': {
        type: Object,
        default: void 0
      },
      'maskStyle': {
        type: Object,
        default: void 0
      },
      'wrapperClass': {
        type: String,
        default: ''
      },
      'dialogClass': {
        type: [String, Array],
        default: ''
      },
      'maskClass': {
        type: String,
        default: ''
      },
      // 是否显示遮罩层
      'showMask': {
        type: Boolean,
        default: true
      },
      // 点击遮罩层是否关闭
      'maskClosable': {
        type: Boolean,
        default: true
      },
      // modal的z-index值
      'zIndex': {
        type: Number,
        default: 999
      }
    },
    data: () => ({
      isHide: true
    }),
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
    },
    methods: {
      show () {
        this.isHide = false
        this.$nextTick(() => {
          this.$refs.el.querySelectorAll('[data-role=cancel]').forEach(el => {
            el.addEventListener('click', this.hide, false)
          })
        })
        this.onShow()
      },
      hide () {
        this.$refs.el.querySelectorAll('[data-role=cancel]').forEach(el => {
          el.removeEventListener('click', this.hide, false)
        })
        this.isHide = true
        this.onHide()
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .container {
    position: absolute;
    z-index: 10;
  }
  
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9;
  }
  
  .mask_enter,
  .mask_leave_to {
    opacity: 0;
  }
  
  .mask_enter_active,
  .mask_leave_active {
    transition: opacity 0.3s;
  }
  
  .mask_enter_to,
  .mask_leave {
    opacity: 1;
  }
</style>
