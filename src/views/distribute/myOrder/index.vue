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
    </div>
    <div class="order-list-container">
      <div v-if="list.length>0" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <orderList :list="list" :type="type" @goDetails="goDetails">

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
import noData from "@/components/distribute/noData.vue";
import orderList from "@/components/distribute/orderList.vue";
export default {
  data() {
    return {
      curTab: this.$store.state.order.status,
      type:this.$route.query.type,
      list: [{
        status:this.$store.state.order.status,
        date:'汉高平台测试',
        src:'http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY',
        title:'标题',
        desc:'球镜:-775;分类:隐形眼镜;品牌:海昌;品种:炫彩日抛一片装;',
        money:'0.10',
        orderNum:"201654852665552",
        name:'peng',
        address:'浙江省杭州市西湖区华鸿大厦'
      }],
      noDataShow:true,//暂无数据
      noDataInfo:{
        imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
        desc:'暂无数据'
      },
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getDataByTab(tab) {
      this.curTab = tab;
      this.list[0].status = tab;
      this.$store.commit('setStatus',tab)
    },
    goDetails(val){
      this.$router.push({
        path:'/distribute/myOrder/detail',
        query:{
          status:val,
          type:this.type
        }
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
* {
  touch-action: none;
}
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
  color: #666666;
  .head-tab-item {
    background-color: #fff;
    height: 0.4rem;
    flex: 1 1 auto;
    text-align: center;
    border-bottom: 2px solid transparent;
  }
}
.pick-tab {
  color: #007AFF;
  border-bottom: 2px solid #007AFF !important;
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
