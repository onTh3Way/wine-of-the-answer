<template>
  <svg width="100%" height="100%">
    <line
      x1="390"
      y1="20"
      x2="100"
      y2="300"
      style="
        stroke: white;
        stroke-width: 2;
      "
    />
    <polygon
      v-bind="arrow"
      style="
        fill: white;
        stroke: white;
        stroke-width: 1;
      "
    />
  </svg>
</template>

<script>
  let wxShareX = (window.innerWidth || document.body.clientWidth) - 50
  export default {
    name: 'share',
    data: () => ({
      arrow: {
        points: `${wxShareX} 10 ${wxShareX - 10} 20 ${wxShareX + 10} 20`
      }
    })
  }
</script>
