import {getMasterStair} from "@/servicer/index.js"

const state={
    cityData:[]
    }
   const mutations={
    Stairlist(state,payload){
        state.cityData=payload
        console.log(state.cityData)
    }   
    }
   const actions= {
        async getMasterStair({commit}){
            let res=await getMasterStair()
            commit('Stairlist',res)
        }
    }

export default {
      namespaced:true,
      state,
      mutations,
      actions
    }