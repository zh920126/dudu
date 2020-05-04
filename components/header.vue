<template>
  <header class="header">
    <el-row class="main" type="flex" justify="space-between">
      <!-- logo部分 -->
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2905159544,1766237257&fm=85&app=79&f=GIF?w=121&h=75&s=02D410D28D705C014E792E740300C076"
            alt
          >
        </nuxt-link>
      </div>
      <!-- 导航部分 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">
          首页
        </nuxt-link>
        <nuxt-link to="/post">
          旅游攻略
        </nuxt-link>
        <nuxt-link to="/hotel">
          酒店
        </nuxt-link>
        <nuxt-link to="/air">
          国内机票
        </nuxt-link>
      </el-row>
      <!-- 用户登录信息 -->
      <el-row type="flex" align="middle" class="account-link">
        <el-dropdown v-if="$store.state.user.userInfo.token" trigger="hover" class="account">
          <span class="el-dropdown-link">
            <nuxt-link to="/">
              <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar">
              {{ $store.state.user.userInfo.user.nickname }}
            </nuxt-link>
            <i class="el-icon-arrow-down el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="/user/personalCenter">
                个人中心
              </nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="handlerLogout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <nuxt-link v-else to="/user/login" class="account-login">
          登录 / 注册
        </nuxt-link>
      </el-row>
    </el-row>
  </header>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
      }
    }
  },
  watch: {
    'this.$store.state.user.userInfo.token' () {
      console.log(123)
    }
  },
  created () {

  },
  methods: {
    // 点击退出
    handlerLogout () {
      // 删除掉vuex中的user的数据
      this.$store.commit('user/clearUserInfo')
      this.$message({
        type: 'success',
        message: '退出成功'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.header {
  height: 60px;
  line-height: 60px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;
  .main {
    width: 1000px;
    height: 60px;
    margin: 0 auto;
    .logo {
      img {
        height: 58px;
      }
    }
    .navs {
      flex: 1;
      height: 60px;
      margin: 0px 20px;
      box-sizing: border-box;
      a {
        display: block;
        padding: 0 20px;
        height: 60px;
        box-sizing: border-box;
        &:hover,
        &:active,
        &:focus {
          color: #409eff;
          border-bottom: 5px solid #409eff;
        }
      }
      /deep/ .nuxt-link-exact-active {
        background: #409eff;
        color: #fff !important;
      }
    }
    .account-link{
      font-size: 14px;
      .account {
        img{
          width: 32px;
          height: 32px;
          vertical-align: middle;
          border-radius: 50%;
        }
      }
      .account-login{
        color: #666666;
        &:hover{
          color: #409eff;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
