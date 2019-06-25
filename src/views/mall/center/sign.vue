<template>
  <div class="sign-container">
    <div class="sign-banner-section">
      <img src="~@/assets/mall/images/center/sign-header.png" alt>
      <span class="sign-num">
        我的积分:
        <em>{{erpScore}}</em>
      </span>
    </div>
    <div class="sign-info-section">
      <div class="sign-info-text">
        <div>
          <div class="curno">{{infData.conCnt}}</div>
          <div class="totno">/{{infData.totCnt}}</div>
        </div>
      </div>
      <div class="sign-info-subject">
        已经连续签到
        <span class="curno">{{infData.conCnt}}</span>
        天
      </div>
    </div>
    <div class="sign-stars-section">
      <ul class="sign-stars">
        <li v-for="(item,index) in stars" :key="index">
          <img v-if="item.sign" src="~@/assets/mall/images/center/sign-star.png" alt>
          <img v-else src="~@/assets/mall/images/center/no-sign-star.png" alt>
          <div class="sign-stars-text">{{item.date}}</div>
        </li>
      </ul>
    </div>
    <div class="sign-btn-section">
      <div class="sign-btn-line"></div>
      <img
        src="~@/assets/mall/images/center/btn-sign.png"
        alt
        :class="{ 'to-grey': infData.isSign }"
        @click="sign"
      >
    </div>
    <div class="sign-des-section">
      <div class="sign-des-title">签到规则</div>
      <div class="sign-des-detail">{{infData.des | nToBr}}</div>
    </div>

    <div v-transfer-dom>
      <x-dialog
        v-model="showSignDialog"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
      >
        <div class="dialog-container-ok">
          <div class="dialog-section">
            <div class="pop-get-point">
              <span>10</span>
            </div>
            <img src="~@/assets/mall/images/center/btn-sign-ok.png">
            <div class="pop-tip-msg">
              <div class="pop-cont">
                <div class="title">恭喜您，签到成功！</div>
                <div class="dlg-msg-text1">
                  今日签到获得
                  <span>
                    <em>5+0</em>
                    积分
                  </span>
                </div>
                <div class="dlg-msg-text2">
                  连续签到可获得更多
                  <span>累加积分</span>
                </div>
              </div>
            </div>
          </div>
          <div class="close-icon">
            <x-icon type="ios-close-outline" style="fill:#fff;" @click="showSignDialog = false"></x-icon>
          </div>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog
        v-model="showSignDialogErr"
        hide-on-blur
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
      >
        <div class="dialog-container-err">
          <div class="dialog-section">
            <img src="~@/assets/mall/images/center/btn-sign-fail.png">
            <div class="dlg-text">
              <span>签到失败啦！</span>
              <br>
              <span>请稍后再来签到</span>
            </div>
          </div>
          <div class="close-icon">
            <x-icon type="ios-close-outline" style="fill:#fff;" @click="showSignDialogErr = false"></x-icon>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from "vux";
