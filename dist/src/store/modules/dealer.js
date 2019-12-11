import {getDealer} from '@/services/index'
const state = {
    dealerList: []
}
const mutations = {
    updateDealerList(state, payload){
      state.dealerList=payload
    //   window.console.log(state.dealerList)
    }
}

const actions = {
    async getDealer({commit},payload){
        let res = await getDealer(payload);
        commit('updateDealerList', res.data.list);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}