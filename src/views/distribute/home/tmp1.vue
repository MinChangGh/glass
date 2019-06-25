<template>
    <div class="container">
        <div class="mui-content">
            <div class="header-section">
                <img src="~@/assets/distribute/images/home/banner.png">
                <div class="header-info-section">
                    <div class="header-logo">
                        <img src="~@/assets/distribute/images/home/logo.png">
                    </div>
                    <div class="header-info">
                        <div class="goods-num">21</div>
                        <div class="info-text">全部商品</div>
                    </div>
                </div>
            </div>
            <!-- 搜索框 -->
            <div @click="goSearchPage">
                <search :searchValue="this.$route.query.search"></search>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div
                        class="mui-card-content-inner flex-align-row flex-align-nopadding flex-align-no-top-padding"
                    >
                        <div class="render-data">
                            <goodslist
                                :list="goodsData.list"
                                :finishedtext="goodsData.finishedtext"
                                :useemit="true"
                                @func="gotoGoodsDetail"
                                :closure="goodsData.closure"
                            >
                                <template v-slot:one="{oneData}">
                                    <div class="goods-info">
                                        <div class="goods-name">{{ oneData.title }}</div>
                                        <div
                                            class="goods-price"
                                        >￥{{ oneData.sell_price | toFixedByNum }}</div>
                                    </div>
                                </template>
                            </goodslist>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import search from "@/components/searchBox.vue";
import datalist from "@/components/dataList.vue";
import { getModuleThree } from "@/api/home.js";
export default {
    name: "home",
    data() {
        return {
            goodsData: {
                list: [],
                finished: false,
                finishedtext: " ",
                //异步请求闭包
                // closure: function() {
                //     setTimeout(() => {
                //         this.settingData.$list = this.settingData.$list.splice(
                //             10
                //         );
                //         this.settingData.$loading = false;
                //         this.settingData.$finished = true;
                //     }, 100);
                // }
            }
        };
    },
    created() {
        if (this.$route.query.search) {
            getModuleThree({ search: this.$route.query.search }).then(res => {
                this.goodsData.list = res.data;
            });
        } else {
            getModuleThree({}).then(res => {
                this.goodsData.list = res.data;
            });
        }
    },
    mounted() {},
    methods: {
        linkeToUrl(url) {
            this.$router.push(url);
        },
        goSearchPage() {
            this.$router.push({
                path: "/distribute/search",
                query: {
                    search: this.$route.query.search,
                    linkto: '/distribute/tmp1',
                }
            });
        },
        gotoGoodsDetail(data) {
            this.$router.push({
                path: "/detail",
                query: {
                    id: data.id
                }
            });
        }
    },
    components: {
        search,
        goodslist: datalist
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    margin-bottom: 0.5rem !important;
}
.mui-card {
    margin: 0.05rem 0;
    box-shadow: none !important;
}
.mui-card-content-inner {
    @include flexLayout(nowrap);
}
.flex-align-row {
    @include flexLayout(wrap, column, space-around);
}
.flex-align-nopadding {
    padding: 0.1rem 0;
    padding-bottom: 0;
}
.render-data /deep/ .data-list {
    padding: 0;
    padding-top: 2px;
    .data-item {
        border: none;
        padding: 0;
    }
}
.goods-info {
    @include flexLayout(nowrap, column, space-around, flex-start);
    padding-left: 0.05rem;
    .goods-name {
        color: #333333;
        font-size: 0.14rem;
        padding-top: 0.05rem;
    }
    .goods-price {
        font-size: 0.14rem;
        font-weight: normal;
        color: rgb(235, 39, 13);
    }
}
.flex-align-no-top-padding {
    padding-top: 0;
}
.header-section{
    position:relative;
    & > img{
        width:100%;
        vertical-align: middle;
    }
    .header-info-section{     
        padding-left:0.25rem;
        padding-right:0.2rem;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        height:100%;
        @include flexLayout(nowrap,row,space-between)
        .header-logo{
            width: 0.7rem;
            height: 0.7rem;
            display: block;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            position: relative;
            z-index: 2;
            img{              
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 0;
            }
        }
        .header-info{
            @include flexLayout(nowrap,column);
            color:#fff;
            .goods-num{
                font-size:0.18rem;
            }
            .info-text{
                font-size:0.14rem;
            }
        }
    }
}
</style>
