
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import 'vant/lib/index.less';
import 'vant/lib/index.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
    ak: '5veFX2R6D5oCgNjbBL4d86tKu1mTUBuK'
});

Vue.use(VideoPlayer)
import App from './App'
import router from './router'
import { createStore } from './store'
import axios from 'axios';

Vue.config.productionTip = false
import {
  reqPos,
  reqGet,
  reqPosFor
} from './http/req';
// new VConsole()
Vue.prototype.reqPos = reqPos;
Vue.prototype.reqGet = reqGet;
Vue.prototype.reqPosFor = reqPosFor;
Vue.prototype.axios = axios
const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
