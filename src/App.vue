<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { BBSView, GroupView, ParticularAllView } from '@/router'

  export default {
    name: 'app',
    components: { BBSView, GroupView, ParticularAllView }
  }
</script>
