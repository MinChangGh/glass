<template>
    <div class="mui-content">
        <div class="title">轮播图</div>
        <div class="main-content">
            <ul class="img-list">
                <li v-for="(src, index) in imgList" :key="index">
                    <span class="title">图一</span>
                    <van-uploader :after-read="afterRead" class="upload-content">
                        <button class="upload-btn">上传</button>
                    </van-uploader>
                </li>
            </ul>
            <p class="prompt">提示：建议上传比例为16：9</p>
        </div>
        <div class="bottom-content">
            <div class="btn-content">
                <button class="next-btn" @click="save()">保存</button>
            </div>
        </div>
    </div>
</template>
<script>
import { getToken, upload } from "@/api/qiniu";
export default {
    name: "distribute-tmpedit-tmp2-swiperedit",
    data() {
        return {
            imgList: [
                {
                    id: 1,
                    img:
                        "http://img.unionglasses.com/FspALAI937jIGdSk2CI4g11lLeV8",
                    href: ""
                },
                {
                    id: 2,
                    img:
                        "http://img.unionglasses.com/Fjd2gx9rQoRbZARxj0xB5VrDCzxM",
                    href: ""
                },
                {
                    id: 3,
                    img:
                        "http://img.unionglasses.com/FqvNXzd_qDgWRpBvzCLyifX7hQKD",
                    href: ""
                }
            ]
        };
    },
    created() {},
    mounted() {},
    methods: {
        afterRead(file) {
            let ext = this.$$.getExt(file.file.name);
            let keyname = ext + "/" + this.$$.uuidv4() + "." + ext;
            let params = {
                cname: file.file.name,
                file: file.file,
                keyname
            };
            getToken().then(function(res) {
                let token = res.uptoken;
                upload("/", token, params).then(response => {
                    console.log(response);
                });
            });
        },
        save() {
            this.$router.push({
                path: "/distribute/tmpedit/tmp2"
            });
        }
    },
    components: {},
    watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content {
    height: calc(100vh - 0.44rem);
    background-color: #f6f6f6;
    & > .title {
        font-size: 0.16rem;
        color: #333;
        padding: 0.13rem 0.15rem;
    }
}
.main-content {
    width: 100%;
    background: #fff;
    padding: 0.15rem 0.15rem 0.05rem;
    .img-list {
        width: 100%;
        li {
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            margin-bottom: 0.15rem;
            @include flexLayout(nowrap);
            .title {
                height: 0.4rem;
                line-height: 0.4rem;
                width: 0.4rem;
                white-space: nowrap;
                font-size: 0.14rem;
                color: #666;
            }
        }
    }
    .prompt {
        width: 100%;
        padding-left: 0.4rem;
        text-align: left;
        font-size: 0.14rem;
        color: #ff990a;
        padding-bottom: 0.1rem;
    }
}
.upload-content {
    flex: 1;
    @include flexLayout(nowrap, row, flex-end);
    width: 90%;
    height: 0.4rem;
    line-height: 0.4rem;
    border: 1px solid #d2d2d2;
    .upload-btn {
        width: 0.5rem;
        height: 0.3rem;
        line-height: 0.16rem;
        margin: 0.05rem 0.05rem 0.05rem 0;
        background: url("~@/assets/distribute/images/tmpEdit/btn_upload.png");
        font-size: 0.12rem;
        color: #fff;
        background-size: cover;
    }
}
.bottom-content {
    background: #f6f6f6;
    height: 0.74rem;
    width: 100%;
    overflow: hidden;
    .btn-content {
        width: 2.33rem;
        height: 0.44rem;
        margin: 0.15rem auto;
        .next-btn {
            color: #fff;
            font-size: 0.14rem;
            width: 100%;
            height: 100%;
            text-align: center;
            border: 0;
            border-radius: 0.22rem;
            background: url("~@/assets/distribute/images/tmpEdit/bg_btn.png");
        }
    }
}
</style>
