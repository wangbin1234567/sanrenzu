import {getMasterDataList,getMasterDataListAdd} from "@/servicer/index"
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
       console.log( state.curData.List)
     },
     addGetCurlits(state,payload){
      payload.List.forEach(item=>{
        item.Url= item.Url.replace('{0}',3)
        state.curData.List.push(item)
      })
      //  state.curData=state.curData.List.concat(payload.List)
       console.log('payload-------------------------',state.curData)
     }
    }
   const actions= {
        async getMasterDataList({commit},payload){
            let {SerialID,Id,Page,PageSize}=payload
            let res=await getMasterDataList(SerialID,Id,Page,PageSize)
             commit("getCurlit",res)
            
        },
        async getMasterDataListAdd({commit},payload){
          let {SerialID,Id,Page,PageSize}=payload
          console.log(payload)
          // console.log(`/v2-car-getCategoryImageList.html?${payload}`)
          let res=await getMasterDataListAdd(SerialID,Id,Page,PageSize)
          commit('addGetCurlits',res)
        }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}