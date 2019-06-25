<template>
    <div class="app-wrapper">
        <headbar v-if="headTabOne" class="headbar-container"></headbar>
        <headbar v-else-if="headTabTwo" class="headbar-container"></headbar>
        <headbar v-else-if="headTabThree" class="headbar-container"></headbar>
        <div :class="['main-container',footTabCss]" id="app-main-container">
            <app-main></app-main>
        </div>
        <footbarOne v-if="footTabOne" class="footbar-container"></footbarOne>
        <footbarTwo v-else-if="footTabTwo" class="footbar-container"></footbarTwo>
        <footbar v-else-if="footTabThree" class="footbar-container"></footbar>
    </div>
</template>

<script>
import { Headbar, AppMain, FootbarOne, FootbarTwo } from "./components/index";
export default {
    name: "Layout",
    data() {
        return {
            footTabOne: false,
            footTabTwo: false,
            footTabThree: false,
            headTabOne: false,
            headTabTwo: false,
            headTabThree: false,
            footTabCss: "app-main"
        };
    },
    methods: {
        renderTabBar() {
            let footTab = this.$route.meta.footTab;
            if (footTab == "footTabOne") {
                this.footTabOne = true;
                this.footTabTwo = this.footTabThree = false;
            } else if (footTab == "footTabTwo") {
                this.footTabTwo = true;
                this.footTabOne = this.footTabThree = false;
            } else if (footTab == "footTabThree") {
                this.footTabThree = true;
                this.footTabOne = this.footTabTwo = false;
            } else {
                this.footTabOne = this.footTabTwo = this.footTabThree = false;
            }
            let headTab = this.$route.meta.headTab;
            if (headTab == "headTabOne") {
                this.headTabOne = true;
                this.headTabTwo = this.headTabThree = false;
            } else if (headTab == "headTabTwo") {
                this.headTabTwo = true;
                this.headTabOne = this.headTabThree = false;
            } else if (headTab == "headTabThree") {
                this.headTabThree = true;
                this.headTabOne = this.headTabTwo = false;
            } else {
                this.headTabOne = this.headTabTwo = this.headTabThree = false;
            }
            this.renderTabCss(this.$route.meta);
        },
        renderTabCss() {
            let css = this.$route.meta.footTabCss;
            if (css) {
                this.footTabCss = css;
            } else {
                this.footTabCss = "app-main";
            }
        }
    },
    created() {
        let footTab = this.$route.meta.footTab;
        if (footTab == "footTabOne") {
            this.footTabOne = true;
            this.footTabTwo = this.footTabThree = false;
        } else if (footTab == "footTabTwo") {
            this.footTabTwo = true;
            this.footTabOne = this.footTabThree = false;
        } else if (footTab == "footTabThree") {
            this.footTabThree = true;
            this.footTabOne = this.footTabTwo = false;
        }
        let headTab = this.$route.meta.headTab;
        if (headTab == "headTabOne") {
            this.headTabOne = true;
            this.headTabTwo = this.headTabThree = false;
        } else if (headTab == "headTabTwo") {
            this.headTabTwo = true;
            this.headTabOne = this.headTabThree = false;
        } else if (headTab == "headTabThree") {
            this.headTabThree = true;
            this.headTabOne = this.headTabTwo = false;
        }
    },
    mounted() {},
    watch: {
        $route() {
            this.renderTabBar();
        }
    },
    components: {
        Headbar,
        AppMain,
        FootbarOne,
        FootbarTwo
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
}
.app-main {
    min-height: 100vh;
    background-color: #fff;
    div {
        height: 100vh;
    }
}
.app-main-no-padding {
    min-height: 100vh;
    background-color: #fff;
}
</style>
