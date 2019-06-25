<template>
  <div class="mui-content">
    <div class="refund">
      <div class="refund-title common">
        <div class="refund-title-status">您的商品正在退款中</div>
      </div>
      <div class="common refund-info">
        <div class="border time">
          如果卖家未在48小时内处理，系统将会自动退款给您。
        </div>
        <div class="border">
          <p>商家同意或者超时未处理，系统将退款给您</p>
          <p>如果商家拒绝退款，请与商家进行协商</p>
        </div>
        <div class="revoke">
          撤销申请
        </div>
      </div>
    </div>
    <div class="order common">
      <div class="border">退款信息</div>
      <div class="order-info border" @click="goodsDetail()">
        <div class="order-info-img">
          <img src="http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY">
        </div>
        <div class="order-info-intro">
          <div class="order-info-intro-title">标题</div>
          <div class='order-info-intro-desc'>
            球镜:-775;分类:隐形眼镜;品牌:海昌;品种:炫彩日抛一片装;
          </div>
          <div class="order-info-intro-number">x1</div>
        </div>
      </div>
      <ul class="order-reason">
        <li>退款原因：错拍</li>
        <li>退款金额：￥85.00</li>
        <li>申请时间：2019-04-08</li>
      </ul>
    </div>
    <div class="phone">
      <svg-icon icon-class="phone" class="phone-icon"/>
      <span>拨打电话</span>
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
    goodsDetail(){
      this.$router.push({
        path:'/detail'
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
.common{
  padding: 12px 12px;
  background-color: #ffffff;
}
.border{
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
}
.refund{
  &-title{
    background: linear-gradient(to right, #fd7609, #f95211);
    color: #ffffff;
    height: 100px;
    position: relative;
    &-status{
      position: absolute;
      bottom: 24px;
    }
  }
  &-info{
    overflow: hidden;
    p{
      margin: 0;
    }
    .revoke{
      float: right;
      overflow: hidden;
      color: rgb(152, 152, 152);
      border: 1px solid rgb(152, 152, 152);
      padding: 7px 12px;
      border-radius: 6px;
      font-size: 14px;
      margin-top: 15px;
    }
    .time{
      font-size: 15px;
    }
  }
}
.order{
  margin-top: 5px;
  padding: 0 12px;
  font-size: 14px;
  &-info{
    @include flexLayout(nowrap, row, space-between,center);
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
      &-number{
        width: 100%;
        text-align: right;
      }
    }
  }
  &-reason{
    margin-top: 10px;
    color: #8f8f94;
  }
}
.phone{
  font-size: 14px;
  position: fixed;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #000;
  font-size: 14px;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  &-icon{
    color: #007aff;
    font-size: 16px;
    margin-right: 5px;
  }
}
</style>

