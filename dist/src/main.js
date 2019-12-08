<<<<<<< HEAD


//清除游览器的默认样式
import "./reset.css"
// import "./animate.css"
=======
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
import Vant from "vant"
import 'vant/lib/index.css';
// 引入vant ui 插件

Vue.config.productionTip = false
<<<<<<< HEAD
// 
=======
// Vue.use(VueLazyload)
import Vant from "vant"
import 'vant/lib/index.css';

>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
Vue.use(Vant);

//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
  loading: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=984435346,506206561&fm=15&gp=0.jpg',
  attempt: 1
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')