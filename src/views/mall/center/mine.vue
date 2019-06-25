<template>
    <div class="mui-content">
        <div class="header-zone">
            <div class="header-img">
                <img :src="userInfo.avatar" alt>
            </div>
            <div class="nickname">{{userInfo.name}}</div>
            <div class="user-member">
                <svg-icon icon-class="crown"/>
                <div class="member-name">{{userInfo.member}}</div>
            </div>
        </div>
        <div class="member-info-zone">
            <div class="point-section member-info-item">
                <div class="point-info">
                    <div class="point-title">我的积分</div>
                    <div class="point-score">{{userInfo.erpScore}}</div>
                </div>
                <router-link
                    :to="{name:'integral',query:{id:userInfo.uid}}"
                    tag="div"
                    class="point-icon icon-container"
                >
                    <svg-icon icon-class="point"/>
                </router-link>
            </div>
            <div class="member-section member-info-item">
                <div class="member-info">
                    <div class="member-title">会员卡</div>
                    <div class="member-desc">二维码/条形码</div>
                </div>
                <router-link
                    class="member-qrcode icon-container"
                    :to="{name:'qbcode',query:{id:userInfo.uid}}"
                    tag="div"
                >
                    <svg-icon icon-class="qrcode"/>
                </router-link>
            </div>
        </div>
        <div class="address-info-zone" @click="gotoAddress">
            <div class="address-title-section">
                <svg-icon icon-class="crown"/>
                <span class="address-title mui-navigate-right">地址管理</span>
            </div>
        </div>
        <div class="ext-info-zone">
            <router-link class="ext-section" :to="{name:'sign',query:{id:userInfo.uid}}" tag="div">
                <svg-icon icon-class="sign-in"/>
                <div class="ext-title">签到</div>
            </router-link>
            <router-link class="ext-section" :to="{name:'coupon',query:{id:userInfo.uid}}" tag="div">
                <svg-icon icon-class="coupon"/>
                <div class="ext-title">优惠券</div>
            </router-link>
            <router-link class="ext-section" :to="{name:'optometry',query:{id:userInfo.uid}}" tag="div">
                <svg-icon icon-class="crown"/>
                <div class="ext-title">验光单</div>
            </router-link>
            <router-link class="ext-section" :to="{name:'interests',query:{id:userInfo.uid}}" tag="div">
                <svg-icon icon-class="crown"/>
                <div class="ext-title">我的权益</div>
            </router-link>
            <router-link class="ext-section" :to="{name:'userinfo',query:{id:userInfo.uid}}" tag="div">
                <svg-icon icon-class="crown"/>
                <div class="ext-title">我的资料</div>
            </router-link>
        </div>
        <div class="order-info-zone">
            <div class="order-title-section" @click="goOrder('all')">
                <span class="order-title mui-navigate-right">我的订单</span>
            </div>
            <div class="order-info-section">
                <div class="order-type-section" @click="goOrder('pay')">
                    <svg-icon icon-class="crown" :style="{ color: '#c935f2'}"/>
                    <div class="order-type-title">待付款</div>
                </div>
                <div class="order-type-section" @click="goOrder('delivery')">
                    <svg-icon icon-class="crown" :style="{ color: '#ff8d10'}"/>
                    <div class="order-type-title">待发货</div>
                </div>
                <div class="order-type-section" @click="goOrder('receive')">
                    <svg-icon icon-class="crown" :style="{ color: '#e0b60c'}"/>
                    <div class="order-type-title">待收货</div>
                </div>
                <div class="order-type-section" @click="goOrder('evaluate')">
                    <svg-icon icon-class="crown" :style="{ color: '#6bb3f2'}"/>
                    <div class="order-type-title">待评价</div>
                </div>
                <div class="order-type-section" @click="goOrder('complete')">
                    <svg-icon icon-class="crown" :style="{ color: '#d48df2'}"/>
                    <div class="order-type-title">已完成</div>
                </div>
                <div class="order-type-section" @click="goOrder('refund')">
                    <svg-icon icon-class="crown" :style="{ color: '#6370e2'}"/>
                    <div class="order-type-title">退款售后</div>
                </div>
            </div>
        </div>
        <div class="member-binding-zone" @click="unbinding">解绑</div>
        <div class="fix-mui-content-no-scroll"></div>
    </div>
