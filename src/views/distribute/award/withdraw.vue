<template>
  <div class="withdraw">
	<div class="wrapper">
	<p class="title">提现金额</p>
	<p class="input-box"> ￥<input type="number"  value="" placeholder="0.00" v-model="val.toFixed(2)"/></p>
	<p class="tips">余额 {{money.toFixed(2)}}，<span @click="val= money">全部提现</span></p>
	<div class="btn">提现</div>
	</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val: 0.00,
        money:20
      }
    },
    props: {},
    components: {
    
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {},
    beforeDestroy() {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
.withdraw{
  width: 100%;
  height: 100%;
  padding-top: 20px;
  background: #f6f6f6;
  .wrapper{
  	width: 90%;
  	padding: 15px;
  	background: #FFFFFF;
  	border-radius: 6px;
  	margin: 0 auto;
  	.title{
  		font-size: 14px;
  		color: #333333;
  	}
  	.input-box{
  		margin-top: 10px;
  		position: relative;
  		font-size: 24px;
  		@include onepx();
  		input {
  			width: 85%;
  			font-size: 24px;
  		}
  	}
  	.tips{
  		margin-top: 10px;
  		span{
  			color:#007AFF;
  		}
  	}
  	.btn{
  		width: 230px;
  		line-height: 44px;
  		color: #fff;
  		font-size: 15px;
  		border-radius: 22px;
  		background: linear-gradient(to right ,#00b0ff,#008bff);
  		text-align-last: center;
  		margin: 20px auto;
  	}
  }		
}

</style>
