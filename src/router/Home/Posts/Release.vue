<template>
  <div :class="$style.wrapper" @click="$refs.modal.show()">
    <icon :class="$style.icon" type="release" />
    <release-modal
      ref="modal"
      :onReleaseClick="release"
    />
  </div>
</template>

<script>
  import { Icon, Modal, XTextarea, ReleaseModal } from 'components'

  export default {
    components: {Icon, Modal, XTextarea, ReleaseModal},
    props: {
      onBeforeRelease: {
        type: Function,
        default: () => true
      },
      onReleaseSucceed: {
        type: Function,
        default: () => void 0
      },
      onReleaseFailed: {
        type: Function,
        default: () => void 0
      }
    },
    methods: {
      release (content, anonymous) {
        if (!content) return
        if (!this.onBeforeRelease(content, anonymous)) return

        this
          .$service
          .releasePost({
            category: this.$route.params.category,
            content,
            anonymous
          })
          .allOk(this.onReleaseSucceed)
          .clientError(this.onReleaseFailed)
      }
    }
  }
</script>

<style lang="less" module>
  .wrapper {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background-color: @pink;
    overflow: hidden;
  }
  
  .icon {
    .all-center;
    width: 1rem;
    height: 1rem;
    transform: translate(-55%, -50%) rotate(-8deg);
  }
</style>
