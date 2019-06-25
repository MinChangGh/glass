<template>
    <div class="container">
        <search
            @onChange="onChange"
            @resultClick="resultClick"
            @onCancel="onCancel"
            :searchResults="results"
            :searchValue="searchValue"
        ></search>
    </div>
</template>

<script>
import search from "@/components/searchInput.vue";
export default {
    name: "home",
    data() {
        return {
            linkTo: this.linkto ? this.linkto : this.$route.query.linkto,
            searchValue: this.$route.query.search
                ? this.$route.query.search
                : "",
            results: []
        };
    },
    created() {
        this.results = this.getResult(this.searchValue);
    },
    methods: {
        onChange(val) {
            this.results = this.getResult(val);
        },
        onCancel() {
            this.$router.replace({
                path: this.linkTo
            });
        },
        getResult(val) {
            return !val
                ? []
                : [{ title: "豪雅", other: "" }, { title: "精工", other: "" }];
        },
        resultClick(val) {
            this.$router.push({
                path: this.linkTo,
                query: {
                    search: val.title
                }
            });
        }
    },
    components: {
        search
    },
    props: ["linkto"]
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
    background-color: #f6f6f6;
    height: calc(100vh);
}
</style>
