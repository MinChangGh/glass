<template>
  <div class="cart">
    <div class="cart-content">
      <div class="cart-content-list">
        <ul class="cart-content-list-total">
          <li class="cart-content-list-total-item" v-for="(item,index) in list" :key="index" data-type="0">
            <div class="cart-content-list-total-item-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
              <div class="isCheck" v-if="!item.status" @click="checkItem(index,item.status)">
                <svg-icon  icon-class="round"></svg-icon>
              </div>
              <div class="isCheck active" v-else @click="checkItem(index,item.status)">
                <svg-icon  icon-class="round_check_fill"></svg-icon>
              </div>
              <div class="cart-content-list-total-item-box-details">
                <div class="cart-content-list-total-item-box-details-img">
                  <img :src="item.imgUrl" />
                </div>
                <div class="cart-content-list-total-item-box-details-info">
                  <div class="cart-content-list-total-item-box-details-info-title">{{item.title}}</div>
                  <div class="cart-content-list-total-item-box-details-info-desc">{{item.desc}}</div>
                  <div class="cart-content-list-total-item-box-details-info-integral">￥{{item.integral}}</div>
                  <ul class="cart-content-list-total-item-box-details-info-count">
                    <van-stepper v-model="item.num" @change="changeNumber(index,item.num)"/>
                  </ul>
                </div>
              </div>
            </div>
            <div class="cart-content-list-total-item-delete" @click="deleteItem" :data-index="index">删除</div>
          </li>
        </ul>
        <div class="cart-content-list-bottom">
          <div class="isCheck all" v-if="!isAll" @click="allCheck()">
            <svg-icon icon-class="round"></svg-icon>
            <span>全选</span>
          </div>
          <div v-else class="isCheck all" @click="allCheck()">
            <svg-icon class="active" icon-class="round_check_fill"></svg-icon>
            <span>全不选</span>
          </div>
          <div class="cart-content-list-bottom-info">
              <div class="cart-content-list-bottom-info-total">合计：<span>{{total}}</span>元</div>
              <div>(已优惠：0元)</div>
          </div>
          <div class="cart-content-list-bottom-btn" @click="settlement">结算</div>
        </div>
      </div>
    </div>
    <!-- <div>暂无数据</div> -->
  </div>
</template>

<script>
  export default {
    data() {
        return {
            list: [{
                    title: "红色限量版套装礼盒4个装",
                    imgUrl: "http://img.unionglasses.com/FoxTMTpT38U5xgB4RQQevz1-zwnd",
                    desc: "礼盒装  4只  红色限量版红色限量版",
                    integral: "12800",
                    num: '5',
                    status: false
                },
                {
                    title: "红色限量版套装礼盒4个装",
                    imgUrl: "http://img.unionglasses.com/Fg_Tg_YMQW7DsN1Lt-iwOdAwNriN",
                    desc: "礼盒装  4只  红色限量版红色限量版",
                    integral: "12800",
                    num: '1',
                    status: false
                },
                {
                    title: "红色限量版套装礼盒4个装",
                    imgUrl: "http://img.unionglasses.com/Fg_Tg_YMQW7DsN1Lt-iwOdAwNriN",
                    desc: "礼盒装  4只  红色限量版红色限量版",
                    integral: "12800",
                    num: '1',
                    status: false
                },
                {
                    title: "红色限量版套装礼盒4个装",
                    imgUrl: "http://img.unionglasses.com/Ftoug9ErIvP7ItBj-cmR8fULxboK",
                    desc: "礼盒装  4只  红色限量版红色限量版",
                    integral: "12800",
                    num: '1',
                    status: false
                },
                {
                    title: "红色限量版套装礼盒4个装",
                    imgUrl: "http://img.unionglasses.com/Fg_Tg_YMQW7DsN1Lt-iwOdAwNriN",
                    desc: "礼盒装  4只  红色限量版红色限量版",
                    integral: "12800",
                    num: '1',
                    status: false
                },
            ],
            startX: 0,
            endX: 0,
            isAll: false,
            total:0,
        };
    },
    mounted() {

    },
    methods: {
      settlement(){
        this.$router.push({
          path:'/order'
        })
      },
      changeNumber(index,value){
        console.log(index,value)
      },
      allCheck() {
        this.isAll = !this.isAll;
        this.list.forEach((item, index) => {
            item.status = this.isAll;
            if(item.status){
              this.total += item.integral*item.num;
            }else{
              this.total = 0;
            }
        })
      },
      checkItem(index, status) {
          var data = this.list[index];
          data.status = !status;
          if(!status){
            this.total += data.integral * data.num;
          }else{
            this.total -= data.integral * data.num;
          }
          var flag = true;
          this.list.forEach((item, index) => {
              if (item.status == false) {//如果有未选择则不全选
                  flag = false;
              }
          })
          this.isAll = flag;
      },
      skip() {
          if (this.checkSlide()) {
              this.restSlide();
          }
      },
      //滑动开始
      touchStart(e) {
          // 记录初始位置
          this.startX = e.touches[0].clientX;
      },
      //滑动结束
      touchEnd(e) {
          // 当前滑动的父级元素
          let parentElement = e.currentTarget.parentElement;
          // 记录结束位置
          this.endX = e.changedTouches[0].clientX;
          // 左滑
          if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
              this.restSlide();
              parentElement.dataset.type = 1;
          }
          // 右滑
          if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
              this.restSlide();
              parentElement.dataset.type = 0;
          }
          this.startX = 0;
          this.endX = 0;
      },
      //判断当前是否有滑块处于滑动状态
      checkSlide() {
          let listItems = document.querySelectorAll(".cart-content-list-total-item");
          for (let i = 0; i < listItems.length; i++) {
              if (listItems[i].dataset.type == 1) {
                  return true;
              }
          }
          return false;
      },
      //复位滑动状态
      restSlide() {
          let listItems = document.querySelectorAll(".cart-content-list-total-item");
          // 复位
          for (let i = 0; i < listItems.length; i++) {
              listItems[i].dataset.type = 0;
          }
      },
      //删除
      deleteItem(e) {
          // 当前索引
          let index = e.currentTarget.dataset.index;
          // 复位
          this.restSlide();
          // 删除
          this.list.splice(index, 1);
      }
    }
  };
