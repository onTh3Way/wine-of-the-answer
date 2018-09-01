<template>
  <wrapper>
    <avatar :url="author.avatar" />
    <x-h1>
      <span>{{ author.nickname }}</span>
      <more :class="$style.right" @click.native="$refs.bottomDialog.show()" />
    </x-h1>
    <x-h6 v-if="replyToAuthor">{{ '回复 @' + replyToAuthor.nickname }}</x-h6>
    <x-h3>{{ content }}</x-h3>
    <tools>
      <agree :num="agreeNum" :defaultActive="isAgree" />
      <x-h6 :class="$style.time" color="pink">{{ $utils.formatTimestamp(createDate) }}</x-h6>
      <disagree :num="disagreeNum" :defaultActive="isDisagree" :class="$style.right" />
    </tools>
    <bottom-dialog ref="bottomDialog">
      <template slot="title">更多操作</template>
      <template slot="options">
        <div data-role="cancel" @click="$refs.releaseModal.show()">回复</div>
        <div @click="$refs.reportDialog.show()">举报该回复</div>
        <div data-role="cancel">取消</div>
      </template>
    </bottom-dialog>
    <report-dialog ref="reportDialog" />
    <release-modal
      ref="releaseModal"
      :onReleaseClick="revert"
      :title="'回复:' + author.nickname"
      placeholder="请输入要回复的内容"
    />
  </wrapper>
</template>

<script>
  import { ReleaseModal, BottomDialog } from 'components'
  import {
    Wrapper,
    Avatar,
    XH1,
    XH3,
    XH6,
    Tools,
    Agree,
    Disagree,
    More,
    ReportDialog
  } from './components'

  export default {
    provide () {
      return {
        id: this.id,
        type: 'reply'
      }
    },
    components: {
      ReleaseModal,
      ReportDialog,
      BottomDialog,
      Wrapper,
      Avatar,
      XH1,
      XH3,
      XH6,
      Tools,
      Agree,
      Disagree,
      Comment,
      More
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      commentId: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        default: () => ({nickname: '获取中...', avatar: ''})
      },
      replyToAuthor: {
        type: Object,
        default: void 0
      },
      createDate: {
        type: Number,
        default: 0
      },
      content: {
        type: String,
        default: ''
      },
      agreeNum: {
        type: Number,
        default: 0
      },
      disagreeNum: {
        type: Number,
        default: 0
      },
      isAgree: {
        type: Boolean,
        default: false
      },
      isDisagree: {
        type: Boolean,
        default: false
      },
      onBeforeReply: {
        type: Function,
        default: () => true
      },
      onReplySucceed: {
        type: Function,
        default: () => void 0
      },
      onReplyFailed: {
        type: Function,
        default: () => void 0
      }
    },
    methods: {
      revert (content, anonymous) {
        if (this.onBeforeReply() === false) return
        this
          .$service
          .releaseReply({
            commentId: this.commentId,
            receiverReplyId: this.id,
            content,
            anonymous
          })
          .ok(this.onReplySucceed)
          .clientError(this.onReplyFailed)
      }
    }
  }
</script>

<style lang="less" module>
  .right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  
  .time {
    opacity: 0.7;
    margin-left: 0.4rem;
  }
</style>
