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
            let {SerialID,Id,Page,PageSize}=payload
            let res=await getMasterDataList(SerialID,Id,Page,PageSize)
             commit("getCurlit",res.data)
            
        },
        async getMasterDataListAdd({commit},payload){
          let {SerialID,Id,Page,PageSize}=payload
          let res=await getMasterDataListAdd(SerialID,Id,Page,PageSize)
          commit('addGetCurlits',res.data)
        }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}