import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger"

//引入子模块
import home from "./module/home.js"
Vue.use(Vuex)

export default new Vuex.Store({
     
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    home
  },
  plugins:[createLogger()]
})
