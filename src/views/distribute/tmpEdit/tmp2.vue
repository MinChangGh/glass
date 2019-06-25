<template>
    <div class="container">
        <div class="mui-content">
            <div class="custom-edit">
                <label for>自定义模板</label>
                <div class="publish-icon fr" @click="publish">
                    <img src="~@/assets/distribute/images/tmpEdit/send_icon.png" alt>
                </div>
                <div class="view-icon fr" @click="view">
                    <img src="~@/assets/distribute/images/tmpEdit/view_icon.png" alt>
                </div>
            </div>
            <div class="edit-btn" @click="editSwiper">
                <img src="~@/assets/distribute/images/tmpEdit/edit_icon.png" alt>
            </div>
            <swiper :photoList="sliderList" :isFull="isFull" :aspectRatio="0.46"></swiper>
            <!-- 搜索框 -->
            <search :searchValue="this.$route.query.search"></search>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div
                        :class="['mui-card-content-inner','flex-align-row','flex-align-nopadding']"
                    >
                        <div class="render-data-title">
                            <span class="title">{{firstData.title}}</span>
                            <span class="sub-title">{{firstData.sub_title}}</span>
                        </div>
                        <div class="edit-btn" _type="mod1" @click="editMod(firstData.title)">
                            <img src="~@/assets/distribute/images/tmpEdit/edit_icon.png" alt>
                        </div>
                        <div class="render-data">
                            <goodslist
                                :list="firstData.list"
                                :finishedtext="firstData.finishedtext"
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
            <div class="mui-card">
                <div class="mui-card-content">
                    <div
                        :class="['mui-card-content-inner','flex-align-row','flex-align-nopadding']"
                    >
                        <div class="render-data-title">
                            <span class="title">{{secondData.title}}</span>
                            <span class="sub-title">{{secondData.sub_title}}</span>
                        </div>
                        <div class="edit-btn" _type="mod1" @click="editMod(secondData.title)">
                            <img src="~@/assets/distribute/images/tmpEdit/edit_icon.png" alt>
                        </div>
                        <div class="render-data">
                            <goodslist
                                :list="secondData.list"
                                :finishedtext="secondData.finishedtext"
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
    name: "distribute-tmp2",
    data() {
        return {
            isFull: true,
            sliderList: [
                {
                    url: "javascript:",
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
        getModuleThree({}).then(res => {
            this.firstData.list = res.data;
            this.secondData.list = res.data;
        });
    },
    mounted() {},
    methods: {
        publish() {
            this.$$.msgConfirm("确认发布吗?", "提示", () => {
                this.$router.push({
                    path: "/distribute/tmp2"
                });
            });
        },
        view() {
            this.$router.push({
                path: "/distribute/tmp2",
                query: {
                    isview: true
                }
            });
        },
        editSwiper() {
            this.$router.push({
                path: "/distribute/tmpedit/tmp2/swiperedit"
            });
        },
        editMod(mod) {
            this.$router.push({
                path: "/distribute/tmpedit/tmp2/goodsedit",
                query: {
                    mod: mod
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
    position: relative;
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
.custom-edit {
    padding-left: 0.2rem;
    line-height: 0.4rem;
    height: 0.4rem;
    background-color: #ebebeb;
    width: 100%;
    font-size: 0.18rem;
    overflow: hidden;
    .fr {
        padding-top: 0.05rem;
        padding-right: 0.15rem;
        height: 100%;
    }
}
.edit-btn {
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    overflow: hidden;
    z-index: 999;
    top: 0.52rem;
    right: 0.1rem;
    img {
        height: 100%;
        width: 100%;
    }
    &[_type="mod1"] {
        width: 0.25rem;
        height: 0.25rem;
        top: 0.15rem;
    }
}
</style>
