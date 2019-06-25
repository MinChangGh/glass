<template>
  <div class="mui-content">
    <div class="member-title">品牌会员卡</div>
    <div class="qrcode-container">
      <qrcode :opts="qrcodeOpts"></qrcode>
    </div>
    <div class="barcode-container">
      <brcode :opts="barcodeOpts"></brcode>
    </div>
  </div>
</template>

<script>
import qrcode from "@/components/mall/qrcode.vue";
import brcode from "@/components/mall/brcode.vue";
export default {
  data() {
    return {
      qrcodeOpts: {
        quality: 1,
        margin: 0,
        width: 160,
        height: 160
      },
      barcodeOpts: {
        width: 1.2,
        height: 100,
        text: " ",
        // fontOptions: "bold",
        // font: "fantasy",
        // fontSize: 40,
        // textAlign: "left",
        // textPosition: "top",
        textMargin: 0,
        // background: "#ccffff",
        // lineColor: "#990000",
        margin: 0
      }
    };
  },
  created() {},
  methods: {},
  components: {
    qrcode,
    brcode
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.member-title {
  background-color: #efeff4;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.14rem;
  padding-left: 0.2rem;
}
.qrcode-container {
  @include flexLayout(nowarp, column);
  height: 2.34rem;
  background-color: #fff;
}
.barcode-container {
  @include flexLayout(nowarp, column);
  height: 1.3rem;
  background-color: #fff;
}
</style>
