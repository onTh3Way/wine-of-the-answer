<template>
  <icon type="share" @click.native="active = !active">
    <x-mask v-if="active">
      <svg :class="$style.guide">
        <line
          :x1="x1"
          :y1="y1"
          :x2="x2"
          :y2="y2"
        />
      </svg>
    </x-mask>
  </icon>
</template>

<script>
  import { XMask } from 'components'
  import Icon from './Icon'

  export default {
    name: 'share',
    components: {XMask, Icon},
    data: () => ({
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      active: false
    }),
    mounted () {
      const rect = this.$el.getBoundingClientRect()
      this.x1 = rect.left
      this.y1 = rect.top
      this.x2 = window.innerWidth - 20
      this.y2 = 20
    }
  }
</script>

<style lang="less" module>
</style>
