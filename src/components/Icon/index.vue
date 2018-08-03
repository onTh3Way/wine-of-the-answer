<template>
  <i
    :class="$style.icon"
    :style="{
      background: `url(${require(`./assets/${type}.svg`)}) no-repeat center / cover`
    }"
  />
</template>

<script>
  export default {
    name: 'icon',
    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" module>
  .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
  }
</style>
