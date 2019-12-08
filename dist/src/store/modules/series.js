import {getMasterSeries} from "@/services/index"


const state={
    seriesDate:[],
    EnlargementImgfalg:false,
    seriesIndex:null,
    carAllImg:false
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
     seriesfalg(state){
      state.EnlargementImgfalg=false
      state.carAllImg=false
   },
     imgFalg(state,payload){
       state.seriesIndex=payload+1
      state.EnlargementImgfalg=true
     },
     
     setSeries(state,payload){
          state.seriesIndex=payload
     },
     setCarAllImg(state){
        state.carAllImg=true
     }
    }
   const actions= {
   async getMasterSeries({commit},payload){
       let res=await getMasterSeries(payload)
       commit('getSeries',res.data)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}