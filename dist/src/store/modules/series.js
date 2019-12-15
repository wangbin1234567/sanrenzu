import {getMasterSeries} from "@/services/index"


const state={
    seriesDate:[],
    EnlargementImgfalg:false,
    seriesIndex:null,
    carAllImg:false,
    colorId: "",
    carId: ""
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
     },
     setCarAllImg(state){
        state.carAllImg=true
     },
     seriesfalg(state){
      state.EnlargementImgfalg=false
      state.carAllImg=false
   },
   setColorId(state,payload){
     state.colorId=payload
   },
   setCarId(state,payload){
    state.carId=payload
   }
    }
   const actions= {
   async getMasterSeries({commit,state},payload){
     let params={SerialID: payload}
     if(state.colorId){
      params.ColorID=state.colorId
     }
     if(state.carId){
      params.CarId=state.carId
     }
       let res=await getMasterSeries(params)
       commit('getSeries',res.data)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}