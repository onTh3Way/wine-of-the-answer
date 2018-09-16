<template>
  
  <div :class="$style.bg">
    <div :class="$style.title">
      <img src="~assets/logo-title.svg">
    </div>

    <div :class="$style.list">
      <div :class="$style.item">
        <div :class="$style.label">
          City/城市:</div> 
        <input type="text">
      </div>

      <div :class="$style.item">
        <div :class="$style.label">
          Sex/性别:</div> 
        <input type="text">
      </div>

      <div :class="$style.item">
        <div :class="$style.label">
          Age/年龄:</div> 
        <input type="text">
      </div>

      <div :class="$style.item">
        <div :class="$style.label">
          Tel/电话:</div> 
        <input type="text">
      </div>
    </div>

    <div :class="$style.bottom">
      NEXT   下一步
    </div>
  </div>

</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less" module>
@pink: #f9bac5;
@greey: #101010;
@font: Arial;

.bg {
  background: #eaeaea;
  width: 100%;
  height: 100%;

  .title {
    height: 4rem;
    width: 100%;
    margin-top: 10px;
    float: left;

    img {
      width: 12rem;
      height: 6rem;
      .horizon-center;
    }
  }

  .list {
    display: inline-block;
    width: 100%;
    margin-top: 75px;
    font-size: 0.8rem;

    .item {
      margin-bottom: 25px;
    }

    .label {
      float: left;
      margin-left: 1rem;

    }

    input {
      margin-top: 10px;
      background: #dcdcdc;
      height: 1.8rem;
      font-size: 1rem;
      width: 90%;
      .horizon-center;
    }
  }

  .bottom{
      width: 70%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #f9bac5;
      .horizon-center;
      color: #777;
      margin-bottom: 2rem;
  }
}
</style>
