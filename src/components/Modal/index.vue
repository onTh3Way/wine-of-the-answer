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
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 80%;
    padding: 0.5rem 0;
    background-color: white;
    border-radius: 6px;
  }
  
  .title {
    font-size: 0.8rem;
    font-weight: 900;
    text-align: center;
    color: black;
  }
  
  .content {
    margin: 20px 0;
    
    &, * {
      font-size: 0.6rem;
      font-weight: 700;
      color: #888;
    }
  }
  
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    
    > * {
      font-size: 0.7rem;
      font-weight: 700;
      text-align: center;
      color: #626262;
      flex: 1;
    }
  }
</style>
