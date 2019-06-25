<template>
  <div class="coupon-box" ref="wrapper">
    <ul class="coupon-item ">
      <li v-for="(item,index) in couponList">
        <div class="info-box">
          <div class="coupon-money">
            <div class="lay of">¥<em>{{item.reduce}}</em></div>
            <div class="lay"><p class="tit"><span>满{{item.up}}减{{item.reduce}}</span> <span>满500元减60元</span></p>
              <p class="demand">2018-11-22&nbsp;至&nbsp;2019-05-30</p></div>
          </div>
        </div>
        <a v-if="0" href="javascript:;" class="get-btn received"><span v-if="isAceapt"
                                                                       @click="isAceapt =!isAceapt">立即领取</span><span
          v-else>已领取</span></a>
        <a href="javascript:;" style="font-size: 16px" class="get-btn received">
          <svg-icon style="color: #00acff" v-if="item.use&&Cindex==index" @click.native="select(index)"
                    icon-class="round_check_fill"></svg-icon>
          <svg-icon v-else @click.native="select(index)" icon-class="round"></svg-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScoll from 'better-scroll'
  export default {
    name: "coupon",
    data() {
      return {
        isAceapt: true,
        Cindex:this.index
      }
    },
    props: ['list', 'index'],
    mounted() {
      if(this.scroll) {
        this.scroll.refresh()
      } else {
        this.scroll=new BScoll(this.$refs.wrapper,{
          click:true
        })
      }
    },
    computed: {
      couponList: function () {
        return this.list
      }
    },
    watch:{
      // Cindex:function (newval) {
      //   this.$nextTick(()=>{
      //     this.Cindex = 0
      //     this.Cindex = newval
      //   })
      // }
    },
    methods: {
      sendindex () {
        this.$emit('received', this.Cindex)
      },
      sendMsg() {
        this.$emit('received', this.Cindex)
      },
      select(index) {
        if (this.Cindex == index) {
          this.Cindex = -1
        } else {
          this.$set(this.couponList[index], 'use', true)
          this.Cindex = index
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .coupon-box {
    height: 400px;
    background: #ffffff;
    padding: 0 12px;
    overflow: hidden;

    .coupon-item {
      margin: 0;
      border-radius: 0;
      box-sizing: border-box;
      background: #fff;

      li {
        background-color: rgb(243, 144, 27);
        display: flex;
        border: none;
        width: 100%;
        position: relative;

        .info-box {
          padding: 16px 0;
          margin: 0 10px;
          display: flex;
          flex: 1;
          text-align: left;

          .coupon-money {
            width: 100%;
            color: #ffffff;
            display: flex;
            align-items: center;

            .lay {
              margin-right: 5px;

              em {
                font-size: 29px;
                font-style: normal;
              }

              p {
                padding: 0;
                margin: 0;
                color: #fff;
                font-size: 15px;
                @media screen and (max-width: 320px) {
                  font-size: 12px;
                }
                font-style: normal;
              }
            }
          }
        }

        .get-btn {
          width: 25%;
          color: #666;
          padding: 42px 0;
          font-size: 14px;
          text-align: center;
          background-color: #e8e8e7;
        }
      }

      li:before {
        content: "";
        height: 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
        display: block;
        z-index: 9;
        background-image: linear-gradient(-45deg, #fff 25%, transparent 25%, transparent), linear-gradient(-135deg, #fff 25%, transparent 25%, transparent), linear-gradient(-45deg, transparent 75%, #fff 75%), linear-gradient(-135deg, transparent 75%, #fff 75%);
        background-size: 8px 16px;
        background-repeat: repeat-x, repeat-x;
      }

      li:after {
        content: "";
        height: 10px;
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        z-index: 9;
        background-image: linear-gradient(-45deg, #fff 25%, transparent 25%, transparent), linear-gradient(-135deg, #fff 25%, transparent 25%, transparent), linear-gradient(-45deg, transparent 75%, #fff 75%), linear-gradient(-135deg, transparent 75%, #fff 75%);
        background-size: 8px 16px;
        background-repeat: repeat-x, repeat-x;
      }
    }

  }
</style>
