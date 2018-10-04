<template>
  
  <div :class="$style.bg">
    <div :class="$style.title">
      <img src="~assets/logo-title.svg">
    </div>

    <div :class="$style.list">
      <div :class="$style.item">
        <div :class="$style.label">出生日期</div>
        <calendar
          :class="$style.input" 
          v-model="date" 
          title=""
          disableFuture
        />  
      </div>

      <div :class="$style.item">
        <div :class="$style.label">
          Age/年龄:</div> 
        <input :class="$style.input" v-model="ages" type="number" maxlength="3" pattern="\d*">
      </div>

      <div :class="$style.item"> 
        <div :class="$style.label">
          Tel/电话:</div> 
        <input :class="$style.input" v-model="phone" type="text" maxlength="11" pattern="\d{11}">
      </div>
    </div>

    <div :class="$style.bottom" @click="next">
      NEXT   下一步
    </div>
  </div>

</template>

<script>
  import Calendar from 'vux/components/calendar'
  export default {
    name: 'index',
    components: {
      Calendar
    },
    data: () => ({
      date: void 0,
      ages: void 0,
      phone: void 0
    }),
    methods: {
      next () {
        window.date = this.date
        this.$service
          .completeUserInfo({
            birthday: new Date(this.date).getTime(),
            ages: this.ages,
            phone: this.phone
          })
          .allOk(() => {
            this.$router.push('/teasing-protocol')
          })
      }
    }
  }
</script>

<style lang="less" module>
@pink: #f9bac5;
@greey: #101010;
@font: Arial;

.bg {
  width: 100%;
  min-height: 100%;
  background: #eaeaea;
  overflow: hidden;

  .title {
    float: left;
    width: 100%;
    height: 4rem;
    margin-top: 10px;

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
      padding: 0 1rem;
    }

    .input {
      margin-top: 10px;
      width: 100%;
      min-height: 1.8rem;
      line-height: 1.8rem;
      font-size: 1rem;

      background: #dcdcdc;

      :global {
        .vux-cell-primary {
          text-align: left;
          color: black;
        }
      }
    }
  }

  .bottom {
    width: 70%;
    height: 50px;
    margin-bottom: 2rem;
    line-height: 50px;
    text-align: center;
    color: #777;
    background: #f9bac5;
    .horizon-center;
  }
}
</style>
