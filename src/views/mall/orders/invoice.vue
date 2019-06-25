<template>
  <div class="invoice">
    <group class="groups">
      <cell title="发票"
            is-link
            :arrow-direction="showContent ? 'up' : 'down'"
            @click.native="showContent = !showContent"
            :border-intent="false"
            :class="showContent?'active':''">
      </cell>
      <ul class="slide" :class="showContent?'animate':''">
        <group>
          <cell title="企业">
            <div class="radio" @click="setCheck(0)">
              <svg-icon
                 :class="checkList[0]? 'check':'uncheck'"
                :icon-class="checkList[0]?'round_check_fill':'round'">
              </svg-icon>
            </div>
          </cell>
          <ul class="slide" :class="checkList[0]&&poplist[0]?'animate':''">
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.name" type="text" placeholder="请输入企业抬头名称(必填)">
              <span v-show="companydata.name.length>0" @click="clear('0','name')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.taxNum" type="text" placeholder="请填写纳税人识别号(必填)">
              <span v-show="companydata.taxNum.length>0" @click="clear('0','taxNum')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.phone" type="text" placeholder="请输入您的手机号(必填)">
              <span v-show="companydata.phone.length>0" @click="clear('0','phone')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.bank" type="text" placeholder="请输入开户行">
              <span v-show="companydata.bank.length>0" @click="clear('0','bank')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.ad" type="text" placeholder="请输入地址">
              <span v-show="companydata.ad.length>0" @click="clear('0','ad')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="input-wrapper">
              <input v-rclass v-model="companydata.tel" type="text" placeholder="请输入电话">
              <span v-show="companydata.tel.length>0" @click="clear('0','tel')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class=" confirm-wrapper">
              <p @click="confirm('0')" class="confirm">确认</p>
              <p @click="cancel('0')" class="cancel">取消</p>
            </li>
          </ul>
          <cell title="个人">
            <div class="radio" @click="setCheck(1)">
              <svg-icon
                 :class="checkList[1]? 'check':'uncheck'"
                :icon-class="checkList[1]?'round_check_fill':'round'">
              </svg-icon>
            </div>
          </cell>
          <ul class="slide" :class="checkList[1]&&poplist[1] ?'animate':''">
            <li class="input-wrapper">
              <input v-rclass v-model="selfdata.name" type="text" placeholder="请输入您的姓名（必填）">
              <span v-show="selfdata.name.length>0" @click="clear('1','name')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class=" input-wrapper">
              <input v-rclass v-model="selfdata.phone" type="text" placeholder="请输入您的手机号（必填）">
              <span v-show="selfdata.phone.length>0" @click="clear('1','phone')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class=" input-wrapper">
              <input v-rclass v-model="selfdata.mail" type="text" placeholder="请输入您的邮箱">
              <span v-show="selfdata.mail.length>0" @click="clear('1','mail')"><svg-icon icon-class="round_close"></svg-icon></span>
            </li>
            <li class="confirm-wrapper">
              <p @click="confirm('1')" class="confirm">确认</p>
              <p @click="cancel('1')" class="cancel">取消</p>
            </li>
          </ul>
          <cell title="无">
            <div class="radio" @click="setCheck(2)">
              <svg-icon
                 :class="checkList[2]? 'check':'uncheck'"
                :icon-class="checkList[2]?'round_check_fill':'round'">
              </svg-icon>
            </div>
          </cell>
        </group>
      
      </ul>
    </group>
  </div>

</template>

<script>
  import {Group, Cell, Radio, XInput, CellBox} from 'vux'
  import formInput from '@/components/formInput'
  
  export default {
    name: "invoice",
    data() {
      return {
        phoneReg: /^1[3|4|5|6|8][0-9]\d{4,8}$/,
        showContent: false,
        ischeck: false,
        checkList:[false,false,false],
        poplist:[false,false,false],
        company: false,
        self: false,
        nothing: false,
        companydata: {
          name: '',
          phone: '',
          taxNum: '',
          bank: '',
          ad: '',
          tel: ''
        },
        selfdata: {
          name: '',
          phone: '',
          mail: ''
        },
        remarks: ''
      }
    },
    components: {
      Group,
      Cell,
      Radio,
      XInput,
      CellBox,
      formInput
    },
    mounted() {
    
    },
    created() {
    
    },
    methods: {
      setValue (data,num) {
        if (num ==0) {
          Object.assign(this.companydata,data[0])
        } else {
          Object.assign(this.selfdata,data[0])
        }
      },
      setCheck (num) {
        let log = !this.checkList[num]
        for (let i=0;i<this.checkList.length;i++) {
          this.$set(this.checkList,i,false)
          this.$set(this.poplist,i,false)
        }
        if (log) {
          this.$set(this.poplist,num,log)
        }
        this.$set(this.checkList,num,log)

      },
      clear(num,key) {
        if (num == '1') {
          this.selfdata[key] = ''
        } else {
          this.companydata[key] = ''
        }
      },
      confirm(num) {
        let taxReg = /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/
        if (num == '0') {
          if (this.companydata.name.length < 1) {
            this.$$.msgInf('请输入公司名')
            return
          }
          if (!taxReg.test(this.companydata.taxNum)) {
            this.$$.msgInf('税号输入有误')
            return
          }
          if (!this.phoneReg.test(this.companydata.phone)) {
            this.$$.msgInf('手机号码错误')
            return
          }
          this.$set(this.poplist,parseInt(num),false)
          this.$emit('invoice',this.companydata)
        } else {
          if (!this.phoneReg.test(this.selfdata.phone)) {
            this.$$.msgInf('手机号码错误')
            return
          }
          if (this.selfdata.name.length < 1) {
            this.$$.msgInf('请输入姓名')
            return
          }
          this.$set(this.poplist,parseInt(num),false)
          this.$emit('invoice',this.selfdata)
        }
      },
      cancel(num) {
        this.$set(this.poplist,parseInt(num),false)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  .active{
    background: #d8edfb;
  }
  .slide {
    padding: 0 10px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  
  .invoice {
    margin-top: 5px;
    
    .groups {
      .slide {
        .radio {
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          .uncheck {
            color: #aaa;
          }
          
          .check {
            color: #1989fa;
          }
        }
        
        .confirm-wrapper {
          display: flex;
          text-align: center;
          flex-direction: row;
          line-height: 40px;
          
          .confirm {
            flex: 1;
            color: #1989d1;
          }
          
          .cancel {
            flex: 1;
            color: rgb(152, 152, 152);
          }
        }
        
        .input-wrapper {
          position: relative;
          display: flex;
          text-align: center;
          flex-direction: row;
          align-items: center;
          @include onepx();
          input {
            margin-bottom: 0;
            font-size: 14px;
            width: 94%;
          }
          span{
            color: #aaaaaa;
          }
          
        }
      }
    }
  }

</style>
