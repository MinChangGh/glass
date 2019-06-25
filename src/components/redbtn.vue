<template>
  <div>
    <x-button class="popsbtn" type="warn">
      <slot></slot>
    </x-button>
  </div>
</template>

<script>
  import { XButton} from 'vux'
  export default {
    data() {
      return {}
    },
    props: {},
    components: {
      XButton
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
  .popsbtn{
    position: absolute;
    bottom: 0;
    height: 44px;
    line-height: 34px;
    border-radius: 0;
    font-size: 14px;
  }
</style>
