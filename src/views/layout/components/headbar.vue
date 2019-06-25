<template>
  <section>
    <div class="headbar">
      <div class="brand">{{brand}}</div>
      <svg-icon :icon-class="icon"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "Headbar",
  data() {
    return {
      brand: "星球橱柜",
      icon: "explore"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.headbar {
  @include flexLayout(nowrap, row, space-between);
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.3rem;
  z-index: 1000;
  background-color: #fff;
  padding: 0 0.1rem;
  border-bottom: 1px solid #ccc;
  @include greyBgc;
  .brand {
    @include greenColor;
    font-weight: 700;
    font-family: "YouYuan";
  }
}
</style>