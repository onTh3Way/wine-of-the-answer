<template>
  <div :class="$style.bottom">
    <div :class="$style.forum">
      论坛
    </div>
    <div :class="$style.upset">
      我的烦恼
    </div>

  </div>
</template>

<script>
  export default {
    name: 'bottm-btn'
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #191919;
  @font: Arial;
  @font-gray: #ac9e9e;

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75/@rem;
    font-family: @font;
    background: black;
  }

  .forum,
  .upset {
    float: left;
    width: 50%;
    height: 65/@rem;
    margin-top: 10/@rem;
    font-size: 20/@rem;
    line-height: 65/@rem;
    text-align: center;
    color: @pink;
    background: black;
  }

  .upset {
    float: right;
    color: @font-gray;
    background: @greey;
  }
</style>
