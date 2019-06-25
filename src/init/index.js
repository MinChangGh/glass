import Vue from 'vue'

//全局函数
import common from '@/common';
Vue.use(common);
// 全局指令
import * as directive from '@/directive/directive'
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})
//全局过滤器
import * as filters from '@/filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import './permission'

//icon
import '@/icons/index'

//自定义全局样式
import '@/styles/index.scss';

//引入mock模块
import Mock from '@/mock/index';
Mock.start();

//vant组件
import { Tabbar, TabbarItem, List, Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);

//vux组件
import { ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux';
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);

//其他配置
import config from './config';
