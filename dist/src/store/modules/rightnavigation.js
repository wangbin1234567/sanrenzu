import {rightList} from '@/services/index'
const state = {
    listMasterID: []
}
const mutations = {
    updateListMasterID(state, payload){
      state.listMasterID=payload
    }
}

const actions = {
    async rightList({commit},payload){
        let res = await rightList(payload);
        console.log('res...', res);
        commit('updateListMasterID', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}