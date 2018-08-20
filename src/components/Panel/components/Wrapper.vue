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
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    border-radius: 3px;
    background-color: rgb(16, 16, 16);
  }
  
  .container {
    width: 100%;
  }
</style>
