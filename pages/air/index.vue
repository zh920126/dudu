<template>
  <div class="air">
    <!-- 城市搜索框 -->
    <h3 class="air-title">
      <span class="iconfont iconfeiji" />
      <span>国内飞机</span>
    </h3>
    <div class="searchC">
      <SearchTicket />
      <nuxt-link to="/air">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
      </nuxt-link>
    </div>
    <!-- promise -->
    <div class="promise">
      <div class="renzheng">
        <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF;" />
        <span>100%航协认证</span>
      </div>
      <div class="baozheng">
        <i class="iconfont iconbaozheng" style="color:green;" />
        <span>出行保证</span>
      </div>
      <div class="service">
        <i class="iconfont icondianhua" style="color:#409EFF;" />
        <span>7x24小时服务</span>
      </div>
    </div>
    <!-- 特价机票 -->
    <div class="ticket">
      <h3><i class="iconfont icontejiajipiao" />特价机票</h3>
      <div class="sale-air">
        <div v-for="(item,index) in saleAir" :key="index" class="sale">
          <nuxt-link :to="`/air/detail?departCity=${item.departCity}&departCode=${item.departCode}&destCIty=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`">
            <img :src="item.cover" alt="">
          </nuxt-link>
          <p><span>{{ item.departCity }}-{{ item.destCity }}</span>&yen;{{ item.price }}<span /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchTicket from '@/components/air/searchTicket.vue'
export default {
  components: {
    SearchTicket
  },
  data () {
    return {
      saleAir: []
    }
  },
  created () {
    this.$axios({
      method: 'get',
      url: '/airs/sale'
    }).then((res) => {
      console.log(res)
      this.saleAir = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.air{
  width: 1000px;
  margin: 0 auto;
  .air-title{
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: #ffa500;
  }
  .searchC{
    display: flex;
    justify-content: space-between;
  }
  .promise{
    width: 1000px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid #dddddd;
    background: #f5f5f5;
    height: 36px;
    padding: 10px 0;
    margin: 15px 0;
    div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #ddd;
      &:last-child{
        border-right:0px ;
      }
       i{
        font-size: 30px;
        margin-right: 5px;
      }
    }
  }
  .ticket{
    h3{
      margin: 20px 0;
      font-size: 20px;
      color: #409eff;
      font-weight: normal;
      i{
        margin-right: 5px;
      }
    }
   .sale-air{
     display:flex;
     padding: 20px;
     margin-bottom: 50px;
     border: 1px solid #ddd;
     .sale{
       position: relative;
       width: 225px;
       height: 140px;
       overflow: hidden;
       margin-right: 15px;
       &:last-child{
         margin-right: 0;
       }
       img{
         width: 100%;
       }
       p{
         width: 100%;
         padding: 0 15px;
         height: 30px;
         position: absolute;
         left: 0;
         bottom: 0;
         display: flex;
         background: rgba(0, 0, 0, .5);
         justify-content: space-around;
         align-items: center;
         color: #fff;
       }
     }
   }
  }
}
</style>
