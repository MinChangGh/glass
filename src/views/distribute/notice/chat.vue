<template>
  <div class="chat">
    <div class="chatlist">
      <div class="imgbox"><img src="https://dev.unionglasses.com/ug/distribute/img/ercode.png" alt=""></div>
      <div class="infobox">
        <p class="content">
          博士眼镜集团分销奖金上提2%
          让我们一起携手共创美好的明天
        </p>
        <p class="name">博士眼镜</p>
      </div>
    </div>
    <div class="bWrapper">
      <div></div>
      <input type="text">
      <div class="send">发送</div>
    </div>
    
  </div>
</template>

<script>
  import forminput from "@/components/formInput.vue"
  export default {
    data() {
      return {}
    },
    props: {},
    components: {
      forminput
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
  .chat{
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    padding: 10px 14px;
    .chatlist{
      width: 100%;
      display: flex;
    
      .imgbox{
        width: 39px;
        height: 39px;
        margin-top: 5px;
        border-radius: 3px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
      .infobox{
        width: 70%;
        padding: 10px 10px;
        background: #ffffff;
        border-radius: 4px;
        margin-left: 15px;
        position: relative;
        .content{
          line-height: 18px;
          color: #666;
        }
        .name{
          color: #999999;
          font-size: 13px;
        }
      }
      .infobox::before{
        content: '';
        position: absolute;
        height: 0px;
        width: 0;
        border-right: 10px solid #fff;
        left: -15px;
        top: 10px;
        border-left: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    }
    .bWrapper{
      height: 44px;
      position: fixed;
      width: 100%;
      background: #ffffff;
      display: flex;
      align-items: center;
      bottom: 0;
      left: 0;
      justify-content: space-around;
      input{
        border: 1px solid #d2d2d2 !important;
        margin: 0;
        height: 30px;
        width: 72%;
      }
      .send{
        background: linear-gradient(to bottom right,#FFF552,#FFB812) ;
        border-radius: 3px;
        color: #ffffff;
        text-align: center;
        line-height: 33px;
        width: 53px;
        font-size: 14px;
      }
    }
  }

</style>
