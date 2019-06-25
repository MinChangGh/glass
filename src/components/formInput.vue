<template>
  <div class="input-wrapper">
    <input v-rclass :type="type" :placeholder="Pholder" v-model="value"  @keyup="keyup" @focus="focus" @blur="blur">
      <span class="iconbox" @click="clear">
        <svg-icon  v-show="((value.length>=1)&& isFocus)" icon-class="round_close"></svg-icon>
      </span>
    <slot></slot>
  </div>

</template>

<script>
  
  export default {
    data() {
      return {
        value: this.val,
        isFocus: false,
        Pholder: this.placeholder,
        keyName:this.keys
      }
    },
    props: ['type', 'val', 'showIcon','placeholder','keys'],
    components: {},
    created() {
    
    },
    mounted() {
    
    },
    methods: {
      clear() {
        this.value = ''
      },
      keyup() {
        let data={}
        data[this.keyName] = this.value
        this.$emit('keyup',data)
      },
      focus() {
        this.isFocus = true
        this.$emit('focus', this.value)
      },
      blur(el) {
        this.isFocus = false
        this.$emit('blur', this.value)
      },
    },
    computed: {},
    beforeDestroy() {
    
    }
  }

</script>

<style scoped lang="scss">
  @import "@/styles/mixin.scss";
  
  .input-wrapper {
    position: relative;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    justify-content: space-between;
    @include onepx();
    
    input {
      margin-bottom: 0;
      font-size: 14px;
      width: 90%;
    }
    .iconbox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      font-size: 20px;
      height: 40px;
      color: #aaaaaa;
    }
    
  }

</style>
