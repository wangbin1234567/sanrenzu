import {getCarColor} from '@/services/index'
const state = {
    colorList: {}
}
const mutations = {
    updateColor(state, payload){
        state.colorList=payload
    }
}

const actions = {
    async getCarColor({commit},payload){
        let res = await getCarColor(payload);
        commit('updateColor', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}