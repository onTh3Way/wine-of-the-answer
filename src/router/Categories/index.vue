<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <logo :class="$style.logo" />
      <div :class="$style.title">
        <x-text>GlobalForum</x-text>
        <x-text>答案之酒烦恼</x-text>
        <x-text>全球论坛</x-text>
      </div>
      <x-text :class="$style.question">你的烦恼是什么?</x-text>
    </div>
    <div :class="$style.items">
      <item to="/home/categories/married">婚姻 Married</item>
      <item to="/home/categories/work" mode="black">工作 Work</item>
      <item to="/home/categories/money">金钱 Money</item>
      <item to="/home/categories/study" mode="black">学业 Study</item>
      <item to="/home/categories/family">家庭 Family</item>
      <item to="/home/categories/healthy" mode="black">健康 Healthy</item>
      <item to="/home/categories/others">其它 Others...</item>
    </div>
  </div>
</template>

<script>
  import Logo from './Logo'
  import XText from './Text'
  import Item from './Item'

  export default {
    name: 'group-view',
    components: {
      Logo,
      XText,
      Item
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 0.7rem;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    overflow: auto;
  }
  
  .header {
    position: relative;
    margin-top: -28%;
  }
  
  .logo {
    width: 50%;
  }
  
  .title {
    display: inline-block;
    vertical-align: middle;
    padding-left: 1rem;
    width: 50%;
  }
  
  .question {
    position: absolute;
    transform: translateX(-50%);
    bottom: 2rem;
    left: 50%;
  }
  
  .items {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    margin-top: -7%;
    overflow: hidden;
  }
</style>
