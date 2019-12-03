import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from "vuex/dist/logger"

//引入子模块
import home from "./modules/home"
import rightnavigation from "./modules/rightnavigation"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    rightnavigation
  },
  plugins:[createLogger()]
})
