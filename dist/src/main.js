import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from "vue-lazyload"
import "lib-flexible/flexible.js"
Vue.config.productionTip = false
// Vue.use(VueLazyload)


//配置图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './imgs/timg.jpg',
  loading: './imgs/timg.jpg',
  attempt: 1
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')