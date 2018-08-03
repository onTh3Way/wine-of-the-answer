<template>
  <div :class="$style.tread">
    <icon :class="$style.tread_icon" type="cai" />
  </div>
</template>

<script>
  import icon from 'components/Icon'
  export default {
    name: 'tread-icon',
    components: {icon}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .tread {
    display: inline-block;
    float: right;
    width: 117/@rem;
    height: 30/@rem;
    margin-top: -28/@rem;
  }

  .tread_icon {
    display: inline-block;
    float: right;
    position: relative;
    z-index: 1000;
    width: 18/@rem;
    height: 18/@rem;
    margin-top: 10/@rem;
    margin-right: 10/@rem;
  }
</style>
