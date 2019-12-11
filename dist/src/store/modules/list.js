import {getMasterList} from "@/services/index"
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
        commit('getDatalist',res.data)
    }
}

    export default {
      namespaced:true,
      state,
      mutations,
      actions
    }
