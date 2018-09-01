<template>
  <wrapper>
    <x-router-link v-if="canLinkToDetail" :to="'/comments/' + id" />
    <avatar :url="author.avatar" />
    <x-h1>
      <span>{{ author.nickname }}</span>
      <more :class="$style.right" @click.native="$refs.bottomDialog.show()" />
    </x-h1>
    <x-h6>{{ $utils.formatTimestamp(createDate) }}</x-h6>
    <x-h3>{{ content }}</x-h3>
    <tools>
      <agree :num="agreeNum" :defaultActive="isAgree" />
      <comment>{{ commentNum }}</comment>
      <disagree :num="disagreeNum" :defaultActive="isDisagree" :class="$style.right" />
    </tools>
    <bottom-dialog ref="bottomDialog">
      <template slot="title">更多操作</template>
      <template slot="options">
        <div @click="$refs.reportDialog.show()">举报该评论</div>
        <div data-role="cancel">取消</div>
      </template>
    </bottom-dialog>
    <report-dialog ref="reportDialog" />
    <release
      v-if="release"
      v-bind="release"
      title="您的回复"
      placeholder="请发表您的回复"
      text="发表您的回复... 限30字"
    />
  </wrapper>
</template>

<script>
  import { BottomDialog } from 'components'
  import {
    Wrapper,
    Avatar,
    XH1,
    XH3,
    XH6,
    Tools,
    Agree,
    Disagree,
    Comment,
    More,
    ReportDialog,
    XRouterLink,
    Release
  } from './components'

  export default {
    provide () {
      return {
        id: this.id,
        type: 'comment'
      }
    },
    components: {
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
      More,
      XRouterLink,
      Release
    },
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      postId: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        default: () => ({nickname: '获取中...', avatar: ''})
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
      commentNum: {
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
      release: {
        type: Object,
        default: void 0
      },
      canLinkToDetail: {
        type: Boolean,
        default: true
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
</style>
