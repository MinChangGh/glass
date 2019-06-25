<template>
  <div class="cell">
    <span>{{title}}</span>
    <slot></slot>
    <svg-icon class="icon" icon-class="right"></svg-icon>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      title: String
    },
    components: {},
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
  @import "@/styles/mixin.scss";
  .cell{
    position: relative;
    font-size: 14px;
    color: #3d3d3d;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    @include onepx();
    span{
      color: #000000;
    }
    .icon{
      color: #bbbbbb;
    }
  }
</style>
