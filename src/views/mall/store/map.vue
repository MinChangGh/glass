<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import MapLoader from "@/lib/custom/map.js";
export default {
  data() {
    return {
      map: null
    };
  },
  created() {},
  mounted() {
    let that = this;
    MapLoader("qq").then(
      // AMap => {
      //   console.log("地图加载成功");
      //   that.map = new AMap.Map("container", {
      //     resizeEnable: true, //是否监控地图容器尺寸变化
      //     zoom: 11, //初始化地图层级
      //     center: [116.397428, 39.90923] //初始化地图中心点
      //   });
      // },
      qq => {
        var myLatlng = new qq.maps.LatLng(28.619101, 121.400862);
        var myOptions = {
          zoom: 14,
          center: myLatlng,
          mapTypeId: qq.maps.MapTypeId.ROADMAP
        };
        that.map = new qq.maps.Map(
          document.getElementById("container"),
          myOptions
        );
        console.log(qq.maps.ALIGN);
        var scaleControl = new qq.maps.ScaleControl({
          align: qq.maps.ALIGN.BOTTOM_LEFT,
          margin: qq.maps.Size(0, 0),
          map: that.map
        });
        var center = new qq.maps.LatLng(28.619101, 121.400862);
        // 创建标记
        var marker = new qq.maps.Marker({
          // 标记的位置
          position: center,
          map: that.map
        });
        // 提示窗
        var info = new qq.maps.InfoWindow({
          map: that.map
        });
        //获取标记的点击事件
        qq.maps.event.addListener(marker, "click", function() {
          info.open();
          info.setContent(
            '<div style="text-align:center;white-space:nowrap;' +
              'margin:10px;">单击标记</div>'
          );
          info.setPosition(center);
        });
        //给地图添加点击事件
        //并获取鼠标点击的经纬度
        // qq.maps.event.addListener(that.map, "click", function(event) {
        //   this.longitude = event.latLng.getLat();
        //   this.latitude = event.latLng.getLng();
        //   alert("经度:" + this.longitude + "," + "纬度:" + this.latitude);
        // });
      },
      e => {
        console.log("地图加载失败", e);
      }
    );
    // this.renderFootCss();
  },
  methods: {
    // renderFootCss() {
    //   if (this.$route.meta.footTabCss) {
    //     document.getElementById("app-main-container").style.paddingBottom = "0";
    //   }
    // }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
#container {
  width: 100vw;
  height: 100vh;
  padding: 0 !important;
}
</style>
