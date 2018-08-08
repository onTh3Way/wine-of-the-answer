<template>
  <div :class="$style.background">
    <div :class="$style.return_btn">
      <return-btn />
    </div>

    <div :class="$style.bg_top">
      <span :class="$style.classify">
        分类: 情感
      </span>
      <span :class="$style.concern_num">
        520&nbsp;&nbsp;关注
      </span>
      <span :class="$style.concern">
        <icon :class="$style.concern_icon" type="add" />
        <p :class="$style.concern_btn">&nbsp;关注该烦恼</p>
      </span>
    </div>

    <div :class="$style.forward_major">
      <portrait :class="$style.portrait_top" />
      <tread-icon />
    </div>
    <div :class="$style.border" />
    <icon :class="$style.agreement_icon" type="agreement" />
    <p :class="$style.agreement_word">45654</p>
    <icon :class="$style.comment_icon" type="comment" />
    <p :class="$style.comment_word">520</p>
    <icon :class="$style.forward_icon" type="forward" />
    <div :class="$style.comment_input">
      <input type="text" value="请在此输入你的评论,限30个字">
    </div>

    <div :class="$style.hot_comment">
      <div :class="$style.comment_word">
        <b>热门评论</b>

      </div>
      <div />
      <div :class="$style.major">
        <portrait :class="$style.portrait_one" />
        <icon :class="$style.more_icon" type="more" />
        <portrait :class="$style.one_content" />

        <icon :class="$style.agreement_icon_bottom" type="agreement" />
        <p :class="$style.agreement_word_bottom">45654</p>
        <icon :class="$style.comment_icon_bottom" type="comment" />
        <p :class="$style.comment_word_bottom">520</p>

        <icon :class="$style.disagreement" type="disagreement" />
        <div :class="$style.border_two" />
      </div>
      <br>
      <portrait />
      <border />
      <portrait />
      <border />
      <portrait />
      <border />
      <portrait />
      <border />
    </div>
  </div>
</template>

<script>
  import icon from 'components/Icon'
  import returnBtn from 'components/ReturnBtn'
  import portrait from '../BBS/Portrait'
  import treadIcon from '../BBS/TreadIcon'
  import border from 'router/Particulars/Border'
  export default {
    name: 'particulars-view',
    components: {icon, returnBtn, portrait, treadIcon, border}
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
      background: black;
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

      .concern {
        float: right;
        width: 110/@rem;
        height: 30/@rem;

        .concern_icon {
          float: left;
          width: 18/@rem;
          height: 18/@rem;
          margin-top: 4/@rem;
        }

        .concern_btn {
          float: left;
          font-size: 14/@rem;
          line-height: 30/@rem;
          color: @pink;
        }
      }
    }

    .forward_major {
      float: left;
      width: 438/@rem;
      height: 150/@rem;
      margin-top: 30/@rem;
      .horizon-center;
    }

    .border,
    .border_two,
    .border_bottom {
      float: right;
      display: inline-block;
      width: 366/@rem;
      height: 1px;
      margin-top: 10/@rem;
      margin-right: 20/@rem;
      background: #262626;
    }

    .border_two{
      width: 380/@rem;
      margin-top: -40/@rem;
    }

    .comment_input {
      float: right;
      width: 366/@rem;
      height: 60/@rem;
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

    .hot_comment {
      float: left;
      width: 100%;
      height: 100%;
      margin-top: 10/@rem;
      background: @greey;

      .comment_word {
        float: left;
        width: 90/@rem;
        height: 20/@rem;
        margin-top: 6/@rem;
        margin-left: 20/@rem;
        font-size: 13/@rem;
        color: @pink;
      }

      .major {
        width: 100%;
        height: auto;
        float: left;
        .more_icon {
          width: 18/@rem;
          height: 18/@rem;
          margin-top: -210/@rem;
          position: relative;
          z-index: 99999;
          display: inline-block;
          margin-right: 24/@rem;
          float: right
        }
        .portrait_one{
          float: left;
          margin-top:80/@rem;
        }
        .one_content{
          width: 450/@rem;
          background: #000;
          height: 130/@rem;
          margin-top: -34/@rem;
        }
      }
    }

    .agreement_icon,
    .agreement_icon_bottom,
    .comment_icon,
    .comment_icon_bottom,
    .disagreement {
      width: 18/@rem;
      height: 18/@rem;
      display: inline-block;
      float: left;
      margin-top: -22/@rem;
      margin-left: 100/@rem;
    }
    .disagreement{
      margin-top: -60/@rem;
      margin-left:438/@rem;
    }
    .comment_icon{
      margin-left: 200/@rem;
    }
    .comment_icon_bottom{
      margin-left: 190/@rem;
      margin-top: -60/@rem;
    }

    .agreement_word,
    .agreement_word_bottom,
    .comment_word_bottom,
    .comment_word
    {
      font-size: 14/@rem;
      display: inline-block;
      float: left;
      color: pink;
      margin-top: -22/@rem;
      margin-left: 120/@rem;
    }
    .agreement_word_bottom,
    .agreement_icon_bottom{
      margin-top: -60/@rem;
    }
    .comment_word {
      margin-left: 220/@rem;
    }
    .comment_word_bottom{
      margin-left: 212/@rem;
      margin-top: -60/@rem;
    }

    .forward_icon{
      width: 18/@rem;
      height: 18/@rem;
      float: right;
      margin-top: -22/@rem;
      margin-right: 25/@rem;
    }
    .portrait_top {
      margin-top: -30/@rem;
    }
  }
</style>
