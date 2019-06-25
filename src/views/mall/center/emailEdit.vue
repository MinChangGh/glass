<template>
  <div class="mui-content">
    <div class="mui-card">
      <div class="mui-card-content">
        <input type="text" placeholder="请输入您的邮箱" v-model="email">
      </div>
    </div>
    <div class="btn-container" @tap="emailEdit">
      <div class="mui-btn-primary btn-confirm">确认</div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      email: store.getters.userInfo.email
    };
  },
  created() {},
  methods: {
    emailEdit: function() {
      this.$store
        .dispatch("SetUserEmail", this.email)
        .then(() => {
          this.$router.push("/center/userinfo");
        })
        .catch(() => {
          this.$$.msgInf("更新失败");
        });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
  height: 100vh;
  .mui-card {
    margin: 0;
    height: 0.48rem;
    border-bottom: 1px solid #e5e5e5;
    .mui-card-content {
      background-color: transparent;
      padding: 0.15rem 0.12rem;
      input {
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
      }
    }
  }
  .btn-container {
    padding: 0 0.15rem;
    margin-top: 0.3rem;
    .btn-confirm {
      height: 0.48rem;
      font-size: 0.18rem;
      border-radius: 0.1rem;
      border: none;
      background-color: #000;
      box-shadow: 0px 2px 4px 0px rgba(10, 8, 3, 0.2);
      text-align: center;
      line-height: 0.48rem;
    }
  }
}
</style>