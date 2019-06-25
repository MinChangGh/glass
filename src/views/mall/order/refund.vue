<template>
  <div class="mui-content">
    <div class="order-list-container">
      <div v-if="orderList.length>0" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <orderList :list="orderList">

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
      orderList: [{}],
      noDataShow:true,//暂无数据
      noDataInfo:{
        imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
        desc:'您还没有相关权益'
      }
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {

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
.order-list-container {

}
</style>
