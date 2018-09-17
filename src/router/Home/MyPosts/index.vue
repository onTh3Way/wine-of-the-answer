<template>
  <div :class="$style.wrapper">
    <scroller v-if="data.length" ref="scroller" :onInfinite="loadData">
      <list :items="data" />
    </scroller>
    <p v-else :class="$style.no_data">暂时没看到你有什么烦恼呢</p>
  </div>
</template>

<script>
  import List from '../List'

  export default {
    components: {List},
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
  
  .no_data {
    .all-center(absolute);
    white-space: nowrap;
    font-weight: 900;
    text-align: center;
    font-size: 0.7rem;
    color: @pink;
  }
</style>
