<template>
  <div class="award">
    <header>
      <div class="moneyBox">
        <p class="money"><b>{{Math.floor(money.all)}}</b>.<span>{{floatNum}}</span></p>
        <p class="tip">奖金总额 （元）</p>
      </div>

      <div class="info">
        <p>待结算： ￥ {{money.m1.toFixed(2)}}</p>
        <p>提现中：￥ {{money.m2.toFixed(2)}}</p>
      </div>
    </header>
    <cell @click.native="$router.push('/award/withdraw')" title="提现" style="margin-top: 10px"></cell>
    <cell @click.native="$router.push('/award/income')" title="我的收支" style="margin-top: 10px"></cell>
    <cell @click.native="$router.push('/award/withdrawdetail')" title="下线提现明细"></cell>
  </div>
</template>

<script>
  import cell from "@/components/cell.vue"
  export default {
    data() {
      return {
        money:{
          all:12.3,
          m1:45.0,
          m2:56.369
        }
      }
    },
    props: {},
    components: {
      cell
    },
    created() {

    },
    mounted() {

    },
    methods: {
    
    },
    computed: {
      floatNum() {
        let num = this.money.all.toString().split('.')[1]
        if (num.length>1) {
          num = num.substring(0,2)
        } else{
          num = num + 0
        }
        return num
      
      }
    },
    beforeDestroy() {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/variables.scss";
  .award{
    background: #F6F6F6;
    width: 100%;
    height: 100%;
    header{
      position: relative;
      text-align: center;
      height: 200px;
      width: 100%;
      background: url($distributeimg + 'bonus_bg.png')  no-repeat;
      background-size: 100% 100%;
      .moneyBox{
        width: 100%;
        text-align: center;
        position: absolute;
        top:70px;
        .money{
        	color:#FF4081;
          font-size: 30px;
          span{
            font-size: 12px;
            font-weight: bold;
          }
        }
        .tip{
        	color:#FF4081;
        	margin-top: 5px;
          font-size: 14px;
        }
      }

      .info{
        width: 100%;
        position: absolute;
        bottom: 5px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        p{
          width: 50%;
          color: #fff;
        }
      }
    }
  }

</style>
