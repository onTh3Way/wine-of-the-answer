<template>
  <div :class="$style.background">
    <div :class="$style.return_btn">
      <return-btn />
      <div :class="$style.trouble_details">
        烦恼详情
      </div>
    </div>

    <div :class="$style.bg_top">
      <span :class="$style.classify">
        分类: 情感
      </span>
      <span :class="$style.concern_num">
        520&nbsp;&nbsp;关注
      </span>
    </div>

    <div :class="$style.forward_major">
      <portrait :class="$style.portrait_top" />
      <div :class="$style.status_bar_top">
        <icon :class="$style.agreement_icon" type="agreement" />
        <p :class="$style.agreement_word"> 520</p>
        <icon :class="$style.forward_icon" type="forward" />
      </div>
    </div>
    <div :class="$style.border" />
    <div :class="$style.comment_input">
      <input type="text" value="请在此输入你的评论,限30个字">
    </div>

    <div :class="$style.all_comment">
      <div :class="$style.comment_word">
        全部评论 2000
      </div>
      
      <div :class="$style.major">
        <portraitall :class="$style.portrait_one" /> 
        <icon :class="$style.agreement_icon" type="agreement" />
        <p :class="$style.agreement_word">10</p>
        <p :class="$style.time">2小时前</p>
        <icon :class="$style.disagreement_icon" type="disagreement" />
        <icon :class="$style.more_icon" type="more" />
        <div :class="$style.border_all" />

        <portraitall :class="$style.portrait_one" /> 
        <icon :class="$style.agreement_icon" type="agreement" />
        <p :class="$style.agreement_word">10</p>
        <p :class="$style.time">2小时前</p>
        <icon :class="$style.disagreement_icon" type="disagreement" />
        <icon :class="$style.more_icon" type="more" />
        <div :class="$style.border_all" />

        <portraitall :class="$style.portrait_one" /> 
        <icon :class="$style.agreement_icon" type="agreement" />
        <p :class="$style.agreement_word">10</p>
        <p :class="$style.time">2小时前</p>
        <icon :class="$style.disagreement_icon" type="disagreement" />
        <icon :class="$style.more_icon" type="more" />
        <div :class="$style.border_all" />

        <portraitall :class="$style.portrait_one" /> 
        <icon :class="$style.agreement_icon" type="agreement" />
        <p :class="$style.agreement_word">10</p>
        <p :class="$style.time">2小时前</p>
        <icon :class="$style.disagreement_icon" type="disagreement" />
        <icon :class="$style.more_icon" type="more" />
        <div :class="$style.border_all" />
      </div>

      <div :class="$style.more_comment">
        没有更多
      </div>
    </icon></div>

  </div>
</template>

<script>
  import icon from 'components/Icon'
  import returnBtn from 'components/ReturnBtn'
  import portrait from 'components/portrait'
  import portraitall from 'components/PortraitAll'

  export default {
    name: 'particular-all-view',
    components: { icon, returnBtn, portrait, portraitall }
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .background {
    width: 100%;
    height: 100%;
    color: #fff;
    background: black;

    .return_btn {
      position: fixed;
      z-index: 99999;
      width: 100%;
      height: 60/@rem;
      background: @greey;
      .trouble_details{
        height: 60/@rem;
        color: @pink;
        text-align: center;
        font-size: 24/@rem;
        line-height: 65/@rem;
      }
    }

    .bg_top {
      float: left;
      width: 100%;
      height: 30/@rem;
      margin-top: 70/@rem;

      .classify,
      .concern_num {
        float: left;
        width: 150/@rem;
        height: 30/@rem;
        font-size: 14/@rem;
        line-height: 30/@rem;
        color: @pink;
      }

      .classify {
        width: 100/@rem;
        margin-left: 28/@rem;
      }
    }

    .forward_major {
      float: left;
      width: 438/@rem;
      height: 150/@rem;
      margin-top: 2/@rem;
      .horizon-center;

      .status_bar_top {
        float: right;
        width: 360/@rem;
        height: 30/@rem;
        margin-top: -25/@rem;
      }
    }

    .border,
    .border_all {
      float: right;
      width: 366/@rem;
      height: 1px;
      margin-top: 0/@rem;
      margin-right: 20/@rem;
      background: #262626;
    }
    .border_all {
      margin-top: -80/@rem;
    }

    .comment_input {
      float: right;
      width: 366/@rem;
      height: 60/@rem;
      margin-top: 10/@rem;
      margin-right: 20/@rem;

      input {
        float: left;
        width: 100%;
        height: 60/@rem;
        border: none;
        font-size: 12/@rem;
        color: white;
        background: #000;
      }
    }

    .major {
      margin-top: 90/@rem;
      width: 100%;
      height: auto;
    }

    .all_comment {
      float: left;
      width: 100%;
      height: auto;
      margin-top: 10/@rem;
      background: @greey;

    .portrait_one {
      margin-top: 10/@rem;
    }
    //  .segmentation {
      
    //    margin-top: 60/@rem;
    //    display: block;
    //    border: 1px solid red;
    //  }

      .agreement_icon,
      .agreement_word,
      .time,
      .disagreement_icon,
      .more_icon{
        float: left;
        width: 18/@rem;
        display: inline-block;
        height: 18/@rem;
        margin-left: 100/@rem;
        margin-top: -100/@rem;
      }
      .agreement_word{
        margin-left: 125/@rem;
      }
      .time{
        width: 100/@rem;
        color: #877f80;
        font-size: 12/@rem;
        margin-left: 160/@rem;
      }
      .disagreement_icon,
      .more_icon {
        float: right;
        margin-right: 30/@rem;
      }
      .more_icon{
        margin-top: -210/@rem;
      }

      .comment_word {
        float: left;
        width: 150/@rem;
        height: 20/@rem;
        margin-top: 6/@rem;
        margin-left: 20/@rem;
        font-size: 13/@rem;
        color: @pink;
      }
    }
  }

  .more_comment {
    float: left;
    width: 100%;
    height: 60/@rem;
    font-size: 12/@rem;
    line-height: 80/@rem;
    text-align: center;
    margin-top: -20/@rem;
    color: @pink;
  }

  .agreement_icon,
  .forward_icon {
    display: inline-block;
    float: left;
    width: 18/@rem;
    height: 18/@rem;
  }

  .forward_icon {
    float: right;
    margin-right: 8/@rem;
  }

  .agreement_word {
    display: inline-block;
    float: left;
    margin-left: 8/@rem;
    font-size: 14/@rem;
    color: @pink;
  }

</style>
