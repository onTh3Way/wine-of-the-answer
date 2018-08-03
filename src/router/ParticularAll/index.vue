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
    </div>

    <div :class="$style.forward_major">
      <portrait />
      <div :class="$style.status_bar_top">
        <icon :class="$style.aixin" type="dianzan" />
        <p :class="$style.aixin_word"> 520</p>
        <tread-icon :class="$style.tread_icon" />
      </div>
    </div>
    <div :class="$style.border" />
    <div :class="$style.comment_input">
      <input type="text" value="请在此输入你的评论,限30个字">
    </div>

    <div :class="$style.hot_comment">
      <div :class="$style.comment_word">
        全部评论 2000
      </div>

      <div :class="$style.post">
        <more-icon />
        <portrait-all />
        <icon :class="$style.post_dianzan" type="dianzan" />
        <p :class="$style.dianzan_p"> 520</p>
        <div :class="$style.status_time">
          3小时前
        </div>
        <div :class="$style.status_bar">
          <tread-icon :class="$style.tread_bottom" />
        </div>
        <div :class="$style.bottom_line_bottom" />
      </div>

      <div :class="$style.post">
        <more-icon />
        <portrait-all />
        <icon :class="$style.post_dianzan" type="dianzan" />
        <p :class="$style.dianzan_p"> 520</p>
        <div :class="$style.status_time">
          3小时前
        </div>
        <div :class="$style.status_bar">
          <tread-icon :class="$style.tread_bottom" />
        </div>
        <div :class="$style.bottom_line_bottom" />
      </div>

      <div :class="$style.post">
        <more-icon />
        <portrait-all />
        <icon :class="$style.post_dianzan" type="dianzan" />
        <p :class="$style.dianzan_p"> 520</p>
        <div :class="$style.status_time">
          3小时前
        </div>
        <div :class="$style.status_bar">
          <tread-icon :class="$style.tread_bottom" />
        </div>
        <div :class="$style.bottom_line_bottom" />
      </div>

      <div :class="$style.post">
        <more-icon />
        <portrait-all />
        <icon :class="$style.post_dianzan" type="dianzan" />
        <p :class="$style.dianzan_p"> 520</p>
        <div :class="$style.status_time">
          3小时前
        </div>
        <div :class="$style.status_bar">
          <tread-icon :class="$style.tread_bottom" />
        </div>
        <div :class="$style.bottom_line_bottom" />
      </div>

      <div :class="$style.more_comment">
        没有更多
      </div>
    </div>

  </div>
</template>

<script>
  import icon from 'components/Icon'
  import returnBtn from 'components/ReturnBtn'
  import portrait from '../BBS/Portrait'
  import portraitAll from './PortraitAll'
  import treadIcon from '../BBS/TreadIcon'
  import moreIcon from '../BBS/MoreIcon'
  import status from '../BBS/Status'
  import post from '../BBS/Post'

  export default {
    name: 'particular-all-view',
    components: {icon, returnBtn, portraitAll, treadIcon, moreIcon, status, post, portrait}
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
      background: @greey;
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
      margin-top: 30/@rem;
      .horizon-center;

      .status_bar_top {
        float: right;
        width: 360/@rem;
        height: 30/@rem;
        margin-top: -20/@rem;
      }
    }

    .border {
      float: right;
      width: 366/@rem;
      height: 1px;
      margin-top: -30/@rem;
      margin-right: 20/@rem;
      background: #262626;
    }

    .comment_input {
      float: right;
      width: 366/@rem;
      height: 60/@rem;
      margin-top: -26/@rem;
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
      height: auto;
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
    }
  }

  .post {
    width: 438/@rem;
    height: 110/@rem;
    margin-top: 50/@rem;

    .horizon-center;

    .status_time,
    .post_dianzan {
      float: left;
      width: 120/@rem;
      height: 25/@rem;
      margin-top: -48/@rem;
      margin-left: 100/@rem;
      font-size: 14/@rem;
      text-align: center;
      color: #736d6d;
    }

    .post_dianzan {
      width: 18/@rem;
      height: 18/@rem;
      margin-left: 72/@rem;
    }

    .dianzan_p {
      float: left;
      width: 50/@rem;
      height: 20/@rem;
      margin-top: -48/@rem;
      margin-left: 94/@rem;
      font-size: 14/@rem;
      color: @pink;
    }
  }

  .portrait {
    float: right;
    width: 425/@rem;
    height: 115/@rem;
    margin-top: -90/@rem;
    margin-right: -10/@rem;
    padding-top: 25/@rem;
    background: black;
    border-radius: 5/@rem;
  }

  .status_bar {
    float: right;
    width: 360/@rem;
    height: 30/@rem;
    margin-top: -55/@rem;
  }

  .bottom_line_bottom {
    float: right;
    width: 370/@rem;
    height: 2/@rem;
    margin-top: -26/@rem;
    background: #242424;
  }

  .report {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200/@rem;
    text-align: center;
    color: #000;
    background: white;
    opacity: 0.9;
  }

  .more_comment {
    float: left;
    width: 100%;
    height: 100/@rem;
    font-size: 12/@rem;
    line-height: 100/@rem;
    text-align: center;
    color: @pink;
  }

  .aixin {
    display: inline-block;
    float: left;
    width: 18/@rem;
    height: 18/@rem;
  }

  .aixin_word {
    display: inline-block;
    float: left;
    margin-left: 8/@rem;
    font-size: 14/@rem;
    color: @pink;
  }

  .tread_icon {
    margin-top: -10/@rem;
  }

  .tread_bottom {
    margin-top: -4/@rem;
  }
</style>
