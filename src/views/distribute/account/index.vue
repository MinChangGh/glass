<template>
  <div class="mui-content">
    <ul class="collection">
      <li class="collection-item first">
        <label>开户人姓名</label>
        <input v-model="name"/>
      </li>
      <li class="collection-item">
        <label>支付宝账号</label>
        <input v-model="account"/>
      </li>
    </ul>
    <div class="change">
      <div class="change-btn" @click="change">修改支付宝账号</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:"",
      account:""
    }
  },
  methods: {
    change(){
      console.log('修改支付宝号')
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.mui-content{
  height: 100vh;
  padding: 15px 16px;
}
.collection{
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  margin: 0 auto;
  &-item{
    @include flexLayout(nowrap, row,center,center);
    color: #666666;
    font-size: 14px;
    padding: 10px 0;
    label{
      width: 90px;
    }
    &.first{
      margin-bottom: 5px;
      border-bottom: 1px solid #F2F2F2;
    }
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
