<template>
  <div class="mui-content">
    <div class="detail">
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
              <div class="red">￥{{detail.money}}元</div>
              <div class='status'>x{{detail.num}}</div>
            </div>
        </div>
      </div>
      <div class="detail-status">
        <div class="btn right" v-if="detail.status=='evaluate'" @click="evaluate()">
          评价
        </div>
        <div class="btn right" v-if="detail.status=='receive'">
          确认收货
        </div>
        <div class="btn" v-if="detail.status=='delivery' || detail.status=='receive'" @click="refund">
          退款
        </div>
      </div>
      <div class="detail-status" v-if="detail.status=='pay'">
        <div class="btn right">
          付款
        </div>
        <div class="btn">
          删除
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
            <div>{{detail.name}}</div>
            <div>{{detail.phone}}</div>
          </div>
          <div>{{detail.address}}</div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-item">
        <div class="order-item-title">订单编号：</div>
        <div class="order-item-desc">{{detail.orderNum}}</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">下单时间：</div>
        <div class="order-item-desc">{{detail.date}}</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">开票时间：</div>
        <div class="order-item-desc">{{detail.orderTime}}</div>
      </div>
      <div class="order-item">
        <div class="order-item-title">开票金额：</div>
        <div class="order-item-desc">￥{{detail.orderMoney}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          type:'mall'
        }
      })
    },
    refund(){
      this.$router.push({
        path:'/myOrder/submitRefund'
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

