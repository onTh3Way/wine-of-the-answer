<!--
改变透明图片不透明部分的颜色
原理: 使用drop-shadow投影不透明部分,然后修改投影颜色达成目的
注意: 当被投影的目标本身不可见时,投影也会不可见
@property {string} color 要应用的颜色
@property {string} imgUrl 图片地址,如果图片加载不进来,请使用 :imgUrl="require('./img.png')" 形式
-->

<template>
  <div
    :class="$style.img"
    :style="{background: `url(${imgUrl}) no-repeat center / cover`}"
  />
</template>

<script>
  export default {
    name: 'change-img-color',
    props: {
      color: {
        type: String,
        required: true
      },
      imgUrl: {
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
