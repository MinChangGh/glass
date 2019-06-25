<template>
  <div class="mui-content">
    <ul class="order">
        <li class="order-item" v-for="(item,index) in list" :key="index" >
          <div @click="goDetail(item.status)" class="order-item-common border">
            <div class="order-item-common-date">
              {{item.date}}
            </div>
            <div class="order-item-common-status">
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
          <div class="order-item-common">
            <div class="order-item-common-number">
              订单号：{{item.orderNum}}
            </div>
            <div class="order-item-common-price" v-if="item.status=='pay'">
              共1件<span>总计：</span>
              <span class="red">0.01</span>元
            </div>
            <div class="btn"  v-if="item.status=='refund'">
              删除
            </div>
            <div class="btn"  v-if="item.status=='receive'">
              确认收货
            </div>
            <div class="btn"  v-if="item.status=='evaluate'">
              待评价
            </div>
          </div>
          <div class="top" v-if="item.status=='pay'">
            <div class="btn right">
              付款
            </div>
            <div class="btn">
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
    'list',
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
  &-common{
    padding: 6px 12px;
    @include flexLayout(nowrap, row, space-between,center);
    font-size: 14px;
    &-status{
      color: #bbb;
    }
    &-number{
      width: 53%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &-info{
    @include flexLayout(nowrap, row, space-between,center);
    padding: 6px 12px;
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
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //需要控制的文本行数
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
  .border{
    border-bottom: 1px solid #c8c7cc;
  }
  .top{
    padding: 6px 15px;
    border-top: 1px solid #c8c7cc;
    font-size: 14px;
    @include flexLayout(nowrap, row, flex-end,center);
  }
  .red{
    color:rgb(253, 39, 13);
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

