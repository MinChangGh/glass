<template>
  <div class="addEdit">
    <div class="title"><span>{{add_Or_Edit}}</span><span @click="save" class="save">保存</span></div>
    <ul class="infowrapper">
      <li @click="showCity">
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
        <input type="text" @keyup="setAddress('detail_ad')" v-model="address.detail_ad" placeholder="详细地址，如街道，门牌号">
        <span @click="clear('detail_ad')" data-id="detail_ad" v-if="address.detail_ad.length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>
      <li class="input-wrapper">
        <input type="text" @keyup="setAddress('name')" v-model="address.name" maxlength="5" placeholder="姓名">
        <span @click="clear('name')" data-id="name" v-if="address.name.length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>
      <li class="input-wrapper last-wrapper">
        <input type="number" @keyup="setAddress('phone')" v-model="address.phone" placeholder="手机号码">
        <span @click="clear('phone')" data-id="phone" v-show="(address.phone).toString().length>0"><svg-icon
          icon-class="round_close"></svg-icon></span>
      </li>
    </ul>
    <div class="setdefault">
      <p>设为默认地址</p>
      <p @click="setDefault('isDefault')">
        <svg-icon v-if="address.isDefault" class="check" icon-class="round_check_fill"></svg-icon>
        <svg-icon v-else class="uncheck" icon-class="round"></svg-icon>
      </p>
    </div>

  </div>
</template>

<script>
  import {Group, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name} from 'vux'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
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
      this.from = parseInt(this.$route.params.from)
      //console.log(this.getName(this.addressAll[0].city))
    },
    mounted() {

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
      setDefault (key) {
        let data = {
          key: key,
          val: !this.address[key],
          index: this.editIndex
        }
        this.$store.commit('setAddress', data)
      },
      setAddress(key) {
        let data = {
          key: key,
          val: this.address[key],
          index: this.editIndex
        }
        this.$store.commit('setAddress', data)
      },
      clear(key) {
        let data = {
          index: this.editIndex,
          key: key,
          val: ''
        }
        this.$store.commit('setAddress', data)
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
        // if (this.value.length == 0) {
        //   this.$$.msgInf('未选择城市')
        //   return
        // }
        if (this.address.detail_ad.length < 1) {
          this.$$.msgInf('请填写详细地址')
          return
        }
        this.newSaveed = 1
        this.$router.go(-1)
      }
    },
    computed: {
      add_Or_Edit() {
        if (parseInt(this.$route.params.from)) {
          this.isEdit = true
          return '编辑地址'
        } else {
          this.isEdit = false
          return "新增地址"
        }
      },
      address() {
        let from = parseInt(this.$route.params.from)
        let listIndex = parseInt(this.$route.params.index)
        let index
        if(from) {
          index =listIndex
        } else{
          index = this.addressAll.length-1
        }
        this.editIndex = index
        return {
          city: this.addressAll[index].city,
          detail_ad: this.addressAll[index].detail_ad,
          name: this.addressAll[index].name,
          phone: this.addressAll[index].phone,
          isDefault: this.addressAll[index].isDefault
        }
      },
      ...mapState({
        addressAll: state => state.address.address
      })
    },
    beforeDestroy() {
      if (!this.from&&this.newSaveed=='') {
          let len = this.$store.state.address.address.length-1
          this.$store.commit('delAddress',len)
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";

  .vuxfonts {
    font-size: 14px !important;
  }

  .addEdit {
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
      .input-wrapper {
        background: #ffffff;
        position: relative;
        text-align: center;
        padding-right: 10px;
        @include flexLayout(wrap, row, space-between, center);
        @include onepx(10px, 10px);

        span {
          color: #aaaaaa;
        }

        input {
          margin-bottom: 0;
          font-size: 14px;
          width: 94%;
          color: #333;
        }
      }

      .last-wrapper:after {
        display: none;
      }
    }

    .setdefault {
      color: #000;
      font-size: 14px;
      padding: 0 10px;
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

  }

</style>
