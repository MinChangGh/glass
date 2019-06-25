<template>
    <div class="container">
        <div class="mui-content">
            <swiper :photoList="sliderList" :isFull="isFull" :aspectRatio="0.46"></swiper>
            <!-- 搜索框 -->
            <div @click="goSearchPage">
                <search :searchValue="this.$route.query.search"></search>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div
                        :class="['mui-card-content-inner','flex-align-row','flex-align-nopadding', this.$route.query.search!=''?'flex-align-no-top-padding':'']"
                    >
                        <div v-if="firstData.title!=''" class="render-data-title">
                            <span class="title">{{firstData.title}}</span>
                            <span class="sub-title">{{firstData.sub_title}}</span>
                        </div>
                        <div class="render-data">
                            <goodslist
                                :list="firstData.list"
                                :finishedtext="firstData.finishedtext"
                                :useemit="true"
                                @func="gotoGoodsDetail"
                                :closure="firstData.closure"
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
            <div v-if="secondData.title!=''" class="mui-card">
                <div class="mui-card-content">
                    <div
                        :class="['mui-card-content-inner','flex-align-row','flex-align-nopadding',this.$route.query.search!=''?'flex-align-no-top-padding':'']"
                    >
                        <div class="render-data-title">
                            <span class="title">{{secondData.title}}</span>
                            <span class="sub-title">{{secondData.sub_title}}</span>
                        </div>
                        <div class="render-data">
                            <goodslist
                                :list="secondData.list"
                                :finishedtext="secondData.finishedtext"
                                :useemit="true"
                                @func="gotoGoodsDetail"
                                :closure="secondData.closure"
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
import swiper from "@/components/swiper.vue";
import datalist from "@/components/dataList.vue";
import { getModuleThree } from "@/api/home.js";
export default {
    name: "home",
    data() {
        return {
            isFull: true,
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
            firstData: {
                list: [],
                finished: false,
                finishedtext: " ",
                title: "太阳镜",
                sub_title: "精细挑选,只为独一无二的你",
                //异步请求闭包
                closure: function() {
                    setTimeout(() => {
                        this.settingData.$list = this.settingData.$list.splice(
                            4
                        );
                        this.settingData.$loading = false;
                        this.settingData.$finished = true;
                    }, 100);
                }
            },
            secondData: {
                list: [],
                finished: false,
                finishedtext: " ",
                title: "隐形眼镜",
                sub_title: "精细挑选,只为独一无二的你",
                //异步请求闭包
                closure: function() {
                    setTimeout(() => {
                        this.settingData.$list = this.settingData.$list.splice(
                            4
                        );
                        this.settingData.$loading = false;
                        this.settingData.$finished = true;
                        //this.settingData.$finishedtext = "";
                    }, 100);
                }
            }
        };
    },
    created() {
        if (this.$route.query.search) {
            this.firstData.title = this.secondData.title = "";
            this.firstData.list = this.secondData.list = [];
            getModuleThree({ search: this.$route.query.search }).then(res => {
                this.firstData.list = res.data;
            });
        } else {
            getModuleThree({}).then(res => {
                this.firstData.list = res.data;
                this.secondData.list = res.data;
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
                    linkto: '/distribute/tmp2',
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
        swiper,
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
}
.mui-card-content-inner {
    @include flexLayout(nowrap);
}
.render-data-title {
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
.mui-card {
    box-shadow: none !important;
}
.flex-align-no-top-padding {
    padding-top: 0;
}
</style>
