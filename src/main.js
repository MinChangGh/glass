import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import '../src/utils/vant'

//全局配置
import '@/init/index'
// router.beforeEach((to, from, next) => {
//   if((to.name=='submitRefund' || to.name=='evaluate') && from.name=='center'){
//     next({path: '/home'})
//   }else{
//     next();
//   }
// });

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
