<template>
  <div :class="$style.wrapper">
    <transition
      v-bind="$transitionCssModule('header')"
      appear
    >
      <div
        :class="$style.header"
        style="transform: translateY(-100%)"
      >
        <h1 :class="$style.title">Welcome</h1>
        <change-img-color
          ref="logo"
          :class="$style.logo"
          :src="require('assets/logo-title.svg')"
          color="black"
        />
        <div :class="$style.text_group">
          <h6 :class="$style.text">点击瓶子</h6>
          <h6 :class="$style.text">把你的烦恼</h6>
          <h6 :class="$style.text">匿名告诉全世界</h6>
        </div>
      </div>
    </transition>
    <div :class="$style.bottle_wrapper">
      <transition
        v-bind="$transitionCssModule('bottle')"
        appear
      >
        <router-link :class="$style.bottle" to="/protocol" />
      </transition>
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
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(249, 186, 197);
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
  }
  
  .logo {
    margin-left: 0.3rem;
    width: 100%;
    height: 6rem;
  }
  
  .text_group {
    margin: 0.5rem 0;
  }
  
  .text {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 900;
  }
  
  .header {
    padding-top: 20px;
    transform: translateY(0) !important;
  }
  
  .header_appear_active,
  .header_enter_active,
  .bottle_appear_active,
  .bottle_enter_active {
    transition: all 1s ease;
  }
  
  .header_appear,
  .header_enter {
    transform: translateY(-100%) !important;
  }
  
  .header_appear_to,
  .header_enter_to {
    transform: translateY(0) !important;
  }
  
  .bottle_appear,
  .bottle_enter {
    top: 100% !important;
  }
  
  .bottle_wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 72%;
    height: 52%;
  }
  
  .bottle {
    position: absolute;
    top: 6%;
    width: 100%;
    height: 100%;
    background: url("assets/bottle.png") no-repeat center / contain;
  }
</style>
