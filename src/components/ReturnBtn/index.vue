<template>
  <div :class="$style['return-btn']">
    <img src="./return.svg">
  </div>
</template>

<script>
  export default {
    name: 'return-btn'
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  
  .return-btn {
    float: left;
    position: fixed;
    z-index: 999;
    width: 30/@rem;
    height: 30/@rem;
    margin-top: 15/@rem;
    margin-left: 20/@rem;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
