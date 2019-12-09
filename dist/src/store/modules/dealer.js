import {getDealer} from '@/services/index'
const state = {
    dealerList: []
}
const mutations = {
    updateDealerList(state, payload){
      state.dealerList=payload
    }
}

const actions = {
    async getDealer({commit},payload){
        let params=payload
        let res = await getDealer(params);
        console.log(res)
        commit('updateDealerList', res.data.list);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}