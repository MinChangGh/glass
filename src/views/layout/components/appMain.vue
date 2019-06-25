<template>
    <div>
        <!-- <transition mode="out-in">
            <router-view></router-view>
        </transition>-->
        <keep-alive :include="cachedViews">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "AppMain",
    computed: {
        cachedViews() {
            let views = this.$store.getters.cachedViews;
            return views ? views.map(v => v.name) : [];
        }
    },
    methods: {
        addCachedViews() {
            if (!this.$route.name) {
                return false;
            }
            this.$store.dispatch("addCachedViews", this.$route);
        }
    },
    created: function() {
        this.addCachedViews();
    },
    watch: {
        $route() {
            this.addCachedViews();
        }
    }
};
</script>
<style lang="scss" scoped>
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    // position: absolute;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease;
}
</style>
