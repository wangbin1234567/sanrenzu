import {getMasterSeries} from "@/servicer/index"


const state={
    seriesDate:[],
    EnlargementImgfalg:false
    }
   const mutations={
     getSeries(state,payload){
      state.seriesDate=payload.map(item=>{
        item.List=item.List.map(ite=>{
          ite.Url= ite.Url.replace('{0}',3) 
          return ite
        })
          return item
      })
      console.log(state.seriesDate)
     },
     imgFalg(){
      state.EnlargementImgfalg=true
     }
    }
   const actions= {
   async getMasterSeries({commit},payload){
       
       let res=await getMasterSeries(payload)
       commit('getSeries',res)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}