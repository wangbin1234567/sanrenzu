import {getMasterListQuout} from "@/services/index"
const state={
    quoutDataCty:{}
}
const mutations={
    setQuout(state,payload){
        state.quoutDataCty=payload
    }
}
const actions= {
   async getMasterListQuout({commit}){
       let res=await getMasterListQuout()
       console.log(res.data)
       commit('setQuout',res.data)
   }
}

    export default {
      namespaced:true,
      state,
      mutations,
      actions
    }