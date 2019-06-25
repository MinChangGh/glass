<template>
  <canvas id="qrcode"></canvas>
</template>

<script>
import QRCode from "qrcode";
export default {
  created:function(){},
  mounted: function() {
    let canvas = document.getElementById("qrcode");
    QRCode.toCanvas(canvas, this.text, this.opts, function(error) {
      if (error) {
        console.error(error);
      } else {
        console.log("success!");
      }
    });
  },
  computed: {},
  props: {
    text: {
      type: String,
      default: "http://www.baidu.com"
    },
    opts: {
      type: Object,
      default: function(){
        return {}
      }
    }
  }
};
</script>
<style scoped>

</style>
