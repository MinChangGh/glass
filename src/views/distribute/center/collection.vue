<template>
  <div class="mui-content">
    <div class="mui-scroll">
      <ul class="collect">
        <li class="collect-item" @click="goDetail()" v-for="(item, index) in list" :key="index">
          <div class="collect-item-img">
            <img :src="item.imgUrl"/>
          </div>
          <div class="collect-item-info">
            <div class="collect-item-info-title">{{item.title}}</div>
            <div class="collect-item-info-desc">{{item.desc}}</div>
            <div class="collect-item-info-price">￥{{item.price}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[{
        imgUrl:"http://img.unionglasses.com/FsT0lSKGvw9B9W7if-nWbYxsUm68",
        title:'太阳镜 金属 银色 时尚款 LH02016',
        desc:'规格：LH02016',
        price:"55"
      },{
        imgUrl:"http://img.unionglasses.com/FsT0lSKGvw9B9W7if-nWbYxsUm68",
        title:'太阳镜 金属 银色 时尚款 LH02016',
        desc:'规格：LH02016',
        price:"55"
      },]
    }
  },
  methods: {
    goDetail(){
      console.log('去商品详情页')
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.collect{
  background: #ffffff;
  &-item{
    padding: 14px;
    border-top: 1px solid rgba(242,242,242,1);
    @include flexLayout(nowrap);
    font-size: 14px;
    &-img{
      width: 88px;
      height: 88px;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-info{
      flex: 1;
      &-title{
        color: #333333;
      }
      &-desc{
        font-size: 12px;
        color: #666666;
      }
      &-price{
        color: #FF4081;
        font-size: 16px;
      }
    }
  }
  &-item:first-child{
    border: 0;
  }
}
</style>
