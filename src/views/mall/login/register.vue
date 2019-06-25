<template>
  <div class="container">
    <div class="login-table">
      <div class="login-table-style login-phone mui-input-row mall-input-row">
        <svg-icon icon-class="mobile"/>
        <input
          type="number"
          pattern="[0-9]*"
          v-model.trim="loginData.loginPhone"
          class="mui-input-clear mui-input"
          placeholder="请输入手机号"
          clearable
        >
      </div>
      <div class="login-table-style login-code">
        <svg-icon icon-class="key"/>
        <div class="mui-input-row mall-input-row">
          <input
            type="text"
            v-model.trim="loginData.loginCode"
            class="mui-input-clear mui-input"
            placeholder="请输入验证码"
            clearable
          >
        </div>
        <div :class="['msg-code',wait === 60 ? '' : 'msg-grey']" @click="getCode">{{codeMsg}}</div>
      </div>
    </div>
    <div class="register-btn-box" @click="register">
      <div class="register-btn">注册</div>
    </div>
  </div>
</template>

<script>
import { getMsgCode } from "@/api/common";
export default {
  data() {
    return {
      loginData: {
        loginPhone: "",
        loginCode: ""
      },
      codeMsg: "获取验证码",
      wait: 60
    };
  },
  created() {},
  methods: {
    getCode() {
      if (this.loginData.loginPhone === "") {
        this.$$.msgInf("手机号不能为空");
        return;
      }
      getMsgCode(this.loginData.loginPhone)
        .then(ret => {
          if (ret.data.code === 0) {
            this.waitTime();
          } else {
            this.$$.msgInf("发送验证码失败");
          }
        })
        .catch(ret => {
          return false;
        });
    },
    register() {
      if (this.loginData.loginPhone === "") {
        this.$$.msgInf("手机号不能为空");
        return;
      }
      if (this.loginData.loginCode === "") {
        this.$$.msgInf("验证码不能为空");
        return;
      }
      registerToErp(this.loginData)
        .then(ret => {
          if (ret.data.code === 0) {
            //绑定成功跳转
            //多个用户,跳转绑定列表
          } else {
            this.$$.msgInf("注册失败");
          }
        })
        .catch(ret => {
          return false;
        });
    },
    waitTime() {
      if (this.wait === 0) {
        this.codeMsg = "获取验证码";
        this.wait = 60;
      } else {
        this.wait--;
        this.codeMsg = this.wait + "秒重发";
        setTimeout(() => {
          this.waitTime();
        }, 1000);
      }
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.login-table {
  @include flexLayout(nowrap, column, space-around);
  padding: 0.25rem 0.1rem;
  padding-bottom: 0;
  .login-table-style {
    @include flexLayout(nowrap, row, space-around, center);
    width: 100%;
    margin: 0.1rem 0;
    border-radius: 0.1rem;
    background-color: #fff;
    border: 0;
    box-shadow: 0px 1px 0px 0px rgba(10, 8, 3, 0.1);
    font-size: 0.14rem;
    input {
      height: 0.45rem;
      margin-bottom: 0;
      border: 0;
      padding-left: 0;
      text-align: left;
      padding: 0 0.12rem 0 0;
      border-radius: 0.1rem;
    }
    .svg-icon {
      font-size: 0.2rem;
      margin: 0 0.05rem;
      color: #999;
    }
  }
  .login-code {
    @include flexLayout(nowrap, row);
    .msg-code {
      border-radius: 0 0.1rem 0.1rem 0;
      font-size: 0.14rem;
      border: rgb(25, 137, 209);
      background-color: rgb(25, 137, 209);
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: center;
      width: 1.3rem;
      color: #fff;
    }
    .mall-input-row {
      width: 100%;
      input {
        flex: 1;
      }
    }
    .msg-grey {
      background-color: grey;
    }
  }
}
.register-btn-box {
  margin: 0.2rem 0.1rem;
  color: #fff;
  font-size: 0.18rem;
  .register-btn {
    width: 100%;
    text-align: center;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 10px;
    border: rgb(25, 137, 209);
    background-color: rgb(25, 137, 209);
    box-shadow: 0px 2px 4px 0px rgba(10, 8, 3, 0.2);
  }
}
</style>