<template>
  <div :class="$style.text">
    <svg width="100%" height="100%">
      <text
        font-size="0.5rem"
        fill="#736D6D"
        x="0"
        y="1em"
      >
        <slot />
      </text>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'x-h6'
  }
</script>

<style lang="less" module>
  .text {
    height: 0.7rem;
  }
</style>
