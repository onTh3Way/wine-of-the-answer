<template>
  <p :class="$style.text">
    <slot />
  </p>
</template>

<script>
  export default {
    name: 'x-text'
  }
</script>

<style lang="less" module>
  .text {
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    color: pink;
  }
</style>
