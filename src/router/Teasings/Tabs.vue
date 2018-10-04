<template>
  <tab 
    :class="$style.tabs"
    customBarWidth="2rem"
    defaultColor="black"
    activeColor="black"
  >
    <tab-item selected @on-item-click="onTabClick(HOTTEASING)">热门吐槽</tab-item>
    <tab-item @on-item-click="onTabClick(HOTCOMMENT)">热门评论</tab-item>
    <tab-item @on-item-click="onTabClick(HOTSHARE)">热门转发</tab-item>
    <tab-item @on-item-click="onTabClick(HOTTODAY)">今日热榜</tab-item> 
  </tab>
</template>

<script>
  import { Tab, TabItem } from 'vux/components/tab'
  import { HOTTEASING, HOTCOMMENT, HOTSHARE, HOTTODAY } from './constants'

  export default {
    components: {
      Tab,
      TabItem
    },
    props: {
      onTabClick: {
        type: Function,
        required: false,
        default: () => void 0
      }
    },
    data: () => ({
      HOTTEASING,
      HOTCOMMENT,
      HOTSHARE,
      HOTTODAY
    })
  }
</script>

<style lang="less" module>
.tabs {
  width: 100%;
  height: 2rem;

  :global {
    .vux-tab {
      color: black;
      background-color: @pink;
    }

    .vux-tab-item {
      font-size: 0.6em;
    }
  }
}

.hot {
  border-bottom: 2px solid black;
}
</style>
