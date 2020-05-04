<template>
  <div class="searchTicket">
    <div class="search-title">
      <span
        v-for="(item,index) in ['单程','往返']"
        :key="index"
        :class="{current:currentTab===index}"
        @click="handlerTab(index)"
      >{{ item }}</span>
    </div>
    <el-form ref="city" :model="citys" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="出发城市" prop="org_city">
        <el-input v-model="citys.departCity" placeholder="请输入出发城市" />
      </el-form-item>
      <el-form-item label="到达城市" prop="dep_city">
        <el-input v-model="citys.destCity" placeholder="请输入到达城市" />
      </el-form-item>
      <el-form-item label="出发时间" prop="date">
        <div class="block">
          <el-date-picker v-model="citys.date" type="date" placeholder="请选择日期" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">
          搜索
        </el-button>
      </el-form-item>
      <div class="change">
        <span>换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        org_city: [
          { required: true, message: '请输入出发城市', trigger: 'blur' }
        ],
        dep_city: [
          { required: true, message: '请输入到达城市', trigger: 'blur' }
        ],
        date: [{ required: true, message: '请选择日期', trigger: 'blur' }]
      },
      citys: {
        departCity: '',
        destCity: '',
        date: ''
      },
      currentTab: 0
    }
  },
  methods: {
    handlersubmit () {},
    // tab栏切换
    handlerTab (index) {
      this.currentTab = index
      if (index === 1) {
        // 提示用户现在往返并未开放
        this.$confirm('往返暂未开放', '提示', {
          showCancelButton: false
        })
        this.currentTab = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.current {
  border-color: #ffa500 !important;
  background: #fff !important;
}
.searchTicket {
  width: 360px;
  height: 350px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  .search-title {
    display: flex;
    height: 50px;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      background: #eeeeee;
      align-items: center;
      border-top: 2px solid #eeeeee;
    }
  }
  .el-form {
    position: relative;
    padding: 15px 50px 15px 15px;
    .block {
      width: 100%;
      .el-date-editor {
        width: 100%;
      }
    }
    .el-button {
      width: 100%;
    }
    .change{
      position: absolute;
      top: 55px;
      right: 35px;
      &::before,&::after{
        content: '';
        display: block;
        width: 25px;
        height: 1px;
        background: #cccccc;
        position: absolute;
      }
      &::before{
        top: -20px;
        left: -15px;
      }
      &::after{
        bottom: -45px;
        left: -15px;
      }
      span{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #999999;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        &:hover{
          color: #409eff;
        }
        &::before,&::after{
          content: '';
          display: block;
          height: 20px;
          width: 1px;
          background: #999999;
          position: absolute;
        }
        &::before{
          top: -20px;
          left: 10px;
        }
        &:after{
          height: 25px;
          bottom: -25px;
          left: 10px;
        }
      }
    }
  }
}
</style>
