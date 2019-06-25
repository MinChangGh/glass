<template>
  <div class="goodDetail" ref="pagewrapper">
    <div>
      <!-- 轮播-->
      <div class="slider-wrapper">
        <swiper :photoList="mock.goodsinfo.img" :showDescMask="false" :height="height"></swiper>
      </div>
      <!--    基本信息-->
      <div class="title-wrapper">
        <div class="title">{{mock.goodsinfo.title}}</div>
        <div class="price"><span>￥{{mock.goodsinfo.price}}</span> <b>300</b></div>
        <div class="post">快递： {{mock.goodsinfo.fastfree}}</div>
      </div>
      <!--    优惠券-->
      <ul class="mui-table-view" @click="popup('coupon', null)">
        <li class="mui-table-view-cell coupon">
          <a class="mui-navigate-right">优惠券</a>
        </li>
      </ul>
      
      <!--选项栏目-->
      <div class="property">
        <ul class="mui-table-view" v-for="(items,key,index) in celldata" @click="popup(key,items,index)">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">{{items.name}}<span
              v-show="sendcheck[key]">:&nbsp;</span>{{sendcheck[key]}}</a>
          </li>
        </ul>
        <ul class="mui-table-view" @click="popup('des', null,-1)">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">产品说明</a>
          </li>
        </ul>
      </div>
      
      <!--评价-->
      <div class="comment-wrapper">
        <h4>评价</h4>
        <div class="comment-title">商品评价</div>
        <div v-if="1">
          <commentList></commentList>
          <div class="more-wrapper">
            <div class="loadmore" @click="lookmore">
              查看更多
            </div>
          </div>
        </div>
        <div class="unComment" v-else>
          暂无评论
        </div>
      
      
      </div>
      
      <!-- 图文-->
      <div class="goodsdes">
        <h4>图文详情</h4>
        <ul class="goods-brief cl list-paddingleft-2" style="list-style-type: none; padding-left: 6px">
          <li><p>品牌：LOHO</p></li>
          <li><p>条码：210801170401001</p></li>
          <li><p>规格：55□22-148</p></li>
          <li><p>重量：43</p></li>
          <li><p>镜架高：62</p></li>
          <li><p>鼻梁宽：22</p></li>
          <li><p>镜架外宽：160</p></li>
          <li><p>镜架宽：55</p></li>
          <li><p>镜腿长：148</p></li>
          <li><p>镜架内宽：154</p></li>
          <li><p>材质：板材</p></li>
          <li><p>边框：全框</p></li>
          <li><p>大小：大框</p></li>
          <li><p>框型：椭圆型</p></li>
          <li><p>价格：201-400元</p></li>
          <li><p>色系: 钢琴黑色&nbsp;&nbsp;</p></li>
        </ul>
        <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">
          <img style="width: 100%;height: auto"
               src="http://image.loho88.com/images/ueditor/20171125/1511599726557056.jpg" title="1511599726557056.jpg"/>
        </p>
        <p>
        </p>
      </div>
    </div>
    <nav class="vux-1px-t">
      <div class="serv-cart" @click="toService">
        <svg-icon class="icon" icon-class="service"/>
        <div class="text">客服</div>
      </div>
      <div class="serv-cart">
        <Badge v-if="badgeNum" :text="badgeNum" class="badge"></Badge>
        <svg-icon class="icon" icon-class="cart"/>
        <router-link to="/cart" tag="div" class="text">购物车</router-link>
      </div>
      <div class="add-buy add" @click="addToCart">加入购物车</div>
      <div class="add-buy buy" @click="buy">立即购买</div>
    
    </nav>
    <!--    vux popup-->
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="hide">
        <div class="vuxPopup">
          <svg-icon icon-class="round_close" class="close" @click.native="show = !show"></svg-icon>
          <h4 style="text-align: center" v-if="type ==2">产品说明</h4>
          <h4 style="text-align: center" v-else-if="type ==3">优惠券</h4>
          <h4 v-if="type ==0||type==1">{{celldata[popkey].name}}</h4>
          <div class="bswrapper" ref="wrapper" v-if="type ==0">
            <ul class="colorList">
              <li v-for="(item,index) in celldata[popkey].data" :class="{'ColorActive':celldata[popkey].index==index}"
                  @click.stop="ActiveSelect(index)">
                {{item}}
              </li>
            </ul>
            <redbtn @click.native="popConfirmBtn">确定</redbtn>
          </div>
          <div class="bswrapper" ref="wrapper" v-show="type ==1">
            <ul class="check-wrapper">
              <li class="mui-input-row mui-radio mui-left check-item" v-for=" (item,index) in poplist[popkey]">
                <label>{{item}}</label>
                <input @change="setRidio(item)" :value="item" name="ball" type="radio">
              </li>
            </ul>
            <redbtn @click.native="popConfirmRadio">确定</redbtn>
          </div>
          <div class="bswrapper" ref="wrapper" v-if="type ==2">
            <div class="text">购买此商品可以获得200积分</div>
            <redbtn @click.native="show=!show">确定</redbtn>
          </div>
          <div class="bswrapper" ref="wrapper" v-if="type==3">
            <div class="coupon-box">
              <ul class="coupon-item ">
                <li>
                  <div class="info-box">
                    <div class="coupon-money">
                      <div class="lay of">¥<em>60</em></div>
                      <div class="lay"><p class="tit"><span>满500减60</span> <span>满500元减60元</span></p>
                        <p class="demand">2018-11-22&nbsp;至&nbsp;2019-05-30</p></div>
                    </div>
                  </div>
                  <a href="javascript:;" class="get-btn received"><span v-if="isAceapt" @click="isAceapt =!isAceapt">立即领取</span><span
                    v-else>已领取</span></a>
                </li>
              </ul>
            </div>
            <redbtn @click.native="show=!show">确定</redbtn>
          </div>
        </div>
      </popup>
    </div>
  
  </div>
