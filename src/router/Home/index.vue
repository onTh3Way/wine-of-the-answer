<template>
  <div class="home-wrapper">
    <router-view />
    <div class="home-footer">
      <button-tab class="home-tab">
        <button-tab-item selected>
          <router-link :to="'/home/categories/' + category" tag="div">论坛</router-link>
        </button-tab-item>
        <button-tab-item>
          <router-link tag="div" to="/home/user/posts">我的烦恼</router-link>
        </button-tab-item>
      </button-tab>
    </div>
  </div>
</template>

<script>
  import { TitleBar } from 'components'
  import { ButtonTab, ButtonTabItem } from 'vux/components/button-tab'
  import Posts from './Posts'
  import MyPosts from './MyPosts'

  export default {
    name: 'index',
    components: {
      TitleBar,
      ButtonTab,
      ButtonTabItem,
      Posts,
      MyPosts
    },
    data: () => ({
      category: 'study'
    }),
    mounted () {
      if (this.$route.params && this.$route.params.category) {
        this.category = this.$route.params.category
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: black;
    flex-direction: column;
  }
  
  .home-footer {
    flex-basis: auto;
  }
  
  .home-tab {
    /deep/ .vux-button-group-current {
      color: pink !important;
      background: rgb(25, 25, 25) !important;
    }
    
    /deep/ .vux-button-tab-item {
      height: 1.8rem;
      font-size: 0.8rem;
      line-height: 1.8rem;
      color: #ac9e9e;
      background: transparent;
      border-radius: 0 !important;
      
      &::after {
        display: none;
      }
    }
  }
</style>
