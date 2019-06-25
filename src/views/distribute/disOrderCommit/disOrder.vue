<template>
  <div class="disorder" >
    <div class="post-method">
      <div class="title">收货方式</div>
      <div class="checkbox"><span>快递</span></div>
    </div>
    <router-link to="/distribute/addressList" tag="div" class="address-wrapper" >
      <div class="linebox">
        <div class="line1">
          <span>收货人：{{address[adNum].name}}</span>
          <span>{{address[adNum].phone}}</span></div>
        <div class="line2">
          <svg-icon  icon-class="location"/>
          收货地址：
          <b class="isdeflut"></b>
          <div class="address">{{address[adNum].city|cityFormat}}{{address[adNum].detail_ad}}</div>
        </div>
      </div>
      <svg-icon class="icon" icon-class="rightArrow"/>
    </router-link>
    <ul class="list" ref="listWrapper" >
      <div>
        <li class="item-wrapper" v-for="items in goodslist">
          <img class="goodimg" :src="items.img">
          <div class="info">
            <p class="names">{{items.name}}</p>
            <p class=" attribute">{{items.color}}</p>
            <p class="price"><span>￥{{items.price}}</span><b>x{{items.num}}</b></p>
          </div>
        </li>
        <div class="msg">买家留言:<input type="text"></div>
        <p class="calculate">
          <span>共{{totalNum}}件商品</span>&nbsp;
          <span>小计：</span>&nbsp;
          <span class="price">￥:{{totalPrice}}</span>
        </p>
      </div>
    </ul>
    <div class="bottom">
      <div class="left">
        <p>实际付款：0.00</p>
        <p>（含运费：￥0.00）</p>
      </div>
      <div class="commit" @click="commit">提交订单</div>
    </div>
  </div>

</template>

<script>
  import {TransferDom, Popup, XButton, Cell, Group, ChinaAddressV4Data, Value2nameFilter as value2name} from 'vux'
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "disOrder",
    directives: {
      TransferDom
    },
    data() {
      return {
        address: [
          {
            id: 0,
            city: ['430000', '430400', '430407'],
            detail_ad: '上海市',
            name: '刘邦',
            phone: '15698989898',
            isDefault: true
          },
          {
            id: 1,
            city: ["350000", "350100", "350102"],
            detail_ad: '黄龙体育',
            name: '小何',
            phone: '15689897898',
            isDefault: false
          }
        ],
        invocieData: {},
        des: '',
        adNum: 0,
        goodslist: [
          {
            img: 'https://dev.unionglasses.com//uploads/mall/goods/2018-01-12/5a58261ed452a.jpg',
            name: '男士镜架fdsf64654f65sa4d6f',
            price: '150.00',
            color: '蓝色',
            num: 1
          },
          {
            img: 'https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a58257f3e2f6.png',
            name: 'LOHO防蓝光辐射1.600非球面镜片 现有片 1116072700006',
            price: '200.00',
            color: '紫色',
            num: 3
          },
          {
            img: 'https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a58257f3e2f6.png',
            name: 'LOHO防蓝光辐射1.600非球面镜片 现有片 1116072700006',
            price: '200.00',
            color: '紫色',
            num: 3
          },
          {
            img: 'https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a58257f3e2f6.png',
            name: 'LOHO防蓝光辐射1.600非球面镜片 现有片 1116072700006',
            price: '200.00',
            color: '紫色',
            num: 3
          }
        ]
      }
    },
    components: {
      Popup,
      Cell,
      Group,
      XButton

    },
    created() {

    },
    mounted() {
      this.$nextTick(()=>{
        this.scroll = new Bscroll(this.$refs.listWrapper,{
          click:true
        })
      })

    },
    activated() {

    },
    beforeRouteLeave(to, from, next) {
      if (to.path =='/distribute/disDetail') {
        this.$store.dispatch("delCachedViews", this.$route)
      }
      next()
    },
    methods: {
      commit() {
        this.$router.push('/order/pay')
      }
    },
    watch: {},
    computed: {
      totalNum() {
        let replace
        let sumNum = this.goodslist.reduce(function (total, cur) {
          if (isNaN(parseInt(cur.num))) {
            replace = 0
          } else {
            replace = cur.num
          }
          return total + parseInt(replace);
        }, 0)
        return sumNum
      },
      totalPrice() {
        let replace
        let sumPrice = this.goodslist.reduce(function (total, cur) {
          if (isNaN(parseInt(cur.num))) {
            replace = 0
          } else {
            replace = cur.num
          }
          return total + cur.price * replace
        }, 0)
        return sumPrice
      },
    },
    filters: {
      cityFormat(value) {
        return value2name(value, ChinaAddressV4Data)
      }
    }

  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  .disorder {
    width: 100%;
    height: 100%;
    color: #666;
    font-size: 14px;
    background: #F6F6F6;
    .post-method {
      padding: 0 14px;
      width: 100%;
      display: flex;
      line-height: 40px;
      text-align: center;
      position: relative;
      background: #ffffff;
      @include onepx(0px,0px);
      .title {
        flex: 2;
      }
      .checkbox {
        flex: 8;
        span{
          display: inline-block;
          padding: 0 10px;
          line-height: 26px;
          border: 1px solid #00acff;
          color: #00acff;
          border-radius: 13px;
        }
      }
    }
    .address-wrapper {
      padding: 10px 14px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background:#ffffff url("../../../assets/distribute/images/center/adrline.png") bottom left no-repeat;
      .icon {
        margin-left: 3%;
        line-height: 22px;
        color: #666;
      }
      .linebox{
        width: 90%;
        line-height: 30px;
        .line1 {
          display: flex;
          justify-content: space-between;
        }
        .line2 {
          position: relative;
          display: flex;
          height: 22px;
          align-items: center;

          .address {
            display: inline-block;
            width: 65%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

        }
      }
    }
    .list{
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      position: absolute;
      top: 112px;
      bottom: 50px;
      .item-wrapper {
        display: flex;
        width: 100%;
        padding: 11px 15px;
        position: relative;

        .goodimg {
          width: auto;
          display: block;
          height: 87px;
          flex: 0 0 auto;
        }
        .info {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1 ;
          .names {
            color: #333;
            overflow: hidden;
            word-wrap: break-word;
            line-height: 20px;
            text-overflow: ellipsis;
          }
          .price {
            display: flex;
            justify-content: space-between;
            span{
              color: #ff4081;
              font-size: 15px;
            }
            b{
              font-weight: 400;
              color: #666666;
              font-size: 12px;
            }
          }
        }
      }
      .msg{
        width: 100%;
        display: flex;
        line-height: 40px;
        padding: 0 14px;
        @include onepx(10px,10px);
        position: relative;
        input{
          flex: 1;
          margin: 0;
          padding: 0;
        }
      }
      .calculate{
        width: 100%;
        line-height: 40px;
        text-align: right;
        padding: 0 14px;
        .price{
          color:#FF4081;
          font-size: 16px;
        }
      }
    }
    .bottom{
      position: fixed;
      height: 50px;
      width: 100%;
      display: flex;
      bottom: 0;
      background: #ffffff;
      text-align: center;
      .left{
        line-height: 25px;
        flex: 1 0 auto;
        p{
          color:#FF4081;
        }
      }
      .commit {
        line-height: 50px;
        color: #ffffff;
        width: 123px;
        background: #FF4081;
      }
    }
  }
</style>
