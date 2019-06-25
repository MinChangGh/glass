<template>
    <div class="mui-content">
        <div class="mui-card">
            <div class="mui-card-content div-padding avatar-container flex-between-layout">
                <div>头像</div>
                <div class="avatar-img">
                    <img :src="userInfo.avatar" alt>
                </div>
            </div>
            <div class="mui-card-footer div-padding mui-navigate-right" @tap="qbcode">我的二维码</div>
        </div>
        <div class="base-info">
            <span>基础资料(只能修改一次)</span>
        </div>
        <div class="mui-card">
            <div
                @tap="editName"
                v-if="!isEditName"
                class="mui-card-content div-padding mui-navigate-right flex-between-layout mui-card-border-bottom"
            >
                <div>名字</div>
                <div class="arrow-padding">{{userInfo.name}}</div>
            </div>
            <div
                v-else
                class="mui-card-content div-padding flex-between-layout mui-card-border-bottom"
            >
                <div>名字</div>
                <div>{{userInfo.name}}</div>
            </div>
            <div
                v-if="!isEditSex"
                class="mui-card-content div-padding mui-navigate-right flex-between-layout sex-layout"
            >
                <popup-radio title="性别" :options="sexOptions" v-model="userInfo.sex"></popup-radio>
            </div>
            <div v-else class="mui-card-content div-padding flex-between-layout">
                <div>性别</div>
                <div>{{userInfo.sex}}</div>
            </div>
            <div
                v-show="!isEditBirthday"
                class="mui-card-footer div-padding mui-navigate-right flex-between-layout birthday-layout"
            >
                <datetime
                    title="生日"
                    v-model="userInfo.birthday"
                    value-text-align="right"
                    @on-confirm="onBirthdayConfirm"
                    :min-year="minYear"
                    :max-year="maxYear"
                ></datetime>
            </div>
            <div v-show="isEditBirthday" class="mui-card-footer div-padding flex-between-layout">
                <div>生日</div>
                <div>{{userInfo.birthday}}</div>
            </div>
        </div>
        <div class="ext-info">
            <span>其他资料</span>
        </div>
        <div class="mui-card">
            <div class="mui-card-header div-padding flex-between-layout">
                <div>手机号</div>
                <div>{{userInfo.phone}}</div>
            </div>
            <div
                class="mui-card-content div-padding flex-between-layout mui-navigate-right"
                @tap="emailEdit"
            >
                <div>邮箱</div>
                <div class="arrow-padding">{{userInfo.email}}</div>
            </div>
            <div class="mui-card-footer div-padding flex-between-layout mui-navigate-right">
                <x-address
                    class="address-layout"
                    :title="title"
                    v-model="userInfo.zone"
                    :list="addressData"
                    placeholder="请选择城市"
                    inline-desc
                    :show.sync="showAddress"
                    :hide-district="hideDistrict"
                    :raw-value="rawValue"
                ></x-address>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header div-padding flex-between-layout">
                <div>入会时间</div>
                <div>{{userInfo.joinTime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    XAddress,
    ChinaAddressV4Data,
    Value2nameFilter as value2name,
    Datetime,
    PopupRadio
} from "vux";
import store from "@/store";
export default {
    data() {
        return {
            userInfo: {
                uid: store.getters.userInfo.uid,
                avatar: store.getters.userInfo.avatar,
                name: store.getters.userInfo.name,
                sex: store.getters.userInfo.sex,
                birthday: store.getters.userInfo.birthday,
                phone: store.getters.userInfo.phone,
                email: store.getters.userInfo.email,
                zone: store.getters.userInfo.zone,
                joinTime: store.getters.userInfo.joinTime
            },
            title: "所在城市",
            addressData: ChinaAddressV4Data,
            showAddress: false,
            hideDistrict: true,
            rawValue: false,
            isEditName: false,
            isEditSex: false,
            isEditBirthday: false,
            sexOptions: ["男", "女"],
            minYear: 1900,
            maxYear: new Date().getFullYear()
        };
    },
    created() {
        console.log(this.userInfo);
    },
    mounted() {},
    methods: {
        qbcode: function() {
            this.$router.push("/center/qbcode");
        },
        emailEdit: function() {
            this.$router.push("/center/emailedit");
        },
        editName: function() {
            this.$router.push("/center/nameedit");
        },
        getName(value) {
            return value2name(value, ChinaAddressV4Data);
        },
        onBirthdayConfirm(birthday) {
            this.$store
                .dispatch("SetUserBirthday", birthday)
                .then(() => {
                    this.isEditBirthday = true;
                })
                .catch(() => {
                    this.$$.msgInf("更新失败");
                });
        }
    },
    components: {
        XAddress,
        Datetime,
        PopupRadio
    },
    watch: {
        "userInfo.zone": function(newVal, oldVal) {
            this.$store
                .dispatch("SetUserZone", newVal)
                .then(() => {})
                .catch(() => {
                    this.$$.msgInf("更新失败");
                });
        },
        "userInfo.sex": function(newVal, oldVal) {
            this.$store
                .dispatch("SetUserSex", newVal)
                .then(() => {
                    this.isEditSex = true;
                })
                .catch(() => {
                    this.$$.msgInf("更新失败");
                });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
    height: 100vh;
    .mui-card {
        .flex-between-layout {
            @include flexLayout(nowrap, row, space-between);
            div {
                &:last-child {
                    font-size: 0.14rem;
                }
            }
        }
        &:first-child {
            margin-top: 0;
            .avatar-container {
                height: 0.73rem;
                .avatar-img {
                    border: 0;
                    height: 0.4rem;
                    width: 0.4rem;
                    border-radius: 50%;
                    background-color: #fff;
                    overflow: hidden;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
        &:last-child {
            margin-top: 0.1rem;
        }
    }
}
.mui-card {
    margin: 0;
    font-size: 0.16rem;
    font-weight: normal;
    .div-padding {
        padding: 0.15rem 0.12rem;
        .arrow-padding {
            padding-right: 0.2rem;
        }
    }
    .mui-card-content {
        font-size: 0.16rem;
        height: 0.52rem;
    }
    .mui-card-footer {
        color: black;
        height: 0.52rem;
    }
}
.base-info,
.ext-info {
    height: 0.4rem;
    background-color: transparent;
    margin: 0.05rem 0;
    span {
        display: inline-block;
        font-size: 0.14rem;
        color: #8f8f94;
        margin: 0.2rem 0.15rem 0.05rem;
    }
}
.mui-card-border-bottom {
    border-bottom: 1px solid #e5e5e5;
}
.address-layout {
    width: 100%;
    /deep/ .weui-cell {
        padding: 0;
        @include flexLayout(nowrap, row, space-between);
        .vux-cell-primary {
            .vux-popup-picker-select {
                @include flexLayout(nowrap, row, flex-end);
                padding-right: 0.2rem;
            }
        }
        .weui-cell__hd {
            font-size: 0.16rem;
        }
    }
}
.birthday-layout {
    /deep/ .weui-cell {
        width: 100%;
        padding: 0;
        @include flexLayout(nowrap, row, space-between);
        div {
            &:first-child {
                p {
                    margin: 0;
                    font-size: 0.16rem;
                    color: black;
                }
            }
        }
        .weui-cell__ft {
            @include flexLayout(nowrap, row, flex-end);
            padding-right: 0.2rem;
            span {
                font-size: 0.14rem;
                color: black;
            }
        }
    }
}
.sex-layout {
    /deep/ .weui-cell {
        width: 100%;
        padding: 0;
        @include flexLayout(nowrap, row, space-between);
        .vux-cell-bd {
            p {
                margin: 0;
                .vux-label {
                    margin: 0;
                    font-size: 0.16rem;
                    color: black;
                }
            }
        }
        .weui-cell__ft {
            @include flexLayout(nowrap, row, flex-end);
            padding-right: 0.2rem;
            span {
                font-size: 0.14rem;
                color: black;
            }
        }
    }
}
.weui-cell_access .weui-cell__ft:after {
    content: "" !important;
}
</style>