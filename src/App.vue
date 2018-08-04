<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { BBSView, GroupView } from '@/router'

  export default {
    name: 'app',
    components: {GroupView, BBSView}
  }
</script>
