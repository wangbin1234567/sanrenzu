import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
Vue.config.productionTip = false
// Vue.use(VueLazyload)
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
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1968707028,1342402448&fm=26&gp=0.jpg',
  loading: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1968707028,1342402448&fm=26&gp=0.jpg',
  attempt: 1
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')