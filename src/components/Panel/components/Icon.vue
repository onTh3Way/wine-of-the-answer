<template>
  <div :class="[$style.wrapper, $style[mode]]">
    <x-icon :class="$style.icon" :type="type" />
    <div v-if="$slots.text" :class="$style.text">
      <slot name="text" />
    </div>
    <slot />
  </div>
</template>

<script>
  import { Icon as XIcon } from 'components'

  export default {
    name: 'icon',
    components: {XIcon},
    props: {
      type: {
        type: String,
        required: true
      },
      mode: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.light {
      opacity: 0.6;
    }
  }
  
  .icon {
    margin-right: 0.1rem;
  }
  
  .text {
    display: inline-block;
    transform: scale(0.7);
    font-size: 1rem;
    color: pink;
  }
</style>
