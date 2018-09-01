<template>
  <div :class="$style.tools">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'tools'
  }
</script>

<style lang="less" module>
  .tools {
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
  }
</style>
