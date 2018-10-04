<template>
  <div :class="$style.wrapper">
    <div
      v-for="(item, index) in items"
      :key="item.index"
      :class="$style.post"
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
  .wrapper {
    background-color: @black;
  }
  
  .post {
    margin: 0.5rem;
    background-color: #101010;
  }
</style>
