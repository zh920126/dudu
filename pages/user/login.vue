<template>
  <div class="login-all">
    <div class="login">
      <span v-for="(value,index) in ['登录','注册']" :key="index" :class="{current:currentTab===index}" @click="handlerTab(index)">{{ value }}</span>
      <loginForm v-if="currentTab===0" />
      <registerForm v-else @sendTabIndex="getTabIndex" />
    </div>
  </div>
</template>

<script>
import loginForm from '@/components/user/loginForm.vue'
import registerForm from '@/components/user/registerForm.vue'
export default {
  components: {
    loginForm, registerForm
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    handlerTab (index) {
      // console.log(index)
      this.currentTab = index
    },
    getTabIndex (v) {
      // console.log(v)
      this.currentTab = v
    }
  }
}
</script>

<style lang="less" scoped>
.current{
  color: #ffa500!important;
  border-color:#ffa500!important;
  background: #fff!important;
  font-weight: 600!important;
}
  .login-all{
    position: relative;
    height: 700px;
    background: url('http://157.122.54.189:9095/assets/images/th03.jfif') center center;
    .login{
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      span{
        display: inline-block;
        width: 200px;
        height: 50px;
        line-height: 50px;
        border-top: 2px solid #eee;
        background: #eeeeee;
        text-align: center;
        font-size: 16px;
        font-weight: normal;
      }
    }
  }
</style>
