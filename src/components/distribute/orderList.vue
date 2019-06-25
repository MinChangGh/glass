<template>
  <div class="mui-content">
    <ul class="order">
        <li class="order-item" v-for="(item,index) in list" :key="index" >
          <div @click="goDetail(item.status)" class="order-item-common border">
            <div class="order-item-common-date">
              <span v-if="type=='store'">订单编号：{{item.orderNum}}</span>
              <span v-if="type=='my'">{{item.date}}</span>
            </div>
            <div class="order-item-common-status">
              <span class="red" v-if="item.status=='pay'">待付款</span>
              <span class="red" v-if="item.status=='delivery'">待发货</span>
              <span class="red" v-if="item.status=='receive'">待收货</span>
              <span class="red" v-if="item.status=='evaluate'">待评价</span>
              <span class="red" v-if="item.status=='refund'">已退款</span>
              <svg-icon icon-class="rightArrow"/>
            </div>
          </div>
          <div @click="goDetail(item.status)" class="order-item-info border">
            <div class="order-item-info-img">
              <img :src="item.src">
            </div>
            <div class="order-item-info-intro">
                <div class="order-item-info-intro-title">{{item.title}}</div>
                <div class='order-item-info-intro-desc'>
                  <div class="order-item-info-intro-desc-detail">
                    {{item.desc}}
                  </div>
                  <span>x1</span>
                </div>
                <div class="order-item-info-intro-price">
                  <div class="red">￥{{item.money}}</div>
                  <div class='status' v-if="item.status=='refund'">退款完成</div>
                </div>
            </div>
          </div>
          <div class="order-item-user" v-if="type=='store'">
            <div class="order-item-user-name">收货人：{{item.name}}</div>
            <div class="order-item-user-address">收货地址：{{item.address}}</div>
          </div>
          <div class="order-item-common end">
            <div class="order-item-common-price">
              <span class="order-item-common-price-number">共1件</span>
              <span>合计：</span>
              <span>0.01</span>元
            </div>
          </div>
          <div class="top" v-if="item.status!='delivery' && type=='my'">
            <div class="btn"  v-if="item.status=='refund'">
              删除
            </div>
            <div class="btn"  v-if="item.status=='receive'">
              确认收货
            </div>
            <div class="btn"  v-if="item.status=='evaluate'">
              待评价
            </div>
            <div class="btn right" v-if="item.status=='pay'" >
              付款
            </div>
            <div class="btn" v-if="item.status=='pay'">
              删除
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:[
    'list','type'
    ],
  data() {
    return {

    };
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    goDetail(status){
      console.log(status)
      this.$emit('goDetails', status);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.order{
  background-color: #ffffff;
}
.order-item{
  margin-top: 5px;
  padding: 0px 15px;
  &-common{
    padding: 12px 0px;
    @include flexLayout(nowrap, row, space-between,center);
    font-size: 14px;
    &-date{
      color: #999;
    }
    &-status{
      color: #bbb;
    }
    &-number{
      width: 53%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-price{
      color: #666;
      &-number{
        margin-right: 20px;
      }
    }
    &.end{
      justify-content: flex-end;
    }
  }
  &-info{
    padding: 10px 0px;
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
        &-detail{
          width: 85%;
          display: -webkit-box;
          -webkit-line-clamp: 2;//需要控制的文本行数
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
      &-price{
        width: 100%;
        font-size: 17px;
        @include flexLayout(nowrap, row, space-between,center);
        margin-top: 5px;
      }
    }
  }
  &-user{
    padding: 8px 0;
    border-bottom: 1px solid #F2F2F2;
    >div{
      height: 20px;
      line-height: 20px;
      margin: 0;
      color: #999;
      font-size: 14px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .border{
    border-bottom: 1px solid #F2F2F2;
  }
  .top{
    padding: 6px 0;
    border-top: 1px solid #F2F2F2;
    font-size: 14px;
    @include flexLayout(nowrap, row, flex-end,center);
  }
  .red{
    color:#FF4784;
  }
  .status{
    color:#f0ad4e;
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
</style>

