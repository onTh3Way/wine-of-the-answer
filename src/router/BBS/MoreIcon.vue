<template>
  <div :class="$style.more">
    <icon :class="$style.more_icon" type="more" />
  </div>
</template>

<script>
  import icon from 'components/Icon'
  export default {
    name: 'more-icon',
    components: {icon}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .more {
    display: inline-block;
    float: right;
    width: 30/@rem;
    height: 30/@rem;
  }

  .more_icon {
    display: inline-block;
    float: right;
    position: relative;
    z-index: 1000;
    width: 18/@rem;
    height: 18/@rem;
    margin-top: 14/@rem;
    margin-right: 10/@rem;
  }
</style>
