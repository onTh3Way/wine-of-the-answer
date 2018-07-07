<template>
  <div>
    <div :class="$style.section">
      <div
        :class="$style.top"
        :style="{
          transform: 'translateY(-100%)'
        }"
      >
        <h1>Welcome</h1>
        <change-img-color
          :class="$style.bg"
          :img-url="require('assets/logo-title.svg')"
          color="black"
        />
        <div :class="$style.text">
          <h6>点击瓶子</h6>
          <h6>把你的烦恼</h6>
          <h6>匿名告诉全世界</h6>
        </div>
      </div>
      <div
        :class="$style.bottombg"
        :style="{
          transform: 'translateY(200%)'
        }"
      >
        <img src="~assets/bottle.png">
      </div>
    </div>
  </div>
</template>

<script>
  import { ChangeImgColor } from 'components'

  export default {
    name: 'home',
    components: {ChangeImgColor}
  }
</script>

<style lang="less" module>
  .section {
    height: 100%;
    text-align: center;
    background-color: rgb(249, 186, 197);
  }
  
  .top {
    position: absolute;
    transform: translateY(0) !important;
    width: 100%;
    transition: transform 1s ease;
    
    h1 {
      padding-top: 0.85rem;
      color: black;
    }
    
    .bg {
      width: 100%;
      height: 200px;
      margin-top: -0.4rem;
    }
  }
  
  .bottombg {
    position: fixed;
    transform: translateY(100%) !important;
    width: 100%;
    transition: transform 1s ease;
    
    img {
      width: 70%;
      height: 54.5%;
    }
  }
  
  .text > h6 {
    padding: 0.1rem 0;
  }
</style>
