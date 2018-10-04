<template>
  <base-modal
    ref="modal"
    v-bind="$props"
    :dialogClass="[$style.container, dialogClass]"
    :dialogTransition="$transitionCssModule('sliding')"
  >
    <template slot="dialog">
      <div v-if="$slots.title" :class="$style.title">
        <slot name="title" />
      </div>
      <div v-if="$slots.options" :class="$style.options">
        <slot name="options" />
      </div>
      <slot name="dialog" />
    </template>
    <template slot="mask">
      <slot name="mask" />
    </template>
  </base-modal>
</template>

<script>
  import BaseModal from 'components/BaseModal'

  export default {
    name: 'bottom-dialog',
    components: {BaseModal},
    props: BaseModal.props,
    methods: {
      show () { this.$refs.modal.show() },
      hide () { this.$refs.modal.hide() }
    }
  }
</script>

<style lang="less" module>
  .sliding_enter,
  .sliding_leave_to {
    transform: translateY(100%);
  }
  
  .sliding_enter_active,
  .sliding_leave_active {
    transition: all 0.3s;
  }
  
  .sliding_enter_to,
  .sliding_leave {
    transform: translateY(0);
  }
  
  .container {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    padding: 5px 0;
    background-color: white;
  }
  
  .title, .options > * {
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }
  
  .title {
    font-size: 0.7em;
    font-weight: 900;
  }
  
  .options > * {
    font-size: 0.8em;
    font-weight: 700;
  }
</style>
