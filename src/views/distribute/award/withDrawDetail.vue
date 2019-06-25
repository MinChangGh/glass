<template>
  <celllist :list="list"></celllist>
</template>

<script>
  import celllist from './celllist'
  export default {
    data() {
      return {
        list:[
          {
            title:'dfds'
          },
          {
            title:'dfds'
          }
        ]
      }
    },
    props: {},
    components: {
      celllist
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

<style scoped>

</style>
