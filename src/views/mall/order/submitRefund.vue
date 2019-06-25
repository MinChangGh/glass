<template>
  <div class="mui-content">
    <div class="refund" @click="goDetail()">
      <div class="refund-info border">
        <div class="refund-info-date">
          2019-03-09
        </div>
        <div class="refund-info-status red">
          已退款
        </div>
      </div>
      <div class="refund-detail">
        <div class="refund-detail-img">
          <img src="http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY">
        </div>
        <div class="refund-detail-intro">
            <div class="refund-detail-intro-title">标题</div>
            <div class='refund-detail-intro-desc'>
              能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？
            </div>
            <div class="refund-detail-intro-price">
              <div class="red">￥0.10</div>
              <div class='status'>x1</div>
            </div>
        </div>
      </div>
    </div>
    <div class="reason">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    goDetail(){
      this.$emit('goDetails', false);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.refund{
  background-color: #ffffff;
  &-info{
    padding: 6px 12px;
    @include flexLayout(nowrap, row, space-between,center);
    font-size: 14px;
  }
  &-detail{
    @include flexLayout(nowrap, row, space-between,center);
    padding: 10px 12px;
    &-img{
      width: 80px;
      height: 80px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-intro{
      flex: 1;
      margin-left: 12px;
      @include flexLayout(nowrap, column, flex-start,flex-start);
      font-size: 14px;
      &-desc{
        @include flexLayout(wrnowrapap, row, space-between,center);
        color: #8f8f94;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //需要控制的文本行数
        overflow: hidden;
      }
      &-price{
        width: 100%;
        font-size: 17px;
        @include flexLayout(nowrap, row, space-between,center);
        margin-top: 5px;
      }
    }
  }
}
.border{
  border-bottom: 1px solid #c8c7cc;
}
.red{
  color:rgb(253, 39, 13);
}
.status{
  font-size: 14px;
}
</style>

