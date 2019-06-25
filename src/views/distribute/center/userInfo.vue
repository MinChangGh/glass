<template>
    <div class="mui-content">
        <div class="mui-card">
            <div class="content-section avatar-section">
                <div>头像</div>
                <div class="avatar-img">
                    <img :src="userInfo.avatar" alt>
                </div>
            </div>
            <div class="content-section">
                <div>姓名</div>
                <span>{{userInfo.name}}</span>
            </div>
            <div class="content-section">
                <div>微信号</div>
                <span>{{userInfo.openid}}</span>
            </div>
            <div class="content-section">
                <div>手机号</div>
                <span>{{userInfo.phone}}</span>
            </div>
            <div class="content-section address-section" @click="toAdressManager()">
                <div class="mui-navigate-right">
                    <div>地址管理</div>
                    <span></span>
                </div>
            </div>
        </div>
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
                phone: store.getters.userInfo.phone,
                openid: "xdgsdgsg135636sec"
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        toAdressManager() {}
    },
    components: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
    height: 100vh;
    background-color: #f6f6f6;
    .mui-card {
        padding: 0;
        margin: 0;
        box-shadow: none;
        .content-section {
            @include flexLayout(nowrap, row, space-between);
            width: 100%;
            font-size: 0.14rem;
            color: #8f8f94;
            height: 0.4rem;
            padding-right: 0.3rem;
            padding-left: 0.15rem;
            border-bottom: 1px solid #f2f2f2;
        }
        .avatar-section {
            height: 0.7rem;
            .avatar-img {
                height: 0.49rem;
                width: 0.49rem;
                border-radius: 50%;
                overflow: hidden;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .address-section {
            margin: 0;
            position: relative;
        }
    }
}
</style>