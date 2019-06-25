import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { ToastPlugin } from 'vux';
import Vue from 'vue';
Vue.use(ToastPlugin);

const accessList = [
    '/authredirect',
    '/home',
    '/icons',
    '/cate',
    '/store',
    '/store/map',
    '/search',
    '/coupon',
    '/center',
    '/center/emailedit',
    '/center/qbcode',
    '/center/userinfo',
    '/cart'
];

const loginList = [
    '/binding',
    '/binding/list',
    '/register',
    '/register/list'
];

const whiteList = loginList.concat(accessList);

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//     store.dispatch('addCachedViews', to)
//     if (getToken()) {
//         if (loginList.indexOf(to.path) !== -1) {
//             next({ path: from.path })
//         } else {
//             // 判断当前用户是否已拉取完user_info信息
//             if (store.getters.userInfo === '') {
//                 store.dispatch('GetUserInfo').then(res => { }).catch(() => {
//                     store.dispatch('FedLogOut').then(() => {
//                         Vue.$vux.toast.show({
//                             type: 'text',
//                             position: 'middle',
//                             text: '验证失败'
//                         })
//                         next({ path: '/binding' })
//                     })
//                 })
//             } else {
//                 next();
//             }
//         }
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//             next()
//         } else {
//             next('/binding')
//         }
//     }
// })

// router.afterEach(() => { })
