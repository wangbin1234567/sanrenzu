import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"

//引入子模块
import home from "./modules/home"
// import city from "./modules/city"
import dealer from "./modules/dealer"
import carColor from "./modules/carColor"
import car from "./modules/car"
import list from "./modules/list"
import carlist from "./modules/carlist"
import site from './modules/site'
import series from "./modules/series"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    dealer,
    carColor,
    car,
    list,
    site,
    series,
    carlist
  },
  plugins:[createLogger()]
})
