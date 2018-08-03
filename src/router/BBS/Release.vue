<template>
  <div>
    <div :class="$style.release" @click="showPopup">
      <icon :class="$style.icon" type="release" />
    </div>
    <div ref="popup" :class="$style.popup">
      <input ref="text" type="text">
    </div>
  </div>
</template>

<script>
  import Icon from 'components/Icon'
  export default {
    name: 'release',
    components: {Icon},
    methods: {
      showPopup () {
        const {popup, text} = this.$refs
        popup.style.display = 'block'
        text.focus()
      }
    }
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  @pink: #f9bac5;

  .release {
    position: fixed;
    right: 30/@rem;
    bottom: 180/@rem;
    z-index: 998;
    width: 55/@rem;
    height: 55/@rem;
    background: @pink;
    border-radius: 50%;

    .icon {
      width: 35 / @rem;
      height: 35 / @rem;
      .all-center;
    }
  }

  .popup {
    display: none;
    .all-center;

    position: fixed;
  }
</style>
