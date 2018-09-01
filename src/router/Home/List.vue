<template>
  <div>
    <div
      v-for="(item, index) in items"
      :class="$style.post"
      :key="index"
    >
      <post v-bind="item" />
    </div>
  </div>
</template>

<script>
  import { Post } from 'components'

  export default {
    name: 'list',
    components: {Post},
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="less" module>
  .post {
    margin: 0.5rem;
    background-color: #101010;
  }
</style>
