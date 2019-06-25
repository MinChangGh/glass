<template>
  <div class="admanage">
    <adlist :need-color="false" :adlist="adlist">
      <div class="slotline" slot="manage" slot-scope="props">
        <p class="setdefault" @click="setCheck(props.index)">
          <svg-icon v-if="adlist[props.index].isDefault" class="check" icon-class="round_check_fill"></svg-icon>
          <svg-icon v-else class="uncheck" icon-class="round"></svg-icon>
          <label>设为默认地址</label>
        </p>
        <p class="toedit">
          <span @click="toEdit(1,props.index)"><svg-icon icon-class="edit"></svg-icon> 编辑 </span>
          <span @click="delete(props.index)"><svg-icon icon-class="edit"></svg-icon> 删除 </span>
        </p>
      </div>
    </adlist>
    <redbtn @click.native="toEdit(0)">添加新地址</redbtn>
  </div>
</template>

<script>
  import adlist from './ad_component'
  import redbtn from '@/components/redbtn'
  import {mapState} from 'vuex'
  
  export default {
    name: "admanage",
    data() {
      return {
        // adlist: [
        //   {
        //     name: '1',
        //     phone: 15698989898,
        //     address: '杭州余杭区',
        //     default: true
        //   }, {
        //     name: '2',
        //     phone: 15698989898,
        //     address: '杭州余杭区武昌',
        //     default: false
        //   }
        // ]
      }
    },
    props: {},
    components: {
      adlist,
      redbtn
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
      toEdit(num,index) {
        if (num == 0) {
          this.$store.commit('addAddress')
        }
        this.$router.push(`/setAddress/${num}/${index}`)
      },
      delete(prop) {
        // this.adlist.splice(prop, 1)
        // console.log(this.$store.state.address)
        this.$store.commit('delAddress',prop)
      },
      setCheck(prop) {
        let data = {
          key: 'isDefault',
          val: true,
          index: prop
        }
         this.$store.commit('setFalse')
         this.$store.commit('setAddress', data)
        // for (var i = 0; i < this.adlist.length; i++) {
        //   this.$set(this.adlist[i], 'default', false)
        // }
        // this.$set(this.adlist[prop], 'default', true)
      },
    },
    computed: {
      ...mapState({
        adlist: state => state.address.address
      })
    },
    beforeDestroy() {
    
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  
  .admanage {
    .slotline {
      margin-top: 10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include onepxtop(0px, 0px);
      line-height: 30px;
      
      .setdefault {
        color: #000;
        font-size: 14px;
        
        .uncheck {
          font-size: 18px;
          color: #aaaaaa;
        }
        
        .check {
          font-size: 18px;
          color: #1989fa;
        }
      }
      
      .toedit {
        color: #7d7e80;
      }
    }
    
  }

</style>
