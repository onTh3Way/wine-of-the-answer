<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app', 
    data: () => ({
      loginComplete: true
    }),
    beforeCreate () { 
      // if (location.href.indexOf('code=') === -1) {
      //   location.href =
      //     'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfc3404099806c7e5&redirect_uri=' +
      //     encodeURIComponent(location.href) +
      //     '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
      // } else {
      const params = new URLSearchParams(location.href)
      this.$service.login(params.get('code')).allOk(user => {
        localStorage.setItem('userInfo', JSON.stringify(user))
        this.loginComplete = true
      })
    // }
    }
  }
</script>

<style lang="less" scoped>
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