</template>

<script>
import store from "@/store";
export default {
    data() {
        return {
            userInfo: {
                uid: store.getters.userInfo.uid,
                avatar: store.getters.userInfo.avatar,
                name: store.getters.userInfo.name,
                member: store.getters.userInfo.member,
                erpScore: store.getters.userInfo.erpScore
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        goOrder(val) {
            var path = val == "refund" ? "/myOrder/refund" : "/myOrder";
            this.$store.commit('setStatus',val)
            this.$router.push({
                path: path,
                query: {
                    id: this.uid,
                    status: val
                }
            });
        },
        unbinding() {
            this.$$.msgConfirm("确定解绑吗?");
        },
        gotoAddress() {
            this.$router.push({
                path: "/adManage",
                query: {
                    id: this.uid
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
    height: 100vh;
}
.header-zone {
    height: 1.44rem;
    font-size: 0.14rem;
    background: url("~@/assets/mall/images/center/top-img.png") no-repeat center;
    background-size: cover;
    @include flexLayout(nowrap, row, flex-start, center);
    .header-img {
        background-color: #fff;
        height: 0.68rem;
        width: 0.68rem;
        border-radius: 50%;
        margin-left: 0.2rem;
        margin-right: 0.1rem;
        overflow: hidden;
        img {
            border: 0;
            height: 0.68rem;
            width: 0.68rem;
        }
    }
    .nickname {
        font-size: 0.15rem;
        color: #555;
        font-weight: normal;
        margin-right: 0.15rem;
    }
    .user-member {
        @include flexLayout(nowrap, row, space-between);
        background-color: #fff;
        font-size: 0.14rem;
        border-radius: 0.07rem;
        height: 0.25rem;
        padding: 0 0.08rem;
        .member-name {
            padding-left: 0.05rem;
        }
    }
}
.member-info-zone {
    @include flexLayout(nowrap, row);
    background-color: #fff;
    margin: 0.05rem 0 0;
    height: 0.91rem;
    .member-info-item {
        flex: 1 1 auto;
        width: 50%;
        padding: 0.1rem 0.12rem;
        @include flexLayout(nowrap, row, space-between);
        font-size: 0.16rem;
        color: #000;
        .icon-container {
            height: 0.48rem;
            width: 0.48rem;
            @include flexLayout(nowrap, row);
            border-radius: 50%;
            border: 1px solid #ebebeb;
            svg {
                height: 0.25rem;
                width: 0.25rem;
            }
        }
    }
    .point-section {
        border-right: 1px solid #e5e5e5;
        .point-score {
            font-size: 0.12rem;
            color: #f3b113;
        }
    }
    .member-section {
        .member-desc {
            font-size: 0.12rem;
            color: #727171;
        }
    }
}
.address-info-zone {
    background-color: #fff;
    height: 0.5rem;
    margin: 0.05rem 0;
    position: relative;
    @include flexLayout(nowrap, row, space-between);
    padding: 0 0.12rem;
    border-bottom: 1px solid #e5e5e5;
}
.ext-info-zone {
    height: 0.84rem;
    margin: 0.05rem 0;
    background-color: #fff;
    @include flexLayout(nowrap, row);
    .ext-section {
        width: 20%;
        @include flexLayout(nowrap, column);
        font-size: 0.12rem;
        color: #999;
        svg {
            width: 0.25rem;
            height: 0.25rem;
        }
    }
}
.order-info-zone {
    margin: 0.05rem 0;
    background-color: #fff;
    .order-title-section {
        height: 0.45rem;
        line-height: 0.45rem;
        position: relative;
        font-size: 0.16rem;
        border-bottom: 1px solid #e5e5e5;
        padding: 0 0.12rem;
    }
    .order-info-section {
        font-size: 0.12rem;
        color: #999;
        height: 1.41rem;
        @include flexLayout(wrap, row, space-between);
        .order-type-section {
            width: 20%;
            @include flexLayout(nowrap, column);
            svg {
                width: 0.25rem;
                height: 0.25rem;
            }
        }
    }
}
.member-binding-zone {
    background-color: #fff;
    height: 0.46rem;
    text-align: center;
    line-height: 0.46rem;
}
.fix-mui-content-no-scroll {
    height: 0.5rem;
}
svg {
    color: #999;
}
</style>
