import {getCarColor} from '@/services/index'
const state = {
    colorList: {},
    arr : []
}
const mutations = {
    updateColor(state, payload){
        state.colorList=payload
        let obj=JSON.parse(JSON.stringify(state.colorList))
        state.arr=Object.values(obj)[0]  
    },
    setArr(state,payload){
        state.arr=payload
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