</script>
<style lang="scss" scoped>
    @import "@/styles/mixin.scss";

    .cart {
        &-content {
            background: #f6f7f7;
            position: absolute;
            top: 0;
            bottom: 100px;
            overflow-y: scroll;

            &-list {
                &-total {
                    overflow: hidden;

                    &-item {
                        position: relative;
                        transition: all 0.2s;
                        margin-bottom: 5px;

                        &-delete {
                            width: 88px;
                            height: 100%;
                            background: #fc557c;
                            font-size: 14px;
                            color: #fff;
                            position: absolute;
                            top: 0;
                            right: -88px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        &-box {
                            background: #fff;
                            display: flex;
                            align-items: center;
                            padding: 15px 12px;

                            &-details {
                                flex: 1;
                                display: inline-flex;
                                vertical-align: top;

                                &-img {
                                    width: 83px;
                                    height: 83px;
                                    display: inline-block;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                &-info {
                                    flex: 1;
                                    display: inline-block;
                                    padding-left: 0.2rem;
                                    vertical-align: top;

                                    &-title {
                                        font-size: 14px;
                                        color: #727171;
                                    }

                                    &-desc {
                                        font-size: 14px;
                                        color: #989898;
                                    }

                                    &-integral {
                                        font-size: 18px;
                                        color: rgb(235, 39, 13);
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }

                    &-item[data-type="0"] {
                        transform: translate3d(0, 0, 0);
                    }

                    &-item[data-type="1"] {
                        transform: translate3d(-88px, 0, 0);
                    }
                }

                &-bottom {
                    height: 50px;
                    position: fixed;
                    bottom: 50px;
                    width: 100%;
                    background: #f7f7f7;
                    // padding-left: 0.3rem;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &-btn {
                        color: #fff;
                        font-size: 14px;
                        width: 100px;
                        height: 100%;
                        display: flex;
                        background-color: #dd524d;
                        justify-content: center;
                        align-items: center;
                    }

                    &-info {
                        float: right;
                        color: #999999;
                        text-align: right;
                        font-size: 14px;

                        &-total {
                            color: #000;
                            text-align: center;
                            span {
                                color: #EB270D;
                            }
                        }
                    }
                }
            }
        }
    }
    .isCheck{
      margin-right: 10px;
      color: #989898;
      span{
        font-size: 14px;
      }
    }
    .all{
      margin-left: 12px;
    }
    .active {
      color: #ca3434;
    }
</style>
