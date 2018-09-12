<template>
  <div :class="$style.bg">

    <div :class="$style.title">
      <button :class="$style.teasing">
        <b>我要吐槽</b>
      </button>
      
      <div :class="$style.teasingtitle">
        <div><b>SPIT SLOT</b></div>
        <div><b>答案之酒吐槽平台</b></div>
      </div>

      <div :class="$style.icon">
        <Icon :class="$style.glass" type="search" />
        <Icon :class="$style.point" type="point" />
      </div>
    </div> 

    <div :class="$style.tabs">
      <div>热门吐槽</div>
      <div :class="$style.hot">热门评论</div>
      <div>热门转发</div>
      <div>今日热榜</div>
    </div>

    <div :class="$style.list">
      <div :class="$style.item">
        <div :class="$style.name">
          <b>_Nicholaus</b> 
        </div>
        <div :class="$style.content">
          命运这种东西，生来就是要被踏于足下的，如果你还未有力量反抗它，只需怀着勇气等待。
        </div>
        <div :class="$style.line" />
        <div :class="$style.lips">
          <img src="../../assets/lips.png" alt="">
        </div>
        <div :class="$style.lips_name">wawa</div>
        <div :class="$style.answer">
          2561个回答
        </div>
      </div>

      <div :class="$style.item">
        <div :class="$style.name">
          <b>_Nicholaus</b> 
        </div>
        <div :class="$style.content">
          比孤独更可悲的事情，就是根本不知道自己很孤独，或者分明很孤独，却把自己都骗得相信自己不孤独。
        </div>
        <div :class="$style.line" />
        <div :class="$style.lips">
          <img src="../../assets/lips.png" alt="">
        </div>
        <div :class="$style.lips_name">wawa</div>
        <div :class="$style.answer">
          2561个回答
        </div>
      </div>

      <div :class="$style.item">
        <div :class="$style.name">
          <b>_Nicholaus</b> 
        </div>
        <div :class="$style.content">
          每一个人心里都藏有一个死小孩
        </div>
        <div :class="$style.line" />
        <div :class="$style.lips">
          <img src="../../assets/lips.png" alt="">
        </div>
        <div :class="$style.lips_name">wawa</div>
        <div :class="$style.answer">
          2561个回答
        </div>
      </div>

      <div :class="$style.item">
        <div :class="$style.name">
          <b>_Nicholaus</b> 
        </div>
        <div :class="$style.content">
          他想自己在她眼里出现的时候,璀璨如星辰。可即使有那么一天,他披挂着漫天的星辰归来,可是仰望天空的瞳孔已经不在,看星星的女孩已经走了,那璀璨又有什么意思呢?孤单得连星星也想坠落。
        </div>
        <div :class="$style.line" />
        <div :class="$style.lips">
          <img src="../../assets/lips.png" alt="">
        </div>
        <div :class="$style.lips_name">wawa</div>
        <div :class="$style.answer">
          2561个回答
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="less" module>
@pink: #f9bac5;
@greey: #101010;
@font: Arial;

.bg {
  width: 100%;
  height: 100%;
  background: #eaeaea;

  .title {
    width: 100%;
    height: 3rem;
    background: #fda1b1;

    .teasing {
      border-radius: 0.4rem;
      margin-top: 1rem;
      margin-left: 0.5rem;
      height: 1.2rem;
      width: 3rem;
      font-size: 0.6rem;
      background: #fff;
      float: left;
    }

    .teasingtitle {
      width: 8.3rem;
      height: 2.5rem;
      display: inline-block;
      text-align: center;
      margin-top: 0.3rem;
      float: left;
      margin-left: 0.7rem;
    }

    .icon {
      width: 3rem;
      height: 3rem;
      float: right;
      line-height: 3rem;

      .glass,
      .point {
        width: 1rem;
        height: 1rem;
        margin-top: 1rem;
      }
      .glass {
        margin-left: 0.4rem;
      }
      .point {
        float: right;
        margin-right: 0.2rem;
      }
    }
  }

  .tabs {
    width: 100%;
    height: 2rem;
    background: @pink;
    .hot {
      border-bottom: 2px solid black;
    }
    div {
      width: 25%;
      height: 2rem;
      display: inline-block;
      font-size: 0.65rem;
      text-align: center;
      line-height: 2.5rem;
    }
  }

  .list {
    width: 100%;
    height: 10rem;
    margin-top: 15px;
    .item {
      width: 97%;
      height: 4.8rem;
      border: 2px solid #bfbfbf;
      border-radius: 0.4rem;
      margin-bottom: 0.5rem;
      .horizon-center;
      .name,
      .content,
      .line {
        width: 90%;
        font-size: 0.8rem;
        .horizon-center;
        margin-top: 0.2rem;
      }
      .content {
        font-size: 0.6rem;
        margin-top: 0.2rem;
        color: gray;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.5rem;
      }
      .line {
        height: 2px;
        background: #bfbfbf;
        margin-top: 0.1rem;
      }
      .lips {
        width: 1.5rem;
        display: inline-block;
        height: 2rem;
        float: left;
        margin-left: 0.8rem;
        img {
          width: 1.5rem;
          height: 2rem;
        }
      }
      .lips_name,
      .answer {
        display: inline-block;
        width: 3rem;
        height: 2rem;
        line-height: 1.5rem;
        font-size: 0.8rem;
      }
      .answer {
        float: right;
        width: 4rem;
        font-size: 0.6rem;
        color: grey;
      }
    }
  }
}
</style>

<script>
  import Icon from '@/components/Icon/index'

  export default {
    name: 'index',
    components: {
      Icon
    }
  }
</script>
