<template>
  <div :class="$style.bg">
    <div :class="$style.top">
      <img src="~assets/bottle.png">
    </div>

    <div :class="$style.word">
      开始定制你的专属吐槽
    </div>

    <div :class="$style.bottom">
      <img src="~assets/bottle2.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less" module>
    .bg{
        img{
            width: 100%;
            height: auto;
        }
        width: 100%;
        height: 100%;
        background: #000;
        .top{
            width: 15rem;
            height: 25rem;
            float: left;
            margin-top: -15rem;
            border: 1px solid red;
            .horizon-center;
        }

        .word{
            font-size: 1rem;
            float: left;
            color: aqua;
            margin-top: -3.5rem;
            .horizon-center;
        }

        .bottom{
            float: left;
            position: fixed;
            margin-bottom: 0;
            width: 15rem;
            height: 25rem;
            margin-top: -2rem;
            .horizon-center;
        }
    }
</style>
