<template>
  <div id="app">
    <post
      :avatar="require('assets/avatar.jpg')"
      username="用户名"
      time="三小时前"
      content="内容"
    />
  </div>
</template>

<script>
  import { Post } from 'components/Panel'

  export default {
    name: 'app',
    components: {Post}
  }
</script>
