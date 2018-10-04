<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wrapper'
  }
</script>

<style lang="less" module>
  .wrapper {
    width: 100%;
    padding: 0.5rem 0 0.5rem 2.5rem;
    border-radius: 3px;
  }
  
  .container {
    width: 100%;
  }
</style>
