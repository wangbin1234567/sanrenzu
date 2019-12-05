import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"

//引入子模块
<<<<<<< HEAD
import home from "./module/home.js"
import list from "./module/list"
import stair from "./module/stair"
import site from './module/site'
import series from "./module/series"
=======
import home from "./modules/home"
import rightnavigation from "./modules/rightnavigation"
// import city from "./modules/city"
import dealer from "./modules/dealer"
import carColor from "./modules/carColor"
import car from "./modules/car"
>>>>>>> 30749724d1c9cfbf285a02a0a093c9294ed1e0db
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
    list,
    stair,
    site,
    series
=======
    rightnavigation,
    dealer,
    carColor,
    car
>>>>>>> 30749724d1c9cfbf285a02a0a093c9294ed1e0db
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