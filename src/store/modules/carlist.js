import {getMasterDataList,getMasterDataListAdd} from "@/services/index"
const state={
    curData:[],
    Page: 1,
    PageSize: 30
    }
   
   const mutations={
     getCurlit(state,payload){
      payload=payload.map(item=>{
          item.Url= item.Url.replace('{0}',3) 
          return item
       })
       state.curData=payload
       console.log( state.curData)
     },
     addGetCurlits(state,payload){
      payload=payload.map(item=>{
        item.Url= item.Url.replace('{0}',3)
        return item
      })
      state.curData=state.curData.concat(payload)
      //  state.curData=state.curData.List.concat(payload.List)
      //  console.log('payload-------------------------',state.curData)
     }
    }
   const actions= {
        async getMasterDataList({commit, state},payload){
            let {SerialID,Id,Page,PageSize}=payload
            state.SerialID=SerialID
            state.Id=Id
            let res=await getMasterDataList(SerialID,Id,Page,PageSize)
            console.log('res---------------------------',res)
            commit("getCurlit",res.data.List)   
        },
        async getMasterDataListAdd({commit, state},payload){
          // console.log(payload)
          // console.log(`/v2-car-getCategoryImageList.html?${payload}`)
          let SerialID=state.SerialID
          let Id =state.Id
          let Page=payload
          let PageSize=state.PageSize
          let res=await getMasterDataListAdd(SerialID,Id,Page,PageSize)
          commit('addGetCurlits',res.data.List)
        }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}