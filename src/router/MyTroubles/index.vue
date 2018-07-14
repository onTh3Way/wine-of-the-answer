<template>
  <div :class="$style.bg">
    <div :class="$style.returnBtn">
      <return-btn />
    </div>
    <div :class="$style.my_troubles">
      <icon :class="$style.list_icon" type="list" />
      &nbsp;&nbsp;我的烦恼
    </div>

    <div :class="$style.list">
      <div :class="$style.list_once">
        <post :class="$style.post_information" />
      </div>
    </div>
  </div>
</template>

<script>
  import returnBtn from 'components/ReturnBtn'
  import Icon from '@/components/Icon/index'
  import post from '../BBS/Portrait'

  export default {
    name: 'index',
    components: {
      Icon,
      returnBtn,
      post
    }
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;
  @greey: #101010;
  @font: Arial;

  .bg {
    width: 100%;
    height: 100%;
    background: #000;

    .returnBtn {
      position: fixed;
      top: 0;
      z-index: 99998;
      height: 60/@rem;
    }

    .my_troubles {
      position: fixed;
      top: 60/@rem;
      z-index: 9999;
      width: 100%;
      height: 60/@rem;
      font-size: 30/@rem;
      color: @pink;

      .list_icon {
        float: left;
        width: 38/@rem;
        margin-left: 30/@rem;
      }
    }

    .list {
      float: left;
      width: 100%;
      height: 100%;
      margin-top: 130/@rem;
      background: black;
      
      .list_once {
        float: left;
        width: 460/@rem;
        height: 160/@rem;
        background: @greey;
        border-radius: 10/@rem;
        .horizon-center;

        .post_information {
          float: left;
          margin-top: 0/@rem;
        }
      }
    }
  }
</style>
