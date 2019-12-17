import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"
import home from "./modules/home"
import list from "./modules/list"
import car from "./modules/car"
import series from "./modules/series"
import carColor from "./modules/carColor"
import quotation from "./modules/quotation"
import dealer from "./modules/dealer"
import site from "./modules/site"
import stair from "./modules/stair"
//引入子模块

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    list,
    car,
    series,
    carColor,
    quotation,
    dealer,
    site,
    stair
  },
  plugins:[createLogger()]
})
