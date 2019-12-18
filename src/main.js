import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import "lib-flexible/flexible.js"
Vue.config.productionTip = false
import Vant from "vant"
import 'vant/lib/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.use(Vant);

import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
// import loading from './utils/loading.js' // 引入loading
// Vue.use(loading) // 全局使用loading
//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://h5.chelun.com/2017/official/img/icon-brand.jpg',
  loading: 'http://h5.chelun.com/2017/official/img/icon-brand.jpg',
  attempt: 1
})
import VueLazyload from "vue-lazyload"

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')