<template>
  <div :class="$style.wrapper">
    <change-img-color
      :class="$style.logo"
      :src="require('assets/logo-title.svg')"
      color="white"
    />
    <div :class="$style.protocol">
      <div :class="$style.protocol_header">
        <b>?</b>
        <h4 :class="$style.title">烦恼论坛特别说明</h4>
      </div>
      <div :class="$style.protocol_footer">
        <div :class="[$style.fixed, $style.square, $style.cover]" />
        <div :class="[$style.fixed, $style.square, $style.cover]" />
        <router-link
          :class="[$style.fixed, $style.agreement]"
          to="/categories"
          @click.native="agreeProtocol"
        >
          <div :class="$style.square" />
          <div>
            <p>您已阅读并同意以上协议内容,</p>
            <p>同意遵守上述的协议参与本次活动</p>
          </div>
        </router-link>
        <div :class="[$style.fixed, $style.square, $style.cover]" />
        <div :class="$style.content">
          <div>
            &nbsp;&nbsp;答案之酒吐槽平台
            致力于提供一个由用户创造高质量内容的问答社区。为了保护用户创造的内容、维护良好的社区氛围，答案之酒吐槽平台团队和答案之酒吐槽平台授权的社区管理员将依据答案之酒吐槽平台协议和本规范中的条款对注册答案之酒吐槽平台的用户和发布在答案之酒吐槽平台的内容进行管理。采取的措施包括但不限于更改或删除用户发布的内容、暂停或终止用户使用答案之酒吐槽平台的权利。
            所有有意的降低内容质量、伤害社区氛围的行为（下称「破坏」）都是不能容忍的。多数情况下社区中的其他用户会优先选择对破坏行为做出劝诫、建议和引导，答案之酒吐槽平台团队也会先发出警告并给予用户改正自己不当行为的机会，但不表示答案之酒吐槽平台团队在采取任何措施前必须首先发出警告。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ChangeImgColor } from 'components'

  export default {
    name: 'protocol',
    components: {ChangeImgColor},
    methods: {
      agreeProtocol () {
        this.$service.agreeProtocol()
      }
    }
  }
</script>

<style lang="less" module>
  @protocol-radius: 12px;
  
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    width: 100%;
    height: 100%;
    background-color: @black;
    overflow: hidden;
    
    > div {
      min-height: 0;
    }
  }
  
  .logo {
    width: 100%;
    height: 5rem;
  }
  
  .protocol {
    display: flex;
    flex-direction: column;
    margin: 0.8rem 2rem;
    flex: 1;
    z-index: 10;
    
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 10px;
      width: 100%;
      height: 100%;
      border: 0.2rem solid @pink;
      border-radius: 15px;
      z-index: -1;
    }
    
    > div {
      min-height: 0;
    }
  }
  
  .protocol_header {
    width: 100%;
    height: 3.1rem;
    margin: 0 auto;
    text-align: center;
    border-radius: @protocol-radius @protocol-radius 0 0;
    background-color: @pink;
    
    b {
      padding-right: 0.3rem;
      font-size: 2rem;
      line-height: 3.1rem;
    }
    
    .title {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 900;
      vertical-align: super;
    }
  }
  
  .protocol_footer {
    flex: 1;
    margin-top: 0.3rem;
    border-radius: 0 0 @protocol-radius @protocol-radius;
    background-color: @pink;
    overflow: hidden;
    
    .content {
      position: absolute;
      padding: 1.8rem 1.8rem 3rem;
      width: 100%;
      height: 100%;
      overflow: hidden;
      
      > div {
        height: 100%;
        font-size: 0.6rem;
        font-weight: 900;
        overflow: auto;
      }
    }
    
    .agreement {
      div {
        display: inline-block;
        height: 1rem;
      }
      
      p {
        transform: scale(0.9);
        font-size: 0.5rem;
        font-weight: 900;
        color: @black;
      }
    }
  }
  
  .square {
    &, &::after {
      width: 1rem;
      height: 1rem;
      border: 2px solid black;
    }
    
    &.cover::after {
      position: absolute;
      right: 0.1rem;
      bottom: 0.1rem;
      border: none;
      background-color: black;
      content: '';
    }
  }
  
  .fixed {
    position: absolute;
    z-index: 99;
  }
  
  .fixed:nth-child(1) {
    top: 0.8rem;
    left: 0.5rem;
  }
  
  .fixed:nth-child(2) {
    top: 0.8rem;
    right: 0.5rem;
  }
  
  .fixed:nth-child(3) {
    bottom: 0.8rem;
    left: 0.5rem;
  }
  
  .fixed:nth-child(4) {
    right: 0.5rem;
    bottom: 0.8rem;
  }
</style>
