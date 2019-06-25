<template>
  <canvas id="barcode"></canvas>
</template>

<script>
import JsBarcode from "jsbarcode";
export default {
  mounted: function() {
    JsBarcode("#barcode", this.text, this.opts);
  },
  computed: {},
  props: {
    text: {
      type: String,
      default: "http://www.baidu.com"
    },
    opts: {
      type: Object,
      default: function() {
        return {
          // format: "pharmacode",
          // lineColor: "#0aa",
          // width: 4,
          // height: 40,
          // displayValue: false
        };
      }
    }
  }
};
</script>
<style scoped>
</style>
