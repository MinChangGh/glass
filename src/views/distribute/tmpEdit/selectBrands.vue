<template>
    <div class="main-content">
        <div class="header-section"></div>
        <div class="content-section">
            <div class="left-section">
                <div
                    :class="['left-item',pickGtype === item.gtype ? 'pick-type-item' : '']"
                    v-for="(item,index) in brandsData"
                    :key="index"
                    @click="pickType(item.gtype)"
                >{{item.gname}}</div>
            </div>
            <div class="right-section">
                <div
                    class="right-item"
                    v-for="(item,index) in pickData"
                    :key="index"
                    @click="pickBrands(item.id)"
                >
                    <div
                        :class="['img-container',selectData.some((v)=>{if(v===item.id){return true}}) ? 'pick-brands-item' : '']"
                    >
                        <img :src="item.img" alt>
                    </div>
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="foot-section">
            <div class="reset" @click="reset">重置</div>
            <div class="confirm" @click="confirm">确认</div>
        </div>
    </div>
</template>
<script>
import datalist from "@/components/dataList.vue";
import { getModuleThree } from "@/api/home.js";
export default {
    name: "distribute-tmpedit-tmp2-goodsedit",
    data() {
        return {
            pickGtype: "g2",
            pickData: [],
            brandsData: [
                {
                    gtype: "g2",
                    gname: "太阳镜",
                    data: [
                        {
                            id: 1,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "宝圣"
                        },
                        {
                            id: 2,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "宝圣"
                        },
                        {
                            id: 3,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "宝圣"
                        },
                        {
                            id: 4,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "宝圣"
                        },
                        {
                            id: 5,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "宝圣"
                        }
                    ]
                },
                {
                    gtype: "g3",
                    gname: "隐形眼镜",
                    data: [
                        {
                            id: 11,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "保时捷"
                        },
                        {
                            id: 22,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "保时捷"
                        },
                        {
                            id: 33,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "保时捷"
                        }
                    ]
                },
                {
                    gtype: "g4",
                    gname: "老花镜",
                    data: [
                        {
                            id: 111,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "阿迪达斯"
                        },
                        {
                            id: 222,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "阿迪达斯"
                        },
                        {
                            id: 333,
                            img:
                                "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                            name: "阿迪达斯"
                        },
                    ]
                }
            ],
            selectData: []
        };
    },
    created() {
        let all = {
            gtype: "g1",
            gname: "全部",
            data: []
        };
        this.brandsData.forEach((item, index) => {
            item.data.forEach(v => {
                all.data.push(v);
            });
        });
        this.brandsData.unshift(all);
        this.pickData = all.data;
    },
    mounted() {},
    methods: {
        pickBrands(id) {
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
        pickType(gid) {
            this.brandsData.find((item, index) => {
                if (gid === item.gtype) {
                    this.pickData = item.data;
                    this.pickGtype = item.gtype;
                    return true;
                }
            });
        },
        reset() {
            this.selectData = [];
        },
        confirm() {
            this.$emit("confirmFunc",this.selectData);
        }
    },
    components: {
        goodslist: datalist
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.main-content {
    height: 2.7rem;
    background-color: #f6f6f6;
    color: #666666;
}
.content-section {
    @include flexLayout(nowrap, row);
    height: 100%;
    .left-section {
        width: 0.9rem;
        height: 100%;
        font-size: 0.14rem;
        color: #666666;
        overflow-x: hidden;
        overflow-y: scroll;
        @include flexLayout(nowrap, column, flex-start);
        .left-item {
            width: 100%;
            text-align: center;
            line-height: 0.4rem;
            height: 0.4rem;
        }
    }
    .right-section {
        height: 100%;
        flex: 1;
        background-color: #fff;
        @include flexLayout(wrap, row, flex-start);
        padding: 0.1rem 0.1rem;
        align-content: flex-start;
        overflow-x: hidden;
        overflow-y: scroll;
        .right-item {
            width: 33%;
            padding: 0.05rem;
            @include flexLayout(wrap, column);
            .img-container {
                width: 100%;
                height: 0.44rem;
                overflow: hidden;
                border: 1px solid #d2d2d2;
                img {
                    height: 0.44rem;
                    width: 100%;
                }
            }
            span {
                font-size: 0.12rem;
                margin-top: 0.05rem;
            }
        }
    }
}
.pick-type-item {
    color: #ff4081;
    background-color: #fff;
}
.pick-brands-item {
    border: 1px solid #ff4081 !important;
}
.foot-section {
    height: 0.45rem;
    @include flexLayout();
    div {
        font-size: 0.16rem;
        color: #666666;
        border: 0;
        width: 50%;
        height: 0.45rem;
        text-align: center;
        line-height: 0.45rem;
    }
    .reset {
        background-color: #f6f6f6;
    }
    .confirm {
        color: #fff;
        background: #ff4081;
    }
}
</style>
