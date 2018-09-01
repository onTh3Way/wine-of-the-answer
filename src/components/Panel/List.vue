<template>
  <div :class="$style.wrapper">
    <div :class="$style.list">
      <p :class="$style.tip">
        <slot name="tip" />
      </p>
      <slot>
        <p :class="$style.text">暂时还没有数据</p>
      </slot>
      <p v-if="loadedAll" :class="$style.text">
        <slot name="no-more">没有更多</slot>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {
      limit: {
        type: Number,
        default: 200
      },
      scrollEl: {
        type: Element,
        default: () => document.body
      },
      onLoading: {
        type: Function,
        default: void 0
      }
    },
    data: () => ({
      isFetching: false,
      loadedAll: false
    }),
    mounted () {
      if (this.onLoading) {
        window.addEventListener('scroll', this.handleScroll, false)
        this.loadData()
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      loadData () {
        this.isFetching = true
        this.onLoading({
          loaded: () => {
            this.isFetching = false
          },
          loadedAll: () => {
            this.isFetching = false
            this.loadedAll = true
            window.removeEventListener('scroll', this.handleScroll, false)
          }
        })
      },
      handleScroll () {
        if (this.isFetching) return

        if (this.scrollEl.scrollHeight - this.scrollEl.clientHeight < this.scrollEl.scrollTop + this.limit) {
          this.loadData()
        }
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    padding-top: 0.1rem;
    background-color: #101010;
  }
  
  .list {
    padding: 0 0.5rem;
  }
  
  .tip, .text {
    padding: 0.5rem 0;
    font-size: 0.6rem;
    font-weight: 900;
    color: @pink;
  }
  
  .text {
    text-align: center;
  }
</style>
