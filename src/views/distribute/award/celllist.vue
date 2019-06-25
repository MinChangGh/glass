<template>
  <div class="income">
    <div class="mainbox" v-for="(item,index) in list">
      <div class="left">
        <p class="title">{{item.title}}提现</p>
        <p class="date">{{$$.parseTime(item.time,'{y}-{m}-{d}')}}</p>
      </div>
      <div class="money">{{item.money}}元</div>
    </div>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
      
      }
    },
    props: {
      list:Array
    },
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
  .income {
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    .mainbox{
      height:60px;
      background:#fff;
      display:flex;
      justify-content:space-between;
      padding:0px 12px;
      position: relative;
      @include onepx();
      .left{
        .title{
          color: #333333;
          line-height: 34px;
        }
        .date{
          color: #999999;
          line-height: 26px;
        }
      }
      .money{
        color: #FF5B8D;
        line-height: 60px;
      }
    }
  }
</style>
