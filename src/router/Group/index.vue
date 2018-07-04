<template>
  <div :class="$style.bg">
    <div :class="$style.title">
      <div :class="$style.img1"><img src="./zuichun.png"></div>
      <div :class="$style.titleword"><b>GlobalForum<br>答案之酒烦恼<br>全球论坛</b></div>
      <div :class="$style.titletalk">你的烦恼是什么</div>
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

  let pixRatio = 1 / (window.devicePixelRatio)
  let html = document.documentElement
  document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + pixRatio + ',minimum-scale=' + pixRatio + ',maximum-scale=' + pixRatio + '">')
  html.style.fontSize = html.clientWidth / 25 + '/@rem'
  console.log(pixRatio)
  export default {
    name: 'group-view',
    components: {Item}
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

      img {
        transform: rotate(270deg);
        width: 120%;
        height: 150%;
        margin-left: 90/@rem;
      }
    }

    .titleword {
      display: inline-block;
      float: right;
      width: 40%;
      height: 50%;
      margin-top: 270/@rem;
      margin-right: 70/@rem;
      font-size: 90/@rem;
      text-align: center;
      color: rgb(249, 186, 197);
    }

    .titletalk {
      float: left;
      width: 100%;
      height: 40/@rem;
      margin-top: 90/@rem;
      font-size: 75/@rem;
      line-height: 40/@rem;
      text-align: center;
      color: rgb(249, 186, 197);
    }
  }

  .wrapper {
    padding: 0 10/@rem;
  }
</style>
