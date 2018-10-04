<template>
  <div @click="click">
    <slot />
    <x-mask ref="mask" :class="$style.wrapper" @click.native="$refs.mask.hide()">
      <p :class="$style.text">点击右上角即可分享哦~</p>
    </x-mask>
  </div>
</template>

<script>
  import { XMask } from 'components'
  export default {
    name: 'share',
    components: { XMask },
    methods: {
      click () {
        this.$refs.mask.show()
      }
    }
  }
</script>

<style lang="less" module>
.wrapper {
  z-index: 9999;
}

.text {
  .all-center(absolute);
  white-space: nowrap;
  font-size: 1.2rem;
  color: white;
}
</style>
