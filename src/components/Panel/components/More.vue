<template>
  <div :class="$style.wrapper">
    <div :class="$style.round" />
    <div :class="$style.round" />
    <div :class="$style.round" />
  </div>
</template>

<script>
  export default {
    name: 'more'
  }
</script>

<style lang="less" module>
  @round-margin: 0 0.05rem;
  @round-size: 0.2rem;
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
  
  .round {
    width: @round-size;
    height: @round-size;
    margin: @round-margin;
    background-color: @pink;
    border-radius: 50%;
  }
</style>
