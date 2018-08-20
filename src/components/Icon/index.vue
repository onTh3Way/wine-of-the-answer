<template>
  <i
    :class="$style.icon"
    :style="{
      backgroundImage: `url(${require(`./assets/${type}.svg`)})`
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
    width: 0.8rem;
    height: 0.8rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
