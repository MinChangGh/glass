<template>
  <div class="mui-content">
    <div class="img-box">
      <img src="https://dev.unionglasses.com/ug/mall/assest/images/bg-evaluate.png" />
    </div>
    <div class="mall-cont-txt">已评价，感觉您的宝贵建议</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      uid:10,
      type: this.$route.query.type,
    }
  },
  methods: {

  },
  beforeRouteLeave (to, from, next) {
    if(to.name=='evaluate' && from.name=='success'){
      if(this.type == 'mall'){
        next({
          path: '/myOrder',
          query:{
            id: this.uid,
            status: 'evaluate',
          }
        })
      }else{
        next({
          path: '/distribute/center',
          query:{
            id: this.uid,
          }
        })
      }
    }else{
      next()
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
  .mui-content{
    height: 100vh;
  }
  .img-box {
    text-align: center;
    padding: 25px 0px;
  }
  .mall-cont-txt {
    text-align: center;
    font-size: 14px;
  }
</style>

