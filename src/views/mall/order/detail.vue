<template>
  <div class="mui-content">
    <div class="detail">
      <div class="detail-info">
        <div class="detail-info-img">
          <img src="http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY">
        </div>
        <div class="detail-info-intro">
            <div class="detail-info-intro-title">标题</div>
            <div class='detail-info-intro-desc'>
              能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？
            </div>
            <div class="detail-info-intro-price">
              <div class="red">￥0.10元</div>
              <div class='status'>x1</div>
            </div>
        </div>
      </div>
      <div class="detail-status">
        <div class="btn right">
          付款
        </div>
        <div class="btn" @click="refund">
          退款
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-item">
        <div class="order-item-title">订单状态：</div>
        <div class="order-item-desc">未发货</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">收货信息：</div>
        <div class="order-item-info">
          <div class="order-item-info-user">
            <div>彭文涛</div>
            <div>15698745632</div>
          </div>
          <div>北京东城区天安你们</div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-item">
        <div class="order-item-title">订单编号：</div>
        <div class="order-item-desc">fdasd</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">下单时间：</div>
        <div class="order-item-desc">fdasd</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">开票时间：</div>
        <div class="order-item-desc">fdasd</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">开票金额：</div>
        <div class="order-item-desc">￥145</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    refund(){
      this.$router.push({
        path:'/order/submitRefund'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.detail{
  background: #fff;
  &-info{
    @include flexLayout(nowrap, row, space-between,flex-start);
    padding: 6px 12px;
    &-img{
      width: 123px;
      height: 123px;
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
        -webkit-line-clamp: 3; //需要控制的文本行数
        overflow: hidden;
        margin-top: 5px;
      }
      &-price{
        width: 100%;
        font-size: 17px;
        @include flexLayout(nowrap, row, space-between,center);
        margin-top: 5px;
      }
    }
  }
  .detail-status{
    padding: 6px 15px;
    font-size: 14px;
    @include flexLayout(nowrap, row, flex-end,center);
  }
  .red{
    color:rgb(233, 108, 23);
  }
  .status{
    font-size: 14px;
  }
  .btn{
    color: rgb(152, 152, 152);
    padding: 4px 15px;
    border-radius: 24px;
    border: 1px solid rgb(152, 152, 152);
    background-color: #fff;
    display: inline-block;
  }
  .right{
    margin-right: 10px;
  }
}
.order{
  margin-top: 5px;
  background: #fff;
  padding: 10px 12px;
  &-item{
    display: flex;
    font-size: 14px;
    &-title{
      color: rgb(108, 107, 107);
    }
    &-info{
      flex: 1;
      &-user{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

