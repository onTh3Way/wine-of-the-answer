<template>
  <div :class="[$style.link, $style[mode]]">
    <slot />
  </div>
</template>

<script>
  let pixRatio = 1 / (window.devicePixelRatio)
  let html = document.documentElement
  document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + pixRatio + ',minimum-scale=' + pixRatio + ',maximum-scale=' + pixRatio + '">')
  html.style.fontSize = html.clientWidth / 25 + '/@rem'
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
    height: 150/@rem;
    margin-bottom: 55/@rem;
    font-size: 60/@rem;
    line-height: 150/@rem;
    text-align: center;
    border-radius: 20/@rem;
    box-sizing: border-box;

    &.pink {
      color: black;
      background-color: rgb(249, 186, 197);
    }

    &.black {
      border: 8/@rem solid rgb(249, 186, 197);
      color: rgb(249, 186, 197);
      background-color: black;
    }
  }
</style>
