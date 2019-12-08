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
import carlist from "./module/carlist"
=======
import home from "./modules/home"
// import city from "./modules/city"
import dealer from "./modules/dealer"
import carColor from "./modules/carColor"
import car from "./modules/car"
import list from "./modules/list"
import carlist from "./modules/carlist"
import site from './modules/site'
import series from "./modules/series"
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
<<<<<<< HEAD
    list,
    stair,
=======
    dealer,
    carColor,
    car,
    list,
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    site,
    series,
    carlist
  },
  plugins:[createLogger()]
})
