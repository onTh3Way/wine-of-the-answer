<template>
  <div :class="$style.wrapper">
    <div :class="$style.main">
      <comment-panel
        v-if="comment"
        v-bind="comment"
        :canLinkToDetail="false"
        :release="{
          onReleaseSucceed: handleRelease
        }"
      />
    </div>
    <div :class="$style.replies">
      <list :onLoading="loadData">
        <template slot="tip">全部回复 {{ total }}</template>
        <template>
          <div>
            <reply
              v-for="(item, index) of replies"
              v-bind="item"
              :key="index"
              :onReplySucceed="handleRelease"
            />
          </div>
        </template>
      </list>
    </div>
  </div>
</template>

<script>
  import { Comment as CommentPanel, Reply, List } from 'components'

  export default {
    name: 'comment',
    components: {CommentPanel, Reply, List},
    data: () => ({
      comment: void 0,
      replies: [],
      total: 0
    }),
    mounted () {
      this
        .$service
        .getComment({id: this.$route.params.id})
        .ok(data => {
          this.comment = data
        })
    },
    methods: {
      loadData ({loaded, loadedAll}) {
        this
          .$service
          .getReplies({
            commentId: this.$route.params.id,
            offset: this.replies.length,
            limit: 10,
            sort: 'date'
          })
          .ok(({data, total}) => {
            this.replies.push(...data)
            this.total = total
            if (this.replies.length === total) {
              loadedAll()
            } else {
              loaded()
            }
          })
      },
      handleRelease (data) {
        this.replies.unshift(data)
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    width: 100%;
    min-height: 100%;
    background-color: @black;
    
    > div {
      min-height: 0;
    }
  }
  
  .main {
    padding: 0 0.5rem;
  }
  
  .replies {
    flex: 1 1 auto;
    background-color: #101010;
  }
</style>
