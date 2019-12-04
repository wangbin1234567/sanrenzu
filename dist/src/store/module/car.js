import axios from "@/utils/request.js" 

 const state={
     list:[]
  }
 const mutations={
     getlist(state,payload){
         state.list=payload
     }
  }
 const actions= {
     async getInfoAndListById({commit}){
         let res=await getInfoAndListById();
         commit("getlist",res.data)
     }
  }
  export default {
      namespaced: true,
    state,
    mutations,
    actions
  }