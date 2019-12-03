 import {getMasterStairSite} from "@/servicer/index.js"
 
 const state={
    provinceidData:[],
    flag:false
    }
   const mutations={
    provinceid(state,payload){
        state.provinceidData=payload
    },
    falg(state){
      state.flag=true
    },
    ctxfalg(state){
      state.flag=false
    }
    }
   const actions= {
   async getMasterStairSite({commit},payload){
    let res=await getMasterStairSite(payload)
    console.log(res)
    commit('provinceid',res)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}