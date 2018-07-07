<template>
  <div :class="$style.wrapper">
    <change-img-color
      :img-url="require('../assets/test.jpg')"
      color="black"
    />
    <!--<div :class="$style.test"/>-->
  </div>
</template>

<script>
  import { ChangeImgColor } from '../components'

  export default {
    name: 'change-img-color-exm',
    components: {ChangeImgColor}
  }
</script>

<style lang="less" module>
  .wrapper {
    width: 100%;
    height: 50%;
  }
  
  .test {
    width: 100%;
    height: 50%;
    background: url('../assets/test.png') no-repeat center / cover;
    .change-img-color(pink, 1000px);
  }
</style>
