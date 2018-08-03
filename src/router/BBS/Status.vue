<template>
  <div :class="$style.status">
    <div :class="$style.dianzan">
      <icon :class="$style.dianzan_icon" type="dianzan" />
      <p :class="$style.dianzan_p">&nbsp;520</p>
    </div>
    <div :class="$style.comment">
      <icon :class="$style.comment_icon" type="pinglun" />
      <p :class="$style.comment_p">&nbsp;7485</p>
    </div>
  </div>
</template>

<script>
  import icon from 'components/Icon'
  export default {
    name: 'status',
    components: {icon}
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .status {
    display: flex;
    z-index: 9999;
    width: 230/@rem;
    height: 28/@rem;
    margin-top: 0/@rem;
    text-align: center;

    div {
      display: inline-block;
      width: 117/@rem;
      height: 30/@rem;

      p {
        display: inline-block;
      }

      .dianzan_icon,
      .comment_icon {
        display: inline-block;
        width: 18/@rem;
        height: 18/@rem;
        margin-top: 8/@rem;
      }

      .dianzan_icon {
        float: left;
      }

      .comment_icon {
        float: left;
        margin-left: 34/@rem;
      }

      .comment_p,
      .dianzan_p {
        float: right;
        width: 40/@rem;
        height: 30/@rem;
        margin-right: 20/@rem;
        font-size: 14/@rem;
        line-height: 32/@rem;
        text-align: left;
        color: @pink;
      }

      .dianzan_p {
        margin-right: 54/@rem;
      }
    }
  }
</style>
