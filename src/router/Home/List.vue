<template>
  <div :class="$style.wrapper">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="$style.post"
    >
      <post v-bind="item" />
    </div>
  </div>
</template>

<script>
  import { List as XList, Post } from 'components'

  export default {
    name: 'list',
    components: {XList, Post},
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
