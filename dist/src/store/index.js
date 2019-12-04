import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"

//引入子模块
import home from "./modules/home"
import rightnavigation from "./modules/rightnavigation"
// import city from "./modules/city"
import dealer from "./modules/dealer"
import carColor from "./modules/carColor"
import car from "./modules/car"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    rightnavigation,
    dealer,
    carColor,
    car
  },
  plugins:[createLogger()]
})
