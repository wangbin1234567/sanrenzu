import {getMasterSeries} from "@/servicer/index"


const state={
    seriesDate:[],
    EnlargementImgfalg:false,
    seriesIndex:null
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
     },
     imgFalg(state,payload){
       state.seriesIndex=payload+1
      state.EnlargementImgfalg=true
     },
     
     setSeries(state,payload){
         
          state.seriesIndex=payload

     }
    }
   const actions= {
   async getMasterSeries({commit},payload){
       
       let res=await getMasterSeries(payload)
       console.log('jzm----------------------',res)
       commit('getSeries',res)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}