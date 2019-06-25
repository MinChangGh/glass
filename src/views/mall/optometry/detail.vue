<template>
  <div class="mui-content">
    <ul class="header">
      <li><label>日期：</label><span>2017-11-23</span></li>
      <li><label>日期：</label><span>杭州市西湖区</span></li>
      <li><label>单号：</label><span>1511419061</span></li>
    </ul>
    <div class="table">
      <tableData :isShow="isShow" :tableInfo="tableInfo"></tableData>
      <div class="table-more" @click="moreShow">
        <div v-if="!isShow">
          <svg-icon icon-class="round_check" class="moreIcon"/>
          <span>查看更多</span>
        </div>
        <div v-else>
          <svg-icon icon-class="round_close" class="moreIcon"/>
          <span>点击收缩</span>
        </div>
      </div>
    </div>
    <div class="tips">
      <div class="tips-title">
        <img src="https://dev.unionglasses.com/ug/mall/assest/images/optometry/opoTip.png"/>
        <span class="tips-title-text">教你快速读懂验光单</span>
      </div>
      <ul class="tips-info">
        <li>1.R是表示右眼，L表示左眼。</li>
        <li>2.数据中的“+”和“-”分别表示远视和近视</li>
        <li>3.球面度数（S）表示近视或远视的度数</li>
        <li>4.柱面度数（C）表示散光度数</li>
        <li>5.轴位（A）表示散光轴的方向</li>
        <li>6.瞳距（PD)表示双眼瞳孔之间的距离</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import tableData from "@/components/table.vue";
  export default {
    data() {
      return {
        tableInfo:{
          "eye_r": {
            "c_rball": "",
            "c_rpole": "1.00",
            "c_raxes": "",
            "c_rspace": "2.00",
            "c_rspace2": "",
            "c_rprism": "",
            "c_rfloor": "",
            "c_rfoot": "",
            "c_rlight": "",
            "c_rcurvature": "",
            "c_rsign": "",
            "c_rcheck": "",
            "c_radd": "",
            "c_hspace": "",
            "c_ryx": "",
          },
          "eye_l": {
            "c_lball": "",
            "c_lpole": "1.00",
            "c_laxes": "",
            "c_lspace": "2.00",
            "c_lspace2": "",
            "c_lprism": "",
            "c_lfloor": "",
            "c_rfoot": "",
            "c_light": "",
            "c_lcurvature": "",
            "c_lsign": "",
            "c_lcheck": "",
            "c_ladd": "",
            "c_hspace": "",
            "c_lyx": "",
          },
        },
        isShow:false,
      };
    },
    mounted() {

    },
    methods: {
      moreShow(){
        this.isShow = !this.isShow;
      }
    },
    components: {
      tableData,
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/mixin.scss";
  .mui-content{
    height: 100vh;
    padding: 20px 12px;
  }
  .moreIcon{
    color: #8f8f94;
    font-size: 16px;
  }
  .header{
    font-size: 14px;
    li{
      label{
        font-weight: bold;
      }
    }
  }
  .table{
    &-more{
      color: #1e70a4;
      font-size: 14px;
      text-align: center;
      margin: 10px 0;
    }
  }
  .tips{
    &-title{
      color: #1f1f1f;
      margin: 0;
      padding-bottom: 4px;
      font-weight: normal;
      font-size: 16px;
      position: relative;
      &-text{
        position: absolute;
        top: 10px;
        left: 65px;
      }
    }
    &-info{
      font-size: 14px;
      li{
        color: #464545;
        padding: 4px 0 0 0;
        margin: 0;
        line-height: 26px;
      }
    }
  }
</style>
