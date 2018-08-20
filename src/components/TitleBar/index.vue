<template>
  <div :class="$style.wrapper">
    <div>
      <slot name="left">
        <div :class="$style.arrow">
          <div :class="[$style.arrow, $style.arrow_cover]" />
        </div>
      </slot>
    </div>
    <div :class="$style.text">
      <slot />
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'title-bar'
  }
</script>

<style lang="less" module>
  .wrapper {
    display: flex;
    position: relative;
    width: 100%;
    
    > div {
      flex: 1;
    }
  }
  
  .arrow {
    width: 0;
    height: 0;
    border: 0.75rem solid pink;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  
  .arrow_cover {
    position: absolute;
    top: 0;
    left: 5px;
    border-right-color: black;
  }
  
  .text {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 900;
    color: pink;
  }
</style>
