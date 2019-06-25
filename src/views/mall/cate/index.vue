<template>
    <div class="container">
        <div id="cate-list">
            <div id="catepop0" :class="['mall-popover',isActive0 ? 'active' : '']">
                <div class="mui-scroll-wrapper mall-scroll-catepop">
                    <div class="mui-scroll">
                        <ul class="mui-table-view">
                            <li
                                class="mui-table-view-cell"
                                v-for="(item,index) in cate0"
                                :key="index"
                                @tap="gotoCate(item,'cate0')"
                            >{{item.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="catepop1" :class="['mall-popover',isActive1 ? 'active' : '']">
                <div class="mui-scroll-wrapper mall-scroll-catepop">
                    <div class="mui-scroll">
                        <ul class="mui-table-view">
                            <li
                                class="mui-table-view-cell"
                                v-for="(item,index) in cate1"
                                :key="index"
                                @tap="gotoCate(item,'cate1')"
                            >{{item.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabbar mui-segmented-control mui-segmented-control-inverted">
            <div class="tabbar-left" @click="selectCate('catepop0')">
                <span :class="['mui-control-item',isCateActive0 ? 'active-color' : '']">
                    <span>{{activeCate0}}</span>
                    <span class="arrow"></span>
                </span>
            </div>
            <div class="tabbar-right" @click="selectCate('catepop1')">
                <span :class="['mui-control-item',isCateActive1 ? 'active-color' : '']">
                    <span>{{activeCate1}}</span>
                    <span class="arrow"></span>
                </span>
            </div>
        </div>
        <div class="goods-list-container">
            <div class="mui-scroll-wrapper goods-list-margin">
                <div class="mui-scroll">
                    <goodslist :list="goodsList.list" :useemit="true" @func="gotoGoodsDetail">
                        <template v-slot:one="{oneData}">
                            <div class="goods-info">
                                <div class="goods-name">{{ oneData.title }}</div>
                                <div class="goods-price">￥{{ oneData.sell_price | toFixedByNum}}</div>
                            </div>
                        </template>
                    </goodslist>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import datalist from "@/components/dataList.vue";
export default {
    data() {
        return {
            isActive0: false,
            isActive1: false,
            isCateActive0: false,
            isCateActive1: false,
            activeCate0: "类别",
            activeCate1: "品牌",
            goodsList: {
                list: [
                    {
                        id: 1,
                        title: "艾妮亚1.60镜片",
                        sell_price: 360.0,
                        tags: ["1.60", "加膜"],
                        img_url:
                            "http://img.unionglasses.com/FvYAPXx981fjh68dm5XOm7tcu1Y-"
                    },
                    {
                        id: 2,
                        title: "艾妮亚1.60镜片",
                        sell_price: 360.0,
                        tags: ["1.60", "加膜"],
                        img_url:
                            "http://img.unionglasses.com/FvYAPXx981fjh68dm5XOm7tcu1Y-"
                    }
                ],
                finished: false
            },
            cate0: [
                {
                    id: 1,
                    name: "全部"
                },
                {
                    id: 2,
                    name: "镜片"
                },
                {
                    id: 3,
                    name: "镜架"
                },
                {
                    id: 4,
                    name: "太阳镜"
                },
                {
                    id: 5,
                    name: "隐形眼镜"
                }
            ],
            cate1: [
                {
                    id: 1,
                    name: "全部"
                },
                {
                    id: 2,
                    name: "豪雅"
                },
                {
                    id: 3,
                    name: "奥尔帝"
                },
                {
                    id: 4,
                    name: "艾妮亚"
                },
                {
                    id: 5,
                    name: "卡地亚"
                },
                {
                    id: 6,
                    name: "索菲亚"
                },
                {
                    id: 7,
                    name: "zala"
                }
            ]
        };
    },
    methods: {
        selectCate(cateid) {
            if (cateid == "catepop0") {
                this.isActive0 = !this.isActive0;
                this.isActive1 = this.isCateActive1 = false;
                this.isCateActive0 = true;
            } else if (cateid == "catepop1") {
                this.isActive1 = !this.isActive1;
                this.isActive0 = this.isCateActive0 = false;
                this.isCateActive1 = true;
            }
        },
        gotoGoodsDetail(data) {
            this.$router.push({
                path: "/detail",
                query: {
                    id: data.id
                }
            });
        },
        gotoCate(data, cate) {
            this.isActive0 = this.isActive1 = false;
            if (cate == "cate0") {
                this.activeCate0 = data.name;
                this.activeCate1 = "品牌";
                this.isCateActive0 = true;
                this.isCateActive1 = false;
            } else {
                this.activeCate1 = data.name;
                this.activeCate0 = "类别";
                this.isCateActive1 = true;
                this.isCateActive0 = false;
            }
            this.$router.replace({
                path: "/cate",
                query: {
                    id: data.id
                }
            });
        }
    },
    watch: {},
    created() {
        console.log("no cache");
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005
        });
    },
    components: {
        goodslist: datalist
    }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.goods-list-container {
    position: relative;
    height: 100vh;
    .goods-list-margin {
        margin-top: 0.38rem;
        margin-bottom: 0.5rem;
    }
    /deep/ .data-list {
        padding: 0;
        padding-top: 2px;
        .data-item {
            border: none;
            padding: 0;
        }
    }
}
.goods-info {
    @include flexLayout(nowrap, column, space-around, flex-start);
    color: black;
    padding-bottom: 0.03rem;
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
.tabbar {
    @include flexLayout(nowrap);
    height: 0.44rem;
    background-color: #fff;
    z-index: 1000;
    position: fixed;
    top: 0;
    .tabbar-left,
    .tabbar-right {
        width: 50%;
    }
}
.arrow {
    width: 0;
    height: 0;
    position: absolute;
    top: 0.18rem;
    right: auto;
    margin-left: 0.04rem;
    border-width: 0.06rem;
    border-style: solid;
    border-color: #d3d3d3 transparent transparent;
}
.arrow:after {
    position: absolute;
    top: -0.07rem;
    left: -0.05rem;
    content: "";
    width: 0;
    height: 0;
    border: 0.05rem solid;
    border-color: #fff transparent transparent transparent;
}
#cate-list {
    position: relative;
    top: 0;
    .mall-popover {
        position: absolute;
        z-index: 999;
        display: block;
        left: 0;
        top: -3rem;
        width: 100%;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        &:before {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 1px;
            content: "";
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            background-color: #c8c7cc;
        }
    }
    .mall-scroll-catepop {
        height: 3rem;
        background-color: #fff;
        font-size: 0.15rem;
    }
}
.mui-table-view-cell:after {
    left: 0;
}
.active {
    top: 0.38rem !important;
}
.active-color {
    color: #f3901b !important;
    .arrow {
        top: 12px;
        border-color: transparent transparent rgb(243, 144, 27) transparent;
        &:after {
            top: -4px;
            left: -5px;
            border-color: transparent transparent #fff transparent;
        }
    }
}
.mui-active {
    color: #000000 !important;
}
</style>

