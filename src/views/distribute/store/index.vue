<template>
    <div class="mui-content">
      <div class="store-header">
        <div class="store-header-img">
          <img src="https://dev.unionglasses.com/ug/distribute/img/manage-bg.png"/>
        </div>
        <div class="store-header-user">
          <div class="store-header-user-headUrl">
            <img src="http://thirdwx.qlogo.cn/mmopen/caweicsS1HicP59I0hSYv7B3GOeNtJ6ZYPfctYGMX5yicFibZdGx7hFOIzzNHws0eYKKpQEeLD3ibTx2axKYYU41vTBsRXmE7LQOg/132" />
          </div>
          <div class="store-header-user-name" @click="userInfo()">
            <span>peng</span>
            <svg-icon icon-class="right" />
          </div>
        </div>
        <div class="store-header-info">
          <div class="store-header-info-content">
            <div class="store-header-info-content-common">
              <div class="store-header-info-content-common-num red">0.00</div>
              <div class="store-header-info-content-common-desc">本店销售总额</div>
            </div>
            <div class="double">
              <div class="store-header-info-content-common">
                <div class="store-header-info-content-common-num">0.00</div>
                <div class="store-header-info-content-common-desc">本店销售总额</div>
              </div>
              <div class="store-header-info-content-common">
                <div class="store-header-info-content-common-num">0.00</div>
                <div class="store-header-info-content-common-desc">本店销售总额</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="store-content">
        <router-link to="/qrcode" tag="li" class="store-content-item">
          <div class="store-content-item-img">
            <img src="https://dev.unionglasses.com/ug/distribute/img/ercode.png">
          </div>
          <div class="store-content-item-type">小店二维码</div>
        </router-link>
        <li class="store-content-item" @click="order()">
          <div class="store-content-item-img">
            <img src="https://dev.unionglasses.com/ug/distribute/img/order.png">
          </div>
          <div class="store-content-item-type">交易订单</div>
        </li>
        <router-link to="/award" tag="li"  class="store-content-item">
          <div class="store-content-item-img">
            <img src="https://dev.unionglasses.com/ug/distribute/img/bonus.svg">
          </div>
          <div class="store-content-item-type">小店奖金</div>
        </router-link>
      </ul>
      <ul class="store-info">
        <li class="store-info-item"  @click="tmpEdit()">
          <span>模板管理</span>
          <svg-icon icon-class="right" class="icon"/>
        </li>
        <router-link to="/notice/noticeList" tag="li" class="store-info-item">
          <span>消息通知</span>
          <svg-icon icon-class="right" class="icon"/>
        </router-link>
        <li class="store-info-item" @click="account()">
          <span>店铺收款账号</span>
          <svg-icon icon-class="right" class="icon"/>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {
          userInfo(){
            this.$router.push('/distribute/store/info')
          },
          account(){
            this.$router.push('/distribute/store/account')
          },
          tmpEdit(){
            this.$router.push('/distribute/tmpedit/tmp2')
          },
          order(){
            this.$store.commit('setStatus','all')
            this.$router.push({
              path:'/distribute/myOrder',
              query:{
                status:'all',
                type:'store'
              }
            })
          }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/styles/mixin.scss";
    .mui-content{
      min-height: 100vh;
    }
    .store-header{
        position: relative;
        margin-bottom: 50px;
        &-img{
          width: 100%;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        &-user{
          width: 100%;
          @include flexLayout(nowrap, row, flex-start, center);
          padding: 20px 23px;
          position:absolute;
          top: 0;
          left: 0;
          &-headUrl{
            width: 49px;
            height: 49px;
            overflow: hidden;
            float: left;
            margin-right: 10px;
            border: 3px solid #ffffff;
            border-radius: 50%;
            img{
              width: 100%;
            }
          }
          &-name{
            flex: 1;
            @include flexLayout(nowrap, row, space-between, center);
            color: #fff;
          }
        }
        &-info{
          width: 100%;
          position: absolute;
          top: 84px;
          bottom: 0;
          padding: 0 16px;
          &-content{
            height: 165px;
            width: 100%;
            background: #fff;
            border-radius: 8px;
            text-align: center;
            color: #666666;
            font-size: 14px;
            .double{
              @include flexLayout(nowrap, row, space-between, center);
              padding: 0 20px;
            }
            &-common{
              width: 100%;
              color: #8f8f94;
              &-num{
                color: #333333;
                font-size: 20px;
                margin: 5px 0;
                &.red{
                  color: #FF4081;
                  padding-top: 25px;
                  font-size: 30px;
                }
              }
              &-desc{
                margin-bottom: 10px;
              }
            }
          }
        }
    }
    .store-content{
      margin: 86px 0 20px 0;
      overflow: hidden;
      &-item{
        width: 33.33%;
        float: left;
        font-size: 14px;
        color: #3D3D3D;
        text-align: center;
        &-img{
          width: 35px;
          height: 35px;
          overflow: hidden;
          margin: 3px auto;
          img{
            width: 100%;
          }
        }
      }
    }
    .store-info{
      clear: both;
      background-color: #fff;
      &-item{
        width: 100%;
        height: 40px;
        padding: 0 25px;
        border-bottom: 1px solid #F2F2F2;
        color: #3D3D3D;
        font-size: 14px;
        @include flexLayout(nowrap, row, space-between, center);
        .icon{
          color: #999999;
        }
      }
      &-item:last-child{
        border: 0;
      }
    }
</style>
