<template>
  <div class="mui-content">
    <div class="refund" @click="goodsDetail()">
      <div class="refund-info border">
        <div class="refund-info-date">
          2019-03-09
        </div>
        <div class="refund-info-status red">
          已退款
        </div>
      </div>
      <div class="refund-detail">
        <div class="refund-detail-img">
          <img src="http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY">
        </div>
        <div class="refund-detail-intro">
            <div class="refund-detail-intro-title">标题</div>
            <div class='refund-detail-intro-desc'>
              球镜:-775;分类:隐形眼镜;品牌:海昌;品种:炫彩日抛一片装;
            </div>
            <div class="refund-detail-intro-price">
              <div class="red">￥0.10</div>
              <div class='status'>x1</div>
            </div>
        </div>
      </div>
    </div>
    <div class="common reason">
      <div class="reason-title">
        <div>退货原因</div>
        <div @click="reasons">请选择<svg-icon icon-class="rightArrow" /></div>
      </div>
      <input class="reason-intro" v-model="reason"/>
      <van-actionsheet
        v-model="select"
        :actions="menusList"
        @select="onSelect"
      />
    </div>
    <div class="common detail">
      <div class="detail-type">退款金额：</div>
      <div class="detail-money">￥85.00元（含发货邮费0.00元）</div>
    </div>
    <div class="common detail">
      <div class="detail-type">退款说明：</div>
      <div class="detail-intro">
        <input type="text" class="mui-input-clear desc">
      </div>
    </div>
    <div class='common upload'>
      <div class='upload-title'>上传凭证</div>
      <div class='upload-intro'>
        <div class='imgCommon upload-intro-imgList' v-for="(src, index) in imgList" :key="index">
          <img :src="src" class='voucher-img'/>
          <div @click="deleted(index)" class="upload-intro-imgList-delete red">
            <svg-icon icon-class="round_close" />
          </div>
        </div>
        <van-uploader class="imgCommon upload-intro-btn" :after-read="onRead" v-if="imgList.length<3">
          <svg-icon icon-class="album"/>
          <div>添加图片</div>
          <div>（最多3张）</div>
        </van-uploader>
      </div>
    </div>
    <div class="submit" @click="submit">
      提交
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList:["http://img.unionglasses.com/Fn_DCzUztkDflWTL31xHVBCwB-BY",'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png'],
      reason:'多拍',
      select:false,
      menusList:[
        {
          name: '多拍',
        },
        {
          name: '错拍',
        },
        {
          name: '不想要',
        },
      ],
      uid:10
    };
  },
  mounted() {

  },
  methods: {
    reasons(){
      this.select = !this.select;
    },
    deleted(index){
      this.imgList.splice(index,1);
    },
    onRead(file) {
      console.log(file)
    },
    onSelect(item){
      this.reasons();
      this.reason = item.name;
    },
    submit(){
      this.$store.commit('setStatus','refund')
      this.$router.push({
        path:'/distribute/myOrder/refund',
        query: {
          id: this.uid,
          status: 'refund'
        }
      })
    },
    goodsDetail(){
      this.$router.push({
        path:'/detail'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
  font-size: 14px;
}
.van-actionsheet__item{
  font-size: 14px;
}
.common{
  padding: 15px 12px;
  margin: 5px 0;
  background: #ffffff;
  font-size: 14px;
}
.imgCommon{
  width: 82px;
  height: 82px;
  margin: 0 9px;
}
.border{
  border-bottom: 1px solid #c8c7cc;
}
.red{
  color:rgb(253, 39, 13);
}
.status{
  font-size: 14px;
}
.refund{
  background-color: #ffffff;
  &-info{
    padding: 6px 12px;
    @include flexLayout(nowrap, row, space-between,center);
    font-size: 14px;
  }
  &-detail{
    @include flexLayout(nowrap, row, space-between,center);
    padding: 10px 12px;
    &-img{
      width: 80px;
      height: 80px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-intro{
      flex: 1;
      margin-left: 12px;
      @include flexLayout(nowrap, column, flex-start,flex-start);
      font-size: 14px;
      &-desc{
        @include flexLayout(wrnowrapap, row, space-between,center);
        color: #8f8f94;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //需要控制的文本行数
        overflow: hidden;
      }
      &-price{
        width: 100%;
        font-size: 17px;
        @include flexLayout(nowrap, row, space-between,center);
        margin-top: 5px;
      }
    }
  }
}
.reason{
  &-title{
    @include flexLayout(nowrap, row, space-between, center);
  }
  &-intro{
    color: #8f8f94;
    border: 0;
    margin: 5px 0;
  }
}
.detail{
  @include flexLayout(nowrap, row, flex-start, center);
  &-money{
    color: rgb(253, 39, 13);
  }
  &-intro{
    height: 30px;
    overflow: hidden;
    .desc{
      height: 100%;
      border:0;
    }
  }
}
.upload{
  &-title{
    font-size: 16px;
    margin: 5px 0;
  }
  &-intro{
    @include flexLayout(nowrap, row, flex-start, center);
    margin: 10px 0;
    &-imgList{
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      &-delete{
        position: absolute;
        top: -10px;
        right: -7px;
      }
    }
    &-btn{
      border: 1px dashed #e5e5e5;
      color: rgb(152, 152, 152);
      @include flexLayout(nowrap, column, center, center);
    }
  }
}
.submit{
  border: 1px solid #dd524d;
  background-color: #dd524d;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 38px;
  padding: 6px 0;
  text-align: center;
  font-size: 16px;
}
</style>

