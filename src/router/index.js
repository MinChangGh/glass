import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/layout.vue'

export const constantRouterMap = [

  { path: '/binding', component: _import('login/binding'), hidden: true },
  { path: '/binding/list', component: _import('login/bindingList'), hidden: true },
  { path: '/register', component: _import('login/register'), hidden: true },
  { path: '/register/list', component: _import('login/registerList'), hidden: true },
  { path: '/coupon', component: _import('coupon/index'), hidden: true },
  // { path: '/404', component: _import('errorPage/404'), hidden: true },
  // { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: _import('home/index'),
        name: 'home',
        meta: {
          title: 'home',
          icon: 'home',
          cache: true,
          footTab: "footTabOne",
          headTab: ""
        }
      },
      {
        path: '/icons',
        component: _import('icons/index'),
        name: 'icons',
        meta: {
          title: 'icons',
          icon: 'icons',
          cache: true,
          footTab: "footTabOne",
        }
      },
      {
        path: '/cart',//购物车
        component: _import('cart/cartList'),
        name: 'cart',
        meta: {
          title: 'cart',
          icon: 'cart',
          cache: false,
          footTab: "footTabOne",
        }
      },
      {
        path: '/center',
        component: _import('center/mine'),
        name: 'center',
        meta: {
          title: 'center',
          icon: 'center',
          cache: true,
          footTab: "footTabOne",
        }
      },
      {
        path: '/center/integral',//我的积分
        component: _import('center/integral'),
        name: "integral",
        meta: {
          title: 'integral',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/optometry',//我的验光单
        component: _import('optometry/optometry'),
        name: "optometry",
        meta: {
          title: 'optometry',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/optometry/detail',//我的验光单-详情/detail
        component: _import('optometry/detail'),
        name: "optometryDetail",
        meta: {
          title: 'optometryDetail',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/center/interests',//我的权益
        component: _import('center/interests'),
        name: "interests",
        meta: {
          title: 'interests',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/center/qbcode',
        component: _import('center/qbcode'),
        name: 'qbcode',
        meta: {
          title: 'qbcode',
          icon: '',
          cache: true,
        }
      },
      {
        path: '/center/userinfo',
        component: _import('center/userInfo'),
        name: 'userinfo',
        meta: {
          title: 'userinfo',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/center/emailedit',
        component: _import('center/emailEdit'),
        name: 'emailedit',
        meta: {
          title: 'emailedit',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/center/nameedit',
        component: _import('center/nameEdit'),
        name: 'nameEdit',
        meta: {
          title: 'nameEdit',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/center/sign',
        component: _import('center/sign'),
        name: 'sign',
        meta: {
          title: 'sign',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/cate',
        component: _import('cate/index'),
        name: 'cate',
        meta: {
          title: 'cate',
          icon: 'cate',
          cache: false,
          footTab: "footTabOne"
        }
      },
      {
        path: '/store',
        component: _import('store/index'),
        name: 'store',
        meta: {
          title: 'store',
          icon: 'store',
          cache: true,
          footTabCss: 'app-main-no-padding'
        }
      },
      {
        path: '/search',
        component: _import('search/index'),
        name: 'search',
        meta: {
          title: 'search',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/coupon',
        component: _import('coupon/index'),
        name: 'coupon',
        meta: {
          title: 'coupon',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder',//我的订单
        component: _import('myOrder/index'),
        name: 'myOrder',
        meta: {
          title: 'myOrder',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/refund',//我的订单-退款售后
        component: _import('myOrder/refund'),
        name: 'refund',
        meta: {
          title: 'refund',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/detail',//我的订单-订单详情
        component: _import('myOrder/detail'),
        name: 'detail',
        meta: {
          title: 'detail',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/submitRefund',//我的订单-提交退款
        component: _import('myOrder/submitRefund'),
        name: 'submitRefund',
        meta: {
          title: 'submitRefund',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/refundDetail',//我的订单-退款详情
        component: _import('myOrder/refundDetail'),
        name: 'refundDetail',
        meta: {
          title: 'refundDetail',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/evaluate',//我的订单-评价
        component: _import('evaluate/index'),
        name: 'evaluate',
        meta: {
          title: 'evaluate',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/myOrder/success',//我的订单-评价
        component: _import('evaluate/success'),
        name: 'success',
        meta: {
          title: 'success',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/tmp1',
        component: _import('home/tmp1', 'distribute'),
        name: 'distribute-tmp1',
        meta: {
          title: 'distribute-tmp1',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/tmp2',
        component: _import('home/tmp2', 'distribute'),
        name: 'distribute-tmp2',
        meta: {
          title: 'distribute-tmp2',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/search',
        component: _import('home/search', 'distribute'),
        name: 'distribute-tmp2-search',
        meta: {
          title: 'distribute-tmp2-search',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/tmp2',
        component: _import('home/tmp2', 'distribute'),
        name: 'distribute-tmp2',
        meta: {
          title: 'distribute-tmp2',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },

      {
        path: '/distribute/center',
        component: _import('center/mine', 'distribute'),
        name: 'distribute-center',
        meta: {
          title: 'distribute-center',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/center/collection',//微分销-我的-收藏
        component: _import('center/collection', 'distribute'),
        name: 'collection',
        meta: {
          title: 'collection',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/center/userinfo',
        component: _import('center/userInfo', 'distribute'),
        name: 'distribute-center-userinfo',
        meta: {
          title: 'distribute-center-userinfo',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/store',
        component: _import('store/index', 'distribute'),
        name: 'store',
        meta: {
          title: 'store',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/cart',//微分销购物车
        component: _import('cart/list', 'distribute'),
        name: 'retailCart',
        meta: {
          title: 'retailCart',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/myOrder',//微分销我的订单列表
        component: _import('myOrder/index', 'distribute'),
        name: 'retailMyOrder',
        meta: {
          title: 'retailMyOrder',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/myOrder/detail',//微分销我的订单列表-详情
        component: _import('myOrder/detail', 'distribute'),
        name: 'myOrderDetail',
        meta: {
          title: 'myOrderDetail',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/myOrder/refund',//微分销我的订单列表-退款
        component: _import('myOrder/refund', 'distribute'),
        name: 'myOrderRefund',
        meta: {
          title: 'myOrderRefund',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/myOrder/refundDetail',//微分销我的订单列表-详情
        component: _import('myOrder/refundDetail', 'distribute'),
        name: 'RefundDetail',
        meta: {
          title: 'RefundDetail',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/myOrder/submitRefund',//微分销我的订单列表-详情
        component: _import('myOrder/submitRefund', 'distribute'),
        name: 'SubmitRefund',
        meta: {
          title: 'SubmitRefund',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/store/account',//微分销-店铺收款账号
        component: _import('account/index', 'distribute'),
        name: 'account',
        meta: {
          title: 'account',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/store/info',//微分销-店铺信息
        component: _import('storeInfo/index', 'distribute'),
        name: 'storeInfo',
        meta: {
          title: 'storeInfo',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/distribute/changeName',//微分销-修改名字
        component: _import('storeInfo/changeName', 'distribute'),
        name: 'changeName',
        meta: {
          title: 'changeName',
          icon: '',
          cache: false,
        }
      },
      {
        path: '/detail',
        name: 'goodDetail',
        component: _import('detail/detail'),
        meta: {
          title: 'goodDetail',
          icon: '',
          cache: true
        }
      },
      {
        path: '/detail/comment',
        name: 'comment',
        component: _import('detail/Comment'),
        meta: {
          title: 'comment',
          icon: '',
          cache: false
        }
      },
      {
        path: '/detail/service',
        name: 'service',
        component: _import('detail/service'),
        meta: {
          title: 'service',
          icon: '',
          cache: false
        }
      },
      {
        path: '/order',
        name: 'orderCommit',
        component: _import('orders/order'),
        meta: {
          title: 'orderCommit',
          icon: '',
          cache: true
        }
      },
      {
        path: '/order/pay',
        name: 'pay',
        component: _import('orders/pay'),
        meta: {
          title: 'pay',
          icon: '',
          cache: false
        }
      },
      {
        path: '/adManage',
        name: 'adManage',
        component: _import('orders/adManage'),
        meta: {
          title: 'adManage',
          icon: '',
          cache: false
        }
      },
      {
        path: '/setAddress/:from?/:index?',
        name: 'setAddress',
        component: _import('orders/add_edit_ad'),
        meta: {
          title: 'setAddress',
          icon: '',
          cache: false
        }
      },
      {
        path: '/test',
        component: _import('test/test', 'distribute'),
        name: 'test',
        meta: {
          title: 'test',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/qrCode',
        component: _import('qrcode/qrcode', 'distribute'),
        name: 'qrCode',
        meta: {
          title: 'qrCode',
          icon: '',
          cache: false
        }
      },
      {
        path: '/award',
        component: _import('award/award', 'distribute'),
        name: 'award',
        meta: {
          title: 'award',
          icon: '',
          cache: false
        }
      },
      {
        path: '/award/withdraw',
        component: _import('award/withdraw', 'distribute'),
        name: 'withdraw',
        meta: {
          title: 'withdraw',
          icon: '',
          cache: false
        }
      },
      {
        path: '/award/income',
        component: _import('award/income', 'distribute'),
        name: 'income',
        meta: {
          title: 'income',
          icon: '',
          cache: false
        }
      },
      {
        path: '/award/withDrawDetail',
        component: _import('award/withDrawDetail', 'distribute'),
        name: 'withDrawDetail',
        meta: {
          title: 'withDrawDetail',
          icon: '',
          cache: false
        }
      },
      {
        path: '/notice/noticeList',
        component: _import('notice/noticeList', 'distribute'),
        name: 'noticeList',
        meta: {
          title: 'noticeList',
          icon: '',
          cache: false
        }
      },
      {
        path: '/notice/chat',
        component: _import('notice/chat', 'distribute'),
        name: 'chat',
        meta: {
          title: 'chat',
          icon: '',
          cache: false
        }
      },
      {
        path: '/distribute/disDetail',
        component: _import('disDetail/detail', 'distribute'),
        name: 'disDetail',
        meta: {
          title: 'disDetail',
          icon: '',
          cache: true
        }
      },
      {
        path: '/distribute/disOrder',
        component: _import('disOrderCommit/disOrder', 'distribute'),
        name: 'disOrderCommit',
        meta: {
          title: 'disOrderCommit',
          icon: '',
          cache: true
        }
      },
      {
        path: '/distribute/addressList',
        component: _import('address/addressList', 'distribute'),
        name: 'addressList',
        meta: {
          title: 'addressList',
          icon: '',
          cache: false
        }
      },
      {
        path: '/distribute/addEdit',
        component: _import('address/addEdit', 'distribute'),
        name: 'addEdit',
        meta: {
          title: 'addEdit',
          icon: '',
          cache: false
        }
      },
      {
        path: '/distribute/tmp2',
        component: _import('home/tmp2', 'distribute'),
        name: 'distribute-tmp2',
        meta: {
          title: 'distribute-tmp2',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/search',
        component: _import('home/search', 'distribute'),
        name: 'distribute-search',
        meta: {
          title: 'distribute-search',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/tmpedit/tmp2',
        component: _import('tmpEdit/tmp2', 'distribute'),
        name: 'distribute-tmpedit-tmp2',
        meta: {
          title: 'distribute-tmpedit-tmp2',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/tmpedit/tmp2/swiperedit',
        component: _import('tmpEdit/swiperEdit', 'distribute'),
        name: 'distribute-tmpedit-tmp2-swiperedit',
        meta: {
          title: 'distribute-tmpedit-tmp2-swiperedit',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/tmpedit/tmp2/goodsedit',
        component: _import('tmpEdit/goodsEdit', 'distribute'),
        name: 'distribute-tmpedit-tmp2-goodsedit',
        meta: {
          title: 'distribute-tmpedit-tmp2-goodsedit',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/tmp2',
        component: _import('home/tmp2', 'distribute'),
        name: 'distribute-tmp2',
        meta: {
          title: 'distribute-tmp2',
          icon: '',
          cache: false,
          footTab: "footTabTwo"
        }
      },
      {
        path: '/distribute/shop/selectgoods',
        component: _import('openShop/selectGoods', 'distribute'),
        name: 'distribute-shop-selectgoods',
        meta: {
          title: 'distribute-shop-selectgoods',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/shop/selectpart',
        component: _import('openShop/selectPart', 'distribute'),
        name: 'distribute-shop-selectpart',
        meta: {
          title: 'distribute-shop-selectpart',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/shop/selecttmp',
        component: _import('openShop/selectTmp', 'distribute'),
        name: 'distribute-shop-selecttmp',
        meta: {
          title: 'distribute-shop-selecttmp',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
      {
        path: '/distribute/shop/open',
        component: _import('openShop/open', 'distribute'),
        name: 'distribute-shop-open',
        meta: {
          title: 'distribute-shop-open',
          icon: '',
          cache: false,
          footTab: ""
        }
      },
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}), // 跳转到新的页面时,定位到最顶端
  routes: constantRouterMap,
})
