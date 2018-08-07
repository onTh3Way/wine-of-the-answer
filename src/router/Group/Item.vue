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
    width: 100%;
    height: 52/@rem;
    margin-bottom: 20/@rem;
    font-size: 20/@rem;
    line-height: 52/@rem;
    text-align: center;
    border-radius: 12/@rem;
    box-sizing: border-box;

    &.pink {
      color: black;
      background-color: rgb(249, 186, 197);
    }

    &.black {
      border: 2/@rem solid rgb(249, 186, 197);
      color: rgb(249, 186, 197);
      background-color: black;
    }
  }
</style>
