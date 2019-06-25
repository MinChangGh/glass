<template>
    <div class="mui-content">
        <div class="bg-img">
            <img src="~@/assets/distribute/images/center/my_bg.png" alt>
        </div>
        <div class="header">
            <div class="set-btn" @click="editBaseInfo()">
                <img src="~@/assets/distribute/images/center/settings_icon.png" alt>
            </div>
            <div class="logo-img">
                <img :src="userInfo.avatar" alt>
            </div>
            <p>{{userInfo.name}}</p>
        </div>
        <div class="main-content">
            <div class="order-list">
                <div class="order-title" @click="goList('all')">
                    <span>我的订单</span>
                    <span class="mui-navigate-right">更多订单</span>
                </div>
                <div class="order-section">
                    <div class="order-item" @click="goList('pay')">
                        <div class="icon-img">
                            <img src="~@/assets/distribute/images/center/unpaid_icon.png" alt>
                        </div>
                        <span>待付款</span>
                    </div>
                    <div class="order-item" @click="goList('delivery')">
                        <div class="icon-img">
                            <img src="~@/assets/distribute/images/center/unshipped_icon.png" alt>
                        </div>
                        <span>待发货</span>
                    </div>
                    <div class="order-item" @click="goList('receive')">
                        <div class="icon-img">
                            <img src="~@/assets/distribute/images/center/unreceive_icon.png" alt>
                        </div>
                        <span>待收货</span>
                    </div>
                    <div class="order-item" @click="goList('evaluate')">
                        <div class="icon-img">
                            <img src="~@/assets/distribute/images/center/uncomment_icon.png" alt>
                        </div>
                        <span>待评价</span>
                    </div>
                    <div class="order-item" @click="goList('refund')">
                        <div class="icon-img">
                            <img src="~@/assets/distribute/images/center/refund_icon.png" alt>
                        </div>
                        <span>退款/退货</span>
                    </div>
                </div>
            </div>
            <div class="main-option">
                <div class="my-collect" @click="collect()">
                    <p class="mui-navigate-right">我的收藏</p>
                </div>
                <div class="my-shop" @click="myshop()">
                    <p class="mui-navigate-right">我的小店</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";
export default {
    name: "home",
    data() {
        return {
            userInfo: {
                uid: store.getters.userInfo.uid,
                avatar: store.getters.userInfo.avatar,
                name: store.getters.userInfo.name
            }
        };
    },
    created() {},
    methods: {
        editBaseInfo() {
            this.$router.push("/distribute/center/userinfo");
        },
        collect() {
            this.$router.push("/distribute/center/collection");
        },
        myshop() {
            this.$router.push("/distribute/tmp1");
        },
        goList(val) {
            var path =
                val == "refund"
                    ? "/distribute/myOrder/refund"
                    : "/distribute/myOrder";
            this.$store.commit("setStatus", val);
            this.$router.push({
                path: path,
                query: {
                    status: val,
                    type: "my"
                }
            });
        }
    },
    components: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
    background-color: #f6f6f6;
    height: calc(100vh - 0.44rem);
}
.bg-img {
    width: 100%;
    overflow: hidden;
    img {
        width: 100%;
    }
}
.header {
    position: absolute;
    width: 100%;
    height: 1.25rem;
    z-index: 1;
    top: 0.15rem;
    left: 0;
    .set-btn {
        position: absolute;
        top: 0;
        right: 0.18rem;
        width: 0.22rem;
        height: 0.22rem;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .logo-img {
        width: 0.9rem;
        height: 0.9rem;
        overflow: hidden;
        border: 5px solid rgba(255, 255, 255, 0.26);
        border-radius: 50%;
        margin: 0 auto;
        img {
            height: 100%;
            width: 100%;
        }
    }
    p {
        color: #fff;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.16rem;
        white-space: nowrap;
        text-align: center;
    }
}
.main-content {
    position: absolute;
    top: 1.4rem;
    width: 100%;
    padding: 0 0.16rem;
    .order-list {
        height: 1.1rem;
        padding-top: 0.1rem;
        width: 100%;
        background-color: #fff;
        border-radius: 0.08rem;
        .order-title {
            padding: 0 0.1rem 0 0.16rem;
            color: #666666;
            height: 0.25rem;
            line-height: 0.25rem;
            margin: 0;
            span {
                &:first-child {
                    font-size: 0.14rem;
                    color: #666666;
                }
            }
            .mui-navigate-right {
                font-size: 0.12rem;
                color: #999999;
                float: right;
                position: relative;
                padding-right: 0.1rem;
                &::after {
                    right: 0;
                    top: 45%;
                    color: #999999;
                }
            }
        }
        .order-section {
            width: 100%;
            margin-top: 0.1rem;
            @include flexLayout(nowrap, row);
            .order-item {
                flex: 1 1 auto;
                width: 20%;
                @include flexLayout(nowrap, column);
                .icon-img {
                    width: 0.35rem;
                    height: 0.35rem;
                    overflow: hidden;
                    margin: 0 auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                span {
                    font-size: 0.12rem;
                    font-weight: 400;
                    color: #8f8f94;
                }
            }
        }
    }
}
.main-option {
    & > div {
        height: 0.4rem;
        line-height: 0.4rem;
        margin-top: 0.1rem;
        padding-left: 0.16rem;
        background-color: #fff;
        border-radius: 8px;
        p {
            color: #333333;
            width: 100%;
            position: relative;
            .mui-navigate-right {
                &::after {
                    color: #999999;
                }
            }
        }
    }
}
</style>
