<template>
    <section>
        <van-list
            class="data-list"
            v-model="settingData.$loading"
            :finished="settingData.$finished"
            :finishedText="settingData.$finishedtext"
            @load="onLoad"
        >
            <div
                :class="['data-item',settingData.$param.cond ? settingData.$param.css : '']"
                v-for="(item,index) in settingData.$list"
                :key="index"
                @tap="doTask(item,settingData.$param)"
            >
                <img :src="item.img_url" alt>
                <slot name="one" :oneData="item"></slot>
                <slot name="two" :twoData="item"></slot>
            </div>
        </van-list>
    </section>
</template>

<script>
export default {
    data() {
        return {
            settingData: {
                $loading: this.loading ? this.loading : false,
                $finished: this.finished ? this.finished : false,
                $finishedtext: this.finishedtext
                    ? this.finishedtext
                    : "没有更多了",
                $list: this.list ? this.list : [],
                $pagi: this.pagi ? this.pagi : 1,
                $limit: this.limit ? this.limit : 10,
                $param: this.param ? this.param : {},
                $useemit: this.useemit ? true : false,
                $closure: this.closure ? this.closure : ""
            }
        };
    },
    created() {},
    methods: {
        onLoad() {
            // 异步更新数据
            if (this.closure) {
                this.closure();
            } else {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.settingData.$list.push(this.settingData.$list[0]);
                    }
                    this.settingData.$loading = false;
                    if (this.settingData.$list.length >= 20) {
                        this.settingData.$finished = true;
                    }
                }, 1000);
            }
        },
        doTask(item, param) {
            if (this.settingData.$useemit) {
                this.$emit("func", item);
            } else {
                let data = this.$$.objectMerge(item, param);
                this.$router.push({ name: this.target, params: data });
            }
        }
    },
    props: [
        "list",
        "pagi",
        "limit",
        "loading",
        "finished",
        "target",
        "param",
        "finishedtext",
        "useemit",
        "closure"
    ],
    watch: {
        list: function(newVal, oldVal) {
            this.settingData.$list = newVal;
        },
        finished: function(newVal, oldVal) {
            this.settingData.$finished = newVal;
        }
    }
};
</script>

<style lang="scss" scoped>
.data-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0.07rem;
    justify-content: space-between;

    .data-item {
        width: 49%;
        border: 0.01rem solid #ccc;
        box-shadow: 0 0 0.08rem #ccc;
        margin: 0.04rem 0;
        padding: 0.02rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 2rem;
        img {
            width: 100%;
            height: 1.72rem;
        }
    }
}
</style>