</template>

<script>
  import swiper from "@/components/swiper.vue"
  import redbtn from "@/components/redbtn.vue"
  import {Badge, Popup, TransferDom} from 'vux'
  import commentList from '@/components/commentlist'
  import Bscroll from 'better-scroll'
  
  export default {
    name: "goodDetail",
    data() {
      return {
        value: 12,
        isAceapt: true,
        show: false,
        checkVal: [],
        checkdata: {},
        sendcheck: {},
        height: 'auto',
        mock: {
          goodsinfo: {
            desc_short: "",
            fastfree: "15.00",
            goods_type: "2",
            id: 19,
            img: [
              {
                img:
                  "https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a5825fd32fa9.png",
                title: "送你一朵fua"
              },
              {
                img:
                  "http://dev.unionglasses.com//uploads/mall/goods/2018-01-12/5a581d0a8383a.png",
                title: "送你一朵fua"
              }
            ],
            price: "200.00",
            salePrice: "200.00",
            shop_grid: "0",
            shop_stock: "0",
            shop_type_id: "",
            title: "LOHO防蓝光辐射1.600非球面镜片 现有片 1116072700006"
          }
        },
        celldata: {
          // color: {name: "色号", data: ["100"], index: -1},
          // mota: {name: "材料", data: ["实木", "原木"], index: -1},
          // style: {name: "款型", data: ["17款", "16款"], index: -1},
          pole: {name: '球镜', data: [{start: 10, end: 200, step: 2}], index: -1}
        },
        flag: -1,
        color: ['蓝色', '紫色', '红色'],
        type: 3,
        popindex: Number,
        popkey: String,
        popitems: Object,
        poplist: {
          pole: [],
          ball: []
        },
        radioNum: Number,
        badgeNum: 0
      }
    },
    components: {
      swiper,
      Badge,
      Popup,
      redbtn,
      commentList
    },
    directives: {
      TransferDom
    },
    beforeCreate () {
    
    },
    created() {
      this.setCheckVal()
    },
    mounted() {
      this.$nextTick(() => {
        this.pagescroll = new Bscroll(this.$refs.pagewrapper, {
          click: true,
          bounce: false
        })
      })
    },
    activated() {
    
    },

    beforeRouteLeave(to, from, next) {
      if (to.path =='/order') {
        this.$store.dispatch("addCachedViews", this.$route);
        this.$store.dispatch("delCachedViews", to)
      } else{
        this.$store.dispatch("delCachedViews", this.$route)
      }
      next()
    },
    methods: {
      hide() {
        this.type = -1
      },
      setCheckVal() {
        if (Object.keys(this.checkdata).length == 0) {
          for (let key in this.celldata) {
            this.checkdata[key] = ''
          }
        }
      },
      toService() {
        this.$router.push('/detail/service')
      },
      lookmore() {
        this.$router.push('/detail/comment')
      },
      checkInfo(flag) {
        for (let key in this.checkdata) {
          if (this.checkdata[key] == '') {
            this.popup(key, this.celldata[key])
            return false
          }
        }
        return true
      },
      buy() {
        if (this.checkInfo()) {
          this.$router.push('/order')
        }
      },
      addToCart() {
        if (this.checkInfo()) {
          this.$$.msgInf('加入购物车成功')
          this.badgeNum++
        }
      },
      timeFormat(val) {
        return this.$$.parseTime(val)
      },
      setRidio(radio) {
        this.checkdata[this.popkey] = radio
      },
      popConfirmRadio() {
        Object.assign(this.sendcheck, this.checkdata)
        this.show = false
      },
      popConfirmBtn() {
        Object.assign(this.sendcheck, this.checkdata)
        this.show = false
      },
      popup(key, items, index) {
        this.popkey = key
        this.popitems = items
        if (key == 'color' || key == 'mota' || key == 'style') {
          this.type = 0
        } else if (key == 'pole' || key == 'ball') {
          this.type = 1
          let data = this.celldata[key].data
          for (let i = 0; i < data.length; i++) {
            for (let k = data[i].start; k <= data[i].end; k = k + data[i].step) {
              this.poplist[key].push(k)
            }
          }
        } else if (key == 'des') {
          this.type = 2
        } else if (key == 'coupon') {
          this.type = 3
        }
        this.show = true
        this.$nextTick(() => {
          if (this.scroll) {
            this.scroll.refresh()
          } else {
            this.scroll = new Bscroll(this.$refs.wrapper, {
              click: true
            })
          }
        })
        
      },
      ActiveSelect(index) {
        let num = this.celldata[this.popkey].index
        if (num == index) {
          this.celldata[this.popkey].index = -1
          this.checkdata[this.popkey] = ''
        } else {
          this.celldata[this.popkey].index = index
          this.checkdata[this.popkey] = this.celldata[this.popkey].data[index]
        }
      }
    },

  }
