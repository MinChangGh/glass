<template>
  <div class="service">
    <div class="inputWrapper">
      <svg-icon class="sicon" icon-class="search" @click="search"></svg-icon>
      <input type="text" v-model="searchword" placeholder="有问题，搜搜看">
    </div>
    <div class="phone">
     <svg-icon class="icon" icon-class="phone"></svg-icon> <span>拨打电话</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchword:''
      }
    },
    props: {},
    components: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
      search () {
      
      }
    },
    computed: {},
    beforeDestroy() {

    }
  }

</script>

<style lang="scss">
  .service{
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    padding-top: 10px;
    .inputWrapper{
      display: flex;
      padding-left: 15px;
      width: 86%;
      margin: 0px auto;
      height: 40px;
      border-radius: 20px;
      overflow: hidden;
      align-items: center;
      background: #ffffff;
      .sicon{
        color: #989898;
        margin-right: 10px;
      }
      input{
        color: #989898;
        padding: 0;
        margin: 0;
        font-size: 14px;
      }
    }
    .phone{
      width: 100%;
      background: #ffffff;
      position: fixed;
      bottom: 0;
      color: #989898;
      font-size: 14px;
      line-height: 44px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .input-wrapper {
        width: 50% !important;
        
      }
      .icon{
        font-size: 24px;
        margin-right: 10px;
      }
    }
  }

</style>
