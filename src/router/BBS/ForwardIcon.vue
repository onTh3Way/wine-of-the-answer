<template>
  <div :class="$style.forward">
    <icon :class="$style.forward_icon" type="forward" />
  </div>
</template>

<script>
  import icon from 'components/Icon'
  export default {
    name: 'forward-icon',
    components: {icon}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .forward {
    display: inline-block;
    float: right;
    width: 117/@rem;
    height: 30/@rem;
    margin-top: -28/@rem;
  }

  .forward_icon {
    display: inline-block;
    float: right;
    position: relative;
    z-index: 1000;
    width: 18/@rem;
    height: 18/@rem;
    margin-top: 10/@rem;
    margin-right: 30/@rem;
  }
</style>
