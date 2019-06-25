<template>
    <section>
        <van-tabbar v-model="active" fixed="fixed" :active-color="color">
            <van-tabbar-item
                v-for="(item,index) in tabs"
                :key="index"
                :id="item.id"
                :to="item.target"
                class="tab-icon-list"
            >
                <div class="tab-icon-item">
                    <div class="tab-icon">
                        <svg-icon :icon-class="item.icon"/>
                    </div>
                    <span class="tab-icon-name">{{item.name}}</span>
                </div>
            </van-tabbar-item>
        </van-tabbar>
    </section>
</template>

<script>
export default {
    name: "FootbarTwo",
    data() {
        return {
            active: 0,
            fixed: true,
            color: "#01CEAD",
            tabs: [
                {
                    id: 0,
                    name: "首页",
                    icon: "home",
                    target: "/distribute/tmp1"
                },
                {
                    id: 1,
                    name: "店铺管理",
                    icon: "home",
                    target: "/distribute/store"
                },
                {
                    id: 2,
                    name: "购物车",
                    icon: "cart",
                    target: "/distribute/cart"
                },
                {
                    id: 3,
                    name: "客服",
                    icon: "cart",
                    target: "/cart"
                },
                {
                    id: 4,
                    name: "我的",
                    icon: "profile",
                    target: "/distribute/center"
                }
            ]
        };
    },
    methods: {
        activeTabBar() {
            let routePath = this.$route.path;
            let routeActive = this.active;
            this.tabs.some(function(item, index) {
                if (routePath === item.target) {
                    routeActive = item.id;
                }
            });
            this.active = routeActive;
        }
    },
    watch: {
        $route: "activeTabBar"
    },
    created() {
        this.activeTabBar();
    }
};
</script>
<style lang="scss" scoped>
.tab-icon-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #5f5f5f;
    margin-bottom: 0.06rem;
    .tab-icon-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .tab-icon {
            font-size: 0.22rem;
        }
        .tab-icon-name {
            font-size: 0.117rem;
        }
    }
}
.van-tabbar-item--active {
    color: #eb270d !important;
}
</style>
