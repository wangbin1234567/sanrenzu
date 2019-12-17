import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
Vue.config.productionTip = false
import { ImagePreview ,Swipe, SwipeItem, Skeleton, Lazyload } from 'vant';
// import 'vant/lib/index.css';
Vue.use(ImagePreview).use(Swipe).use(SwipeItem).use(Skeleton).use(Lazyload);
//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://h5.chelun.com/2017/official/img/icon-brand.jpg',
  loading: 'http://h5.chelun.com/2017/official/img/icon-brand.jpg',
  attempt: 1
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')