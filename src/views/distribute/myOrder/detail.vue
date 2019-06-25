<template>
  <div class="mui-content">
    <div class="order-status margin">
      <img src="https://dev.unionglasses.com/ug/distribute/img/order-unpay.png">
    </div>
    <div class="address margin">
      <div class="address-header">
        <div>收货人：{{detail.name}}</div>
        <div>{{detail.phone}}</div>
      </div>
      <div>
        <svg-icon icon-class="location" />
        <span>{{detail.address}}</span>
      </div>
    </div>
    <div class="detail margin">
      <div class="detail-info" @click="goodsDetail()">
        <div class="detail-info-img">
          <img :src="detail.src">
        </div>
        <div class="detail-info-intro">
            <div class="detail-info-intro-title">{{detail.title}}</div>
            <div class='detail-info-intro-desc'>
              {{detail.desc}}
            </div>
            <div class="detail-info-intro-price">
              <div class="red">￥{{detail.money}}</div>
              <div class='status'>x{{detail.num}}</div>
            </div>
        </div>
      </div>
      <div class="refund margin" v-if="(detail.status=='delivery' || detail.status=='receive') && type == 'my'" @click="refund">
        <div class="refund-btn">退货</div>
      </div>
      <div class="detail-common">
        <div class="detail-common-type">商品总价：</div>
        <div class="detail-common-desc">￥0.05</div>
      </div>
      <div class="detail-common">
        <div class="detail-common-type">运费（快递）：</div>
        <div class="detail-common-desc">￥0.05</div>
      </div>
      <div class="detail-common">
        <div class="detail-common-type">实付款：</div>
        <div class="detail-common-desc red">￥0.05</div>
      </div>
    </div>
    <div class="order margin">
      <div class="order-item">
        <div class="order-item-title">订单编号：</div>
        <div class="order-item-desc">{{detail.orderNum}}</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">付款时间：</div>
        <div class="order-item-desc">{{detail.date}}</div>
      </div>
      <!-- <div class="order-item">
        <div class="order-item-title">发货时间：</div>
        <div class="order-item-desc">{{detail.date}}</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">成交时间：</div>
        <div class="order-item-desc">{{detail.date}}</div>
      </div> -->
    </div>
    <div class="btn-status" v-if="detail.status!='delivery' && type == 'my'">
      <div class="btn right" v-if="detail.status=='evaluate'" @click="evaluate()">
        评价
      </div>
      <div class="btn" v-if="detail.status=='receive'">
        确认收货
      </div>
    </div>
    <div class="btn-status" v-if="detail.status=='pay' && type == 'my'">
      <div class="btn right">
        付款
      </div>
      <div class="btn">
        删除
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type:this.$route.query.type,
      detail:{
        status:this.$store.state.order.status,
        date:'2019-03-09',
        src:'http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY',
        title:'标题',
        desc:'球镜:-775;分类:隐形眼镜;品牌:海昌;品种:炫彩日抛一片装;',
        money:'0.10',
        orderNum:"201654852665552",
        num:'1',
        orderTime:"2019-03-09",
        orderMoney:"145",
        name:'彭文涛',
        phone:'15698745632',
        address:'北京昌平区三庆园',
      }
    };
  },
  methods: {
    evaluate(){
      this.$router.push({
        path:'/myOrder/evaluate',
        query:{
          type:'distribute'
        }
      })
    },
    refund(){
      this.$router.push({
        path:'/distribute/myOrder/submitRefund'
      })
    },
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
  font-size: 14px;
}
.margin{
  margin-bottom: 9px;
}
.order-status{
  width: 100%;
  height: 80px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
}
.address{
  background-color: #fff;
  padding: 13px 15px;
  color: #666;
  &-header{
    @include flexLayout(nowrap, row, space-between,center);
    margin-bottom: 2px;
  }
}
.detail{
  background: #fff;
  padding: 0 13px;
  &-info{
    padding: 13px 0;
    @include flexLayout(nowrap, row, space-between,flex-start);
    &-img{
      width: 88px;
      height: 88px;
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
        margin-top: 5px;
      }
      &-price{
        width: 100%;
        @include flexLayout(nowrap, row, space-between,center);
      }
    }
  }
  .refund{
    width: 100%;
    text-align: right;
    &-btn{
      width: 60px;
      height: 30px;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      margin-left: 15px;
      border: 1px solid rgb(152, 152, 152);
      color: rgb(152, 152, 152);
      display: inline-block;
    }
  }
  &-common{
    padding: 7px 0px;
    border-top: 1px solid #f2f2f2;
    @include flexLayout(nowrap, row, space-between,center);
    color: #8f8f94;
  }
  .red{
    color:#FF4081;
  }
  .status{
    font-size: 12px;
    color: #666;
  }
}
.order{
  margin-top: 10px;
  background: #fff;
  padding: 10px 13px;
  &-item{
    display: flex;
    font-size: 14px;
    color: #8f8f94;
    margin-top: 2px;
  }
  &-item:first-child{
    color: #333;
    margin: 0;
  }
}
.btn-status{
  width: 100%;
  padding: 8px 15px;
  font-size: 14px;
  @include flexLayout(nowrap, row, flex-end,center);
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  .btn{
    color: rgb(152, 152, 152);
    padding: 5px 15px;
    border-radius: 24px;
    border: 1px solid rgb(152, 152, 152);
    background-color: #fff;
    display: inline-block;
  }
  .right{
    margin-right: 10px;
  }
}
</style>

