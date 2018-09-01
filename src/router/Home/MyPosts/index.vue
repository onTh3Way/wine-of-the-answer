<template>
  <div :class="$style.wrapper">
    <!--<title-bar :class="$style.header">-->
    <!--<template slot="left">-->
    <!--<div :class="$style.title">-->
    <!--<div :class="$style.line_group">-->
    <!--<div :class="$style.line" />-->
    <!--<div :class="$style.line" />-->
    <!--<div :class="$style.line" />-->
    <!--<div :class="$style.line" />-->
    <!--</div>-->
    <!--<span :class="$style.title_text">我的烦恼</span>-->
    <!--</div>-->
    <!--</template>-->
    <!--</title-bar>-->
    <scroller ref="scroller" :onInfinite="loadData">
      <list :items="data" />
    </scroller>
  </div>
</template>

<script>
  import { TitleBar, Post } from 'components'
  import List from '../List'

  export default {
    components: {TitleBar, Post, List},
    data: () => ({
      data: []
    }),
    beforeCreate () {
      document.title = '我的烦恼'
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        this
          .$service
          .getPosts({
            onlySelf: true,
            offset: this.data.length,
            limit: 10,
            sort: 'date'
          })
          .ok(({data, total}) => {
            this.data.push(...data)
            this.$refs.scroller.finishInfinite(this.data.length === total)
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
  }
  
  .header {
    background-color: #101010;
  }
  
  .title {
    display: flex;
    align-items: center;
  }
  
  .title_text {
    font-size: 0.8rem;
    font-weight: 900;
  }
  
  .line_group {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    width: 30px;
    height: 1rem;
    
    .line:nth-child(1) {
      top: 2px;
    }
    
    .line:nth-child(2) {
      top: 8px;
    }
    
    .line:nth-child(3) {
      top: 14px;
    }
    
    .line:nth-child(4) {
      top: 20px;
    }
  }
  
  .line {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 1px;
    background-color: pink;
  }
  
  .content {
    flex: 1;
  }
</style>
