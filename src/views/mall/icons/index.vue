<template>
    <div class="icons-container">
        <div class="icons-wrapper">
            <div
                class="icon-item"
                v-for="item of iconsMap"
                :key="item"
                @click="handleClipboard(generateIconCode(item),$event)"
            >
                <svg-icon :icon-class="item"/>
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import icons from "@/icons/generateIconsView";
import clipboard from "@/utils/clipboard";

export default {
    name: "icons",
    data() {
        return {
            iconsMap: []
        };
    },
    mounted() {
        const iconsMap = icons.state.iconsMap.map(i => {
            return i.default.id.split("-")[1];
        });
        this.iconsMap = iconsMap;
    },
    methods: {
        generateIconCode(symbol) {
            return `<svg-icon icon-class="${symbol}" />`;
        },
        handleClipboard(text, event) {
            clipboard(text, event);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/mixin.scss";
.icons-container {
    background-color: #fff;
    height: calc(100vh - 0.44rem);
    .icons-wrapper {
        @include flexLayout(wrap, row, space-between);
        width: 100%;
        .icon-item {
            @include flexLayout(wrap, column);
            text-align: center;
            color: #24292e;
            cursor: pointer;
            // overflow: hidden;
            width: 25%;
            height: 100%;
            padding: 10px 0;
            border: 1px solid #eee;
        }
        span {
            display: block;
            font-size: 13px;
            margin-top: 5px;
        }
    }
}
</style>
