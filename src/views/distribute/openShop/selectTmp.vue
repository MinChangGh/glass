<template>
    <div class="container">
        <div class="tmp-list">
            <div class="tmp-item">
                <img
                    src="~@/assets/distribute/images/shop/template_1.png"
                    alt
                    :class="[tmpid==1?'pick':'']"
                    @click="selectTmp(1)"
                >
            </div>
            <div class="tmp-item">
                <img
                    src="~@/assets/distribute/images/shop/template_2.png"
                    alt
                    :class="[tmpid==2?'pick':'']"
                    @click="selectTmp(2)"
                >
            </div>
        </div>
        <div class="foot">
            <div class="ok-btn" @click="next">下一步</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "distribute-shop-selecttmp",
    data() {
        return {
            show: true,
            tmpid: 0
        };
    },
    created() {},
    mounted() {},
    methods: {
        selectTmp(id) {
            this.tmpid = id;
        },
        next() {
            switch (this.tmpid) {
                case 1:
                    this.$router.push("/distribute/shop/open");
                    break;
                case 2:
                    this.$router.push("/distribute/shop/open");
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
    background-color: #f6f6f6;
    height: 100vh;
    .tmp-list {
        background-color: #fff;
        padding: 0.2rem 0;
        @include flexLayout(nowrap, row);
        .tmp-item {
            width: 50%;
            border: 0;
            &:first-child {
                padding: 0 0.12rem 0.1rem 0.3rem;
            }
            &:last-child {
                padding: 0 0.3rem 0.1rem 0.12rem;
            }
            img {
                width: 100%;
                border: 1px solid transparent;
                border-radius: 0.1rem;
            }
        }
    }
}
.foot {
    @include flexLayout();
    position: fixed;
    width: 100%;
    margin: 0.15rem;
    bottom: 0;
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
.pick {
    border: 1px solid #ff4081 !important;
}
</style>
