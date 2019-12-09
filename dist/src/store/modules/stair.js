import {getMasterStair} from "@/services/index.js"

const state={
    cityData:[]
    }
   const mutations={
    Stairlist(state,payload){
        state.cityData=payload
    }   
    }
   const actions= {
        async getMasterStair({commit}){
            let res=await getMasterStair()
            commit('Stairlist',res.data)
        }
    }

export default {
      namespaced:true,
      state,
      mutations,
      actions
    }