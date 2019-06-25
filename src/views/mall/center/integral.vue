<template>
    <div class="content">
        <div class="mui-content">
            <div class="header-banner">
                <img src="https://dev.unionglasses.com/ug/mall/assest/images/boshi/point-h-b.png" />
                <div class="integral-rule" @click="integralRule()">
                    <svg-icon icon-class="question" />
                    <span>积分规则</span>
                </div>
                <div class="integral-details">
                    <div class="integral-details-amount">124</div>
                    <div class="integral-details-current">当前积分</div>
                    <div class="integral-details-expire">
                        <span class="integral-details-expire-many">0积分</span>
                        <span>将于</span>
                        <span class="integral-details-expire-time">20180-04-04 13:48:21到期</span>
                    </div>
                </div>
            </div>
            <rule v-if="ruleShow" @ruleClose="ruleClose"></rule>
            <div class="mui-content-info">
                <div class="mui-content-info-title">
                    <svg-icon icon-class="cascades" />
                    <span>积分明细</span>
                </div>
                <div class="mui-scroll-wrapper scroll-views">
                    <div class="mui-scroll">
                        <ul class="mui-table-view">
                            <li v-for="(item,index) in list" :key="index" class="mui-table-view-cell table-item">{{item.type}}
                                <span class="mui-badge mui-badge-inverted">{{item.num}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import rule from "@/components/integral-rule.vue";
    export default {
        data() {
            return {
                list: [{
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },
                    {
                        type: '微信签到送积分',
                        num: "8"
                    },

                ],
                ruleShow:false,//积分规则是否展示
            };
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            });
        },
        methods: {
          //打开积分规则
          integralRule(){
            this.ruleShow = !this.ruleShow;
          },
          //关闭积分规则
          ruleClose(val){
            console.log(val)
            this.ruleShow = val;
          }
        },
        components: {
            rule,
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/styles/mixin.scss";
    * {
      touch-action: none;
    }
    .content {
        width: 100%;
        height: 100%;
        .mui-content {
            .header-banner {
                position: relative;
                margin-top: 0;

                img {
                    width: 100%;
                    margin-top: -5px;
                    color: #000;
                }
            }

            .integral-rule {
                color: #000;
                position: absolute;
                right: 0;
                top: 20px;
                padding: 10px 12px;
                background-color: rgba(255, 255, 255, .8);
                border-radius: 30px 0 0 30px;
                font-size: 14px;
            }

            .integral-details {
                width: 100%;
                position: absolute;
                bottom: 10%;
                font-size: 12px;
                text-align: center;

                &-amount {
                    font-size: 30px;
                }

                &-current {
                    margin: 5px 0;
                }

                &-expire {
                    &-many {
                        color: #727171;
                    }

                    &-time {
                        color: #FF0000;
                    }
                }
            }

            &-info {
              position: relative;
                &-title {
                    padding: 18px 12px;
                    font-size: 16px;
                    background-color: #ffffff;
                    margin-top: -5px;
                    border-bottom: 1px solid #f3f3f3;
                }
                .scroll-views{
                  height: 62vh;
                  top: 58px;
                  bottom: 0px;
                }
            }
        }
    }
    .table-item{
      font-size: 14px;
      color: #727171;
    }
</style>
