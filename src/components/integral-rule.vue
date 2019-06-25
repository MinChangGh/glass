<template>
  <div class="mui-backdrop">
    <div class="rule-content">
      <div class="rule-content-header">
        <span>积分规则</span>
        <div class="back-icon" @click="close()">
          <svg-icon icon-class="close"  />
        </div>
      </div>
      <div class="rule-content-box">
        <div class="rule-content-box-title">积分规则描述</div>
        <div class="rule-content-box-desc">
          <div class="rule-content-box-desc-integral box"></div>
          <div class="rule-content-box-desc-load">
            <div class="load-mini load"></div>
            <div class="load-small load"></div>
            <div class="load-big load"></div>
          </div>
          <div class="rule-content-box-desc-gift box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {

  },
  methods: {
    //关闭积分规则
    close(){
      console.log(1)
      this.$emit('ruleClose', false);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.3);
  @include flexLayout(nowrap, row, center,center);
}
.rule-content {
  width: 80%;
  height: 320px;
  background-color: #ffffff;
  border-radius: 7px;
  &-header {
    position: relative;
    text-align: center;
    padding: 20px 15px;
    .back-icon {
      position: absolute;
      right: 20px;
      top: 15px;
      color: #727171;
    }
  }
  &-box {
    padding: 15px 12px 29px;
    &-title {
      font-size: 14px;
      color: #8f8f94;
    }
    &-desc {
      margin: 22px auto 0;
      @include flexLayout(nowrap, row, center,center);
      .box {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid #ebebeb;
      }
      &-integral {
        background: url(https://dev.unionglasses.com/ug/mall/assest/images/boshi/icon-gride.png)
          no-repeat center;
      }
      &-load {
        @include flexLayout(nowrap);
        margin: 0 5px;
        .load {
          margin: 0 3px;
          border-radius: 50%;
          background: #ebebeb;
        }
        .load-mini {
          width: 6px;
          height: 6px;
        }
        .load-small {
          width: 8px;
          height: 8px;
        }
        .load-big {
          width: 10px;
          height: 10px;
        }
      }
      &-gift{
        background: url(https://dev.unionglasses.com/ug/mall/assest/images/boshi/icon-gift.png) no-repeat center;
      }
    }
  }
}
</style>
