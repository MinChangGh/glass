<template>
  <div class="shopTmp" >
    <div class="container" ref="shopTmp">
      <div class="searchWrapper">
        <div class="inputWrapper">
          <svg-icon class="sicon" icon-class="search" @click="search"></svg-icon>
          <input type="text" v-model="searchword" placeholder="有问题，搜搜看">
        </div>
      </div>

      <ul class="shoplist">
        <li v-for="(items,index) in list" @click="toggle(index)">
          <group>
            <cell  :title="items"
                   is-link
                   :arrow-direction="showContent&&(pubindex==index) ? 'up' : 'down'"
                   :class="showContent&&(pubindex==index)?'active':''"
                  >
            </cell>
          </group>
          <div class="line" :class="showContent&&(pubindex==index)?'active':''">{{items}}</div>
        </li>

      </ul>
      <redbtn @click.native="close">确认</redbtn>
    </div>

  </div>
</template>

<script>
  import redbtn from "@/components/redbtn"
  import {Cell, Group} from 'vux'

  export default {
    name: "shopTemp",
    data() {
      return {
        pubindex:-1,
        searchword:'',
        list:['余杭','hah','gsk'],
        showContent:false
      }
    },
    mounted() {
      setTimeout(()=>{
        this.$refs.shopTmp.style.top = 0
      },100)


    },
    methods: {
      toggle (index) {
        if (this.pubindex==index) {
          this.pubindex=-1
          this.showContent =false
        } else {
          this.pubindex=index
          this.showContent=true
        }

      },
      close() {
        this.$emit('closeshop')
      },
      search () {

      }
    },
    components: {
      redbtn,
      Cell,
      Group
    }
  }
</script>

<style scoped lang="scss">
  .active{
    background: #eaeaea !important;
    display: block !important;
  }
  .shopTmp {
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    .container{
      position: absolute;
      width: 100%;
      height: 100%;
      top:100%;
      transition: 0.2s;
      .searchWrapper{
        background: #f6f6f6;
        padding: 10px 0;
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
      }
      .shoplist{
        .line{
          line-height: 39px;
          padding: 0px 15px;
          display: none;
        }

      }

    }

  }
</style>
