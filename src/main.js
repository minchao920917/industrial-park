
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import 'vant/lib/index.less';
import 'vant/lib/index.css'

import App from './App'
import router from './router'
import { createStore } from './store'


Vue.config.productionTip = false
const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
