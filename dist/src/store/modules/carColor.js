import {getCarColor} from '@/services/index'
const state = {
    colorList: [],
    curIndex:0,
    colorItem:[]
}
const mutations = {
    updateColor(state, payload){
        for(let item in payload){
            state.colorList.push({[item]:payload[item]})
        }
        state.colorList=state.colorList.sort((a,b)=>{
            return Object.keys(b)- Object.keys(a)
        })
        state.colorItem= Object.values(state.colorList[state.curIndex])[0]
    },
    colorIndex(state,payload){
        state.curIndex=payload
        state.colorItem=Object.values(state.colorList[payload])[0]

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