import { getMasterSeries } from "@/services/index"
const state = {
  seriesDate: [],
  EnlargementImgfalg: false,
  colorId: '',  // 选择的车系颜色
  carId: '',  // 选择的车款
}
const mutations = {
  getSeries(state, payload) {
    state.seriesDate = payload.map(item => {
      item.List = item.List.map(ite => {
            ite.Url = ite.Url.replace('{0}', 3)
            return ite
        })
      return item
    })
  },
  imgFalg() {
    state.EnlargementImgfalg = true
  },
  setColorId(state, payload){
    state.colorId = payload;
  },
  setCarId(state, payload){
    state.carId = payload;
  }
}
const actions = {
  async getMasterSeries({ commit, state }, payload) {
    let params = {SerialID:payload};
    // 判断是否选择颜色
    if (state.colorId){
      params.ColorID = state.colorId;
    }
    // 判断是否选择车款
    if (state.carId){
      params.CarId = state.carId;
    }
    let res = await getMasterSeries(params)
    commit('getSeries', res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}