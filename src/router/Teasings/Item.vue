<template>
  <div :class="$style.wrapper">
    <div :class="$style.name">
      <b>{{ author.nickname }}</b> 
    </div>
    <div :class="$style.content">
      {{ content }}
    </div>
    <div :class="$style.line" />
    <div :class="$style.bottom">
      <div :class="[$style.lips, active ? $style.active : null]" @click="agree" />
      <span :class="[$style.lips_name, active ? $style.active : null]">{{ nextAgreeName }}</span>
      <!-- <span :class="$style.answer">{{ answerNum }}个回答</span> -->
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'item',
    inheritAttrs: false,
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      agreeName: {
        type: String,
        default: ''
      }
    },
    data: vm => ({
      nextAgreeName: vm.agreeName,
      active: false
    }),
    methods: {
      agree () {
        this.$service.agreeTeasing({ id: this.id }).allOk(() => {
          this.active = true
          this.nextAgreeName = JSON.parse(
            localStorage.getItem('userInfo')
          ).nickname
        })
      }
    }
  }
</script>

<style lang="less" module>
.wrapper {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  border: 2px solid #bfbfbf;
  border-radius: 0.4rem;
}

.line {
  height: 2px;
  margin-top: 0.1rem;
  background: #bfbfbf;
}

.content {
  font-size: 0.8rem;
  color: gray;
}

.bottom {
  display: flex;
  align-items: center;
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  to {
    transform: scale(1);
  }
}

.lips.active,
.lips_name.active {
  animation: scale 1s;
}

.lips {
  display: inline-block;
  width: 1.5rem;
  height: 2rem;
  background: url(assets/lips.png) no-repeat 0 0 / cover;
}

.name {
  max-width: 100%;
  font-size: 0.8rem;
}

.lips_name,
.answer {
  max-width: 40%;
}

.name,
.lips_name,
.answer {
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.answer {
  position: absolute;
  right: 0;
  color: gray;
}
</style>
