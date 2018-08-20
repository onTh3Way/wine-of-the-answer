<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <title-bar>烦恼论坛</title-bar>
      <tab
        :class="$style.tab"
        custom-bar-width="2rem"
        default-color="#A48E8E"
        active-color="pink"
      >
        <tab-item selected>最新排序</tab-item>
        <tab-item>最热排序</tab-item>
      </tab>
    </div>
    
    <div :class="$style.content" />
    
    <!--<div :lass="$style.major">-->
    <!--<div :class="$style.release">-->
    <!--<icon :class="$style.release_icon" type="release" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.post">-->
    <!--<portrait :class="$style.portrait" />-->
    <!--<icon :class="$style.agreement_icon" type="agreement" />-->
    <!--<p :class="$style.agreement_word">520</p>-->
    <!--<icon :class="$style.comment_icon" type="comment" />-->
    <!--<p :class="$style.comment_word">1314</p>-->
    <!--<icon :class="$style.forward_icon" type="forward" />-->
    <!--</div>-->
    <!--</div>-->
    <!---->
    <!--<div :class="$style.bottom">-->
    <!--<div :class="$style.bbs">论坛</div>-->
    <!--<div :class="$style.trouble">我的烦恼</div>-->
    <!--</div>-->
  
  </div>
</template>

<script>
  import { TitleBar } from 'components'
  import { Tab, TabItem } from 'vux/components/tab'

  export default {
    name: 'index',
    components: {
      TitleBar,
      Tab,
      TabItem
    }
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;
  
  .wrapper {
    width: 100%;
    height: 100%;
    background: black;
  }
  
  .tab {
    :global {
      .vux-tab {
        background-color: transparent;
      }
      
      .vux-tab-item {
        font-size: 0.6rem;
        font-weight: 900;
      }
    }
  }
  
  .bg {
    width: 100%;
    height: 100%;
    background: #000;
    
    .returnBtn {
      position: fixed;
      z-index: 99999;
      width: 100%;
      height: 60 / @rem;
      background: @greey;
      .title {
        height: 60 / @rem;
        color: @pink;
        text-align: center;
        font-size: 24 / @rem;
        line-height: 65 / @rem;
      }
    }
    
    .tab {
      width: 100%;
      height: 50 / @rem;
      margin-top: 70 / @rem;
      color: white;
      float: left;
      border-bottom: 1px solid @greey;
      
      div {
        height: 100%;
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 58 / @rem;
        color: @pink;
        font-size: 14 / @rem;
      }
      
      .new {
        border-bottom: 2 / @rem solid @pink;
      }
      .hot {
        color: #877f80;
      }
    }
    
    .release {
      width: 55 / @rem;
      height: 55 / @rem;
      border-radius: 50%;
      background: @pink;
      position: fixed;
      bottom: 240 / @rem;
      right: 40 / @rem;
      z-index: 999;
      opacity: 0.8;
      .release_icon {
        position: relative;
        .all-center;
      }
    }
    
    .major {
      width: 100%;
      height: auto;
      background: #000;
      margin-top: 6 / @rem;
      float: left;
      margin-bottom: 80 / @rem;
      
      .post {
        width: 96%;
        border-radius: 15 / @rem;
        height: 144 / @rem;
        background: @greey;
        margin-top: 10 / @rem;
        .horizon-center;
        
        .portrait {
          float: left;
          display: inline-block;
          margin-top: -4 / @rem;
        }
        
        .agreement_word,
        .comment_word {
          color: @pink;
          font-size: 14 / @rem;
          height: 18 / @rem;
          width: 30 / @rem;
        }
        
        .agreement_icon,
        .comment_icon,
        .agreement_word,
        .comment_word,
        .forward_icon {
          margin-top: -25 / @rem;
          display: inline-block;
          width: 18 / @rem;
          height: 18 / @rem;
          float: left;
          margin-left: 20 / @rem;
        }
        .forward_icon {
          float: right;
          margin-right: 20 / @rem;
        }
        .agreement_icon {
          margin-left: 88 / @rem;
        }
        .agreement_word {
          margin-left: 110 / @rem;
        }
        .comment_icon {
          margin-left: 170 / @rem;
        }
        .comment_word {
          margin-left: 190 / @rem;
        }
      }
    }
    
    .bottom {
      width: 100%;
      height: 80 / @rem;
      position: fixed;
      bottom: 0;
      color: @pink;
      background: #000;
      div {
        width: 50%;
        height: 60 / @rem;
        font-size: 20 / @rem;
        margin-top: 14 / @rem;
        text-align: center;
        line-height: 60 / @rem;
        display: inline-block;
      }
      .bbs {
        background: #000;
        float: left;
        color: @pink;
      }
      .trouble {
        float: right;
        background: @greey;
        color: #877f80;
      }
    }
    
    .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      background: #000;
      opacity: 0.8;
      border: 1px solid blue;
      z-index: 9998;
      display: none;
    }
    
    .pop {
      width: 96%;
      height: 250 / @rem;
      position: fixed;
      background: #fffdfd;
      border-radius: 15 / @rem;
      text-align: center;
      line-height: 100 / @rem;
      float: left;
      z-index: 9999;
      margin-left: 2%;
      margin-top: 280 / @rem;
      
      .title {
        width: 100%;
        height: 60 / @rem;
        text-align: center;
        line-height: 60 / @rem;
        font-size: 30/@rem;
      }
      
      .content {
        width: 80%;
        margin: 0 auto;
        height: 120/@rem;
        font-size: 20/@rem;
        color: #877f80;
        text-align: center;
      }
      
      .bottom_button {
        width: 100%;
        height: 60/@rem;
        position: relative;
        bottom: 0;
        div {
          width: 50%;
          height: 60/@rem;
          line-height: 60/@rem;
          text-align: center;
          font-size: 22/@rem;
          display: inline-block;
        }
        .anonymous {
          color: #363535;
        }
        .real_name {
          color: @pink;
        }
      }
    }
  }
</style>
