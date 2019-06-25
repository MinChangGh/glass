<template>
  <div class="container">
    <div class="head-tab">
      <div
        :class="['head-tab-item', curTab == 'unused' ?'pick-tab' : '']"
        @tap="getDataByTab('unused')"
      >未使用</div>
      <div
        :class="['head-tab-item', curTab == 'used' ? 'pick-tab': '']"
        @tap="getDataByTab('used')"
      >已使用</div>
      <div
        :class="['head-tab-item', curTab == 'expired'? 'pick-tab'  : '']"
        @tap="getDataByTab('expired')"
      >已过期</div>
    </div>
    <div class="coupon-list-container">
      <div v-if="couponList.length>0" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <couponlist :list="couponList" :param="param" @func="pickCoupon">
            <template v-slot:one="{oneData}">
              <div class="coupon-info">
                <div class="coupon-amount">
                  <span>¥</span>
                  <em>5</em>
                </div>
                <div class="coupon-desc">
                  <div class="coupon-title">优惠券 满200元减少15元</div>
                  <div class="coupon-expired">2017-10-31至2017-11-5</div>
                </div>
              </div>
              <div :class="['coupon-btn',curTab !== 'expired' ? 'pick':'']">
                {{oneData.pick}}
                <span>{{curTab !== 'expired'? '立即使用' : '已过期'}}</span>
              </div>
            </template>
          </couponlist>
        </div>
      </div>
      <div v-else>
        <empty :emptyDes="'您还没有相关的优惠券'" :emptySrc="emptycoupon"></empty>
      </div>
    </div>
  </div>
</template>

<script>
import empty from "@/components/emptySearch.vue";
import couponlist from "@/components/dataList.vue";
import emptycoupon from "@/assets/mall/images/coupon/empty-coupon.png";
export default {
  data() {
    return {
      pickId: 0,
      curTab: "unused",
      param: { cond: "", css: "expired" },
      emptycoupon,
      couponList: [
        {
          id: 1,
          img_url: "",
          pick: ""
        },
        {
          id: 2,
          img_url: "",
          pick: ""
        },
        {
          id: 3,
          img_url: "",
          pick: ""
        }
      ]
    };
  },
  created() {
    this.getCouponData(this.curTab);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getDataByTab(tab) {
      this.curTab = tab;
      this.pickId = 0;
      if (this.curTab == "expired") {
        this.param.cond = true;
      } else {
        this.param.cond = false;
      }
      //this.couponList = this.getCouponData(this.curTab);
    },
    getCouponData(tab) {},
    pickCoupon(item) {
      if (this.curTab == "expired") {
        this.pickId = 0;
      } else {
        this.pickId = item.id;
      }
    }
  },
  components: {
    empty,
    couponlist
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.head-tab {
  @include flexLayout(nowrap, row, space-around);
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  font-weight: 400;
  background-color: #fff;
  z-index: 100;
  .head-tab-item {
    height: 0.4rem;
    flex: 1 1 auto;
    text-align: center;
    border-bottom: 2px solid transparent;
  }
}
.pick-tab {
  color: rgb(253, 39, 13);
  border-bottom: 2px solid rgb(253, 39, 13) !important;
  transition: all 0.2s ease;
}
.coupon-list-container {
  .mui-scroll-wrapper {
    top: 0.4rem;
    background-color: #fff;
    /deep/ .data-list {
      @include flexLayout(wrap, row, space-between);
      margin-bottom: 0.05rem;
      padding: 0.05rem 0;
      color: #fff;
      .expired {
        background-color: #dbdbdb !important;
      }
      .data-item {
        width: 100%;
        background-color: rgb(243, 144, 27);
        box-shadow: none;
        border: none;
        margin: 0.05rem 0;
        margin-top: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        min-height: 1.09rem;
        overflow: hidden;
        position: relative;
        &::before,
        &::after {
          content: "";
          height: 10px;
          position: absolute;
          left: 0;
          right: 0;
          display: block;
          z-index: 9;
          background-image: linear-gradient(
              -45deg,
              #fff 25%,
              transparent 25%,
              transparent
            ),
            linear-gradient(-135deg, #fff 25%, transparent 25%, transparent),
            linear-gradient(-45deg, transparent 75%, #fff 75%),
            linear-gradient(-135deg, transparent 75%, #fff 75%);
          background-size: 8px 16px;
          background-repeat: repeat-x, repeat-x;
        }
        &::after {
          top: 0;
        }
        &::before {
          bottom: 0;
          transform: rotate(180deg);
        }
        img {
          height: 0;
          display: none;
        }
        @include flexLayout(nowrap, row, space-between);
        .coupon-info {
          flex: 1 1 auto;
          padding-left: 0.2rem;
          @include flexLayout(nowrap, row, flex-start);
          .coupon-amount {
            margin-right: 0.05rem;
            width: 0.3rem;
            font-size: 0.14rem;
            em {
              font-size: 0.29rem;
              font-style: normal;
            }
          }
          .coupon-desc {
            @include flexLayout(nowrap, column, space-between, flex-start);
            font-size: 0.13rem;
          }
        }
        .coupon-btn {
          width: 26%;
          height: 1.07rem;
          text-align: center;
          line-height: 1.07rem;
          background-color: #e8e8e7;
          color: rgb(152, 152, 152);
          span {
            font-size: 0.14rem;
          }
        }
        .pick {
          color: rgb(25, 137, 209) !important;
        }
      }
    }
  }
}
</style>