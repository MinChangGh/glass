<template>
    <div class="container">
        <div class="mui-content">
            <!-- 搜索框 -->
            <search @func="goSearchPage"></search>
            <div class="item-icon-container">
                <div class="item-icon" @click="gotoShop()">
                    <svg-icon icon-class="shop"/>
                </div>
            </div>
            <swiper :photoList="sliderList" :aspectRatio="0.46"></swiper>
            <div class="mui-card mui-card-no-margin-top">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div
                            class="quick-icon-container"
                            v-for="(item, index) in quickList"
                            :key="index"
                            @click="linkeToUrl(item.url)"
                        >
                            <div class="quick-icon">
                                <img :src="item.img">
                            </div>
                            <div class="quick-title">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner flex-align-row flex-align-nopadding">
                        <div class="module-one-title">
                            <span class="title">{{moduleOne.title}}</span>
                            <span class="sub-title">{{moduleOne.sub_title}}</span>
                        </div>
                        <!-- <div class="module-one">
                            <goodslist
                                :list="moduleOne.list"
                                :finished="moduleOne.finished"
                                :finishedtext="moduleOne.finishedtext"
                                :useemit="true"
                                @func="gotoEntranceDetail"
                                :closure="moduleOne.closure"
                            ></goodslist>
                        </div>-->
                        <div class="module-one">
                            <div
                                class="module-one-item"
                                v-for="(item,index) in moduleOne.list"
                                :key="index"
                                @click="gotoModuleOneHref(item)"
                            >
                                <div class="module-one-text">
                                    <div class="module-one-title-one">{{item.title}}</div>
                                    <div class="module-one-title-two">{{item.sub_title}}</div>
                                </div>
                                <div class="module-one-img">
                                    <img :src="item.img_url" alt>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner flex-align-row flex-align-nopadding">
                        <div class="module-three-title">
                            <span class="title">{{moduleThree.title}}</span>
                            <span class="sub-title">{{moduleThree.sub_title}}</span>
                        </div>
                        <div class="module-three">
                            <goodslist
                                :list="moduleThree.list"
                                :useemit="true"
                                @func="gotoGoodsDetail"
                                :closure="moduleThree.closure"
                            >
                                <template v-slot:one="{oneData}">
                                    <div class="goods-info">
                                        <div class="goods-tags">
                                            <div
                                                class="goods-tag"
                                                v-for="(item, index) in oneData.tags"
                                                :key="index"
                                            >{{ item}}</div>
                                        </div>
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
import swiper from "@/components/swiper.vue";
import datalist from "@/components/dataList.vue";
import { getModuleThree } from "@/api/home.js";
export default {
    name: "home",
    data() {
        return {
            sliderList: [
                {
                    url: "/cate",
                    img:
                        "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                    title: "新品推荐"
                },
                {
                    url: "javascript:",
                    img:
                        "http://img.unionglasses.com/Fjd2gx9rQoRbZARxj0xB5VrDCzxM",
                    title: "明星同款"
                },
                {
                    url: "javascript:",
                    img:
                        "http://img.unionglasses.com/FqvNXzd_qDgWRpBvzCLyifX7hQKD",
                    title: "炫彩隐形"
                }
            ],
            quickList: [
                {
                    img:
                        "http://img.unionglasses.com/FrBx-WjZzNwWHO9FAC5z6-D1FJVS",
                    title: "优惠券",
                    url: "/coupon"
                },
                {
                    img:
                        "http://img.unionglasses.com/FuThTNBm1ORChg7t5ogemKOxJdNJ",
                    title: "全场爆款",
                    url: "/search"
                },
                {
                    img:
                        "http://img.unionglasses.com/FrSGhAIYenw05tZj261HOwSIH2tG",
                    title: "签到",
                    url: "/center/sign"
                }
            ],
            moduleOne: {
                list: [
                    {
                        id: 1,
                        img_url:
                            "http://img.unionglasses.com/Fgi7ITSrNAcU_n-eXOIVkz-t-YfF",
                        url: "/search",
                        title: "蔡司精选",
                        sub_title: "品质保证"
                    },
                    {
                        id: 2,
                        img_url:
                            "http://img.unionglasses.com/FjmQdiolEVno9RHfjr8te4aHK9fN",
                        url: "/search",
                        title: "柯达镜架",
                        sub_title: "创意潮框"
                    },
                    {
                        id: 3,
                        img_url:
                            "http://img.unionglasses.com/FujlQMxBpJT8olsRBraJurJBA8KT",
                        url: "/search",
                        title: "帕莎眼镜",
                        sub_title: "2019新款"
                    },
                    {
                        id: 4,
                        img_url:
                            "http://img.unionglasses.com/FmPST9Kl5JRf2vytcyiegx_JOyUl",
                        url: "/search",
                        title: "海昌眼镜",
                        sub_title: "水润自然"
                    }
                ],
                //finished: true,
                //finishedtext: " ",
                title: "推荐商品",
                sub_title: "寻找最合适的商品"
            },
            moduleThree: {
                list: [],
                finished: false,
                finishedtext: " ",
                title: "热销商品",
                sub_title: "精细挑选,只为独一无二的你",
                //异步请求闭包
                closure: function() {
                    setTimeout(() => {
                        for (let i = 0; i < 2; i++) {
                            this.settingData.$list.push(
                                this.settingData.$list[0]
                            );
                        }
                        this.settingData.$loading = false;
                        if (this.settingData.$list.length >= 10) {
                            this.settingData.$finished = true;
                        }
                    }, 1000);
                }
            }
        };
    },
    created() {
        getModuleThree({}).then(res => {
            this.moduleThree.list = res.data;
        });
    },
    methods: {
        linkeToUrl(url) {
            this.$router.push(url);
        },
        goSearchPage(searchText) {
            this.$router.push({
                path: "/search",
                query: {
                    search: searchText
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
        },
        gotoEntranceDetail(data) {
            this.$router.push({
                path: "/cate",
                query: {
                    id: data.id
                }
            });
        },
        gotoModuleOneHref(data) {
            this.$router.push({
                path: data.url,
                query: {
                    id: data.id
                }
            });
        },
        gotoShop() {
            this.$router.push({
                path: "/distribute/shop/selectgoods"
            });
        }
    },
    components: {
        search,
        swiper,
        goodslist: datalist
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    margin-bottom: 0.5rem !important;
}
.mui-card {
    margin: 0.05rem 0;
}
.mui-card-content-inner {
    @include flexLayout(nowrap);
    .quick-icon-container {
        @include flexLayout(nowrap, column);
        .quick-icon {
            img {
                box-shadow: 0 0 8px #ccc;
                border-radius: 50%;
                width: 0.45rem;
                height: 0.45rem;
            }
        }
    }
}
.mui-card-header {
    font-size: 0.15rem;
}
.module-one-title,
.module-two-title,
.module-three-title {
    padding: 0.05rem 0.1rem;
    background-color: #fff;
    margin-bottom: 0.01rem;
    @include flexLayout(nowrap, column);
    .title {
        font-weight: 700;
        font-size: 0.18rem;
    }
    .sub-title {
        font-size: 0.1rem;
        color: #999;
    }
}
.flex-align-row {
    @include flexLayout(wrap, column, space-around);
}
.flex-align-nopadding {
    padding: 0.1rem 0;
    padding-bottom: 0;
}
.module-one {
    @include flexLayout(wrap, row, space-between);
    .module-one-item {
        width: 50%;
        padding: 0.1rem 0.12rem;
        border-top: 1px solid #ededed;
        border-right: 1px solid #ededed;
        @include flexLayout(wrap, row, space-between);
        .module-one-text {
            @include flexLayout(wrap, column, space-around, flex-start);
            .module-one-title-one {
                font-size: 0.15rem;
                color: #000000;
            }
            .module-one-title-two {
                font-size: 0.14rem;
                color: #8f8f94;
            }
        }
        .module-one-img {
            height: 0.56rem;
            width: 0.56rem;
            overflow: hidden;
            img {
                height: 0.56rem;
                width: 0.56rem;
            }
        }
    }
}
// .module-one /deep/ .data-list {
//     @include flexLayout(wrap, row, space-between);
//     background-color: #fff;
//     margin-bottom: 0.05rem;
//     padding: 0;
//     .data-item {
//         width: 100%;
//         box-shadow: 0 0 0.08rem #ccc;
//         margin: 0.05rem 0;
//         margin-top: 0;
//         padding: 0;
//         display: flex;
//         justify-content: space-between;
//         min-height: 160px;
//         overflow: hidden;
//         img {
//             width: 100%;
//         }
//     }
// }
.module-three /deep/ .data-list {
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
    padding-top: 0.05rem;
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
    .goods-tags {
        height: 100%;
        font-size: 0.08rem;
        line-height: 0.13rem;
        @include flexLayout(nowrap, row, flex-start, center);
        .goods-tag {
            border: 2px solid #eb270d;
            border-radius: 4px;
            margin: 0 0.02rem;
            background-color: #eb270d;
            color: #fff;
        }
    }
}
.mui-card {
    box-shadow: none !important;
}
.mui-card-no-margin-top {
    margin-top: 0 !important;
}
.item-icon-container {
    width: 0.42rem;
    position: fixed;
    right: 0.15rem;
    margin-top: 5%;
    z-index: 999;
    .item-icon {
        font-size: 0.24rem;
        width: 0.42rem;
        height: 0.42rem;
        background: #efeff4;
        border-radius: 50%;
        color: #929292;
        text-align: center;
        line-height: 0.42rem;
        @include flexLayout();
        svg {
            height: 80%;
            width: 80%;
        }
    }
}
</style>
