<template>
  <div class="mui-content">
    <div class="container">
      <div class="container-empty">
        <img :src="noDataInfo.imgUrl">
      </div>
      <div class="container-btn">
        去逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['noDataInfo'],
  methods: {
    //购物车提示
    close(){
      this.$emit('ruleClose', false);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.container{
  width: 100%;
  height: calc(100vh - 50px);
  @include flexLayout(nowrap,column, center,center);
  &-empty{
    img{
      width: 100%;
    }
  }
  &-btn{
    width: 118px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: 1px solid #D2D2D2;
    border-radius: 22px;
    color: #333;
    background-color: #fff;
    font-size: 14px;
  }
}
</style>
