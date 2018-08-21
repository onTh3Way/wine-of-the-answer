<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <title-bar>烦恼论坛</title-bar>
      <tab
        :class="$style.header_tab"
        customBarWidth="2rem"
        defaultColor="#A48E8E"
        activeColor="pink"
      >
        <tab-item selected @on-item-click="sort = 'date'">最新排序</tab-item>
        <tab-item @on-item-click="sort = 'hot'">最热排序</tab-item>
      </tab>
    </div>
    
    <div :class="$style.content">
      <scroller
        ref="scroller"
        :onInfinite="loadData"
        :onRefresh="refreshData"
      >
        <div
          v-for="(item, index) in data"
          :class="$style.post"
          :key="index"
        >
          <post
            :avatar="item.author.avatar"
            :nickname="item.author.nickname"
            :agreeNum="item.agreeNum"
            :commentNum="item.commentNum"
            :content="item.content"
            time="三小时前"
          />
        </div>
      </scroller>
    </div>
    
    <div :class="$style.footer">
      <tab
        :class="$style.footer_tab"
        :animate="false"
        :lineWidth="0"
        activeColor="pink"
        defaultColor="#A48E8E"
      >
        <tab-item activeClass="active" selected>论坛</tab-item>
        <tab-item>我的烦恼</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
  import { TitleBar, Post } from 'components'
  import { Tab, TabItem } from 'vux/components/tab'
  import { ButtonTab, ButtonTabItem } from 'vux/components/button-tab'
  import InfiniteLoading from 'vue-infinite-loading'
  import Scroller from 'vue-scroller'

  Vue.use(Scroller)

  export default {
    name: 'index',
    components: {
      InfiniteLoading,
      TitleBar,
      Tab,
      TabItem,
      Post,
      ButtonTab,
      ButtonTabItem
    },
    data: () => ({
      data: [],
      sort: 'hot',
      isFetching: false
    }),
    watch: {
      sort () {
        this.refreshData()
      }
    },
    methods: {
      fetchData (offset = this.data.length, limit = 10, sort = this.sort) {
        this.isFetching = true
        return this
          .$service
          .getPosts({offset, limit, sort})
          .complete(() => { this.isFetching = false })
      },
      loadData () {
        if (this.isFetching) return

        this
          .fetchData()
          .ok(({data, total}) => {
            this.data.push(...data)
            this.$refs.scroller.finishInfinite(this.data.length === total)
          })
      },
      refreshData () {
        if (this.isFetching) return

        this
          .fetchData(0)
          .ok(({data}) => {
            this.data = data
            this.$refs.scroller.finishPullToRefresh()
          })
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
  }
  
  .header {
    background-color: rgb(16, 16, 16)
  }
  
  .header, .footer {
    flex-basis: auto;
  }
  
  .header_tab, .footer_tab {
    :global {
      .vux-tab {
        background-color: transparent;
      }
    }
  }
  
  .header_tab {
    :global {
      .vux-tab-item {
        font-size: 0.6rem;
        font-weight: 900;
      }
    }
  }
  
  .footer_tab {
    :global {
      .vux-tab-item {
        font-size: 0.75rem;
        font-weight: 700;
        background: #191919;
        
        &.active {
          background-color: black;
        }
      }
    }
  }
  
  .content {
    flex: 1;
    overflow: auto;
  }
  
  .post {
    margin: 0.5rem;
  }
</style>
