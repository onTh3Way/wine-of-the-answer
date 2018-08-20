<template>
  <h1 :class="$style.text">
    <slot />
  </h1>
</template>

<script>
  export default {
    name: 'x-h1'
  }
</script>

<style lang="less" module>
  .text {
    font-size: 0.9rem;
    font-weight: 900;
    color: #CCC5C6;
  }
</style>
