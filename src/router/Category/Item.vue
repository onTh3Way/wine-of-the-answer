<template>
  <div :class="[$style.link, $style[mode]]">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'item',
    props: {
      mode: {
        type: String,
        default: 'pink'
      }
    }
  }
</script>

<style lang="less" module>
  @rem: 30rem;
  
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    min-height: 1.5rem;
    margin-bottom: 0.67rem;
    font-size: 20/@rem;
    font-weight: 900;
    border-radius: 4px;
    box-sizing: border-box;
    
    &.pink {
      color: black;
      background-color: rgb(249, 186, 197);
    }
    
    &.black {
      border: 0.1rem solid rgb(249, 186, 197);
      color: rgb(249, 186, 197);
      background-color: black;
    }
  }
  
  .link:first-child {
    margin-top: 0;
  }
</style>
