<template>
  <div class="container">
    <div class="bind-top-info">
      <div class="bind-top-info-line1">
        根据手机号
        <span class="bind-top-info-phone">186-5831-8156</span>
        匹配到以下几个账号,
      </div>
      <div class="bind-top-info-line2">
        请
        <span class="bind-top-info-waring">慎重选择</span>
        曾经创建过的账号进行绑定或
        <span class="bind-top-info-waring">不绑定</span>
      </div>
    </div>
    <div class="bind-data-list">
      <div class="bind-data-item">
        <div></div>
        <div>姓名</div>
        <div>性别</div>
        <div>生日</div>
      </div>
      <div
        :class="['bind-data-item',item.pick ? 'pick' : '']"
        v-for="(item,index) in bindList"
        :key="index"
        @click="pickData(index)"
      >
        <div v-if="item.pick">
          <svg-icon icon-class="round_check_fill"/>
        </div>
        <div v-else>
          <svg-icon icon-class="round"/>
        </div>
        <div>{{item.name}}</div>
        <div>{{item.sex}}</div>
        <div>{{item.birthday}}</div>
      </div>
    </div>
    <div class="bind-btn-box">
      <div class="bind-btn" @click="binding">绑定</div>
      <div class="bind-btn" @click="noBinding">不绑定</div>
    </div>
  </div>
</template>

<script>
import { getMsgCode } from "@/api/common";
export default {
  data() {
    return {
      bindList: [
        {
          id: "0002",
          name: "peng",
          sex: "男",
          birthday: "1987-1-8",
          pick: true
        },
        {
          id: "0003",
          name: "peng2",
          sex: "男",
          birthday: "1987-1-8",
          pick: false
        }
      ]
    };
  },
  created() {},
  methods: {
    pickData(target) {
      this.bindList.every(item => {
        item.pick = false;
        return true;
      });
      this.bindList.some((item, index) => {
        if (index === target) {
          item.pick = true;
          return true;
        }
      });
    },
    register() {
      this.$router.push("/register");
    },
    binding() {},
    noBinding() {
      this.$router.push("/home");
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.bind-top-info {
  font-size: 0.16rem;
  text-align: center;
  padding: 0 0.12rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  .bind-top-info-line2 {
    .bind-top-info-waring {
      color: red;
    }
  }
}
.bind-data-list {
  background-color: #fff;
  font-size: 0.14rem;
  @include flexLayout(nowrap, column, space-between, center);
  &:nth-child(1) {
    height: 0.4rem;
  }
  .bind-data-item {
    width: 100%;
    height: 0.47rem;
    @include flexLayout(nowrap, row, space-around, center);
    div {
      text-align: center;
      flex: 0 1 auto;
      svg {
        font-size: 0.17rem;
        color: #aaa;
      }
    }
  }
}
.bind-btn-box {
  margin: 0.2rem 0.1rem;
  color: #fff;
  font-size: 0.18rem;
  @include flexLayout(nowrap, row, space-around, center);
  .bind-btn {
    width: 100%;
    text-align: center;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 10px;
    border: rgb(25, 137, 209);
    background-color: rgb(25, 137, 209);
    box-shadow: 0px 2px 4px 0px rgba(10, 8, 3, 0.2);
    margin: 0 0.08rem;
  }
}
.pick {
  color: rgb(25, 137, 209);
  svg {
    color: rgb(25, 137, 209) !important;
  }
}
</style>