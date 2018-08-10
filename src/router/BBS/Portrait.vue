<template>
  <div :class="$style.portrait">
    <div :class="$style.details">
      <img src="../../assets/avatar.jpg">
    </div>
    <div :class="$style.information">
      <div :class="$style.username">
        <b>_Nikolaus</b>
      </div>
      <div :class="$style.time">
        3小时前
      </div>
      <div :class="$style.subject">
        <p>如果一件事你不相信自己能做到，那你就真的做不到！因为你连希望都丢掉了，你又怎么能做到？</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .portrait {
    margin-top: 6/@rem;
    display: inline-block;
    width: 450/@rem;
    height: 150/@rem;
    .all-center;

    .details {
      float: left;
      width: 50/@rem;
      height: 50/@rem;
      margin-top: 10/@rem;
      margin-left: 20/@rem;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .information {
      float: right;
      width: 370/@rem;
      height: 150/@rem;

      .username {
        width: 200/@rem;
        height: 25/@rem;
        margin-top: 12/@rem;
        font-size: 18/@rem;
        line-height: 25/@rem;
        text-align: left;
        color: #fff;
      }

      .time {
        width: 200/@rem;
        height: 16/@rem;
        margin-top: 4/@rem;
        font-size: 14/@rem;
        line-height: 15/@rem;
        text-align: left;
        color: #736d6d;
      }

      .subject {
        width: 360/@rem;
        height: 60/@rem;
        margin-top: 5/@rem;
        font-size: 15/@rem;
        line-height: 30/@rem;
        text-align: left;
        color: #b3a8aa;
      }
    }
  }
</style>

<script>
  import icon from 'components/Icon'
  import Status from '@/router/BBS/Status'

  export default {
    name: 'portrait',
    components: {
      icon,
      Status
    }
  }
</script>
