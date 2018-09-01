<template>
  <icon :class="$style.share" type="share" />
</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'share',
    components: {Icon}
  }
</script>

<style lang="less" module>
  .share {
    position: absolute;
    right: 0;
    margin: 0;
  }
</style>
