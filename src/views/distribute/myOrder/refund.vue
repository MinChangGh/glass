<template>
  <div class="mui-content">
    <div class="order-list-container">
      <div v-if="list.length>0" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <orderList :list="list" @goDetails="goDetails">

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
import orderList from "@/components/distribute/orderList.vue";
export default {
  data() {
    return {
      list:[{
        status:this.$route.query.status,
        date:'2019-03-09',
        src:'http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY',
        title:'标题',
        desc:'球镜:-775;分类:隐形眼镜;品牌:海昌;品种:炫彩日抛一片装;',
        money:'0.10',
        orderNum:"201654852665552"
      }],
      noDataShow:true,//暂无数据
      noDataInfo:{
        imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
        desc:'您还没有相关的退款记录'
      }
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    goDetails(val){
      this.$store.commit('setStatus',val)
      this.$router.push({
        path:'/distribute/myOrder/refundDetail',
        query:{
          status:val
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
.mui-scroll {
  margin-top: -5px;
}
</style>
