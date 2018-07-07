<template>
  <div :class="$style.protocolSection">
    <change-img-color
      :class="$style.top"
      :img-url="require('assets/logo-title.svg')"
      color="white"
    />
    <div :class="$style.bottom">
      <div :class="$style.topWrap">
        <b>?</b>
        <h4 :class="$style.title">烦恼论坛特别说明</h4>
      </div>
      <div :class="$style.bottomWrap">
        <div :class="$style.square" />
        <div :class="$style.square" />
        <div :class="$style.square" />
        <div :class="$style.square" />
        <b :class="$style.agreement">您已阅读并同意以上协议内容，同意遵守上述的协议参与本次活动。</b>
        <div :class="$style.content">
          
          <p>
            答案之酒吐槽平台致力于提供一个由用户创造高质量内容的问答社区。为了保护用户创造的内容、维护良好的社区氛围，答案之酒吐槽平台团队和答案之酒吐槽平台授权的社区管理员将依据答案之酒吐槽平台协议和本规范中的条款对注册答案之酒吐槽平台的用户和发布在答案之酒吐槽平台的内容进行管理。采取的措施包括但不限于更改或删除用户发布的内容、暂停或终止用户使用答案之酒吐槽平台的权利。
            所有有意的降低内容质量、伤害社区氛围的行为（下称「破坏」）都是不能容忍的。多数情况下社区中的其他用户会优先选择对破坏行为做出劝诫、建议和引导，答案之酒吐槽平台团队也会先发出警告并给予用户改正自己不当行为的机会，但不表示答案之酒吐槽平台团队在采取任何措施前必须首先发出警告。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ChangeImgColor } from 'components'

  export default {
    name: 'protocol',
    components: {ChangeImgColor}
  }
</script>

<style lang="less" module>
  .protocolSection {
    width: 100%;
    height: 100%;
    background-color: #000;
    
    .top {
      width: 100%;
      height: 200px;
      
      img {
        width: 100%;
      }
    }
    
    .bottom {
      position: relative;
      z-index: 9999;
      
      &::after {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: -1;
        width: 12rem;
        height: 17.5rem;
        border: 0.2rem solid #f9bac5;
        content: '';
        border-radius: 0.6rem;
      }
      
      .common {
        width: 12rem;
        margin: 0 auto;
        text-align: center;
        background-color: rgb(249, 186, 197);
      }
      
      .topWrap {
        height: 3.1rem;
        margin: 0 auto;
        text-align: center;
        border-radius: 0.6rem 0.6rem 0 0;
        .common;
        
        b {
          padding-right: 0.3rem;
          font-size: 2rem;
          line-height: 3.1rem;
        }
        
        .title {
          display: inline-block;
          font-family: '微软雅黑', serif;
          vertical-align: super;
        }
      }
      
      .bottomWrap {
        .common;
        
        position: relative;
        height: 14.5rem;
        margin-top: 0.3rem;
        padding-top: 1.8rem;
        border-radius: 0 0 0.6rem 0.6rem;
        
        .commonSquare {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: 2px solid black;
        }
        
        .square {
          
          .commonSquare;
        }
        
        .square:nth-child(1)::after,
        .square:nth-child(2)::after,
        .square:nth-child(4)::after {
          .commonSquare;
          
          right: 0.1rem;
          bottom: 0.1rem;
          border: none;
          background-color: black;
          content: '';
        }
        
        .square:nth-child(1) {
          top: 0.8rem;
          left: 0.5rem;
        }
        
        .square:nth-child(2) {
          top: 0.8rem;
          right: 0.5rem;
        }
        
        .square:nth-child(3) {
          bottom: 0.8rem;
          left: 0.5rem;
        }
        
        .agreement {
          position: absolute;
          bottom: 0.8rem;
          left: 1.7rem;
          width: 7rem;
          font-size: 0.45rem;
        }
        
        .square:nth-child(4) {
          right: 0.5rem;
          bottom: 0.8rem;
        }
        
        .content {
          width: 72%;
          height: 10.2rem;
          overflow: auto;
          margin: 0 auto;
          font-size: 0.6rem;
        }
      }
    }
  }
</style>
