import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"

//引入子模块
import home from "./module/home.js"
import list from "./module/list"
import stair from "./module/stair"
import site from './module/site'
import series from "./module/series"
import car from "./module/car"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    car,
    list,
    stair,
    site,
    series
  },
  plugins:[createLogger()]
})
// const state={
   
//     }
//    const mutations={
     
//     }
//    const actions= {
   
//     }
// export default {
//   namespaced:true,
//   state,
//   mutations,
//   actions
// }