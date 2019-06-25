<template>
    <div :class="['mui-content',!arrowUp?'no-scroll':'']">
        <div class="header-section">
            <div class="left-section" @click="arrowUp=!arrowUp">
                全部
                <div class="arrow-box">
                    <div v-if="arrowUp">
                        <i class="arrow-up1"></i>
                        <i class="arrow-up2"></i>
                    </div>
                    <div v-else>
                        <i class="arrow-down1"></i>
                        <i class="arrow-down2"></i>
                    </div>
                </div>
            </div>
            <div class="right-section" @click="goSearchPage">
                <search :searchValue="this.$route.query.search"></search>
            </div>
        </div>
        <div class="content-section">
            <goodslist
                :list="goodsData.list"
                :finishedtext="goodsData.finishedtext"
                :closure="goodsData.closure"
            >
                <template v-slot:one="{oneData}">
                    <div class="goods-info">
                        <div class="goods-name">{{ oneData.title }}</div>
                        <div class="goods-price">￥{{ oneData.sell_price | toFixedByNum }}</div>
                    </div>
                </template>
                <template v-slot:two="{twoData}">
                    <div class="select" @click="select(twoData.id)">
                        <div
                            :class="['circle',selectData.some((v)=>{if(v===twoData.id){return true}})?'pick':'']"
                        ></div>
                    </div>
                </template>
            </goodslist>
        </div>
        <div class="save-btn">
            <button class="next-btn" @click="save()">保存</button>
        </div>
        <brands v-if="!arrowUp" class="brands-section" @confirmFunc="confrim"></brands>
        <div v-if="!arrowUp" class="mask" @click.self="hideBrands"></div>
    </div>
</template>
<script>
import search from "@/components/searchBox.vue";
import datalist from "@/components/dataList.vue";
import brands from "./selectBrands.vue";
import { getModuleThree } from "@/api/home.js";
export default {
    name: "distribute-tmpedit-tmp2-goodsedit",
    data() {
        return {
            mod: this.$route.query.mod,
            arrowUp: true,
            goodsData: {
                list: [],
                finished: false,
                finishedtext: " ",
                //异步请求闭包
                closure: function() {
                    setTimeout(() => {
                        this.settingData.$list = this.settingData.$list.splice(
                            10
                        );
                        this.settingData.$loading = false;
                        this.settingData.$finished = true;
                    }, 100);
                }
            },
            selectData: []
        };
    },
    created() {
        getModuleThree({}).then(res => {
            this.goodsData.list = res.data;
        });
    },
    mounted() {},
    methods: {
        save() {
            console.log(11);
        },
        select(id) {
            let key = null;
            this.selectData.some((item, index, arr) => {
                if (item === id) {
                    key = index;
                    return true;
                }
            });
            if (key != null) {
                this.selectData.splice(key, 1);
            } else {
                this.selectData.push(id);
            }
        },
        hideBrands() {
            this.arrowUp = !this.arrowUp;
        },
        confrim(seldata) {
            this.arrowUp = !this.arrowUp;
        },
        goSearchPage() {
            this.$router.push({
                path: "/distribute/search",
                query: {
                    search: this.$route.query.search,
                    linkto: "/distribute/tmpedit/tmp2/goodsedit"
                }
            });
        }
    },
    components: {
        brands,
        search,
        goodslist: datalist
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
    height: calc(100vh);
    background-color: #f6f6f6;
    color: #666666;
}
.header-section {
    //padding-top: 0.12rem;
    @include flexLayout(nowrap, row, space-between);
    .left-section {
        width: 0.9rem;
        padding-left: 0.1rem;
        font-size: 0.16rem;
        @include flexLayout(nowrap, row, flex-start);
    }
    .right-section {
        flex: 1;
    }
}
.arrow-box {
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.05rem;
    position: relative;
    .arrow-up1,
    .arrow-up2 {
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5; /*兼容ie8-*/
        border-top: 6px transparent dashed;
        border-left: 6px transparent dashed;
        border-right: 6px transparent dashed;
        border-bottom: 6px #f6f6f6 solid;
        overflow: hidden;
    }
    .arrow-up1 {
        border-bottom: 6px #666 solid;
    }
    .arrow-up2 {
        top: 1px;
    }
    .arrow-down1,
    .arrow-down2 {
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 5; /*兼容ie8-*/
        border-top: 6px #f6f6f6 dashed;
        border-left: 6px transparent dashed;
        border-right: 6px transparent dashed;
        border-bottom: 6px transparent solid;
        overflow: hidden;
    }
    .arrow-down1 {
        border-top: 6px #666 solid;
    }
    .arrow-down2 {
        top: 45%;
    }
}
.content-section {
    background-color: #fff;
    /deep/ .data-list {
        .data-item {
            width: 100%;
            min-height: 1rem;
            border: none;
            box-shadow: none;
            @include flexLayout(nowrap, row, space-between);
            img {
                width: 1rem;
                height: 1rem;
            }
            .goods-info {
                padding-left: 0.1rem;
                flex: 1;
                .goods-name {
                    font-size: 0.14rem;
                }
                .goods-price {
                    color: #ff4081;
                    font-size: 0.14rem;
                }
            }
            .select {
                padding-right: 0.2rem;
                .circle {
                    &::before {
                        content: "\e411";
                        font-family: Muiicons;
                        font-size: 0.2rem;
                        font-weight: 400;
                        line-height: 1;
                        text-decoration: none;
                        color: #aaa;
                        border-radius: 0;
                        background: 0 0;
                        -webkit-font-smoothing: antialiased;
                    }
                }
                .pick {
                    &::before {
                        content: "\e442";
                        color: #ff4081;
                    }
                }
            }
        }
    }
}
.save-btn {
    @include flexLayout();
    width: 2.33rem;
    height: 0.44rem;
    position: fixed;
    bottom: 0.15rem;
    z-index: 99;
    left: 0;
    right: 0;
    margin: 0 auto;
    .next-btn {
        color: #fff;
        font-size: 0.14rem;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 0;
        border-radius: 0.22rem;
        background: url("~@/assets/distribute/images/tmpEdit/bg_btn.png");
    }
}
.brands-section {
    position: absolute;
    top: 0.44rem;
    left: 0;
    width: 100%;
    height: 300px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    z-index: 999;
}
.mask {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 0.44rem;
}
.no-scroll {
    overflow: hidden;
}
</style>
