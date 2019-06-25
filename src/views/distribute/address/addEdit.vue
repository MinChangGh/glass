<template>
  <div class="addEdit">
    <ul class="infowrapper">
      <li class="input-wrapper">
        <input type="text"  v-model="address.name" maxlength="5" placeholder="姓名">
        <span @click="clear('name')" data-id="name" v-if="address.name.length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>
      <li class="input-wrapper last-wrapper">
        <input type="number"  v-model="address.phone" placeholder="手机号码">
        <span @click="clear('phone')" data-id="phone" v-show="(address.phone).toString().length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>
      <li @click="showCity" class="citypiker">
        <group>
          <x-address class="vuxfonts"
                     :title="title" v-model="address.city"
                     :list="addressData"
                     placeholder="省份，城市，区"
                     :show.sync="showAddress"
                     @on-hide="logHide"
                     @on-shadow-change="onShadowChange"
                     value-text-align="left">
          </x-address>
        </group>
      </li>
      <li class="input-wrapper">
        <input type="text"  v-model="address.detail_ad" placeholder="详细地址，如街道，门牌号">
        <span @click="clear('detail_ad')" data-id="detail_ad" v-if="address.detail_ad.length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>

    </ul>
    <div class="setdefault">
      <p>设为默认地址</p>
      <p @click="setDefault">
        <svg-icon v-if="address.isDefault" class="check" icon-class="round_check_fill"></svg-icon>
        <svg-icon v-else class="uncheck" icon-class="round"></svg-icon>
      </p>
    </div>
    <div class="add" @click="save">保存</div>
  
  </div>
</template>

<script>
  import {Group, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name} from 'vux'
  import {mapState} from 'vuex'
  
  export default {
    data() {
      return {
        address:{
          id: 0,
          city: [],
          detail_ad: '',
          name: '',
          phone: '',
          isDefault: true
        },
        editIndex:Number,
        from: null,
        isEdit: Boolean,
        title: '',
        value: [],
        addressData: ChinaAddressV4Data,
        showAddress: false,
        isDefault: false,
        newSaveed: ''
      }
    },
    props: {},
    components: {
      Group,
      XAddress,
      XButton
    },
    beforeCreate() {
    
    },
    created() {
      this.from = parseInt(this.$route.query.address)
    },
    mounted() {
      let ad= {
        id:  1,
        city: ["110000", "110100", "110101"],
        detail_ad: 'dsd',
        name: '',
        phone: '',
        isDefault: false
      }
      ad=JSON.stringify(ad)
      localStorage.ad= ad
      console.log(JSON.parse(localStorage.ad))
    },
    methods: {
      logHide(hasval) {
        if (hasval) {
          let data = {
            index: this.editIndex,
            key: 'city',
            val: this.address.city
          }
          this.$store.commit('setAddress', data)
        }
      },
      onShadowChange(ids, names) {
      
      },
      getName(value) {
        return value2name(value, ChinaAddressV4Data)
      },
      setDefault () {
        this.$set(this.address,'isDefault',!this.address.isDefault)
      },
      clear(key) {
        this.$set(this.address,key,'')
        //this.address[key] ==''
      },
      showCity() {
        this.showAddress = true
      },
      save() {
        let reg = /^1[345678]\d{9}$/
        if (!reg.test(this.address.phone)) {
          this.$$.msgInf(' 手机号码格式有误 ')
          return
        }
        if (this.address.name.length >= 5) {
          this.$$.msgInf('用户名过长')
          return
        }
        if (this.value.length == 0) {
          this.$$.msgInf('未选择城市')
          return
        }
        if (this.address.detail_ad.length < 1) {
          this.$$.msgInf('请填写详细地址')
          return
        }
        this.$router.go(-1)
      }
    },
    computed: {

    },
    beforeDestroy() {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  
  .vuxfonts {
    font-size: 14px !important;
  }
  
  .addEdit {
    background: #f6f6f6;
    width: 100%;
    height: 100%;
    .title {
      background: #ffffff;
      font-size: 14px;
      padding: 10px;
      @include flexLayout(wrap, row, space-between, center);
      
      .save {
        color: #1989d1;
      }
    }
    
    .infowrapper {
      background: #FFFFFF;
      li:last-child::after{
        display: none;
      }
      li{
        padding: 0 15px;
      }
      .citypiker{
        padding: 0;
      }
      .input-wrapper {
        background: #ffffff;
        position: relative;
        text-align: center;
        padding-right: 10px;
        @include flexLayout(wrap, row, space-between, center);
        @include onepx();
        
        span {
          color: #aaaaaa;
        }
        .weui-cell{
          padding-left: 0 !important;
        }
        input {
          margin-bottom: 0;
          font-size: 14px;
          width: 94%;
          color: #333;
          padding-left: 0;
        }
      }
      
      .last-wrapper:after {
        display: none;
      }
    }
    
    .setdefault {
      color: #000;
      font-size: 14px;
      padding: 0 15px;
      line-height: 40px;
      margin-top: 6px;
      background: #ffffff;
      @include flexLayout(wrap, row, space-between, center);
      
      .uncheck {
        font-size: 20px;
        color: #aaaaaa;
      }
      
      .check {
        font-size: 20px;
        color: #1989fa;
      }
    }
    .add{
      width: 70%;
      line-height: 44px;
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      border-radius: 22px;
      background: linear-gradient(to right,#67abf1,#067cf7);
      margin: 20px auto;
    }
    
  }

</style>
