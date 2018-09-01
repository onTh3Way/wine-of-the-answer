<template>
  <div id="app" :class="$style.app">
    <router-view v-if="loginComplete" />
  </div>
</template>

<script>
  import { Loading } from 'components'
  import { URLSearchParams } from 'utils'

  export default {
    name: 'app',
    components: {Loading},
    data: () => ({
      loginComplete: true
    }),
    beforeCreate () {
      if (location.href.indexOf('code=') === -1) {
        location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfc3404099806c7e5&redirect_uri=' +
          encodeURIComponent(location.href) +
          '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
      } else {
        const params = new URLSearchParams(location.href)
        this
          .$service
          .login(params.get('code'))
          .allOk(({id}) => {
            localStorage.setItem('userId', id)
            this.loginComplete = true
          })
      }
    }
  }
</script>

<style lang="less" module>
  .app {
    z-index: 1;
  }
  
  .route_enter_active,
  .route_leave_active {
    transition: transform 0.5s;
  }
  
  .route_enter {
    transform: translateX(100%);
  }
  
  .route_enter_to {
    transform: translateX(0);
  }
  
  .route_leave {
    transform: translateX(0);
  }
  
  .route_leave_to {
    transform: translateX(-100%);
  }
</style>
