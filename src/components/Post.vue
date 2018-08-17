<template>
  <div :class="$style.post">
    <portrait />
    <forwardIcon />
    <status />
  </div>
</template>

<script>
  import icon from 'components/Icon'
  import portrait from './Portrait'
  import status from '../router/BBS/Status.vue'
  import forwardIcon from '../router/BBS/ForwardIcon'
  export default {
    name: 'post',
    components: {portrait, icon, forwardIcon, status}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .post {
    float: left;
    width: 460/@rem;
    height: 160/@rem;
    margin-bottom: 10/@rem;
    line-height: 160/@rem;
    text-align: center;
    color: #fff;
    background: @greey;
    border-radius: 5/@rem;
    .horizon-center;
  }
</style>
