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
    width: 90%;
    height: 65%;
    z-index: 9999;
  }
</style>
