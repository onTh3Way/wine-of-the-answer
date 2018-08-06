<template>
  <base-modal
    ref="modal"
    v-bind="$props"
    :dialogClass="$style.container"
    :dialogTransition="$transitionCssModule('popup', {type: 'animation'})"
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
  
  .popup_enter_active {
    animation: ani_scale_enter 0.3s;
  }
  
  .popup_leave_active {
    animation: ani_scale_leave 0.3s;
  }
  
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    width: 80%;
    border-radius: 6px;
    background-color: white;
  }
  
  .title, .content, .options > * {
    text-align: center;
    font-size: 0.8rem;
    color: black;
  }
  
  .title {
    font-weight: 900;
  }
  
  .content {
    margin: 20px 0;
    font-weight: 700;
    font-size: 0.7rem;
    color: gray;
  }
  
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    
    > * {
      flex: 1;
      font-weight: 700;
      font-size: 0.7rem;
    }
  }
</style>
