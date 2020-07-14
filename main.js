import Vue from 'vue'
import App from './App'
import 'static/index.scss'
import 'static/icon/iconfont.css'
import store from './store';
import tui from './utils/httpRequest.js';
import router from './router'
import { RouterMount } from 'uni-simple-router'
import VueJsonp from 'vue-jsonp'
import i18n from "./common/i18n/i18n.js";

Vue.config.productionTip = false
// #ifdef H5
window.QQmap = null;
// #endif
Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
Vue.prototype._i18n = i18n;
Vue.use(VueJsonp);
App.mpType = 'app'

const app = new Vue({
	store,
	i18n,
	...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
