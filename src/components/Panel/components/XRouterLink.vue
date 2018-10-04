<template>
  <router-link :class="$style.link" v-bind="$attrs" />
</template>

<script>
  export default {
    name: 'x-router-link'
  }
</script>

<style lang="less" module>
  .link {
    position: absolute;
    z-index: 9999;
    width: 90%;
    height: 65%;
  }
</style>
