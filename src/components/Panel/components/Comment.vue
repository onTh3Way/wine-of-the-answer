<template>
  <icon :class="$style.icon" type="comment" mode="light">
    <template slot="text">
      {{ num }}
    </template>
  </icon>
</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'comment',
    components: {Icon},
    props: {
      num: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="less" module>
  .icon {
    margin-left: 0.5rem;
  }
</style>
