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
      <more-icon />
      <portrait />
      <tread-icon />
    </div>
    <div :class="$style.border" />
    <div :class="$style.comment_input">
      <input type="text" value="请在此输入你的评论,限30个字">
    </div>

    <div :class="$style.hot_comment">
      <div :class="$style.comment_word">
        热门评论
      </div>

      <div />
    </div>
  </div>
</template>

<script>
  import icon from 'components/Icon'
  import returnBtn from 'components/ReturnBtn'
  import portrait from '../BBS/Portrait'
  import treadIcon from '../BBS/TreadIcon'
  import moreIcon from '../BBS/MoreIcon'
  export default {
    name: 'particulars-view',
    components: {icon, returnBtn, portrait, treadIcon, moreIcon}
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
    font-family: '@font';
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

    .border {
      float: right;
      width: 366/@rem;
      height: 1px;
      margin-top: 10/@rem;
      margin-right: 20/@rem;
      background: #262626;
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
      border: 1px solid red;
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
    }
  }
</style>
