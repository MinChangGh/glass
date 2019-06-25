<template>
  <div class="list" ref="wrapper">
    <div>
      <ul class="goods-wrapper" v-for="(items,index) in goodlist2">
        <li class="item-wrapper ">
          <img class="goodimg" :src="items.img">
          <div class="info">
            <p class="names">{{items.name}}</p>
            <p class=" attribute">{{items.color}}</p>
            <p class="price">￥{{items.price}}</p>
          </div>
        </li>
        <li class="num-wrapper">
          <div class="text">购买数量</div>
          <div class="calculate">
            <div :class="{'disabled':parseInt(items.num)<=1}" class="reducer" @click="reducer(index)">
              -
              <!--            <svg-icon icon-class="add"></svg-icon>-->
            </div>
            <div class="input-wrapper">
              <input @blur="handleInputBlur(index)" @keyup="handleInput(index)" v-rclass type="number"
                     v-model="items.num"
                     min="1" max="10"></div>
            <div class="reducer" @click="add(index)">
              <svg-icon icon-class="add"></svg-icon>
            </div>
          </div>
        </li>
        <selfcell title="单品优惠券" @click.native="couponCtr(index)">
          <div class="tips">{{singleCoupontip[index]}}</div>
        </selfcell>
        <div v-transfer-dom>
          <popup v-model="popshow" :hide-on-blur="closeAuto" should-rerender-on-show @on-hide="hide">
            <div class="title">优惠券</div>
            <coupon v-if="popshow" ref="coupons" :list="list" @received="received" :index="selectIndex"></coupon>
            <redbtn @click.native="trigger(index)">完成</redbtn>
          </popup>
        </div>

      </ul>
    </div>
  </div>
</template>

<script>
  import {XTextarea, XNumber, Cell, Group, Popup, TransferDom} from 'vux'
  import coupon from '@/components/mall/coupon'
  import selfcell from '@/components/cell'
  import redbtn from '@/components/redbtn'
  import {mapState} from 'vuex'
  import BScoll from 'better-scroll'

  export default {
    name: "listcard",
    directives: {
      TransferDom
    },
    data: function () {
      return {
        ReRender: true,
        closeAuto: true,
        selectIndex: null,
        outIndex: 0,
        list: [],
        popshow: false,
        goodlist2: this.goodlist,
        num: 22,
        direction: 'up',
        showContent: false
      }
    },
    props: {
      goodlist: Array
    },
    components: {
      XNumber,
      Cell,
      Group,
      XTextarea,
      coupon,
      selfcell,
      Popup,
      redbtn
    },
    created() {

    },
    mounted() {

    },
    methods: {
      initScroll() {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this.scroll = new BScoll(this.$refs.wrapper, {
            click: true
          })
        }
      },
      hide() {
        this.$emit('count2')
      },
      received(index) {
        this.$store.commit('setCouponHasuse', this.outerIndex)
        let data = {
          outerIndex: this.outerIndex,
          index: index
        }
        this.$store.commit('setCoupon', data)
        this.$emit('count2')
      },
      trigger(index) {
        this.popshow = false
        this.$refs.coupons[index].sendindex()
      },
      couponCtr(index) {
        this.outerIndex = index
        this.test[index].forEach((item, indexs) => {
          if (item.use) {
            this.$nextTick(() => {
              this.selectIndex = indexs
            })
          }
        })
        this.selectIndex = 1
        this.list = this.test[index]

        this.popshow = true

      },
      handleInputBlur(index) {
        let val = this.goodlist[index].num.toString()
        if (val == '') {
          val = 1
        }
        if (isNaN(val)) {
          val = 1
        }
        let data = {
          index: index,
          val: val
        }
        this.$emit('counter', data)

      },
      handleInput(index) {
        let val = this.goodlist[index].num.toString()
        if (parseInt(val) < 1) {
          val = 1
        }
        if (val.toString().match(/./)) {
          val = val.length >= 1 ? parseInt(val.substring(0, val.length)) : 1
        }
        if (parseInt(val) > 100) {
          val = 100
        }
        let data = {
          index: index,
          val: val
        }
        this.$emit('counter', data)
      },
      reducer(index) {
        let data = {
          index: index,
          val: (this.goodlist[index].num - 1) < 1 ? 1 : this.goodlist[index].num - 1
        }
        this.$emit('counter', data)
      },
      add(index) {
        let data = {
          index: index,
          val: this.goodlist[index].num + 1
        }
        this.$emit('counter', data)
      }
    },
    watch: {
      goodlist: function (val) {
        this.goodlist2 = val

        this.initScroll()
      }
    },
    computed: {
      ...mapState({
        test: state => state.address.singleCoupon,
        singleCoupontip: state => state.address.CouponTip
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";

  .disabled {
    color: #ccc !important;
  }

  .title {
    text-align: center;
    line-height: 40px;
    background: #ffffff;
  }

  .list {
    .goods-wrapper {
      width: 100%;
      background: #ffffff;

      .item-wrapper {
        display: flex;
        padding: 11px 15px;
        position: relative;

        .goodimg {
          width: auto;
          height: 122px;
        }

        .info {
          margin-left: 10px;

          .names {
            color: #000;
          }

          .price {
            color: rgb(235, 39, 13);
            font-size: 17px;
          }
        }
      }

      .item-wrapper:after {
        position: absolute;
        bottom: 0;
        left: 0px;
        right: 0px;
        height: 1px;
        content: '';
        transform: scaleY(.5);
        background-color: #c8c7cc;
      }

      .num-wrapper {
        display: flex;
        padding: 8px 10px;
        position: relative;
        justify-content: space-between;
        @include onepx();

        .text {
          line-height: 35px;
        }

        .calculate {
          display: flex;
          flex-direction: row;
          align-items: center;

          .reducer {
            width: 24px;
            height: 24px;
            border-radius: 2px;
            background: #f5f5f5;
            color: #555555;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          }

          .input-wrapper {
            width: 35px;
            height: 24px;

            input {
              margin: 0;
              padding: 0 2px;
              width: 35px;
              height: 24px;
              text-align: center;
            }
          }
        }
      }

      .tips {
        position: absolute;
        line-height: 40px;
        right: 25px;
      }
    }

  }

</style>
