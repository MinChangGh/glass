<template>
  <div class="mall-search-box">
    <div class="mall-search-inner">
      <div class="mui-input-row mall-search">
        <form id="search-input" class="search-form" action="#" v-on:submit.prevent>
          <input
            type="search"
            v-model="settingData.$searchValue"
            class="mui-input-clear"
            :placeholder="settingData.$placeholder"
          >
        </form>
      </div>
      <div class="mall-search-icon" @tap="onSearch">
        <svg-icon icon-class="search_list"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingData: {
        $placeholder: this.placeholder
          ? this.placeholder
          : "有问题，点我搜搜看",
        $searchValue: this.searchValue ? this.searchValue : ""
      }
    };
  },
  created() {},
  methods: {
    onSearch: function() {
      this.$emit("func",this.settingData.$searchValue);
    }
  },
  watch: {},
  props: ["placeholder","searchValue"]
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mall-search-box {
  height: 0.34rem;
  margin: 0.05rem 0.1rem;
  .mall-search-inner {
    border-radius: 0.3rem;
    @include flexLayout(nowrap);
    .mall-search {
      width: 100%;
      .search-form {
        width: 100%;
        input[type="search"] {
          background-color: white;
          margin-bottom: 0;
          border-radius: 0.3rem 0 0 0.3rem;
          padding-left: 0.12rem;
          text-align: left;
          font-size: 0.14rem;
          color: black;
        }
      }
    }
    .mall-search-icon {
      height: 0.34rem;
      background-color: #fff;
      border-radius: 0 0.3rem 0.3rem 0;
      @include flexLayout(nowrap);
      padding-right: 0.1rem;
      font-size: 0.25rem;
      color: #1989d1;
    }
  }
}
</style>