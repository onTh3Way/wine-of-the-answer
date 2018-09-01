<template>
  <base-modal
    ref="modal"
    v-bind="$props"
    :dialogClass="$style.dialog"
    :dialogTransition="$transitionCssModule('dialog', {type: 'animation'})"
  >
    <template slot="dialog">
      <div :class="$style.title">
        <slot name="title" />
      </div>
      <div :class="$style.content">
        <slot name="content" />
      </div>
      <div :class="$style.options">
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
  import { BaseModal } from '../'

  export default {
    name: 'modal',
    components: {BaseModal},
    props: BaseModal.props,
    methods: {
      show () {
        this.$refs.modal.show()
      },
      hide () {
        this.$refs.modal.hide()
      }
    }
  }
</script>

<style lang="less" module>
  @keyframes ani_scale_enter {
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  @keyframes ani_scale_leave {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(0);
    }
  }
  
  .dialog_enter_active {
    animation: ani_scale_enter 0.3s;
  }
  
  .dialog_leave_active {
    animation: ani_scale_leave 0.3s;
  }
  
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem 0;
    width: 80%;
    border-radius: 6px;
    background-color: white;
  }
  
  .title {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 900;
    color: black;
  }
  
  .content {
    margin: 20px 0;
    
    &, * {
      font-weight: 700;
      font-size: 0.6rem;
      color: #888888;
    }
  }
  
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    
    > * {
      flex: 1;
      text-align: center;
      font-weight: 700;
      font-size: 0.7rem;
      color: #626262;
    }
  }
</style>
