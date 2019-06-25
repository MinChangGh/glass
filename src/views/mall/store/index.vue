<template>
  <div class="container">
    <div class="header-content">
      <div class="header-content-top">线下体验馆</div>
      <div class="header-content-bottom">星球石业橱柜厂</div>
    </div>
    <div class="middle-content">
      <div class="middle-content-address">
        <div class="middle-content-address-content">{{address}}</div>
        <router-link class="middle-content-address-icon" tag="div" to="/map">
          <svg-icon icon-class="navigate"/>
        </router-link>
      </div>
      <div class="middle-content-tel">
        <div class="middle-content-tel-content">联系电话:{{phone}}</div>
        <div class="middle-content-tel-icon" @click="phoneCall(phone)">
          <svg-icon icon-class="phone"/>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="bottom-content-title">工厂简介</div>
      <div class="bottom-content-body">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "台州椒江洪龙路198号山鑫市场",
      phone: "13058898058(彭先生)",
      description: "sdgsgag"
    };
  },
  created() {},
  mounted() {},
  methods: {
    phoneCall(phone) {
      window.location.href = "tel://" + this.phone;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
  .header-content {
    height: 13rem;
    .header-content-top {
      height: 8rem;
      @include greenBgc;
      color: white;
      font-weight: 700;
      line-height: 8rem;
      text-align: center;
      font-size: 2.2rem;
    }
    .header-content-bottom {
      height: 5rem;
      @include greenColor;
      font-weight: 500;
      line-height: 5rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }
  .middle-content {
    height: 10rem;
    color: #999;
    padding: 0 1rem;
    .middle-content-address {
      @include flexLayout(nowrap, row, space-between);
      border-bottom: 2px solid #f8f8f8;
      height: 4rem;
      font-size: 1.3rem;
    }
    .middle-content-tel {
      @include flexLayout(nowrap, row, space-between);
      border-bottom: 2px solid #f8f8f8;
      height: 4rem;
      font-size: 1.5rem;
    }
    .middle-content-address-content,
    .middle-content-tel-content {
      height: 4rem;
      line-height: 4rem;
    }
    .middle-content-address-icon,
    .middle-content-tel-icon {
      width: 5rem;
      border-left: 3px solid #f8f8f8;
      @include greenColor;
      font-size: 2.2rem;
      display: flex;
      justify-content: center;
    }
  }
  .bottom-content {
    padding: 0 1rem;
    .bottom-content-title {
      font-size: 1.5rem;
    }
    .bottom-content-body {
      font-size: 1rem;
      @include greyColor;
      padding-top: 1rem;
    }
  }
}
</style>
