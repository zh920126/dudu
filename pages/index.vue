<template>
  <div class="index">
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in slider" :key="index">
        <img :src="`${$axios.defaults.baseURL}${item.url}`" alt>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <!-- tab栏 -->
      <el-row type="flex">
        <span v-for="(item,index) in searchBar" :key="index" :class="{currentTab:current===index}" @click="changeTab(index)">{{ item.name }}</span>
      </el-row>
      <!-- 搜索框 -->
      <el-row class="search">
        <input v-model="searchValue" type="text" :placeholder="searchBar[current].placeholder">
        <i class="el-icon-search" @click="handlerSearch" />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 轮播图数据
      slider: [],
      // 搜索框
      searchBar: [
        {
          name: '攻略',
          placeholder: '搜索城市'
        },
        {
          name: '酒店',
          placeholder: '请输入城市搜索酒店'
        },
        {
          name: '机票',
          placeholder: '搜索机票'
        }
      ],
      current: 0,
      searchValue: ''
    }
  },
  // 获取轮播图的数据
  async created () {
    const res = await this.$axios({
      method: 'get',
      url: '/scenics/banners'
    })
    // console.log(res)
    if (res.status === 200) {
      this.slider = res.data.data
    }
  },
  methods: {
    // tab栏切换
    changeTab (index) {
      this.current = index
    },
    // 条件搜索
    handlerSearch () {
      console.log(this.searchValue)
    }
  }
}
</script>

<style lang="less" scoped>
.currentTab{
  color: #000!important;
  background: #fff!important;
}
.index {
  height: 700px;
  /deep/.el-carousel__container {
    height: 700px;
  }
  .search-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 552px;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: 16px;
    color: #333;
    span {
      width: 82px;
      height: 36px;
      line-height: 36px;
      background: rgba(0, 0, 0, 0.5);
      position: relative;
      color: #fff;
      cursor: pointer;
      text-align: center;
    }
    .search{
      position: relative;
      input{
        width: 100%;
        height: 20px;
        padding: 13px 15px;
        border-radius: 0px 5px 5px;
      }
      i{
        position: absolute;
        top: 50%;
        right: -15px;
        transform: translateY(-50%);
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>
