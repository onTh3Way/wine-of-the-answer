<template>
  <router-link class="$style.wrapper" to="/welcome">
    <img src="~assets/loading.jpg">
  </router-link>
</template>

<script>
  export default {
    name: 'index'
  }
</script>
 
<style lang="less" module>
.wrapper {
  width: 100%;
}
</style>
