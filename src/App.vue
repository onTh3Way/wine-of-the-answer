<template>
  <div id="app">
    <group-view />
  </div>
</template>

<script>
  import { BBSView, GroupView } from '@/router'

  export default {
    name: 'app',
    components: {GroupView, BBSView}
  }
</script>
