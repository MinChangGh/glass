<template>
  <div class="qrcode">
    <div class="bgWrapper">
      <div class="title">
        <p :class="{'active': active==1}" @click="active=1">分享店铺</p>
        <p :class="{'active': active==2}" @click="active=2">邀请开店</p>
      </div>
      <div class="centerwrapper" v-if="active==1">
        <img class="avatar" src="http://thirdwx.qlogo.cn/mmopen/caweicsS1HicP59I0hSYv7B3GOeNtJ6ZYPfctYGMX5yicFibZdGx7hFOIzzNHws0eYKKpQEeLD3ibTx2axKYYU41vTBsRXmE7LQOg/132" alt="">
        <p class="name">name</p>
        <p class="tips">扫一扫下面的二维码，关注我的小店吧</p>
        <p class="codeBox">
          <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
        </p>
      </div>
      <div class="centerwrapper" v-if="active==2">
        <p class="codeBox">
          <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
        </p>
      </div>
      <div @click="shadow=true" class="sharebtn">
        分享店铺
      </div>
    </div>
    <div class="shadow-wrapper" v-show="shadow">
      <img src="https://dev.unionglasses.com/ug/distribute/img/share-pop.png" >
      <p @click.stop="shadow=false">我知道啦 ！</p>
    </div>
  </div>
</template>

<script>
  import { Qrcode } from 'vux'
  export default {
    name: 'qrCode',
    data() {
      return {
        active:1,
        shadow:false
      }
    },
    props: {},
    components: {
      Qrcode
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {},
    computed: {},
    beforeDestroy() {
    
    }
  }

</script>

<style scoped lang="scss">
  .active{
    border-bottom: 1px solid #007AFF !important;
    color: #007AFF !important;
  }
  .qrcode {
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    text-align: center;
    padding-top: 24px;
    
    .bgWrapper {
      margin: 0 auto;
      width: 90%;
      padding: 20px 26px;
      background: #ffffff;
      border-radius: 6px;
      
      .title {
        display: flex;
        p {
          flex: 1;
          padding: 0;
          margin: 0;
          border: 0;
          border-bottom: 1px solid #EBEBEB;
          text-align: center;
          font-size: 16px;
          line-height: 50px;
          color: #666666;
        }
      }
      .centerwrapper{
        margin-top: 20px;
        .avatar{
          width: 82px;
          height: 82px;
          border-radius: 50%;
        }
        .name{
          margin: 5px auto;
        }
        .tips{
          font-size: 12px;
        }
        .codeBox{
          margin-top: 10px;
        }
      }
      .sharebtn{
        width: 100%;
        color: #008BFF;
        line-height: 42px;
        font-size: 14px;
        border-radius: 22px;
        border: 1px solid #008BFF;
        margin: 10px auto 0;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
      }
    }
    .shadow-wrapper{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.3);
      position: absolute;
      top:0;
      left: 0;
      img{
        width: 100%;
        height: auto;
      }
      p{
        color: #fff;
        margin: 0 auto;
        background: #f3b113;
        line-height: 36px;
        width: 125px;
        border-radius: 18px;
        border: 1px dashed  #fff;
      }
    }
  }
</style>