</script>

<style scoped lang="scss">
  .vuxPopup {
    height: 400px;
    background: #ffffff;
    
    .close {
      color: #aaaaaa;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    h4 {
      margin: 0;
      padding: 0 10px;
      line-height: 40px;
      font-size: 15px;
      text-align: left;
      font-weight: normal;
      color: #000000;
    }
    
    .bswrapper {
      top: 48px;
      height: 300px;
      bottom: 40px;
      overflow: hidden;
      
      .check-wrapper {
        top: 30px;
        bottom: 30px;
        overflow: hidden;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        
        li {
          width: 23%;
          
          label {
            font-size: 15px;
            padding: 11px 6px 11px 42px;
          }
          
          input {
            width: 20px;
            height: 18px;
            top: 8px;
          }
          
          input:before {
            font-size: 18px;
          }
        }
        
      }
    }
    
    .colorList {
      padding-left: 10px;
      
      li {
        list-style: none;
        margin-bottom: 5px;
        width: 40px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #f5f5f5;
        border-radius: 2px;
        font-size: 14px;
      }
    }
    
    .text {
      font-size: 15px;
      padding-left: 10px;
    }
    
    .coupon-box {
      padding: 0 12px;
      
      .coupon-item {
        margin: 0;
        border-radius: 0;
        box-sizing: border-box;
        background: #fff;
        
        li {
          margin: 5px 0;
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
            color: rgb(25, 137, 209);
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
  }
  
  .ColorActive {
    background: rgb(252, 49, 34) !important;
    color: #fff;
  }
  
  .goodDetail {
    position: absolute;
    top: 0;
    bottom: 50px;
    
    nav {
      position: fixed;
      bottom: 0;
      z-index: 100;
      height: 50px;
      display: flex;
      background: #fff;
      width: 100%;
      flex-direction: row;
      
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
      }
      
      .serv-cart {
        display: flex;
        flex-direction: column;
        background: #f7f7f7;
        color: #929292;
        position: relative;
        
        .icon {
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #929292;
        }
        
        .badge {
          position: absolute;
          top: 0px;
          right: 20px;
        }
        
      }
      
      .add-buy {
        color: #ffffff;
        font-size: 14px;
      }
      
      .add {
        background-color: #f0ad4e;
      }
      
      .buy {
        background-color: #dd524D;
      }
    }
    
    /*轮播*/
    .slider-wrapper {
      width: 100%;
    }
    
    /*基本信息*/
    .title-wrapper {
      width: 100%;
      background: #fff;
      padding: 11px 15px;
      color: #8f8f94;
      font-size: 14px;
      line-height: 20px;
      
      .price {
        span {
          color: rgb(235, 39, 13);
        }
        
        b {
          font-weight: normal;
          text-decoration: line-through;
        }
        
      }
    }
    
    /*优惠券*/
    .coupon {
      background: #fff;
      margin-top: 10px;
      font-size: 14px;
    }
    
    /*其它属性*/
    .property {
      margin-top: 10px;
      
      .mui-table-view-cell {
        a {
          font-size: 14px;
        }
      }
    }
    
    /*评论*/
    .comment-wrapper {
      h4:before {
        content: '';
        position: absolute;
        width: 19px;
        height: 1px;
        background-color: #575757;
        top: 50%;
        left: 35%;
      }
      
      h4:after {
        content: '';
        position: absolute;
        width: 19px;
        height: 1px;
        background-color: #575757;
        right: 35%;
        top: 50%
      }
      
      h4 {
        text-align: center;
        margin: 20px 0;
        color: rgb(87, 87, 87);
        position: relative;
        font-size: 15px;
        font-weight: normal;
        
        img {
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      
      .unComment {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        height: 40px;
        text-align: center;
      }
      
      .comment-title {
        background: #ffffff;
        font-size: 15px;
        padding: 10px 12px;
        border-bottom: 1px solid #E5E5E5;
      }
      
      .more-wrapper {
        background: #ffffff;
        padding-bottom: 5px;
        
        .loadmore {
          background: #ffffff;
          width: 106px;
          border: 1px solid #EB270D;
          box-sizing: border-box;
          font-size: 15px;
          color: #EB270D;
          border-radius: 20px;
          margin: 0 auto;
          line-height: 32px;
          text-align: center;
        }
      }
      
      
    }
    
    /*图文描述*/
    .goodsdes {
      h4:before {
        content: '';
        position: absolute;
        width: 19px;
        height: 1px;
        background-color: #575757;
        top: 50%;
        left: 35%;
      }
      
      h4:after {
        content: '';
        position: absolute;
        width: 19px;
        height: 1px;
        background-color: #575757;
        right: 35%;
        top: 50%
      }
      
      h4 {
        text-align: center;
        margin: 20px 0;
        color: rgb(87, 87, 87);
        position: relative;
        font-size: 15px;
        font-weight: normal;
        
        img {
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      
    }
  }

</style>
