<template>
  <div
    :class="$style.img"
    :style="{background: `url(${src}) no-repeat center / cover`}"
  />
</template>

<script>
  export default {
    name: 'change-img-color',
    props: {
      color: {
        type: String,
        default: 'pink'
      },
      src: {
        type: String,
        required: true
      }
    },
    mounted () {
      // 等待css样式挂载完毕
      setTimeout(() => {
        this.$el.style.filter = `drop-shadow(${this.color} ${this.$el.offsetWidth}px 0)`
      })
    }
  }
</script>

<style lang="less" module>
  .img {
    position: relative;
    left: -100%;
    width: 100%;
    height: 100%;
    margin-left: 1px;
    border-right: 1px solid transparent;
  }
</style>
