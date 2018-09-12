<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
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
        refreshLayerColor="pink"
        loadingLayerColor="pink"
        snapping
      >
        <list :items="data" />
      </scroller>
    </div>
    <release :class="$style.release" :onReleaseSucceed="handleRelease" />
  </div>
</template>

<script>
  import { TitleBar, Post } from 'components'
  import { Tab, TabItem } from 'vux/components/tab'
  import { ButtonTab, ButtonTabItem } from 'vux/components/button-tab'
  import List from '../List'
  import Release from './Release'

  export default {
    name: 'index',
    components: {
      TitleBar,
      Tab,
      TabItem,
      Post,
      ButtonTab,
      ButtonTabItem,
      Release,
      List
    },
    data: () => ({
      data: [],
      sort: 'date',
      isFetching: false
    }),
    watch: {
      sort () {
        this
          .refreshData()
          .complete(() => this.$refs.scroller.scrollTo(0, 0, true))
      }
    },
    beforeCreate () {
      document.title = '烦恼论坛'
    },
    methods: {
      fetchData (offset = this.data.length, limit = 10, sort = this.sort) {
        this.isFetching = true
        return this
          .$service
          .getPosts({
            category: this.$route.params.category,
            offset,
            limit,
            sort
          })
          .complete(() => { this.isFetching = false })
      },
      loadData () {
        if (this.isFetching) return

        return this
          .fetchData()
          .ok(({data, total}) => {
            this.data.push(...data)
            this.$refs.scroller.finishInfinite(this.data.length === total)
          })
      },
      refreshData () {
        if (this.isFetching) return

        return this
          .fetchData(0)
          .ok(({data}) => {
            this.data = data
            this.$refs.scroller.finishPullToRefresh()
          })
      },
      handleRelease (data) {
        this.data.unshift(data)
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
  }
  
  .header {
    background-color: rgb(16, 16, 16)
  }
  
  .header, .footer {
    flex-basis: auto;
  }
  
  .header_tab {
    :global {
      .vux-tab {
        background-color: transparent;
      }
      
      .vux-tab-item {
        font-size: 0.6rem;
        font-weight: 900;
      }
    }
  }
  
  .footer_tab {
    :global {
      .vux-button-group-current {
        color: pink !important;
        background: rgb(25, 25, 25) !important;
      }
      
      .vux-button-tab-item {
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.8rem;
        border-radius: 0 !important;
        color: #AC9E9E;
        background: transparent;
        
        &:after {
          display: none;
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
  
  .release {
    position: fixed;
    bottom: 4rem;
    right: 20px;
  }
</style>
