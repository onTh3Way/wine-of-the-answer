<template>
  <x-post v-bind="item" :class="$style.post" />
</template>

<script>
  import { Post as XPost } from 'components'

  export default {
    name: 'post',
    components: {XPost}
  }
</script>

<style lang="less" module>
  .post {
    margin: 0.5rem;
    background-color: #101010;
  }
</style>
