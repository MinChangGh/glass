<template>
    <div class="container">
        <select-brands class="brands" @confirmFunc="next"></select-brands>
    </div>
</template>
<script>
import selectBrands from "@/views/distribute/tmpEdit/selectBrands.vue";
export default {
    name: "distribute-shop-selectpart",
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        next() {
            this.$router.push("/distribute/shop/selecttmp");
        }
    },
    components: {
        selectBrands
    },
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    .brands {
        height: calc(100vh - 0.45rem);
        /deep/ .foot-section {
            .confirm {
                background-color: #00acff;
            }
        }
    }
}
</style>
