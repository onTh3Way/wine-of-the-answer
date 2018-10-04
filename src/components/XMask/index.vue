<template>
  <transition
    v-if="value"
    v-bind="transition || $transitionCssModule('mask')"
    appear
  >
    <div :class="$style.mask">
      <slot />
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'x-mask',
    props: {
      transition: {
        type: Object,
        default: void 0
      }
    },
    data: () => ({
      value: false
    }),
    mounted () {
      document.body.appendChild(this.$el)
    },
    beforeDestroy () {
      document.body.removeChild(this.$el)
    },
    methods: {
      toggle () {
        this.value = !this.value
      },
      show () {
        this.value = true
      },
      hide () {
        this.value = false
      }
    }
  }
</script>

<style lang="less" module>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.mask_appear,
.mask_enter,
.mask_leave_to {
  opacity: 0;
}

.mask_appear_active,
.mask_enter_active,
.mask_leave_active {
  transition: opacity 0.3s;
}

.mask_appear_to,
.mask_enter_to,
.mask_leave {
  opacity: 1;
}
</style>
