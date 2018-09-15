<template>
  <div :class="$style.bg">
    <div :class="$style.head">
      <div :class="$style.add">
        <b>添加问题</b>
      </div>
      <div :class="$style.release">
        发布
      </div>
      <div :class="$style.title">
        标题
      </div>
      <div :class="$style.teasing">
        吐槽
      </div>
    </div>

    <div :class="$style.input_box">
      <input :class="$style.input" type="text" placeholder="吐出你想对全世界吐槽的话">
    </div>

    <div :class="$style.bottom">
      <input :class="$style.box" type="radio">
      <label>点击选择匿名发布</label>
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
  background: #fff;
  width: 100%;
  height: 100%;
  .head {
    height: 5.5rem;
    width: 100%;
    background: #f9bac5;
    .add,
    .release,
    .title,
    .teasing {
      display: inline-block;
      width: 6rem;
      height: 1.5rem;
      text-align: center;
      line-height: 1.5rem;
      color: #fff;
      float: left;
      margin-top: 1rem;
      font-size: 1.2rem;
    }
    .release {
      float: right;
      font-size: 0.7rem;
      width: 3rem;
    }
    .title,
    .teasing {
      font-size: 0.7rem;
      width: 3rem;
      margin-top: 3.2rem;
    }
    .title{
        margin-left: -6.3rem;
    }
    .teasing {
        margin-left: -2.9rem;
    }
  }

   .input_box{
        width: 98%;
        height: 18rem;
        display: inline-block;
        margin-top: 1rem;
        .horizon-center;
        input{
            width: 100%;
            height: 2rem;
            font-size: 1rem;
        }
    }

    .bottom{
        width: 100%;
        height: 3rem;
        background: #bfbfbf;
        line-height: 3rem;
        font-size: 1rem;
        position: fixed;
        bottom: 0;
        .box{
            width: 1rem;
            height: 1rem;
            background: #bfbfbf;
            margin-top: 1rem;
            display: inline-block;
            float: left;
            margin-left: 1rem;
            
        }

        label{
            margin-left: 0.2rem;
            float: left;
        }
    }
}
</style>
