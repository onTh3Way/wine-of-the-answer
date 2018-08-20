<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'infinite-scroll'
  }
</script>

<style lang="less" module>
  .wrapper {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
