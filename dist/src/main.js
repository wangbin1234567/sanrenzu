import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
Vue.config.productionTip = false
import { ImagePreview ,Swipe, SwipeItem, Skeleton, Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(ImagePreview).use(Swipe).use(SwipeItem).use(Skeleton).use(Lazyload);

//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img5.imgtn.bdimg.com/it/u=2815486628,62709141&fm=26&gp=0.jpg',
  loading: 'http://img5.imgtn.bdimg.com/it/u=2815486628,62709141&fm=26&gp=0.jpg',
  attempt: 1
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')