<template>
  <div class="mui-content">
    <div class="name">
      <input v-model="name"/>
    </div>
    <div class="change">
      <div class="change-btn" @click="save">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:"peng",
    }
  },
  methods: {
    save(){
      console.log('保存店铺名称');
      this.$router.replace('/distribute/store/info')
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
}
.name{
  padding: 15px 12px;
  background: #fff;
  input{
    width: 100%;
    color: #333;
    font-size: 14px;
  }
}
.change{
  width: 233px;
  height: 44px;
  margin: 15px auto;
  &-btn{
    color: #fff;
    font-size: 14px;
    width: 100%;
    height: 100%;
    line-height: 44px;
    text-align: center;
    border: 0;
    border-radius: 22px;
    background: url('https://dev.unionglasses.com/ug/distribute/img/bg_btn.png');
  }
}
</style>
