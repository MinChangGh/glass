<template>
  <div class="scroll-wrapper" ref="bswrapper">
    <!--   各个分店地址   -->
    <div class="order">
      <shopTmp v-if="shopShow" @closeshop="closed"></shopTmp>
      <!--    收货方式-->
      <div class="post-method">
        <div class="title">收货方式</div>
        <div @click="setPostStyle(1)" class="checkbox">快递
          <svg-icon v-show="post==1" class="icon" icon-class="round_check"/>
        </div>
        <div @click="setPostStyle(2)" class="checkbox">到店自取
          <svg-icon v-show="post==2" class="icon" icon-class="round_check"/>
        </div>
        <div @click="setPostStyle(3)" class="checkbox">到店试戴
          <svg-icon v-show="post==3" class="icon" icon-class="round_check"/>
        </div>
      </div>
      <!-- 地址-->
      <div class="address-wrapper" v-if='post==1' @click="popshow">
        <!--        <adlist :adlist="adlist"></adlist>-->
        <div class="line1"><span>收货人：{{adlist[adNum].name}}</span><b
          style="font-weight: normal">{{adlist[adNum].phone}}</b></div>
        <div class="line2">
          配送至: <b class="isdeflut"></b>
          <div class="address">{{adlist[adNum].city|cityFormat}}{{adlist[adNum].detail_ad}}</div>
          <svg-icon class="icon" icon-class="rightArrow"/>
        </div>
      </div>
      <div v-else class="address-wrapper" @click="popshow">
        <div class="line1"><span>收货人：{{receiveInfo[0].name}}</span><b
          style="font-weight: normal">{{receiveInfo[0].tel}}</b>
        </div>
        <div class="line1">
          店名：杭州汉高一分店
        </div>
        <div class="line1">
          地址：杭州市西湖区
        </div>
      </div>
      <!-- popvux 收货地址-->
      <div v-transfer-dom>
        <popup v-model="mypopshow">
          <div v-if="post==1&&!couponShow">
            <adlist style="height: 400px" :adlist="adlist" :needColor="true" v-on:changeAd="changeAd"></adlist>
            <redbtn @click.native="toAdManage">管理收货地址</redbtn>
          </div>
          <div v-if="(post==2||post==3)&&!couponShow">
            <ul class="peple">
              <li v-for="(item,index) in receiveInfo" :class="pepleAct==index?'pepleAct':''" @click="pepleAct=index">
                <span>{{item.name}}</span><b>{{item.tel}}</b></li>
            </ul>
            <redbtn @click.native="mypopshow=false">确认</redbtn>
          </div>
          <div v-if="couponShow">
            <div class="coupontit">优惠券</div>
            <coupon :list="couponlist" :index="selectCouIndex" ref="coupon" @received="received"></coupon>
            <redbtn @click.native="Ctrigger">完成</redbtn>
          </div>
        </popup>

      </div>
      <!-- 地址选择器  -->
      <group style="width: 0;height: 0">
        <popup-picker @on-change="pikerChange" @on-hide="pikerHide" :show="pikershow" :data="list1"></popup-picker>
      </group>
      <!--    商品-->
      <listcard :goodlist="goodslist" v-on:counter="counter" @count2="calculate">

      </listcard>
      <!--    备注-->
      <div class="des">
        <group>
          <cell title="备注"
                is-link
                :arrow-direction="showContent ? 'up' : 'down'"
                @click.native="showContent = !showContent"
                :border-intent="false"
                :class="showContent?'active':''">
          </cell>
          <div class="slide" :class="showContent?'animate':''">
            <textarea v-rclass v-model="des" placeholder="请输入备注"></textarea>
            <div class="confirm" @click="confirm"><p class="sure">确定</p>
              <p class="cancel" @click="showContent = !showContent">取消</p></div>
          </div>
        </group>
      </div>
      <!--    发票-->
      <invoice v-on:invoice="invociehandler"></invoice>
      <selfcell @click.native="coupon" class="mycell" title="通用优惠券">
        <div class="couponTip">{{couponTip}}</div>
      </selfcell>
      <!--    post order-->
      <div class="bottom">
        <div class="countNum">共计：{{totalNum}}件</div>
        <div v-if="post==1" class="countPrice">
          <div class="line1"><span>总额 ：</span>{{totalPrice}}元</div>
          <div>含运费：</div>
        </div>
        <div v-if="post==2" class="countPrice2">
          <div class="line1"><span>总额 ：</span>{{totalPrice}}元</div>
        </div>
        <div v-if="post==3" class="countPrice2">
          <div class="line1"><span>保证金 ：</span>{{totalPrice}}元</div>
        </div>
        <div class="commit" @click="commit">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    PopupPicker,
    TransferDom,
    Popup,
    XButton,
    Cell,
    Group,
    ChinaAddressV4Data,
    Value2nameFilter as value2name
  } from 'vux'
  import selfcell from '@/components/cell'
  import {mapState} from 'vuex'
  import listcard from './listcard'
  import invoice from './invoice'
  import adlist from './ad_component'
  import redbtn from '@/components/redbtn'
  import coupon from '@/components/mall/coupon'
  import shopTmp from './shopTemp'

  export default {
    name: "orderCommit",
    directives: {
      TransferDom
    },
    data() {
      return {
        close: false,
        totalPrice: 0,
        singlecouponShow: false,  // 单商品券显示
        couponShow: false,//优惠券显示
        couponVal: Number, // 手动选中优惠券数组下标
        preSumPrice: Number, // 单纯计价，没有优惠券和快递费用
        selectCouIndex: -1, //自动选中优惠券的  数组下标
        couponnum: 1, // 是否手动选择优惠券，若没有则自动选择
        shopShow: false, // 门店列表显示
        pikershow: false, // 门店选择显示控制
        list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
        pepleAct: 0, // 非快递 弹出框 选中效果控制
        post: 1, // 快递方式
        copyPost: 1, // 快递方式副本
        couponlist: Array,
        receiveInfo: [
          {
            name: '89',
            tel: '4898',
            ad: 'hangzhou'
          },
          {
            name: '123hhio',
            tel: '4849813298',
            ad: 'hangzhou'
          }
        ],
        address2: [{
          id: 0,
          city: ['430000', '430400', '430407'],
          detail_ad: '上海市',
          name: '刘邦',
          phone: '15698989898',
          isDefault: true
        }],
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
        showContent: false, // 留言和发票下拉控制
        mypopshow: false, // popup 显示
        adNum: 0, // 选中的地址下标
        couponTip: '', // 优惠券选中说明
        testtips: ['', ''],
        test: [
          [
            {
              id: 1,
              up: 300,
              reduce: 20,
              use: true,
              hasUse: false
            },
            {
              id: 2,
              up: 400,
              reduce: 50,
              use: false,
              hasUse: false
            }
          ], [
            {
              id: 1,
              up: 200,
              reduce: 20,
              use: true,
              hasUse: false
            },
            {
              id: 2,
              up: 400,
              reduce: 100,
              use: false,
              hasUse: false
            }
          ]],
        goodslist: []
      }
    },
    components: {
      PopupPicker,
      listcard,
      invoice,
      Popup,
      Cell,
      Group,
      XButton,
      adlist,
      redbtn,
      selfcell,
      coupon,
      shopTmp
    },
    created() {
      setTimeout(()=>{
        this.goodslist=[
          {
            img: 'https://dev.unionglasses.com//uploads/mall/goods/2018-01-12/5a58261ed452a.jpg',
            name: '男士镜架',
            price: '150.00',
            color: '蓝色',
            num: 5
          },
          {
            img: 'https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a58257f3e2f6.png',
            name: 'LOHO防蓝光辐射1.600非球面镜片 现有片 1116072700006',
            price: '200.00',
            color: '紫色',
            num: 1
          }
        ]
        this.couponlist=[
          {
            id: 1,
            up: 350,
            reduce: 20,
            use: true
          },
          {
            id: 2,
            up: 400,
            reduce: 50,
            use: false
          }
        ]
        this.$store.commit('init', this.address)
        this.$store.commit('initSingleCoupon', this.test)
        this.$store.commit('initCouponTip', this.testtips)
        this.setCoupon()
        this.calculate()
      },1000)

    },
    mounted() {

    },
    activated() {

    },
    beforeRouteLeave(to, from, next) {
      if (to.path == '/detail') {
        this.$store.dispatch("delCachedViews", this.$route)
      }
      next()
    },
    methods: {
      setPostStyle(num) {
        this.couponShow = false
        // 快递方式
        if (num == 1) {
          this.post = 1
          this.mypopshow = true
        } else {
          this.pikershow = true
          this.copyPost = num
        }
      },
      stopTouch(e) {
        e.preventDefault()
      },
      closed() {
        // 禁止滑动 移除
        document.body.removeEventListener('touchmove', this.stopTouch, {capture: true})
        this.shopShow = false
      },
      coupon() {
        // 通用优惠券
        this.mypopshow = true
        this.couponShow = true
      },
      singleCoupon(index) {
        // 单商品优惠券
        this.post = -1
        this.couponShow = false
        this.singlecouponShow = true
        this.mypopshow = true
      },
      freightCount() {
        // 计算运费
        let freight
        var item = sltData.goods[gid]
        if (item.sn && parseInt(item.sn) != 0) {
          var cityArr = item.sn.split(','),
            cityTest = 0;
          if (cityArr.length > 0) {
            for (var i = 0; i < cityArr.length; i++) {
              if (cityArr[i].indexOf(orderinf.address[sltData.addressNo].city) != -1) {
                cityTest = 1;
                break;
              }
            }
          }
          if (cityTest == 1) {
            if (item.sfc < item.num) {
              freight += parseFloat(item.sp) + ((parseInt(item.num) - parseInt(item.sfc)) * (parseFloat(item.sap) / parseFloat(item.sac)));
            } else {
              freight += parseFloat(item.sp);
            }
          } else if (cityTest == 0) {
            if (item.dfc < item.num) {
              freight += parseFloat(item.dp) + ((parseInt(item.num) - parseInt(item.dfc)) * (parseFloat(item.ap) / parseFloat(item.ac)));
            } else {
              freight += parseFloat(item.dp);
            }
          }
        } else {
          if (parseInt(item.dfc) < parseInt(item.num) && parseInt(item.dfc) > 0) {
            freight += parseFloat(item.dp) + ((parseInt(item.num) - parseInt(item.dfc)) * (parseFloat(item.ap) / parseFloat(item.ac)));
          } else {
            freight += parseFloat(item.dp);
          }
        }
        return freight
      },
      popshow() {
        this.couponShow = false
        this.mypopshow = true
      },
      pikerHide(type) {
        if (type) {
          this.post = this.copyPost
        }
        this.pikershow = false
      },
      pikerChange(val) {

      },
      invociehandler(data) {

      },
      toAdManage() {
        this.$router.push('/adManage')
      },
      changeAd(index) {
        this.adNum = index
        this.mypopshow = false
      },
      commit() {
        this.$router.push('/order/pay')
      },
      confirm() {
        // 留言
        this.showContent = false
      },
      cancel() {
        // 留言
        this.showContent = false
      },
      counter(data) {
        // 子组件计数器传值   操作父组件 商品数据
        this.$set(this.goodslist[data.index], 'num', data.val)

        this.calculate()
      },
      handdle() {
        this.pikershow = false
        this.shopShow = true
        document.body.addEventListener('touchmove', this.stopTouch, {passive: false, capture: true})
      },
      received(val) {

        //coupon 组件 传过来的选中优惠券下标 对当前页面优惠券数据进行修改  保持数据同步
        if (val < 0) {
          this.couponTip = ''
          this.selectCouIndex = val
          this.couponlist.forEach((item, index) => {
            this.$set(this.couponlist[index], 'use', false)
          })
        } else {
          if (this.preSumPrice < parseInt(this.couponlist[val].up)) {
            this.selectCouIndex = -1
            this.couponTip = ''
          } else {
            this.couponTip = `已选中一张，优惠${this.couponlist[val].reduce}元`
            this.selectCouIndex = val
            this.$set(this.couponlist[val], 'use', true)
          }

        }

      },
      Ctrigger() {
        // 优惠选中触发
        this.couponnum = 2
        this.mypopshow = false
        this.couponShow = false
        this.$refs.coupon.sendMsg()
      },
      findCouponReduce(sumPrice) {
        // 首次计算优惠券 优惠价
        this.selectCouIndex = -1
        let CP_Arr = []
        for (let i = 0; i < this.couponlist.length; i++) {
          if (sumPrice >= this.couponlist[i].up) {
            CP_Arr.push(this.couponlist[i])
          }
        }
        if (CP_Arr.length == 0) {
          this.selectCouIndex = -1
        } else {
          this.selectCouIndex = CP_Arr.length - 1
        }
        if (this.selectCouIndex < 0) {
          this.couponlist.forEach((item, index) => {
            this.$set(this.couponlist[index], 'use', false)
          })
          this.couponTip = ''
          return 0
        } else {
          this.couponTip = `已选中一张，优惠${this.couponlist[this.selectCouIndex].reduce}元`
          this.$set(this.couponlist[this.selectCouIndex], 'use', true)
          return this.couponlist[this.selectCouIndex].reduce
        }
      },
      setCoupon() {
        this.couponlist.forEach((item, index) => {
          this.$set(this.couponlist[index], 'use', false)
        })
      },
      findsingleCoupon(sumPrice, outerindex) {
        // 首次计算单品优惠券 优惠价
        let index = -1, CP_Arr = []
        for (let i = 0; i < this.test[outerindex].length; i++) {
          if (sumPrice >= this.test[outerindex][i].up) {
            CP_Arr.push(this.test[outerindex][i])
          }
        }
        if (CP_Arr.length == 0) {
          index = -1
        } else {
          index = CP_Arr.length - 1
        }
        if (index < 0) {
          let tipData = {
            index: outerindex,
            val: ''
          }
          this.$store.commit('setCouponTip', tipData)

          return 0
        } else {
          //this.couponTip = `已选中一张，优惠${this.couponlist[this.selectCouIndex].reduce}元`
          let data = {
            outerIndex: outerindex,
            index: index
          }

          this.$store.commit('setCoupon', data)

          let tipData = {
            index: outerindex,
            val: `已选一张，优惠${this.test2[outerindex][index].reduce}元`
          }
          this.$store.commit('setCouponTip', tipData)
          this.$set(this.test[outerindex][index], 'use', true)
          return this.test[outerindex][index].reduce
        }
      },
      single(self, singleTotal, index) {
        for (let i = 0; i < self.test2[index]; i++) {
          if (self.test2[index][i].use) {
            if (self.test2[index][i].up > singleTotal) {
              self.$$.msgInf('优惠券不可用')
              singleTotal = singleTotal
            } else {
              singleTotal = singleTotal - self.test2[index][i].reduce
            }
          }
        }
      },
      calculate() {
        let self = this
        let replace, singleTotal
        let sumPrice = this.goodslist.reduce(function (total, cur, index) {
          if (isNaN(parseInt(cur.num))) {
            replace = 0
          } else {
            replace = cur.num
          }
          if (self.test2.length > 0 && self.test2[index][0].hasUse == false) {

            singleTotal = cur.price * replace
            singleTotal = singleTotal - self.findsingleCoupon(singleTotal, index)
          } else if (self.test2.length > 0 && self.test2[index][0].hasUse == true) {

            singleTotal = cur.price * replace
            for (let i = 0; i < self.test2[index].length; i++) {


              if (self.test2[index][i].use) {


                if (self.test2[index][i].up <= singleTotal) {
                  singleTotal = singleTotal - self.test2[index][i].reduce
                  let tipData = {
                    index: index,
                    val: `已选一张，优惠${self.test2[index][i].reduce}元`
                  }
                  self.$store.commit('setCouponTip', tipData)
                } else {
                  self.$$.msgInf('优惠券不可用')
                  let data = {
                    outerIndex: index,
                    index: i
                  }
                  self.$store.commit('setCouponF', data)
                  // 设置tips
                  let tipData = {
                    index: index,
                    val: ''
                  }
                  self.$store.commit('setCouponTip', tipData)
                  singleTotal = singleTotal
                }

              } else {
                let tipData = {
                  index: index,
                  val: ''
                }
                self.$store.commit('setCouponTip', tipData)
                singleTotal = cur.price * replace
              }
            }
          }
          return total + singleTotal
        }, 0)


        this.preSumPrice = sumPrice
        if (this.couponnum == 1) {
          sumPrice = sumPrice - this.findCouponReduce(sumPrice)
        } else {
          if (this.selectCouIndex < 0) {
            sumPrice = sumPrice
          }

          if (this.selectCouIndex >= 0) {
            if (this.couponlist[this.selectCouIndex].up > this.preSumPrice) {
              this.$$.msgInf('优惠券可用')
              sumPrice = sumPrice
            } else {

              sumPrice = sumPrice - this.couponlist[this.selectCouIndex].reduce
            }
          }
        }
        this.totalPrice = sumPrice
      }
    },
    watch: {
      pikershow(val) {
        if (val) {
          let title = document.getElementsByClassName('vux-popup-header-title')[0]
          if (title.innerHTML == '') {
            let div = document.createElement('span')
            div.innerText = '搜索'
            div.setAttribute('class', 'searchBtn')
            div.style.color = '#828282'
            div.style.padding = '5px 15px'
            div.style.background = '#fff'
            div.style.borderRadius = '12px'
            title.appendChild(div)
            div.addEventListener('click', this.handdle)
          }
        }
      }
    },
    computed: {
      totalNum() {
        let replace
        if (typeof (this.goodslist)=='function') {

          return
        }
        // console.log(this.goodslist)
        // setTimeout(()=>{
        //   console.log(222)
        // },1000)
        // console.log(333)

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
      //totalPrice: {
      //   get() {
      //
      //     let self = this
      //     let replace, singleTotal
      //     let sumPrice = this.goodslist.reduce(function (total, cur, index) {
      //       if (isNaN(parseInt(cur.num))) {
      //         replace = 0
      //       } else {
      //         replace = cur.num
      //       }
      //       if (self.couponnum == 1) {
      //         singleTotal = cur.price * replace
      //         singleTotal = singleTotal - self.findsingleCoupon(singleTotal, index)
      //       } else {
      //         console.log(this.rNum)
      //         singleTotal = cur.price * replace
      //         // for (let i = 0; i < self.test2[index]; i++) {
      //         //   if (self.test2[index][i].use) {
      //         //     if (self.test2[index][i].up > singleTotal) {
      //         //       console.log('s不可用')
      //         //       singleTotal = singleTotal
      //         //     } else {
      //         //       console.log('s可用')
      //         //       singleTotal = singleTotal - self.test2[index][i].reduce
      //         //     }
      //         //   }
      //         // }
      //         this.single(self,singleTotal,index)
      //       }
      //       return total + singleTotal
      //     }, 0)
      //
      //
      //
      //     this.preSumPrice = sumPrice
      //     if (this.couponnum == 1) {
      //       sumPrice = sumPrice - this.findCouponReduce(sumPrice)
      //     } else {
      //       if (this.selectCouIndex < 0) {
      //         sumPrice = sumPrice
      //       }
      //
      //       if (this.selectCouIndex >= 0) {
      //         if (this.couponlist[this.selectCouIndex].up > this.preSumPrice) {
      //           console.log('不可用')
      //           sumPrice = sumPrice
      //         } else {
      //           console.log('可用')
      //           sumPrice = sumPrice - this.couponlist[this.selectCouIndex].reduce
      //         }
      //       }
      //
      //     }
      //     this.couponnum=2
      //     return sumPrice
      //   },
      //   set() {
      //
      //   }
      //
      // },
      ...mapState({
        adlist: state => state.address.address,
        test2: state => state.address.singleCoupon
      })
    },
    filters: {
      cityFormat(value) {
        return value2name(value, ChinaAddressV4Data)
      }
    },
    beforeDestroy() {

    }

  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";

  .searchBtn {
    width: 30px;
    height: 20px;
    line-height: 40px;
    text-align: center;
    background: #ffffff !important;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
  }

  .coupontit {
    background: #ffffff;
    text-align: center;
    line-height: 50px;
  }

  .pepleAct {
    background: #eaeaea;
  }

  .active {
    background: #d8edfb;
  }

  .slide {
    padding: 0 10px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;

    textarea {
      margin: 10px auto;
      font-size: 15px;
    }

    .confirm {
      padding: 0;
      display: flex;
      text-align: center;
      line-height: 30px;

      .sure {
        flex: 1;
        color: #1989d1;
      }

      .cancel {
        flex: 1;
      }
    }
  }

  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .scroll-wrapper {
    height: 100%;
  }

  .peple {
    height: 400px;
    background: #ffffff;
    font-size: 14px;

    li {
      padding: 5px 10px;
      position: relative;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      @include onepx();

      b {
        font-weight: 500;
      }
    }
  }

  .order {
    color: #000000;
    font-size: 14px;
    padding-bottom: 50px;

    .post-method {
      width: 100%;
      height: 51px;
      display: flex;
      line-height: 51px;
      background: #ffffff;
      text-align: center;

      .title {
        flex: 1;
      }

      .checkbox {
        flex: 1;
      }
    }

    .address-wrapper {
      width: 100%;
      padding: 10px 10px;
      background: rgb(216, 237, 251);

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
          width: 55%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .icon {
          line-height: 22px;
          color: #bbb;
          position: absolute;
          top: 4px;
          right: 3px;
        }
      }
    }

    .coupon {
      background: #ffffff;
      text-align: center;
    }

    .couponTip {
      position: absolute;
      line-height: 40px;
      right: 26px;
    }

    .mycell /deep/ icon {
      font-size: 12px;
    }

    .bottom {
      position: fixed;
      height: 50px;
      width: 100%;
      display: flex;
      bottom: 0;
      text-align: center;
      background: #f7f7f7;

      div {
        flex: 1;
      }

      .countNum {
        line-height: 50px;
        color: #929292;
      }

      .countPrice {
        color: #dd524d;
        text-align: left;
        line-height: 25px;

        .line1 {
          span {
            color: #929292;
          }
        }
      }

      .countPrice2 {
        color: #dd524d;
        text-align: left;
        line-height: 50px;

        .line1 {
          span {
            color: #929292;
          }
        }
      }

      .commit {
        line-height: 50px;
        background: #dd524d;
        color: #ffffff;
      }
    }
  }
</style>
