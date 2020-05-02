<template>
  <div class="footer-all">
    <div class="footer">
      <el-row>
        <el-col :span="6">
          <h3>闲云旅游旅游网</h3>
          <p>上亿旅行者共同打造的"旅行神器"</p>
          <p>
            <span>60,000</span> 多个全球旅游目的地
          </p>
          <p>
            <span>600,000</span> 个细分目的地新玩法
          </p>
          <p>
            <span>760,000,000</span> 次攻略下载
          </p>
          <p>
            <span>38,000</span> 家旅游产品供应商
          </p>
        </el-col>
        <el-col :span="6">
          <h3>关于我们</h3>
          <p>隐私政策 商标声明</p>
          <p>服务协议 游记协议</p>
          <p>商城平台服务协议</p>
          <p>网络信息侵权通知指引</p>
          <p>闲云旅游旅游网服务监督员</p>
          <p>网站地图加入闲云旅游</p>
        </el-col>
        <el-col :span="6">
          <h3>
            旅行服务
          </h3>
          <p>旅游攻略 酒店预订</p>
          <p>旅游特价 国际租车</p>
          <p>旅游问答 旅游保险</p>
          <p>旅游指南 订火车票</p>
          <p>旅游资讯 APP下载</p>
        </el-col>
        <el-col :span="6">
          <p class="about">
            <img src="http://157.122.54.189:9093/images/1556522965.png" alt="">
            关注我们
          </p>
        </el-col>
      </el-row>
      <p class="copy">
        京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer-all {
  padding-top: 30px;
  background: #333333;
  .footer {
    width: 1000px;
    margin: 0 auto;
    h3 {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: normal;
      color: #fff;
    }
    p {
      line-height: 1.8;
      font-size: 12px;
      color: #ccc;
      span {
        color: #ffa500;
      }
      &.about{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    img{
      width: 140px;
      height: 140px;
      vertical-align: middle;
    }
    .copy{
      margin-top: 20px;
      padding: 50px 0;
      border-top: 1px solid #666666;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
