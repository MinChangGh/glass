<template>
    <div class="mui-content">
      <div class="interests">
        <div class="interests-header">
          <div class="interests-header-back">

          </div>
          <div class="interests-header-user">

          </div>
        </div>
        <div class="interests-content">
          <div class="interests-content-title">
            <svg-icon icon-class="crown" :style="{ color: '#6bb3f2'}"/>
            <span>会员等级</span>
          </div>
          <div class="interests-content-info">
            <div class="interests-content-info-title">一.博士银卡会员</div>
            <ul class="interests-content-info-type">
              <li>1. 消费即可升级银卡</li>
              <li>2. 正价9.5折</li>
              <li>3. 生日当月一次免费验光；当天消费双倍积分</li>
            </ul>
          </div>
          <div class="interests-content-info">
            <div class="interests-content-info-title">一.博士银卡会员</div>
            <ul class="interests-content-info-type">
              <li>1. 消费即可升级银卡</li>
              <li>2. 正价9.5折</li>
              <li>3. 生日当月一次免费验光；当天消费双倍积分</li>
            </ul>
          </div>

        </div>
        <div class="interests-content">
          <div class="interests-content-title">
            <svg-icon icon-class="crown" :style="{ color: '#6bb3f2'}"/>
            <span>会员等级</span>
          </div>
          <div class="interests-content-info">
            <ul class="interests-content-info-type">
              <li>1. 消费即可升级银卡</li>
              <li>2. 正价9.5折</li>
              <li>3. 生日当月一次免费验光；当天消费双倍积分</li>
            </ul>
          </div>
        </div>
      </div>
      <noData v-if="noDataShow" :noDataInfo="noDataInfo"></noData>
    </div>
</template>
<script>
    import noData from "@/components/noData.vue";
    export default {
        data() {
            return {
                noDataShow:false,//暂无数据
                noDataInfo:{
                  imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
                  desc:'您还没有相关权益'
                }
            };
        },
        mounted() {

        },
        methods: {

        },
        components: {
            noData,
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/styles/mixin.scss";
    .mui-content{
      min-height: 100vh;
      background: #ffffff;
    }
    .interests{
      &-header{
        position: relative;
        @include flexLayout(nowrap, row, center, center);
        margin-bottom: 50px;
        &-back{
          width:100%;
          height:160px;
          background:linear-gradient(58deg,rgba(65,65,65,1),rgba(175,175,175,1),rgba(83,81,81,1));
        }
        &-user{
          position: absolute;
          top: 50px;
          bottom: 0;
          background: #FF9000;
          width: 100%;
          height: 150px;
          border-radius:16px;
          width: 90%;
          height: 150px;
          border-radius: 16px;
          margin: 0 auto;
        }
      }
      &-content{
        padding: 0 20px;
        &-title{
          padding: 9px 0;
          font-size: 16px;
          border-bottom: 1px solid rgba(243,243,243,1);
        }
        &-info{
          margin-top: 10px;
          &-title{
            font-size: 14px;
            font-weight:600;
          }
          &-type{
            font-size: 12px;
            color: #727171;
            padding: 0 15px;
            margin-top: 5px;
          }
        }
      }
    }
</style>
