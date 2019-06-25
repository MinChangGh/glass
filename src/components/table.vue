<template>
  <div>
    <table width="100%" class="table">
      <thead>
        <tr>
          <td>参数</td>
          <td>球面度数</td>
          <td>柱面度数</td>
          <td>轴向</td>
          <td>近瞳距</td>
          <td>远瞳距</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>r右眼</td>
          <td>{{r.c_rball}}</td>
          <td>{{r.c_rpole}}</td>
          <td>{{r.c_raxes}}</td>
          <td>{{r.c_rspace}}</td>
          <td>{{r.c_rspace2}}</td>
        </tr>
        <tr>
          <td>l左眼</td>
          <td>{{l.c_lball}}</td>
          <td>{{l.c_lpole}}</td>
          <td>{{l.c_laxes}}</td>
          <td>{{l.c_lspace}}</td>
          <td>{{l.c_lspace2}}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="isShow" width="100%" class="table">
      <thead>
        <tr>
          <td>参数</td>
          <td>棱镜</td>
          <td>基底</td>
          <td>原光度</td>
          <td>全矫光度</td>
          <td>曲率</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>r右眼</td>
          <td>{{r.c_rprism}}</td>
          <td>{{r.c_rfloor}}</td>
          <td>{{r.c_rlight}}</td>
          <td>{{r.c_rfoot}}</td>
          <td>{{r.c_rcurvature}}</td>
        </tr>
        <tr>
          <td>l左眼</td>
          <td>{{l.c_lprism}}</td>
          <td>{{l.c_lfloor}}</td>
          <td>{{l.c_llight}}</td>
          <td>{{l.c_lfoot}}</td>
          <td>{{l.c_lcurvature}}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="isShow" width="100%" class="table">
      <thead>
        <tr>
          <td>参数</td>
          <td>裸视力</td>
          <td>矫正视力</td>
          <td>ADD</td>
          <td>瞳高</td>
          <td>隐斜</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>r右眼</td>
          <td>{{r.c_rsign}}</td>
          <td>{{r.c_rcheck}}</td>
          <td>{{r.c_radd}}</td>
          <td>{{r.c_rhspace}}</td>
          <td>{{r.c_ryx}}</td>
        </tr>
        <tr>
          <td>l左眼</td>
          <td>{{l.c_lsign}}</td>
          <td>{{l.c_lcheck}}</td>
          <td>{{l.c_ladd}}</td>
          <td>{{l.c_lhspace}}</td>
          <td>{{l.c_lyx}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props:['tableInfo','isShow'],
  data(){
    return{
      r:{},
      l:{},
    }
  },
  mounted() {
    const {eye_r,eye_l} = this.tableInfo;
    this.r = eye_r;
    this.l = eye_l;
  },
}
</script>
<style lang="scss" scoped>
.table{
  background: #ffffff;
  font-size: 14px;
  margin-top: 5px;
}
thead,tbody{
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
th,td{
  padding: 12px 0;
  line-height: 1;
  text-align: center;
  border: 1px solid #c9c9c9;
  min-width: 49px;
}
</style>
