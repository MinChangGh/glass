<template>
  <div class="comment-detail">
    <div>
      <slot name="up"></slot>
      <div class="comment-body">
        <div class="head">
          <div class="avatar"><img src="https://dev.unionglasses.com/ug/mall/assest/images/avatar_def.png" alt=""></div>
          <ul class="star">
            <li>
              <svg-icon icon-class="favor"></svg-icon>
            </li>
          </ul>
        </div>
        <div class="date">
          {{timeFormat(1554947196)}}
        </div>
        <div class="text">
          买十块钱的
        </div>
        <ul class="img-wrapper">
          <li>
            <img src="https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a5825fd32fa9.png">
          </li>
          <li>
            <img src="https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a5825fd32fa9.png">
          </li>
          <li>
            <img src="https://dev.unionglasses.com/uploads/mall/goods/2018-01-12/5a5825fd32fa9.png">
          </li>
        </ul>
      </div>
      <slot name="down"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list:this.commentList
      }
    },
    props: ['commentList'],
    components: {},
    created() {
    
    },
    mounted() {
    
    },
    methods: {
      timeFormat(val) {
        return this.$$.parseTime(val)
      }
    },
    computed: {},
    beforeDestroy() {
    
    }
  }

</script>

<style scoped lang="scss">
  .comment-detail {
    background: #fff;
    padding-bottom: 4px;
    
    .comment-title {
      font-size: 15px;
      padding: 10px 12px;
      border-bottom: 1px solid #E5E5E5;
    }
    
    .comment-body {
      padding: 10px 12px;
      font-size: 14px;
      
      .head {
        display: flex;
        flex-direction: row;
        
        .avatar {
          width: 33px;
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          img {
            width: 33px;
            height: 33px;
            border-radius: 50%;
          }
        }
        
        .star {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
          
          li {
            font-size: 25px;
            color: #f0ad4e;
          }
        }
      }
      
      .date {
        margin-bottom: 4px;
        color: #8f8f94;
      }
      
      .text {
        font-size: 15px;
        margin-bottom: 4px;
      }
      
      .img-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        li {
          width: 31%;
          position: relative;
          
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
</style>
