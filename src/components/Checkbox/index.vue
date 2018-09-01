<template>
  <label :class="$style.checkbox">
    <slot />
    <input
      ref="checkbox"
      v-model="checked"
      :value="value"
      :checked="defaultChecked ? 'checked' : void 0"
      type="checkbox"
    >
    <span :class="$style.checkmark" />
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      defaultChecked: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: void 0
      },
      onChange: {
        type: Function,
        default: () => void 0
      }
    },
    data: () => ({
      checked: false
    }),
    watch: {
      checked () {
        this.onChange(this.checked)
      }
    },
    methods: {
      getInstance () {
        return this.$refs.checkbox
      }
    }
  }
</script>

<style lang="less" module>
  @size: 0.8rem;
  @checked-color: white;
  @checked-size: 3px;
  
  .checkbox {
    display: block;
    position: relative;
    padding-left: @size + 0.2;
    margin-bottom: 0.55rem;
    line-height: @size;
    font-size: @size;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
    
    input:checked ~ .checkmark {
      background-color: #2196F3;
      
      &:after {
        display: block;
      }
    }
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: @size;
    width: @size;
    background-color: #eee;
    overflow: hidden;
    
    &:after {
      content: "";
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: (@size / 2) - 0.15;
      height: ((@size / 2) - 0.15) * 2;
      border: solid @checked-color;
      border-width: 0 @checked-size @checked-size 0;
    }
  }
</style>
