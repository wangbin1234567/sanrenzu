import {getCityAddress} from '@/services/index'
const state = {
    address: "",
    cityID:""
}
const mutations = {
    updateAddress(state, payload){
        state.address=payload.CityName
        state.cityID = payload.CityID
    },
    getListAddress(state, payload){
        state.address=payload.CityName
        state.cityID = payload.CityID
        
    },
}

const actions = {
    async getCityAddress({commit}){
        let res = await getCityAddress();
        commit('updateAddress', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}