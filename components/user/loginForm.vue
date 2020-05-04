<template>
  <div class="userLoinger">
    <el-form ref="form" :model="ruleForm" :rules="rules" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '13800138000',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    submitForm () {
      // 提交前对数据进行验证
      this.$refs.form.validate((valid) => {
        // 验证成功
        if (valid) {
          // 发请求，进行登录
          // console.log(this.ruleForm)
          this.$axios({
            url: '/accounts/login',
            method: 'post',
            data: this.ruleForm
          }).then((res) => {
            // console.log(res)
            if (res.status === 200) {
              // 提示用户登录成功，并跳转到首页
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              this.$router.replace('/')
              // 同时获取vuex里面的数据，用来渲染页面
              this.$store.commit('user/setUserInfo', res.data)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .userLoinger{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    .el-form{
      padding: 25px;
      .el-form-item__content{
       text-align: center;
       .el-button{
         width: 100%;
       }
      }
    }
  }
</style>
