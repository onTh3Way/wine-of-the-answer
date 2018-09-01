<template>
  <icon :class="$style.icon" type="comment" mode="light">
    <slot />
  </icon>
</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'comment',
    components: {Icon}
  }
</script>

<style lang="less" module>
  .icon {
    margin-left: 0.5rem;
  }
</style>
