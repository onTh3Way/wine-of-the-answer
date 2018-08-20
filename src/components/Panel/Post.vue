<template>
  <wrapper>
    <avatar :url="avatar" />
    <x-h1>
      {{ username }}
    </x-h1>
    <x-h6>
      {{ time }}
    </x-h6>
    <x-h3>
      {{ content }}
    </x-h3>
    <div :class="$style.bottom_area">
      <icon type="agreement">{{ agreeNum }}</icon>
      <icon type="comment" mode="light">{{ commentNum }}</icon>
      <icon :class="$style.share" type="share" />
    </div>
  </wrapper>
</template>

<script>
  import { Wrapper, Avatar, XH1, XH3, XH6, Icon } from './components'

  export default {
    name: 'post',
    components: {Wrapper, Avatar, XH1, XH3, XH6, Icon},
    props: {
      id: {
        type: [Number, String],
        default: void 0
      },
      avatar: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      time: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      agreeNum: {
        type: Number,
        default: 0
      },
      commentNum: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="less" module>
  .bottom_area {
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
  }
  
  .share {
    position: absolute;
    right: 0;
  }
</style>
