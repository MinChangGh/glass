<template>
  <div class="empty-container">
    <img :src="settingData.$src" :alt="settingData.$alt">
    <div class="empty-text">
      <p>{{settingData.$des}}</p>
    </div>
  </div>
</template>

<script>
import empty from "@/assets/mall/images/search/empty-search.png";
export default {
  data() {
    return {
      settingData: {
        $src: this.emptySrc,
        $des: this.emptyDes,
        $alt: this.emptyAlt
      }
    };
  },
  created() {},
  methods: {},
  watch: {},
  props: {
    emptySrc: {
      type: String,
      default: empty
    },
    emptyDes: {
      type: String,
      default: "抱歉,没有搜索到您需要的商品"
    },
    emptyAlt: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.empty-container {
  text-align: center;
  padding: 0.25rem 0;
  .empty-text {
    padding-top: 0.15rem;
    p {
      font-size: 0.14rem;
      margin-top: 0;
      margin-bottom: 0.1rem;
      color: #8f8f94;
    }
  }
}
</style>