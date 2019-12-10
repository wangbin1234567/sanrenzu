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
<<<<<<< HEAD
        // console.log(res)
=======
        console.log(res)
>>>>>>> jyh
        commit('getDatalist',res.data)
    }
}

<<<<<<< HEAD
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
=======
    export default {
      namespaced:true,
      state,
      mutations,
      actions
    }
>>>>>>> jyh
