<template>
  <ul class="msglist">
    <li v-for="(item ,index) in msglist" @click="toChat">
      <p class="imgBox">
        <img :src="item.img">
        <Badge class="dot"></Badge>
      </p>
      <div class="right">
        <p class="up">
          <span class="name">{{item.name}}</span>
          <span class="date">{{$$.parseTime(item.date,'{y}-{m}-{d}') }}</span>
        </p>
        <p class="msg">买卖</p>
      </div>
    </li>
  </ul>
</template>

<script>
  import { Badge } from 'vux'
  export default {
    data() {
      return {
        msglist:[
          {
            img:'https://dev.unionglasses.com/ug/distribute/img/ercode.png',
            date:1556005611,
            msg:'fhasjkhfjkhasjdhfhasjdhfflha fsdfsdf fdsafgdsf',
            name:'系统'
          },
          {
            img: 'https://dev.unionglasses.com/ug/distribute/img/ercode.png',
            date: 1556005611,
            msg: 'fhasjkhfjkhasjdhfhasjdhfflha fsdfsdf',
            name: '系统'
          }
          
        ]
      }
    },
    props: {},
    components: {
      Badge
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
      toChat () {
        this.$router.push('/notice/chat')
      }
    },
    computed: {},
    beforeDestroy() {
    
    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  .msglist{
    font-family: PingFang-SC-Regular;
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    li{
      position: relative;
      padding: 0 14px;
      display: flex;
      align-items: center;
      height: 60px;
      background: #ffffff;
      @include onepx();
      .imgBox{
        width: 39px;
        height: 39px;
        position: relative;
        flex: 0 0 auto;
        .dot{
          position: absolute;
          top:-1px;
          right: -1px;
        }
        img{
          width: 100%;
          height: 100%;
          border-radius: 2px;
        }
      }
      .right{
        margin-left: 10px;
        flex: 1;
        p{
          padding: 0;
        }
        .up{
          display: flex;
          line-height: 30px;
          justify-content: space-between;
          .name{
            color: #999999;
            font-size: 14px;
          }
          .date{
            color: #D2D2D2;
            font-size: 10px;
          }
        }
        .msg{
          color: #666666;
          line-height: 30px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
          
        }
      }
    }
  }

</style>
