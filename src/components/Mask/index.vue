<template>
  <div :class="$style.mask">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'w-mask'
  }
</script>

<style lang="less" module>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9;
  }
</style>
