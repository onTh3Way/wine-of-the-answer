<template>
  <div :class="$style.avatar">
    <img :src="url" alt="头像">
  </div>
</template>

<script>
  export default {
    name: 'avatar',
    props: {
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" module>
  .avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.9rem;
    height: 1.9rem;
    transform: translate(-120%, -20%);
    
    img {
      border-radius: 50%;
    }
  }
</style>
