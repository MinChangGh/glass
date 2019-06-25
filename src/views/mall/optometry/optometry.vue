<template>
    <div class="mui-content">
      <div class="optometry">
        <div class="mui-scroll">
          <ul class="optometry-content">
            <li class="optometry-content-item" @click="goDetail(item.id)" v-for="(item,index) in list" :key="index">
              <div class="optometry-content-item-img">
                <img src="https://dev.unionglasses.com/ug/mall/assest/images/optometry/opoimg.png" />
              </div>
              <div class="optometry-content-item-info">
                <div class="optometry-content-item-info-number">单号：{{item.number}}</div>
                <div class="optometry-content-item-info-type">
                  <div>类型：{{item.type}}</div>
                  <div>
                    <span>{{item.time}}</span>
                    <svg-icon icon-class="rightArrow" :style="{ color: '#d48df2'}"/>
                  </div>
                </div>
                <div class="optometry-content-item-info-address">地点：{{item.address}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <noData v-if="noDataShow" :noDataInfo="noDataInfo"></noData>
    </div>
</template>
<script>
    import noData from "@/components/noData.vue";
    export default {
        data() {
            return {
                list:[{
                  id:'1',
                  number:'1511419061',
                  type:'主管验光-远用',
                  time:'2017-11-23',
                  address:'杭州市西湖区'
                },{
                  id:'2',
                  number:'15114198561',
                  type:'主管验光-远用',
                  time:'2017-11-8',
                  address:'北京市昌平区'
                },],
                noDataShow:false,//暂无数据
                noDataInfo:{
                  imgUrl:'https://dev.unionglasses.com/ug/mall/assest/images/empty-optom.png',
                  desc:'您还没有相关的验光单'
                }
            };
        },
        mounted() {
          mui(".optometry").scroll({
            deceleration: 0.0005
          });
        },
        methods: {
          goDetail(id){
            this.$router.push({
              name:"optometryDetail",
              query:{
                id:id
              }
            })
          }
        },
        components: {
            noData,
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/styles/mixin.scss";
    .mui-content{
      height: 100vh;
    }
    * {
      touch-action: none;
    }
    .optometry{
      &-content{
        margin-top: -5px;
        &-item{
          margin-top: 5px;
          padding: 14px 12px;
          background-color: #fff;
          @include flexLayout(nowrap, row, flex-start, center);
          &-img{
            width: 60px;
            height: 60px;
            overflow: hidden;
            margin-right: 10px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          &-info{
            flex: 1;
            font-size: 14px;
            &-type{
              @include flexLayout(nowrap, row, space-between, center);
            }
            &-address{
              width: 200px;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap
            }
          }
        }
      }
    }
</style>
