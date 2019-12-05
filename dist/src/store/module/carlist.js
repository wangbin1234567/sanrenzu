import {getMasterDataList} from "@/servicer/index"
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
        state.curData.push(payload)
     }
    }
   const actions= {
        async getMasterDataList({commit},payload){
            let {SerialID,Id,Page,PageSize}=payload
            let res=await getMasterDataList(SerialID,Id,Page,PageSize)
            console.log(res)
             commit("getCurlit",res)
             commit('addGetCurlits',res)
        }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}