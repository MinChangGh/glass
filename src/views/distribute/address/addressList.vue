<template>
  <ul class="addressList">
    <li >
      <div class="left" @click="setAD()">
        <p class="p1"><span>lyb</span><span>18656566412</span></p>
        <p class="p2"><span>默认</span>上海市黄埔区</p>
      </div>
      <div @click="toEdit('0')">
        <svg-icon class="icon" icon-class="right" ></svg-icon>
      </div>
      
    </li>
    <div class="add" @click="toEdit('1')">添加新地址</div>
  </ul>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {},
    components: {},
    created() {

    },
    mounted() {

    },
    methods: {
      setAD () {
        this.$router.go(-1)
      },
      toEdit (ad) {
        this.$router.push({
          path:'/distribute/addEdit',
          query:{
            address:ad
          }
        })
      }
    },
    computed: {},
    beforeDestroy() {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  .addressList{
    width: 100%;
    li{
      display: flex;
      align-items: center;
      padding: 10px 14px;
      position: relative;
      @include onepx(0px,0px);
      .left{
        width: 90%;
        line-height: 30px;
        .p1{
          display: flex;
          justify-content: space-between;
        }
        .p2{
          span{
            padding: 2px 5px;
            text-align: center;
            border: 1px solid #FF4081;
            color: #FF4081;
            border-radius: 2px;
            font-size: 12px;
            margin-right: 4px;
          }
        }
      }
      .icon{
        color: #999999;
        margin-left: 10px;
      }
    }
    .add{
      width: 70%;
      line-height: 44px;
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      border-radius: 22px;
      background: linear-gradient(to right,#67abf1,#067cf7);
      position: fixed;
      bottom: 30px;
      left: 50%;
      margin-left: -35%;
    }
  }

</style>
