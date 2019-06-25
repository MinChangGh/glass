<template>
  <div class="pay">
    <div class="money">
      <h3>支付金额</h3>
      <h1>￥200</h1>
    </div>
    <ul class="goods">
      <li><span>商品</span><span>太阳镜</span></li>
    </ul>
    <XButton class="btn"  type="primary" @click.native="pay">立即支付</XButton>
  </div>

</template>

<script>
  import { XButton } from 'vux'
  export default {
    data() {
      return {}
    },
    props: {},
    components: {
      XButton
    },
    created() {

    },
    mounted() {

    },
    methods: {
      pay () {
        this.$router.push({
          path:'/myOrder',
          query: {
            id:'10',
            status: 'all'
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
.pay {
  font-family: -apple-system-font,Helvetica Neue,sans-serif;
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 30px 15px;
  .money{
    text-align: center;
    h3{
      font-size: 18px;
      color: #999;
    }
    h1{
      margin-top: 10px;
      font-size: 32px;
    }
  }
  .goods{
    li{
      position: relative;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      color: #999;
      font-size: 15px;
      @include onepx();
      @include onepxtop();
      padding: 0 6px;
    }
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
