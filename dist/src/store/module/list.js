import {getMasterList} from "@/servicer/index.js"
const state={
    listMasterID:[]
}
const mutations={
    getDatalist(state,payload){
        state.listMasterID=payload
    }
}
const actions= {
    async getMasterList({commit},payload){
        let res=await getMasterList(payload)
        console.log(res)
        commit('getDatalist',res)
    }
}

    export default {
      namespaced:true,
      state,
      mutations,
      actions
    }