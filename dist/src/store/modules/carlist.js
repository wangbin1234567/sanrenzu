import {getMasterDataList,getMasterDataListAdd} from "@/services/index"
const state={
    curData:[]
    }
   const mutations={
     getCurlit(state,payload){
      payload.List=payload.List.map(item=>{
          item.Url= item.Url.replace('{0}',3) 
          return item
       })
       state.curData=payload
     },
     addGetCurlits(state,payload){
      payload.List.forEach(item=>{
        item.Url= item.Url.replace('{0}',3)
        state.curData.List.push(item)
      })
     }
    }
   const actions= {
        async getMasterDataList({commit},payload){
          
          let params=payload
            let res=await getMasterDataList(params)
             commit("getCurlit",res.data)
            
        },
        async getMasterDataListAdd({commit},payload){
          console.log(payload)
          let params=payload
          let res=await getMasterDataListAdd(params)
          console.log(res.data)
          commit('addGetCurlits',res.data)
        }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}