import store from "@/store";
export default {
  data() {
    return {
      infData: {
        conCnt: 3,
        curtime: 1554710894,
        des: "1、签到送5积分 2、连续签到每次加1积分",
        isSign: 0,
        totCnt: 7
      },
      stars: [],
      showSignDialog: false,
      showSignDialogErr: false,
      erpScore: store.getters.userInfo.erpScore
    };
  },
  created() {
    this.initStars();
  },
  mounted() {
    setTimeout(() => {
      let curN = this.infData.conCnt - 1;
      if (this.infData.isSign === 1) {
        curN++;
      }
      let d = document.querySelector(".sign-stars-section");
      let cur = document.querySelector(
        ".sign-stars > li:nth-child(" + (curN + 1) + ")"
      );
      let left = cur.getBoundingClientRect().left;
      d.scrollLeft = left;
    }, 100);
  },
  methods: {
    initStars() {
      let curdate = new Date(this.infData.curtime * 1000);
      let bn = this.infData.conCnt;
      if (this.infData.isSign === 1) {
        bn--;
      }
      let iterdate = new Date((this.infData.curtime - bn * 86400) * 1000);
      let isSign = true;
      for (let i = 0; i < this.infData.totCnt; i++) {
        if (i > 0) {
          iterdate.setDate(iterdate.getDate() + 1);
        }
        if (i >= this.infData.conCnt) {
          isSign = false;
        }
        this.stars.push({
          sign: isSign,
          date: iterdate.getDate()
        });
      }
    },
    sign() {
      this.showSignDialog = true;
    }
  },
  components: {
    XDialog
  },
  directives: {
    TransferDom
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.sign-container {
  height: 100vh;
  background: linear-gradient(rgb(238, 47, 75), rgb(238, 54, 40));
  .sign-banner-section {
    img {
      width: 100%;
    }
    .sign-num {
      padding: 0.08rem 0.12rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      position: absolute;
      left: 0.12rem;
      top: 0.15rem;
      border-radius: 30px;
      em {
        font-style: normal;
      }
    }
  }
  .sign-info-section {
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-position: left top;
    background-image: url("~@/assets/mall/images/center/sign-line1.png");
    background-repeat: no-repeat;
    .sign-info-text {
      position: absolute;
      width: 0.44rem;
      height: 0.44rem;
      top: 0.03rem;
      left: 0.19rem;
      @include flexLayout();
      word-break: break-all;
      overflow: hidden;
      div {
        display: inline-block;
        font-size: 0.15rem;
        color: #fff;
        .curno {
          color: rgb(233, 161, 26);
          font-size: 0.15rem;
        }
        .divider-line1-text .totno {
          color: #ffffff;
          font-size: 0.12rem;
        }
      }
    }
    .sign-info-subject {
      text-align: center;
      position: relative;
      top: 0.4rem;
      color: #fff;
      font-size: 0.16rem;
    }
  }
  .sign-stars-section {
    height: 1.16rem;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    padding-top: 0.2rem;
    .sign-stars {
      display: inline-block;
      word-wrap: keep-all;
      white-space: nowrap;
      margin: 0;
      padding: 0 0 0 0.04rem;
      font-size: 0;
      li {
        position: relative;
        display: inline-block;
        padding: 0 0.04rem;
        font-size: 0.14rem;
        .sign-stars-text {
          position: absolute;
          width: 0.35rem;
          height: 0.35rem;
          top: 0.09rem;
          left: 0.21rem;
          font-size: 0.09rem;
          @include flexLayout();
        }
      }
    }
  }
  .sign-btn-section {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0.3rem 0;
    .sign-btn-line {
      position: absolute;
      top: 0.21rem;
      width: 100%;
      height: 0.05rem;
      background: url("~@/assets/mall/images/center/sign-line2.png") repeat-x;
      z-index: 1;
    }
  }
  .sign-des-section {
    font-size: 0.15rem;
    color: #fff;
    padding: 0 0.12rem 0.2rem 0.12rem;
  }
}
.to-grey {
  @include toGray;
}
.dialog-container-ok {
  color: #fff;
  height: 3.8rem;
  @include flexLayout(nowrap, column);
  .dialog-section {
    position: relative;
    width: 80%;
    background: #ffffff;
    text-align: center;
    border-radius: 0.1rem;
    padding-bottom: 0.5rem;
    .pop-get-point {
      position: absolute;
      left: 0;
      right: 0.18rem;
      top: 38%;
      text-align: center;
      span {
        display: inline-block;
        color: #de2727;
        font-size: 0.38rem;
        font-weight: bold;
      }
    }
    img {
      width: 100%;
    }
    .pop-tip-msg {
      position: relative;
      width: 100%;
      height: 0px;
      top: -0.4rem;
      left: 0;
      .pop-cont {
        font-size: 0.16rem;
        @include flexLayout(nowrap, column);
        .title {
          color: rgb(240, 28, 36);
        }
        .dlg-msg-text1,
        .dlg-msg-text2 {
          color: black;
          span {
            color: rgb(239, 149, 44);
          }
        }
      }
    }
    .dlg-text {
    }
  }
  .close-icon {
    svg {
      position: relative;
    }
  }
}
.dialog-container-err {
  color: #fff;
  height: 3rem;
  @include flexLayout(nowrap, column);
  .dialog-section {
    position: relative;
    width: 80%;
    background: #ffffff;
    text-align: center;
    border-radius: 0.1rem;
    padding-bottom: 0.5rem;
    .dlg-text {
      font-size: 0.16rem;
      color: black;
    }
  }
  .close-icon {
    svg {
      position: relative;
    }
  }
}
</style>
