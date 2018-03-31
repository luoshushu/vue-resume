// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
//引入leancloud
import AV from "leancloud-storage"; //注意一要引入AV
var APP_ID = '9OjuxqtJW77d99IuXSp1Eug1-gzGzoHsz';
var APP_KEY = 't9H4TMWKyXzEP2xn2wW1oYzt';

AV.init({
 appId: APP_ID,
 appKey: APP_KEY
});



// 引用饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
