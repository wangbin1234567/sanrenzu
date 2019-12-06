import {getCityAddress} from '@/services/index'
const state = {
    address: ""
}
const mutations = {
    updateAddress(state, payload){
      state.address=payload
    }
}

const actions = {
    async getCityAddress({commit}){
        let res = await rightList();
        commit('updateAddress', res.data.data.CityID);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}