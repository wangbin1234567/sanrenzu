import {getMasterSeries} from "@/services/index"


const state={
    seriesDate:[],
    EnlargementImgfalg:false,
    seriesIndex:null,
    carAllImg:false,
    SerialID:null,
    numberColorId:null,
    numberCarid:null
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
     },
     setColorId(state,payload){
        state.numberColorId=payload
     },
     setCarid(state,payload){
        state.numberCarid=payload
     }
    }
    // getMasterSeries
   const actions= {
   async getMasterSeries({commit,state},payload){
     let params={SerialID:payload}
        if(state.numberColorId){
          params.ColorID=state.numberColorId
        }
        if(state.numberCarid){
          params.CarId=state.numberCarid
        }
        console.log(params)
       let res=await getMasterSeries(params)
       console.log(res)
       await commit('getSeries',res.data)
     
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}