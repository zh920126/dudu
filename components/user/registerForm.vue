<template>
  <div class="register">
    <el-form ref="form" :model="userInfo" :rules="rules" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="userInfo.username" placeholder="手机号" />
      </el-form-item>
      <el-form-item prop="captcha">
        <el-input v-model="userInfo.captcha" placeholder="验证码">
          <template slot="append">
            <el-button :disabled="isDisabled" @click="handlerCaptcha">
              {{ captchaTitle }}
            </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input v-model="userInfo.nickname" placeholder="昵称" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="userInfo.password" type="password" placeholder="密码" />
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input v-model="userInfo.checkPassword" type="password" placeholder="确认密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="disabledReg" @click="submitForm">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        username: '',
        nickname: '',
        captcha: '',
        password: '',
        checkPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ]
      },
      captchaTitle: '发送验证码',
      captcha: '',
      isDisabled: false,
      timeId: null,
      num: 60,
      disabledReg: false
    }
  },
  destroyed () {
    clearTimeout(this.timeId)
  },
  methods: {
    submitForm () {
      console.log(this.userInfo)
      console.log(this.captcha)
      // 防止多次重复点击
      this.disabledReg = true
      // 先对表单数据进行验证
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 验证手机验证码是否正确
          if (this.captcha === this.userInfo.captcha) {
            // 再验证两次输入的密码是否一致
            if (this.userInfo.password === this.userInfo.checkPassword) {
              const { checkPassword, ...props } = this.userInfo
              this.$axios({
                url: '/accounts/register',
                method: 'POST',
                data: props
              }).then((res) => {
                // 先清除原始数据
                this.userInfo = {}
                // 跳转到登录页面
                this.$emit('sendTabIndex', 0)
                // 提示用户注册成功，跳转到登录
                this.$message({
                  type: 'success',
                  message: '注册成功'
                })
              })
                .catch((error) => {
                  // console.log(error)
                  this.$confirm(`${error.message}`, '提示', {
                    confirmButtonText: '确定',
                    showCancelButton: false,
                    type: 'warning'
                  })
                })
                .finally(() => {
                  // 不管成功还是失败 都需要让按钮变为可用状态
                  this.disabledReg = false
                })
            } else {
              this.$message({
                message: '两次输入密码不一致',
                type: 'warning'
              })
            }
          } else {
            this.$message({
              message: '验证码错误',
              type: 'warnning'
            })
          }
        } else {
          return false
        }
      })
    },
    // 发送验证码
    handlerCaptcha () {
      clearInterval(this.timeId)
      // 发送之前，先验证手机号
      this.$refs.form.validateField('username', (errMsg) => {
        if (errMsg) {
          // console.log('手机号校验未通过')
          this.$message({
            message: '请输入正确的手机号',
            type: 'warning'
          })
        } else {
          // 验证手机号成功后
          this.$axios({
            method: 'post',
            url: 'captchas',
            Header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              tel: this.userInfo.username
            }
          }).then((res) => {
            // console.log(res)
            if (res.status === 200) {
              // 提示用户验证码已发送
              this.$message({
                message: '验证码已发送，请注意查收',
                type: 'success'
              })
              // 将验证存起来
              this.captcha = res.data.code
              // 当验证码发送之后 ，需要再等1分钟之后才能再次发送验证码
              this.timeId = setInterval(() => {
                if (this.num <= 0) {
                  this.captchaTitle = '发送验证码'
                  this.num = 60
                  this.isDisabled = false
                  clearInterval(this.timeId)
                } else {
                  this.num--
                  this.captchaTitle = this.num + '秒后重新发送'
                  this.isDisabled = true
                }
              }, 1000)
            }
          })
        }
      })
    }

  }
}
</script>

<style lang="less" scoped>
  .register{
    .el-form{
      background: #fff;

     padding: 25px;
     /deep/.el-input-group__append{
       cursor: pointer;
     }
     .el-button{
       width: 100%;
     }
    }
  }
</style>
