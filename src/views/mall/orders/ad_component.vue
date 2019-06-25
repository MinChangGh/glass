<template>
  <ul class="popup">
    <li v-if="needColor" :class="{active:index==checkindex}"  class="poplist" v-for="(item,index) in adLists" @click="changeAd(index)">
      <p class="line1"><span>收货人：{{item.name}}</span> <span>{{item.phone}}</span></p>
      <p class="address">配送至：<span v-show="item.default">【默认】</span>{{item.city|cityFormat}} {{item.detail_ad}}</p>
      <slot name="manage" :index="index"></slot>
    </li>
    <li v-if="!needColor" class="poplist" v-for="(item,index) in adLists" @click="changeAd(index)">
      <p class="line1"><span>收货人：{{item.name}}</span> <span>{{item.phone}}</span></p>
      <p class="address">配送至：<span v-show="item.default">【默认】</span>{{item.city|cityFormat}} {{item.detail_ad}}</p>
      <slot name="manage" :index="index"></slot>
    </li>
  </ul>
</template>

<script>
  import { ChinaAddressV4Data,  Value2nameFilter as value2name} from 'vux'
  export default {
    name: "ad_component",
    data () {
      return{
        // adLists:this.adlist,
        checkindex:0
      }
    },
    props:['adlist','needColor'],
    components:{

    },
    created() {

    },
    mounted() {

    },
    methods:{
      changeAd (index) {
        this.checkindex = index
        this.$emit('changeAd',index)
      }
    },
    computed:{
      adLists () {
        return this.adlist
      }
    },
    filters:{
      cityFormat (value) {
        return value2name(value, ChinaAddressV4Data)
      }
    },
    beforeDestroy() {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  .active{
    background: #e5e5e5;
  }
  .popup {
    background: #ffffff;
    .poplist {
      padding: 10px;
      position: relative;
      @include onepx();

      p {
        color: #000;
      }

      .line1 {
        @include flexLayout(wrap, row, space-between, center);
      }
    }

    .popsbtn {
      position: absolute;
      bottom: 0;
      height: 44px;
      line-height: 34px;
      border-radius: 0;
      font-size: 14px;
    }

    .btn {
      position: absolute;
      bottom: 0;
      background: #dd524d;
      text-align: center;
    }
  }

</style>
