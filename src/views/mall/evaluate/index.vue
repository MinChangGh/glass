<template>
  <div>
    <div class="mall-cont">
      <div class="mall-cont-txt">
        <h5>感谢您光顾本店</h5>
        <div>请为本次服务进行评价</div>
      </div>
      <ul class="mall-list-box flex-box-align-auto">
        <li>
          <svg-icon icon-class="like_fill" :style="{ color: '#ff8d10'}"/>
          <span class="status" data-id="1">好评</span>
        </li>
        <li>
          <svg-icon icon-class="like_fill" :style="{ color: '#ff8d10'}"/>
          <span class="status" data-id="2">中评</span>
        </li>
        <li>
          <svg-icon icon-class="like_fill" :style="{ color: '#ff8d10'}"/>
          <span class="status" data-id="3">差评</span>
        </li>
      </ul>
      <div class="mall-sel-info"></div>
      <textarea class="suggest" placeholder="您还有哪些建议或意见？"></textarea>
    </div>
    <div class="footer-box">
      <span class="mui-btn-primary btn-submit" @click="submit">提交评价</span>
    </div>
	</div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    submit(){
      this.$router.push({
        path: '/myOrder/success',
        query:{
          type:this.$route.query.type,
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
			.mall-cont {
				padding: 0 12px;
				background: #fff;
			}

			.mall-cont-txt {
				padding: 15px 0 22px 0;
			}

			.mall-cont-txt>h5 {
				color: rgb(240, 140, 23);
				font-size: 15px;
			}

			.mall-cont-txt>div {
				font-size: 14px;
				color: #000;
			}

			.mall-list-box,
			.mall-list-cont {
				margin: 0;
				padding: 0;
			}

			.flex-box-align-auto {
				display: -webkit-flex;
				display: flex;
				flex-direction: row;
				-webkit-flex-direction: row;
				flex-wrap: wrap;
				-webkit-flex-wrap: wrap;
				-webkit-align-items: center;
				align-items: center;
			}

			.mall-cont-txt {
				text-align: center;
			}

			.mall-list-box {
				padding-bottom: 15px;
				border-bottom: 1px solid #ccc;
			}

			.mall-list-box>li {
				color: rgb(163, 161, 161);
				list-style: none;
				flex: 1;
				-webkit-flex: 1;
				text-align: center;
			}

			.mall-list-box>li.active>span {
				color: rgb(240, 140, 23);
			}

			.mall-sel-info {
				margin-top: 6px;
				margin-bottom: 4px;
			}

			.mall-list-cont>li {
				list-style: none;
				width: 33.3%;
				margin: 14px 0;
				font-size: 14px;
				text-align: center;
			}

			.mall-list-cont>li>span {
				font-size: 14px;
				text-align: center;
				border-radius: 4px;
				padding: 6px 8px;
				border: 1px solid rgb(152, 152, 152);
				margin-right: 4px;
				color: rgb(152, 152, 152);
			}

			.mall-list-cont>li.active>span {
				color: rgb(25, 137, 209);
				border-color: rgb(25, 137, 209);
			}

			.mall-list-cont>li:nth-child(3n)>div {
				margin-right: 0;
			}

			.mall-list-box>li>span.iconfont {
				padding-right: 4px;
				font-size: 31px;
				vertical-align: middle;
			}

			.mall-list-box>li>span.status {
				font-size: 15px;
			}

			.suggest {
				font-size: 14px;
				padding: 11px 10px;
				min-height: 130px;
			}

			.suggest::placeholder {
				color: rgb(193, 193, 193);
			}

			.footer-box {
				text-align: center;
				margin-top: 35px;
			}

			.btn-submit {
				width: auto;
				height: 38px;
				line-height: 38px;
				font-size: 16px;
				border-radius: 10px;
				text-align: center;
				border: rgb(25, 137, 209);
				background-color: rgb(25, 137, 209);
				text-align: center;
				padding: 12px 45px;
			}
		</style>

