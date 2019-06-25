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
            name:'sd'
          },
          {
            name:'dfds'
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

<style scoped lang="scss">
	@import "@/styles/mixin.scss";
	.income {
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		.mainbox{
			height:60px;
			background:#fff;
			display:flex;
			justify-content:space-between;
			padding:0px 12px;
			@include onepx();
			.left{
				.title{
					color: #333333;
          line-height: 34px;
				}
        .date{
          color: #999999;
          line-height: 34px;
        }
			}
			.money{
				color: #FF5B8D;
				line-height: 60px;
			}
      .date{
        color: #aaa;
      }
		}
	}
</style>
