<template>
  <div class="container">
    <div class="container-empty">
      <img :src="noDataInfo.imgUrl">
    </div>
    <div class="container-desc">
      {{noDataInfo.desc}}
    </div>
  </div>
</template>

<script>
export default {
  props:['noDataInfo'],
  methods: {
    //关闭积分规则
    close(){
      this.$emit('ruleClose', false);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container{
  &-empty{
    padding: 25px 0;
    text-align: center;
  }
  &-desc{
    text-align: center;
    font-size: 14px;
    color: #8f8f94;
  }
}
</style>
