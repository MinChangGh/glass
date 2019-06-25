<template lang="html">
    <div class="refreshMoudle" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translate3d(0,' + diff + 'px, 0)'}">
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <div class="down-tip" v-if="dropDownState==1">
            <img v-if="dropDownStateText.downImg" class="down-tip-img" src="~@/assets/mall/images/search/empty-search.png">
            <span class="down-tip-text">{{dropDownStateText.downTxt}}</span>
          </div>
          <div class="refresh-tip" v-if="dropDownState==2">
            <img v-if="dropDownStateText.refreshImg" class="refresh-tip-img" src="~@/assets/mall/images/search/empty-search.png">
            <span class="refresh-tip-text">{{dropDownStateText.refreshTxt}}</span>
          </div>
        </slot>
      </header>
      <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        onRefresh: {
            type: Function,
            required: false
        }
    },
    data() {
        return {
            defaultOffset: 50, // 默认高度, 相应的修改.releshMoudle的margin-top和.down-tip, .up-tip, .refresh-tip的height
            diff: 0,
            scrollIsToTop: 0,
            startY: 0,
            isDropDown: false, // 是否下拉
            isRefreshing: false, // 是否正在刷新
            dropDownState: 1, // 显示1:下拉刷新, 2:刷新中...
            dropDownStateText: {
                downTxt: "下拉刷新",
                downImg: "",
                refreshTxt: "刷新中...",
                refreshImg: "refresh.gif"
            }
        };
    },
    created() {
        if (document.querySelector(".down-tip")) {
            // 获取不同手机的物理像素（dpr）,以便适配rem
            this.defaultOffset =
                document.querySelector(".down-tip").clientHeight ||
                this.defaultOffset;
        }
    },
    methods: {
        touchStart(e) {
            this.startY = e.targetTouches[0].pageY;
        },
        touchMove(e) {
            //pageYOffset：属于window对象，IE9+ 、firefox、chrome，opera均支持该方式获取页面滚动高度值，并且会忽略Doctype定义规则。window.pageYOffset;
            //scrollY: 属于window对象，firefox、chrome，opera支持，IE不支持，忽略Doctype规则。window.scrollY;
            //页面如果未定义doctype文档头，所有的浏览器都支持document.body.scrollTop属性获取滚动高度。document.body.scrollTop;
            this.scrollIsToTop =
                document.documentElement.scrollTop ||
                window.pageYOffset ||
                document.body.scrollTop;
            //未到达顶部
            if (this.scrollIsToTop != 0) {
                return false;
            }
            if (e.targetTouches[0].pageY > this.startY) {
                //下拉
                this.isDropDown = true;
                if (!this.isRefreshing) {
                    //拉动的距离
                    this.diff = e.targetTouches[0].pageY - this.startY;
                    if (this.diff >= this.defaultOffset) {
                        this.dropDownState = 2;
                        e.preventDefault();
                    } else {
                        this.dropDownState = 1;
                        e.preventDefault();
                    }
                }
            } else {
                this.isDropDown = false;
                this.dropDownState = 1;
            }
        },
        touchEnd(e) {
            if (this.isDropDown && !this.isRefreshing) {
                if (this.diff >= this.defaultOffset) {
                    // do refresh
                    this.refresh();
                    this.isRefreshing = true;
                    console.log(`do refresh`);
                } else {
                    // cancel refresh
                    this.isRefreshing = false;
                    this.isDropDown = false;
                    this.dropDownState = 1;
                    this.diff = 0;
                }
            }
        },
        refresh() {
            this.dropDownState = 2;
            this.diff = this.defaultOffset;
            setTimeout(() => {
                this.refreshDone();
            }, 1000);
        },
        refreshDone() {
            this.isRefreshing = false;
            this.isDropDown = false;
            this.dropDownState = 1;
            this.diff = 0;
        }
    }
};
</script>

<style scoped>
.refreshMoudle {
    width: 100%;
    height: 100%;
    margin-top: -0.5rem;
    -webkit-overflow-scrolling: touch; /* ios5+ */
    /* height: 100vh; */
    background-color: red;
    transition: all 0.2s;
}
.pull-refresh {
    width: 100%;
    color: #999;
    transition-duration: 500ms;
}
.refreshMoudle .down-tip,
.up-tip,
.refresh-tip {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.5rem;
}
.refreshMoudle .down-tip-img,
.up-tip-img,
.refresh-tip-img {
    width: 0.35rem;
    height: 0.35rem;
    margin-right: 0.05rem;
}
</style>