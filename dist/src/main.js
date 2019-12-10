import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
Vue.config.productionTip = false
<<<<<<< HEAD
// Vue.prototype.bus=new Vue
// Vue.use(VueLazyload)
import loading from "./utils/loading.js"
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(loading)
Vue.use(Vant);

//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
  loading: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
=======
// Vue.use(VueLazyload)
import Vant from "vant"
import 'vant/lib/index.css';

Vue.use(Vant);
// import loading from './utils/loading.js' // 引入loading
// Vue.use(loading) // 全局使用loading
//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1968707028,1342402448&fm=26&gp=0.jpg',
  loading: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1968707028,1342402448&fm=26&gp=0.jpg',
>>>>>>> jyh
  attempt: 1
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')