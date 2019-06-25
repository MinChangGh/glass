<template>
    <div class="container" id="open-container">
        <div class="shop-banner">
            <img src="~@/assets/distribute/images/shop/shop.png" alt>
        </div>
        <div class="shop-info">
            <div class="mui-input-row shop-name">
                <span class="shop-name-left">店铺名称：</span>
                <div class="mui-input-row">
                    <input
                        type="text"
                        v-model="shopName"
                        class="mui-input-clear"
                        placeholder="请输入店铺名称"
                    >
                </div>
                <span></span>
            </div>
            <div class="invite">
                <span class="invite-left">邀请人：</span>
                <div class="invite-right">mei(请核对)</div>
                <span></span>
            </div>
        </div>
        <div class="foot">
            <div class="ok-btn" @click="next">马上开店</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "distribute-shop-open",
    data() {
        return {
            show: true,
            tmpid: this.$route.query.tmpid,
            shopName: ""
        };
    },
    created() {},
    mounted() {},
    methods: {
        next() {
            if (this.shopName == "") {
                this.$$.msgInf("请输入店铺名称");
                return;
            }
            this.tmpid = 1;
            switch (this.tmpid) {
                case 1:
                    this.$router.push("/distribute/tmp1");
                    break;
                case 2:
                    this.$router.push("/distribute/tmp2");
                    break;
            }
        }
    },
    components: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    height: 100vh;
    .shop-banner {
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
    .shop-info {
        width: 100%;
        text-align: center;
        padding-top: 0.8rem;
        font-size: 0.14rem;
        color: #333;
        @include flexLayout(norwap, column, center);
        & > div {
            width: 100%;
            padding-bottom: 0.15rem;
            @include flexLayout(norwap, row, flex-start);
            & > span {
                &:first-child {
                    flex-basis: 40%;
                    text-align: right;
                }
                &:last-child {
                    flex-basis: 10%;
                }
            }
            & > div {
                flex-basis: 50%;
                text-align: left;
            }
        }
        .shop-name-left {
            font-size: 0.16rem;
        }
        .mui-input-clear {
            margin-bottom: 0;
            padding: 0;
            text-align: left;
            border-bottom: 1px solid #ccc !important;
            height: auto;
        }
    }
}
.foot {
    @include flexLayout(norwap, row, center);
    position: fixed;
    width: 100%;
    margin: 0.15rem 0;
    bottom: 25%;
    left: 0;
    right: 0;
    .ok-btn {
        color: #f6f6f6;
        font-size: 0.14rem;
        height: 0.44rem;
        width: 2.33rem;
        text-align: center;
        line-height: 0.44rem;
        border: 0;
        border-radius: 0.22rem;
        background: url("~@/assets/distribute/images/shop/bg_btn.png");
        background-size: contain;
    }
}
</style>
<style lang="scss">
#open-container {
    .mui-icon-clear {
        top: 0 !important;
    }
}
</style>
