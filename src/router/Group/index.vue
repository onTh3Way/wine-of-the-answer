<template>
  <div :class="$style.bg">
    <div :class="$style.title">
      <div :class="$style.img1"><img src="~assets/lips.png"></div>
      <div :class="$style.titleword"><b>GlobalForum<br>答案之酒烦恼<br>全球论坛</b></div>
      <div :class="$style.titletalk">你的烦恼是什么?</div>
    </div>
    <div :class="$style.wrapper">
      <div>
        <item>婚姻 Married</item>
        <item mode="black">工作 Work</item>
        <item>金钱 Money</item>
        <item mode="black">学业 Study</item>
        <item>家庭 Family</item>
        <item mode="black">健康 Healthy</item>
        <item>其它 Others...</item>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
    name: 'group-view',
    components: {Item},
    mounted () { console.log(this.$style) }
  }
</script>

<style lang="less" module>
  @rem: 30rem;

  .bg {
    width: 100%;
    height: 100%;
    background-color: black;
  }

  .title {
    width: 100%;
    height: 40%;

    .img1 {
      display: inline-block;
      float: left;
      width: 50%;
      height: 100%;
      margin-top: -24%;
      margin-left: 25/@rem;

      img {
        transform: rotate(270deg);
        width: 120%;
        height: 150%;
        display: inline-block;
        left: 20/@rem;
      }
    }

    .titleword {
      display: inline-block;
      margin-top:100/@rem;
      float: right;
      width: 40%;
      height: 50%;
      margin-right: 20/@rem;
      font-size: 30/@rem;
      text-align: center;
      color: rgb(249, 186, 197);
    }

    .titletalk {
      float: left;
      width: 100%;
      height: 40/@rem;
      margin-top: 20/@rem;
      font-size: 30/@rem;
      line-height: 40/@rem;
      text-align: center;
      color: rgb(249, 186, 197);
    }
  }

  .wrapper {
    padding: 0 10/@rem;
  }
</style>
