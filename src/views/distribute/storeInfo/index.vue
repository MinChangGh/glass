<template>
  <div class="mui-content">
    <div class="common bottom" @click="changeName()">
      <div>店铺名称</div>
      <div>
        <span class="black">peng</span>
        <svg-icon icon-class="right" />
      </div>
    </div>
    <ul class="bottom">
      <li class="common border">
        <div>推广员姓名</div>
        <div class="black">mei</div>
      </li>
      <li class="common border">
        <div>开店时间</div>
        <div class="black">2018-1-16</div>
      </li>
      <li class="common black">
        <div>上级分店</div>
        <div>汉高测试平台</div>
      </li>
    </ul>
    <div class="common bonus">
      <div class="black">奖金比例设置说明：</div>
      <div class="bonus-info">
        此处是奖金设置说明
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    changeName(){
      this.$router.push('/distribute/changeName');
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.common{
  background: #ffffff;
  padding: 9px 15px;
  color: #666;
  font-size: 14px;
  @include flexLayout(nowrap,row, space-between,center);
}
.bonus{
  display: block;
  &-info{
    min-height: 100px;
  }
}
.bottom{
  margin-bottom: 10px;
}
.border{
  border-bottom: 1px solid #f2f2f2;
}
.black{
  color: #333;
}
</style>
