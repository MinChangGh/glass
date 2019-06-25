<template>
  <div class="mui-content">
    <div class="head-tab header">
      <div
        :class="['head-tab-item', curTab == 'all' ?'pick-tab' : '']"
        @tap="getDataByTab('all')"
      >全部</div>
      <div
        :class="['head-tab-item', curTab == 'pay' ? 'pick-tab': '']"
        @tap="getDataByTab('pay')"
      >待付款</div>
      <div
        :class="['head-tab-item', curTab == 'delivery'? 'pick-tab'  : '']"
        @tap="getDataByTab('delivery')"
      >待发货</div>
      <div
        :class="['head-tab-item', curTab == 'receive'? 'pick-tab'  : '']"
        @tap="getDataByTab('receive')"
      >待收货</div>
      <div
        :class="['head-tab-item', curTab == 'evaluate'? 'pick-tab'  : '']"
        @tap="getDataByTab('evaluate')"
      >待评价</div>
      <div
        :class="['head-tab-item', curTab == 'complete'? 'pick-tab'  : '']"
        @tap="getDataByTab('complete')"
      >已完成</div>
    </div>
    <div class="order-list-container">
      <div v-if="orderList.length>0" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <orderList :list="orderList" @goDetails="goDetails">

          </orderList>
        </div>
      </div>
      <div v-else>
        <noData v-if="noDataShow" :noDataInfo="noDataInfo"></noData>
      </div>
    </div>
  </div>
</template>

<script>
import noData from "@/components/noData.vue";
import orderList from "@/components/orderList.vue";
export default {
  data() {
    return {
      curTab: this.$route.query.status,
      orderList: [{}],
      noDataShow:true,//暂无数据
      noDataInfo:{
        imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
        desc:'您还没有相关权益'
      }
    };
  },
  mounted() {
    console.log(this)
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getDataByTab(tab) {
      this.curTab = tab;
    },
    goDetails(){
      this.$router.push({
        path:'/order/detail'
      })
    }
  },
  components: {
    noData,
    orderList
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.head-tab {
  @include flexLayout(nowrap, row, space-around);
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  font-weight: 400;
  z-index: 100;
  .head-tab-item {
    background-color: #fff;
    height: 0.4rem;
    flex: 1 1 auto;
    text-align: center;
    border-bottom: 2px solid transparent;
  }
}
.pick-tab {
  color: rgb(253, 39, 13);
  border-bottom: 2px solid rgb(253, 39, 13) !important;
  transition: all 0.2s ease;
}
.order-list-container {
  .mui-scroll-wrapper {
    top: 0.4rem;
    /deep/ .data-list {
      @include flexLayout(wrap, row, space-between);
      margin-bottom: 0.05rem;
      padding: 0.05rem 0;
      color: #fff;
    }
  }
}
</style>
